import pygame
import os
import EnemyFactory

PLAYER_WIDTH = 15
PLAYER_SPEED = 3

ROCKET_WIDTH = 3
ROCKET_SPEED = 5

class Player(EnemyFactory.Entity):
    def __init__(self, scale, posX, posY):
        image = pygame.image.load(os.path.join('Assets', 'player_1.png'))
        super().__init__(image, PLAYER_WIDTH * scale,
                         EnemyFactory.ENEMY_HEIGHT * scale, posX, posY)

    def move(self):
        keys = pygame.key.get_pressed()
        self.rect.move_ip(
            (keys[pygame.K_RIGHT] - keys[pygame.K_LEFT]) * PLAYER_SPEED, 0)

    def draw(self, window):
        window.blit(self.image, self.rect)
        
class Rocket(EnemyFactory.Entity):
    def __init__(self, scale, posX, posY, moveUp):
        image = pygame.image.load(os.path.join('Assets', 'rocket_1.png'))
        image = image if not moveUp else  pygame.transform.rotate(image, 180)
        self.direction = -1 if moveUp else 1
        super().__init__(image, ROCKET_WIDTH * scale,
                         EnemyFactory.ENEMY_HEIGHT * scale, posX, posY)
        
    def update(self, window: pygame.Surface):
        self.rect.move_ip(0, ROCKET_SPEED * self.direction)
        return super().update(window)
