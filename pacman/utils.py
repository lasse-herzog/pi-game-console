import os
from enum import Enum

TILE_SIZE = 16


class Directions(Enum):
    def __eq__(self, other):
        return self.value == other.value

    UP = (0, -1)
    LEFT = (-1, 0)
    DOWN = (0, 1)
    RIGHT = (1, 0)
    NONE = (0, 0)


def load_asset(asset):
    return os.path.join("assets", asset)
