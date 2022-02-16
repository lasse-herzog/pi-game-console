import pygame

from main import Directions
from main import TILE_SIZE
from main import load_asset

tiles = {}


class Tile(pygame.sprite.Sprite):
    def __init__(self, row, column):
        super().__init__()
        self.row = row
        self.column = column

    def has_legal_neighbour(self, direction):
        try:
            if isinstance(
                    tiles[(self.row + direction.value[1], self.column + direction.value[0])], LegalTile):
                return True
        except KeyError:
            return False
        return False

    def has_wall_neighbour(self, direction):
        try:
            if isinstance(tiles[(self.row + direction.value[1], self.column + direction.value[0])], WallTile):
                return True
        except KeyError:
            return False
        return False


class EmptyTile(Tile):
    def __init__(self, row, column):
        super().__init__(row, column)


class LegalTile(Tile):
    def __init__(self, row, column, pellet):
        super().__init__(row, column)

        self.image = pygame.Surface([TILE_SIZE, TILE_SIZE])
        self.rect = self.image.get_rect(topleft=(column * TILE_SIZE, row * TILE_SIZE))
        self.pellet = pellet


class WallTile(Tile):
    def __init__(self, row, column, is_corner):
        super().__init__(row, column)

        self.is_corner = is_corner
        self.image = pygame.image.load(load_asset("wall_corner.png")) if is_corner else pygame.image.load(
            load_asset("wall.png"))
        self.rect = self.image.get_rect(topleft=(column * TILE_SIZE, row * TILE_SIZE))

    def rotate(self, direction):
        match direction:
            case Directions.UP:
                self.image = pygame.transform.rotate(self.image, 90)
            case Directions.RIGHT:
                pass
            case Directions.DOWN:
                self.image = pygame.transform.rotate(self.image, 270)
            case Directions.LEFT:
                self.image = pygame.transform.rotate(self.image, 180)


class BorderTile(WallTile):
    def __init__(self, row, column, is_corner):
        super().__init__(row, column, is_corner)

        self.image = pygame.image.load(load_asset("border_corner.png")) if is_corner else pygame.image.load(
            load_asset("border.png"))
        self.rect = self.image.get_rect(topleft=(column * TILE_SIZE, row * TILE_SIZE))


def load_level(level):
    row_counter = 0
    maze_sprites = pygame.sprite.RenderPlain()

    for line in open(load_asset(level)):
        column_counter = 0

        for char in line.replace(" ", ""):
            new_tile = None
            match char:
                case 'X':
                    new_tile = EmptyTile(row_counter, column_counter)
                case 'B':
                    new_tile = BorderTile(row_counter, column_counter, True)
                    maze_sprites.add(new_tile)
                case 'b':
                    new_tile = BorderTile(row_counter, column_counter, False)
                    maze_sprites.add(new_tile)
                case 'W':
                    new_tile = WallTile(row_counter, column_counter, True)
                    maze_sprites.add(new_tile)
                case 'w':
                    new_tile = WallTile(row_counter, column_counter, False)
                    maze_sprites.add(new_tile)
                case '*':
                    new_tile = LegalTile(row_counter, column_counter, True)
                    maze_sprites.add(new_tile)
                case '.':
                    new_tile = LegalTile(row_counter, column_counter, True)
                    maze_sprites.add(new_tile)

            tiles[(row_counter, column_counter)] = new_tile
            column_counter += 1
        row_counter += 1

    for tile in tiles.values():
        if issubclass(type(tile), WallTile):
            if tile.is_corner:
                if tile.has_wall_neighbour(Directions.UP) and tile.has_wall_neighbour(Directions.RIGHT):
                    tile.rotate(Directions.UP)
                elif tile.has_wall_neighbour(Directions.RIGHT) and tile.has_wall_neighbour(Directions.DOWN):
                    tile.rotate(Directions.RIGHT)
                elif tile.has_wall_neighbour(Directions.DOWN) and tile.has_wall_neighbour(Directions.LEFT):
                    tile.rotate(Directions.DOWN)
                elif tile.has_wall_neighbour(Directions.LEFT) and tile.has_wall_neighbour(Directions.UP):
                    tile.rotate(Directions.LEFT)
            else:
                if tile.has_legal_neighbour(Directions.DOWN):
                    tile.rotate(Directions.UP)
                elif tile.has_legal_neighbour(Directions.LEFT):
                    tile.rotate(Directions.RIGHT)
                elif tile.has_legal_neighbour(Directions.UP):
                    tile.rotate(Directions.DOWN)
                elif tile.has_legal_neighbour(Directions.RIGHT):
                    tile.rotate(Directions.LEFT)

    return tiles, maze_sprites
