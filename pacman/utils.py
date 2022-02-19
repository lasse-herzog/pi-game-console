import os
from enum import Enum

TILE_SIZE = 16

FPS = 60

GHOST_FRIGHT_DURATION = [5]
GHOST_PHASES_0 = [7, 20, 7, 20, 5, 20, 5]
GHOST_PHASES_1 = [7, 20, 7, 20, 5, 1033, 1 / 60]
GHOST_PHASES_2 = [5, 20, 5, 20, 5, 1037, 1 / 60]

PACMAN_SPEED = [128, 144, 160, 144]
GHOST_SPEED = [120, 136, 152, 152]


class Directions(Enum):
    def __eq__(self, other):
        return self.value == other.value

    UP = (0, -1)
    LEFT = (-1, 0)
    DOWN = (0, 1)
    RIGHT = (1, 0)
    NONE = (0, 0)


def load_asset(asset):
    return os.path.join("./assets", asset)
