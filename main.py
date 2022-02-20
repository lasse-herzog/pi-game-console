import pygame
from pygame.locals import *
import os


# Game Initialization
pygame.init()

#Joystick Initialization
pygame.joystick.init()
 
#Center the Game
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
gray_b=(25,25,75)
dark_blue=(0, 0, 152)
 
# Game Fonts
font = "Pixeled.ttf"
header_font = "ArcadeClassic-ov2x.ttf"

# Sounds
select_sound = pygame.mixer.Sound("choose.wav")
confirm_sound = pygame.mixer.Sound("chooseThis.wav")

# Musik/Soundeffekte einrichten
pygame.mixer.music.load("mainMenu.wav")
pygame.mixer.music.play(-1,0.0)

# Game Framerate
clock = pygame.time.Clock()
FPS=30

# Main Menu


def main_menu():
 
    menu=True
    selected="start"
    start_time = pygame.time.get_ticks()
    show_text = 0
    while menu:
        for event in pygame.event.get(): #Keyboard Controls
            if event.type==pygame.QUIT:
                pygame.quit()
                quit()
            if event.type==pygame.KEYDOWN:
                pygame.mixer.Sound.play(confirm_sound)
                game_select()
            if event.type == JOYBUTTONDOWN:
                pygame.mixer.Sound.play(confirm_sound)
                game_select()
        # Main Menu UI
        screen.fill(black)
        title=text_format("PYCO", header_font, 100, white)
        text_start=text_format("Press any button", font, 20, white)

        title_rect=title.get_rect()
        start_rect=text_start.get_rect()
        
 
        # Main Menu Text
        screen.blit(title, (screen_width/2 - (title_rect[2]/2), 200))
        if(show_text<15):
            screen.blit(text_start, (screen_width/2 - (start_rect[2]/2)+10, 400))
        
        if(show_text > 30):
            show_text=0
            show_text+=1
        else:
            show_text+=1
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
                if event.key==pygame.K_UP:
                    pygame.mixer.Sound.play(select_sound)
                    s-=1
                    if(s<0):
                        s=4
                    selected=selection[s]
                    print(selected)
                elif event.key==pygame.K_DOWN:
                    pygame.mixer.Sound.play(select_sound)
                    s+=1
                    if (s>4):
                        s=0
                    selected=selection[s]
                    print(selected)
                if event.key==pygame.K_RETURN:
                    pygame.mixer.Sound.play(confirm_sound)
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
            if event.type == JOYBUTTONDOWN:
                pygame.mixer.Sound.play(confirm_sound)
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
        
        #Joystick Controls
        axis = [0, 0]
        for i in range(pygame.joystick.get_count()):
            joystick = pygame.joystick.Joystick(i)
            joystick.init()

            axes = joystick.get_numaxes()

            for j in range(axes):
                axis[j] = joystick.get_axis(j)
        
        if (axis[0]==1 and axis[1]==0): #Joystick Up
            pygame.mixer.Sound.play(select_sound)
            s-=1
            if(s<0):
                s=4
                selected=selection[s]
                print(selected)
        if (axis[0]==-1 and axis[1]==0): #Joystick Down
            pygame.mixer.Sound.play(select_sound)
            s+=1
            if (s>4):
                    s=0
                    selected=selection[s]
                    print(selected)    
        #Game demo Rectangles
        #Pong
        paddle = pygame.Rect(screen_width - 31, screen_height/2 - 15, 10, 120)
        paddle_2 = pygame.Rect(32, screen_height/2 - 125, 10, 120)
        ball = pygame.Rect(screen_width - 181, screen_height/2 -25, 15,15)
        #Snake
        snake = pygame.Rect(55, screen_height/2 - 110, 50, 10)
        apple = pygame.Rect(screen_width - 181, screen_height- 200, 20, 20)
        #Pac-Man
        pacman = pygame.image.load('pm_pacman.png')
        superpill = pygame.Rect(822, screen_height/2 - 105, 15, 15)
        #Space Invaders
        crab = pygame.image.load('si_crab.png')
        octopus = pygame.image.load('si_octopus.png')
        player = pygame.image.load('si_player.png')
        
        # Select Menu UI
        screen.fill(black)
        title=text_format("GAME SELECT", font, 45, white)
        if selected=="Pong":
            text_pong=text_format("Pong", font, 35, white)
            pygame.draw.rect(screen, white, paddle)
            pygame.draw.rect(screen, white, paddle_2)
            pygame.draw.ellipse(screen, white, ball)
        else:
            text_pong = text_format("Pong", font, 35, gray)
           
        if selected=="Snake":
            text_snake=text_format("Snake", font, 35, green)
            i=0
            while(i<121):
                snake = pygame.Rect(55 + i, screen_height/2 - 100, 15, 15)
                pygame.draw.ellipse(screen, green, snake)
                i+=15
            pygame.draw.ellipse(screen, red, apple)
        else:
            text_snake = text_format("Snake", font, 35, gray)
        if selected=="Pac-Man":
            text_pacman=text_format("Pac-Man", font, 35, yellow)
            i=0
            while(i<197):
                pills_1 = pygame.Rect(0 + i, screen_height/2 - 100, 5, 5)
                pills_2 = pygame.Rect(1024 - i, screen_height/2 - 100, 5, 5)
                pygame.draw.ellipse(screen, white, pills_1)
                pygame.draw.ellipse(screen, white, pills_2)
                i+=15
            screen.blit(pacman, (176, screen_height/2 - 115))
            pygame.draw.ellipse(screen, white, superpill)
        else:
            text_pacman = text_format("Pac-Man", font, 35, gray)
        if selected=="Space Invaders":
            text_si=text_format("Space Invaders", font, 35, blue)
            screen.blit(crab, (85, screen_height/2 - 125))
            screen.blit(octopus, (screen_width - 161, screen_height - 125))
        else:
            text_si = text_format("Space Invaders", font, 35, gray)
        if selected=="back":
            text_back=text_format("back to menu", font, 35, gray_b)
        else:
            text_back = text_format("back to menu", font, 35, gray)
        #Text Rectangles
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
