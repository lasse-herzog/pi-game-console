import pygame, sys
import math
import random

#Classes
class Block(pygame.sprite.Sprite):
    def __init__(self, path, x_pos, y_pos):
        super().__init__()
        self.image = pygame.image.load(path)
        self.rect = self.image.get_rect(center = (x_pos, y_pos))

class Player(Block):
    def __init__(self, path, x_pos, y_pos, speed):
        super().__init__(path, x_pos, y_pos)
        self.speed = speed
        self.movement = 0

    def stayInScreen(self):
        if self.rect.top <= 0:
            self.rect.top = 0
        if self.rect.bottom >= screen_height:
            self.rect.bottom = screen_height

    def update(self, ball_group):
        self.rect.y += self.movement
        self.stayInScreen()
    
class Ball(Block):
    def __init__(self, path, x_pos, y_pos, speedX, speedY, paddles):
        super().__init__()
        self.speedX = speedX * random.choice((-1,1))
        self.speedY = speedY * random.choice((-1,1))
        self.paddles = paddles
        self.active = False
        self.score_time = 0
    
    def update(self):
        if self.active:
            self.rect.x += ball_speedX 
            self.rect.y += ball_speedY
            self.collisions()
        else:
            self.resetCounter()

    def collisions(self):
        if self.rect.top <= 0 or self.rect.bottom >= screen_height:
            pygame.mixer.Sound.play(collide_sound)
            self.speedY *= -1   #reverses the ball speed
        
        if pygame.sprite.spritecollide(self, self.paddles, False):
            pygame.mixer.Sound.play(collide_sound)
            collision_paddle = pygame.sprite.spritecollide(self, self.paddles, False)[0].rect
            if abs(self.rect.right - collision_paddle.left) < 10 and self.speedX > 0:
                self.speedX *= -1
            if abs(self.rect.left - collision_paddle.right) < 10 and self.speedX < 0:
                self.speedX *= -1
            if abs(self.rect.top - collision_paddle.bottom) < 10 and self.speedY < 0:
                self.rect.top = collision_paddle.bottom
                self.speedY *= -1
            if abs(self.rect.bottom - collision_paddle.top) < 10 and self.speedY > 0:
                self.rect.top = collision_paddle.bottom
                self.speedY *= -1

    def resetBall(self):
        self.active=False
        self.speedX *= random.choice((-1, 1))
        self.speedY *= random.choice((-1, 1))
        self.score_time = pygame.time.get_ticks()
        self.rect.center = (screen_width/2, screen_height/2)
        pygame.mixer.Sound.play(score_sound)
    
    def resetCounter(self):
        currentTime = pygame.time.get_ticks()
        countdownNumber = 3
        
        if currentTime - score_time < 700:
            countdownNumber = 3
        if 700 < currentTime - score_time < 1400:
            countdownNumber = 2
        if 1400 < currentTime - score_time < 2100:
            countdownNumber = 1
        
        timeCounter = pixelFont.render(str(countdownNumber), True, WHITE)
        timeCounterRect = timeCounter.get_rect(center = (screen_width/2, screen_height/2 +50))
        pygame.draw.rect(screen, BLACK, timeCounterRect)
        screen.blit(timeCounter, timeCounterRect)

class Opponent(Block):
    def __init__(self, path, x_pos, y_pos, speed):
        super().__init__(path, x_pos, y_pos)
        self.speed = speed
    
    def update(self, ball_group):
        if self.rect.top < ball_group.sprite.rect.y:
            self.rect.y += self.speed
        if self.rect.top < ball_group.sprite.rect.y:
            self.rect.y -= self.speed
        self.stayInScreen()
    
    def stayInScreen(self):
        if self.rect.top <= 0:
            self.rect.top = 0
        if self.rect.bottom >= screen_height:
            self.rect.bottom = screen_height

class GameManager:
    def __init__(self, ball_group, paddle_group):
        self.player_score = 0
        self.opponent_score = 0
        self.ball_group = ball_group
        self.paddle_group = paddle_group
    
    def run_game(self):
        #Draw objects
        self.paddle_group.draw(screen)
        self.ball_group.draw(screen)

        #Update Objects
        self.paddle_group.update(self.ball_group)
        self.ball_group.update()
        self.reset_ball()
        self.draw_score()
    
    def reset_ball(self):
        if self.ball_group.sprite.rect.right >= screen_width:
            self.opponent_score += 1
            self.ball_group.sprite.reset_ball()
        if self.ball_group.sprite.rect.left <= 0:
            self.player_score += 1
            self.ball_group.sprite.reset_ball()

    def draw_score(self):
        player_score = pixelFont.render(str(self.player_score), True, WHITE)
        opponent_score = pixelFont.render(str(self.opponent_score), True, WHITE)

        player_score_rect = player_score.get_rect((screen_width/2+35, 0))
        opponent_score_rect = opponent_score.get_rect((screen_width/2-85, 0))

        screen.blit(player_score, player_score_rect)
        screen.blit(opponent_score, opponent_score_rect)

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
screen_width = 800
screen_height = 600
screen = pygame.display.set_mode((screen_width, screen_height))
pygame.display.set_caption('PiG-C Pong')

#Global Variables
pixelFont = pygame.font.Font("Pixeled.ttf", 64)
collide_sound = pygame.mixer.Sound("pong.ogg")
score_sound = pygame.mixer.Sound("score.ogg")
middle_line = pygame.Rect(screen_width/2 - 2, 0, 4, screen_height)


#Objects
player = Player("paddle.png", screen_width - 20, screen_height/2, 5)
opponent = Opponent("paddle.png", 20, screen_width/2, 5)
paddle_group = pygame.sprite.Group()
paddle_group.add(player)
paddle_group.add(opponent)

ball = Ball("ball.png", screen_width/2, screen_height/2, 4, 4, paddle_group)
ball_sprite = pygame.sprite.GroupSingle()
ball_sprite.add(ball)

game_manager = GameManager(ball_sprite, paddle_group)

#Speed Variables
ball_speedX = 5
ball_speedY = 5
player_speed = 0
opponent_speed = 4


#Text variables
player_score = 0
opponent_score = 0
#game_font = pygame.font.Font("Pixeled.ttf", 64)

#Timer
score_time = True

#Sounds
pong_sound = pygame.mixer.Sound("pong.ogg")
score_sound = pygame.mixer.Sound("score.ogg")

#Game Loop
while True:
    #Eventhandling
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            pygame.quit()
            sys.exit()
        if event.type == pygame.KEYDOWN:
            if event.key == pygame.K_DOWN:
                player_speed += player.speed
            if event.key == pygame.K_UP:
                player_speed -= player.speed
        if event.type == pygame.KEYUP:
            if event.key == pygame.K_DOWN:
                player_speed -= player.speed
            if event.key == pygame.K_UP:
                player_speed += player.speed
    
    
    #Drawing
    screen.fill(BLACK)
    pygame.draw.rect(screen, WHITE, middle_line)

    #Run game
    game_manager.run_game()

    #Update Screen
    pygame.display.flip()
    clock.tick(60)