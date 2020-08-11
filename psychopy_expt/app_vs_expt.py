# importing libraries

from psychopy import visual, core

# organising visual window
win = visual.Window(size = (1920,1080), color = [0,0,0], colorSpace = 'rgb255', fullscr = True, units = 'pix')

# drawing a target
target = visual.ImageStim(win, image='stimuli/llbcircle.jpg', pos = [0,0])
target.draw()
win.flip()

# wait
core.wait(1)

# closing everything
win.close()
core.quit()
