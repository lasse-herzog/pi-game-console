#Imports
import pygame, sys
from pygame.locals import *
import math, random


#Initialize Game
pygame.init()
clock = pygame.time.Clock()
done = False # Loop until the user clicks the close button.

# Initialize the joysticks.
pygame.joystick.init()

#Display
RESOLUTION = (1280, 720)
WIDTH, HEIGHT = RESOLUTION
screen = pygame.display.set_mode(RESOLUTION)
pygame.display.set_caption("PiG-C Pong")

#Colors
WHITE = (255, 255, 255)
BLUE  = (0, 0, 255)
RED   = (255, 0, 0)
GREEN = (0, 255, 0)
BLACK = (0, 0, 0)

#Paddles
leftPaddle_posX = 50
leftPaddle_posY = 50

rightPaddle_posX = 1220
rightPaddle_posY = 50

leftPaddle_HEIGHT = 150
rightPaddle_HEIGHT = 150
#Paddle movement
v=10       #velocity
leftPaddle_canMoveUp = True
leftPaddle_canMoveDown = True
rightPaddle_canMoveUp = True
rightPaddle_canMoveDown = True

#Input Map (saves pushed buttons)
inputMap = [False, False]
   
        

# -------- Main Program Loop -----------
while not done:
    #Clear Screen
    screen.fill(BLACK)
    #FPS
    clock.tick(60)

    for event in pygame.event.get():
        #Steuerung über Tastatur zum Testen
        if event.type == pygame.QUIT:
            cancel = True
            pygame.quit()
        if event.type == pygame.KEYDOWN:
            if event.key == pygame.K_DOWN:
                inputMap[0] = True
            if event.key == pygame.K_UP:
                inputMap[1] == True
        
        if event.type == pygame.KEYDOWN:
            if event.key == pygame.K_DOWN:
                inputMap[0] = False
            if event.key == pygame.K_UP:
                inputMap[1] = False

    #Game logic rightPaddle
    if rightPaddle_posX < (0 - rightPaddle_HEIGHT / 2):
        rightPaddle_canMoveUp = False
    else:
        rightPaddle_canMoveUp = True
    if rightPaddle_posY > (0- rightPaddle_HEIGHT /2):
        rightPaddle_canMoveDown = False
    else:
        rightPaddle_canMoveUp = True
    #Game Logic leftPaddle
    if leftPaddle_posX < (0 - leftPaddle_HEIGHT / 2):
        leftPaddle_canMoveUp = False
    else:
        leftPaddle_canMoveUp = True
    if leftPaddle_posY > (0- leftPaddle_HEIGHT /2):
        leftPaddle_canMoveDown = False
    else:
        leftPaddle_canMoveUp = True 

    #move rightPaddle
    if rightPaddle_canMoveUp:
        if inputMap[1]: rightPaddle_posY += v
    if rightPaddle_canMoveUp:
        if inputMap[0]: rightPaddle_posX += v
    #move leftPaddle
    if leftPaddle_canMoveUp:
        if inputMap[1]: leftPaddle_posY += v
    if leftPaddle_canMoveUp:
        if inputMap[0]: leftPaddle_posX += v

        
    #Eingabe mit Joystick
    """
    # Possible joystick actions: JOYAXISMOTION, JOYBALLMOTION, JOYBUTTONDOWN,
    # JOYBUTTONUP, JOYHATMOTION
    for event in pygame.event.get():  # User did something.
        if event.type == pygame.QUIT:  # If user clicked close.
            done = True  # Flag that we are done so we exit this loop.
        elif event.type == pygame.JOYBUTTONDOWN:
            print("Joystick button pressed.")
        elif event.type == pygame.JOYBUTTONUP:
            print("Joystick button released.")

    for i in range(pygame.joystick.get_count()):
        joystick = pygame.joystick.Joystick(i)
        joystick.init()

        axes = joystick.get_numaxes()

        for j in range(axes):
            # axis 0 value 1, axis 1 value 0: up
            # axis 0 value 1, axis 1 value 1: up-right
            # axis 0 value 0, axis 1 value 1: right
            # axis 0 value -1, axis 1 value 1: down-right
            # axis 0 value -1, axis 1 value 0: down
            # axis 0 value -1, axis 1 value -1: down-left
            # axis 0 value 0, axis 1 value -1: left
            # axis 0 value 1, axis 1 value -1: up-left
            axis = joystick.get_axis(j)

        buttons = joystick.get_numbuttons()

        for j in range(buttons):
            # button is 1 when pressed else 0
            button = joystick.get_button(j)
    """
#pygame.quit()