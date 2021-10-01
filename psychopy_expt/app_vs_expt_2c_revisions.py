# importing libraries

from psychopy import visual, core
import numpy as np
import math as math
import random as random

# SELECTING COORDINATES

def grid_nc(sp):
    rl = 115
    drl = 3
    Xcentre = 0
    Ycentre = 0
    sp = sp + 1 # this is to translate to MATLAB indexing...
    
    quadrant = math.ceil(sp/9)
    
    if quadrant == 1: # left top quadrant
        
        remainder = sp % 3
        
        if remainder == 1: # sp = 1,4,7
            theta = math.pi/12 # angle of axis
            B = 13/7 # multiplier for further layers
            C = 0.32
        elif remainder == 2:  # sp = 2,5,8
            theta = 3*math.pi/12 # 45 deg axis
            B = 13/7 # multiplier is smaller for axes that are more vertical
            C = 0.36
        elif remainder == 0: # sp=3,6,9
            theta = 5*math.pi/12 # most vertical axis
            B = 13/7 # smallest multipler value
            C = 0.40
        
        if sp<=3: # inner layer 1 2 3
            r=rl
            dr=drl # radius of jitter
            whichring = 1
        elif sp<=6: # middle layer 4 5 6
             r=B*rl
             dr=drl*B
             whichring = 2
        else: # outer layer 7 8 9
            r=B**2*rl
            dr=drl*B**2
            whichring = 3
    
    if quadrant == 2: # right top quadrant
        
        remainder = sp % 3
        
        if remainder == 1: # sp = 10,13,16
            theta = 7*math.pi/12
            B = 13/7
            C = 0.40
        elif remainder == 2: #sp = 11,14,17
            theta = 9*math.pi/12
            B = 13/7
            C = 0.36
        elif remainder == 0: # sp = 12,15,18
            theta = 11*math.pi/12
            B = 13/7
            C = 0.32
        
        if sp<=12: # 10,11,12
            r=rl
            dr=10
            whichring=1
        elif sp<= 15: # 13,14,15
            r=B*rl
            dr=drl*B
            whichring=2
        else: # 16,17,18
            r=B**2*rl
            dr=drl*B**2
            whichring=3
    
    if quadrant == 3: # left bottom quadrant
        
        remainder = sp % 3
        
        if remainder == 1: # sp=19,22,25
            theta = 19*math.pi/12
            B = 13/7
            C = 0.40
        elif remainder == 2: #sp = 20,23,26
            theta = 21*math.pi/12
            B = 13/7
            C = 0.36
        elif remainder == 0: # sp = 21,24,27
            theta = 23*math.pi/12
            B = 13/7
            C = 0.32
        
        if sp <= 21: # 19,20,21
            r = rl
            dr = 10
            whichring = 1
        elif sp <= 24: # 22,23,24
            r = B*rl
            dr = drl*B
            whichring = 2
        else: # 25,26,27
            r = B**2*rl
            dr= drl*B**2
            whichring = 3
    
    if quadrant == 4: # right bottom quadrant
        
        remainder = sp % 3
        
        if remainder == 1: # sp = 28, 31, 34
            theta = 13*math.pi/12
            B = 13/7
            C = 0.32
        elif remainder == 2: # sp = 29,32,35
            theta = 15*math.pi/12
            B = 13/7
            C = 0.36
        elif remainder == 0: # sp = 30, 33, 36
            theta = 17*math.pi/12
            B = 13/7
            C = 0.40
        
        if sp <=30: # 28, 29, 30
            r = rl
            dr = 10
            whichring = 1
        elif sp <= 33: # 31,32,33
            r= B*rl
            dr = drl*B
            whichring = 2
        else: # 34,35,36
            r = B**2*rl
            dr = drl*B**2
            whichring = 3
            
    # x and y coordinates
    cx = round(Xcentre-r*math.cos(theta))
    cy = round(Ycentre-r*math.sin(theta))
    
    # add random jitter according to location
    delta_r = dr*random.random()
    phi = 2*math.pi*random.random()
    cx = round(cx + delta_r*math.cos(phi))
    cy = round(cy+delta_r*math.sin(phi))
    
    return C, whichring, cx, cy

# Setting up trial types

dsetsize = [1,4,9,19,31,1,4,9,19,31,1,4,9,19,31,
            1,4,9,19,31,1,4,9,19,31,1,4,9,19,31,
            0,0]
