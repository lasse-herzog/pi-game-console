import os
import pygame
import space_invaders.GameController as GameController

WIDTH, HEIGHT = 1024, 600
WINDOW = pygame.display.set_mode((WIDTH, HEIGHT))
FPS = 60

BLACK = (0, 0, 0)


def load_asset(asset):
    return os.path.join('space_invaders', 'assets', asset)


def draw_window():
    pygame.display.update()


def main():
    pygame.mixer.pre_init(22050, -16, 2, 1024)
    pygame.init()
    pygame.mixer.quit()
    pygame.mixer.init(22050, -16, 2, 1024)
    clock = pygame.time.Clock()
    pygame.mixer.music.set_volume(.1)
    pygame.mixer.music.load(load_asset('SpaceInvaders.wav'))
    pygame.mixer.music.play(-1)
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

    # pygame.quit()


if __name__ == "__main__":
    main()
