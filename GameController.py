import os
import pygame
import pygame.sprite as sprite
import EnemyFactory
import Player

HEIGHT_HEADER = 0.2
HEIGHT_GAME = 000.6
HEIGHT_FOOTER = 0.2

# the enemies move every 1000ms
ENEMY_MOVEMENT_TIMING = 250
ENEMY_ATTACK_TIMING = 1000

# create a bunch of events
move_enemy_event = pygame.USEREVENT + 1
enemy_attack_event = pygame.USEREVENT + 2


class GameController():

    def __init__(self, width, height, enemyGroup: EnemyFactory.EnemyGroup):
        pygame.font.init()
        self.width = width
        self.height = height
        self.playerImage = pygame.image.load(
            os.path.join('Assets', 'player_1.png'))
        self.font = pygame.font.SysFont(
            'Pixeled', int(30))
        self.enemies = enemyGroup
        self.player = Player.Player(EnemyFactory.ENEMY_SCALE, 512, 550)
        self.playerRockets = sprite.Group()
        self.enemyRockets = sprite.Group()
        self.corpses = sprite.Group()
        self.lives = 3
        self.score = 0

        # set timer for the movement events
        pygame.time.set_timer(move_enemy_event, ENEMY_MOVEMENT_TIMING)
        pygame.time.set_timer(enemy_attack_event, ENEMY_ATTACK_TIMING)

    def update(self, screen: pygame.Surface, events):
        for event in events:
            if event.type == move_enemy_event:
                self.enemies.move(screen)
                self.corpses.empty()
            elif event.type == enemy_attack_event:
                rocket = self.enemies.attack(self.player.rect.centerx)
                if rocket != None:
                    self.enemyRockets.add(rocket)

        self.DrawText(screen)
        self.player.move()
        self.playerRockets.update(screen)
        self.enemyRockets.update(screen)
        self.corpses.update(screen)
        self.ManageCollisions()

    def input(self, key: int):
        if key == pygame.K_SPACE:
            posX = self.player.rect.centerx - EnemyFactory.ROCKET_WIDTH
            posY = self.player.rect.topleft[1] - \
                EnemyFactory.ENEMY_HEIGHT * EnemyFactory.ENEMY_SCALE
            rocket = EnemyFactory.Rocket(
                EnemyFactory.ENEMY_SCALE, posX, posY, True)
            self.playerRockets.add(rocket)

    def ManageCollisions(self):
        sprite.groupcollide(self.playerRockets, self.enemyRockets, True, True)

        score, corpses = self.enemies.groupcollide(self.playerRockets)
        self.score += score
        self.corpses.add(corpses)

        if sprite.spritecollide(self.player, self.enemyRockets, True):  # game over
            self.corpses.add(EnemyFactory.Corpse(EnemyFactory.ENEMY_SCALE, self.player.rect.left, self.player.rect.top))
            self.player.remove()

    def DrawText(self, screen: pygame.Surface):
        top = 4
        spacing = 5

        score = self.font.render(
            f"Score: {self.score:04d}", False, (255, 255, 255))
        screen.blit(score, (0, top))

        lives = self.font.render("Lives: ", False, (255, 255, 255))
        width, height = lives.get_size()
        scale = height / EnemyFactory.ENEMY_HEIGHT
        image = pygame.transform.scale(
            self.playerImage, (Player.PLAYER_WIDTH * scale, height))
        start = self.width - width - (image.get_width()*3) - (spacing * 3)
        screen.blit(lives, (start, top))

        for i in range(self.lives):
            screen.blit(image, (start + lives.get_width() +
                        i*image.get_width() + i*spacing, 0))

    def draw(self, window: pygame.Surface):
        self.enemies.draw(window)
        self.player.draw(window)
        self.playerRockets.draw(window)
        self.enemyRockets.draw(window)
        self.corpses.draw(window)


def BuildGameController(availableWidth, availableHeight) -> GameController:
    headerHeight = 30
    gameHeight = availableHeight - headerHeight

    # Build game
    enemyGroup = EnemyFactory.BuildEnemyGroup(
        availableWidth, gameHeight, headerHeight)
    gameController = GameController(
        availableWidth, availableHeight, enemyGroup)

    return gameController

    # Build footer
