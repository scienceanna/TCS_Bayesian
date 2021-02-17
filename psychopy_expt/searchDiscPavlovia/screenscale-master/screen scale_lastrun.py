#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
This experiment was created using PsychoPy3 Experiment Builder (v2020.2.8),
    on February 17, 2021, at 15:00
If you publish work using this script the most relevant publication is:

    Peirce J, Gray JR, Simpson S, MacAskill M, Höchenberger R, Sogo H, Kastman E, Lindeløv JK. (2019) 
        PsychoPy2: Experiments in behavior made easy Behav Res 51: 195. 
        https://doi.org/10.3758/s13428-018-01193-y

"""

from __future__ import absolute_import, division

from psychopy import locale_setup
from psychopy import prefs
from psychopy import sound, gui, visual, core, data, event, logging, clock
from psychopy.constants import (NOT_STARTED, STARTED, PLAYING, PAUSED,
                                STOPPED, FINISHED, PRESSED, RELEASED, FOREVER)

import numpy as np  # whole numpy lib is available, prepend 'np.'
from numpy import (sin, cos, tan, log, log10, pi, average,
                   sqrt, std, deg2rad, rad2deg, linspace, asarray)
from numpy.random import random, randint, normal, shuffle
import os  # handy system and path functions
import sys  # to get file system encoding

from psychopy.hardware import keyboard



# Ensure that relative paths start from the same directory as this script
_thisDir = os.path.dirname(os.path.abspath(__file__))
os.chdir(_thisDir)

# Store info about the experiment session
psychopyVersion = '2020.2.8'
expName = 'screen_scale'  # from the Builder filename that created this script
expInfo = {'participant': ''}
dlg = gui.DlgFromDict(dictionary=expInfo, sortKeys=False, title=expName)
if dlg.OK == False:
    core.quit()  # user pressed cancel
expInfo['date'] = data.getDateStr()  # add a simple timestamp
expInfo['expName'] = expName
expInfo['psychopyVersion'] = psychopyVersion

# Data file name stem = absolute path + name; later add .psyexp, .csv, .log, etc
filename = _thisDir + os.sep + u'data/%s_%s_%s' % (expInfo['participant'], expName, expInfo['date'])

# An ExperimentHandler isn't essential but helps with data saving
thisExp = data.ExperimentHandler(name=expName, version='',
    extraInfo=expInfo, runtimeInfo=None,
    originPath='C:\\Users\\Anna\\Documents\\APP_VS_git\\psychopy_expt\\searchDiscPavlovia\\screenscale-master\\screen scale_lastrun.py',
    savePickle=True, saveWideText=True,
    dataFileName=filename)
# save a log file for detail verbose info
logFile = logging.LogFile(filename+'.log', level=logging.EXP)
logging.console.setLevel(logging.WARNING)  # this outputs to the screen, not a file

endExpNow = False  # flag for 'escape' or other condition => quit the exp
frameTolerance = 0.001  # how close to onset before 'same' frame

# Start Code - component code to be run after the window creation

# Setup the Window
win = visual.Window(
    size=[1280, 720], fullscr=True, screen=0, 
    winType='pyglet', allowGUI=False, allowStencil=False,
    monitor='testMonitor', color=[0,0,0], colorSpace='rgb',
    blendMode='avg', useFBO=True, 
    units='pix')
# store frame rate of monitor if we can measure it
expInfo['frameRate'] = win.getActualFrameRate()
if expInfo['frameRate'] != None:
    frameDur = 1.0 / round(expInfo['frameRate'])
else:
    frameDur = 1.0 / 60.0  # could not measure, so guess

# create a default keyboard (e.g. to check for escape)
defaultKeyboard = keyboard.Keyboard()

# Initialize components for Routine "screen_scale"
screen_scaleClock = core.Clock()
oldt=0
x_size=8.560
y_size=5.398
screen_height=0

if win.units=='norm':
    x_scale=.05
    y_scale=.1
    dbase = .0001
    unittext=' norm units'
    vsize=2
elif win.units=='pix':
    x_scale=60
    y_scale=40
    dbase = .1
    unittext=' pixels'
    vsize=win.size[1]
else:
    x_scale=.05
    y_scale=.05
    dbase = .0001
    unittext=' height units'
    vsize=1
text_top = visual.TextStim(win=win, name='text_top',
    text='Resize this image to match the size of a credit card\nUp arrow for taller\nDown arrow for shorter\nLeft arrow for narrower\nRight arrow for wider',
    font='Arial',
    units='norm', pos=(0, .7), height=0.1, wrapWidth=1.5, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-2.0);
text_bottom = visual.TextStim(win=win, name='text_bottom',
    text='Press the space bar when done',
    font='Arial',
    units='norm', pos=(0, -.6), height=0.1, wrapWidth=1.5, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-3.0);
ccimage = visual.ImageStim(
    win=win,
    name='ccimage', 
    image='bank-1300155_640.png', mask=None,
    ori=0, pos=(0, 0), size=(x_size*x_scale, y_size*y_scale),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=128, interpolate=True, depth=-4.0)

# Initialize components for Routine "rectangle"
rectangleClock = core.Clock()
text = visual.TextStim(win=win, name='text',
    text='This shape should be a 10 cm square.\n\nPress space to continue',
    font='Arial',
    units='norm', pos=(0, -.8), height=0.1, wrapWidth=1.5, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);
polygon = visual.Rect(
    win=win, name='polygon',
    width=[1.0, 1.0][0], height=[1.0, 1.0][1],
    ori=0, pos=(0, 0),
    lineWidth=1, lineColor=[1,1,1], lineColorSpace='rgb',
    fillColor=[1,1,1], fillColorSpace='rgb',
    opacity=1, depth=-1.0, interpolate=True)
key_resp = keyboard.Keyboard()

# Initialize components for Routine "end"
endClock = core.Clock()
text_2 = visual.TextStim(win=win, name='text_2',
    text='Fin',
    font='Arial',
    units='norm', pos=(0, 0), height=0.1, wrapWidth=1.8, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);

# Create some handy timers
globalClock = core.Clock()  # to track the time since experiment started
routineTimer = core.CountdownTimer()  # to track time remaining of each (non-slip) routine 

# ------Prepare to start Routine "screen_scale"-------
continueRoutine = True
# update component parameters for each repeat
# keep track of which components have finished
screen_scaleComponents = [text_top, text_bottom, ccimage]
for thisComponent in screen_scaleComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
screen_scaleClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "screen_scale"-------
while continueRoutine:
    # get current time
    t = screen_scaleClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=screen_scaleClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    keys=event.getKeys()
    
    if len(keys):
        if t-oldt<.5:
            dscale=5*dbase
            oldt=t
        else:
            dscale=dbase
            oldt=t
        if 'space' in keys:
            continueRoutine=False
        elif 'up' in keys:
            y_scale=round((y_scale+dscale)*10000)/10000
        elif 'down' in keys:
            y_scale=round((y_scale-dscale)*10000)/10000
        elif 'left' in keys:
            x_scale=round((x_scale-dscale)*10000)/10000
        elif 'right' in keys:
            x_scale=round((x_scale+dscale)*10000)/10000
        screen_height=round(vsize*10/y_scale)/10
        text_bottom.text='X Scale = '+str(x_scale)+unittext+' per cm, Y Scale = '+str(y_scale)+unittext+' per cm\nScreen height = '+str(screen_height)+' cm\n\nPress the space bar when done'
        ccimage.size=[x_size*x_scale, y_size*y_scale]
        
    
    # *text_top* updates
    if text_top.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_top.frameNStart = frameN  # exact frame index
        text_top.tStart = t  # local t and not account for scr refresh
        text_top.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_top, 'tStartRefresh')  # time at next scr refresh
        text_top.setAutoDraw(True)
    
    # *text_bottom* updates
    if text_bottom.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_bottom.frameNStart = frameN  # exact frame index
        text_bottom.tStart = t  # local t and not account for scr refresh
        text_bottom.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_bottom, 'tStartRefresh')  # time at next scr refresh
        text_bottom.setAutoDraw(True)
    
    # *ccimage* updates
    if ccimage.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        ccimage.frameNStart = frameN  # exact frame index
        ccimage.tStart = t  # local t and not account for scr refresh
        ccimage.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(ccimage, 'tStartRefresh')  # time at next scr refresh
        ccimage.setAutoDraw(True)
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in screen_scaleComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "screen_scale"-------
for thisComponent in screen_scaleComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('X Scale',x_scale)
thisExp.addData('Y Scale',y_scale)

thisExp.addData('ccimage.started', ccimage.tStartRefresh)
thisExp.addData('ccimage.stopped', ccimage.tStopRefresh)
# the Routine "screen_scale" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# ------Prepare to start Routine "rectangle"-------
continueRoutine = True
# update component parameters for each repeat
polygon.setSize((10*x_scale, 10*y_scale))
key_resp.keys = []
key_resp.rt = []
_key_resp_allKeys = []
# keep track of which components have finished
rectangleComponents = [text, polygon, key_resp]
for thisComponent in rectangleComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
rectangleClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "rectangle"-------
while continueRoutine:
    # get current time
    t = rectangleClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=rectangleClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *text* updates
    if text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text.frameNStart = frameN  # exact frame index
        text.tStart = t  # local t and not account for scr refresh
        text.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text, 'tStartRefresh')  # time at next scr refresh
        text.setAutoDraw(True)
    
    # *polygon* updates
    if polygon.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        polygon.frameNStart = frameN  # exact frame index
        polygon.tStart = t  # local t and not account for scr refresh
        polygon.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(polygon, 'tStartRefresh')  # time at next scr refresh
        polygon.setAutoDraw(True)
    
    # *key_resp* updates
    waitOnFlip = False
    if key_resp.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        key_resp.frameNStart = frameN  # exact frame index
        key_resp.tStart = t  # local t and not account for scr refresh
        key_resp.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(key_resp, 'tStartRefresh')  # time at next scr refresh
        key_resp.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(key_resp.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(key_resp.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if key_resp.status == STARTED and not waitOnFlip:
        theseKeys = key_resp.getKeys(keyList=['space'], waitRelease=False)
        _key_resp_allKeys.extend(theseKeys)
        if len(_key_resp_allKeys):
            key_resp.keys = _key_resp_allKeys[-1].name  # just the last key pressed
            key_resp.rt = _key_resp_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in rectangleComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "rectangle"-------
for thisComponent in rectangleComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# the Routine "rectangle" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# ------Prepare to start Routine "end"-------
continueRoutine = True
# update component parameters for each repeat
# keep track of which components have finished
endComponents = [text_2]
for thisComponent in endComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
endClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "end"-------
while continueRoutine:
    # get current time
    t = endClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=endClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *text_2* updates
    if text_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_2.frameNStart = frameN  # exact frame index
        text_2.tStart = t  # local t and not account for scr refresh
        text_2.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_2, 'tStartRefresh')  # time at next scr refresh
        text_2.setAutoDraw(True)
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in endComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "end"-------
for thisComponent in endComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# the Routine "end" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# Flip one final time so any remaining win.callOnFlip() 
# and win.timeOnFlip() tasks get executed before quitting
win.flip()

# these shouldn't be strictly necessary (should auto-save)
thisExp.saveAsWideText(filename+'.csv', delim='auto')
thisExp.saveAsPickle(filename)
logging.flush()
# make sure everything is closed down
thisExp.abort()  # or data files will save again on exit
win.close()
core.quit()
