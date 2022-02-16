import sys

import pygame
from pygame.locals import *

import actors
import maze
from pacman.utils import Directions, TILE_SIZE

score = 00


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
    font = pygame.freetype.SysFont("Pixeled", TILE_SIZE)
    window = pygame.display.set_mode((448, 576))
    pygame.display.set_caption('Pacman')
    screen = pygame.display.get_surface()
    background = screen.convert().fill((0, 0, 0))
    clock = pygame.time.Clock()

    maze.load_level("maze.txt")

    blinky = actors.Ghost()
    actor_sprites = pygame.sprite.RenderPlain(actors.pacman, blinky)

    while True:
        clock.tick(60)
        pacman_input = input(pygame.event.get())
        if isinstance(pacman_input, Directions):
            actors.pacman.input = pacman_input
        actor_sprites.update()

        screen.fill([0, 0, 0])
        font.render_to(screen, (TILE_SIZE * 7 - font.get_rect(str(score)).width, TILE_SIZE), str(score),
                       (255, 255, 255))
        maze.sprites.draw(screen)
        actor_sprites.draw(screen)
        pygame.display.flip()
