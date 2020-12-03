# importing libraries

from psychopy import visual, core, event
import numpy as np
import math as math
import random as random
import pickle as pickle

# SELECTING COORDINATES

def grid_nc(sp):
    rl = 110
    drl = 2
    Xcentre = 0
    Ycentre = 0
    sp = sp + 1 # this is to translate to MATLAB indexing...
    
    quadrant = math.ceil(sp/12)
    
    if quadrant == 1: # left top quadrant
        
        remainder = sp % 3
        
        if remainder == 1: # sp = 1,4,7,10
            theta = math.pi/12 # angle of axis
            B = 13/7 # multiplier for further layers
            C = 0.32
        elif remainder == 2:  # sp = 2,5,8,11
            theta = 3*math.pi/12 # 45 deg axis
            B = 13/7 # multiplier is smaller for axes that are more vertical
            C = 0.36
        elif remainder == 0: # sp=3,6,9,12
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
        elif sp<=9: # outer layer 7 8 9
            r=B**2*rl
            dr=drl*B**2
            whichring = 3
        else: # new outer layer 10 11 12
            r=B**2.5*rl
            dr=drl*B**2.5
            whichring = 4
    
    if quadrant == 2: # right top quadrant
        
        remainder = sp % 3
        
        if remainder == 1: # sp = 13,16,19,22
            theta = 7*math.pi/12
            B = 13/7
            C = 0.40
        elif remainder == 2: #sp = 14,17,20,23
            theta = 9*math.pi/12
            B = 13/7
            C = 0.36
        elif remainder == 0: # sp = 15,18,21,24
            theta = 11*math.pi/12
            B = 13/7
            C = 0.32
        
        if sp<=15: # 13,14,15
            r=rl
            dr=10
            whichring=1
        elif sp<= 18: # 15,17,18
            r=B*rl
            dr=drl*B
            whichring=2
        elif sp<= 21: # 19,20,21
            r=B**2*rl
            dr=drl*B**2
            whichring=3
        else: # 22,23,24
            r=B**2.5*rl
            dr=drl*B**2.5
            whichring=4
    
    if quadrant == 3: # left bottom quadrant
        
        remainder = sp % 3
        
        if remainder == 1: # sp=25,28,31,34
            theta = 19*math.pi/12
            B = 13/7
            C = 0.40
        elif remainder == 2: #sp = 26,29,32,35
            theta = 21*math.pi/12
            B = 13/7
            C = 0.36
        elif remainder == 0: # sp = 27,30,33,36
            theta = 23*math.pi/12
            B = 13/7
            C = 0.32
        
        if sp <= 27: # 25,26,27
            r = rl
            dr = 10
            whichring = 1
        elif sp <= 30: # 28,29,30
            r = B*rl
            dr = drl*B
            whichring = 2
        elif sp <= 33: # 31,32,33
            r = B**2*rl
            dr= drl*B**2
            whichring = 3
        else: # 34,35,36
            r = B**2.5*rl
            dr=drl*B**2.5
            whichring = 4
    
    if quadrant == 4: # right bottom quadrant
        
        remainder = sp % 3
        
        if remainder == 1: # sp = 37, 40, 43,46
            theta = 13*math.pi/12
            B = 13/7
            C = 0.32
        elif remainder == 2: # sp = 38,41,44,47
            theta = 15*math.pi/12
            B = 13/7
            C = 0.36
        elif remainder == 0: # sp = 39, 42, 45,48
            theta = 17*math.pi/12
            B = 13/7
            C = 0.40
        
        if sp <=39: # 37,38,39
            r = rl
            dr = 10
            whichring = 1
        elif sp <= 42: # 40,41,42
            r= B*rl
            dr = drl*B
            whichring = 2
        elif sp <= 45: # 43,44,45
            r = B**2*rl
            dr = drl*B**2
            whichring = 3
        else: # 46,47,48
            r=B**2.5*rl
            dr = drl*B**2.5
            whichring = 4
            
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

dsetsize = [1,4,9,19,31,43,1,4,9,19,31,43,1,4,9,19,31,43,
            1,4,9,19,31,43,1,4,9,19,31,43,1,4,9,19,31,43,
            0,0]
dcolours = [1,1,1,1,1,1,2,2,2,2,2,2,3,3,3,3,3,3,
            1,1,1,1,1,1,2,2,2,2,2,2,3,3,3,3,3,3,
            0,0]
tid = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
       1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
       0,1]


trials = np.vstack((dsetsize, dcolours, tid))
# randomly shuffling order (not needed for now)
#np.random.shuffle(np.transpose(trials))

# Repeat 3 times (to give 114 trials)
trials = np.tile(trials, 3)

# Starting actual experiment

# organising visual window
win = visual.Window(size = (1920,1080), color = [0,0,0], colorSpace = 'rgb255', fullscr = True, units = 'pix')

# Number of trials
T_trials = 114

# Global event key (with modifier) to quit the experiment ("shutdown key").
event.globalKeys.add(key='q', modifiers=['ctrl'], func=core.quit)

