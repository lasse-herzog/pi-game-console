import os

import pygame
from pygame.locals import *

from pong.main import main_menu as pong_menu
import snake.main


def load_asset(asset):
    return os.path.join('assets', asset)


# Game Initialization
pygame.init()

# Joystick Initialization
pygame.joystick.init()

# Center the Game
os.environ['SDL_VIDEO_CENTERED'] = '1'

# Game Resolution
screen_width = 1024
screen_height = 600
screen = pygame.display.set_mode((screen_width, screen_height))


# Text Renderer
def text_format(message, textFont, textSize, textColor):
    newFont = pygame.font.Font(textFont, textSize)
    newText = newFont.render(message, 0, textColor)

    return newText


# Colors
white = (255, 255, 255)
black = (0, 0, 0)
gray = (50, 50, 50)
red = (255, 0, 0)
green = (0, 255, 0)
blue = (0, 0, 255)
yellow = (255, 255, 0)
gray_b = (25, 25, 75)
dark_blue = (0, 0, 152)

# Game Fonts
font = load_asset('Pixeled.ttf')
header_font = load_asset('ArcadeClassic-ov2x.ttf')

# Sounds
select_sound = pygame.mixer.Sound("assets/select.wav")

# Game Framerate
clock = pygame.time.Clock()
FPS = 30

# Main Menu
if pygame.joystick.get_count() > 0:
    joystick = pygame.joystick.Joystick(0)
    joystick.init()


def main_menu():
    menu = True
    selected = "start"
    start_time = pygame.time.get_ticks()
    show_text = 0

    while menu:
        for event in pygame.event.get():  # Keyboard Controls
            if event.type == pygame.QUIT:
                pygame.quit()
                quit()
            elif event.type == pygame.KEYDOWN:
                pygame.mixer.Sound.play(select_sound)
                game_select()
            elif event.type == JOYBUTTONDOWN:
                pygame.mixer.Sound.play(select_sound)
                print("Joystick button pressed.")
                game_select()
            elif event.type == pygame.JOYBUTTONDOWN:
                pygame.mixer.Sound.play(select_sound)
                print("Joystick button pressed.")
                game_select()

        # Main Menu UI
        screen.fill(black)
        title = text_format("RETRO PiG", header_font, 100, white)
        text_start = text_format("Press any button", font, 20, white)

        title_rect = title.get_rect()
        start_rect = text_start.get_rect()

        # Main Menu Text
        screen.blit(title, (screen_width / 2 - (title_rect[2] / 2), 200))
        if (show_text < 15):
            screen.blit(text_start, (screen_width / 2 - (start_rect[2] / 2) + 10, 400))

        if (show_text > 30):
            show_text = 0
            show_text += 1
        else:
            show_text += 1
        pygame.display.update()
        clock.tick(FPS)
        pygame.display.set_caption("PiG-C Main Menu")


