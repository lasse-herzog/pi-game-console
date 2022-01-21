import os
import sys

import pygame
from pygame.locals import *


def input(events):
    for event in events:
        if event.type == QUIT:
            sys.exit(0)
        if event.type == pygame.KEYDOWN:
            if event.key == pygame.K_LEFT or event.key == ord('a'):
                pacman.speed = (-1, 0)
            if event.key == pygame.K_RIGHT or event.key == ord('d'):
                pacman.speed = (1, 0)
            if event.key == pygame.K_UP or event.key == ord('w'):
                pacman.speed = (0, -1)
            if event.key == pygame.K_DOWN or event.key == ord('s'):
                pacman.speed = (0, 1)


def load_image(i):
    image = pygame.image.load(os.path.join("data", i))
    return image, image.get_rect()


class Pacman(pygame.sprite.Sprite):
    old_speed = (0, 0)
    speed = (0, 0)

    def __init__(self):
        pygame.sprite.Sprite.__init__(self)
        self.image, self.rect = load_image("pacman_01.png")

    def update(self):
        self._move()

    def _move(self):
        self.rect = self.rect.move(self.speed)


if __name__ == '__main__':
    pygame.init()

    window = pygame.display.set_mode((224, 248))
    pygame.display.set_caption('Pacman')
    screen = pygame.display.get_surface()

    terrain = pygame.image.load(os.path.join("data", "terrain.png"))
    pacman = Pacman()

    all_sprites = pygame.sprite.RenderPlain(pacman)

    clock = pygame.time.Clock()

    while True:
        clock.tick(60)
        input(pygame.event.get())
        all_sprites.update()
        screen.blit(terrain, (0, 0))
        all_sprites.draw(screen)
        pygame.display.flip()
