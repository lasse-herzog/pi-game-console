from abc import ABCMeta, abstractmethod
from enum import Enum

import pygame

import maze
from pacman import main
from utils import TILE_SIZE, Directions, load_asset, FPS, GHOST_FRIGHT_SPEED, GHOST_SPEED, PACMAN_SPEED


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
                return 15 - (self.rect.centery - self.tile.row * TILE_SIZE)
            case Directions.LEFT:
                return 15 - (self.rect.centerx - self.tile.column * TILE_SIZE)
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
        self.is_cornering = False
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
        self.new_tile = None
        self.next_tile = None
        self.state = GhostStates.HOME

    @property
    @abstractmethod
    def corner_tile(self):
        pass

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

        match self.state:
            case GhostStates.FRIGHT:
                return GHOST_FRIGHT_SPEED[speed_index]
            case GhostStates.DEAD:
                return 320
            case _:
                return GHOST_SPEED[speed_index]

    @property
    @abstractmethod
    def start_tile(self):
        pass

    @property
    def target_tile(self):
        match self.state:
            case GhostStates.SCATTER:
                return self.corner_tile
            case GhostStates.DEAD:
                return self.start_tile
            case _:
                return pacman.tile

    def go_home(self):
        self.state = GhostStates.DEAD
        self.image = pygame.image.load(load_asset("ghost_eyes.png"))

    def exit_home(self):
        self.state = GhostStates.SCATTER
        self.new_tile = self.start_tile
        # self.next_tile = maze.tiles[
        #    self.start_tile.column - pinky.start_tile.column, self.start_tile.row - pinky.start_tile.row]

    def pathfind(self):
        neighbour_tiles = self.next_tile.get_legal_neighbours()

        if self.tile in neighbour_tiles:
            neighbour_tiles.remove(self.tile)
        if self.new_tile in neighbour_tiles:
            neighbour_tiles.remove(self.new_tile)

        tile_with_smallest_distance = neighbour_tiles[0]

        for tile in neighbour_tiles[1:]:
            if tile.distance(self.target_tile) < tile_with_smallest_distance.distance(self.target_tile):
                tile_with_smallest_distance = tile

        self.next_tile = tile_with_smallest_distance

    def reverse_direction(self):
        super().reverse_direction()

        self.next_tile = self.tile
        self.pathfind()

        self.new_tile = self.next_tile
        self.pathfind()

    def update(self):
        pixels = (self.speed + self.rest_pixels) // FPS
        self.rest_pixels = (self.speed + self.rest_pixels) % FPS

        for i in range(pixels):
            if self.tile is self.new_tile:
                match self.state:
                    case GhostStates.HOME:
                        if self.personal_dot_limit < 244 - len(maze.pellet_sprites):
                            self.exit_home()
                        if self.tile is self.start_tile:
                            self.new_tile = self.tile.get_neighbour(self.direction)
                        else:
                            self.new_tile = self.start_tile
                        self.direction = self.tile.get_direction(self.new_tile)
                    case GhostStates.DEAD:
                        if self.tile is self.start_tile:
                            self.state = GhostStates.HOME
                    case _:
                        self.new_tile = self.next_tile
                        self.pathfind()

            if self.position_in_tile == TILE_SIZE // 2:
                self.direction = self.tile.get_direction(self.new_tile)

            self.rect = self.rect.move(self.direction.value)


class Blinky(Ghost):
    def __init__(self):
        super().__init__()
        self.state = GhostStates.SCATTER
        self.image = pygame.image.load(load_asset("blinky.png"))
        self.rect = self.image.get_rect(
            topleft=((self.start_tile.column - 1) * TILE_SIZE, self.start_tile.row * TILE_SIZE - TILE_SIZE // 2))

        self.new_tile = self.start_tile.get_neighbour(self.direction)
        self.next_tile = self.new_tile
        self.pathfind()

    @property
    def corner_tile(self):
        return maze.tiles[26, 4]

    @property
    def personal_dot_limit(self):
        return 0

    @property
    def start_tile(self):
        return maze.tiles[(14, 14)]


class Pinky(Ghost):
    def __init__(self):
        super().__init__()
        self.image = pygame.image.load(load_asset("pinky.png"))
        self.rect = self.image.get_rect(
            topleft=((self.start_tile.column - 1) * TILE_SIZE, self.start_tile.row * TILE_SIZE - TILE_SIZE // 2))

        self.direction = Directions.DOWN
        self.new_tile = self.start_tile.get_neighbour(self.direction)
        self.next_tile = self.tile

    @property
    def corner_tile(self):
        return maze.tiles[1, 4]

    @property
    def personal_dot_limit(self):
        return 0

    @property
    def start_tile(self):
        return maze.tiles[(17, 14)]


class Inky(Ghost):
    def __init__(self):
        super().__init__()
        self.image = pygame.image.load(load_asset("inky.png"))
        self.rect = self.image.get_rect(
            topleft=((self.start_tile.column - 1) * TILE_SIZE, self.start_tile.row * TILE_SIZE - TILE_SIZE // 2))

        self.direction = Directions.UP
        self.new_tile = self.start_tile.get_neighbour(self.direction)
        self.next_tile = self.tile

    @property
    def corner_tile(self):
        return maze.tiles[26, 32]

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
        self.image = pygame.image.load(load_asset("clyde.png"))
        self.rect = self.image.get_rect(
            topleft=((self.start_tile.column - 1) * TILE_SIZE, self.start_tile.row * TILE_SIZE - TILE_SIZE // 2))

        self.direction = Directions.UP
        self.new_tile = self.start_tile.get_neighbour(self.direction)
        self.next_tile = self.tile

    @property
    def corner_tile(self):
        return maze.tiles[1, 32]

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


def change_ghost_state(state):
    global ghosts

    for ghost in ghosts:
        if ghost.state is GhostStates.HOME:
            continue
        ghost.state = state
        ghost.reverse_direction()

        match state:
            case GhostStates.FRIGHT:
                ghost.image = pygame.image.load(load_asset("frightened_ghost.png"))
                main.last_phase_change += 5000
            case _:
                ghost.image = pygame.image.load(load_asset("blinky.png"))
