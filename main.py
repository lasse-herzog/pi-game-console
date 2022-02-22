import os
from enum import IntEnum

import pygame

import pacman.main
import pong.main
import snake.main
import space_invaders.main

from utils import load_asset, HEADER_FONT, FONT, WHITE, BLACK, GRAY, GREEN, YELLOW, BLUE, GRAY_B, RED

# Game Resolution
SCREEN_WIDTH = 1024
SCREEN_HEIGHT = 600

# Game Initialization
pygame.init()

# Center the Game
os.environ['SDL_VIDEO_CENTERED'] = '1'
screen = pygame.display.set_mode((SCREEN_WIDTH, SCREEN_HEIGHT))


# Text Renderer
def text_format(message, font_type, font_size, color):
    font = pygame.freetype.Font(font_type, font_size)

    return font.render(message, color)


# Sounds
change_selection_sound = pygame.mixer.Sound(load_asset('choose.wav'))
choose_selection_sound = pygame.mixer.Sound(load_asset('choose_this.wav'))
go_back_sound = pygame.mixer.Sound(load_asset('go_back.wav'))

pygame.mixer.music.load(load_asset('main_menu.wav'))
pygame.mixer.music.play(-1)

# Game Framerate
clock = pygame.time.Clock()
FPS = 15

# Main Menu
if pygame.joystick.get_count() > 0:
    joystick = pygame.joystick.Joystick(0)
    joystick.init()


class MainMenuOptions(IntEnum):
    PONG = 0
    SNAKE = 1
    PAC_MAN = 2
    SPACE_INVADERS = 3
    BACK = 4


SHOW_TITLE_EVENT = pygame.USEREVENT + 1


def main_menu():
    pygame.display.set_caption("PiG-C Main Menu")

    pygame.time.set_timer(SHOW_TITLE_EVENT, 500)

    visible = True

    title_text, title_rect = text_format("RETRO PiG", HEADER_FONT, 100, WHITE)
    white_start_text, start_rect = text_format("Press any button", FONT, 20, WHITE)
    black_start_text, start_rect = text_format("Press any button", FONT, 20, BLACK)

    def init_ui():
        screen.fill(BLACK)
        screen.blit(title_text, (SCREEN_WIDTH / 2 - (title_rect[2] / 2), 200))

    init_ui()

    while True:
        clock.tick(FPS)

        # Keyboard Controls
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                pygame.mixer.Sound.play(go_back_sound)
                pygame.quit()
            elif event.type == SHOW_TITLE_EVENT:
                visible = not visible
                start_text = white_start_text if visible else black_start_text

                screen.blit(start_text, (SCREEN_WIDTH / 2 - (start_rect[2] / 2) + 10, 400))
            elif event.type == pygame.KEYDOWN or event.type == pygame.JOYBUTTONDOWN:
                pygame.mixer.Sound.play(change_selection_sound)
                game_select()
                init_ui()

        pygame.display.update()


