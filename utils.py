import os


def load_asset(asset):
    return os.path.join('assets', asset)


# Game Fonts
HEADER_FONT = load_asset('ArcadeClassic-ov2x.ttf')
FONT = load_asset('Pixeled.ttf')

# Colors
WHITE = (255, 255, 255)
BLACK = (0, 0, 0)
GRAY = (50, 50, 50)
RED = (255, 0, 0)
GREEN = (0, 255, 0)
BLUE = (0, 0, 255)
YELLOW = (255, 255, 0)
GRAY_B = (25, 25, 75)
DARK_BLUE = (0, 0, 152)