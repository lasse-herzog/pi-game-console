import time

import pygame
from enum import Enum
import random

pygame.init()

class Snake_Direction(Enum):
    UP = 1
    DOWN = 2
    RIGHT = 3
    LEFT = 4


WIDTH, HEIGHT = 800, 600
WINDOW = pygame.display.set_mode((WIDTH, HEIGHT))
pygame.display.set_caption("I'm a Sssssnaaaaaake")

# Variables #
FPS = 10
snake_Position = [150, 150]
snake_BodyLength = [[150, 150],
                    [140, 150],
                    [130, 150]]
food_Position = [50, 150]

scale = 20

global score
score = 0

GREEN = (0, 90, 10)

BACKGROUND = pygame.image.load("backgroundgras.jpg")


# Methods #

def keys_Input(snake_Direction):
    new_Direction = snake_Direction
    for event in [e for e in pygame.event.get() if e.type == pygame.KEYDOWN]:
        if event.key == pygame.K_UP and snake_Direction != Snake_Direction.DOWN:
            new_Direction = Snake_Direction.UP
        if event.key == pygame.K_DOWN and snake_Direction != Snake_Direction.UP:
            new_Direction = Snake_Direction.DOWN
        if event.key == pygame.K_RIGHT and snake_Direction != Snake_Direction.LEFT:
            new_Direction = Snake_Direction.RIGHT
        if event.key == pygame.K_LEFT and snake_Direction != Snake_Direction.RIGHT:
            new_Direction = Snake_Direction.LEFT
    return new_Direction

def snake_Move(snake_Direction):
    if snake_Direction == Snake_Direction.UP:
        snake_Position[1] -= scale
    if snake_Direction == Snake_Direction.DOWN:
        snake_Position[1] += scale
    if snake_Direction == Snake_Direction.RIGHT:
        snake_Position[0] += scale
    if snake_Direction == Snake_Direction.LEFT:
        snake_Position[0] -= scale
    snake_BodyLength.insert(0, list(snake_Position))


def create_next_food():
    food_Position[0] = [random.randint(5, (WIDTH - 2 // scale)) * scale]
    food_Position[1] = [random.randint(5, (HEIGHT - 2 // scale)) * scale]


def onFood():
    global score
    if abs(snake_Position[0] - food_Position[0]) < 20 and abs(snake_Position[1] - food_Position[1]) < 20:
        score += 1
        create_next_food()
    else:
        snake_BodyLength.pop()


def GameOver_show_message():
    font = pygame.font.SysFont('arial', scale * 5)
    render = font.render(f"Score: {score}", True, pygame.Color(255, 255, 255))
    rect = render.get_rect()
    rect.midtop = (WIDTH / 2, HEIGHT / 2)
    WINDOW.blit(render, rect)
    pygame.display.flip()
    time.sleep(5)
    pygame.quit()
    exit(0)


def onGameOver():
    if snake_Position[0] < 0 or snake_Position[0] > WIDTH - 10:
        GameOver_show_message()
    if snake_Position[1] < 0 or snake_Position[1] > HEIGHT - 10:
        GameOver_show_message()
    for part in snake_BodyLength[1:]:
        if snake_Position[0] == part[0] and snake_Position[1] == part[1]:
            GameOver_show_message()

def set_window():
    WINDOW.blit(BACKGROUND, (0, 0))
    for part in snake_BodyLength:
        pygame.draw.circle(WINDOW, pygame.Color(0, 0, 255), (part[0], part[1]), scale / 2)
    pygame.draw.rect(WINDOW, pygame.Color(255, 0, 0), pygame.Rect(food_Position[0]-scale/2, food_Position[1]-scale/2, scale, scale))

def hudPaint():
    font = pygame.font.SysFont('arial', scale * 2)
    render = font.render(f"Score: {score}", True, pygame.Color(0, 0, 0))
    rect = render.get_rect()
    WINDOW.blit(render, rect)
    pygame.display.flip()

def gameLoop():
    clock = pygame.time.Clock()
    snake_Direction = Snake_Direction.RIGHT
    loop = True
    while loop:
        clock.tick(FPS)
        snake_Direction = keys_Input(snake_Direction)
        snake_Move(snake_Direction)
        onFood()
        set_window()
        onGameOver()
        hudPaint()
        pygame.display.update()
        #time.sleep(2)


if __name__ == "__main__":
    gameLoop()