# Game select
def game_select():
    menu = True
    selection = MainMenuOptions.PONG
    last_select = 0

    title_text, title_text_rect = text_format("GAME SELECT", FONT, 45, WHITE)

    pong_unselected_text, pong_text_rect = text_format("Pong", FONT, 35, GRAY)
    pong_selected_text, pong_text_rect = text_format("Pong", FONT, 35, WHITE)

    snake_unselected_text, snake_text_rect = text_format("Snake", FONT, 35, GRAY)
    snake_selected_text, snake_text_rect = text_format("Snake", FONT, 35, GREEN)

    pacman_unselected_text, pacman_text_rect = text_format("Pac-Man", FONT, 35, GRAY)
    pacman_selected_text, pacman_text_rect = text_format("Pac-Man", FONT, 35, YELLOW)

    si_unselected_text, si_text_rect = text_format("Space Invaders", FONT, 35, GRAY)
    si_selected_text, si_text_rect = text_format("Space Invaders", FONT, 35, BLUE)

    back_unselected_text, back_text_rect = text_format("back to menu", FONT, 35, GRAY)
    back_selected_text, back_text_rect = text_format("back to menu", FONT, 35, GRAY_B)

    # Game demo Rectangles
    # Pong
    paddle = pygame.Rect(SCREEN_WIDTH - 31, SCREEN_HEIGHT / 2 - 15, 10, 120)
    paddle_2 = pygame.Rect(32, SCREEN_HEIGHT / 2 - 125, 10, 120)
    ball = pygame.Rect(SCREEN_WIDTH - 181, SCREEN_HEIGHT / 2 - 25, 15, 15)

    # Snake
    # snake_icon = pygame.Rect(55, SCREEN_HEIGHT / 2 - 110, 50, 10)
    apple = pygame.Rect(SCREEN_WIDTH - 181, SCREEN_HEIGHT - 200, 20, 20)

    # Pac-Man
    pacman_icon = pygame.image.load(load_asset('pm_pacman.png'))
    superpill = pygame.Rect(822, SCREEN_HEIGHT / 2 - 105, 15, 15)

    # Space Invaders
    crab = pygame.image.load(load_asset('si_crab.png'))
    octopus = pygame.image.load(load_asset('si_octopus.png'))

    # player = pygame.image.load(load_asset('si_player.png'))

    def move_up_option():
        nonlocal selection
        pygame.mixer.Sound.play(change_selection_sound)
        selection = selection - 1 if selection - 1 >= 0 else MainMenuOptions.BACK
        redraw()

    def move_down_option():
        nonlocal selection
        pygame.mixer.Sound.play(change_selection_sound)
        selection = selection + 1 if selection + 1 <= 4 else MainMenuOptions.PONG
        redraw()

    def select_option():
        pygame.mixer.Sound.play(choose_selection_sound)

        if selection is MainMenuOptions.BACK:
            return True

        pygame.mixer.music.fadeout(3)

        match selection:
            case MainMenuOptions.PONG:
                pong.main.main_menu()
            case MainMenuOptions.SNAKE:
                snake.main.gameLoop()
            case MainMenuOptions.PAC_MAN:
                pacman.main.start_level()
            case MainMenuOptions.SPACE_INVADERS:
                space_invaders.main.main()

    def redraw():
        pong_text = pong_unselected_text
        snake_text = snake_unselected_text
        pacman_text = pacman_unselected_text
        si_text = si_unselected_text
        back_text = back_unselected_text

        screen.fill(BLACK)

        match selection:
            case MainMenuOptions.PONG:
                pong_text = pong_selected_text

                pygame.draw.rect(screen, WHITE, paddle)
                pygame.draw.rect(screen, WHITE, paddle_2)
                pygame.draw.ellipse(screen, WHITE, ball)
            case MainMenuOptions.SNAKE:
                snake_text = snake_selected_text

                i = 0
                while i < 121:
                    snake_icon = pygame.Rect(55 + i, SCREEN_HEIGHT / 2 - 100, 15, 15)
                    pygame.draw.ellipse(screen, GREEN, snake_icon)
                    i += 15
                pygame.draw.ellipse(screen, RED, apple)
            case MainMenuOptions.PAC_MAN:
                pacman_text = pacman_selected_text

                i = 0
                while i < 197:
                    pills_1 = pygame.Rect(0 + i, SCREEN_HEIGHT / 2 - 100, 5, 5)
                    pills_2 = pygame.Rect(1024 - i, SCREEN_HEIGHT / 2 - 100, 5, 5)
                    pygame.draw.ellipse(screen, WHITE, pills_1)
                    pygame.draw.ellipse(screen, WHITE, pills_2)
                    i += 15
                screen.blit(pacman_icon, (176, SCREEN_HEIGHT / 2 - 115))
                pygame.draw.ellipse(screen, WHITE, superpill)
            case MainMenuOptions.SPACE_INVADERS:
                si_text = si_selected_text

                screen.blit(crab, (85, SCREEN_HEIGHT / 2 - 125))
                screen.blit(octopus, (SCREEN_WIDTH - 161, SCREEN_HEIGHT - 125))
            case MainMenuOptions.BACK:
                back_text = back_selected_text

        # Main Menu Text
        screen.blit(title_text, (SCREEN_WIDTH / 2 - (title_text_rect[2] / 2), 50))
        screen.blit(pong_text, (SCREEN_WIDTH / 2 - (pong_text_rect[2] / 2), 200))
        screen.blit(snake_text, (SCREEN_WIDTH / 2 - (snake_text_rect[2] / 2), 260))
        screen.blit(pacman_text, (SCREEN_WIDTH / 2 - (pacman_text_rect[2] / 2), 320))
        screen.blit(si_text, (SCREEN_WIDTH / 2 - (si_text_rect[2] / 2), 380))
        screen.blit(back_text, (SCREEN_WIDTH / 2 - (back_text_rect[2] / 2), 440))

        pygame.display.update()

    redraw()

    while menu:
        clock.tick(FPS)

        for event in pygame.event.get():
            match event.type:
                case pygame.QUIT:
                    pygame.mixer.Sound.play(go_back_sound)

                    pygame.quit()
                case pygame.KEYDOWN:
                    match event.key:
                        case pygame.K_UP:
                            move_up_option()
                        case pygame.K_DOWN:
                            move_down_option()
                        case pygame.K_RETURN:
                            if select_option():
                                pygame.mixer.Sound.play(go_back_sound)

                                return
                case pygame.JOYAXISMOTION:
                    if last_select + 500 >= pygame.time.get_ticks():
                        break

                    axis = [joystick.get_axis(i) for i in range(2)]
                    last_select = pygame.time.get_ticks()

                    if round(axis[0]) == 1 and round(axis[1]) == 0:
                        move_up_option()
                    elif round(axis[0]) == -1 and round(axis[1]) == 0:
                        move_down_option()
                case pygame.JOYBUTTONDOWN:
                    if select_option():
                        pygame.mixer.Sound.play(go_back_sound)

                        return


main_menu()
