import pygame
import os
from typing import List, Tuple
from itertools import count

PLAYER_WIDTH = 15
PLAYER_SPEED = 3

BLACK = (0, 0, 0)

ENEMY_HEIGHT = 8
ENEMY_WIDTH = 12
ENEMY_SCALE = 1

ENEMY_STEPS_PER_WIDTH = 4
ENEMY_SIDE_SPACE = 2

CRAB_WIDTH = 11
OCTOPUS_WIDTH = 12
SQUID_WIDTH = 8
CORPSE_WIDTH = 13

ROCKET_WIDTH = 3
ROCKET_SPEED = 5


class Entity(pygame.sprite.Sprite):
    def __init__(self, image, width, height, posX, posY):
        super().__init__()

        self.image = pygame.transform.scale(image, (width, height))
        self.rect = self.image.get_rect()
        centerX = posX + round(width/2, 0)
        centerY = posY + round(height/2, 0)
        self.rect.center = (centerX, centerY)

    def update(self, window: pygame.Surface):
        return super().update()


class Player(Entity):
    def __init__(self, scale, posX, posY, leftEdge, rightEdge):
        image = pygame.image.load(os.path.join('Assets', 'player_1.png'))
        self.leftEdge = leftEdge
        self.rightEdge = rightEdge
        super().__init__(image, PLAYER_WIDTH * scale,
                         ENEMY_HEIGHT * scale, posX, posY)

    def move(self):
        keys = pygame.key.get_pressed()

        if keys[pygame.K_LEFT] and self.rect.left <= self.leftEdge:
            return

        if keys[pygame.K_RIGHT] and self.rect.right >= self.rightEdge:
            return

        self.rect.move_ip(
            (keys[pygame.K_RIGHT] - keys[pygame.K_LEFT]) * PLAYER_SPEED, 0)

    def draw(self, screen):
        screen.blit(self.image, self.rect)


class Enemy(Entity):
    def __init__(self, images, altImages, width, height, posX, posY, score):
        self.score = score
        self.images = images
        self.altImages = altImages
        self.imageCounter = 0
        self.width = width
        self.height = height
        super().__init__(images[0], width, height, posX, posY)

    def switchImage(self, hasReachedBorder: bool):
        if hasReachedBorder:
            self.images = self.altImages

        self.imageCounter = self.imageCounter + \
            1 if self.imageCounter + 1 < len(self.images) else 0

        self.image = pygame.transform.scale(
            self.images[self.imageCounter], (self.width, self.height))

    def GetScore(self):
        return self.score

    def moveHorizontal(self, moveRight):
        stepWidth = (ENEMY_WIDTH / ENEMY_STEPS_PER_WIDTH) * ENEMY_SCALE
        step = stepWidth if moveRight else stepWidth * (-1)
        self.rect.move_ip(step, 0)

    def moveVertical(self):
        self.rect.move_ip(0, ENEMY_HEIGHT * ENEMY_SCALE)

    def update(self, window: pygame.Surface):
        return super().update(window)


