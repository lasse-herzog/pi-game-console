import pygame

from pacman.utils import Directions, load_asset, TILE_SIZE

tiles = {}
sprites = pygame.sprite.RenderPlain()


def load_level(level):
    row_counter = 0

    for line in open(load_asset(level)):
        column_counter = 0

        for char in line.replace(" ", ""):
            new_tile = None
            match char:
                case 'X':
                    new_tile = EmptyTile(row_counter, column_counter)
                case 'B':
                    new_tile = BorderTile(row_counter, column_counter, True)
                    sprites.add(new_tile)
                case 'b':
                    new_tile = BorderTile(row_counter, column_counter, False)
                    sprites.add(new_tile)
                case 'W':
                    new_tile = WallTile(row_counter, column_counter, True)
                    sprites.add(new_tile)
                case 'w':
                    new_tile = WallTile(row_counter, column_counter, False)
                    sprites.add(new_tile)
                case '*':
                    new_tile = LegalTile(row_counter, column_counter, True)
                    sprites.add(new_tile)
                case '.':
                    new_tile = LegalTile(row_counter, column_counter, True)
                    sprites.add(new_tile)
                case '-' | '|':
                    new_tile = LegalTile(row_counter, column_counter, False)
                    sprites.add(new_tile)

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


class Tile(pygame.sprite.Sprite):
    def __init__(self, row, column):
        super().__init__()
        self.row = row
        self.column = column

    def distance(self, other_tile):
        return (other_tile.row - self.row) ** 2 + (other_tile.column - self.column) ** 2

    def get_direction(self, other_tile):
        return Directions((other_tile.column - self.column, other_tile.row - self.row))

    def get_neighbour(self, direction):
        return tiles[(self.row + direction.value[1], self.column + direction.value[0])]

    def get_legal_neighbours(self):
        return [self.get_neighbour(direction) for direction in Directions if
                direction is not Directions.NONE and self.has_legal_neighbour(direction)]

    def has_legal_neighbour(self, direction):
        try:
            if isinstance(self.get_neighbour(direction), LegalTile):
                return True
        except KeyError:
            return False
        return False

    def has_wall_neighbour(self, direction):
        try:
            if isinstance(self.get_neighbour(direction), WallTile):
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
