from enum import Enum

import pygame

import maze
from pacman import main
from utils import TILE_SIZE, Directions, load_asset, FPS


class Actor(pygame.sprite.Sprite):
    def __init__(self):
        super().__init__()

        self.direction = Directions.NONE
        self.speed = 120

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
    def tile(self):
        return maze.tiles[(self.rect.centery // TILE_SIZE, self.rect.centerx // TILE_SIZE)]

    def reverse_direction(self):
        self.direction = Directions((self.direction.value[0] * -1, self.direction.value[1] * -1))


class Pacman(Actor):
    def __init__(self):
        super().__init__()
        self.rest_pixels = 0
        self.speed = 128
        self.score = 0
        self.is_cornering = False
        self.input = Directions.NONE

        self.image = pygame.image.load(load_asset("pacman_01.png"))
        self.rect = self.image.get_rect(topleft=(8, 56))

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
                match ghost_state:
                    case GhostStates.FRIGHT:
                        ghost.go_home()
                    case GhostStates.DEAD:
                        pass
                    case _:
                        pass


class Ghost(Actor):
    def __init__(self):
        super().__init__()
        self.rest_pixels = 0
        self.direction = Directions.LEFT

        self.image = pygame.image.load(load_asset("blinky.png"))
        self.rect = self.image.get_rect(topleft=(208, 216))

        self.new_tile = maze.tiles[(14, 13)]
        self.next_tile = self.new_tile
        self.pathfind()

    @property
    def start_tile(self):
        return maze.tiles[(14, 14)]

    @property
    def target_tile(self):
        match ghost_state:
            case GhostStates.SCATTER:
                return maze.tiles[1, 4]
            case GhostStates.DEAD:
                return self.start_tile
            case _:
                return pacman.tile

    def go_home(self):
        global ghost_state
        ghost_state = GhostStates.DEAD
        self.speed = 240
        self.image = pygame.image.load(load_asset("ghost_eyes.png"))

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
            if ghost_state is GhostStates.FRIGHT:
                pass

            if self.tile is self.new_tile:
                self.new_tile = self.next_tile
                self.pathfind()

            if self.position_in_tile == TILE_SIZE // 2:
                self.direction = self.tile.get_direction(self.new_tile)

            self.rect = self.rect.move(self.direction.value)


class GhostStates(Enum):
    SCATTER = 0
    CHASE = 1
    FRIGHT = 2
    DEAD = 3


maze.load_level("maze.txt")
ghost_state = GhostStates.SCATTER

pacman = Pacman()
blinky = Ghost()

ghosts = [blinky]


def change_ghost_state(state):
    global ghosts
    global ghost_state

    ghost_state = state
    for ghost in ghosts:
        ghost.reverse_direction()

        match state:
            case GhostStates.FRIGHT:
                ghost.image = pygame.image.load(load_asset("frightened_ghost.png"))
                main.last_phase_change += 5000
            case _:
                ghost.image = pygame.image.load(load_asset("blinky.png"))
