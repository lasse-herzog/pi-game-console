import pygame
import os
import EnemyFactory

PLAYER_WIDTH = 15
PLAYER_SPEED = 3



class Player(EnemyFactory.Entity):
    def __init__(self, scale, posX, posY):
        image = pygame.image.load(os.path.join('Assets', 'player_1.png'))
        super().__init__(image, PLAYER_WIDTH * scale,
                         EnemyFactory.ENEMY_HEIGHT * scale, posX, posY)

    def move(self):
        keys = pygame.key.get_pressed()
        self.rect.move_ip(
            (keys[pygame.K_RIGHT] - keys[pygame.K_LEFT]) * PLAYER_SPEED, 0)

    def draw(self, screen):
        screen.blit(self.image, self.rect)
        

