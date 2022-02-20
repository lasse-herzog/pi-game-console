import pygame

pygame.init()

# Loop until the user clicks the close button.
done = False

# Initialize the joysticks.
pygame.joystick.init()

# -------- Main Program Loop -----------
while not done:
    # Possible joystick actions: JOYAXISMOTION, JOYBALLMOTION, JOYBUTTONDOWN,
    # JOYBUTTONUP, JOYHATMOTION
    for event in pygame.event.get():  # User did something.
        if event.type == pygame.QUIT:  # If user clicked close.
            done = True  # Flag that we are done so we exit this loop.
        elif event.type == pygame.JOYBUTTONDOWN:
            print("Joystick button pressed.")
        elif event.type == pygame.JOYBUTTONUP:
            print("Joystick button released.")

    for i in range(pygame.joystick.get_count()):
        joystick = pygame.joystick.Joystick(i)
        joystick.init()

        axes = joystick.get_numaxes()

        for j in range(axes):
            # axis 0 value 1, axis 1 value 0: up
            # axis 0 value 1, axis 1 value 1: up-right
            # axis 0 value 0, axis 1 value 1: right
            # axis 0 value -1, axis 1 value 1: down-right
            # axis 0 value -1, axis 1 value 0: down
            # axis 0 value -1, axis 1 value -1: down-left
            # axis 0 value 0, axis 1 value -1: left
            # axis 0 value 1, axis 1 value -1: up-left
            axis = joystick.get_axis(j)

        buttons = joystick.get_numbuttons()

        for j in range(buttons):
            # button is 1 when pressed else 0
            button = joystick.get_button(j)

pygame.quit()
