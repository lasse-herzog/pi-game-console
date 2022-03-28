---
layout: default
title: Pacman
nav_order: 2
---

# Einleitung

Der folgende Artikel basiert stark auf dem excellenten ["Pacman Dossier"](https://www.gamedeveloper.com/design/the-pac-man-dossier),
da diese Version von Pacman sich nah an den im Dossier enthaltenen Informationen orientiert.

# Das Labyrinth

Das Labyrinth, durch welches sich Pacman und die 4 Geister bewegen, besteht aus quadratischen Feldern (Tiles).

<p align="center">
  <img src="assets/tiles.png?raw=true" alt=""/>
</p>

Diese können entweder begehbar sein, oder es können Wände oder sonstige spezielle Felder sein.
Um einen möglichst flexiblen Aufbau von Levels zu ermöglichen, werden die Levels aus einer .txt File generiert:

```text
X X X X X X X X X X X X X X X X X X X X X X X X X X X X
X X X X X X X X X X X X X X X X X X X X X X X X X X X X
X X X X X X X X X X X X X X X X X X X X X X X X X X X X
B b b b b b b b b b b b b b b b b b b b b b b b b b b B
b . . . . . . . . . . . . w w . . . . . . . . . . . . b
b . W w w W . W w w w W . w w . W w w w W . W w w W . b
b * w X X w . w X X X w . w w . w X X X w . w X X w * b
b . W w w W . W w w w W . W W . W w w w W . W w w W . b
b . . . . . . . . . . . . . . . . . . . . . . . . . . b
b . W w w W . W W . W w w w w w w W . W W . W w w W . b
b . W w w W . w w . W w w W W w w W . w w . W w w W . b
b . . . . . . w w . . . . w w . . . . w w . . . . . . b
B b b b b N . w W w w W | w w | W w w W w . N b b b b B
X X X X X b . w W w w W | W W | W w w W w . b X X X X X
X X X X X b . w w - - - - - - - - - - w w . b X X X X X
X X X X X b . w w - N b b _ = b b N - w w . b X X X X X
b b b b b N . W W - b X X X - X X b - W W . N b b b b b
t - - - - - . - - - b X - - - - - b - - - . - - - - - t
b b b b b N . W W - b X X X X X X b - W W . N b b b b b
X X X X X b . w w - N b b b b b b N - w w . b X X X X X
X X X X X b . w w - - - - - - - - - - w w . b X X X X X
X X X X X b . w w | W w w w w w w W | w w . b X X X X X
B b b b b N . W W | W w w W W w w W | W W . N b b b b B
b . . . . . . . . . . . . w w . . . . . . . . . . . . b
b . W w w W . W w w w W . w w . W w w w W . W w w W . b
b . W w W w . W w w w W . W W . W w w w W . w W w W . b
b * . . w w . . . . . . . - - . . . . . . . w w . . * b
b w W . w w . W W . W w w w w w w W . W W . w w . W w b
b w W . W W . w w . W w w W W w w W . w w . W W . W w b
b . . . . . . w w . . . . w w . . . . w w . . . . . . b
b . W w w w w W W w w W . w w . W w w W W w w w w W . b
b . W w w w w w w w w W . W W . W w w w w w w w w W . b
b . . . . . . . . . . . . . . . . . . . . . . . . . . b
B b b b b b b b b b b b b b b b b b b b b b b b b b b B
X X X X X X X X X X X X X X X X X X X X X X X X X X X X
X X X X X X X X X X X X X X X X X X X X X X X X X X X X
```

Dies ist eine vorübergehende Version des originalen Pacman Levels, welches zu Testzwecken benutzt wird. 
Um aus diesem Text File aber auch tatsächlich ein Labyrinth zu erschaffen, legen wir zunächst ein neues Python file an.
Wir nennen es `maze.py`. 
Es soll nachher alles beinhalten, was mit dem eigentlichen Labyrinth zusammenhängt und in diesem Fall wie eine Art `Singleton` dienen.
Als erstes legen wir eine neue Klasse `Tile` an welche als Überklasse für alle anderen Tiles dienen wird: 

```python
# maze.py

class Tile:
    def __init__(self, row, column):
        super().__init__()
        
        self.row = row
        self.column = column
```

Wie Sie sehen hat `Tile` nur 2 Attribute, row und column, die seine Position innerhalb des Rasters an Feldern angeben.
Da wir allerdings bereits wissen, dass wir nachher zwischen begehbaren und nicht begehbaren Feldern unterscheiden müssen,
können wir bereits 2 weitere Klassen anlegen: `LegalTile` und `WallTile`, welche beide von `Tile` erben:

```python
# maze.py

class LegalTile(Tile):
    def __init__(self, row, column, pellet):
        super().__init__(row, column)
        
class WallTile(Tile):
    def __init__(self, row, column, is_corner):
        super().__init__(row, column)
```

Bevor wir uns an das auslesen unserers Textfiles wagen, spezifizieren wir noch eine weitere Art von Feldern.
Und zwar jene, die komplett leer sind:

```python
# maze.py

class EmptyTile(Tile):
    def __init__(self, row, column):
        super().__init__(row, column)
```

Nun ist alles vorbereitet, um mit der Interpretation des Text files zu beginnen.
Zuerst legen wir ein Dictionary `tiles` an, welches nachher alle Felder des Labyrinths halten soll:

```python
# maze.py

tiles = {}
```

Dann definieren wir eine Funktion `load_level()`. In dieser Funktion gehen wir Reihe für Reihe durch das File durch, 
lesen jeweils eine Zeile aus und bearbeiten dies dann Zeichen für Zeichen. 
Je nach Zeichen wird dann mithilfe des neu in Python 3.10 eingeführten ["Structural Pattern Matching"](https://www.python.org/dev/peps/pep-0622/) (Switch-Case) 
eine andere Art von Feld erzeugt und ein neuer Eintrag im dictionary erstellt:

```python
# maze.py

from pacman.utils import load_asset

def load_level(level):
    row_counter = 0

    for line in open(load_asset(level)):
        column_counter = 0

        for char in line.replace(" ", "").strip():
            new_tile = None
            match char:
                case 'X':
                    new_tile = EmptyTile(row_counter, column_counter)
                case '.':
                    new_tile = LegalTile(row_counter, column_counter)
                case 'w':
                    new_tile = WallTile(row_counter, column_counter)
                    
            tiles[(row_counter, column_counter)] = new_tile
            column_counter += 1
        row_counter += 1
```

Sie fragen sich nun vielleicht schon, was denn die Funktion `load_asset()` macht.
Dies ist eine Hilfsfunktion, die wir im Laufe des Projekts noch etliche male benötigen werden.
Sie soll es uns erleichtern assets aus einem von uns vorgegebenem Ordner zu laden.
Um sie zu definieren legen wir eine neue Datei `utils.py` an und importieren die  Systembibliothek `os`:

```python
# utils.py

import os

def load_asset(asset):
    return os.path.join('assets', asset)
```

Bitte beachten Sie, dass falls ihr Resourcenordner nicht assets heißen sollte Sie `'assets'` durch den Namen Ihres Ordners ersetzen müssen. 

# Actors

Als `Actor` bezeichnen wir all diejenigen Sprites, die sich innerhalb des Labyrinths bewegen, 
etwas konkreter wären das Pacman und die 4 Geister.
Ein solcher `Actor` hat 2 äußerst wichtige Eigenschaften: das Feld auf dem er befindet und die Richtung in die er sich bewegt.
Ersteres können wir bei gegebener Kantenlänge eines Feldes mithilfe der Position des `Sprite.rect` Attributs berechnen.
Um die Darstellung der Richtung des `Actor`'s im Kontext von `pygame` zu erleichtern, erweitern wir `utils.py` um das Enum `Directions`:

```python
# utils.py

class Directions(Enum):
    UP = (0, -1)
    LEFT = (-1, 0)
    DOWN = (0, 1)
    RIGHT = (1, 0)
    NONE = (0, 0)
```

Dessen Werte Entsprechen der Bewegung um einen Pixel in die entsprechende Richtung in Form eines Tupels.
Dann erstellen wir eine abstrakte Klasse `Actor` in einer neuen Python-Datei `actors.py`.
Diese erbt von `pygame.sprite.Sprite`:

```python
# actors.py

from abc import ABCMeta, abstractmethod

import pygame

from pacman.utils import TILE_SIZE, Directions



class Actor(pygame.sprite.Sprite, metaclass=ABCMeta):
    @abstractmethod
    def __init__(self):
        super().__init__()
        
        self.direction = Directions.NONE
        
    @property
    def tile(self):
        return maze.tiles[(self.rect.centery // TILE_SIZE, self.rect.centerx // TILE_SIZE)]
```

## Pacman

Pacman ist (überraschenderweise) der Hauptcharakter des Spiels und somit der erste `Actor`.
Er kann sich innerhalb des Labyrints zwischen den Mauern bewegen. 
Für uns heißt dass er darf sich nur auf `LegalTile`'s bewegen.
Eine weitere Besonderheit ist, dass der Spieler eine Kurve schon einleiten kann bevor er die Abzweigung überhaupt erreicht hat.
Daher erweitern wir die `Pacman` Klasse noch um das Attribut `input`, welches die letzte Eingabe des Spielers hält:

```python
# actors.py

class Pacman(Actor):
    def __init__(self):
        super().__init__()
        
        self.input = Directions.NONE
        self.image = pygame.image.load(load_asset("pacman_01.png"))
        self.rect = self.image.get_rect(topleft=(8, 56))
```

Die Attribute `image` und `rect` werden von `Sprite` geerbt: `image` ist die `surface`,
welche mit dem Sprite assoziiert wird und beim aufruf von `Sprite.draw()` and der position von `rect` gerendert wird.

Pacman erhält gegenüber seinen Verfolgern einen unfairen Vorteil beim Abbiegen:
nähert er sich von rechts oder oben so kann er bis zur Hälfte (von links oder unten ist es ein pixel weniger) einen "pre-turn" einleiten,
um sich daraufhin für jeden Pixel den er sich in seine ursprüngliche Richtung bewegt schon um einen Pixel in seine neue Richtung zu bewegen.
Erreicht er dann die Mitte des Felds bewegt er sich ausschließlich in seine neue Richtung.
So kann pacman seine effektive Geschwindigkeit beim Abbiegen verdoppeln.
Andersherum existieren auch jeweils dementsprechend viele "post-turn" pixel, 
in denen Pacman eine "verpasste" Abzweigung doch noch nehmen kann, indem er sich wieder rückwärts bewegt.

<p align="center">
  <img src="assets/cornering.png?raw=true" alt=""/>
</p>

Um dies zu implementieren müssen wir die Position eines `Actors` in seinem Feld kennen.
Da diese am besten einheitlich sein sollte, müssen wir sie abhängig von der Richtung berechnen.
Deshalb erweitern wir `Actor` um die property `position_in_tile`:

```python
# actors.py

class Actors(pygame.sprite.Sprite, metaclass=ABCMeta):

# Add
###############################################################################
    @property
    def position_in_tile(self):
        match self.direction:
            case Directions.UP:
                return TILE_SIZE - (self.rect.centery - self.tile.row * TILE_SIZE)
            case Directions.LEFT:
                return TILE_SIZE - (self.rect.centerx + 1 - self.tile.column * TILE_SIZE)
            case Directions.DOWN:
                return self.rect.centery + 1 - self.tile.row * TILE_SIZE
            case Directions.RIGHT:
                return self.rect.centerx - self.tile.column * TILE_SIZE
            case Directions.NONE:
                return TILE_SIZE // 2
###############################################################################
```

Ich empfehle das obige code snippet ein zweites mal durchzulesen,
um sicherzugehen dass Sie seine Funktionsweise verstanden haben.

Wir fangen an damit uns zu überlegen, was passieren muss, 
wenn  der Nutzer Pacman in eine bestimmte Richtung bewegen möchte:
Zuerst sollten wir die Eingabe des Nutzers validieren, was wenn er pacman in eine Wand hineinbewegen will?
Dazu erweitern wir unsere `Tiles` Klasse um einige Hilfsmethoden:

```python
# maze.py

class Tile():

# Add
###############################################################################
    def get_neighbour(self, direction):
        return tiles[(self.row + direction.value[1], self.column + direction.value[0])]

    def has_legal_neighbour(self, direction):
        return True if isinstance(self.get_neighbour(direction), LegalTile) else False
###############################################################################
```

`has_legal_neighbour(direction)` akzeptiert als Parameter eine `direction` aus `utils.Directions` und gibt wahr zurück,
wenn das Feld in diese Richtung als Typ `LegalTile` hat, sonst falsch.

`has_legal_neighbour(direction)` ruft `get_neighbour(direction)` auf, welche den Eintrag aus `tiles` zurückgibt,
der dem benachbarten `Tile` in Richtung von `direction` liegt.

Praktischerweise gibt uns `pygame` schon eine `Sprite.update()` Methode vor,
mit welcher wir nachher über hooks ohne viel Aufwand mehrere `Sprite`'s gleichzeitig updaten können.

Nun wollen wir aber das korrekte "Cornering" Verhalten des Pacmans implementieren.
Befinden wir uns in den "pre-turn" Pixeln,
also `self.position_in_tile < TILE_SIZE // 2` so müssen wir den User input validieren,
dann unterscheiden ob der Nutzer eine Kurve nehmen will,
sich weiter gerade aus oder in die entgegengesetzte Richtung bewegen will und 
eventuell schon die Bewegung in die neue Richtung einleiten.

```python
# actors.py

class Pacman(Actor):

# Add
###############################################################################
    def update(self):
        if self.position_in_tile < TILE_SIZE // 2:
            if self.tile.has_legal_neighbour(self.input):
                if self.direction is self.input or are_opposite_directions(self.direction, self.input):
                    self.direction = self.input
                else:
                    self.rect.move_ip(self.input.value)

            self.rect.move_ip(self.direction.value)
###############################################################################
```

Befinden wir uns in der Mitte des Tiles, so gibt es drei Möglichkeiten:
- Pacman hat gerade eine Kurve gemacht und muss sich nun in die neue Richtung weiter bewegen.
- Der User hat keinen validen input gegeben,
in dem Fall bewegt sich Pacman so lange in seine jetzige Richtung, bis er auf eine Wand trifft.
- Pacman befindet sich gerade in der Ruhe und soll beschleunigt werden.

All diese Fälle lassen sich folgendermaßen abdecken:

```python
# actors.py

class Pacman(Actor):

    def update(self):
        if self.position_in_tile < TILE_SIZE // 2: ...
        
# Add
###############################################################################
        elif self.position_in_tile == TILE_SIZE // 2:
            if self.tile.has_legal_neighbour(self.input):
                self.direction = self.input

            elif not self.tile.has_legal_neighbour(self.direction):
                self.direction = Directions.NONE

            self.rect.move_ip(self.direction.value)
###############################################################################
```

Bleibt nur noch eine Option übrig, befindet sich Pacman in den "post-turn Pixeln",
so muss wieder unterschieden werden, ob  `input` eine orthogonale oder eine geradlinige Bewegunsänderung herbeiführt,
nur dass im Gegensatz zu den "pre-turn Pixeln" Pacman sich entgegen seiner eigentlichen Richtung bewegt,
wenn er um eine Ecke geht:

```python
# actors.py

class Pacman(Actor):

    def update(self):
        if self.position_in_tile < TILE_SIZE // 2: ...
        elif self.position_in_tile == TILE_SIZE // 2: ...
        
# Add
###############################################################################
        else:
            if self.tile.has_legal_neighbour(self.input):
                if are_opposite_directions(self.direction, self.input):
                    self.direction = self.input

                if self.direction is self.input:
                    self.rect = self.rect.move(self.direction.value)
                else:
                    self.rect = self.rect.move(self.input.value)
                    self.rect = self.rect.move(opposite_direction(self.direction).value)

            else:
                self.rect = self.rect.move(self.direction.value)
###############################################################################
```

Damit wäre die Bewegung des Pacman erstmal abgeschlossen, kommen wir nun zu seinen Verfolgern, den Geistern.

## Geister

