from turtle import width
import pygame
import GameController

# init pygame
# pygame.init()

WIDTH, HEIGHT = 1024, 600
WINDOW = pygame.display.set_mode((WIDTH, HEIGHT))
FPS = 60

# define colors
ORANGE = (255, 140, 0)
RED = (255, 0, 0)
GREEN = (0, 255, 0)
BLACK = (0, 0, 0)
WHITE = (255, 255, 255)

# the enemies move every 1000ms
ENEMY_MOVEMENT_TIMING = 250

# create a bunch of events
move_enemy_event = pygame.USEREVENT + 1


def draw_window():
    pygame.display.update()


def main():
    clock = pygame.time.Clock()
    gameController = GameController.BuildGameController(WIDTH, HEIGHT)

    # set timer for the movement events
    pygame.time.set_timer(move_enemy_event, ENEMY_MOVEMENT_TIMING)

    run = True
    while run:
        WINDOW.fill(BLACK)
        clock.tick(FPS)
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                run = False
            elif event.type == move_enemy_event:
                gameController.update(WINDOW)
            elif event.type == pygame.KEYDOWN:
                gameController.input(event.key)

        gameController.update(WINDOW)
        gameController.draw(WINDOW)

        draw_window()

    pygame.quit()


if __name__ == "__main__":
    main()
