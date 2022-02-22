import pygame, sys
from pygame.locals import *
import math
import random
import time
from pong.utils import load_asset


#Initialize Game
pygame.mixer.pre_init(44100, -16, 2, 512)
pygame.init()
clock = pygame.time.Clock()

#Colors
BLUE  = (0, 0, 255)
RED   = (255, 0, 0)
GREEN = (0, 255, 0)
BLACK = (0, 0, 0)
WHITE = (255, 255, 255)

#Display setup
screen_width = 1024
screen_height = 600
screen = pygame.display.set_mode((screen_width, screen_height))
pygame.display.set_caption('PiG-C Pong')

#Rects
ball = pygame.Rect(screen_width/2 - 7.5, screen_height/2 - 7.5, 15,15)
player = pygame.Rect(screen_width - 21, screen_height/2 - 70, 10, 120)
opponent = pygame.Rect(12, screen_height/2 - 70, 10, 120)

# Variables
ball_speedX = 8
ball_speedY = 8
opponent_speed = 6.3


#Game Logic Functions
def ballMovement():
    global ball_speedX, ball_speedY, player_score, opponent_score, score_time
    ball.x += ball_speedX 
    ball.y += ball_speedY 

    #Collisions
    if ball.top <= 0 or ball.bottom >= screen_height:
        pygame.mixer.Sound.play(pong_sound)
        ball_speedY *= -1   #reverses the ball speed
    if ball.left <= 0: 
        pygame.mixer.Sound.play(score_sound)
        player_score +=1
        score_time = pygame.time.get_ticks()
    if ball.right >= screen_width:
        pygame.mixer.Sound.play(score_sound)
        opponent_score += 1
        score_time = pygame.time.get_ticks()
    
    if ball.colliderect(player) and ball_speedX > 0:
        pygame.mixer.Sound.play(pong_sound)
        if abs(ball.right - player.left) < 10:
            ball_speedX *= -1
        elif abs(ball.bottom - player.top) < 10 and ball_speedY > 0:
            ball_speedY *= -1
        elif abs(ball.top - player.bottom) < 10 and ball_speedY < 0:
            ball_speedY *= -1
    if ball.colliderect(opponent) and ball_speedX < 0:
        pygame.mixer.Sound.play(pong_sound)
        if abs(ball.left - opponent.right) < 10:
            ball_speedX *= -1
        elif abs(ball.bottom - opponent.top) < 10 and ball_speedY > 0:
            ball_speedY *= -1
        elif abs(ball.top - opponent.bottom) < 10 and ball_speedY < 0:
            ball_speedY *= -1

def playerMovement(player_speed):
    player.y += player_speed
    if player.top <=0:
        player.top = 0
    if player.bottom >= screen_height:
        player.bottom = screen_height

def opponentMovement():
    if opponent.top < ball.y:
        opponent.top += opponent_speed
    if opponent.top > ball.y:
        opponent.top -= opponent_speed
    if opponent.top <=0:
        opponent.top = 0
    if opponent.bottom >= screen_height:
        opponent.bottom = screen_height

def ball_reset():
    global ball_speedY, ball_speedX, score_time
    currentSpeedX = ball_speedX
    currentSpeedY = ball_speedY
    current_time = pygame.time.get_ticks()
    ball.center = (screen_width/2, screen_height/2)
    #Countdown
    if current_time - score_time < 700:
       
        countdown_three = game_font.render("3", False, WHITE)
        screen.blit(countdown_three, (screen_width/2-10, screen_height/2 + 20))
    if 700 < current_time - score_time < 1400:
       
        countdown_two = game_font.render("2", False, WHITE)
        screen.blit(countdown_two, (screen_width/2-10, screen_height/2 + 20))  
    if 1400 < current_time - score_time < 2100:
        
        countdown_one = game_font.render("1", False, WHITE)
        screen.blit(countdown_one, (screen_width/2-10, screen_height/2 + 20))
    #Wait at start
    if current_time - score_time < 2100:
        ball_speedX, ball_speedY = 0, 0
    else:
        ball_speedY = 8 * random.choice((1, -1))
        ball_speedX = 8 * random.choice((1, -1))
        score_time = None
    

#Text variables
player_score = 0
opponent_score = 0
game_font = pygame.font.Font(load_asset("Pixeled.ttf"), 64)

#Timer
score_time = True

#Sounds
pong_sound = pygame.mixer.Sound(load_asset("pong.ogg"))
score_sound = pygame.mixer.Sound(load_asset("score.ogg"))


#End Game
def end(won):
    win_text = game_font.render("YOU WIN!", False, WHITE)
    lose_text = game_font.render("YOU LOSE!", False, WHITE)
    if won==1:
        screen.blit(win_text, (screen_width/2-200, 50))
    else:
        screen.blit(lose_text, (screen_width/2-200, 50))
    pygame.display.flip()
    
    time.sleep(5)
    
    
def countdown(start_ticks, first_time):
    
    current_time = pygame.time.get_ticks()
    seconds = (current_time-start_ticks)/1000
  
    if seconds<3:
    
        first_time = False

#Joystick initialization
if pygame.joystick.get_count()>0:
    joystick = pygame.joystick.Joystick(0)
    joystick.init()

#Game Loop
def medLoop():
    player_speed = 0
    loop = True
    start_ticks=pygame.time.get_ticks()
    first_time = True
    while loop:
        #Eventhandling
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                pygame.quit()
                sys.exit()
            if event.type == pygame.KEYDOWN:
                if event.key == pygame.K_DOWN:
                    player_speed += 6
                if event.key == pygame.K_UP:
                    player_speed -= 6
            if event.type == pygame.KEYUP:
                if event.key == pygame.K_DOWN:
                    player_speed -= 6
                if event.key == pygame.K_UP:
                    player_speed += 6
            if event.type == JOYAXISMOTION:
                #Joystick Controls
                axis = [0, 0]
        
                for j in range(2):
                    axis[j] = joystick.get_axis(j)

                if round(axis[0]) == 1 and round(axis[1]) == 0: #Joystick Up
                    player_speed -= 6
                   
                if round(axis[0]) == -1 and round(axis[1]) == 0: #Joystick Down
                    player_speed += 6
                
                if round(axis[0]) == 0 and round(axis[1]) == 0: #Joystick neutral
                    player_speed = 0
        
        #Game Logic
        ballMovement()
        playerMovement(player_speed)
        opponentMovement()

        #Drawing
        screen.fill(BLACK)
        pygame.draw.rect(screen, WHITE, player)
        pygame.draw.rect(screen, WHITE, opponent)
        pygame.draw.ellipse(screen, WHITE, ball)
        pygame.draw.aaline(screen, WHITE, (screen_width/2,0), (screen_width/2, screen_height))

        if score_time:
            if player_score==5:
                end(1)
                loop=False
            elif opponent_score==5:
                end(0)
                loop=False
            else:
                ball_reset()

        #Text surface
        player_text = game_font.render(f"{player_score}", True, WHITE)
        opponent_text = game_font.render(f"{opponent_score}", True, WHITE)
        screen.blit(player_text, (screen_width/2+35, 0))
        screen.blit(opponent_text, (screen_width/2-85, 0))


        if(first_time):
            countdown(start_ticks, first_time)

        #Update Screen
        pygame.display.flip()
        clock.tick(60)