class EnemyGroup():
    def __init__(self):
        self.step = 0
        self.moveRight = True
        self.enemyRows: List['EnemyRow'] = []
        self.leftEdge = 0
        self.rightEdge = 0
        super().__init__()

    def addRow(self, enemyRow: 'EnemyRow'):
        self.enemyRows.append(enemyRow)
        self.leftEdge = enemyRow.leftEdge if enemyRow.leftEdge > self.leftEdge else self.leftEdge
        self.rightEdge = enemyRow.rightEdge if enemyRow.rightEdge > self.rightEdge else self.rightEdge

    def isEmpty(self):
        for row in self.enemyRows:
            for enemy in row.sprites():
                return False

        return True

    def hasReached(self, player: Player):
        for row in reversed(self.enemyRows):
            for enemy in row.sprites():
                if enemy.rect.bottom > player.rect.top:
                    return True
                else:
                    break

        return False

    def move(self, screen: pygame.Surface):
        hasReachedBorder = False
        moveDown = False

        for row in self.enemyRows:
            hasReachedBorder = row.hasReachedBorder(self.moveRight)

            if hasReachedBorder:
                moveDown = True
                self.moveRight = not self.moveRight
                break

        for row in reversed(self.enemyRows):
            if moveDown:
                row.moveVertical(screen)
            else:
                row.moveHorizontal(self.moveRight, screen)

    def attack(self, playerXCenter: int):

        if len(self.enemyRows) is 0:
            return None

        row: EnemyRow = None
        unobstructedEnemies: List[pygame.sprite.Sprite] = []

        for row in reversed(self.enemyRows):
            for enemy in row.sprites():
                isUnobstructed = True
                for unobstructed in unobstructedEnemies:
                    if (enemy.rect.left < unobstructed.rect.left and enemy.rect.right < unobstructed.rect.left) \
                            or (enemy.rect.left > unobstructed.rect.right and enemy.rect.right > unobstructed.rect.right):
                        continue
                    else:
                        isUnobstructed = False
                        break

                if isUnobstructed:
                    unobstructedEnemies.append(enemy)

        shooter: pygame.sprite.Sprite = None

        for enemy in unobstructedEnemies:
            if shooter == None or abs(playerXCenter - enemy.rect.centerx) < abs(playerXCenter - shooter.rect.centerx):
                shooter = enemy

        if shooter == None:
            return None

        posX = shooter.rect.centerx - ROCKET_WIDTH
        posY = shooter.rect.topleft[1] + ENEMY_HEIGHT * ENEMY_SCALE
        return Rocket(posX, posY, False)

    # handles collisions and returns the score

    def groupcollide(self, group: pygame.sprite.Group) -> Tuple[int, List['Corpse']]:
        score = 0
        corpses: List[Corpse] = []

        for row in self.enemyRows:
            for enemy in (pygame.sprite.groupcollide(group, row, True, True).values()):
                score += row.score
                corpses.append(
                    Corpse(enemy[0].rect.left, enemy[0].rect.top))

        return (score, corpses)

    def draw(self, screen: pygame.Surface):
        for row in self.enemyRows:
            row.draw(screen)


class EnemyRow(pygame.sprite.Group):
    def __init__(self, sprites, score, leftEdge, rightEdge):
        self.score = score
        self.leftEdge = leftEdge
        self.rightEdge = rightEdge
        super().__init__(sprites)

    def hasReachedBorder(self, moveRight: bool) -> bool:
        if len(self.sprites()) == 0:
            return False

        left = self.leftEdge + (ENEMY_WIDTH * ENEMY_SCALE) / 2
        right = self.rightEdge + (ENEMY_WIDTH * ENEMY_SCALE) / 2
        first: pygame.sprite.Sprite = self.sprites()[0]
        last: pygame.sprite.Sprite = self.sprites()[-1]
        return first.rect.centerx <= left if not moveRight else last.rect.centerx >= right

    def moveVertical(self, screen: pygame.Surface):
        for enemy in self.sprites():
            rect = pygame.draw.rect(screen, BLACK, (enemy.rect.x, enemy.rect.y,
                                                    ENEMY_WIDTH*ENEMY_SCALE, ENEMY_HEIGHT*ENEMY_SCALE))
            enemy.switchImage(False)
            Enemy.moveVertical(enemy)
            screen.blit(enemy.image, enemy.rect)
            pygame.display.update((rect, enemy.rect))

    def moveHorizontal(self, moveRight: bool, screen: pygame.Surface):
        for enemy in self.sprites():
            rect = pygame.draw.rect(screen, BLACK, (enemy.rect.x, enemy.rect.y,
                                                    ENEMY_WIDTH*ENEMY_SCALE, ENEMY_HEIGHT*ENEMY_SCALE))
            enemy.switchImage(False)
            Enemy.moveHorizontal(enemy, moveRight)
            screen.blit(enemy.image, enemy.rect)
            pygame.display.update((rect, enemy.rect))


class Rocket(Entity):
    def __init__(self, posX, posY, moveUp):
        image = pygame.image.load(os.path.join('Assets', 'rocket_1.png'))
        image = image if not moveUp else pygame.transform.rotate(image, 180)
        self.direction = -1 if moveUp else 1
        super().__init__(image, ROCKET_WIDTH * ENEMY_SCALE,
                         ENEMY_HEIGHT * ENEMY_SCALE, posX, posY)

    def update(self, screen: pygame.Surface):
        self.rect.move_ip(0, ROCKET_SPEED * self.direction)
        return super().update(screen)


class Ufo(Enemy):
    def __init__(self, posX, posY):
        images = [pygame.image.load(os.path.join('Assets', 'ufo.png')),
                  pygame.image.load(os.path.join('Assets', 'ufo.png'))]
        altImages = images
        super().__init__(images, altImages, CRAB_WIDTH *
                         ENEMY_SCALE, ENEMY_HEIGHT * ENEMY_SCALE, posX, posY, 100)


