import pygame, sys
import math
import random

#Initialize Game
pygame.init()
clock = pygame.time.Clock()

#Display setup
screen_width = 800
screen_height = 600
screen = pygame.display.set_mode(screen_width, screen_height)
pygame.display.set_caption('PiG-C Pong')

#Game Loop
while True:
    #Eventhandling
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            pygame.quit()
            sys.exit()
    
    #Update Screen
    pygame.display.flip()
    clock.tick(60)