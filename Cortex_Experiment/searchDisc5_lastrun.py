#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
This experiment was created using PsychoPy3 Experiment Builder (v2021.2.3),
    on Mon Jan 30 17:16:09 2023
If you publish work using this script the most relevant publication is:

    Peirce J, Gray JR, Simpson S, MacAskill M, Höchenberger R, Sogo H, Kastman E, Lindeløv JK. (2019) 
        PsychoPy2: Experiments in behavior made easy Behav Res 51: 195. 
        https://doi.org/10.3758/s13428-018-01193-y

"""

from __future__ import absolute_import, division

from psychopy import locale_setup
from psychopy import prefs
from psychopy import sound, gui, visual, core, data, event, logging, clock, colors, hardware
from psychopy.constants import (NOT_STARTED, STARTED, PLAYING, PAUSED,
                                STOPPED, FINISHED, PRESSED, RELEASED, FOREVER)

import numpy as np  # whole numpy lib is available, prepend 'np.'
from numpy import (sin, cos, tan, log, log10, pi, average,
                   sqrt, std, deg2rad, rad2deg, linspace, asarray)
from numpy.random import random, randint, normal, shuffle, choice as randchoice
import os  # handy system and path functions
import sys  # to get file system encoding

from psychopy.hardware import keyboard

try:  # to use the Cedrus response box
   import pyxid2 as pyxid
except ImportError:
   import pyxid
cedrusBox_0 = None
for n in range(10):  # doesn't always work first time!
    try:
        devices = pyxid.get_xid_devices()
        core.wait(0.1)
        cedrusBox_0 = devices[0]
        cedrusBox_0.clock = core.Clock()
        break  # found the device so can break the loop
    except Exception:
        pass
if not cedrusBox_0:
    logging.error('could not find a Cedrus device.')
    core.quit()


# Ensure that relative paths start from the same directory as this script
_thisDir = os.path.dirname(os.path.abspath(__file__))
os.chdir(_thisDir)

# Store info about the experiment session
psychopyVersion = '2021.2.3'
expName = 'searchDisc5'  # from the Builder filename that created this script
expInfo = {'participant': '', 'session': '001'}
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
    originPath='/Users/labuser/Desktop/Cortex_VS/searchDisc5_lastrun.py',
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
    size=[1920, 1080], fullscr=True, screen=0, 
    winType='pyglet', allowGUI=False, allowStencil=False,
    monitor='testMonitor', color=[-1,-1,-1], colorSpace='rgb',
    blendMode='avg', useFBO=True, 
    units='pix')
# store frame rate of monitor if we can measure it
expInfo['frameRate'] = win.getActualFrameRate()
if expInfo['frameRate'] != None:
    frameDur = 1.0 / round(expInfo['frameRate'])
else:
    frameDur = 1.0 / 60.0  # could not measure, so guess

# Setup eyetracking
ioDevice = ioConfig = ioSession = ioServer = eyetracker = None

# create a default keyboard (e.g. to check for escape)
defaultKeyboard = keyboard.Keyboard()

# Initialize components for Routine "consent1"
consent1Clock = core.Clock()
text_6 = visual.TextStim(win=win, name='text_6',
    text='Please read each statement carefully and click either RED button to Agree and continue or ESC button to disagree and terminate the experiment.',
    font='Arial',
    units='norm', pos=(0, 0), height=0.10, wrapWidth=1.5, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);
buttonBox = cedrusBox_0

# Initialize components for Routine "consent2"
consent2Clock = core.Clock()
text_7 = visual.TextStim(win=win, name='text_7',
    text='I understand that my participation in this project will involve looking for a target object on a computer screen and indicating what direction the target is facing, by pressing a computer keyboard buttons. This will require approximately 30min of my time.\nI understand that participation in this study is entirely voluntary and that I can withdraw from the study at any time without providing a reason by simply closing the browser or pressing esc button on your keyboard. I am aware that this will lead to loss of course credit or reimbursement. The incomplete data sets will not be saved.\nI understand that I can discuss any concerns with the experimenters before or after participating.\nThis research is carried out by postdoctoral research fellow Dr Anna Nowakowska in the School of Psychology, University of Aberdeen under the supervision of lecturer Anna Hughes and lecturer Alasdair Clarke (Department of Psychology, University of Essex)\nContact information:\n[a.nowakowska@abdn.ac.uk, anna.hughes@essex.ac.uk, a.clarke@essex.ac.uk]\nPress RED button to Agree and continue.\nPress ESC button to terminate the experiment.\n\n',
    font='Arial',
    units='norm', pos=(0, 0), height=0.08, wrapWidth=1.5, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);
buttonBox_3 = cedrusBox_0

# Initialize components for Routine "consent3"
consent3Clock = core.Clock()
text_8 = visual.TextStim(win=win, name='text_8',
    text='I understand that the information provided by me will be held anonymously so that it is impossible to trace this information back to me individually. Information will be held on a secure server and may be retained indefinitely. \nTo ensure access to the data for the wider research community, the anonymous dataset may be archived in an online repository (e.g., the Open Science Framework, https://osf.io/) or send to other researchers upon request for inspection.\nPress RED button to Agree and continue.\nPress ESC button to disagree and terminate the experiment.\n\n',
    font='Arial',
    units='norm', pos=(0, 0), height=0.08, wrapWidth=1.5, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);
buttonBox_4 = cedrusBox_0

# Initialize components for Routine "consent4"
consent4Clock = core.Clock()
text_9 = visual.TextStim(win=win, name='text_9',
    text='I confirm that the purpose, participation information, and data storage of this research have been sufficiently explained. \nI understand that at the end of the experiment I will be provided with additional information about the purpose of this research.\nPress RED button to agree and continue to the experiment.\nPress ESC button to disagree and terminate the experiment.',
    font='Arial',
    units='norm', pos=(0, 0), height=0.10, wrapWidth=1.5, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);
buttonBox_5 = cedrusBox_0

# Initialize components for Routine "WelcomePractice"
WelcomePracticeClock = core.Clock()
text_2 = visual.TextStim(win=win, name='text_2',
    text='Welcome! Your task is to find\nwhite or red semicircle and indicate \nif it is facing left or right.\nPress RED bar to continue.\n',
    font='Arial',
    units='norm', pos=(0, 0), height=0.07, wrapWidth=1.5, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);
buttonBox_6 = cedrusBox_0

# Initialize components for Routine "instructions"
instructionsClock = core.Clock()
text_5 = visual.TextStim(win=win, name='text_5',
    text='Look at the fixation cross and press RED button when you\nare ready to start the trial.\nPress left arrow for semicircle facing left.\nPress right arrow for semicircle facing right.\nYou will first complete 16 practice trials.\nPress RED bar when you are ready to start.',
    font='Arial',
    units='norm', pos=(0, 0), height=0.07, wrapWidth=1.5, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);
buttonBox_7 = cedrusBox_0

# Initialize components for Routine "targetStimuli"
targetStimuliClock = core.Clock()
image_2 = visual.ImageStim(
    win=win,
    name='image_2', units='norm', 
    image='targets/leftDisc.png', mask=None,
    ori=0, pos=(-0.02,0.15), size=(0.03,0.08),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=128, interpolate=True, depth=0.0)
text_3 = visual.TextStim(win=win, name='text_3',
    text='Press left arrow if you see left semicircle\n\n\nPress right arrow if you see right semicircle\n\n\nPress RED button to start',
    font='Arial',
    units='norm', pos=(0, 0), height=0.08, wrapWidth=1.5, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-1.0);
image_3 = visual.ImageStim(
    win=win,
    name='image_3', units='norm', 
    image='targets/rightDisc.png', mask=None,
    ori=0, pos=(0, -0.15), size=(0.03,0.08),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=128, interpolate=True, depth=-2.0)
buttonBox_8 = cedrusBox_0

# Initialize components for Routine "first_fix"
first_fixClock = core.Clock()
text_12 = visual.TextStim(win=win, name='text_12',
    text='la la la',
    font='Open Sans',
    units='cm', pos=(0, 0), height=6.0, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=1.0, 
    languageStyle='LTR',
    depth=0.0);
polygon = visual.ShapeStim(
    win=win, name='polygon', vertices='cross',units='cm', 
    size=(2.5, 2.5),
    ori=0.0, pos=(0, 0),
    lineWidth=1.0,     colorSpace='rgb',  lineColor='white', fillColor='white',
    opacity=None, depth=-1.0, interpolate=True)
buttonBox_9 = cedrusBox_0

# Initialize components for Routine "practiceTrials"
practiceTrialsClock = core.Clock()
image = visual.ImageStim(
    win=win,
    name='image', units='norm', 
    image='sin', mask=None,
    ori=0, pos=(0, 0), size=(2,2),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=True,
    texRes=128, interpolate=True, depth=0.0)
buttonBox_10 = cedrusBox_0

# Initialize components for Routine "practiceFeedback"
practiceFeedbackClock = core.Clock()
msg='doh'
text_4 = visual.TextStim(win=win, name='text_4',
    text='',
    font='Arial',
    units='norm', pos=(0, 0), height=0.1, wrapWidth=1.5, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-1.0);

# Initialize components for Routine "WelcomeScreen"
WelcomeScreenClock = core.Clock()
text = visual.TextStim(win=win, name='text',
    text='Welcome to the experimental trials.\nBe reminded that your task is to look for \na white or a red semicircle.\nIf semicircle is facing left press left arrow key.\nIf semicircle is facing right press right arrow key.\nPress RED button to continue\n',
    font='Arial',
    units='norm', pos=(0, 0), height=0.07, wrapWidth=1.5, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);
buttonBox_11 = cedrusBox_0

# Initialize components for Routine "targetInfo"
targetInfoClock = core.Clock()
message='doh'
messageFeedback='doh'
trialsCounterFeedback=0
target='no colour'
targetTypeInstruction = visual.TextStim(win=win, name='targetTypeInstruction',
    text='',
    font='Open Sans',
    units='norm', pos=(0, 0), height=0.1, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);
buttonBox_2 = cedrusBox_0

# Initialize components for Routine "first_fix"
first_fixClock = core.Clock()
text_12 = visual.TextStim(win=win, name='text_12',
    text='la la la',
    font='Open Sans',
    units='cm', pos=(0, 0), height=6.0, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=1.0, 
    languageStyle='LTR',
    depth=0.0);
polygon = visual.ShapeStim(
    win=win, name='polygon', vertices='cross',units='cm', 
    size=(2.5, 2.5),
    ori=0.0, pos=(0, 0),
    lineWidth=1.0,     colorSpace='rgb',  lineColor='white', fillColor='white',
    opacity=None, depth=-1.0, interpolate=True)
buttonBox_9 = cedrusBox_0

# Initialize components for Routine "trial"
trialClock = core.Clock()
dispStimuli = visual.ImageStim(
    win=win,
    name='dispStimuli', units='norm', 
    image='sin', mask=None,
    ori=0, pos=(0, 0), size=1.0,
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=128, interpolate=True, depth=0.0)
buttonBox_12 = cedrusBox_0

# Initialize components for Routine "break_2"
break_2Clock = core.Clock()
msg='doh'
trialCounter=0
accuracySum=0
totRT=0
breakMessage = visual.TextStim(win=win, name='breakMessage',
    text='',
    font='Arial',
    units='norm', pos=(0, 0), height=0.1, wrapWidth=1.5, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-1.0);
buttonBox_13 = cedrusBox_0

# Create some handy timers
globalClock = core.Clock()  # to track the time since experiment started
routineTimer = core.CountdownTimer()  # to track time remaining of each (non-slip) routine 

# ------Prepare to start Routine "consent1"-------
continueRoutine = True
# update component parameters for each repeat
buttonBox.keys = []  # to store response values
buttonBox.rt = []
buttonBox.status = None
# keep track of which components have finished
consent1Components = [text_6, buttonBox]
for thisComponent in consent1Components:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
consent1Clock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "consent1"-------
while continueRoutine:
    # get current time
    t = consent1Clock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=consent1Clock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *text_6* updates
    if text_6.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_6.frameNStart = frameN  # exact frame index
        text_6.tStart = t  # local t and not account for scr refresh
        text_6.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_6, 'tStartRefresh')  # time at next scr refresh
        text_6.setAutoDraw(True)
    # *buttonBox* updates
    if buttonBox.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        buttonBox.frameNStart = frameN  # exact frame index
        buttonBox.tStart = t  # local t and not account for scr refresh
        buttonBox.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(buttonBox, 'tStartRefresh')  # time at next scr refresh
        buttonBox.status = STARTED
        buttonBox.clock.reset()  # now t=0
        # clear buttonBox responses (in a loop - the Cedrus own function doesn't work well)
        buttonBox.poll_for_response()
        while len(buttonBox.response_queue):
            buttonBox.clear_response_queue()
            buttonBox.poll_for_response() #often there are more resps waiting!
    if buttonBox.status == STARTED:
        theseKeys=[]
        theseRTs=[]
        # check for key presses
        buttonBox.poll_for_response()
        while len(buttonBox.response_queue):
            evt = buttonBox.get_next_response()
            if evt['key'] not in [0, 2]:
                continue  # we don't care about this key
            if evt['pressed']:
              theseKeys.append(evt['key'])
              theseRTs.append(buttonBox.clock.getTime())
            buttonBox.poll_for_response()
        buttonBox.clear_response_queue()  # don't process again
        if len(theseKeys) > 0:  # at least one key was pressed
            if buttonBox.keys == []:  # then this is first keypress
                buttonBox.keys = theseKeys[0]  # the first key pressed
                buttonBox.rt = theseRTs[0]
                # a response ends the routine
                continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in consent1Components:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "consent1"-------
for thisComponent in consent1Components:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('text_6.started', text_6.tStartRefresh)
thisExp.addData('text_6.stopped', text_6.tStopRefresh)
# check responses
if buttonBox.keys in ['', [], None]:  # No response was made
    buttonBox.keys = None
thisExp.addData('buttonBox.keys',buttonBox.keys)
if buttonBox.keys != None:  # we had a response
    thisExp.addData('buttonBox.rt', buttonBox.rt)
thisExp.addData('buttonBox.started', buttonBox.tStartRefresh)
thisExp.addData('buttonBox.stopped', buttonBox.tStopRefresh)
thisExp.nextEntry()
# the Routine "consent1" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# ------Prepare to start Routine "consent2"-------
continueRoutine = True
# update component parameters for each repeat
buttonBox_3.keys = []  # to store response values
buttonBox_3.rt = []
buttonBox_3.status = None
# keep track of which components have finished
consent2Components = [text_7, buttonBox_3]
for thisComponent in consent2Components:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
consent2Clock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "consent2"-------
while continueRoutine:
    # get current time
    t = consent2Clock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=consent2Clock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *text_7* updates
    if text_7.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_7.frameNStart = frameN  # exact frame index
        text_7.tStart = t  # local t and not account for scr refresh
        text_7.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_7, 'tStartRefresh')  # time at next scr refresh
        text_7.setAutoDraw(True)
    # *buttonBox_3* updates
    if buttonBox_3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        buttonBox_3.frameNStart = frameN  # exact frame index
        buttonBox_3.tStart = t  # local t and not account for scr refresh
        buttonBox_3.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(buttonBox_3, 'tStartRefresh')  # time at next scr refresh
        buttonBox_3.status = STARTED
        buttonBox_3.clock.reset()  # now t=0
        # clear buttonBox_3 responses (in a loop - the Cedrus own function doesn't work well)
        buttonBox_3.poll_for_response()
        while len(buttonBox_3.response_queue):
            buttonBox_3.clear_response_queue()
            buttonBox_3.poll_for_response() #often there are more resps waiting!
    if buttonBox_3.status == STARTED:
        theseKeys=[]
        theseRTs=[]
        # check for key presses
        buttonBox_3.poll_for_response()
        while len(buttonBox_3.response_queue):
            evt = buttonBox_3.get_next_response()
            if evt['key'] not in [0, 2]:
                continue  # we don't care about this key
            if evt['pressed']:
              theseKeys.append(evt['key'])
              theseRTs.append(buttonBox_3.clock.getTime())
            buttonBox_3.poll_for_response()
        buttonBox_3.clear_response_queue()  # don't process again
        if len(theseKeys) > 0:  # at least one key was pressed
            if buttonBox_3.keys == []:  # then this is first keypress
                buttonBox_3.keys = theseKeys[0]  # the first key pressed
                buttonBox_3.rt = theseRTs[0]
                # a response ends the routine
                continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in consent2Components:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "consent2"-------
for thisComponent in consent2Components:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('text_7.started', text_7.tStartRefresh)
thisExp.addData('text_7.stopped', text_7.tStopRefresh)
# check responses
if buttonBox_3.keys in ['', [], None]:  # No response was made
    buttonBox_3.keys = None
thisExp.addData('buttonBox_3.keys',buttonBox_3.keys)
if buttonBox_3.keys != None:  # we had a response
    thisExp.addData('buttonBox_3.rt', buttonBox_3.rt)
thisExp.addData('buttonBox_3.started', buttonBox_3.tStartRefresh)
thisExp.addData('buttonBox_3.stopped', buttonBox_3.tStopRefresh)
thisExp.nextEntry()
# the Routine "consent2" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# ------Prepare to start Routine "consent3"-------
continueRoutine = True
# update component parameters for each repeat
buttonBox_4.keys = []  # to store response values
buttonBox_4.rt = []
buttonBox_4.status = None
# keep track of which components have finished
consent3Components = [text_8, buttonBox_4]
for thisComponent in consent3Components:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
consent3Clock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "consent3"-------
while continueRoutine:
    # get current time
    t = consent3Clock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=consent3Clock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *text_8* updates
    if text_8.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_8.frameNStart = frameN  # exact frame index
        text_8.tStart = t  # local t and not account for scr refresh
        text_8.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_8, 'tStartRefresh')  # time at next scr refresh
        text_8.setAutoDraw(True)
    # *buttonBox_4* updates
    if buttonBox_4.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        buttonBox_4.frameNStart = frameN  # exact frame index
        buttonBox_4.tStart = t  # local t and not account for scr refresh
        buttonBox_4.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(buttonBox_4, 'tStartRefresh')  # time at next scr refresh
        buttonBox_4.status = STARTED
        buttonBox_4.clock.reset()  # now t=0
        # clear buttonBox_4 responses (in a loop - the Cedrus own function doesn't work well)
        buttonBox_4.poll_for_response()
        while len(buttonBox_4.response_queue):
            buttonBox_4.clear_response_queue()
            buttonBox_4.poll_for_response() #often there are more resps waiting!
    if buttonBox_4.status == STARTED:
        theseKeys=[]
        theseRTs=[]
        # check for key presses
        buttonBox_4.poll_for_response()
        while len(buttonBox_4.response_queue):
            evt = buttonBox_4.get_next_response()
            if evt['key'] not in [0, 2]:
                continue  # we don't care about this key
            if evt['pressed']:
              theseKeys.append(evt['key'])
              theseRTs.append(buttonBox_4.clock.getTime())
            buttonBox_4.poll_for_response()
        buttonBox_4.clear_response_queue()  # don't process again
        if len(theseKeys) > 0:  # at least one key was pressed
            if buttonBox_4.keys == []:  # then this is first keypress
                buttonBox_4.keys = theseKeys[0]  # the first key pressed
                buttonBox_4.rt = theseRTs[0]
                # a response ends the routine
                continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in consent3Components:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "consent3"-------
for thisComponent in consent3Components:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('text_8.started', text_8.tStartRefresh)
thisExp.addData('text_8.stopped', text_8.tStopRefresh)
# check responses
if buttonBox_4.keys in ['', [], None]:  # No response was made
    buttonBox_4.keys = None
thisExp.addData('buttonBox_4.keys',buttonBox_4.keys)
if buttonBox_4.keys != None:  # we had a response
    thisExp.addData('buttonBox_4.rt', buttonBox_4.rt)
thisExp.addData('buttonBox_4.started', buttonBox_4.tStartRefresh)
thisExp.addData('buttonBox_4.stopped', buttonBox_4.tStopRefresh)
thisExp.nextEntry()
# the Routine "consent3" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# ------Prepare to start Routine "consent4"-------
continueRoutine = True
# update component parameters for each repeat
buttonBox_5.keys = []  # to store response values
buttonBox_5.rt = []
buttonBox_5.status = None
# keep track of which components have finished
consent4Components = [text_9, buttonBox_5]
for thisComponent in consent4Components:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
consent4Clock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "consent4"-------
while continueRoutine:
    # get current time
    t = consent4Clock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=consent4Clock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *text_9* updates
    if text_9.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_9.frameNStart = frameN  # exact frame index
        text_9.tStart = t  # local t and not account for scr refresh
        text_9.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_9, 'tStartRefresh')  # time at next scr refresh
        text_9.setAutoDraw(True)
    # *buttonBox_5* updates
    if buttonBox_5.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        buttonBox_5.frameNStart = frameN  # exact frame index
        buttonBox_5.tStart = t  # local t and not account for scr refresh
        buttonBox_5.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(buttonBox_5, 'tStartRefresh')  # time at next scr refresh
        buttonBox_5.status = STARTED
        buttonBox_5.clock.reset()  # now t=0
        # clear buttonBox_5 responses (in a loop - the Cedrus own function doesn't work well)
        buttonBox_5.poll_for_response()
        while len(buttonBox_5.response_queue):
            buttonBox_5.clear_response_queue()
            buttonBox_5.poll_for_response() #often there are more resps waiting!
    if buttonBox_5.status == STARTED:
        theseKeys=[]
        theseRTs=[]
        # check for key presses
        buttonBox_5.poll_for_response()
        while len(buttonBox_5.response_queue):
            evt = buttonBox_5.get_next_response()
            if evt['key'] not in [0, 2]:
                continue  # we don't care about this key
            if evt['pressed']:
              theseKeys.append(evt['key'])
              theseRTs.append(buttonBox_5.clock.getTime())
            buttonBox_5.poll_for_response()
        buttonBox_5.clear_response_queue()  # don't process again
        if len(theseKeys) > 0:  # at least one key was pressed
            if buttonBox_5.keys == []:  # then this is first keypress
                buttonBox_5.keys = theseKeys[0]  # the first key pressed
                buttonBox_5.rt = theseRTs[0]
                # a response ends the routine
                continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in consent4Components:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "consent4"-------
for thisComponent in consent4Components:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('text_9.started', text_9.tStartRefresh)
thisExp.addData('text_9.stopped', text_9.tStopRefresh)
# check responses
if buttonBox_5.keys in ['', [], None]:  # No response was made
    buttonBox_5.keys = None
thisExp.addData('buttonBox_5.keys',buttonBox_5.keys)
if buttonBox_5.keys != None:  # we had a response
    thisExp.addData('buttonBox_5.rt', buttonBox_5.rt)
thisExp.addData('buttonBox_5.started', buttonBox_5.tStartRefresh)
thisExp.addData('buttonBox_5.stopped', buttonBox_5.tStopRefresh)
thisExp.nextEntry()
# the Routine "consent4" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# ------Prepare to start Routine "WelcomePractice"-------
continueRoutine = True
# update component parameters for each repeat
buttonBox_6.keys = []  # to store response values
buttonBox_6.rt = []
buttonBox_6.status = None
# keep track of which components have finished
WelcomePracticeComponents = [text_2, buttonBox_6]
for thisComponent in WelcomePracticeComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
WelcomePracticeClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "WelcomePractice"-------
while continueRoutine:
    # get current time
    t = WelcomePracticeClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=WelcomePracticeClock)
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
    # *buttonBox_6* updates
    if buttonBox_6.status == NOT_STARTED and tThisFlip >= 1-frameTolerance:
        # keep track of start time/frame for later
        buttonBox_6.frameNStart = frameN  # exact frame index
        buttonBox_6.tStart = t  # local t and not account for scr refresh
        buttonBox_6.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(buttonBox_6, 'tStartRefresh')  # time at next scr refresh
        buttonBox_6.status = STARTED
        buttonBox_6.clock.reset()  # now t=0
        # clear buttonBox_6 responses (in a loop - the Cedrus own function doesn't work well)
        buttonBox_6.poll_for_response()
        while len(buttonBox_6.response_queue):
            buttonBox_6.clear_response_queue()
            buttonBox_6.poll_for_response() #often there are more resps waiting!
    if buttonBox_6.status == STARTED:
        theseKeys=[]
        theseRTs=[]
        # check for key presses
        buttonBox_6.poll_for_response()
        while len(buttonBox_6.response_queue):
            evt = buttonBox_6.get_next_response()
            if evt['key'] not in [0, 2]:
                continue  # we don't care about this key
            if evt['pressed']:
              theseKeys.append(evt['key'])
              theseRTs.append(buttonBox_6.clock.getTime())
            buttonBox_6.poll_for_response()
        buttonBox_6.clear_response_queue()  # don't process again
        if len(theseKeys) > 0:  # at least one key was pressed
            if buttonBox_6.keys == []:  # then this is first keypress
                buttonBox_6.keys = theseKeys[0]  # the first key pressed
                buttonBox_6.rt = theseRTs[0]
                # a response ends the routine
                continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in WelcomePracticeComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "WelcomePractice"-------
for thisComponent in WelcomePracticeComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('text_2.started', text_2.tStartRefresh)
thisExp.addData('text_2.stopped', text_2.tStopRefresh)
# check responses
if buttonBox_6.keys in ['', [], None]:  # No response was made
    buttonBox_6.keys = None
thisExp.addData('buttonBox_6.keys',buttonBox_6.keys)
if buttonBox_6.keys != None:  # we had a response
    thisExp.addData('buttonBox_6.rt', buttonBox_6.rt)
thisExp.addData('buttonBox_6.started', buttonBox_6.tStartRefresh)
thisExp.addData('buttonBox_6.stopped', buttonBox_6.tStopRefresh)
thisExp.nextEntry()
# the Routine "WelcomePractice" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# ------Prepare to start Routine "instructions"-------
continueRoutine = True
# update component parameters for each repeat
buttonBox_7.keys = []  # to store response values
buttonBox_7.rt = []
buttonBox_7.status = None
# keep track of which components have finished
instructionsComponents = [text_5, buttonBox_7]
for thisComponent in instructionsComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
instructionsClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "instructions"-------
while continueRoutine:
    # get current time
    t = instructionsClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=instructionsClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *text_5* updates
    if text_5.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
        # keep track of start time/frame for later
        text_5.frameNStart = frameN  # exact frame index
        text_5.tStart = t  # local t and not account for scr refresh
        text_5.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_5, 'tStartRefresh')  # time at next scr refresh
        text_5.setAutoDraw(True)
    # *buttonBox_7* updates
    if buttonBox_7.status == NOT_STARTED and t >= 3-frameTolerance:
        # keep track of start time/frame for later
        buttonBox_7.frameNStart = frameN  # exact frame index
        buttonBox_7.tStart = t  # local t and not account for scr refresh
        buttonBox_7.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(buttonBox_7, 'tStartRefresh')  # time at next scr refresh
        buttonBox_7.status = STARTED
        buttonBox_7.clock.reset()  # now t=0
    if buttonBox_7.status == STARTED:
        theseKeys=[]
        theseRTs=[]
        # check for key presses
        buttonBox_7.poll_for_response()
        while len(buttonBox_7.response_queue):
            evt = buttonBox_7.get_next_response()
            if evt['key'] not in [0, 2]:
                continue  # we don't care about this key
            if evt['pressed']:
              theseKeys.append(evt['key'])
              theseRTs.append(buttonBox_7.clock.getTime())
            buttonBox_7.poll_for_response()
        buttonBox_7.clear_response_queue()  # don't process again
        if len(theseKeys) > 0:  # at least one key was pressed
            if buttonBox_7.keys == []:  # then this is first keypress
                buttonBox_7.keys = theseKeys[0]  # the first key pressed
                buttonBox_7.rt = theseRTs[0]
                # a response ends the routine
                continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in instructionsComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "instructions"-------
for thisComponent in instructionsComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('text_5.started', text_5.tStartRefresh)
thisExp.addData('text_5.stopped', text_5.tStopRefresh)
# check responses
if buttonBox_7.keys in ['', [], None]:  # No response was made
    buttonBox_7.keys = None
thisExp.addData('buttonBox_7.keys',buttonBox_7.keys)
if buttonBox_7.keys != None:  # we had a response
    thisExp.addData('buttonBox_7.rt', buttonBox_7.rt)
thisExp.nextEntry()
# the Routine "instructions" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# ------Prepare to start Routine "targetStimuli"-------
continueRoutine = True
# update component parameters for each repeat
buttonBox_8.keys = []  # to store response values
buttonBox_8.rt = []
buttonBox_8.status = None
# keep track of which components have finished
targetStimuliComponents = [image_2, text_3, image_3, buttonBox_8]
for thisComponent in targetStimuliComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
targetStimuliClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "targetStimuli"-------
while continueRoutine:
    # get current time
    t = targetStimuliClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=targetStimuliClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *image_2* updates
    if image_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        image_2.frameNStart = frameN  # exact frame index
        image_2.tStart = t  # local t and not account for scr refresh
        image_2.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(image_2, 'tStartRefresh')  # time at next scr refresh
        image_2.setAutoDraw(True)
    
    # *text_3* updates
    if text_3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_3.frameNStart = frameN  # exact frame index
        text_3.tStart = t  # local t and not account for scr refresh
        text_3.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_3, 'tStartRefresh')  # time at next scr refresh
        text_3.setAutoDraw(True)
    
    # *image_3* updates
    if image_3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        image_3.frameNStart = frameN  # exact frame index
        image_3.tStart = t  # local t and not account for scr refresh
        image_3.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(image_3, 'tStartRefresh')  # time at next scr refresh
        image_3.setAutoDraw(True)
    # *buttonBox_8* updates
    if buttonBox_8.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        buttonBox_8.frameNStart = frameN  # exact frame index
        buttonBox_8.tStart = t  # local t and not account for scr refresh
        buttonBox_8.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(buttonBox_8, 'tStartRefresh')  # time at next scr refresh
        buttonBox_8.status = STARTED
        buttonBox_8.clock.reset()  # now t=0
        # clear buttonBox_8 responses (in a loop - the Cedrus own function doesn't work well)
        buttonBox_8.poll_for_response()
        while len(buttonBox_8.response_queue):
            buttonBox_8.clear_response_queue()
            buttonBox_8.poll_for_response() #often there are more resps waiting!
    if buttonBox_8.status == STARTED:
        theseKeys=[]
        theseRTs=[]
        # check for key presses
        buttonBox_8.poll_for_response()
        while len(buttonBox_8.response_queue):
            evt = buttonBox_8.get_next_response()
            if evt['key'] not in [0, 2]:
                continue  # we don't care about this key
            if evt['pressed']:
              theseKeys.append(evt['key'])
              theseRTs.append(buttonBox_8.clock.getTime())
            buttonBox_8.poll_for_response()
        buttonBox_8.clear_response_queue()  # don't process again
        if len(theseKeys) > 0:  # at least one key was pressed
            if buttonBox_8.keys == []:  # then this is first keypress
                buttonBox_8.keys = theseKeys[0]  # the first key pressed
                buttonBox_8.rt = theseRTs[0]
                # a response ends the routine
                continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in targetStimuliComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "targetStimuli"-------
for thisComponent in targetStimuliComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('image_2.started', image_2.tStartRefresh)
thisExp.addData('image_2.stopped', image_2.tStopRefresh)
thisExp.addData('image_3.started', image_3.tStartRefresh)
thisExp.addData('image_3.stopped', image_3.tStopRefresh)
# check responses
if buttonBox_8.keys in ['', [], None]:  # No response was made
    buttonBox_8.keys = None
thisExp.addData('buttonBox_8.keys',buttonBox_8.keys)
if buttonBox_8.keys != None:  # we had a response
    thisExp.addData('buttonBox_8.rt', buttonBox_8.rt)
thisExp.addData('buttonBox_8.started', buttonBox_8.tStartRefresh)
thisExp.addData('buttonBox_8.stopped', buttonBox_8.tStopRefresh)
thisExp.nextEntry()
# the Routine "targetStimuli" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# set up handler to look after randomisation of conditions etc
trials_2 = data.TrialHandler(nReps=1, method='random', 
    extraInfo=expInfo, originPath=-1,
    trialList=data.importConditions('image_stimuli_practice.xlsx'),
    seed=None, name='trials_2')
thisExp.addLoop(trials_2)  # add the loop to the experiment
thisTrial_2 = trials_2.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisTrial_2.rgb)
if thisTrial_2 != None:
    for paramName in thisTrial_2:
        exec('{} = thisTrial_2[paramName]'.format(paramName))

for thisTrial_2 in trials_2:
    currentLoop = trials_2
    # abbreviate parameter names if possible (e.g. rgb = thisTrial_2.rgb)
    if thisTrial_2 != None:
        for paramName in thisTrial_2:
            exec('{} = thisTrial_2[paramName]'.format(paramName))
    
    # ------Prepare to start Routine "first_fix"-------
    continueRoutine = True
    # update component parameters for each repeat
    buttonBox_9.keys = []  # to store response values
    buttonBox_9.rt = []
    buttonBox_9.status = None
    # keep track of which components have finished
    first_fixComponents = [text_12, polygon, buttonBox_9]
    for thisComponent in first_fixComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    first_fixClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "first_fix"-------
    while continueRoutine:
        # get current time
        t = first_fixClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=first_fixClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *text_12* updates
        if text_12.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_12.frameNStart = frameN  # exact frame index
            text_12.tStart = t  # local t and not account for scr refresh
            text_12.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_12, 'tStartRefresh')  # time at next scr refresh
            text_12.setAutoDraw(True)
        
        # *polygon* updates
        if polygon.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            polygon.frameNStart = frameN  # exact frame index
            polygon.tStart = t  # local t and not account for scr refresh
            polygon.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(polygon, 'tStartRefresh')  # time at next scr refresh
            polygon.setAutoDraw(True)
        # *buttonBox_9* updates
        if buttonBox_9.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            buttonBox_9.frameNStart = frameN  # exact frame index
            buttonBox_9.tStart = t  # local t and not account for scr refresh
            buttonBox_9.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(buttonBox_9, 'tStartRefresh')  # time at next scr refresh
            buttonBox_9.status = STARTED
            buttonBox_9.clock.reset()  # now t=0
            # clear buttonBox_9 responses (in a loop - the Cedrus own function doesn't work well)
            buttonBox_9.poll_for_response()
            while len(buttonBox_9.response_queue):
                buttonBox_9.clear_response_queue()
                buttonBox_9.poll_for_response() #often there are more resps waiting!
        if buttonBox_9.status == STARTED:
            theseKeys=[]
            theseRTs=[]
            # check for key presses
            buttonBox_9.poll_for_response()
            while len(buttonBox_9.response_queue):
                evt = buttonBox_9.get_next_response()
                if evt['key'] not in [2, 0]:
                    continue  # we don't care about this key
                if evt['pressed']:
                  theseKeys.append(evt['key'])
                  theseRTs.append(buttonBox_9.clock.getTime())
                buttonBox_9.poll_for_response()
            buttonBox_9.clear_response_queue()  # don't process again
            if len(theseKeys) > 0:  # at least one key was pressed
                if buttonBox_9.keys == []:  # then this is first keypress
                    buttonBox_9.keys = theseKeys[0]  # the first key pressed
                    buttonBox_9.rt = theseRTs[0]
                    # a response ends the routine
                    continueRoutine = False
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in first_fixComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "first_fix"-------
    for thisComponent in first_fixComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    trials_2.addData('polygon.started', polygon.tStartRefresh)
    trials_2.addData('polygon.stopped', polygon.tStopRefresh)
    # check responses
    if buttonBox_9.keys in ['', [], None]:  # No response was made
        buttonBox_9.keys = None
    trials_2.addData('buttonBox_9.keys',buttonBox_9.keys)
    if buttonBox_9.keys != None:  # we had a response
        trials_2.addData('buttonBox_9.rt', buttonBox_9.rt)
    trials_2.addData('buttonBox_9.started', buttonBox_9.tStartRefresh)
    trials_2.addData('buttonBox_9.stopped', buttonBox_9.tStopRefresh)
    # the Routine "first_fix" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # ------Prepare to start Routine "practiceTrials"-------
    continueRoutine = True
    # update component parameters for each repeat
    image.setImage(ImageFile)
    buttonBox_10.keys = []  # to store response values
    buttonBox_10.rt = []
    buttonBox_10.status = None
    # keep track of which components have finished
    practiceTrialsComponents = [image, buttonBox_10]
    for thisComponent in practiceTrialsComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    practiceTrialsClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "practiceTrials"-------
    while continueRoutine:
        # get current time
        t = practiceTrialsClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=practiceTrialsClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *image* updates
        if image.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            image.frameNStart = frameN  # exact frame index
            image.tStart = t  # local t and not account for scr refresh
            image.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(image, 'tStartRefresh')  # time at next scr refresh
            image.setAutoDraw(True)
        if image.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > image.tStartRefresh + 5.0-frameTolerance:
                # keep track of stop time/frame for later
                image.tStop = t  # not accounting for scr refresh
                image.frameNStop = frameN  # exact frame index
                win.timeOnFlip(image, 'tStopRefresh')  # time at next scr refresh
                image.setAutoDraw(False)
        # *buttonBox_10* updates
        if buttonBox_10.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            buttonBox_10.frameNStart = frameN  # exact frame index
            buttonBox_10.tStart = t  # local t and not account for scr refresh
            buttonBox_10.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(buttonBox_10, 'tStartRefresh')  # time at next scr refresh
            buttonBox_10.status = STARTED
            buttonBox_10.clock.reset()  # now t=0
            # clear buttonBox_10 responses (in a loop - the Cedrus own function doesn't work well)
            buttonBox_10.poll_for_response()
            while len(buttonBox_10.response_queue):
                buttonBox_10.clear_response_queue()
                buttonBox_10.poll_for_response() #often there are more resps waiting!
        if buttonBox_10.status == STARTED:
            theseKeys=[]
            theseRTs=[]
            # check for key presses
            buttonBox_10.poll_for_response()
            while len(buttonBox_10.response_queue):
                evt = buttonBox_10.get_next_response()
                if evt['key'] not in [1, 3]:
                    continue  # we don't care about this key
                if evt['pressed']:
                  theseKeys.append(evt['key'])
                  theseRTs.append(buttonBox_10.clock.getTime())
                buttonBox_10.poll_for_response()
            buttonBox_10.clear_response_queue()  # don't process again
            if len(theseKeys) > 0:  # at least one key was pressed
                if buttonBox_10.keys == []:  # then this is first keypress
                    buttonBox_10.keys = theseKeys[0]  # the first key pressed
                    buttonBox_10.rt = theseRTs[0]
                    # was this 'correct'?
                    if (buttonBox_10.keys == str(correctAnswer)) or (buttonBox_10.keys == correctAnswer):
                        buttonBox_10.corr = 1
                    else:
                        buttonBox_10.corr = 0
                    # a response ends the routine
                    continueRoutine = False
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in practiceTrialsComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "practiceTrials"-------
    for thisComponent in practiceTrialsComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    trials_2.addData('image.started', image.tStartRefresh)
    trials_2.addData('image.stopped', image.tStopRefresh)
    # check responses
    if buttonBox_10.keys in ['', [], None]:  # No response was made
        buttonBox_10.keys = None
        # was no response the correct answer?!
        if str(correctAnswer).lower() == 'none':
           buttonBox_10.corr = 1;  # correct non-response
        else:
           buttonBox_10.corr = 0;  # failed to respond (incorrectly)
    # store data for trials_2 (TrialHandler)
    trials_2.addData('buttonBox_10.keys',buttonBox_10.keys)
    trials_2.addData('buttonBox_10.corr', buttonBox_10.corr)
    if buttonBox_10.keys != None:  # we had a response
        trials_2.addData('buttonBox_10.rt', buttonBox_10.rt)
    trials_2.addData('buttonBox_10.started', buttonBox_10.tStartRefresh)
    trials_2.addData('buttonBox_10.stopped', buttonBox_10.tStopRefresh)
    # the Routine "practiceTrials" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # ------Prepare to start Routine "practiceFeedback"-------
    continueRoutine = True
    routineTimer.add(2.000000)
    # update component parameters for each repeat
    if buttonBox_10.corr:
        msg = "Correct!"
    else:
        msg = "Oops, incorrect"
    
    text_4.setText(msg)
    # keep track of which components have finished
    practiceFeedbackComponents = [text_4]
    for thisComponent in practiceFeedbackComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    practiceFeedbackClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "practiceFeedback"-------
    while continueRoutine and routineTimer.getTime() > 0:
        # get current time
        t = practiceFeedbackClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=practiceFeedbackClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *text_4* updates
        if text_4.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_4.frameNStart = frameN  # exact frame index
            text_4.tStart = t  # local t and not account for scr refresh
            text_4.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_4, 'tStartRefresh')  # time at next scr refresh
            text_4.setAutoDraw(True)
        if text_4.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > text_4.tStartRefresh + 2-frameTolerance:
                # keep track of stop time/frame for later
                text_4.tStop = t  # not accounting for scr refresh
                text_4.frameNStop = frameN  # exact frame index
                win.timeOnFlip(text_4, 'tStopRefresh')  # time at next scr refresh
                text_4.setAutoDraw(False)
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in practiceFeedbackComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "practiceFeedback"-------
    for thisComponent in practiceFeedbackComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    trials_2.addData('text_4.started', text_4.tStartRefresh)
    trials_2.addData('text_4.stopped', text_4.tStopRefresh)
    thisExp.nextEntry()
    
# completed 1 repeats of 'trials_2'

# get names of stimulus parameters
if trials_2.trialList in ([], [None], None):
    params = []
else:
    params = trials_2.trialList[0].keys()
# save data for this loop
trials_2.saveAsExcel(filename + '.xlsx', sheetName='trials_2',
    stimOut=params,
    dataOut=['n','all_mean','all_std', 'all_raw'])
trials_2.saveAsText(filename + 'trials_2.csv', delim=',',
    stimOut=params,
    dataOut=['n','all_mean','all_std', 'all_raw'])

# ------Prepare to start Routine "WelcomeScreen"-------
continueRoutine = True
# update component parameters for each repeat
buttonBox_11.keys = []  # to store response values
buttonBox_11.rt = []
buttonBox_11.status = None
# keep track of which components have finished
WelcomeScreenComponents = [text, buttonBox_11]
for thisComponent in WelcomeScreenComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
WelcomeScreenClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "WelcomeScreen"-------
while continueRoutine:
    # get current time
    t = WelcomeScreenClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=WelcomeScreenClock)
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
    # *buttonBox_11* updates
    if buttonBox_11.status == NOT_STARTED and tThisFlip >= 1-frameTolerance:
        # keep track of start time/frame for later
        buttonBox_11.frameNStart = frameN  # exact frame index
        buttonBox_11.tStart = t  # local t and not account for scr refresh
        buttonBox_11.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(buttonBox_11, 'tStartRefresh')  # time at next scr refresh
        buttonBox_11.status = STARTED
        buttonBox_11.clock.reset()  # now t=0
        # clear buttonBox_11 responses (in a loop - the Cedrus own function doesn't work well)
        buttonBox_11.poll_for_response()
        while len(buttonBox_11.response_queue):
            buttonBox_11.clear_response_queue()
            buttonBox_11.poll_for_response() #often there are more resps waiting!
    if buttonBox_11.status == STARTED:
        theseKeys=[]
        theseRTs=[]
        # check for key presses
        buttonBox_11.poll_for_response()
        while len(buttonBox_11.response_queue):
            evt = buttonBox_11.get_next_response()
            if evt['key'] not in [0, 2]:
                continue  # we don't care about this key
            if evt['pressed']:
              theseKeys.append(evt['key'])
              theseRTs.append(buttonBox_11.clock.getTime())
            buttonBox_11.poll_for_response()
        buttonBox_11.clear_response_queue()  # don't process again
        if len(theseKeys) > 0:  # at least one key was pressed
            if buttonBox_11.keys == []:  # then this is first keypress
                buttonBox_11.keys = theseKeys[0]  # the first key pressed
                buttonBox_11.rt = theseRTs[0]
                # a response ends the routine
                continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in WelcomeScreenComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "WelcomeScreen"-------
for thisComponent in WelcomeScreenComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('text.started', text.tStartRefresh)
thisExp.addData('text.stopped', text.tStopRefresh)
# check responses
if buttonBox_11.keys in ['', [], None]:  # No response was made
    buttonBox_11.keys = None
thisExp.addData('buttonBox_11.keys',buttonBox_11.keys)
if buttonBox_11.keys != None:  # we had a response
    thisExp.addData('buttonBox_11.rt', buttonBox_11.rt)
thisExp.addData('buttonBox_11.started', buttonBox_11.tStartRefresh)
thisExp.addData('buttonBox_11.stopped', buttonBox_11.tStopRefresh)
thisExp.nextEntry()
# the Routine "WelcomeScreen" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# set up handler to look after randomisation of conditions etc
trials = data.TrialHandler(nReps=1, method='sequential', 
    extraInfo=expInfo, originPath=-1,
    trialList=data.importConditions('orders/list_sub_'+str(int(expInfo['participant']))+'.xlsx'),
    seed=None, name='trials')
thisExp.addLoop(trials)  # add the loop to the experiment
thisTrial = trials.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisTrial.rgb)
if thisTrial != None:
    for paramName in thisTrial:
        exec('{} = thisTrial[paramName]'.format(paramName))

for thisTrial in trials:
    currentLoop = trials
    # abbreviate parameter names if possible (e.g. rgb = thisTrial.rgb)
    if thisTrial != None:
        for paramName in thisTrial:
            exec('{} = thisTrial[paramName]'.format(paramName))
    
    # ------Prepare to start Routine "targetInfo"-------
    continueRoutine = True
    # update component parameters for each repeat
    trialsCounterFeedback= trialsCounterFeedback +1
    
    if targetType==1:
        target='white'
    else:
        target='red'
        
    if trials.thisN !=0 and trials.thisN !=320 and trials.thisN !=640 and trials.thisN != 960 and trials.thisN != 1280:
       continueRoutine=False
    messageFeedback="In this block you will be looking for %s semicircle. Press left arrow for semicircle facing left. Press right arrow for semicircle facing right. Press RED button to start."%(target)
    targetTypeInstruction.setText(messageFeedback)
    buttonBox_2.keys = []  # to store response values
    buttonBox_2.rt = []
    buttonBox_2.status = None
    # keep track of which components have finished
    targetInfoComponents = [targetTypeInstruction, buttonBox_2]
    for thisComponent in targetInfoComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    targetInfoClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "targetInfo"-------
    while continueRoutine:
        # get current time
        t = targetInfoClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=targetInfoClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *targetTypeInstruction* updates
        if targetTypeInstruction.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            targetTypeInstruction.frameNStart = frameN  # exact frame index
            targetTypeInstruction.tStart = t  # local t and not account for scr refresh
            targetTypeInstruction.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(targetTypeInstruction, 'tStartRefresh')  # time at next scr refresh
            targetTypeInstruction.setAutoDraw(True)
        # *buttonBox_2* updates
        if buttonBox_2.status == NOT_STARTED and tThisFlip >= 2-frameTolerance:
            # keep track of start time/frame for later
            buttonBox_2.frameNStart = frameN  # exact frame index
            buttonBox_2.tStart = t  # local t and not account for scr refresh
            buttonBox_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(buttonBox_2, 'tStartRefresh')  # time at next scr refresh
            buttonBox_2.status = STARTED
            buttonBox_2.clock.reset()  # now t=0
            # clear buttonBox_2 responses (in a loop - the Cedrus own function doesn't work well)
            buttonBox_2.poll_for_response()
            while len(buttonBox_2.response_queue):
                buttonBox_2.clear_response_queue()
                buttonBox_2.poll_for_response() #often there are more resps waiting!
        if buttonBox_2.status == STARTED:
            theseKeys=[]
            theseRTs=[]
            # check for key presses
            buttonBox_2.poll_for_response()
            while len(buttonBox_2.response_queue):
                evt = buttonBox_2.get_next_response()
                if evt['key'] not in [0, 2]:
                    continue  # we don't care about this key
                if evt['pressed']:
                  theseKeys.append(evt['key'])
                  theseRTs.append(buttonBox_2.clock.getTime())
                buttonBox_2.poll_for_response()
            buttonBox_2.clear_response_queue()  # don't process again
            if len(theseKeys) > 0:  # at least one key was pressed
                if buttonBox_2.keys == []:  # then this is first keypress
                    buttonBox_2.keys = theseKeys[0]  # the first key pressed
                    buttonBox_2.rt = theseRTs[0]
                    # a response ends the routine
                    continueRoutine = False
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in targetInfoComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "targetInfo"-------
    for thisComponent in targetInfoComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    trials.addData('targetTypeInstruction.started', targetTypeInstruction.tStartRefresh)
    trials.addData('targetTypeInstruction.stopped', targetTypeInstruction.tStopRefresh)
    # check responses
    if buttonBox_2.keys in ['', [], None]:  # No response was made
        buttonBox_2.keys = None
    trials.addData('buttonBox_2.keys',buttonBox_2.keys)
    if buttonBox_2.keys != None:  # we had a response
        trials.addData('buttonBox_2.rt', buttonBox_2.rt)
    trials.addData('buttonBox_2.started', buttonBox_2.tStartRefresh)
    trials.addData('buttonBox_2.stopped', buttonBox_2.tStopRefresh)
    # the Routine "targetInfo" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # ------Prepare to start Routine "first_fix"-------
    continueRoutine = True
    # update component parameters for each repeat
    buttonBox_9.keys = []  # to store response values
    buttonBox_9.rt = []
    buttonBox_9.status = None
    # keep track of which components have finished
    first_fixComponents = [text_12, polygon, buttonBox_9]
    for thisComponent in first_fixComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    first_fixClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "first_fix"-------
    while continueRoutine:
        # get current time
        t = first_fixClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=first_fixClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *text_12* updates
        if text_12.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_12.frameNStart = frameN  # exact frame index
            text_12.tStart = t  # local t and not account for scr refresh
            text_12.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_12, 'tStartRefresh')  # time at next scr refresh
            text_12.setAutoDraw(True)
        
        # *polygon* updates
        if polygon.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            polygon.frameNStart = frameN  # exact frame index
            polygon.tStart = t  # local t and not account for scr refresh
            polygon.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(polygon, 'tStartRefresh')  # time at next scr refresh
            polygon.setAutoDraw(True)
        # *buttonBox_9* updates
        if buttonBox_9.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            buttonBox_9.frameNStart = frameN  # exact frame index
            buttonBox_9.tStart = t  # local t and not account for scr refresh
            buttonBox_9.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(buttonBox_9, 'tStartRefresh')  # time at next scr refresh
            buttonBox_9.status = STARTED
            buttonBox_9.clock.reset()  # now t=0
            # clear buttonBox_9 responses (in a loop - the Cedrus own function doesn't work well)
            buttonBox_9.poll_for_response()
            while len(buttonBox_9.response_queue):
                buttonBox_9.clear_response_queue()
                buttonBox_9.poll_for_response() #often there are more resps waiting!
        if buttonBox_9.status == STARTED:
            theseKeys=[]
            theseRTs=[]
            # check for key presses
            buttonBox_9.poll_for_response()
            while len(buttonBox_9.response_queue):
                evt = buttonBox_9.get_next_response()
                if evt['key'] not in [2, 0]:
                    continue  # we don't care about this key
                if evt['pressed']:
                  theseKeys.append(evt['key'])
                  theseRTs.append(buttonBox_9.clock.getTime())
                buttonBox_9.poll_for_response()
            buttonBox_9.clear_response_queue()  # don't process again
            if len(theseKeys) > 0:  # at least one key was pressed
                if buttonBox_9.keys == []:  # then this is first keypress
                    buttonBox_9.keys = theseKeys[0]  # the first key pressed
                    buttonBox_9.rt = theseRTs[0]
                    # a response ends the routine
                    continueRoutine = False
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in first_fixComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "first_fix"-------
    for thisComponent in first_fixComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    trials.addData('polygon.started', polygon.tStartRefresh)
    trials.addData('polygon.stopped', polygon.tStopRefresh)
    # check responses
    if buttonBox_9.keys in ['', [], None]:  # No response was made
        buttonBox_9.keys = None
    trials.addData('buttonBox_9.keys',buttonBox_9.keys)
    if buttonBox_9.keys != None:  # we had a response
        trials.addData('buttonBox_9.rt', buttonBox_9.rt)
    trials.addData('buttonBox_9.started', buttonBox_9.tStartRefresh)
    trials.addData('buttonBox_9.stopped', buttonBox_9.tStopRefresh)
    # the Routine "first_fix" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # ------Prepare to start Routine "trial"-------
    continueRoutine = True
    # update component parameters for each repeat
    dispStimuli.setSize((2,2))
    dispStimuli.setImage(ImageFile)
    buttonBox_12.keys = []  # to store response values
    buttonBox_12.rt = []
    buttonBox_12.status = None
    # keep track of which components have finished
    trialComponents = [dispStimuli, buttonBox_12]
    for thisComponent in trialComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    trialClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "trial"-------
    while continueRoutine:
        # get current time
        t = trialClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=trialClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *dispStimuli* updates
        if dispStimuli.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            dispStimuli.frameNStart = frameN  # exact frame index
            dispStimuli.tStart = t  # local t and not account for scr refresh
            dispStimuli.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(dispStimuli, 'tStartRefresh')  # time at next scr refresh
            dispStimuli.setAutoDraw(True)
        if dispStimuli.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > dispStimuli.tStartRefresh + 5.0-frameTolerance:
                # keep track of stop time/frame for later
                dispStimuli.tStop = t  # not accounting for scr refresh
                dispStimuli.frameNStop = frameN  # exact frame index
                win.timeOnFlip(dispStimuli, 'tStopRefresh')  # time at next scr refresh
                dispStimuli.setAutoDraw(False)
        # *buttonBox_12* updates
        if buttonBox_12.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            buttonBox_12.frameNStart = frameN  # exact frame index
            buttonBox_12.tStart = t  # local t and not account for scr refresh
            buttonBox_12.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(buttonBox_12, 'tStartRefresh')  # time at next scr refresh
            buttonBox_12.status = STARTED
            buttonBox_12.clock.reset()  # now t=0
            # clear buttonBox_12 responses (in a loop - the Cedrus own function doesn't work well)
            buttonBox_12.poll_for_response()
            while len(buttonBox_12.response_queue):
                buttonBox_12.clear_response_queue()
                buttonBox_12.poll_for_response() #often there are more resps waiting!
        if buttonBox_12.status == STARTED:
            theseKeys=[]
            theseRTs=[]
            # check for key presses
            buttonBox_12.poll_for_response()
            while len(buttonBox_12.response_queue):
                evt = buttonBox_12.get_next_response()
                if evt['key'] not in [1, 3]:
                    continue  # we don't care about this key
                if evt['pressed']:
                  theseKeys.append(evt['key'])
                  theseRTs.append(buttonBox_12.clock.getTime())
                buttonBox_12.poll_for_response()
            buttonBox_12.clear_response_queue()  # don't process again
            if len(theseKeys) > 0:  # at least one key was pressed
                if buttonBox_12.keys == []:  # then this is first keypress
                    buttonBox_12.keys = theseKeys[0]  # the first key pressed
                    buttonBox_12.rt = theseRTs[0]
                    # was this 'correct'?
                    if (buttonBox_12.keys == str(correctAnswer)) or (buttonBox_12.keys == correctAnswer):
                        buttonBox_12.corr = 1
                    else:
                        buttonBox_12.corr = 0
                    # a response ends the routine
                    continueRoutine = False
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in trialComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "trial"-------
    for thisComponent in trialComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    trials.addData('dispStimuli.started', dispStimuli.tStartRefresh)
    trials.addData('dispStimuli.stopped', dispStimuli.tStopRefresh)
    # check responses
    if buttonBox_12.keys in ['', [], None]:  # No response was made
        buttonBox_12.keys = None
        # was no response the correct answer?!
        if str(correctAnswer).lower() == 'none':
           buttonBox_12.corr = 1;  # correct non-response
        else:
           buttonBox_12.corr = 0;  # failed to respond (incorrectly)
    # store data for trials (TrialHandler)
    trials.addData('buttonBox_12.keys',buttonBox_12.keys)
    trials.addData('buttonBox_12.corr', buttonBox_12.corr)
    if buttonBox_12.keys != None:  # we had a response
        trials.addData('buttonBox_12.rt', buttonBox_12.rt)
    trials.addData('buttonBox_12.started', buttonBox_12.tStartRefresh)
    trials.addData('buttonBox_12.stopped', buttonBox_12.tStopRefresh)
    # the Routine "trial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # ------Prepare to start Routine "break_2"-------
    continueRoutine = True
    # update component parameters for each repeat
    trialCounter = trialCounter + 1
    
    if buttonBox_12.corr:
        accuracySum = accuracySum + 1
        totRT = totRT + buttonBox_12.rt
    
    percentAccurate = accuracySum/trialCounter * 100
    percentAccurate = round(percentAccurate, 3)
    meanRT = totRT/trialCounter
    meanRT = round(meanRT, 3)
    
    msg = "You have completed %i out of 1600 trials. You are %i %% accurate so far, with an average reaction time of %.2f sec. Press RED button to continue." %(trialCounter,percentAccurate,meanRT)
    breakMessage.setText(msg)
    buttonBox_13.keys = []  # to store response values
    buttonBox_13.rt = []
    buttonBox_13.status = None
    # keep track of which components have finished
    break_2Components = [breakMessage, buttonBox_13]
    for thisComponent in break_2Components:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    break_2Clock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "break_2"-------
    while continueRoutine:
        # get current time
        t = break_2Clock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=break_2Clock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        if trialCounter != 320 and trialCounter != 640 and trialCounter !=960 and trialCounter !=1280:
            continueRoutine = False
        
        # *breakMessage* updates
        if breakMessage.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            breakMessage.frameNStart = frameN  # exact frame index
            breakMessage.tStart = t  # local t and not account for scr refresh
            breakMessage.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(breakMessage, 'tStartRefresh')  # time at next scr refresh
            breakMessage.setAutoDraw(True)
        # *buttonBox_13* updates
        if buttonBox_13.status == NOT_STARTED and tThisFlip >= 2-frameTolerance:
            # keep track of start time/frame for later
            buttonBox_13.frameNStart = frameN  # exact frame index
            buttonBox_13.tStart = t  # local t and not account for scr refresh
            buttonBox_13.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(buttonBox_13, 'tStartRefresh')  # time at next scr refresh
            buttonBox_13.status = STARTED
            buttonBox_13.clock.reset()  # now t=0
            # clear buttonBox_13 responses (in a loop - the Cedrus own function doesn't work well)
            buttonBox_13.poll_for_response()
            while len(buttonBox_13.response_queue):
                buttonBox_13.clear_response_queue()
                buttonBox_13.poll_for_response() #often there are more resps waiting!
        if buttonBox_13.status == STARTED:
            theseKeys=[]
            theseRTs=[]
            # check for key presses
            buttonBox_13.poll_for_response()
            while len(buttonBox_13.response_queue):
                evt = buttonBox_13.get_next_response()
                if evt['key'] not in [0, 2]:
                    continue  # we don't care about this key
                if evt['pressed']:
                  theseKeys.append(evt['key'])
                  theseRTs.append(buttonBox_13.clock.getTime())
                buttonBox_13.poll_for_response()
            buttonBox_13.clear_response_queue()  # don't process again
            if len(theseKeys) > 0:  # at least one key was pressed
                if buttonBox_13.keys == []:  # then this is first keypress
                    buttonBox_13.keys = theseKeys[0]  # the first key pressed
                    buttonBox_13.rt = theseRTs[0]
                    # a response ends the routine
                    continueRoutine = False
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in break_2Components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "break_2"-------
    for thisComponent in break_2Components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    trials.addData('breakMessage.started', breakMessage.tStartRefresh)
    trials.addData('breakMessage.stopped', breakMessage.tStopRefresh)
    # check responses
    if buttonBox_13.keys in ['', [], None]:  # No response was made
        buttonBox_13.keys = None
    trials.addData('buttonBox_13.keys',buttonBox_13.keys)
    if buttonBox_13.keys != None:  # we had a response
        trials.addData('buttonBox_13.rt', buttonBox_13.rt)
    trials.addData('buttonBox_13.started', buttonBox_13.tStartRefresh)
    trials.addData('buttonBox_13.stopped', buttonBox_13.tStopRefresh)
    # the Routine "break_2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    thisExp.nextEntry()
    
# completed 1 repeats of 'trials'

# get names of stimulus parameters
if trials.trialList in ([], [None], None):
    params = []
else:
    params = trials.trialList[0].keys()
# save data for this loop
trials.saveAsExcel(filename + '.xlsx', sheetName='trials',
    stimOut=params,
    dataOut=['n','all_mean','all_std', 'all_raw'])
trials.saveAsText(filename + 'trials.csv', delim=',',
    stimOut=params,
    dataOut=['n','all_mean','all_std', 'all_raw'])

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
