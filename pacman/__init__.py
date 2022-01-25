import heapq
import os
import sys
from dataclasses import dataclass

import pygame
from pygame.locals import *


class Graph:
    adjacency_list = {}

    def add_bidirectional_edge(self, node, neighbour_node):
        self.add_edge(node, neighbour_node)
        self.add_edge(neighbour_node, node)

    def add_edge(self, node, neighbour_node):
        weight = abs(node.x - neighbour_node.x + node.y - node.y)

        if node.name not in self.adjacency_list:
            self.adjacency_list[node.name] = [(neighbour_node, weight)]
        else:
            self.adjacency_list[node.name].append((neighbour_node, weight))


@dataclass(unsafe_hash=True)
class Node:
    name: str
    x: int
    y: int


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


class Ghost(pygame.sprite.Sprite):
    def __init__(self):
        pygame.sprite.Sprite.__init__(self)
        self.current_node = None
        self.target_node = None
        self.path = []
        self.speed = (0, 0)

    def update_target_node(self):
        pacman_position = self.rect.center
        self.path = find_shortest_path(graph.adjacency_list, self.current_node, self.target_node)
        self.move_to_node()

    def move_to_node(self):
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


class Blinky(Ghost):
    def __init__(self):
        Ghost.__init__(self)
        self.current_node = nodeA
        self.target_node = nodeD

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


def find_shortest_path(adj, start, end):
    distances = {start: 0}
    parent = {start: None}
    priority_queue = [(0, start.name)]
    visited = set()

    while priority_queue:
        current_distance, current_node = heapq.heappop(priority_queue)
        if current_node in visited:
            continue
        if current_node == end.name:
            break
        visited.add(current_node)
        for neighbour_node, weight in adj[current_node]:
            if neighbour_node not in distances or distances[neighbour_node] > current_distance + weight:
                distances[neighbour_node] = current_distance + weight
                parent[neighbour_node] = current_node
                heapq.heappush(priority_queue, (distances[neighbour_node], neighbour_node.name))

    return list(parent.keys())


if __name__ == '__main__':
    pygame.init()

    window = pygame.display.set_mode((224, 248))

    pygame.display.set_caption('Pacman')
    screen = pygame.display.get_surface()

    labyrinth = load_image("labyrinth.png")
    labyrinth_collision_mask = pygame.mask.from_surface(load_image("labyrinth_collision_map.png"))

    pacman = Pacman()

    clock = pygame.time.Clock()

    nodeA = Node("A", 80, 80)
    nodeB = Node("B", 160, 80)
    nodeC = Node("C", 80, 160)
    nodeD = Node("D", 160, 160)

    graph = Graph()
    graph.add_edge(nodeA, nodeB)
    graph.add_edge(nodeA, nodeC)
    graph.add_edge(nodeC, nodeA)
    graph.add_edge(nodeB, nodeD)
    graph.add_edge(nodeC, nodeD)

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
