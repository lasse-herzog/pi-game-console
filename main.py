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


def draw_window():
    pygame.display.update()


def main():
    clock = pygame.time.Clock()
    gameController = GameController.BuildGameController(WIDTH, HEIGHT)

    run = True
    while run:
        WINDOW.fill(BLACK)
        clock.tick(FPS)
        events = pygame.event.get()
        for event in events:
            if event.type == pygame.QUIT:
                run = False
            elif event.type == pygame.KEYDOWN and event.key == pygame.K_ESCAPE:
                run = False
            elif event.type == pygame.KEYDOWN:
                gameController.input(event.key)

        gameController.update(WINDOW, events)
        gameController.draw(WINDOW)

        draw_window()

    pygame.quit()


if __name__ == "__main__":
    main()
