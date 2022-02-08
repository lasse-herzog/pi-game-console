---
layout: default title: Pacman nav_order: 2
---

# Welcome

This section is about our implementation of the arcade classic Pacman in python. As you probably know Pacmans and the
monsters movement is constrained to labyrinth. Therefore I chose to represent the labyrinth as a graph structure. For
this I implemented a simple class Graph which uses an adjacency list to hold the vertices for each node within the
graph:

```python
class Graph:
    adjacency_list = {}

    def add_edge(self, node, neighbour_node, direction):
        weight = abs(node.x - neighbour_node.x + node.y - neighbour_node.y)

        if node not in self.adjacency_list:
            self.adjacency_list[node] = [(neighbour_node, weight, direction)]
        else:
            self.adjacency_list[node].append((neighbour_node, weight, direction))
```