class Crab(Enemy):
    def __init__(self, posX, posY):
        images = [pygame.image.load(os.path.join('Assets', 'crab_white_1.png')),
                  pygame.image.load(os.path.join('Assets', 'crab_white_2.png'))]
        altImages = [pygame.image.load(os.path.join('Assets', 'crab_green_1.png')),
                     pygame.image.load(os.path.join('Assets', 'crab_green_2.png'))]
        super().__init__(images, altImages, CRAB_WIDTH *
                         ENEMY_SCALE, ENEMY_HEIGHT * ENEMY_SCALE, posX, posY, 20)


class Octopus(Enemy):
    def __init__(self, posX, posY):
        images = [pygame.image.load(os.path.join('Assets', 'octopus_white_1.png')),
                  pygame.image.load(os.path.join('Assets', 'octopus_white_2.png'))]
        altImages = [pygame.image.load(os.path.join('Assets', 'octopus_green_1.png')),
                     pygame.image.load(os.path.join('Assets', 'octopus_green_2.png'))]
        super().__init__(images, altImages, OCTOPUS_WIDTH *
                         ENEMY_SCALE, ENEMY_HEIGHT * ENEMY_SCALE, posX, posY, 10)


class Squid(Enemy):
    def __init__(self, posX, posY):
        images = [pygame.image.load(os.path.join('Assets', 'squid_white_1.png')),
                  pygame.image.load(os.path.join('Assets', 'squid_white_2.png'))]
        altImages = [pygame.image.load(os.path.join('Assets', 'squid_green_1.png')),
                     pygame.image.load(os.path.join('Assets', 'squid_green_2.png'))]
        super().__init__(images, altImages, SQUID_WIDTH *
                         ENEMY_SCALE, ENEMY_HEIGHT * ENEMY_SCALE, posX, posY, 30)


class Corpse(Enemy):
    def __init__(self, posX, posY):
        images = [pygame.image.load(os.path.join('Assets', 'corpse_white.png')),
                  pygame.image.load(os.path.join('Assets', 'corpse_white.png'))]
        altImages = [pygame.image.load(os.path.join('Assets', 'corpse_green.png')),
                     pygame.image.load(os.path.join('Assets', 'corpse_green.png'))]
        super().__init__(images, altImages, CORPSE_WIDTH *
                         ENEMY_SCALE, ENEMY_HEIGHT * ENEMY_SCALE, posX, posY, 0)


def BuildEnemyGroup(availableWidth, availableHeight, posYStart) -> EnemyGroup:
    group = EnemyGroup()
    formationHeight = 6 * ENEMY_HEIGHT + 5 * ENEMY_HEIGHT  # rows + space
    formationHeight += 12 * ENEMY_HEIGHT  # space down
    formationWidth = 11 * ENEMY_WIDTH + 10 * \
        ENEMY_WIDTH / 4  # 11 enemies + space between them
    formationSpace = 2 * ENEMY_WIDTH  # space left and right
    formationWidth += formationSpace

    global ENEMY_SCALE
    enemyScale = availableHeight / formationHeight
    ENEMY_SCALE = enemyScale if (enemyScale < (
        availableWidth / formationWidth)) else (availableWidth / formationWidth)

    scaledFormationWidth = formationWidth * ENEMY_SCALE
    scaledFormationSpace = formationSpace * ENEMY_SCALE

    scaledWidth = ENEMY_WIDTH * ENEMY_SCALE
    scaledHorizontalSpace = scaledWidth / 4
    scaledHeight = ENEMY_HEIGHT * ENEMY_SCALE

    posX = (availableWidth - scaledFormationWidth) / \
        2 + scaledFormationSpace / 2
    leftEdge = posX - scaledFormationSpace / 2
    rightEdge = leftEdge + scaledFormationWidth
    posY = posYStart

    for i in range(6):
        row = []
        score = 0

        for j in range(11):
            enemy = BuildEnemy(i, posX, posY)

            if enemy is not None:
                row.append(enemy)
                score = enemy.score

            posX += scaledWidth + scaledHorizontalSpace

        posX = (availableWidth - scaledFormationWidth) / \
            2 + scaledFormationSpace / 2
        posY += scaledHeight * 2
        enemyRow = EnemyRow(row, score, leftEdge, rightEdge)
        group.addRow(enemyRow)

    return group


def BuildEnemy(row, posX, posY) -> Enemy:
    enemy: Enemy

    if row == 0:
        enemy = Squid(posX, posY)
    elif row == 1:
        enemy = Squid(posX, posY)
    elif row >= 2 and row <= 3:
        enemy = Crab(posX, posY)
    elif row >= 4 and row <= 5:
        enemy = Octopus(posX, posY)

    return enemy