# Game select
def game_select():
    menu = True
    selection = ["pong", "Snake", "Pac-Man", "Space Invaders", "back"]
    s: int = 0
    selected = selection[s]
    last_select = 0

    while menu:
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                pygame.quit()
                quit()
            if event.type == pygame.KEYDOWN:
                pygame.mixer.Sound.play(select_sound)
                if event.key == pygame.K_UP:
                    s -= 1
                    if (s < 0):
                        s = 4
                    selected = selection[s]
                    print(selected)
                elif event.key == pygame.K_DOWN:
                    s += 1
                    if (s > 4):
                        s = 0
                    selected = selection[s]
                    print(selected)
                if event.key == pygame.K_RETURN:
                    if selected == "pong":
                        print("pong Start")
                        pong_menu()
                    if selected == "Snake":
                        print("Snake Start")
                        snake.main.gameLoop()
                    if selected == "Pac-Man":
                        print("Pac-Man Start")
                    if selected == "Space Invaders":
                        print("Space Invaders Start")
                    if selected == "back":
                        print("back to menu")
                        main_menu()
            if event.type == JOYAXISMOTION:
                # Joystick Controls
                axis = [0, 0]

                for j in range(2):
                    axis[j] = joystick.get_axis(j)

                if round(axis[0]) == 1 and axis[1] == 0 and last_select + 1000 < pygame.time.get_ticks():  # Joystick Up
                    last_select = pygame.time.get_ticks()
                    s -= 1
                    if (s < 0):
                        s = 4
                    selected = selection[s]
                    print(selected)
                if round(axis[0]) == -1 and axis[
                    1] == 0 and last_select + 1000 < pygame.time.get_ticks():  # Joystick Down
                    last_select = pygame.time.get_ticks()
                    s += 1
                    if (s > 4):
                        s = 0
                    selected = selection[s]
                    print(selected)

            if event.type == JOYBUTTONDOWN:
                if selected == "pong":
                    print("pong Start")
                if selected == "Snake":
                    print("Snake Start")
                    snake.main.gameLoop()
                if selected == "Pac-Man":
                    print("Pac-Man Start")
                if selected == "Space Invaders":
                    print("Space Invaders Start")
                if selected == "back":
                    print("back to menu")
                    main_menu()

        # Game demo Rectangles
        # pong
        paddle = pygame.Rect(screen_width - 31, screen_height / 2 - 15, 10, 120)
        paddle_2 = pygame.Rect(32, screen_height / 2 - 125, 10, 120)
        ball = pygame.Rect(screen_width - 181, screen_height / 2 - 25, 15, 15)
        # Snake
        snake_icon = pygame.Rect(55, screen_height / 2 - 110, 50, 10)
        apple = pygame.Rect(screen_width - 181, screen_height - 200, 20, 20)
        # Pac-Man
        pacman = pygame.image.load(load_asset('pm_pacman.png'))
        superpill = pygame.Rect(822, screen_height / 2 - 105, 15, 15)
        # Space Invaders
        crab = pygame.image.load(load_asset('si_crab.png'))
        octopus = pygame.image.load(load_asset('si_octopus.png'))
        player = pygame.image.load(load_asset('si_player.png'))

        # Select Menu UI
        screen.fill(black)
        title = text_format("GAME SELECT", font, 45, white)
        if selected == "pong":
            text_pong = text_format("pong", font, 35, white)
            pygame.draw.rect(screen, white, paddle)
            pygame.draw.rect(screen, white, paddle_2)
            pygame.draw.ellipse(screen, white, ball)
        else:
            text_pong = text_format("pong", font, 35, gray)

        if selected == "Snake":
            text_snake = text_format("Snake", font, 35, green)
            i = 0
            while (i < 121):
                snake_icon = pygame.Rect(55 + i, screen_height / 2 - 100, 15, 15)
                pygame.draw.ellipse(screen, green, snake_icon)
                i += 15
            pygame.draw.ellipse(screen, red, apple)
        else:
            text_snake = text_format("Snake", font, 35, gray)
        if selected == "Pac-Man":
            text_pacman = text_format("Pac-Man", font, 35, yellow)
            i = 0
            while (i < 197):
                pills_1 = pygame.Rect(0 + i, screen_height / 2 - 100, 5, 5)
                pills_2 = pygame.Rect(1024 - i, screen_height / 2 - 100, 5, 5)
                pygame.draw.ellipse(screen, white, pills_1)
                pygame.draw.ellipse(screen, white, pills_2)
                i += 15
            screen.blit(pacman, (176, screen_height / 2 - 115))
            pygame.draw.ellipse(screen, white, superpill)
        else:
            text_pacman = text_format("Pac-Man", font, 35, gray)
        if selected == "Space Invaders":
            text_si = text_format("Space Invaders", font, 35, blue)
            screen.blit(crab, (85, screen_height / 2 - 125))
            screen.blit(octopus, (screen_width - 161, screen_height - 125))
        else:
            text_si = text_format("Space Invaders", font, 35, gray)
        if selected == "back":
            text_back = text_format("back to menu", font, 35, gray_b)
        else:
            text_back = text_format("back to menu", font, 35, gray)
        # Text Rectangles
        title_rect = title.get_rect()
        pong_rect = text_pong.get_rect()
        snake_rect = text_snake.get_rect()
        pacman_rect = text_pacman.get_rect()
        si_rect = text_si.get_rect()
        back_rect = text_back.get_rect()

        # Main Menu Text
        screen.blit(title, (screen_width / 2 - (title_rect[2] / 2), 50))
        screen.blit(text_pong, (screen_width / 2 - (pong_rect[2] / 2), 200))
        screen.blit(text_snake, (screen_width / 2 - (snake_rect[2] / 2), 260))
        screen.blit(text_pacman, (screen_width / 2 - (pacman_rect[2] / 2), 320))
        screen.blit(text_si, (screen_width / 2 - (si_rect[2] / 2), 380))
        screen.blit(text_back, (screen_width / 2 - (back_rect[2] / 2), 440))
        pygame.display.update()
        clock.tick(FPS)
        pygame.display.set_caption("PiG-C pong Main Menu")


main_menu()
pygame.quit()
quit()
