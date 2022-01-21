import pygame, sys
import math
import random

#Initialize Game
pygame.init()
clock = pygame.time.Clock()

#Colors
BLUE  = (0, 0, 255)
RED   = (255, 0, 0)
GREEN = (0, 255, 0)
BLACK = (0, 0, 0)
WHITE = (255, 255, 255)

#Display setup
screen_width = 800
screen_height = 600
screen = pygame.display.set_mode((screen_width, screen_height))
pygame.display.set_caption('PiG-C Pong')

#Rects
ball = pygame.Rect(screen_width/2 - 7.5, screen_height/2 - 7.5, 15,15)
player = pygame.Rect(screen_width - 15, screen_height/2 - 70, 10, 120)
opponent = pygame.Rect(5, screen_height/2 - 70, 10, 120)

#Speed Variables
ball_speedX = 5
ball_speedY = 5
player_speed = 0
opponent_speed = 4

#Game Logic Functions
def ballMovement():
    global ball_speedX, ball_speedY, player_score, opponent_score, score_time
    ball.x += ball_speedX 
    ball.y += ball_speedY 

    #Collisions
    if ball.top <= 0 or ball.bottom >= screen_height:
        ball_speedY *= -1   #reverses the ball speed
    if ball.left <= 0: 
        player_score +=1
        score_time = pygame.time.get_ticks()
    if ball.right >= screen_width:
        opponent_score += 1
        score_time = pygame.time.get_ticks()
    if ball.colliderect(player) or ball.colliderect(opponent):
        ball_speedX *= -1

def playerMovement():
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
        ball_speedY = 5 * random.choice((1, -1))
        ball_speedX = 5 * random.choice((1, -1))
        score_time = None
    

#Text variables
player_score = 0
opponent_score = 0
game_font = pygame.font.Font("Pixeled.ttf", 64)

#Timer
score_time = True

#Game Loop
while True:
    #Eventhandling
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            pygame.quit()
            sys.exit()
        if event.type == pygame.KEYDOWN:
            if event.key == pygame.K_DOWN:
                player_speed += 7
            if event.key == pygame.K_UP:
                player_speed -= 7
        if event.type == pygame.KEYUP:
            if event.key == pygame.K_DOWN:
                player_speed -= 7
            if event.key == pygame.K_UP:
                player_speed += 7
    
    #Game Logic
    ballMovement()
    playerMovement()
    opponentMovement()

    #Drawing
    screen.fill(BLACK)
    pygame.draw.rect(screen, WHITE, player)
    pygame.draw.rect(screen, WHITE, opponent)
    pygame.draw.ellipse(screen, WHITE, ball)
    pygame.draw.aaline(screen, WHITE, (screen_width/2,0), (screen_width/2, screen_height))

    if score_time:
        ball_reset()

    #Text surface
    player_text = game_font.render(f"{player_score}", True, WHITE)
    opponent_text = game_font.render(f"{opponent_score}", True, WHITE)
    screen.blit(player_text, (screen_width/2+35, 0))
    screen.blit(opponent_text, (screen_width/2-85, 0))


    #Update Screen
    pygame.display.flip()
    clock.tick(60)