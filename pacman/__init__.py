import os
import sys

import pygame
from pygame.locals import *


class Pacman(pygame.sprite.Sprite):
    def __init__(self):
        pygame.sprite.Sprite.__init__(self)

        self.image = load_image("pacman_01.png")
        self.rect = self.image.get_rect(center=(113, 188))
        self.mask = pygame.mask.Mask((16, 16), True)

        self.speed = (0, 0)
        self.old_speed = (0, 0)

    def update(self):
        self._move()

    def _move(self):
        if will_collide_with_wall(self, self.speed):
            if will_collide_with_wall(self, self.old_speed):
                return
            else:
                self.rect = self.rect.move(self.old_speed)
        else:
            self.rect = self.rect.move(self.speed)
            self.old_speed = self.speed


def load_image(i):
    return pygame.image.load(os.path.join("data", i))


def will_collide_with_wall(self, speed):
    return labyrinth_collision_mask.overlap(self.mask, self.rect.move(speed).topleft)


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


if __name__ == '__main__':
    pygame.init()

    window = pygame.display.set_mode((224, 248))

    pygame.display.set_caption('Pacman')
    screen = pygame.display.get_surface()

    labyrinth = load_image("labyrinth.png")
    labyrinth_collision_mask = pygame.mask.from_surface(load_image("labyrinth_collision_map.png"))

    pacman = Pacman()

    all_sprites = pygame.sprite.RenderPlain(pacman)

    clock = pygame.time.Clock()

    while True:
        clock.tick(60)
        input(pygame.event.get())
        all_sprites.update()

        screen.fill([0, 0, 0])
        screen.blit(labyrinth, (0, 0))

        all_sprites.draw(screen)
        pygame.display.flip()
