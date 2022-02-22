import sys

import pygame

import pacman.actors as actors
import pacman.maze as maze
from pacman.utils import Directions, TILE_SIZE, GHOST_PHASES_0, GHOST_PHASES_1, GHOST_PHASES_2, FPS
from utils import FONT, BLACK, WHITE

level = 1
last_phase_change = 0

pygame.init()
pygame.display.set_mode((448, 576))
pygame.display.set_caption('Pacman')
screen = pygame.display.get_surface()

font = pygame.freetype.Font(FONT, TILE_SIZE)
clock = pygame.time.Clock()

actor_sprites = pygame.sprite.RenderPlain(actors.pacman, actors.ghosts)
if pygame.joystick.get_count() > 0:
    joystick = pygame.joystick.Joystick(0)
    joystick.init()


def input(events):
    for event in events:
        match event.type:
            case pygame.QUIT:
                sys.exit(0)
            case pygame.KEYDOWN:
                if event.key == pygame.K_UP or event.key == ord('w'):
                    return Directions.UP
                if event.key == pygame.K_LEFT or event.key == ord('a'):
                    return Directions.LEFT
                if event.key == pygame.K_DOWN or event.key == ord('s'):
                    return Directions.DOWN
                if event.key == pygame.K_RIGHT or event.key == ord('d'):
                    return Directions.RIGHT
            case pygame.JOYAXISMOTION:
                axis = [joystick.get_axis(i) for i in range(2)]

                if round(axis[0]) == 1 and round(axis[1]) == 0:
                    return Directions.UP
                if round(axis[0]) == 0 and round(axis[1]) == -1:
                    return Directions.LEFT
                if round(axis[0]) == -1 and round(axis[1]) == 0:
                    return Directions.DOWN
                if round(axis[0]) == 0 and round(axis[1]) == 1:
                    return Directions.RIGHT


def start_level():
    global last_phase_change
    phase = 1
    last_phase_change = pygame.time.get_ticks()
    score_text, score_text_rect = font.render(str(actors.pacman.score), WHITE)

    screen.fill(BLACK)
    maze.tile_sprites.draw(screen)
    maze.pellet_sprites.draw(screen)
    screen.blit(score_text, (TILE_SIZE * 7 - score_text_rect.width, TILE_SIZE))
    pygame.display.flip()

    match level:
        case 1:
            next_phase = GHOST_PHASES_0[0] * 1000
        case 2 | 3 | 4:
            next_phase = GHOST_PHASES_1[0] * 1000
        case _:
            next_phase = GHOST_PHASES_2[0] * 1000

    while True:
        clock.tick(FPS)

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

        pacman_input = input(pygame.event.get())
        if isinstance(pacman_input, Directions):
            actors.pacman.input = pacman_input

        actor_sprites.update()

        score_text, score_text_rect = font.render(str(actors.pacman.score), WHITE)

        screen.fill(BLACK)
        maze.tile_sprites.draw(screen)
        maze.pellet_sprites.draw(screen)
        actor_sprites.draw(screen)
        screen.blit(score_text, (TILE_SIZE * 7 - score_text_rect.width, TILE_SIZE))

        # pygame.display.update([sprite.rect for sprite in maze.tile_sprites])
        pygame.display.update([sprite.rect for sprite in actor_sprites])
        pygame.display.update(pygame.Rect(TILE_SIZE * 7 - score_text_rect.width, TILE_SIZE, score_text_rect.width,
                                          score_text_rect.height))


if __name__ == '__main__':
    start_level()