dcolours = [1,1,1,1,1,2,2,2,2,2,3,3,3,3,3,
            1,1,1,1,1,2,2,2,2,2,3,3,3,3,3,
            0,0]
tid = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
       1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
       0,1]

trials = np.vstack((dsetsize, dcolours, tid))
# randomly shuffling order (not necessary for now)
#np.random.shuffle(np.transpose(trials))

# Repeat 3 times (to give 160 trials)
trials = np.tile(trials, 5)

# Starting actual experiment

# organising visual window
win = visual.Window(size = (1920,1080), color = [0,0,0], colorSpace = 'rgb255', fullscr = True, units = 'pix')

# Number of trials
T_trials = 160

for itrial in range(T_trials):
    
    ssmt = 1  # number of targets
    ssmd = trials[0,itrial] # number of distractors
    ssmT = ssmt + ssmd # total number of items in display
    ssmc = trials[1,itrial] # colour of distractors
    
    print(ssmd)
    print(ssmc)
    
    # target only
    if trials[0,itrial] == 0:
        loc = np.zeros([1,36])
        locd = np.zeros([1,36])
        locd[0,0] = 1
        
        iloc = np.random.permutation(np.size(locd))
        
        for i in range(36):
            loc[0,i] = locd[0,iloc[i]]
        
        for i in range(36):

            if loc[0,i] == 1:
                
                C, whichring, cx, cy = grid_nc(i)
                
                # drawing a target
                if trials[2,itrial]  == 0:
                     targetSide = 'r'
                     target = visual.ImageStim(win, image='stimuli/rrcircle.png', pos = [cx,cy])
                     target.draw()
                elif trials[2, itrial] == 1:  
                     targetSide = 'l'
                     target = visual.ImageStim(win, image='stimuli/lrcircle.png', pos = [cx,cy])  
                     target.draw()

        win.flip()
        
        win.getMovieFrame()   # Defaults to front buffer, I.e. what's on screen now.
        win.saveMovieFrames('exp2c_trial_' + str(itrial) + '_colour' + str(ssmc) + '_distractors' + str(ssmd) + '_' + str(targetSide) + '.png')  # save with a descriptive and unique filename.   
                
        # wait
        core.wait(0.5)
        win.flip
        core.wait(0.1)
    
    # for distractors
    else:
        if ssmc == 1: # i.e. if distractor shape is 1
            loc = np.zeros([1,36])
            locd = np.zeros([1,36])
            locd[0,0] = 1
            
            i = 1
            while i <= ssmd:
                locd[0,i] =2
                i = i+1
            iloc = np.random.permutation(np.size(locd))
            
            for i in range(36):
                loc[0,i] = locd[0,iloc[i]]
            
            #quadone = loc[0,0:8]
            #quadtwo = loc[0,9:17]
            #quadthree = loc[0,18:26]
            #quadfour = loc[0,27:35]
            
            #if ssmd == 1:
            #    quadlimit = 0
            #elif ssmd == 4:
            #    quadlimit = 1
            #elif ssmd == 9:
            #    quadlimit = 4
            #elif ssmd == 19:
            #    quadlimit = 8
            #else:
            #    quadlimit = 14
            
            #while sum(quadone) < quadlimit or sum(quadtwo) < quadlimit or sum(quadthree) < quadlimit or sum(quadfour) < quadlimit:
            #    iloc = np.random.permutation(np.size(locd))
                
            #    for i in range(35):
            #        loc[0,i] = locd[0,iloc[i]]
                    
            #    quadone = loc[0,0:8]
            #    quadtwo = loc[0,9:17]
            #    quadthree = loc[0,18:26]
            #    quadfour = loc[0,27:35]
            
            
        elif ssmc == 2: # i.e. if distractor shape is 2
            loc = np.zeros([1,36])
            locd = np.zeros([1,36])
            locd[0,0] = 1
            i = 1
            while i <= ssmd:
                locd[0,i] = 3
                i = i+1
            iloc = np.random.permutation(np.size(locd))
            
            for i in range(36):
                loc[0,i] = locd[0,iloc[i]]
            
            #quadone = loc[0,0:8]
            #quadtwo = loc[0,9:17]
            #quadthree = loc[0,18:26]
            #quadfour = loc[0,27:35]
            
            #if ssmd == 1:
            #    quadlimit = 0
            #elif ssmd == 4:
            #    quadlimit = 2
            #elif ssmd == 9:
            #    quadlimit = 5
            #elif ssmd == 19:
            #    quadlimit = 11
            #else:
            #    quadlimit = 20
            
            #while sum(quadone) < quadlimit or sum(quadtwo) < quadlimit or sum(quadthree) < quadlimit or sum(quadfour) < quadlimit:
            #    iloc = np.random.permutation(np.size(locd))
                
            #    for i in range(35):
            #        loc[0,i] = locd[0,iloc[i]]

            #    quadone = loc[0,0:8]
            #    quadtwo = loc[0,9:17]
            #    quadthree = loc[0,18:26]
            #    quadfour = loc[0,27:35]
            
                
        elif ssmc == 3: # i.e. if distractor shape is 3
            loc = np.zeros([1,36])
            locd = np.zeros([1,36])
            locd[0,0] = 1
            
            i = 1
            while i <= ssmd:
                locd[0,i] = 4
                i = i+1
            iloc = np.random.permutation(np.size(locd))
            
            for i in range(36):
                loc[0,i] = locd[0,iloc[i]]
            
            #quadone = loc[0,0:8]
            #quadtwo = loc[0,9:17]
            #quadthree = loc[0,18:26]
            #quadfour = loc[0,27:35]
            
            #if ssmd == 1:
            #    quadlimit = 0
            #elif ssmd == 4:
            #    quadlimit = 3
            #elif ssmd == 9:
            #    quadlimit = 7
            #elif ssmd == 19:
            #    quadlimit = 15
            #else:
            #    quadlimit = 27
            
            #while sum(quadone) < quadlimit or sum(quadtwo) < quadlimit or sum(quadthree) < quadlimit or sum(quadfour) < quadlimit:
            #    iloc = np.random.permutation(np.size(locd))
                
            #    for i in range(35):
            #        loc[0,i] = locd[0,iloc[i]]

            #    quadone = loc[0,0:8]
            #    quadtwo = loc[0,9:17]
            #    quadthree = loc[0,18:26]
            #    quadfour = loc[0,27:35]

        for i in range(36):
            if loc[0,i] == 1:
                C, whichring, cx, cy = grid_nc(i)
            
                # drawing a target
                if trials[2,itrial]  == 0:
                    targetSide = 'r'
                    target = visual.ImageStim(win, image='stimuli/rrcircle.png', pos = [cx,cy])
                    target.draw()
                elif trials[2, itrial] == 1:
                    targetSide = 'l'
                    target = visual.ImageStim(win, image='stimuli/lrcircle.png', pos = [cx,cy])
                    target.draw()
                
            
            elif loc[0,i] == 2:
                C, whichring, cx, cy = grid_nc(i)
                target = visual.ImageStim(win, image='stimuli/ycircle.png', pos = [cx,cy])
                target.draw()
        
            elif loc[0,i] == 3:
                C, whichring, cx, cy = grid_nc(i)
                target = visual.ImageStim(win, image='stimuli/pdiamond.png', pos = [cx,cy], interpolate = True)
                target.draw()
                        
            elif loc[0,i] == 4:
                C, whichring, cx, cy = grid_nc(i)
                randnum = random.random()
                if randnum < 0.5:
                        target = visual.ImageStim(win, image='stimuli/oLtri.png', pos = [cx,cy], interpolate = True)
                        target.draw()
                else:
                        target = visual.ImageStim(win, image='stimuli/oRtri.png', pos = [cx,cy], interpolate = True)
                        target.draw()
            
        print(loc)
        win.flip()
        
        win.getMovieFrame()   # Defaults to front buffer, I.e. what's on screen now.
        win.saveMovieFrames('exp2c_trial_' + str(itrial) + '_colour' + str(ssmc) + '_distractors' + str(ssmd) + '_' + str(targetSide) + '.png')  # save with a descriptive and unique filename.   

        # wait
        core.wait(0.5)
        win.flip()
        core.wait(0.1)
        
# closing everything
win.close()
core.quit()
            
            
            




        
        
        
            
            


            
            
        
        
            
        
        
            
            
        
        
        
        
        
        
        
        
        
  
        
        
    
    
        
        
        
 
       
       
        
    
        
        
    
        
    
    
    
        

        
    
    
    

          


