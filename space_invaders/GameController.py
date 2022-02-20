from gzip import READ
import os
import pygame
import pygame.sprite as sprite
import Entities

# colors
WHITE = (255, 255, 255)
LIGHT_GRAY = (150, 150, 150)
RED = (255, 0, 0)
GREEN = (0, 255, 0)
BLACK = (0, 0, 0)

# timing variables
ZERO_TIMING = 0
HALF_SECOND_TIMING = 500
ONE_SECOND_TIMING = 1000
ENEMY_MOVEMENT_TIMING = 250
ENEMY_ATTACK_TIMING = 1000
PLAYER_DEAD_BREAK_TIME = 3000

# events
move_enemy_event = pygame.USEREVENT + 1
enemy_attack_event = pygame.USEREVENT + 2
break_event = pygame.USEREVENT + 3


class GameController():

    def __init__(self, width, height):
        pygame.font.init()
        self.width = width
        self.height = height
        self.isPaused = False
        self.isGameOver = True
        self.playerDead = False
        self.hasWon = False
        self.selectedMenuItem = 0
        self.countdown = 3
        self.exit = False
        self.playerImage = pygame.image.load(
            os.path.join('space_invaders\\assets', 'player_1.png'))
        self.fontBig = pygame.font.Font(
            'space_invaders\\Pixeled.ttf', int(45))
        self.fontMedium = pygame.font.Font(
            'space_invaders\\Pixeled.ttf', int(35))
        self.fontSmall = pygame.font.Font(
            'space_invaders\\Pixeled.ttf', int(15))

    def SetStartingConditions(self):
        self.enemies = Entities.BuildEnemyGroup(self.width, self.height, 50)
        self.player = Entities.Player(
            Entities.ENEMY_SCALE, 512, 550, self.enemies.leftEdge, self.enemies.rightEdge)
        self.playerRockets = sprite.Group()
        self.enemyRockets = sprite.Group()
        self.corpses = sprite.Group()
        self.lives = 3
        self.score = 0
        self.isPaused = False
        self.isGameOver = False
        self.hasWon = False
        self.playerDead = True
        self.selectedMenuItem = 0
        self.countdown = 3

        # stopping all timers
        pygame.time.set_timer(move_enemy_event, ZERO_TIMING)
        pygame.time.set_timer(enemy_attack_event, ZERO_TIMING)
        pygame.time.set_timer(break_event, ZERO_TIMING)

        # starting all timers
        pygame.time.set_timer(move_enemy_event, ENEMY_MOVEMENT_TIMING)
        pygame.time.set_timer(enemy_attack_event, ENEMY_ATTACK_TIMING)
        pygame.time.set_timer(break_event, HALF_SECOND_TIMING)

    # handles updates like movement and stuff
    def update(self, screen: pygame.Surface, events):
        if self.isPaused or (self.isGameOver and not self.playerDead and not self.hasWon):
            return

        if self.enemies.isEmpty() and not self.hasWon:
            self.hasWon = True
            self.isGameOver = True
            pygame.time.set_timer(break_event, PLAYER_DEAD_BREAK_TIME)
        elif self.enemies.hasReached(self.player) and not self.isGameOver:
            self.isGameOver = True
            self.playerDead = True
            self.lives = 0
            pygame.time.set_timer(break_event, PLAYER_DEAD_BREAK_TIME)

        for event in events:
            if event.type == break_event:
                if self.countdown == 0:
                    pygame.time.set_timer(
                        break_event, ZERO_TIMING)
                    self.playerDead = False
                    self.hasWon = False
                else:
                    self.countdown -= 1

        if self.isGameOver:
            return

        self.playerRockets.update(screen)
        self.enemyRockets.update(screen)
        self.corpses.update(screen)
        self.ManageCollisions()

        if self.playerDead:
            return

        self.player.move()

        for event in events:
            if event.type == move_enemy_event:
                self.enemies.move(screen)
                self.corpses.empty()
            elif event.type == enemy_attack_event:
                rocket = self.enemies.attack(self.player.rect.centerx)
                if rocket != None:
                    self.enemyRockets.add(rocket)

    def input(self, key: int):
        if self.isPaused:
            if key == pygame.K_ESCAPE:
                self.isPaused = False
                self.selectedMenuItem = 0
            elif key == pygame.K_UP:
                self.selectedMenuItem = 0 if self.selectedMenuItem <= 0 else self.selectedMenuItem - 1
            elif key == pygame.K_DOWN:
                self.selectedMenuItem = 2 if self.selectedMenuItem >= 2 else self.selectedMenuItem + 1
            elif key == pygame.K_SPACE and self.selectedMenuItem == 0:
                self.isPaused = False
            elif key == pygame.K_SPACE and self.selectedMenuItem == 1:
                self.isGameOver = True
                self.isPaused = False
                self.selectedMenuItem = 0
            elif key == pygame.K_SPACE and self.selectedMenuItem == 2:
                self.exit = True
        elif self.isGameOver and not self.playerDead and not self.hasWon:
            if key == pygame.K_UP:
                self.selectedMenuItem = 0
            elif key == pygame.K_DOWN:
                self.selectedMenuItem = 1
            elif key == pygame.K_SPACE and self.selectedMenuItem == 0:
                self.SetStartingConditions()
                self.isGameOver = False
            elif key == pygame.K_SPACE and self.selectedMenuItem == 1:
                self.exit = True
        elif not self.isGameOver:
            if key == pygame.K_ESCAPE:
                self.isPaused = True
                self.selectedMenuItem = 0
            elif key == pygame.K_SPACE and not self.playerDead:
                posX = self.player.rect.centerx - Entities.ROCKET_WIDTH
                posY = self.player.rect.topleft[1] - \
                    Entities.ENEMY_HEIGHT * Entities.ENEMY_SCALE
                rocket = Entities.Rocket(posX, posY, True)
                self.playerRockets.add(rocket)

    def ManageCollisions(self):
        sprite.groupcollide(self.playerRockets, self.enemyRockets, True, True)

        score, corpses = self.enemies.groupcollide(self.playerRockets)
        self.score += score
        self.corpses.add(corpses)

        if sprite.spritecollide(self.player, self.enemyRockets, True):
            self.corpses.add(Entities.Corpse(
                self.player.rect.left, self.player.rect.top))
            pygame.time.set_timer(
                break_event, PLAYER_DEAD_BREAK_TIME)
            self.playerDead = True
            self.lives -= 1

        if self.lives == 0:
            self.isGameOver = True

    def DrawText(self, screen: pygame.Surface):
        top = 0
        spacing = 5

        score = self.fontSmall.render(
            f"Score: {self.score:04d}", False, WHITE)
        screen.blit(score, (0, 0))

        lives = self.fontSmall.render("Lives: ", False, WHITE)
        width, height = lives.get_size()
        scale = height / 2 / Entities.ENEMY_HEIGHT
        image = pygame.transform.scale(
            self.playerImage, (Entities.PLAYER_WIDTH * scale, height/2))
        start = self.width - width - (image.get_width()*3) - (spacing * 3)
        screen.blit(lives, (start, top))

        for i in range(self.lives):
            screen.blit(image, (start + lives.get_width() +
                        i*image.get_width() + i*spacing, height / 4))

    def draw(self, screen: pygame.Surface):
        if self.isGameOver and not self.playerDead and not self.hasWon:
            self.DisplayMainMenu(screen)
            return

        self.DrawText(screen)
        self.enemies.draw(screen)
        self.playerRockets.draw(screen)
        self.enemyRockets.draw(screen)
        self.corpses.draw(screen)
        
        if self.hasWon:
            self.DisplayWin(screen)
            return

        if self.isGameOver and self.playerDead:
            self.DisplayGameOver(screen)
            return

        if self.playerDead and self.countdown > 0:
            self.DisplayCountdown(screen)

        if not self.playerDead:
            self.player.draw(screen)

        if self.isPaused:
            self.DisplayPauseMenu(screen)

    def DisplayPauseMenu(self, screen: pygame.Surface):
        startY = 20

        s = pygame.Surface((self.width, self.height))
        s.set_alpha(200)
        s.fill(BLACK)
        screen.blit(s, (0, 0))

        title = self.fontBig.render("Space Invaders", 0, (255, 29, 28))
        titleSize = title.get_size()
        screen.blit(title, ((self.width-titleSize[0]) / 2, startY))

        startY += titleSize[1] + 40
        option1 = self.fontMedium.render(
            "Continue", 0, WHITE if self.selectedMenuItem == 0 else LIGHT_GRAY)
        option1Size = option1.get_size()
        screen.blit(option1, ((self.width-option1Size[0]) / 2, startY))

        startY += option1Size[1] + 20
        option2 = self.fontMedium.render(
            "Back to menu", 0, WHITE if self.selectedMenuItem == 1 else LIGHT_GRAY)
        option2Size = option2.get_size()
        screen.blit(option2, ((self.width-option2Size[0]) / 2, startY))

        startY += option2Size[1] + 20
        option3 = self.fontMedium.render(
            "Exit", 0, WHITE if self.selectedMenuItem == 2 else LIGHT_GRAY)
        option3Size = option3.get_size()
        screen.blit(option3, ((self.width-option3Size[0]) / 2, startY))

    def DisplayMainMenu(self, screen: pygame.Surface):
        startY = 20

        title = self.fontBig.render("Space Invaders", 0, (255, 29, 28))
        titleSize = title.get_size()
        screen.blit(title, ((self.width-titleSize[0]) / 2, startY))

        startY += titleSize[1] + 40
        option1 = self.fontMedium.render(
            "Start", 0, WHITE if self.selectedMenuItem == 0 else LIGHT_GRAY)
        option1Size = option1.get_size()
        screen.blit(option1, ((self.width-option1Size[0]) / 2, startY))

        startY += option1Size[1] + 20
        option2 = self.fontMedium.render(
            "Exit", 0, WHITE if self.selectedMenuItem == 1 else LIGHT_GRAY)
        option2Size = option2.get_size()
        screen.blit(option2, ((self.width-option2Size[0]) / 2, startY))

    def DisplayGameOver(self, screen: pygame.Surface):
        startY = 200

        s = pygame.Surface((self.width, self.height))
        s.set_alpha(200)
        s.fill(BLACK)
        screen.blit(s, (0, 0))

        gameOver = self.fontMedium.render(
            "Game Over", 0, RED)
        option1Size = gameOver.get_size()
        screen.blit(gameOver, ((self.width-option1Size[0]) / 2, startY))
        
    def DisplayWin(self, screen: pygame.Surface):
        startY = 200

        s = pygame.Surface((self.width, self.height))
        s.set_alpha(200)
        s.fill(BLACK)
        screen.blit(s, (0, 0))

        gameOver = self.fontMedium.render(
            "You have won!", 0, GREEN)
        option1Size = gameOver.get_size()
        screen.blit(gameOver, ((self.width-option1Size[0]) / 2, startY))

    def DisplayCountdown(self, screen: pygame.Surface):
        startY = 200

        s = pygame.Surface((self.width, self.height))
        s.set_alpha(200)
        s.fill(BLACK)
        screen.blit(s, (0, 0))

        gameOver = self.fontMedium.render(
            f"{self.countdown}", 0, RED)
        option1Size = gameOver.get_size()
        screen.blit(gameOver, ((self.width-option1Size[0]) / 2, startY))
