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
ball = pygame.Rect(screen_width/2 - 15, screen_height/2 - 15, 15,15)
player = pygame.Rect(screen_width - 20, screen_height/2 - 70, 10, 140)
opponent = pygame.Rect(10, screen_height/2 - 70, 10, 140)


#Game Loop
while True:
    #Eventhandling
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            pygame.quit()
            sys.exit()
    
    #Drawing
    screen.fill(BLACK)
    pygame.draw.rect(screen, WHITE, player)
    pygame.draw.rect(screen, WHITE, opponent)
    pygame.draw.rect(screen, WHITE, ball)
    pygame.draw.aaline(screen, WHITE, (screen_width/2,0), (screen_width/2, screen_height))

    #Update Screen
    pygame.display.flip()
    clock.tick(60)