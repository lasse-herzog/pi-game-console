import json
import os
import random
import sys
import time
from enum import Enum

import pygame
from pygame.locals import *


def load_asset(asset):
    return os.path.join('snake', 'assets', asset)


with open(load_asset('highscore.json')) as config_file:
    HIGHSCORE = json.load(config_file)

pygame.init()


class Snake_Direction(Enum):
    UP = 1
    DOWN = 2
    RIGHT = 3
    LEFT = 4


WIDTH, HEIGHT = 1024, 600
WINDOW = pygame.display.set_mode((WIDTH, HEIGHT))
pygame.display.set_caption("Snake")

# Variables #
SNAKECOLOR = (255, 255, 255)
scale: int = 20
appleSize: int = 30
loop = True
score = 0
highScore = 1
textHS = "Highscore"
FPS = 10

# Colors
white = (255, 255, 255)
black = (0, 0, 0)
gray = (50, 50, 50)
red = (255, 0, 0)
green = (0, 255, 0)
blue = (0, 0, 255)
yellow = (255, 255, 0)

BACKGROUND = pygame.image.load(load_asset('biggras.png'))
BLACKBACKGROUND = black

snake_Position = [150, 150]
snake_BodyLength: int = [[150, 150], [140, 150], [130, 150]]
food_Position: int = [50, 150]


# Text Renderer
def text_format(message, textFont, textSize, textColor):
    newFont = pygame.font.Font(textFont, textSize)
    newText = newFont.render(message, 0, textColor)

    return newText


# Game Fonts
font = load_asset('Pixeled.ttf')

