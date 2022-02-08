import heapq
import os
import sys
from abc import abstractmethod, ABCMeta
from dataclasses import dataclass
from enum import Enum
from functools import total_ordering

import pygame
from PIL import Image
from pygame.locals import *

TILE_SIZE = 16


class Directions(Enum):
    UP = (0, -1)
    DOWN = (0, 1)
    LEFT = (-1, 0)
    RIGHT = (1, 0)
    NONE = (0, 0)


class GhostState(Enum):
    SCATTER = 0
    CHASE = 1
    FLIGHT = 2


@dataclass(unsafe_hash=True)
@total_ordering
class Node:
    x: int
    y: int

    def __lt__(self, other):
        return self.x < other.x


class Eatable(pygame.sprite.Sprite):
    def __init__(self):
        super().__init__()
        self.points = 0

    def update(self):
        if self.rect.colliderect(pacman.rect):
            pacman.score += self.points
            self.kill()


class Graph:
    adjacency_list = {}

    def add_edge(self, node, neighbour_node, direction):
        weight = abs(node.x - neighbour_node.x + node.y - neighbour_node.y)

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

    def check_for_neighbour(self, node, direction):
        for neighbour in self.adjacency_list[node]:
            if neighbour[2] is direction:
                return neighbour[0]

    def fill_graph_from_collision_map(self, level):
        img = Image.open(os.path.join("assets", level))
        height_iterator = iter(range(img.height))

        for y in height_iterator:
            node_found = False
            left_node = None
            width_iterator = iter(range(img.width))

            for x in width_iterator:
                rgba = img.getpixel((x, y))

                if rgba[0] == 255:
                    if node_found is not True:
                        node_found = True
                    node = Node(x, y)

                    if left_node is not None:
                        self.add_horizontal_bidirectional_edge(left_node, node)
                    left_node = node
                    next(width_iterator)
                elif rgba[1] == 255:
                    left_node = None

            if node_found:
                next(height_iterator)

        width_iterator = iter(range(img.width))
        for x in width_iterator:
            node_found = False
            top_node = None
            height_iterator = iter(range(img.height))

            for y in height_iterator:
                rgba = img.getpixel((x, y))

                if rgba[0] == 255:
                    if node_found is not True:
                        node_found = True
                    node = self.get_node_at_position(x, y)

                    if top_node is not None:
                        self.add_vertical_bidirectional_edge(top_node, node)
                    top_node = node
                    next(height_iterator)
                elif rgba[1] == 255:
                    top_node = None

            if node_found:
                next(width_iterator)

    def find_shortest_path(self, start, end):
        distances = {start: 0}
        parent = {start: None}
        priority_queue = [(0, start)]
        visited = set()

        while priority_queue:
            current_distance, current_node = heapq.heappop(priority_queue)
            if current_node in visited:
                continue
            if current_node == end:
                break
            visited.add(current_node)
            for neighbour_node, weight, _ in self.adjacency_list[current_node]:
                if neighbour_node not in distances or distances[neighbour_node] > current_distance + weight:
                    distances[neighbour_node] = current_distance + weight
                    parent[neighbour_node] = current_node
                    heapq.heappush(priority_queue, (distances[neighbour_node], neighbour_node))

        node = end
        shortest_path = [node]
        while node is not start:
            node = parent[node]
            shortest_path.insert(0, node)
        return shortest_path

    def get_node_at_position(self, x, y):
        for node in list(self.adjacency_list.keys()):
            if (x, y) in [(node.x, node.y), (node.x + 1, node.y), (node.x, node.y + 1), (node.x + 1, node.y + 1)]:
                return node


class Actor(pygame.sprite.Sprite, metaclass=ABCMeta):
    @abstractmethod
    def __init__(self):
        super().__init__()
        self.current_node = None
        self.direction = Directions.NONE

    @property
    @abstractmethod
    def next_node(self) -> Node:
        pass

    @abstractmethod
    def update_target_node(self):
        pass

    def move_to_next_node(self):
        for neighbour in graph.adjacency_list[self.current_node]:
            if neighbour[0] is self.next_node:
                self.direction = neighbour[2]

    def out_of_bounds(self):
        node_distance = abs(self.current_node.x - self.next_node.x + self.current_node.y - self.next_node.y)
        distance = abs(self.rect.center[0] - self.current_node.x + self.rect.center[1] - self.current_node.y)
        return distance >= node_distance

    def update(self):
        self.rect = self.rect.move(self.direction.value)
        if self.out_of_bounds():
            self.current_node = self.next_node
            self.update_target_node()
            if self.next_node is not self.current_node:
                self.move_to_next_node()
            else:
                self.direction = Directions.NONE
            self.rect.center = (self.current_node.x, self.current_node.y)