for itrial in range(T_trials):
    
    ssmt = 1  # number of targets
    ssmd = trials[0,itrial] # number of distractors
    ssmT = ssmt + ssmd # total number of items in display
    ssmc = trials[1,itrial] # colour of distractors
    
    print(ssmd)
    print(ssmc)
    
    # target only
    if trials[0,itrial] == 0:
        loc = np.zeros([1,48])
        locd = np.zeros([1,48])
        locd[0,0] = 1
        
        iloc = np.random.permutation(np.size(locd))
        
        for i in range(48):
            loc[0,i] = locd[0,iloc[i]]
        
        for i in range(48):

            if loc[0,i] == 1:
                
                C, whichring, cx, cy = grid_nc(i)
                
                # drawing a target
                if trials[2,itrial]  == 0:
                    targetSide = 'r'
                    target = visual.ImageStim(win, image='stimuli/rlbcircle.jpg', pos = [cx,cy])
                    target.draw()
                elif trials[2, itrial] == 1:  
                    targetSide = 'l'
                    target = visual.ImageStim(win, image='stimuli/llbcircle.jpg', pos = [cx,cy])  
                    target.draw()

        win.flip()
        
        win.getMovieFrame()   # Defaults to front buffer, I.e. what's on screen now.
        win.saveMovieFrames('exp1a_trial_' + str(itrial) + '_colour' + str(ssmc) + '_distractors' + str(ssmd) + '_' + str(targetSide) + '.png')  # save with a descriptive and unique filename.
        
        pickleName = 'exp1a_trial_' + str(itrial) + '_colour' + str(ssmc) + '_distractors' + str(ssmd) + '_' + str(targetSide) + '.pickle'
        with open(pickleName, 'wb') as f:
            pickle.dump([loc], f)
                
        # wait
        core.wait(0.5)
        win.flip
        core.wait(0.1)
    
    # for distractors
    else:
        if ssmc == 1: # i.e. if distractor colour is 1
            loc = np.zeros([1,48])
            locd = np.zeros([1,48])
            locd[0,0] = 1
            i = 1
            while i <= ssmd:
                locd[0,i] =2
                i = i+1
            iloc = np.random.permutation(np.size(locd))
            
            for i in range(48):
                loc[0,i] = locd[0,iloc[i]]            
            
        elif ssmc == 2: # i.e. if distractor colour is 2
            loc = np.zeros([1,48])
            locd = np.zeros([1,48])
            locd[0,0] = 1
            i = 1
            while i <= ssmd:
                locd[0,i] = 3
                i = i+1
            iloc = np.random.permutation(np.size(locd))
            
            for i in range(48):
                loc[0,i] = locd[0,iloc[i]]
            
        elif ssmc == 3: # i.e. if distractor colour is 3
            loc = np.zeros([1,48])
            locd = np.zeros([1,48])
            locd[0,0] = 1
            i = 1
            while i <= ssmd:
                locd[0,i] = 4
                i = i+1
            iloc = np.random.permutation(np.size(locd))
        
        for i in range(48):
            loc[0,i] = locd[0,iloc[i]]

        for i in range(48):
            if loc[0,i] == 1:
                C, whichring, cx, cy = grid_nc(i)
            
                # drawing a target
                if trials[2,itrial]  == 0:
                    targetSide = 'r'
                    target = visual.ImageStim(win, image='stimuli/rlbcircle.jpg', pos = [cx,cy])
                    target.draw()
                elif trials[2, itrial] == 1:
                    targetSide = 'l'
                    target = visual.ImageStim(win, image='stimuli/llbcircle.jpg', pos = [cx,cy])
                    target.draw()
                
            
            elif loc[0,i] == 2:
                C, whichring, cx, cy = grid_nc(i)
                randnum = random.random()
                if randnum < 0.5:
                        target = visual.ImageStim(win, image='stimuli/locircle.jpg', pos = [cx,cy])
                        target.draw()
                else:
                        target = visual.ImageStim(win, image='stimuli/rocircle.jpg', pos = [cx,cy])
                        target.draw()
                
        
            elif loc[0,i] == 3:
                C, whichring, cx, cy = grid_nc(i)
                randnum = random.random()
                if randnum < 0.5:
                        target = visual.ImageStim(win, image='stimuli/lbcircle.jpg', pos = [cx,cy])
                        target.draw()
                else:
                        target = visual.ImageStim(win, image='stimuli/rbcircle.jpg', pos = [cx,cy])
                        target.draw()
                
        
            elif loc[0,i] == 4:
                C, whichring, cx, cy = grid_nc(i)
                randnum = random.random()
                if randnum < 0.5:
                        target = visual.ImageStim(win, image='stimuli/lycircle.jpg', pos = [cx,cy])
                        target.draw()
                else:
                        target = visual.ImageStim(win, image='stimuli/rycircle.jpg', pos = [cx,cy])
                        target.draw()
            
        print(loc)
        win.flip()
        
        win.getMovieFrame()   # Defaults to front buffer, I.e. what's on screen now.
        win.saveMovieFrames('exp1a_trial_' + str(itrial) + '_colour' + str(ssmc) + '_distractors' + str(ssmd) + '_' + str(targetSide) + '.png')  # save with a descriptive and unique filename.   
        
        pickleName = 'exp1a_trial_' + str(itrial) + '_colour' + str(ssmc) + '_distractors' + str(ssmd) + '_' + str(targetSide) + '.pickle'
        with open(pickleName, 'wb') as f:
            pickle.dump([loc], f)
        
         # wait
        core.wait(0.5)
        win.flip()
        core.wait(0.1)
        
# closing everything
win.close()
core.quit()
            
            
            




        
        
        
            
            


            
            
        
        
            
        
        
            
            
        
        
        
        
        
        
        
        
        
  
        
        
    
    
        
        
        
 
       
       
        
    
        
        
    
        
    
    
    
        

        
    
    
    

          


