import pygame

import maze
from utils import TILE_SIZE, load_asset, Directions


class Pacman(pygame.sprite.Sprite):
    def __init__(self):
        super().__init__()
        self.is_cornering = False
        self.input = Directions.NONE
        self.direction = Directions.NONE

        self.image = pygame.image.load(load_asset("pacman_01.png"))
        self.rect = self.image.get_rect(topleft=(8, 56))

    @property
    def tile(self):
        return maze.tiles[(self.rect.centery // TILE_SIZE, self.rect.centerx // TILE_SIZE)]

    def update(self):
        distance = 0

        if self.direction is Directions.NONE:
            if self.input is not Directions.NONE and self.tile.has_legal_neighbour(self.input):
                self.direction = self.input
            else:
                return

        match self.direction:
            case Directions.UP:
                distance = 15 - (self.rect.centery - self.tile.row * TILE_SIZE)
            case Directions.LEFT:
                distance = 15 - (self.rect.centerx - self.tile.column * TILE_SIZE)
            case Directions.DOWN:
                distance = self.rect.centery - self.tile.row * TILE_SIZE
            case Directions.RIGHT:
                distance = self.rect.centerx - self.tile.column * TILE_SIZE

        if distance < TILE_SIZE // 2:
            if self.tile.has_legal_neighbour(self.input):
                if self.direction is self.input or (
                        self.direction.value[0] + self.input.value[0],
                        self.direction.value[1] + self.input.value[1]) == (0, 0):
                    self.direction = self.input
                else:
                    self.rect = self.rect.move(self.input.value)
            self.rect = self.rect.move(self.direction.value)
        elif distance == TILE_SIZE // 2:
            if self.tile.has_legal_neighbour(self.input):
                self.direction = self.input
            elif not self.tile.has_legal_neighbour(self.direction):
                self.direction = Directions.NONE
            self.rect = self.rect.move(self.direction.value)
        else:
            if self.tile.has_legal_neighbour(self.input):
                if (self.direction.value[0] + self.input.value[0], self.direction.value[1] + self.input.value[1]) == (
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


class Ghost(pygame.sprite.Sprite):
    def __init__(self):
        super().__init__()
        self.direction = Directions.NONE
        self.old_tile = None
        self.next_tile = maze.tiles[(14, 13)]

        self.image = pygame.image.load(load_asset("blinky.png"))
        self.rect = self.image.get_rect(topleft=(208, 216))

    @property
    def target_tile(self):
        return pacman.tile

    @property
    def tile(self):
        return maze.tiles[(self.rect.centery // TILE_SIZE, self.rect.centerx // TILE_SIZE)]

    def pathfind(self):
        neighbour_tiles = self.next_tile.get_legal_neighbours()
        if self.tile in neighbour_tiles:
            neighbour_tiles.remove(self.tile)
        tile_with_smallest_distance = neighbour_tiles[0]

        for tile in neighbour_tiles[1:]:
            if tile.distance(self.target_tile) < tile_with_smallest_distance.distance(self.target_tile):
                tile_with_smallest_distance = tile

        self.next_tile = tile_with_smallest_distance

    def update(self):
        if self.tile is not self.old_tile:
            self.old_tile = self.tile
            self.direction = self.tile.get_direction(self.next_tile)
            self.pathfind()
        self.rect = self.rect.move(self.direction.value)


pacman = Pacman()
