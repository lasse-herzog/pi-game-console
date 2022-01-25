import heapq
import os
import sys
from dataclasses import dataclass
from enum import Enum

import pygame
from PIL import Image
from pygame.locals import *


class Directions(Enum):
    UP = (0, -1)
    DOWN = (0, 1)
    LEFT = (-1, 0)
    RIGHT = (1, 0)


@dataclass(unsafe_hash=True)
class Node:
    id: str
    x: int
    y: int


class Graph:
    adjacency_list = {}

    def add_edge(self, node, neighbour_node, direction):
        weight = abs(node.x - neighbour_node.x + node.y - node.y)

        if node not in self.adjacency_list:
            self.adjacency_list[node] = [(neighbour_node, weight, direction)]
        else:
            self.adjacency_list[node].append((neighbour_node, weight, direction))

    def add_horizontal_bidirectional_edge(self, left_node, right_node):
        self.add_edge(left_node, right_node, Directions.RIGHT)
        self.add_edge(right_node, left_node, Directions.LEFT)

    def add_vertical_bidirectional_edge(self, top_node, bottom_node):
        self.add_edge(top_node, bottom_node, Directions.DOWN)
        self.add_edge(bottom_node, top_node, Directions.UP)

    def fill_graph_from_collision_map(self, level):
        img = Image.open(os.path.join("data", level))
        node_id = 'a'

        width_iterator = iter(range(img.width))

        for x in width_iterator:
            node_found = False
            left_node = None
            height_iterator = iter(range(img.height))

            for y in height_iterator:
                rgba = img.getpixel((x, y))

                if rgba[0] == 255:
                    node = Node(node_id, x, y)
                    node_id = chr(ord(node_id) + 1)

                    if left_node is not None:
                        self.add_horizontal_bidirectional_edge(left_node, node)
                    left_node = node
                    next(height_iterator)

                elif rgba[1] == 255:
                    left_node = None
            if node_found:
                next(width_iterator)
        height_iterator = iter(range(img.height))

        for y in height_iterator:
            node_found = False
            top_node = None
            width_iterator = iter(range(img.width))

            for x in width_iterator:
                rgba = img.getpixel((x, y))

                if rgba[0] == 255:
                    node = self.get_node_at_position(x, y)

                    if top_node is not None:
                        self.add_vertical_bidirectional_edge(top_node, node)
                    top_node = node

                    next(width_iterator)
                elif rgba[1] == 255:
                    top_node = None
            if node_found:
                next(height_iterator)

    def find_shortest_path(self, start, end):
        distances = {start: 0}
        parent = {start: None}
        priority_queue = [(0, start.id)]
        visited = set()

        while priority_queue:
            current_distance, current_node = heapq.heappop(priority_queue)
            if current_node in visited:
                continue
            if current_node == end.id:
                break
            visited.add(current_node)
            for neighbour_node, weight in self.adjacency_list[current_node]:
                if neighbour_node not in distances or distances[neighbour_node] > current_distance + weight:
                    distances[neighbour_node] = current_distance + weight
                    parent[neighbour_node] = current_node
                    heapq.heappush(priority_queue, (distances[neighbour_node], neighbour_node.id))

        return list(parent.keys())

    def get_node_at_position(self, x, y):
        for node in list(self.adjacency_list.keys()):
            if (x, y) in [(node.x, node.y), (node.x + 1, node.y), (node.x, node.y + 1), (node.x + 1, node.y + 1)]:
                return node


class Entity(pygame.sprite.Sprite):
    def __init__(self):
        pygame.sprite.Sprite.__init__(self)
        self.current_node = None
        self.target_node = None
        self.path = []
        self.speed = (0, 0)

    def update_target_node(self):
        self.path = graph.find_shortest_path(self.current_node, self.target_node)
        self.move_to_next_node()

    def move_to_next_node(self):
        dx = self.path[1].x - self.current_node.x
        dy = self.path[1].y - self.current_node.y

        x = 0 if dx == 0 else 1 if dx > 0 else -1
        y = 0 if dy == 0 else 1 if dy > 0 else -1

        self.speed = (x, y)

    def update(self):
        if self.rect.center == (self.path[1].x, self.path[1].y):
            self.current_node = self.path[1]
            self.update_target_node()

        self.rect = self.rect.move(self.speed)


class Pacman(pygame.sprite.Sprite):
    def __init__(self):
        pygame.sprite.Sprite.__init__(self)

        self.image = load_image("pacman_01.png")
        self.rect = self.image.get_rect(center=(113, 188))
        self.mask = pygame.mask.Mask((16, 16), True)

        self.speed = (0, 0)
        self.old_speed = (0, 0)

    def update(self):
        self._move()

    def _move(self):
        if will_collide_with_wall(self, self.speed):
            if will_collide_with_wall(self, self.old_speed):
                return
            else:
                self.rect = self.rect.move(self.old_speed)
        else:
            self.rect = self.rect.move(self.speed)
            self.old_speed = self.speed


class Ghost(Entity):
    def __init__(self):
        Entity.__init__(self)


class Blinky(Ghost):
    def __init__(self):
        Ghost.__init__(self)
        self.current_node = None
        self.target_node = None

        self.image = load_image("blinky.png")
        self.rect = self.image.get_rect(center=(self.current_node.x, self.current_node.y))

        self.update_target_node()


def load_image(i):
    return pygame.image.load(os.path.join("data", i))


def will_collide_with_wall(self, speed):
    return labyrinth_collision_mask.overlap(self.mask, self.rect.move(speed).topleft)


def input(events):
    for event in events:
        if event.type == QUIT:
            sys.exit(0)
        if event.type == pygame.KEYDOWN:
            if event.key == pygame.K_LEFT or event.key == ord('a'):
                pacman.speed = (-1, 0)
            if event.key == pygame.K_RIGHT or event.key == ord('d'):
                pacman.speed = (1, 0)
            if event.key == pygame.K_UP or event.key == ord('w'):
                pacman.speed = (0, -1)
            if event.key == pygame.K_DOWN or event.key == ord('s'):
                pacman.speed = (0, 1)


if __name__ == '__main__':
    pygame.init()

    window = pygame.display.set_mode((224, 248))

    pygame.display.set_caption('Pacman')
    screen = pygame.display.get_surface()

    labyrinth = load_image("labyrinth.png")
    labyrinth_collision_mask = pygame.mask.from_surface(load_image("labyrinth_collision_map.png"))

    pacman = Pacman()

    clock = pygame.time.Clock()

    graph = Graph()
    graph.fill_graph_from_collision_map("labyrinth_collision_map.png")

    blinky = Blinky()
    all_sprites = pygame.sprite.RenderPlain(pacman, blinky)

    while True:
        clock.tick(60)
        input(pygame.event.get())
        all_sprites.update()

        screen.fill([0, 0, 0])
        screen.blit(labyrinth, (0, 0))

        all_sprites.draw(screen)
        pygame.display.flip()