# Sounds
select_sound = pygame.mixer.Sound(load_asset('choose.wav'))


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
    food_Position[0] = random.randint(10, ((WIDTH - 2) // 10)) * 10
    food_Position[1] = random.randint(10, ((HEIGHT - 2) // 10)) * 10


def onFood():
    global score
    if abs(snake_Position[0] - food_Position[0]) < appleSize and abs(snake_Position[1] - food_Position[1]) < appleSize:
        score += 1
        create_next_food()
    else:
        snake_BodyLength.pop()


def GameOver_show_message():
    font = pygame.font.Font(load_asset('Pixeled.ttf'), scale * 2)
    render1 = font.render(f"You died! Score: {score}", True, pygame.Color(255, 255, 255))
    render2 = font.render(f"{textHS}: {highScore}", True, pygame.Color(255, 255, 255))
    rect1 = render1.get_rect()
    rect2 = render2.get_rect()
    rect1.midtop = (WIDTH / 2, HEIGHT / 4)
    rect2.midtop = (WIDTH / 2, HEIGHT / 3)
    WINDOW.blit(render1, rect1)
    WINDOW.blit(render2, rect2)
    pygame.display.flip()
    time.sleep(5)


def onGameOver():
    breakLoop = 1
    if snake_Position[0] < 0 or snake_Position[0] > WIDTH - 10:
        GameOver_show_message()
        breakLoop = 0
    if snake_Position[1] < 0 or snake_Position[1] > HEIGHT - 10:
        GameOver_show_message()
        breakLoop = 0
    for part in snake_BodyLength[1:]:
        if snake_Position[0] == part[0] and snake_Position[1] == part[1]:
            GameOver_show_message()
            breakLoop = 0
    return breakLoop


def set_window():
    WINDOW.blit(BACKGROUND, (0, 0))
    for part in snake_BodyLength:
        pygame.draw.circle(WINDOW, pygame.Color(SNAKECOLOR), (part[0], part[1]), scale / 2)

    pygame.draw.rect(WINDOW, pygame.Color(255, 0, 0),
                     pygame.Rect(food_Position[0] - 10, food_Position[1] - 10, appleSize, appleSize))


def hudPaint():
    font = pygame.font.Font(load_asset('Pixeled.ttf'), scale)
    render = font.render(f"Score: {score}     {textHS}: {highScore}", True, pygame.Color(0, 0, 0))
    rect = render.get_rect()
    WINDOW.blit(render, rect)
    pygame.display.flip()


def startWINDOW():
    WINDOW.fill(BLACKBACKGROUND)
    font = pygame.font.Font(load_asset('Pixeled.ttf'), scale)
    render1 = font.render(f"Snake", True, pygame.Color(255, 255, 255))
    render2 = font.render(f"Press ANY Key to Start", True, pygame.Color(255, 255, 255))
    rect1 = render1.get_rect()
    rect2 = render2.get_rect()
    rect1.midtop = (WIDTH / 2, HEIGHT / 4)
    rect2.midtop = (WIDTH / 2, HEIGHT / 3)
    WINDOW.blit(render1, rect1)
    WINDOW.blit(render2, rect2)
    pygame.display.flip()
    while True:
        for event in pygame.event.get():
            if event.type == QUIT:
                pygame.quit()
                sys.exit()
            if event.type == KEYDOWN:
                return


def optionsMenu(selectedOption):
    global SNAKECOLOR
    clock = pygame.time.Clock()
    menu = True
    if selectedOption == 0:
        selection = ["RED", "YELLOW", "BLUE"]
        s: int = 0
        selected = selection[s]

        while menu:
            for event in pygame.event.get():
                if event.type == pygame.QUIT:
                    pygame.quit()
                    quit()
                if event.type == pygame.KEYDOWN:
                    pygame.mixer.Sound.play(select_sound)
                    if event.key == pygame.K_UP:
                        s -= 1
                        if s < 0:
                            s = 2
                        selected = selection[s]
                    elif event.key == pygame.K_DOWN:
                        s += 1
                        if s > 2:
                            s = 0
                        selected = selection[s]
                    elif selected == "RED" and event.key == pygame.K_RETURN:
                        SNAKECOLOR = red
                        return
                    elif selected == "YELLOW" and event.key == pygame.K_RETURN:
                        SNAKECOLOR = yellow
                        return
                    elif selected == "BLUE" and event.key == pygame.K_RETURN:
                        SNAKECOLOR = blue
                        return

            WINDOW.fill(black)
            title = text_format("CHOOSE SNAKE SKIN", font, 45, white)
            if selected == "RED":
                text_Skin = text_format("RED", font, 35, red)
            else:
                text_Skin = text_format("RED", font, 35, gray)

            if selected == "YELLOW":
                text_difficulty = text_format("YELLOW", font, 35, yellow)
            else:
                text_difficulty = text_format("YELLOW", font, 35, gray)

            if selected == "BLUE":
                text_START = text_format("BLUE", font, 35, blue)
            else:
                text_START = text_format("BLUE", font, 35, gray)

            title_rect = title.get_rect()
            RED_rect = text_Skin.get_rect()
            YELLOW_rect = text_difficulty.get_rect()
            BLUE_rect = text_START.get_rect()

            WINDOW.blit(title, (WIDTH / 2 - (title_rect[2] / 2), 50))
            WINDOW.blit(text_Skin, (WIDTH / 2 - (RED_rect[2] / 2), 200))
            WINDOW.blit(text_difficulty, (WIDTH / 2 - (YELLOW_rect[2] / 2), 260))
            WINDOW.blit(text_START, (WIDTH / 2 - (BLUE_rect[2] / 2), 320))
            pygame.display.update()
            clock.tick(FPS)
            pygame.display.set_caption("Snake Skin")

    if selectedOption == 1:
        global appleSize
        selection = ["EASY", "MEDIUM", "HARD"]
        s: int = 0
        selected = selection[s]

        while menu:
            for event in pygame.event.get():
                if event.type == pygame.QUIT:
                    pygame.quit()
                    quit()
                if event.type == pygame.KEYDOWN:
                    pygame.mixer.Sound.play(select_sound)
                    if event.key == pygame.K_UP:
                        s -= 1
                        if s < 0:
                            s = 2
                        selected = selection[s]
                    elif event.key == pygame.K_DOWN:
                        s += 1
                        if s > 2:
                            s = 0
                        selected = selection[s]
                    elif selected == "EASY" and event.key == pygame.K_RETURN:
                        appleSize = 40
                        return
                    elif selected == "MEDIUM" and event.key == pygame.K_RETURN:
                        appleSize = 20
                        return
                    elif selected == "HARD" and event.key == pygame.K_RETURN:
                        appleSize = 10
                        return

            WINDOW.fill(black)
            title = text_format("CHOOSE DIFFICULTY", font, 45, white)
            if selected == "EASY":
                text_Skin = text_format("EASY", font, 35, green)
            else:
                text_Skin = text_format("EASY", font, 35, gray)

            if selected == "MEDIUM":
                text_difficulty = text_format("MEDIUM", font, 35, yellow)
            else:
                text_difficulty = text_format("MEDIUM", font, 35, gray)

            if selected == "HARD":
                text_START = text_format("HARD", font, 35, red)
            else:
                text_START = text_format("HARD", font, 35, gray)

            title_rect = title.get_rect()
            EASY_rect = text_Skin.get_rect()
            MEDIUM_rect = text_difficulty.get_rect()
            HARD_rect = text_START.get_rect()

            WINDOW.blit(title, (WIDTH / 2 - (title_rect[2] / 2), 50))
            WINDOW.blit(text_Skin, (WIDTH / 2 - (EASY_rect[2] / 2), 200))
            WINDOW.blit(text_difficulty, (WIDTH / 2 - (MEDIUM_rect[2] / 2), 260))
            WINDOW.blit(text_START, (WIDTH / 2 - (HARD_rect[2] / 2), 320))
            pygame.display.update()
            clock.tick(FPS)
            pygame.display.set_caption("Difficulty")


def selectMenu():
    clock = pygame.time.Clock()
    menu = True
    selection = ["Skin", "Difficulty", "START"]
    s: int = 0
    selected = selection[s]

    while menu:
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                pygame.quit()
                quit()
            if event.type == pygame.KEYDOWN:
                pygame.mixer.Sound.play(select_sound)
                if event.key == pygame.K_UP:
                    s -= 1
                    if s < 0:
                        s = 2
                    selected = selection[s]
                elif event.key == pygame.K_DOWN:
                    s += 1
                    if s > 2:
                        s = 0
                    selected = selection[s]
                elif selected == "Skin" and event.key == pygame.K_RETURN:
                    optionsMenu(0)
                elif selected == "Difficulty" and event.key == pygame.K_RETURN:
                    optionsMenu(1)
                elif selected == "START" and event.key == pygame.K_RETURN:
                    pygame.mixer.Sound.play(pygame.mixer.Sound(load_asset('chooseThis.wav')))
                    return

        WINDOW.fill(black)
        title = text_format("SNAKE MENU", font, 45, white)
        if selected == "Skin":
            text_Skin = text_format("Skin", font, 35, yellow)
        else:
            text_Skin = text_format("Skin", font, 35, gray)

        if selected == "Difficulty":
            text_difficulty = text_format("Difficulty", font, 35, green)
        else:
            text_difficulty = text_format("Difficulty", font, 35, gray)

        if selected == "START":
            text_START = text_format("START", font, 35, red)
        else:
            text_START = text_format("START", font, 35, gray)

        title_rect = title.get_rect()
        Skin_rect = text_Skin.get_rect()
        difficulty_rect = text_difficulty.get_rect()
        start_rect = text_START.get_rect()

        WINDOW.blit(title, (WIDTH / 2 - (title_rect[2] / 2), 50))
        WINDOW.blit(text_Skin, (WIDTH / 2 - (Skin_rect[2] / 2), 200))
        WINDOW.blit(text_difficulty, (WIDTH / 2 - (difficulty_rect[2] / 2), 260))
        WINDOW.blit(text_START, (WIDTH / 2 - (start_rect[2] / 2), 320))
        pygame.display.update()
        clock.tick(FPS)
        pygame.display.set_caption("Snake Menu")


def countDown():
    counter, text = 3, '3'.rjust(3)
    pygame.time.set_timer(pygame.USEREVENT, 1000)
    font = pygame.font.Font(load_asset('Pixeled.ttf'), scale * 3)

    run = True
    while run:
        for e in pygame.event.get():
            pygame.mixer.Sound.play(select_sound)
            if e.type == pygame.USEREVENT:
                counter -= 1
                text = str(counter).rjust(3) if counter > 0 else 'Start'
            if e.type == pygame.QUIT:
                run = False
            if text == 'Start':
                run = False

        WINDOW.fill(BLACKBACKGROUND)
        render = font.render(text, True, (255, 255, 255))
        rect = render.get_rect()
        rect.midtop = (WIDTH / 2 - 20, HEIGHT / 3)
        WINDOW.blit(render, rect)
        pygame.display.flip()
        time.sleep(1)


def highScoreDefine():
    global highScore
    global textHS
    highScore = int(HIGHSCORE['high_score'])
    if score > highScore:
        textHS = "NEW Highscore"
    if score > highScore:
        highScore = score
        newWrite = {
            "high_score": f"{highScore}"
        }
        json_object = json.dumps(newWrite, indent=1)
        with open(load_asset('highscore.json'), "w") as outfile:
            outfile.write(json_object)


def resetGlobals():
    global snake_BodyLength
    global score

    snake_Position[0] = 150
    snake_Position[1] = 150

    snake_BodyLength = [[150, 150], [140, 150], [130, 150]]

    food_Position[0] = 50
    food_Position[1] = 150

    score = 0


def gameLoop():
    while True:
        clock = pygame.time.Clock()
        snake_Direction = Snake_Direction.RIGHT
        startWINDOW()
        selectMenu()
        countDown()
        resetGlobals()
        while loop:
            for event in pygame.event.get():
                if event.type == pygame.QUIT:
                    pygame.quit()
                    quit()
            clock.tick(FPS)
            snake_Direction = keys_Input(snake_Direction)
            snake_Move(snake_Direction)
            if onGameOver() == 0:
                break
            set_window()
            highScoreDefine()
            hudPaint()
            onFood()
            pygame.display.update()


if __name__ == "__main__":
    gameLoop()
