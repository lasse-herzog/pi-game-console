import pygame
from pygame.locals import *
import os


# Game Initialization
pygame.init()
 
# Center the Game Application
os.environ['SDL_VIDEO_CENTERED'] = '1'
 
# Game Resolution
screen_width=1024
screen_height=600
screen=pygame.display.set_mode((screen_width, screen_height))
 
# Text Renderer
def text_format(message, textFont, textSize, textColor):
    newFont=pygame.font.Font(textFont, textSize)
    newText=newFont.render(message, 0, textColor)
 
    return newText
 
 
# Colors
white=(255, 255, 255)
black=(0, 0, 0)
gray=(50, 50, 50)
red=(255, 0, 0)
green=(0, 255, 0)
blue=(0, 0, 255)
yellow=(255, 255, 0)
 
# Game Fonts
font = "Pixeled.ttf"
header_font = "ArcadeClassic-ov2x.ttf"

# Sounds
select_sound = pygame.mixer.Sound("select.wav")

# Game Framerate
clock = pygame.time.Clock()
FPS=30

# Main Menu


def main_menu():
 
    menu=True
    selected="start"
    start_time = pygame.time.get_ticks()
    while menu:
        for event in pygame.event.get():
            if event.type==pygame.QUIT:
                pygame.quit()
                quit()
            if event.type==pygame.KEYDOWN:
                pygame.mixer.Sound.play(select_sound)
                game_select()
 
        # Main Menu UI
        screen.fill(black)
        title=text_format("RETRO PiG", header_font, 100, white)
        text_start=text_format("Press any button", font, 20, white)

        title_rect=title.get_rect()
        start_rect=text_start.get_rect()
        
 
        # Main Menu Text
        screen.blit(title, (screen_width/2 - (title_rect[2]/2), 200))
        
        screen.blit(text_start, (screen_width/2 - (start_rect[2]/2)+10, 400))
    
    
        pygame.display.update()
        clock.tick(FPS)
        pygame.display.set_caption("PiG-C Main Menu")

#Game select
def game_select():
    menu=True
    selection=["Pong", "Snake", "Pac-Man", "Space Invaders", "back"]
    s: int =0
    selected = selection[s]
    
    while menu:
        for event in pygame.event.get():
            if event.type==pygame.QUIT:
                pygame.quit()
                quit()
            if event.type==pygame.KEYDOWN:
                pygame.mixer.Sound.play(select_sound)
                if event.key==pygame.K_UP:
                    s-=1
                    if(s<0):
                        s=4
                    selected=selection[s]
                    print(selected)
                elif event.key==pygame.K_DOWN:
                    s+=1
                    if (s>4):
                        s=0
                    selected=selection[s]
                    print(selected)
                if event.key==pygame.K_RETURN:
                    if selected=="Pong":
                        print("Pong Start")
                        
                    if selected=="Snake":
                        print("Snake Start")
                       
                    if selected=="Pac-Man":
                        print("Pac-Man Start")
                    if selected=="Space Invaders":
                        print("Space Invaders Start")
                    if selected== "back":
                        print("back to menu")
                        main_menu()
                    
 
        # Main Menu UI
        screen.fill(black)
        title=text_format("GAME SELECT", font, 45, white)
        if selected=="Pong":
            text_pong=text_format("Pong", font, 35, white)
        else:
            text_pong = text_format("Pong", font, 35, gray)
        if selected=="Snake":
            text_snake=text_format("Snake", font, 35, white)
        else:
            text_snake = text_format("Snake", font, 35, gray)
        if selected=="Pac-Man":
            text_pacman=text_format("Pac-Man", font, 35, white)
        else:
            text_pacman = text_format("Pac-Man", font, 35, gray)
        if selected=="Space Invaders":
            text_si=text_format("Space Invaders", font, 35, white)
        else:
            text_si = text_format("Space Invaders", font, 35, gray)
        if selected=="back":
            text_back=text_format("back to menu", font, 35, white)
        else:
            text_back = text_format("back to menu", font, 35, gray)
 
        title_rect=title.get_rect()
        pong_rect=text_pong.get_rect()
        snake_rect=text_snake.get_rect()
        pacman_rect=text_pacman.get_rect()
        si_rect=text_si.get_rect()
        back_rect=text_back.get_rect()
 
        # Main Menu Text
        screen.blit(title, (screen_width/2 - (title_rect[2]/2), 50))
        screen.blit(text_pong, (screen_width/2 - (pong_rect[2]/2), 200))
        screen.blit(text_snake, (screen_width/2 - (snake_rect[2]/2), 260))
        screen.blit(text_pacman, (screen_width/2 - (pacman_rect[2]/2), 320))
        screen.blit(text_si, (screen_width/2 - (si_rect[2]/2), 380))
        screen.blit(text_back, (screen_width/2 - (back_rect[2]/2), 440))
        pygame.display.update()
        clock.tick(FPS)
        pygame.display.set_caption("PiG-C Pong Main Menu")


main_menu()
pygame.quit()
quit()
