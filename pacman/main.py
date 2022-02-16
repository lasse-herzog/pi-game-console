import os
import sys
from enum import Enum

import pygame
from pygame.locals import *

import maze

TILE_SIZE = 16


class Directions(Enum):
    UP = (0, -1)
    RIGHT = (1, 0)
    DOWN = (0, 1)
    LEFT = (-1, 0)
    NONE = (0, 0)


class Pacman(pygame.sprite.Sprite):
    def __init__(self):
        super().__init__()
        self.is_cornering = False
        self.input = Directions.NONE
        self.direction = Directions.NONE
        self.last_tile = None

        self.image = pygame.image.load(load_asset("pacman_01.png"))
        self.rect = self.image.get_rect(topleft=(8, 56))

    @property
    def tile(self):
        return tiles[(self.rect.centery // TILE_SIZE, self.rect.centerx // TILE_SIZE)]

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
            case Directions.RIGHT:
                distance = self.rect.centerx - self.tile.column * TILE_SIZE
            case Directions.DOWN:
                distance = self.rect.centery - self.tile.row * TILE_SIZE
            case Directions.LEFT:
                distance = 15 - (self.rect.centerx - self.tile.column * TILE_SIZE)

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


def load_asset(asset):
    return os.path.join("assets", asset)


def input(events):
    for event in events:
        if event.type == QUIT:
            sys.exit(0)
        if event.type == pygame.KEYDOWN:
            if event.key == pygame.K_LEFT or event.key == ord('a'):
                return Directions.LEFT
            if event.key == pygame.K_RIGHT or event.key == ord('d'):
                return Directions.RIGHT
            if event.key == pygame.K_UP or event.key == ord('w'):
                return Directions.UP
            if event.key == pygame.K_DOWN or event.key == ord('s'):
                return Directions.DOWN


if __name__ == '__main__':
    pygame.init()
    window = pygame.display.set_mode((448, 576))
    pygame.display.set_caption('Pacman')
    screen = pygame.display.get_surface()
    background = screen.convert().fill((0, 0, 0))
    clock = pygame.time.Clock()
    tiles, maze_sprites = maze.load_level("maze.txt")

    pacman = Pacman()
    actor_sprites = pygame.sprite.RenderPlain(pacman)

    while True:
        clock.tick(60)
        pacman_input = input(pygame.event.get())
        if isinstance(pacman_input, Directions):
            pacman.input = pacman_input
        actor_sprites.update()

        screen.fill([0, 0, 0])
        maze_sprites.draw(screen)
        actor_sprites.draw(screen)
        pygame.display.flip()
