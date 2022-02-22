from abc import ABCMeta, abstractmethod
from enum import Enum
from math import sqrt

import pygame

import pacman.maze as maze
import pacman.main as main
from pacman.utils import TILE_SIZE, Directions, load_asset, FPS, GHOST_FRIGHT_SPEED, GHOST_SPEED, PACMAN_SPEED


class Actor(pygame.sprite.Sprite, metaclass=ABCMeta):
    @abstractmethod
    def __init__(self):
        super().__init__()
        self.direction = Directions.NONE
        self.rest_pixels = 0

    @property
    def position_in_tile(self):
        match self.direction:
            case Directions.UP:
                return TILE_SIZE - (self.rect.centery + 1 - self.tile.row * TILE_SIZE)
            case Directions.LEFT:
                return TILE_SIZE - (self.rect.centerx + 1 - self.tile.column * TILE_SIZE)
            case Directions.DOWN:
                return self.rect.centery - self.tile.row * TILE_SIZE
            case Directions.RIGHT:
                return self.rect.centerx - self.tile.column * TILE_SIZE

    @property
    @abstractmethod
    def speed(self):
        pass

    @property
    def tile(self):
        return maze.tiles[(self.rect.centery // TILE_SIZE, self.rect.centerx // TILE_SIZE)]

    def reverse_direction(self):
        self.direction = Directions((self.direction.value[0] * -1, self.direction.value[1] * -1))


class Pacman(Actor):
    def __init__(self):
        super().__init__()
        self.rest_pixels = 0
        self.score = 0
        self.input = Directions.NONE

        self.image = pygame.image.load(load_asset("pacman_01.png"))
        self.rect = self.image.get_rect(topleft=(8, 56))

    @property
    def speed(self):
        if main.level == 1:
            return PACMAN_SPEED[0]
        elif main.level < 5:
            return PACMAN_SPEED[1]
        elif main.level < 21:
            return PACMAN_SPEED[2]
        else:
            return PACMAN_SPEED[3]

    def update(self):
        pixels = (self.speed + self.rest_pixels) // FPS
        self.rest_pixels = (self.speed + self.rest_pixels) % FPS

        for i in range(pixels):
            if self.direction is Directions.NONE:
                if self.input is not Directions.NONE and self.tile.has_legal_neighbour(self.input):
                    self.direction = self.input
                else:
                    return

            if self.position_in_tile < TILE_SIZE // 2:
                if self.tile.has_legal_neighbour(self.input):
                    if self.direction is self.input or (
                            self.direction.value[0] + self.input.value[0],
                            self.direction.value[1] + self.input.value[1]) == (0, 0):
                        self.direction = self.input
                    else:
                        self.rect = self.rect.move(self.input.value)
                self.rect = self.rect.move(self.direction.value)
            elif self.position_in_tile == TILE_SIZE // 2:
                if self.tile.has_legal_neighbour(self.input):
                    self.direction = self.input
                elif not self.tile.has_legal_neighbour(self.direction):
                    self.direction = Directions.NONE
                self.rect = self.rect.move(self.direction.value)
            else:
                if self.tile.has_legal_neighbour(self.input):
                    if (
                            self.direction.value[0] + self.input.value[0],
                            self.direction.value[1] + self.input.value[1]) == (
                            0, 0):
                        self.direction = self.input
                    if self.direction is self.input:
                        self.rect = self.rect.move(self.direction.value)
                    else:
                        self.rect = self.rect.move(self.input.value)
                        self.rect = self.rect.move((self.direction.value[0] * -1, self.direction.value[1] * -1))
                elif not self.tile.has_legal_neighbour(self.direction):
                    self.direction = Directions.NONE
                else:
                    self.rect = self.rect.move(self.direction.value)

        if self.tile.pellet is not None:
            if isinstance(self.tile.pellet, maze.PowerPellet):
                change_ghost_state(GhostStates.FRIGHT)
            self.score += self.tile.pellet.points
            self.tile.pellet.kill()
            self.tile.pellet = None

        for ghost in ghosts:
            if self.tile is ghost.tile:
                match ghost.state:
                    case GhostStates.FRIGHT:
                        ghost.go_home()
                    case GhostStates.DEAD:
                        pass
                    case _:
                        # TODO restart level
                        pass


class Ghost(Actor):
    @abstractmethod
    def __init__(self):
        super().__init__()
        self.direction = Directions.LEFT
        self.leaving_home = False
        self.new_tile = None
        self.next_tile = None
        self.reverse_direction_on_next_tile = False
        self.state = GhostStates.HOME

    @property
    @abstractmethod
    def chase_tile(self):
        pass

    @property
    @abstractmethod
    def corner_tile(self):
        pass

    @property
    @abstractmethod
    def default_image(self):
        pass

    @property
    @abstractmethod
    def home_exit_tile(self):
        pass

    @property
    def image(self):
        match self.state:
            case GhostStates.FRIGHT:
                return pygame.image.load(load_asset("frightened_ghost.png"))
            case GhostStates.DEAD:
                return pygame.image.load(load_asset("ghost_eyes.png"))
            case _:
                return self.default_image

    @property
    @abstractmethod
    def personal_dot_limit(self):
        pass

    @property
    def speed(self):
        if main.level == 1:
            speed_index = 0
        elif main.level < 5:
            speed_index = 1
        elif main.level < 21:
            speed_index = 2
        else:
            speed_index = 3

        if type(self.tile) is maze.TunnelTile or type(self.tile) is maze.DoorTile:
            return 50

        match self.state:
            case GhostStates.FRIGHT:
                return GHOST_FRIGHT_SPEED[speed_index]
            case GhostStates.DEAD:
                return 240
            case _:
                return GHOST_SPEED[speed_index]

    @property
    @abstractmethod
    def start_tile(self):
        pass

    @property
    def target_tile(self):
        if self.leaving_home:
            return maze.tiles[14, 14]
        match self.state:
            case GhostStates.SCATTER:
                return self.corner_tile
            case GhostStates.DEAD:
                return self.start_tile
            case _:
                return self.chase_tile

    def go_home(self):
        self.state = GhostStates.DEAD

    def exit_home(self):
        self.leaving_home = True
        self.state = ghost_phase
        self.new_tile = self.start_tile
        self.next_tile = self.home_exit_tile

    def pathfind(self):
        neighbour_tiles = self.next_tile.get_legal_neighbours()

        if self.tile in neighbour_tiles:
            neighbour_tiles.remove(self.tile)
        if self.new_tile in neighbour_tiles:
            neighbour_tiles.remove(self.new_tile)
        for tile in neighbour_tiles:
            if type(tile) is maze.DoorTile and not self.leaving_home and self.state is not GhostStates.DEAD:
                neighbour_tiles.remove(tile)

        if len(neighbour_tiles) == 0:
            return self.new_tile
        tile_with_smallest_distance = neighbour_tiles[0]

        for tile in neighbour_tiles[1:]:
            if tile.distance(self.target_tile) < tile_with_smallest_distance.distance(self.target_tile):
                tile_with_smallest_distance = tile

        self.next_tile = tile_with_smallest_distance

    def reverse_direction(self):
        super().reverse_direction()

        self.new_tile = self.tile.get_neighbour(self.direction)
        self.next_tile = self.new_tile
        self.pathfind()

    def update(self):
        pixels = (self.speed + self.rest_pixels) // FPS
        self.rest_pixels = (self.speed + self.rest_pixels) % FPS

        for i in range(pixels):
            if self.tile is self.new_tile:
                if self.reverse_direction_on_next_tile:
                    self.reverse_direction_on_next_tile = False
                    self.reverse_direction()
                if self.tile is self.target_tile:
                    if self.leaving_home:
                        self.leaving_home = False
                    elif self.state is GhostStates.DEAD:
                        self.state = GhostStates.HOME
                if self.state is GhostStates.HOME:
                    if self.personal_dot_limit < 248 - len(maze.pellet_sprites):
                        self.exit_home()
                    elif self.tile is self.start_tile:
                        self.new_tile = self.tile.get_neighbour(self.direction)
                    else:
                        self.new_tile = self.start_tile
                        self.direction = self.tile.get_direction(self.new_tile)
                else:
                    self.new_tile = self.next_tile
                    self.pathfind()

            if self.position_in_tile == TILE_SIZE // 2:
                self.direction = self.tile.get_direction(self.new_tile)

            self.rect = self.rect.move(self.direction.value)


class Blinky(Ghost):
    def __init__(self):
        super().__init__()
        self.state = GhostStates.SCATTER
        self.rect = self.image.get_rect(
            topleft=((self.start_tile.column - 1) * TILE_SIZE, (self.start_tile.row - 3) * TILE_SIZE - TILE_SIZE // 2))

        self.new_tile = self.tile.get_neighbour(self.direction)
        self.next_tile = self.new_tile
        self.pathfind()

    @property
    def chase_tile(self):
        return pacman.tile

    @property
    def corner_tile(self):
        return maze.tiles[(4, 26)]

    @property
    def default_image(self):
        return pygame.image.load(load_asset("blinky.png"))

    @property
    def home_exit_tile(self):
        return self.start_tile.get_neighbour(Directions.UP)

    @property
    def personal_dot_limit(self):
        return 0

    @property
    def start_tile(self):
        return maze.tiles[(17, 14)]


class Pinky(Ghost):
    def __init__(self):
        super().__init__()
        self.rect = self.image.get_rect(
            topleft=((self.start_tile.column - 1) * TILE_SIZE, self.start_tile.row * TILE_SIZE - TILE_SIZE // 2))

        self.direction = Directions.DOWN
        self.new_tile = self.start_tile.get_neighbour(self.direction)
        self.next_tile = self.tile

    @property
    def chase_tile(self):
        return pacman.tile.get_neighbour(pacman.direction, 4)

    @property
    def corner_tile(self):
        return maze.tiles[(4, 1)]

    @property
    def default_image(self):
        return pygame.image.load(load_asset("pinky.png"))

    @property
    def home_exit_tile(self):
        return self.start_tile.get_neighbour(Directions.UP)

    @property
    def personal_dot_limit(self):
        return 0

    @property
    def start_tile(self):
        return maze.tiles[(17, 14)]


class Inky(Ghost):
    def __init__(self):
        super().__init__()
        self.rect = self.image.get_rect(
            topleft=((self.start_tile.column - 1) * TILE_SIZE, self.start_tile.row * TILE_SIZE - TILE_SIZE // 2))

        self.direction = Directions.UP
        self.new_tile = self.start_tile.get_neighbour(self.direction)
        self.next_tile = self.tile

    @property
    def chase_tile(self):
        tile_ahead = pacman.tile.get_neighbour(pacman.direction, 2)

        row_diff = tile_ahead.row - blinky.tile.row
        column_diff = tile_ahead.column - blinky.tile.column

        row_direction = Directions.UP if row_diff < 0 else Directions.DOWN
        column_direction = Directions.LEFT if column_diff < 0 else Directions.RIGHT

        return tile_ahead.get_neighbour(row_direction, abs(row_diff)).get_neighbour(column_direction, abs(column_diff))

    @property
    def corner_tile(self):
        return maze.tiles[(32, 26)]

    @property
    def default_image(self):
        return pygame.image.load(load_asset("inky.png"))

    @property
    def home_exit_tile(self):
        return self.start_tile.get_neighbour(Directions.RIGHT)

    @property
    def personal_dot_limit(self):
        if main.level == 1:
            return 30
        else:
            return 0

    @property
    def start_tile(self):
        return maze.tiles[(17, 12)]


class Clyde(Ghost):
    def __init__(self):
        super().__init__()
        self.rect = self.image.get_rect(
            topleft=((self.start_tile.column - 1) * TILE_SIZE, self.start_tile.row * TILE_SIZE - TILE_SIZE // 2))

        self.direction = Directions.UP
        self.new_tile = self.start_tile.get_neighbour(self.direction)
        self.next_tile = self.tile

    @property
    def chase_tile(self):
        return self.corner_tile if sqrt(self.tile.distance(pacman.tile)) < 8 else pacman.tile

    @property
    def corner_tile(self):
        return maze.tiles[(32, 1)]

    @property
    def default_image(self):
        return pygame.image.load(load_asset("clyde.png"))

    @property
    def home_exit_tile(self):
        return self.start_tile.get_neighbour(Directions.LEFT)

    @property
    def personal_dot_limit(self):
        if main.level == 1:
            return 90
        elif main.level == 2:
            return 50
        else:
            return 0

    @property
    def start_tile(self):
        return maze.tiles[(17, 16)]


# TODO multiple ghosts

class GhostStates(Enum):
    HOME = 0
    SCATTER = 1
    CHASE = 2
    FRIGHT = 3
    DEAD = 4


maze.load_level("maze.txt")

pacman = Pacman()

blinky = Blinky()
pinky = Pinky()
inky = Inky()
clyde = Clyde()

ghosts = [blinky, pinky, inky, clyde]
ghost_phase = GhostStates.SCATTER


def change_ghost_state(state):
    global ghosts
    global ghost_phase

    for ghost in ghosts:
        if ghost.state is GhostStates.DEAD or ghost.state is GhostStates.HOME:
            continue

        ghost.state = state
        if not ghost.leaving_home:
            ghost.reverse_direction_on_next_tile = True

        match state:
            case GhostStates.FRIGHT:
                main.last_phase_change += 5000
            case GhostStates.SCATTER | GhostStates.CHASE:
                ghost_phase = state
