import sys

import pygame
from pygame.locals import *

import actors
import maze
from pacman.utils import Directions, TILE_SIZE, GHOST_PHASES_0, GHOST_PHASES_1, GHOST_PHASES_2, FPS


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


last_phase_change = 0


def start_level(level):
    global last_phase_change
    phase = 1
    last_phase_change = pygame.time.get_ticks()

    match level:
        case 1:
            next_phase = GHOST_PHASES_0[0] * 1000
        case 2 | 3 | 4:
            next_phase = GHOST_PHASES_1[0] * 1000
        case _:
            next_phase = GHOST_PHASES_2[0] * 1000

    while True:
        if phase < 8 and pygame.time.get_ticks() - last_phase_change > next_phase:
            if phase != 7:
                match level:
                    case 1:
                        next_phase = GHOST_PHASES_0[phase] * 1000
                    case 2 | 3 | 4:
                        next_phase = GHOST_PHASES_1[phase] * 1000
                    case _:
                        next_phase = GHOST_PHASES_2[phase] * 1000
            actors.ghost_state = actors.change_ghost_state(
                actors.GhostStates.SCATTER) if phase % 2 == 0 else actors.change_ghost_state(actors.GhostStates.CHASE)
            phase += 1
            last_phase_change = pygame.time.get_ticks()

        clock.tick(FPS)
        pacman_input = input(pygame.event.get())
        if isinstance(pacman_input, Directions):
            actors.pacman.input = pacman_input
        actor_sprites.update()

        screen.fill([0, 0, 0])
        font.render_to(screen, (TILE_SIZE * 7 - font.get_rect(str(actors.pacman.score)).width, TILE_SIZE),
                       str(actors.pacman.score), (255, 255, 255))
        maze.tile_sprites.draw(screen)
        maze.pellet_sprites.draw(screen)
        actor_sprites.draw(screen)
        pygame.display.flip()


if __name__ == '__main__':
    pygame.init()
    font = pygame.freetype.SysFont("Pixeled", TILE_SIZE)
    window = pygame.display.set_mode((448, 576))
    pygame.display.set_caption('Pacman')
    screen = pygame.display.get_surface()
    background = screen.convert().fill((0, 0, 0))
    clock = pygame.time.Clock()

    # maze.load_level("maze.txt")

    actor_sprites = pygame.sprite.RenderPlain(actors.pacman, actors.ghosts)

    start_level(1)