class Pacman(Actor):
    def __init__(self):
        super().__init__()
        self.score = 0
        self.input = None
        self.current_node = graph.get_node_at_position(111, 139)
        self.next_node = self.current_node
        self.image = load_image("pacman_01.png")
        self.rect = self.image.get_rect(center=(self.current_node.x, self.current_node.y))

    @property
    def next_node(self):
        return self._next_node

    @next_node.setter
    def next_node(self, value):
        self._next_node = value

    def update_target_node(self):
        node_in_input_direction = graph.check_for_neighbour(self.current_node, self.input)
        node_in_current_direction = graph.check_for_neighbour(self.current_node, self.direction)

        if node_in_input_direction is not None:
            self.next_node = node_in_input_direction
        elif node_in_current_direction is not None:
            self.next_node = node_in_current_direction


class Ghost(Actor):
    @abstractmethod
    def __init__(self):
        super().__init__()
        self.path = []
        self.state = GhostState.SCATTER
        self.target_node = self.current_node

    @property
    @abstractmethod
    def corner(self):
        pass

    @property
    def next_node(self):
        return self.path[1] if len(self.path) > 1 else self.target_node

    @abstractmethod
    def update_target(self):
        pass

    def scatter(self):
        if self.target_node is not self.corner:
            self.target_node = self.corner
        if self.current_node is self.corner:
            self.state = GhostState.CHASE

    def update_target_node(self):
        if self.state is GhostState.SCATTER:
            self.scatter()
        elif self.state is GhostState.CHASE:
            self.update_target()
        elif self.state is GhostState.FLIGHT:
            pass
        self.path = graph.find_shortest_path(self.current_node, self.target_node)


class Blinky(Ghost):
    def __init__(self):
        super().__init__()
        self.current_node = graph.get_node_at_position(111, 91)
        self.target_node = self.current_node
        self.image = load_image("blinky.png")
        self.rect = self.image.get_rect(center=(self.current_node.x, self.current_node.y))

    @property
    def corner(self):
        return graph.get_node_at_position(211, 11)

    def update_target(self):
        self.target_node = pacman.current_node


class Pinky(Ghost):
    def __init__(self):
        super().__init__()
        self.current_node = graph.get_node_at_position(111, 91)
        self.target_node = self.current_node
        self.image = load_image("blinky.png")
        self.rect = self.image.get_rect(center=(self.current_node.x, self.current_node.y))

    @property
    def corner(self):
        return graph.get_node_at_position(11, 11)

    def update_target(self):
        self.target_node = pacman.next_node


def load_image(i):
    return pygame.image.load(os.path.join("assets", i))


def input(events):
    for event in events:
        if event.type == QUIT:
            sys.exit(0)
        if event.type == pygame.KEYDOWN:
            if event.key == pygame.K_LEFT or event.key == ord('a'):
                return Directions.LEFT
            if event.key == pygame.K_RIGHT or event.key == ord('d'):
                return Directions.RIGHT
            if event.key == pygame.K_UP or event.key == ord('w'):
                return Directions.UP
            if event.key == pygame.K_DOWN or event.key == ord('s'):
                return Directions.DOWN


if __name__ == '__main__':
    pygame.init()

    window = pygame.display.set_mode((224, 248))

    pygame.display.set_caption('Pacman')
    screen = pygame.display.get_surface()

    labyrinth = load_image("labyrinth.png")

    clock = pygame.time.Clock()

    graph = Graph()
    graph.fill_graph_from_collision_map("labyrinth_collision_map.png")

    pacman = Pacman()
    blinky = Blinky()
    pinky = Pinky()
    all_sprites = pygame.sprite.RenderPlain(pacman, blinky, pinky)

    while True:
        clock.tick(60)
        pacman_input = input(pygame.event.get())
        if isinstance(pacman_input, Directions):
            pacman.input = pacman_input
        all_sprites.update()

        screen.fill([0, 0, 0])
        screen.blit(labyrinth, (0, 0))

        all_sprites.draw(screen)
        pygame.display.flip()
