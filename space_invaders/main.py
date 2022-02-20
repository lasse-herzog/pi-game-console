from turtle import width
import pygame
import GameController

WIDTH, HEIGHT = 1024, 600
WINDOW = pygame.display.set_mode((WIDTH, HEIGHT))
FPS = 60

BLACK = (0, 0, 0)


def draw_window():
    pygame.display.update()


def main():
    clock = pygame.time.Clock()
    gameController = GameController.GameController(WIDTH, HEIGHT)

    run = True
    while run:
        WINDOW.fill(BLACK)
        clock.tick(FPS)
        events = pygame.event.get()
        for event in events:
            if gameController.exit:
                run = False
            elif event.type == pygame.KEYDOWN:
                gameController.input(event.key)

        gameController.update(WINDOW, events)
        gameController.draw(WINDOW)

        draw_window()

    pygame.quit()


if __name__ == "__main__":
    main()
