import os
import pygame
import pygame.sprite as sprite
import Entities

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

    def __init__(self, width, height, enemyGroup: Entities.EnemyGroup):
        pygame.font.init()
        self.width = width
        self.height = height
        self.playerImage = pygame.image.load(
            os.path.join('Assets', 'player_1.png'))
        self.fontBig = pygame.font.SysFont(
            'Pixeled', int(60))
        self.fontRegular = pygame.font.SysFont(
            'Pixeled', int(30))
        self.enemies = enemyGroup
        self.player = Entities.Player(Entities.ENEMY_SCALE, 512, 550)
        self.playerRockets = sprite.Group()
        self.enemyRockets = sprite.Group()
        self.corpses = sprite.Group()
        self.lives = 3
        self.score = 0
        self.isPaused = False
        self.isGameOver = True

        # set timer for the movement events
        pygame.time.set_timer(move_enemy_event, ENEMY_MOVEMENT_TIMING)
        pygame.time.set_timer(enemy_attack_event, ENEMY_ATTACK_TIMING)

    # handles updates like movement and stuff
    def update(self, screen: pygame.Surface, events):
        if self.isPaused or self.isGameOver:
            return

        for event in events:
            if event.type == move_enemy_event:
                self.enemies.move(screen)
                self.corpses.empty()
            elif event.type == enemy_attack_event:
                rocket = self.enemies.attack(self.player.rect.centerx)
                if rocket != None:
                    self.enemyRockets.add(rocket)

        self.player.move()
        self.playerRockets.update(screen)
        self.enemyRockets.update(screen)
        self.corpses.update(screen)
        self.ManageCollisions()

    def input(self, key: int):
        if self.isPaused:
            pass
        elif self.isGameOver:
            pass
        else:
            if key == pygame.K_SPACE:
                posX = self.player.rect.centerx - Entities.ROCKET_WIDTH
                posY = self.player.rect.topleft[1] - \
                    Entities.ENEMY_HEIGHT * Entities.ENEMY_SCALE
                rocket = Entities.Rocket(
                    Entities.ENEMY_SCALE, posX, posY, True)
                self.playerRockets.add(rocket)
            elif key == pygame.K_q:
                self.isPaused = True

    def ManageCollisions(self):
        sprite.groupcollide(self.playerRockets, self.enemyRockets, True, True)

        score, corpses = self.enemies.groupcollide(self.playerRockets)
        self.score += score
        self.corpses.add(corpses)

        if sprite.spritecollide(self.player, self.enemyRockets, True):  # game over
            self.corpses.add(Entities.Corpse(
                Entities.ENEMY_SCALE, self.player.rect.left, self.player.rect.top))
            self.player.remove()

    def DrawText(self, screen: pygame.Surface):
        top = 4
        spacing = 5

        score = self.fontRegular.render(
            f"Score: {self.score:04d}", False, (255, 255, 255))
        screen.blit(score, (0, top))

        lives = self.fontRegular.render("Lives: ", False, (255, 255, 255))
        width, height = lives.get_size()
        scale = height / Entities.ENEMY_HEIGHT
        image = pygame.transform.scale(
            self.playerImage, (Entities.PLAYER_WIDTH * scale, height))
        start = self.width - width - (image.get_width()*3) - (spacing * 3)
        screen.blit(lives, (start, top))

        for i in range(self.lives):
            screen.blit(image, (start + lives.get_width() +
                        i*image.get_width() + i*spacing, 0))

    def draw(self, screen: pygame.Surface):
        if self.isGameOver:
            self.DisplayMainMenu(screen)
            return

        self.DrawText(screen)
        self.enemies.draw(screen)
        self.player.draw(screen)
        self.playerRockets.draw(screen)
        self.enemyRockets.draw(screen)
        self.corpses.draw(screen)

        if self.isPaused:
            self.DisplayPauseMenu(screen)

    def DisplayPauseMenu(self, screen:pygame.Surface):
        pass

    def DisplayMainMenu(self, screen:pygame.Surface):
        score = self.fontRegular.render(
            "Space Invaders", False, (255, 29, 28))
        screen.blit(score, (0, 20))
        


def BuildGameController(availableWidth, availableHeight) -> GameController:
    headerHeight = 30
    gameHeight = availableHeight - headerHeight

    # Build game
    enemyGroup = Entities.BuildEnemyGroup(
        availableWidth, gameHeight, headerHeight)
    gameController = GameController(
        availableWidth, availableHeight, enemyGroup)

    return gameController

    # Build footer
