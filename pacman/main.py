import os
import sys
from enum import Enum

import pygame
from pygame.locals import *

import maze

TILE_SIZE = 16


class Directions(Enum):
    UP = (0, -1)
    DOWN = (0, 1)
    LEFT = (-1, 0)
    RIGHT = (1, 0)
    NONE = (0, 0)


class Pacman(pygame.sprite.Sprite):
    def __init__(self):
        super().__init__()
        self.input = Directions.NONE
        self.direction = Directions.NONE

        self.image = pygame.image.load(load_asset("pacman_01.png"))
        self.rect = self.image.get_rect(topleft=(8, 56))

    @property
    def tile(self):
        return tiles[(self.rect.centery // TILE_SIZE, self.rect.centerx // TILE_SIZE)]

    def entered_new_tile(self):
        match self.direction:
            case Directions.UP:
                if (self.rect.bottom - 24 - self.tile.row * TILE_SIZE) <= 0:
                    return True
            case Directions.RIGHT:
                if (self.tile.column + 1) * TILE_SIZE - (self.rect.left + 24) <= 0:
                    return True
            case Directions.DOWN:
                if (self.tile.row + 1) * TILE_SIZE - (self.rect.top + 24) <= 0:
                    return True
            case Directions.LEFT:
                if (self.rect.right - 24 - self.tile.column * TILE_SIZE) <= 0:
                    return True
        return False

    def update(self):
        if self.entered_new_tile():
            if not self.tile.has_legal_neighbour(self.direction):
                self.direction = Directions.NONE

        if self.tile.has_legal_neighbour(self.input):
            self.direction = self.input

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
