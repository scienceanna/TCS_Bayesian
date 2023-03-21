/******************** 
 * Searchdisc5 Test *
 ********************/


// store info about the experiment session:
let expName = 'searchDisc5';  // from the Builder filename that created this script
let expInfo = {'participant': '', 'session': '001'};

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([(- 1), (- 1), (- 1)]),
  units: 'pix',
  waitBlanking: true
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(consent1RoutineBegin());
flowScheduler.add(consent1RoutineEachFrame());
flowScheduler.add(consent1RoutineEnd());
flowScheduler.add(consent2RoutineBegin());
flowScheduler.add(consent2RoutineEachFrame());
flowScheduler.add(consent2RoutineEnd());
flowScheduler.add(consent3RoutineBegin());
flowScheduler.add(consent3RoutineEachFrame());
flowScheduler.add(consent3RoutineEnd());
flowScheduler.add(consent4RoutineBegin());
flowScheduler.add(consent4RoutineEachFrame());
flowScheduler.add(consent4RoutineEnd());
flowScheduler.add(WelcomePracticeRoutineBegin());
flowScheduler.add(WelcomePracticeRoutineEachFrame());
flowScheduler.add(WelcomePracticeRoutineEnd());
flowScheduler.add(instructionsRoutineBegin());
flowScheduler.add(instructionsRoutineEachFrame());
flowScheduler.add(instructionsRoutineEnd());
flowScheduler.add(targetStimuliRoutineBegin());
flowScheduler.add(targetStimuliRoutineEachFrame());
flowScheduler.add(targetStimuliRoutineEnd());
const trials_2LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_2LoopBegin(trials_2LoopScheduler));
flowScheduler.add(trials_2LoopScheduler);
flowScheduler.add(trials_2LoopEnd);
flowScheduler.add(WelcomeScreenRoutineBegin());
flowScheduler.add(WelcomeScreenRoutineEachFrame());
flowScheduler.add(WelcomeScreenRoutineEnd());
const trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trialsLoopBegin(trialsLoopScheduler));
flowScheduler.add(trialsLoopScheduler);
flowScheduler.add(trialsLoopEnd);
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    {'name': 'images/exp1b_trial_125_colour3_distractors31_l.png', 'path': 'images/exp1b_trial_125_colour3_distractors31_l.png'},
    {'name': 'images/exp1a_trial_20_colour2_distractors1_l.png', 'path': 'images/exp1a_trial_20_colour2_distractors1_l.png'},
    {'name': 'images/exp2c_trial_261_colour2_distractors1_r.png', 'path': 'images/exp2c_trial_261_colour2_distractors1_r.png'},
    {'name': 'images/exp2a_trial_28_colour3_distractors19_l.png', 'path': 'images/exp2a_trial_28_colour3_distractors19_l.png'},
    {'name': 'images/exp2a_trial_254_colour0_distractors0_r.png', 'path': 'images/exp2a_trial_254_colour0_distractors0_r.png'},
    {'name': 'images/exp2b_trial_271_colour1_distractors1_l.png', 'path': 'images/exp2b_trial_271_colour1_distractors1_l.png'},
    {'name': 'images/exp2b_trial_314_colour3_distractors4_l.png', 'path': 'images/exp2b_trial_314_colour3_distractors4_l.png'},
    {'name': 'images/exp1b_trial_224_colour1_distractors1_r.png', 'path': 'images/exp1b_trial_224_colour1_distractors1_r.png'},
    {'name': 'images/exp2b_trial_288_colour1_distractors1_r.png', 'path': 'images/exp2b_trial_288_colour1_distractors1_r.png'},
    {'name': 'images/exp2c_trial_127_colour0_distractors0_l.png', 'path': 'images/exp2c_trial_127_colour0_distractors0_l.png'},
    {'name': 'images/exp2c_trial_250_colour3_distractors4_l.png', 'path': 'images/exp2c_trial_250_colour3_distractors4_l.png'},
    {'name': 'images/exp2a_trial_272_colour1_distractors4_l.png', 'path': 'images/exp2a_trial_272_colour1_distractors4_l.png'},
    {'name': 'Practice arrays/exp1a_trial_8_colour2_distractors19_r.png', 'path': 'Practice arrays/exp1a_trial_8_colour2_distractors19_r.png'},
    {'name': 'images/exp1a_trial_77_colour3_distractors19_r.png', 'path': 'images/exp1a_trial_77_colour3_distractors19_r.png'},
    {'name': 'images/exp2a_trial_302_colour3_distractors31_r.png', 'path': 'images/exp2a_trial_302_colour3_distractors31_r.png'},
    {'name': 'images/exp1a_trial_209_colour1_distractors9_l.png', 'path': 'images/exp1a_trial_209_colour1_distractors9_l.png'},
    {'name': 'images/exp2b_trial_218_colour3_distractors4_l.png', 'path': 'images/exp2b_trial_218_colour3_distractors4_l.png'},
    {'name': 'images/exp1b_trial_240_colour1_distractors4_l.png', 'path': 'images/exp1b_trial_240_colour1_distractors4_l.png'},
    {'name': 'images/exp2c_trial_305_colour1_distractors9_l.png', 'path': 'images/exp2c_trial_305_colour1_distractors9_l.png'},
    {'name': 'images/exp2b_trial_204_colour3_distractors9_r.png', 'path': 'images/exp2b_trial_204_colour3_distractors9_r.png'},
    {'name': 'images/exp1a_trial_286_colour0_distractors0_r.png', 'path': 'images/exp1a_trial_286_colour0_distractors0_r.png'},
    {'name': 'images/exp2a_trial_189_colour3_distractors31_l.png', 'path': 'images/exp2a_trial_189_colour3_distractors31_l.png'},
    {'name': 'images/exp2a_trial_123_colour3_distractors9_l.png', 'path': 'images/exp2a_trial_123_colour3_distractors9_l.png'},
    {'name': 'images/exp1b_trial_273_colour1_distractors9_l.png', 'path': 'images/exp1b_trial_273_colour1_distractors9_l.png'},
    {'name': 'images/exp2b_trial_49_colour1_distractors9_l.png', 'path': 'images/exp2b_trial_49_colour1_distractors9_l.png'},
    {'name': 'images/exp2b_trial_169_colour2_distractors31_r.png', 'path': 'images/exp2b_trial_169_colour2_distractors31_r.png'},
    {'name': 'images/exp2a_trial_11_colour3_distractors4_r.png', 'path': 'images/exp2a_trial_11_colour3_distractors4_r.png'},
    {'name': 'images/exp2a_trial_70_colour2_distractors4_r.png', 'path': 'images/exp2a_trial_70_colour2_distractors4_r.png'},
    {'name': 'images/exp1b_trial_292_colour1_distractors31_r.png', 'path': 'images/exp1b_trial_292_colour1_distractors31_r.png'},
    {'name': 'images/exp1a_trial_16_colour1_distractors4_l.png', 'path': 'images/exp1a_trial_16_colour1_distractors4_l.png'},
    {'name': 'images/exp2c_trial_36_colour1_distractors31_r.png', 'path': 'images/exp2c_trial_36_colour1_distractors31_r.png'},
    {'name': 'images/exp2b_trial_196_colour1_distractors31_r.png', 'path': 'images/exp2b_trial_196_colour1_distractors31_r.png'},
    {'name': 'images/exp1b_trial_96_colour1_distractors1_r.png', 'path': 'images/exp1b_trial_96_colour1_distractors1_r.png'},
    {'name': 'images/exp2a_trial_22_colour2_distractors9_l.png', 'path': 'images/exp2a_trial_22_colour2_distractors9_l.png'},
    {'name': 'images/exp2c_trial_225_colour1_distractors4_r.png', 'path': 'images/exp2c_trial_225_colour1_distractors4_r.png'},
    {'name': 'images/exp2c_trial_128_colour1_distractors1_r.png', 'path': 'images/exp2c_trial_128_colour1_distractors1_r.png'},
    {'name': 'images/exp2c_trial_95_colour0_distractors0_l.png', 'path': 'images/exp2c_trial_95_colour0_distractors0_l.png'},
    {'name': 'images/exp2c_trial_174_colour3_distractors31_r.png', 'path': 'images/exp2c_trial_174_colour3_distractors31_r.png'},
    {'name': 'images/exp1b_trial_42_colour3_distractors1_r.png', 'path': 'images/exp1b_trial_42_colour3_distractors1_r.png'},
    {'name': 'images/exp1a_trial_88_colour2_distractors31_l.png', 'path': 'images/exp1a_trial_88_colour2_distractors31_l.png'},
    {'name': 'images/exp1b_trial_109_colour3_distractors19_r.png', 'path': 'images/exp1b_trial_109_colour3_distractors19_r.png'},
    {'name': 'images/exp2c_trial_89_colour3_distractors1_l.png', 'path': 'images/exp2c_trial_89_colour3_distractors1_l.png'},
    {'name': 'images/exp2a_trial_149_colour2_distractors4_l.png', 'path': 'images/exp2a_trial_149_colour2_distractors4_l.png'},
    {'name': 'images/exp2a_trial_118_colour2_distractors9_l.png', 'path': 'images/exp2a_trial_118_colour2_distractors9_l.png'},
    {'name': 'images/exp2b_trial_18_colour1_distractors19_l.png', 'path': 'images/exp2b_trial_18_colour1_distractors19_l.png'},
    {'name': 'images/exp1b_trial_136_colour2_distractors19_r.png', 'path': 'images/exp1b_trial_136_colour2_distractors19_r.png'},
    {'name': 'images/exp1a_trial_74_colour3_distractors1_r.png', 'path': 'images/exp1a_trial_74_colour3_distractors1_r.png'},
    {'name': 'images/exp2c_trial_76_colour3_distractors9_r.png', 'path': 'images/exp2c_trial_76_colour3_distractors9_r.png'},
    {'name': 'images/exp2c_trial_59_colour3_distractors9_l.png', 'path': 'images/exp2c_trial_59_colour3_distractors9_l.png'},
    {'name': 'images/exp2b_trial_199_colour2_distractors9_r.png', 'path': 'images/exp2b_trial_199_colour2_distractors9_r.png'},
    {'name': 'images/exp2c_trial_62_colour0_distractors0_r.png', 'path': 'images/exp2c_trial_62_colour0_distractors0_r.png'},
    {'name': 'images/exp2c_trial_31_colour0_distractors0_l.png', 'path': 'images/exp2c_trial_31_colour0_distractors0_l.png'},
    {'name': 'images/exp2c_trial_308_colour2_distractors1_l.png', 'path': 'images/exp2c_trial_308_colour2_distractors1_l.png'},
    {'name': 'images/exp1a_trial_111_colour1_distractors1_l.png', 'path': 'images/exp1a_trial_111_colour1_distractors1_l.png'},
    {'name': 'images/exp2b_trial_114_colour1_distractors19_l.png', 'path': 'images/exp2b_trial_114_colour1_distractors19_l.png'},
    {'name': 'images/exp2c_trial_188_colour3_distractors19_l.png', 'path': 'images/exp2c_trial_188_colour3_distractors19_l.png'},
    {'name': 'images/exp2a_trial_92_colour3_distractors19_l.png', 'path': 'images/exp2a_trial_92_colour3_distractors19_l.png'},
    {'name': 'images/exp1b_trial_210_colour1_distractors19_l.png', 'path': 'images/exp1b_trial_210_colour1_distractors19_l.png'},
    {'name': 'images/exp1a_trial_235_colour3_distractors4_r.png', 'path': 'images/exp1a_trial_235_colour3_distractors4_r.png'},
    {'name': 'images/exp2b_trial_319_colour0_distractors0_l.png', 'path': 'images/exp2b_trial_319_colour0_distractors0_l.png'},
    {'name': 'images/exp1a_trial_190_colour0_distractors0_r.png', 'path': 'images/exp1a_trial_190_colour0_distractors0_r.png'},
    {'name': 'images/exp2a_trial_230_colour2_distractors4_r.png', 'path': 'images/exp2a_trial_230_colour2_distractors4_r.png'},
    {'name': 'images/exp2b_trial_0_colour1_distractors1_r.png', 'path': 'images/exp2b_trial_0_colour1_distractors1_r.png'},
    {'name': 'images/exp2a_trial_288_colour1_distractors1_r.png', 'path': 'images/exp2a_trial_288_colour1_distractors1_r.png'},
    {'name': 'images/exp2b_trial_294_colour2_distractors4_r.png', 'path': 'images/exp2b_trial_294_colour2_distractors4_r.png'},
    {'name': 'images/exp2b_trial_194_colour1_distractors9_r.png', 'path': 'images/exp2b_trial_194_colour1_distractors9_r.png'},
    {'name': 'images/exp2a_trial_77_colour3_distractors19_r.png', 'path': 'images/exp2a_trial_77_colour3_distractors19_r.png'},
    {'name': 'images/exp1a_trial_169_colour2_distractors31_r.png', 'path': 'images/exp1a_trial_169_colour2_distractors31_r.png'},
    {'name': 'images/exp2a_trial_135_colour2_distractors9_r.png', 'path': 'images/exp2a_trial_135_colour2_distractors9_r.png'},
    {'name': 'images/exp1b_trial_45_colour3_distractors19_r.png', 'path': 'images/exp1b_trial_45_colour3_distractors19_r.png'},
    {'name': 'images/exp2b_trial_292_colour1_distractors31_r.png', 'path': 'images/exp2b_trial_292_colour1_distractors31_r.png'},
    {'name': 'images/exp1a_trial_15_colour1_distractors1_l.png', 'path': 'images/exp1a_trial_15_colour1_distractors1_l.png'},
    {'name': 'images/exp1b_trial_173_colour3_distractors19_r.png', 'path': 'images/exp1b_trial_173_colour3_distractors19_r.png'},
    {'name': 'images/exp1a_trial_221_colour3_distractors31_l.png', 'path': 'images/exp1a_trial_221_colour3_distractors31_l.png'},
    {'name': 'images/exp1b_trial_179_colour1_distractors31_l.png', 'path': 'images/exp1b_trial_179_colour1_distractors31_l.png'},
    {'name': 'images/exp2b_trial_45_colour3_distractors19_r.png', 'path': 'images/exp2b_trial_45_colour3_distractors19_r.png'},
    {'name': 'images/exp2b_trial_120_colour2_distractors31_l.png', 'path': 'images/exp2b_trial_120_colour2_distractors31_l.png'},
    {'name': 'images/exp2b_trial_176_colour1_distractors4_l.png', 'path': 'images/exp2b_trial_176_colour1_distractors4_l.png'},
    {'name': 'images/exp1a_trial_2_colour1_distractors9_r.png', 'path': 'images/exp1a_trial_2_colour1_distractors9_r.png'},
    {'name': 'images/exp2c_trial_87_colour2_distractors19_l.png', 'path': 'images/exp2c_trial_87_colour2_distractors19_l.png'},
    {'name': 'images/exp2c_trial_306_colour1_distractors19_l.png', 'path': 'images/exp2c_trial_306_colour1_distractors19_l.png'},
    {'name': 'images/exp2c_trial_227_colour1_distractors19_r.png', 'path': 'images/exp2c_trial_227_colour1_distractors19_r.png'},
    {'name': 'images/exp2c_trial_25_colour3_distractors1_l.png', 'path': 'images/exp2c_trial_25_colour3_distractors1_l.png'},
    {'name': 'images/exp1a_trial_274_colour1_distractors19_l.png', 'path': 'images/exp1a_trial_274_colour1_distractors19_l.png'},
    {'name': 'images/exp2b_trial_166_colour2_distractors4_r.png', 'path': 'images/exp2b_trial_166_colour2_distractors4_r.png'},
    {'name': 'images/exp2a_trial_261_colour2_distractors1_r.png', 'path': 'images/exp2a_trial_261_colour2_distractors1_r.png'},
    {'name': 'images/exp1b_trial_92_colour3_distractors19_l.png', 'path': 'images/exp1b_trial_92_colour3_distractors19_l.png'},
    {'name': 'images/exp2b_trial_280_colour2_distractors31_l.png', 'path': 'images/exp2b_trial_280_colour2_distractors31_l.png'},
    {'name': 'images/exp2b_trial_296_colour2_distractors19_r.png', 'path': 'images/exp2b_trial_296_colour2_distractors19_r.png'},
    {'name': 'images/exp2a_trial_3_colour1_distractors19_r.png', 'path': 'images/exp2a_trial_3_colour1_distractors19_r.png'},
    {'name': 'images/exp2c_trial_216_colour2_distractors31_l.png', 'path': 'images/exp2c_trial_216_colour2_distractors31_l.png'},
    {'name': 'Images_List_revisions.xlsx', 'path': 'Images_List_revisions.xlsx'},
    {'name': 'images/exp2a_trial_295_colour2_distractors9_r.png', 'path': 'images/exp2a_trial_295_colour2_distractors9_r.png'},
    {'name': 'images/exp2c_trial_284_colour3_distractors19_l.png', 'path': 'images/exp2c_trial_284_colour3_distractors19_l.png'},
    {'name': 'images/exp2c_trial_207_colour1_distractors1_l.png', 'path': 'images/exp2c_trial_207_colour1_distractors1_l.png'},
    {'name': 'images/exp1b_trial_253_colour3_distractors31_l.png', 'path': 'images/exp1b_trial_253_colour3_distractors31_l.png'},
    {'name': 'images/exp2c_trial_124_colour3_distractors19_l.png', 'path': 'images/exp2c_trial_124_colour3_distractors19_l.png'},
    {'name': 'images/exp1b_trial_228_colour1_distractors31_r.png', 'path': 'images/exp1b_trial_228_colour1_distractors31_r.png'},
    {'name': 'images/exp2c_trial_136_colour2_distractors19_r.png', 'path': 'images/exp2c_trial_136_colour2_distractors19_r.png'},
    {'name': 'images/exp1b_trial_276_colour2_distractors1_l.png', 'path': 'images/exp1b_trial_276_colour2_distractors1_l.png'},
    {'name': 'images/exp1a_trial_11_colour3_distractors4_r.png', 'path': 'images/exp1a_trial_11_colour3_distractors4_r.png'},
    {'name': 'images/exp1b_trial_158_colour0_distractors0_r.png', 'path': 'images/exp1b_trial_158_colour0_distractors0_r.png'},
    {'name': 'images/exp2b_trial_148_colour2_distractors1_l.png', 'path': 'images/exp2b_trial_148_colour2_distractors1_l.png'},
    {'name': 'images/exp2a_trial_177_colour1_distractors9_l.png', 'path': 'images/exp2a_trial_177_colour1_distractors9_l.png'},
    {'name': 'images/exp2a_trial_120_colour2_distractors31_l.png', 'path': 'images/exp2a_trial_120_colour2_distractors31_l.png'},
    {'name': 'images/exp2b_trial_229_colour2_distractors1_r.png', 'path': 'images/exp2b_trial_229_colour2_distractors1_r.png'},
    {'name': 'images/exp1b_trial_168_colour2_distractors19_r.png', 'path': 'images/exp1b_trial_168_colour2_distractors19_r.png'},
    {'name': 'images/exp1a_trial_292_colour1_distractors31_r.png', 'path': 'images/exp1a_trial_292_colour1_distractors31_r.png'},
    {'name': 'images/exp1a_trial_133_colour2_distractors1_r.png', 'path': 'images/exp1a_trial_133_colour2_distractors1_r.png'},
    {'name': 'Practice arrays/exp1a_trial_30_colour0_distractors0_r.png', 'path': 'Practice arrays/exp1a_trial_30_colour0_distractors0_r.png'},
    {'name': 'images/exp2a_trial_211_colour1_distractors31_l.png', 'path': 'images/exp2a_trial_211_colour1_distractors31_l.png'},
    {'name': 'images/exp1b_trial_274_colour1_distractors19_l.png', 'path': 'images/exp1b_trial_274_colour1_distractors19_l.png'},
    {'name': 'images/exp1a_trial_47_colour1_distractors1_l.png', 'path': 'images/exp1a_trial_47_colour1_distractors1_l.png'},
    {'name': 'images/exp2a_trial_163_colour1_distractors19_r.png', 'path': 'images/exp2a_trial_163_colour1_distractors19_r.png'},
    {'name': 'images/exp2c_trial_41_colour2_distractors31_r.png', 'path': 'images/exp2c_trial_41_colour2_distractors31_r.png'},
    {'name': 'images/exp2a_trial_239_colour1_distractors1_l.png', 'path': 'images/exp2a_trial_239_colour1_distractors1_l.png'},
    {'name': 'images/exp1b_trial_79_colour1_distractors1_l.png', 'path': 'images/exp1b_trial_79_colour1_distractors1_l.png'},
    {'name': 'images/exp2b_trial_23_colour2_distractors19_l.png', 'path': 'images/exp2b_trial_23_colour2_distractors19_l.png'},
    {'name': 'images/exp2c_trial_316_colour3_distractors19_l.png', 'path': 'images/exp2c_trial_316_colour3_distractors19_l.png'},
    {'name': 'images/exp1a_trial_141_colour3_distractors19_r.png', 'path': 'images/exp1a_trial_141_colour3_distractors19_r.png'},
    {'name': 'images/exp1a_trial_13_colour3_distractors19_r.png', 'path': 'images/exp1a_trial_13_colour3_distractors19_r.png'},
    {'name': 'images/exp2c_trial_173_colour3_distractors19_r.png', 'path': 'images/exp2c_trial_173_colour3_distractors19_r.png'},
    {'name': 'images/exp2c_trial_165_colour2_distractors1_r.png', 'path': 'images/exp2c_trial_165_colour2_distractors1_r.png'},
    {'name': 'images/exp1a_trial_136_colour2_distractors19_r.png', 'path': 'images/exp1a_trial_136_colour2_distractors19_r.png'},
    {'name': 'images/exp2b_trial_32_colour1_distractors1_r.png', 'path': 'images/exp2b_trial_32_colour1_distractors1_r.png'},
    {'name': 'images/exp2a_trial_139_colour3_distractors4_r.png', 'path': 'images/exp2a_trial_139_colour3_distractors4_r.png'},
    {'name': 'images/exp2b_trial_224_colour1_distractors1_r.png', 'path': 'images/exp2b_trial_224_colour1_distractors1_r.png'},
    {'name': 'images/exp2a_trial_202_colour3_distractors1_r.png', 'path': 'images/exp2a_trial_202_colour3_distractors1_r.png'},
    {'name': 'images/exp2a_trial_106_colour3_distractors1_r.png', 'path': 'images/exp2a_trial_106_colour3_distractors1_r.png'},
    {'name': 'images/exp2a_trial_5_colour2_distractors1_r.png', 'path': 'images/exp2a_trial_5_colour2_distractors1_r.png'},
    {'name': 'images/exp2a_trial_147_colour1_distractors31_l.png', 'path': 'images/exp2a_trial_147_colour1_distractors31_l.png'},
    {'name': 'images/exp2b_trial_27_colour3_distractors9_l.png', 'path': 'images/exp2b_trial_27_colour3_distractors9_l.png'},
    {'name': 'images/exp1a_trial_5_colour2_distractors1_r.png', 'path': 'images/exp1a_trial_5_colour2_distractors1_r.png'},
    {'name': 'images/exp1b_trial_261_colour2_distractors1_r.png', 'path': 'images/exp1b_trial_261_colour2_distractors1_r.png'},
    {'name': 'images/exp2b_trial_182_colour2_distractors9_l.png', 'path': 'images/exp2b_trial_182_colour2_distractors9_l.png'},
    {'name': 'images/exp2b_trial_129_colour1_distractors4_r.png', 'path': 'images/exp2b_trial_129_colour1_distractors4_r.png'},
    {'name': 'images/exp1a_trial_244_colour2_distractors1_l.png', 'path': 'images/exp1a_trial_244_colour2_distractors1_l.png'},
    {'name': 'images/exp2a_trial_47_colour1_distractors1_l.png', 'path': 'images/exp2a_trial_47_colour1_distractors1_l.png'},
    {'name': 'images/exp2b_trial_219_colour3_distractors9_l.png', 'path': 'images/exp2b_trial_219_colour3_distractors9_l.png'},
    {'name': 'images/exp2c_trial_0_colour1_distractors1_r.png', 'path': 'images/exp2c_trial_0_colour1_distractors1_r.png'},
    {'name': 'Practice arrays/exp1a_trial_0_colour1_distractors1_r.png', 'path': 'Practice arrays/exp1a_trial_0_colour1_distractors1_r.png'},
    {'name': 'images/exp2b_trial_283_colour3_distractors9_l.png', 'path': 'images/exp2b_trial_283_colour3_distractors9_l.png'},
    {'name': 'images/exp2c_trial_292_colour1_distractors31_r.png', 'path': 'images/exp2c_trial_292_colour1_distractors31_r.png'},
    {'name': 'images/exp2c_trial_149_colour2_distractors4_l.png', 'path': 'images/exp2c_trial_149_colour2_distractors4_l.png'},
    {'name': 'images/exp2a_trial_260_colour1_distractors31_r.png', 'path': 'images/exp2a_trial_260_colour1_distractors31_r.png'},
    {'name': 'images/exp1b_trial_207_colour1_distractors1_l.png', 'path': 'images/exp1b_trial_207_colour1_distractors1_l.png'},
    {'name': 'images/exp2a_trial_206_colour3_distractors31_r.png', 'path': 'images/exp2a_trial_206_colour3_distractors31_r.png'},
    {'name': 'images/exp2c_trial_209_colour1_distractors9_l.png', 'path': 'images/exp2c_trial_209_colour1_distractors9_l.png'},
    {'name': 'images/exp2c_trial_312_colour2_distractors31_l.png', 'path': 'images/exp2c_trial_312_colour2_distractors31_l.png'},
    {'name': 'images/exp2c_trial_170_colour3_distractors1_r.png', 'path': 'images/exp2c_trial_170_colour3_distractors1_r.png'},
    {'name': 'images/exp1b_trial_162_colour1_distractors9_r.png', 'path': 'images/exp1b_trial_162_colour1_distractors9_r.png'},
    {'name': 'images/exp2c_trial_37_colour2_distractors1_r.png', 'path': 'images/exp2c_trial_37_colour2_distractors1_r.png'},
    {'name': 'images/exp2c_trial_217_colour3_distractors1_l.png', 'path': 'images/exp2c_trial_217_colour3_distractors1_l.png'},
    {'name': 'images/exp2c_trial_287_colour0_distractors0_l.png', 'path': 'images/exp2c_trial_287_colour0_distractors0_l.png'},
    {'name': 'images/exp2c_trial_191_colour0_distractors0_l.png', 'path': 'images/exp2c_trial_191_colour0_distractors0_l.png'},
    {'name': 'images/exp1a_trial_191_colour0_distractors0_l.png', 'path': 'images/exp1a_trial_191_colour0_distractors0_l.png'},
    {'name': 'images/exp2c_trial_114_colour1_distractors19_l.png', 'path': 'images/exp2c_trial_114_colour1_distractors19_l.png'},
    {'name': 'images/exp2c_trial_223_colour0_distractors0_l.png', 'path': 'images/exp2c_trial_223_colour0_distractors0_l.png'},
    {'name': 'images/exp2a_trial_292_colour1_distractors31_r.png', 'path': 'images/exp2a_trial_292_colour1_distractors31_r.png'},
    {'name': 'images/exp2a_trial_203_colour3_distractors4_r.png', 'path': 'images/exp2a_trial_203_colour3_distractors4_r.png'},
    {'name': 'images/exp1a_trial_62_colour0_distractors0_r.png', 'path': 'images/exp1a_trial_62_colour0_distractors0_r.png'},
    {'name': 'images/exp1b_trial_32_colour1_distractors1_r.png', 'path': 'images/exp1b_trial_32_colour1_distractors1_r.png'},
    {'name': 'images/exp1a_trial_134_colour2_distractors4_r.png', 'path': 'images/exp1a_trial_134_colour2_distractors4_r.png'},
    {'name': 'images/exp2b_trial_103_colour2_distractors9_r.png', 'path': 'images/exp2b_trial_103_colour2_distractors9_r.png'},
    {'name': 'images/exp2a_trial_7_colour2_distractors9_r.png', 'path': 'images/exp2a_trial_7_colour2_distractors9_r.png'},
    {'name': 'images/exp2b_trial_192_colour1_distractors1_r.png', 'path': 'images/exp2b_trial_192_colour1_distractors1_r.png'},
    {'name': 'images/exp1b_trial_281_colour3_distractors1_l.png', 'path': 'images/exp1b_trial_281_colour3_distractors1_l.png'},
    {'name': 'images/exp2c_trial_130_colour1_distractors9_r.png', 'path': 'images/exp2c_trial_130_colour1_distractors9_r.png'},
    {'name': 'images/exp2b_trial_113_colour1_distractors9_l.png', 'path': 'images/exp2b_trial_113_colour1_distractors9_l.png'},
    {'name': 'images/exp1a_trial_249_colour3_distractors1_l.png', 'path': 'images/exp1a_trial_249_colour3_distractors1_l.png'},
    {'name': 'images/exp1b_trial_204_colour3_distractors9_r.png', 'path': 'images/exp1b_trial_204_colour3_distractors9_r.png'},
    {'name': 'images/exp2b_trial_243_colour1_distractors31_l.png', 'path': 'images/exp2b_trial_243_colour1_distractors31_l.png'},
    {'name': 'images/exp1a_trial_203_colour3_distractors4_r.png', 'path': 'images/exp1a_trial_203_colour3_distractors4_r.png'},
    {'name': 'images/exp1b_trial_34_colour1_distractors9_r.png', 'path': 'images/exp1b_trial_34_colour1_distractors9_r.png'},
    {'name': 'images/exp2c_trial_125_colour3_distractors31_l.png', 'path': 'images/exp2c_trial_125_colour3_distractors31_l.png'},
    {'name': 'images/exp2b_trial_187_colour3_distractors9_l.png', 'path': 'images/exp2b_trial_187_colour3_distractors9_l.png'},
    {'name': 'images/exp1b_trial_275_colour1_distractors31_l.png', 'path': 'images/exp1b_trial_275_colour1_distractors31_l.png'},
    {'name': 'images/exp2c_trial_131_colour1_distractors19_r.png', 'path': 'images/exp2c_trial_131_colour1_distractors19_r.png'},
    {'name': 'images/exp1b_trial_213_colour2_distractors4_l.png', 'path': 'images/exp1b_trial_213_colour2_distractors4_l.png'},
    {'name': 'images/exp1b_trial_137_colour2_distractors31_r.png', 'path': 'images/exp1b_trial_137_colour2_distractors31_r.png'},
    {'name': 'images/exp1b_trial_26_colour3_distractors4_l.png', 'path': 'images/exp1b_trial_26_colour3_distractors4_l.png'},
    {'name': 'images/exp2b_trial_94_colour0_distractors0_r.png', 'path': 'images/exp2b_trial_94_colour0_distractors0_r.png'},
    {'name': 'images/exp2a_trial_146_colour1_distractors19_l.png', 'path': 'images/exp2a_trial_146_colour1_distractors19_l.png'},
    {'name': 'images/exp2a_trial_45_colour3_distractors19_r.png', 'path': 'images/exp2a_trial_45_colour3_distractors19_r.png'},
    {'name': 'images/exp1b_trial_151_colour2_distractors19_l.png', 'path': 'images/exp1b_trial_151_colour2_distractors19_l.png'},
    {'name': 'images/exp2b_trial_54_colour2_distractors9_l.png', 'path': 'images/exp2b_trial_54_colour2_distractors9_l.png'},
    {'name': 'images/exp2c_trial_245_colour2_distractors4_l.png', 'path': 'images/exp2c_trial_245_colour2_distractors4_l.png'},
    {'name': 'images/exp2a_trial_259_colour1_distractors19_r.png', 'path': 'images/exp2a_trial_259_colour1_distractors19_r.png'},
    {'name': 'images/exp1b_trial_165_colour2_distractors1_r.png', 'path': 'images/exp1b_trial_165_colour2_distractors1_r.png'},
    {'name': 'images/exp1a_trial_186_colour3_distractors4_l.png', 'path': 'images/exp1a_trial_186_colour3_distractors4_l.png'},
    {'name': 'images/exp2a_trial_127_colour0_distractors0_l.png', 'path': 'images/exp2a_trial_127_colour0_distractors0_l.png'},
    {'name': 'images/exp2a_trial_121_colour3_distractors1_l.png', 'path': 'images/exp2a_trial_121_colour3_distractors1_l.png'},
    {'name': 'images/exp1a_trial_158_colour0_distractors0_r.png', 'path': 'images/exp1a_trial_158_colour0_distractors0_r.png'},
    {'name': 'images/exp1a_trial_214_colour2_distractors9_l.png', 'path': 'images/exp1a_trial_214_colour2_distractors9_l.png'},
    {'name': 'images/exp2b_trial_140_colour3_distractors9_r.png', 'path': 'images/exp2b_trial_140_colour3_distractors9_r.png'},
    {'name': 'images/exp1a_trial_236_colour3_distractors9_r.png', 'path': 'images/exp1a_trial_236_colour3_distractors9_r.png'},
    {'name': 'images/exp2c_trial_28_colour3_distractors19_l.png', 'path': 'images/exp2c_trial_28_colour3_distractors19_l.png'},
    {'name': 'images/exp1b_trial_108_colour3_distractors9_r.png', 'path': 'images/exp1b_trial_108_colour3_distractors9_r.png'},
    {'name': 'images/exp2b_trial_62_colour0_distractors0_r.png', 'path': 'images/exp2b_trial_62_colour0_distractors0_r.png'},
    {'name': 'images/exp2b_trial_170_colour3_distractors1_r.png', 'path': 'images/exp2b_trial_170_colour3_distractors1_r.png'},
    {'name': 'images/exp2b_trial_16_colour1_distractors4_l.png', 'path': 'images/exp2b_trial_16_colour1_distractors4_l.png'},
    {'name': 'images/exp2c_trial_215_colour2_distractors19_l.png', 'path': 'images/exp2c_trial_215_colour2_distractors19_l.png'},
    {'name': 'images/exp1b_trial_272_colour1_distractors4_l.png', 'path': 'images/exp1b_trial_272_colour1_distractors4_l.png'},
    {'name': 'images/exp2b_trial_206_colour3_distractors31_r.png', 'path': 'images/exp2b_trial_206_colour3_distractors31_r.png'},
    {'name': 'images/exp1b_trial_182_colour2_distractors9_l.png', 'path': 'images/exp1b_trial_182_colour2_distractors9_l.png'},
    {'name': 'images/exp2a_trial_16_colour1_distractors4_l.png', 'path': 'images/exp2a_trial_16_colour1_distractors4_l.png'},
    {'name': 'images/exp2c_trial_278_colour2_distractors9_l.png', 'path': 'images/exp2c_trial_278_colour2_distractors9_l.png'},
    {'name': 'images/exp2a_trial_158_colour0_distractors0_r.png', 'path': 'images/exp2a_trial_158_colour0_distractors0_r.png'},
    {'name': 'images/exp1a_trial_184_colour2_distractors31_l.png', 'path': 'images/exp1a_trial_184_colour2_distractors31_l.png'},
    {'name': 'images/exp2b_trial_98_colour1_distractors9_r.png', 'path': 'images/exp2b_trial_98_colour1_distractors9_r.png'},
    {'name': 'images/exp1a_trial_52_colour2_distractors1_l.png', 'path': 'images/exp1a_trial_52_colour2_distractors1_l.png'},
    {'name': 'images/exp1a_trial_243_colour1_distractors31_l.png', 'path': 'images/exp1a_trial_243_colour1_distractors31_l.png'},
    {'name': 'images/exp2a_trial_301_colour3_distractors19_r.png', 'path': 'images/exp2a_trial_301_colour3_distractors19_r.png'},
    {'name': 'images/exp1a_trial_189_colour3_distractors31_l.png', 'path': 'images/exp1a_trial_189_colour3_distractors31_l.png'},
    {'name': 'images/exp2b_trial_124_colour3_distractors19_l.png', 'path': 'images/exp2b_trial_124_colour3_distractors19_l.png'},
    {'name': 'images/exp2a_trial_238_colour3_distractors31_r.png', 'path': 'images/exp2a_trial_238_colour3_distractors31_r.png'},
    {'name': 'images/exp2c_trial_79_colour1_distractors1_l.png', 'path': 'images/exp2c_trial_79_colour1_distractors1_l.png'},
    {'name': 'images/exp2b_trial_7_colour2_distractors9_r.png', 'path': 'images/exp2b_trial_7_colour2_distractors9_r.png'},
    {'name': 'images/exp1a_trial_109_colour3_distractors19_r.png', 'path': 'images/exp1a_trial_109_colour3_distractors19_r.png'},
    {'name': 'images/exp1b_trial_23_colour2_distractors19_l.png', 'path': 'images/exp1b_trial_23_colour2_distractors19_l.png'},
    {'name': 'images/exp2c_trial_222_colour0_distractors0_r.png', 'path': 'images/exp2c_trial_222_colour0_distractors0_r.png'},
    {'name': 'images/exp1a_trial_121_colour3_distractors1_l.png', 'path': 'images/exp1a_trial_121_colour3_distractors1_l.png'},
    {'name': 'images/exp2a_trial_240_colour1_distractors4_l.png', 'path': 'images/exp2a_trial_240_colour1_distractors4_l.png'},
    {'name': 'images/exp2b_trial_1_colour1_distractors4_r.png', 'path': 'images/exp2b_trial_1_colour1_distractors4_r.png'},
    {'name': 'images/exp1b_trial_134_colour2_distractors4_r.png', 'path': 'images/exp1b_trial_134_colour2_distractors4_r.png'},
    {'name': 'images/exp2b_trial_126_colour0_distractors0_r.png', 'path': 'images/exp2b_trial_126_colour0_distractors0_r.png'},
    {'name': 'images/exp1b_trial_246_colour2_distractors9_l.png', 'path': 'images/exp1b_trial_246_colour2_distractors9_l.png'},
    {'name': 'images/exp1b_trial_255_colour0_distractors0_l.png', 'path': 'images/exp1b_trial_255_colour0_distractors0_l.png'},
    {'name': 'images/exp1b_trial_126_colour0_distractors0_r.png', 'path': 'images/exp1b_trial_126_colour0_distractors0_r.png'},
    {'name': 'images/exp1b_trial_235_colour3_distractors4_r.png', 'path': 'images/exp1b_trial_235_colour3_distractors4_r.png'},
    {'name': 'images/exp2a_trial_53_colour2_distractors4_l.png', 'path': 'images/exp2a_trial_53_colour2_distractors4_l.png'},
    {'name': 'images/exp2c_trial_19_colour1_distractors31_l.png', 'path': 'images/exp2c_trial_19_colour1_distractors31_l.png'},
    {'name': 'images/exp1a_trial_276_colour2_distractors1_l.png', 'path': 'images/exp1a_trial_276_colour2_distractors1_l.png'},
    {'name': 'images/exp2c_trial_2_colour1_distractors9_r.png', 'path': 'images/exp2c_trial_2_colour1_distractors9_r.png'},
    {'name': 'images/exp2a_trial_284_colour3_distractors19_l.png', 'path': 'images/exp2a_trial_284_colour3_distractors19_l.png'},
    {'name': 'images/exp2c_trial_157_colour3_distractors31_l.png', 'path': 'images/exp2c_trial_157_colour3_distractors31_l.png'},
    {'name': 'images/exp1b_trial_227_colour1_distractors19_r.png', 'path': 'images/exp1b_trial_227_colour1_distractors19_r.png'},
    {'name': 'images/exp1a_trial_208_colour1_distractors4_l.png', 'path': 'images/exp1a_trial_208_colour1_distractors4_l.png'},
    {'name': 'images/exp2b_trial_226_colour1_distractors9_r.png', 'path': 'images/exp2b_trial_226_colour1_distractors9_r.png'},
    {'name': 'Practice arrays/exp1a_trial_10_colour3_distractors1_r.png', 'path': 'Practice arrays/exp1a_trial_10_colour3_distractors1_r.png'},
    {'name': 'images/exp1a_trial_95_colour0_distractors0_l.png', 'path': 'images/exp1a_trial_95_colour0_distractors0_l.png'},
    {'name': 'images/exp1a_trial_123_colour3_distractors9_l.png', 'path': 'images/exp1a_trial_123_colour3_distractors9_l.png'},
    {'name': 'images/exp2a_trial_253_colour3_distractors31_l.png', 'path': 'images/exp2a_trial_253_colour3_distractors31_l.png'},
    {'name': 'images/exp2a_trial_12_colour3_distractors9_r.png', 'path': 'images/exp2a_trial_12_colour3_distractors9_r.png'},
    {'name': 'images/exp2a_trial_310_colour2_distractors9_l.png', 'path': 'images/exp2a_trial_310_colour2_distractors9_l.png'},
    {'name': 'images/exp2c_trial_110_colour3_distractors31_r.png', 'path': 'images/exp2c_trial_110_colour3_distractors31_r.png'},
    {'name': 'images/exp2a_trial_250_colour3_distractors4_l.png', 'path': 'images/exp2a_trial_250_colour3_distractors4_l.png'},
    {'name': 'images/exp2b_trial_91_colour3_distractors9_l.png', 'path': 'images/exp2b_trial_91_colour3_distractors9_l.png'},
    {'name': 'images/exp1a_trial_4_colour1_distractors31_r.png', 'path': 'images/exp1a_trial_4_colour1_distractors31_r.png'},
    {'name': 'images/exp2c_trial_307_colour1_distractors31_l.png', 'path': 'images/exp2c_trial_307_colour1_distractors31_l.png'},
    {'name': 'images/exp2c_trial_205_colour3_distractors19_r.png', 'path': 'images/exp2c_trial_205_colour3_distractors19_r.png'},
    {'name': 'images/exp2c_trial_54_colour2_distractors9_l.png', 'path': 'images/exp2c_trial_54_colour2_distractors9_l.png'},
    {'name': 'images/exp2a_trial_36_colour1_distractors31_r.png', 'path': 'images/exp2a_trial_36_colour1_distractors31_r.png'},
    {'name': 'images/exp2a_trial_99_colour1_distractors19_r.png', 'path': 'images/exp2a_trial_99_colour1_distractors19_r.png'},
    {'name': 'images/exp1b_trial_15_colour1_distractors1_l.png', 'path': 'images/exp1b_trial_15_colour1_distractors1_l.png'},
    {'name': 'images/exp1a_trial_232_colour2_distractors19_r.png', 'path': 'images/exp1a_trial_232_colour2_distractors19_r.png'},
    {'name': 'images/exp1b_trial_230_colour2_distractors4_r.png', 'path': 'images/exp1b_trial_230_colour2_distractors4_r.png'},
    {'name': 'images/exp2c_trial_15_colour1_distractors1_l.png', 'path': 'images/exp2c_trial_15_colour1_distractors1_l.png'},
    {'name': 'images/exp1a_trial_297_colour2_distractors31_r.png', 'path': 'images/exp1a_trial_297_colour2_distractors31_r.png'},
    {'name': 'images/exp2a_trial_26_colour3_distractors4_l.png', 'path': 'images/exp2a_trial_26_colour3_distractors4_l.png'},
    {'name': 'images/exp1a_trial_288_colour1_distractors1_r.png', 'path': 'images/exp1a_trial_288_colour1_distractors1_r.png'},
    {'name': 'images/exp1a_trial_282_colour3_distractors4_l.png', 'path': 'images/exp1a_trial_282_colour3_distractors4_l.png'},
    {'name': 'images/exp2a_trial_233_colour2_distractors31_r.png', 'path': 'images/exp2a_trial_233_colour2_distractors31_r.png'},
    {'name': 'images/exp2b_trial_313_colour3_distractors1_l.png', 'path': 'images/exp2b_trial_313_colour3_distractors1_l.png'},
    {'name': 'images/exp2a_trial_228_colour1_distractors31_r.png', 'path': 'images/exp2a_trial_228_colour1_distractors31_r.png'},
    {'name': 'images/exp2a_trial_313_colour3_distractors1_l.png', 'path': 'images/exp2a_trial_313_colour3_distractors1_l.png'},
    {'name': 'images/exp2a_trial_237_colour3_distractors19_r.png', 'path': 'images/exp2a_trial_237_colour3_distractors19_r.png'},
    {'name': 'images/exp2b_trial_88_colour2_distractors31_l.png', 'path': 'images/exp2b_trial_88_colour2_distractors31_l.png'},
    {'name': 'images/exp1a_trial_264_colour2_distractors19_r.png', 'path': 'images/exp1a_trial_264_colour2_distractors19_r.png'},
    {'name': 'images/exp1a_trial_291_colour1_distractors19_r.png', 'path': 'images/exp1a_trial_291_colour1_distractors19_r.png'},
    {'name': 'images/exp1b_trial_311_colour2_distractors19_l.png', 'path': 'images/exp1b_trial_311_colour2_distractors19_l.png'},
    {'name': 'images/exp1b_trial_308_colour2_distractors1_l.png', 'path': 'images/exp1b_trial_308_colour2_distractors1_l.png'},
    {'name': 'images/exp2c_trial_152_colour2_distractors31_l.png', 'path': 'images/exp2c_trial_152_colour2_distractors31_l.png'},
    {'name': 'images/exp2b_trial_152_colour2_distractors31_l.png', 'path': 'images/exp2b_trial_152_colour2_distractors31_l.png'},
    {'name': 'images/exp2c_trial_112_colour1_distractors4_l.png', 'path': 'images/exp2c_trial_112_colour1_distractors4_l.png'},
    {'name': 'images/exp1a_trial_193_colour1_distractors4_r.png', 'path': 'images/exp1a_trial_193_colour1_distractors4_r.png'},
    {'name': 'images/exp1a_trial_112_colour1_distractors4_l.png', 'path': 'images/exp1a_trial_112_colour1_distractors4_l.png'},
    {'name': 'images/exp2a_trial_210_colour1_distractors19_l.png', 'path': 'images/exp2a_trial_210_colour1_distractors19_l.png'},
    {'name': 'images/exp1a_trial_18_colour1_distractors19_l.png', 'path': 'images/exp1a_trial_18_colour1_distractors19_l.png'},
    {'name': 'Practice arrays/exp1a_trial_17_colour1_distractors9_l.png', 'path': 'Practice arrays/exp1a_trial_17_colour1_distractors9_l.png'},
    {'name': 'images/exp2a_trial_15_colour1_distractors1_l.png', 'path': 'images/exp2a_trial_15_colour1_distractors1_l.png'},
    {'name': 'images/exp1b_trial_216_colour2_distractors31_l.png', 'path': 'images/exp1b_trial_216_colour2_distractors31_l.png'},
    {'name': 'images/exp2c_trial_168_colour2_distractors19_r.png', 'path': 'images/exp2c_trial_168_colour2_distractors19_r.png'},
    {'name': 'images/exp2b_trial_246_colour2_distractors9_l.png', 'path': 'images/exp2b_trial_246_colour2_distractors9_l.png'},
    {'name': 'images/exp1a_trial_146_colour1_distractors19_l.png', 'path': 'images/exp1a_trial_146_colour1_distractors19_l.png'},
    {'name': 'images/exp1b_trial_160_colour1_distractors1_r.png', 'path': 'images/exp1b_trial_160_colour1_distractors1_r.png'},
    {'name': 'images/exp2a_trial_80_colour1_distractors4_l.png', 'path': 'images/exp2a_trial_80_colour1_distractors4_l.png'},
    {'name': 'images/exp2c_trial_303_colour1_distractors1_l.png', 'path': 'images/exp2c_trial_303_colour1_distractors1_l.png'},
    {'name': 'images/exp1a_trial_218_colour3_distractors4_l.png', 'path': 'images/exp1a_trial_218_colour3_distractors4_l.png'},
    {'name': 'images/exp2a_trial_192_colour1_distractors1_r.png', 'path': 'images/exp2a_trial_192_colour1_distractors1_r.png'},
    {'name': 'images/exp1a_trial_224_colour1_distractors1_r.png', 'path': 'images/exp1a_trial_224_colour1_distractors1_r.png'},
    {'name': 'images/exp2a_trial_220_colour3_distractors19_l.png', 'path': 'images/exp2a_trial_220_colour3_distractors19_l.png'},
    {'name': 'images/exp2b_trial_158_colour0_distractors0_r.png', 'path': 'images/exp2b_trial_158_colour0_distractors0_r.png'},
    {'name': 'images/exp2b_trial_306_colour1_distractors19_l.png', 'path': 'images/exp2b_trial_306_colour1_distractors19_l.png'},
    {'name': 'images/exp2b_trial_57_colour3_distractors1_l.png', 'path': 'images/exp2b_trial_57_colour3_distractors1_l.png'},
    {'name': 'images/exp2a_trial_24_colour2_distractors31_l.png', 'path': 'images/exp2a_trial_24_colour2_distractors31_l.png'},
    {'name': 'Images_List.xlsx', 'path': 'Images_List.xlsx'},
    {'name': 'images/exp2b_trial_65_colour1_distractors4_r.png', 'path': 'images/exp2b_trial_65_colour1_distractors4_r.png'},
    {'name': 'images/exp2a_trial_61_colour3_distractors31_l.png', 'path': 'images/exp2a_trial_61_colour3_distractors31_l.png'},
    {'name': 'images/exp1a_trial_113_colour1_distractors9_l.png', 'path': 'images/exp1a_trial_113_colour1_distractors9_l.png'},
    {'name': 'images/exp2c_trial_251_colour3_distractors9_l.png', 'path': 'images/exp2c_trial_251_colour3_distractors9_l.png'},
    {'name': 'images/exp2b_trial_29_colour3_distractors31_l.png', 'path': 'images/exp2b_trial_29_colour3_distractors31_l.png'},
    {'name': 'images/exp2c_trial_33_colour1_distractors4_r.png', 'path': 'images/exp2c_trial_33_colour1_distractors4_r.png'},
    {'name': 'images/exp2b_trial_172_colour3_distractors9_r.png', 'path': 'images/exp2b_trial_172_colour3_distractors9_r.png'},
    {'name': 'images/exp2b_trial_295_colour2_distractors9_r.png', 'path': 'images/exp2b_trial_295_colour2_distractors9_r.png'},
    {'name': 'images/exp1a_trial_161_colour1_distractors4_r.png', 'path': 'images/exp1a_trial_161_colour1_distractors4_r.png'},
    {'name': 'images/exp1a_trial_185_colour3_distractors1_l.png', 'path': 'images/exp1a_trial_185_colour3_distractors1_l.png'},
    {'name': 'images/exp1a_trial_28_colour3_distractors19_l.png', 'path': 'images/exp1a_trial_28_colour3_distractors19_l.png'},
    {'name': 'images/exp2a_trial_317_colour3_distractors31_l.png', 'path': 'images/exp2a_trial_317_colour3_distractors31_l.png'},
    {'name': 'images/exp1a_trial_97_colour1_distractors4_r.png', 'path': 'images/exp1a_trial_97_colour1_distractors4_r.png'},
    {'name': 'images/exp2c_trial_144_colour1_distractors4_l.png', 'path': 'images/exp2c_trial_144_colour1_distractors4_l.png'},
    {'name': 'images/exp2c_trial_11_colour3_distractors4_r.png', 'path': 'images/exp2c_trial_11_colour3_distractors4_r.png'},
    {'name': 'images/exp2a_trial_145_colour1_distractors9_l.png', 'path': 'images/exp2a_trial_145_colour1_distractors9_l.png'},
    {'name': 'images/exp2b_trial_303_colour1_distractors1_l.png', 'path': 'images/exp2b_trial_303_colour1_distractors1_l.png'},
    {'name': 'images/exp2c_trial_121_colour3_distractors1_l.png', 'path': 'images/exp2c_trial_121_colour3_distractors1_l.png'},
    {'name': 'images/exp2b_trial_42_colour3_distractors1_r.png', 'path': 'images/exp2b_trial_42_colour3_distractors1_r.png'},
    {'name': 'images/exp2b_trial_136_colour2_distractors19_r.png', 'path': 'images/exp2b_trial_136_colour2_distractors19_r.png'},
    {'name': 'images/exp2b_trial_137_colour2_distractors31_r.png', 'path': 'images/exp2b_trial_137_colour2_distractors31_r.png'},
    {'name': 'images/exp1a_trial_117_colour2_distractors4_l.png', 'path': 'images/exp1a_trial_117_colour2_distractors4_l.png'},
    {'name': 'images/exp1a_trial_68_colour1_distractors31_r.png', 'path': 'images/exp1a_trial_68_colour1_distractors31_r.png'},
    {'name': 'images/exp2b_trial_298_colour3_distractors1_r.png', 'path': 'images/exp2b_trial_298_colour3_distractors1_r.png'},
    {'name': 'images/exp2b_trial_262_colour2_distractors4_r.png', 'path': 'images/exp2b_trial_262_colour2_distractors4_r.png'},
    {'name': 'images/exp2c_trial_286_colour0_distractors0_r.png', 'path': 'images/exp2c_trial_286_colour0_distractors0_r.png'},
    {'name': 'images/exp2c_trial_61_colour3_distractors31_l.png', 'path': 'images/exp2c_trial_61_colour3_distractors31_l.png'},
    {'name': 'images/exp1a_trial_277_colour2_distractors4_l.png', 'path': 'images/exp1a_trial_277_colour2_distractors4_l.png'},
    {'name': 'images/exp1a_trial_45_colour3_distractors19_r.png', 'path': 'images/exp1a_trial_45_colour3_distractors19_r.png'},
    {'name': 'images/exp1a_trial_44_colour3_distractors9_r.png', 'path': 'images/exp1a_trial_44_colour3_distractors9_r.png'},
    {'name': 'images/exp2b_trial_147_colour1_distractors31_l.png', 'path': 'images/exp2b_trial_147_colour1_distractors31_l.png'},
    {'name': 'images/exp1a_trial_302_colour3_distractors31_r.png', 'path': 'images/exp1a_trial_302_colour3_distractors31_r.png'},
    {'name': 'images/exp2a_trial_81_colour1_distractors9_l.png', 'path': 'images/exp2a_trial_81_colour1_distractors9_l.png'},
    {'name': 'images/exp1b_trial_147_colour1_distractors31_l.png', 'path': 'images/exp1b_trial_147_colour1_distractors31_l.png'},
    {'name': 'images/exp1a_trial_129_colour1_distractors4_r.png', 'path': 'images/exp1a_trial_129_colour1_distractors4_r.png'},
    {'name': 'images/exp2b_trial_302_colour3_distractors31_r.png', 'path': 'images/exp2b_trial_302_colour3_distractors31_r.png'},
    {'name': 'images/exp2a_trial_281_colour3_distractors1_l.png', 'path': 'images/exp2a_trial_281_colour3_distractors1_l.png'},
    {'name': 'images/exp2a_trial_124_colour3_distractors19_l.png', 'path': 'images/exp2a_trial_124_colour3_distractors19_l.png'},
    {'name': 'images/exp2c_trial_195_colour1_distractors19_r.png', 'path': 'images/exp2c_trial_195_colour1_distractors19_r.png'},
    {'name': 'images/exp2b_trial_15_colour1_distractors1_l.png', 'path': 'images/exp2b_trial_15_colour1_distractors1_l.png'},
    {'name': 'images/exp1b_trial_88_colour2_distractors31_l.png', 'path': 'images/exp1b_trial_88_colour2_distractors31_l.png'},
    {'name': 'images/exp1a_trial_69_colour2_distractors1_r.png', 'path': 'images/exp1a_trial_69_colour2_distractors1_r.png'},
    {'name': 'images/exp2a_trial_191_colour0_distractors0_l.png', 'path': 'images/exp2a_trial_191_colour0_distractors0_l.png'},
    {'name': 'images/exp1b_trial_264_colour2_distractors19_r.png', 'path': 'images/exp1b_trial_264_colour2_distractors19_r.png'},
    {'name': 'images/exp2c_trial_186_colour3_distractors4_l.png', 'path': 'images/exp2c_trial_186_colour3_distractors4_l.png'},
    {'name': 'images/exp1b_trial_44_colour3_distractors9_r.png', 'path': 'images/exp1b_trial_44_colour3_distractors9_r.png'},
    {'name': 'images/exp2c_trial_84_colour2_distractors1_l.png', 'path': 'images/exp2c_trial_84_colour2_distractors1_l.png'},
    {'name': 'images/exp1b_trial_56_colour2_distractors31_l.png', 'path': 'images/exp1b_trial_56_colour2_distractors31_l.png'},
    {'name': 'images/exp1b_trial_124_colour3_distractors19_l.png', 'path': 'images/exp1b_trial_124_colour3_distractors19_l.png'},
    {'name': 'images/exp2b_trial_185_colour3_distractors1_l.png', 'path': 'images/exp2b_trial_185_colour3_distractors1_l.png'},
    {'name': 'images/exp1b_trial_114_colour1_distractors19_l.png', 'path': 'images/exp1b_trial_114_colour1_distractors19_l.png'},
    {'name': 'images/exp2b_trial_203_colour3_distractors4_r.png', 'path': 'images/exp2b_trial_203_colour3_distractors4_r.png'},
    {'name': 'images/exp1b_trial_31_colour0_distractors0_l.png', 'path': 'images/exp1b_trial_31_colour0_distractors0_l.png'},
    {'name': 'images/exp1b_trial_4_colour1_distractors31_r.png', 'path': 'images/exp1b_trial_4_colour1_distractors31_r.png'},
    {'name': 'images/exp1a_trial_187_colour3_distractors9_l.png', 'path': 'images/exp1a_trial_187_colour3_distractors9_l.png'},
    {'name': 'images/exp1b_trial_29_colour3_distractors31_l.png', 'path': 'images/exp1b_trial_29_colour3_distractors31_l.png'},
    {'name': 'images/exp1b_trial_100_colour1_distractors31_r.png', 'path': 'images/exp1b_trial_100_colour1_distractors31_r.png'},
    {'name': 'images/exp1a_trial_231_colour2_distractors9_r.png', 'path': 'images/exp1a_trial_231_colour2_distractors9_r.png'},
    {'name': 'images/exp2c_trial_163_colour1_distractors19_r.png', 'path': 'images/exp2c_trial_163_colour1_distractors19_r.png'},
    {'name': 'images/exp2c_trial_197_colour2_distractors1_r.png', 'path': 'images/exp2c_trial_197_colour2_distractors1_r.png'},
    {'name': 'images/exp2c_trial_234_colour3_distractors1_r.png', 'path': 'images/exp2c_trial_234_colour3_distractors1_r.png'},
    {'name': 'images/exp1a_trial_175_colour1_distractors1_l.png', 'path': 'images/exp1a_trial_175_colour1_distractors1_l.png'},
    {'name': 'images/exp1a_trial_17_colour1_distractors9_l.png', 'path': 'images/exp1a_trial_17_colour1_distractors9_l.png'},
    {'name': 'images/exp2c_trial_297_colour2_distractors31_r.png', 'path': 'images/exp2c_trial_297_colour2_distractors31_r.png'},
    {'name': 'images/exp2a_trial_304_colour1_distractors4_l.png', 'path': 'images/exp2a_trial_304_colour1_distractors4_l.png'},
    {'name': 'images/exp2c_trial_27_colour3_distractors9_l.png', 'path': 'images/exp2c_trial_27_colour3_distractors9_l.png'},
    {'name': 'images/exp2b_trial_123_colour3_distractors9_l.png', 'path': 'images/exp2b_trial_123_colour3_distractors9_l.png'},
    {'name': 'images/exp1a_trial_287_colour0_distractors0_l.png', 'path': 'images/exp1a_trial_287_colour0_distractors0_l.png'},
    {'name': 'images/exp2b_trial_50_colour1_distractors19_l.png', 'path': 'images/exp2b_trial_50_colour1_distractors19_l.png'},
    {'name': 'images/exp2b_trial_76_colour3_distractors9_r.png', 'path': 'images/exp2b_trial_76_colour3_distractors9_r.png'},
    {'name': 'images/exp2a_trial_225_colour1_distractors4_r.png', 'path': 'images/exp2a_trial_225_colour1_distractors4_r.png'},
    {'name': 'images/exp1b_trial_123_colour3_distractors9_l.png', 'path': 'images/exp1b_trial_123_colour3_distractors9_l.png'},
    {'name': 'images/exp2a_trial_291_colour1_distractors19_r.png', 'path': 'images/exp2a_trial_291_colour1_distractors19_r.png'},
    {'name': 'images/exp2b_trial_111_colour1_distractors1_l.png', 'path': 'images/exp2b_trial_111_colour1_distractors1_l.png'},
    {'name': 'images/exp2a_trial_193_colour1_distractors4_r.png', 'path': 'images/exp2a_trial_193_colour1_distractors4_r.png'},
    {'name': 'images/exp2a_trial_282_colour3_distractors4_l.png', 'path': 'images/exp2a_trial_282_colour3_distractors4_l.png'},
    {'name': 'images/exp2b_trial_175_colour1_distractors1_l.png', 'path': 'images/exp2b_trial_175_colour1_distractors1_l.png'},
    {'name': 'images/exp1a_trial_251_colour3_distractors9_l.png', 'path': 'images/exp1a_trial_251_colour3_distractors9_l.png'},
    {'name': 'images/exp1a_trial_40_colour2_distractors19_r.png', 'path': 'images/exp1a_trial_40_colour2_distractors19_r.png'},
    {'name': 'images/exp2b_trial_156_colour3_distractors19_l.png', 'path': 'images/exp2b_trial_156_colour3_distractors19_l.png'},
    {'name': 'images/exp1a_trial_1_colour1_distractors4_r.png', 'path': 'images/exp1a_trial_1_colour1_distractors4_r.png'},
    {'name': 'images/exp2a_trial_280_colour2_distractors31_l.png', 'path': 'images/exp2a_trial_280_colour2_distractors31_l.png'},
    {'name': 'images/exp2b_trial_241_colour1_distractors9_l.png', 'path': 'images/exp2b_trial_241_colour1_distractors9_l.png'},
    {'name': 'images/exp1a_trial_76_colour3_distractors9_r.png', 'path': 'images/exp1a_trial_76_colour3_distractors9_r.png'},
    {'name': 'images/exp1a_trial_72_colour2_distractors19_r.png', 'path': 'images/exp1a_trial_72_colour2_distractors19_r.png'},
    {'name': 'images/exp2c_trial_204_colour3_distractors9_r.png', 'path': 'images/exp2c_trial_204_colour3_distractors9_r.png'},
    {'name': 'images/exp2b_trial_149_colour2_distractors4_l.png', 'path': 'images/exp2b_trial_149_colour2_distractors4_l.png'},
    {'name': 'images/exp1b_trial_250_colour3_distractors4_l.png', 'path': 'images/exp1b_trial_250_colour3_distractors4_l.png'},
    {'name': 'images/exp2c_trial_6_colour2_distractors4_r.png', 'path': 'images/exp2c_trial_6_colour2_distractors4_r.png'},
    {'name': 'images/exp1a_trial_234_colour3_distractors1_r.png', 'path': 'images/exp1a_trial_234_colour3_distractors1_r.png'},
    {'name': 'images/exp2a_trial_18_colour1_distractors19_l.png', 'path': 'images/exp2a_trial_18_colour1_distractors19_l.png'},
    {'name': 'images/exp2a_trial_248_colour2_distractors31_l.png', 'path': 'images/exp2a_trial_248_colour2_distractors31_l.png'},
    {'name': 'images/exp1b_trial_52_colour2_distractors1_l.png', 'path': 'images/exp1b_trial_52_colour2_distractors1_l.png'},
    {'name': 'images/exp2c_trial_86_colour2_distractors9_l.png', 'path': 'images/exp2c_trial_86_colour2_distractors9_l.png'},
    {'name': 'images/exp2a_trial_194_colour1_distractors9_r.png', 'path': 'images/exp2a_trial_194_colour1_distractors9_r.png'},
    {'name': 'images/exp2b_trial_21_colour2_distractors4_l.png', 'path': 'images/exp2b_trial_21_colour2_distractors4_l.png'},
    {'name': 'images/exp1b_trial_307_colour1_distractors31_l.png', 'path': 'images/exp1b_trial_307_colour1_distractors31_l.png'},
    {'name': 'images/exp1a_trial_43_colour3_distractors4_r.png', 'path': 'images/exp1a_trial_43_colour3_distractors4_r.png'},
    {'name': 'images/exp2b_trial_310_colour2_distractors9_l.png', 'path': 'images/exp2b_trial_310_colour2_distractors9_l.png'},
    {'name': 'images/exp1b_trial_155_colour3_distractors9_l.png', 'path': 'images/exp1b_trial_155_colour3_distractors9_l.png'},
    {'name': 'images/exp1b_trial_78_colour3_distractors31_r.png', 'path': 'images/exp1b_trial_78_colour3_distractors31_r.png'},
    {'name': 'images/exp2b_trial_39_colour2_distractors9_r.png', 'path': 'images/exp2b_trial_39_colour2_distractors9_r.png'},
    {'name': 'images/exp2b_trial_99_colour1_distractors19_r.png', 'path': 'images/exp2b_trial_99_colour1_distractors19_r.png'},
    {'name': 'images/exp2a_trial_214_colour2_distractors9_l.png', 'path': 'images/exp2a_trial_214_colour2_distractors9_l.png'},
    {'name': 'Practice arrays/exp1a_trial_21_colour2_distractors4_l.png', 'path': 'Practice arrays/exp1a_trial_21_colour2_distractors4_l.png'},
    {'name': 'images/exp2a_trial_223_colour0_distractors0_l.png', 'path': 'images/exp2a_trial_223_colour0_distractors0_l.png'},
    {'name': 'images/exp1b_trial_8_colour2_distractors19_r.png', 'path': 'images/exp1b_trial_8_colour2_distractors19_r.png'},
    {'name': 'images/exp1a_trial_316_colour3_distractors19_l.png', 'path': 'images/exp1a_trial_316_colour3_distractors19_l.png'},
    {'name': 'images/exp2a_trial_143_colour1_distractors1_l.png', 'path': 'images/exp2a_trial_143_colour1_distractors1_l.png'},
    {'name': 'images/exp2b_trial_61_colour3_distractors31_l.png', 'path': 'images/exp2b_trial_61_colour3_distractors31_l.png'},
    {'name': 'images/exp2b_trial_64_colour1_distractors1_r.png', 'path': 'images/exp2b_trial_64_colour1_distractors1_r.png'},
    {'name': 'images/exp1b_trial_104_colour2_distractors19_r.png', 'path': 'images/exp1b_trial_104_colour2_distractors19_r.png'},
    {'name': 'images/exp2a_trial_251_colour3_distractors9_l.png', 'path': 'images/exp2a_trial_251_colour3_distractors9_l.png'},
    {'name': 'images/exp2b_trial_68_colour1_distractors31_r.png', 'path': 'images/exp2b_trial_68_colour1_distractors31_r.png'},
    {'name': 'images/exp1a_trial_149_colour2_distractors4_l.png', 'path': 'images/exp1a_trial_149_colour2_distractors4_l.png'},
    {'name': 'images/exp1a_trial_66_colour1_distractors9_r.png', 'path': 'images/exp1a_trial_66_colour1_distractors9_r.png'},
    {'name': 'images/exp1b_trial_184_colour2_distractors31_l.png', 'path': 'images/exp1b_trial_184_colour2_distractors31_l.png'},
    {'name': 'images/exp1a_trial_242_colour1_distractors19_l.png', 'path': 'images/exp1a_trial_242_colour1_distractors19_l.png'},
    {'name': 'images/exp1b_trial_149_colour2_distractors4_l.png', 'path': 'images/exp1b_trial_149_colour2_distractors4_l.png'},
    {'name': 'images/exp1b_trial_166_colour2_distractors4_r.png', 'path': 'images/exp1b_trial_166_colour2_distractors4_r.png'},
    {'name': 'images/exp1b_trial_205_colour3_distractors19_r.png', 'path': 'images/exp1b_trial_205_colour3_distractors19_r.png'},
    {'name': 'images/exp2b_trial_75_colour3_distractors4_r.png', 'path': 'images/exp2b_trial_75_colour3_distractors4_r.png'},
    {'name': 'images/exp2a_trial_97_colour1_distractors4_r.png', 'path': 'images/exp2a_trial_97_colour1_distractors4_r.png'},
    {'name': 'images/exp2a_trial_279_colour2_distractors19_l.png', 'path': 'images/exp2a_trial_279_colour2_distractors19_l.png'},
    {'name': 'images/exp2a_trial_300_colour3_distractors9_r.png', 'path': 'images/exp2a_trial_300_colour3_distractors9_r.png'},
    {'name': 'images/exp1a_trial_211_colour1_distractors31_l.png', 'path': 'images/exp1a_trial_211_colour1_distractors31_l.png'},
    {'name': 'images/exp1b_trial_119_colour2_distractors19_l.png', 'path': 'images/exp1b_trial_119_colour2_distractors19_l.png'},
    {'name': 'images/exp1b_trial_201_colour2_distractors31_r.png', 'path': 'images/exp1b_trial_201_colour2_distractors31_r.png'},
    {'name': 'images/exp2c_trial_257_colour1_distractors4_r.png', 'path': 'images/exp2c_trial_257_colour1_distractors4_r.png'},
    {'name': 'images/exp1b_trial_148_colour2_distractors1_l.png', 'path': 'images/exp1b_trial_148_colour2_distractors1_l.png'},
    {'name': 'images/exp1b_trial_21_colour2_distractors4_l.png', 'path': 'images/exp1b_trial_21_colour2_distractors4_l.png'},
    {'name': 'images/exp1a_trial_93_colour3_distractors31_l.png', 'path': 'images/exp1a_trial_93_colour3_distractors31_l.png'},
    {'name': 'images/exp1b_trial_208_colour1_distractors4_l.png', 'path': 'images/exp1b_trial_208_colour1_distractors4_l.png'},
    {'name': 'images/exp1b_trial_81_colour1_distractors9_l.png', 'path': 'images/exp1b_trial_81_colour1_distractors9_l.png'},
    {'name': 'images/exp2b_trial_22_colour2_distractors9_l.png', 'path': 'images/exp2b_trial_22_colour2_distractors9_l.png'},
    {'name': 'images/exp2b_trial_104_colour2_distractors19_r.png', 'path': 'images/exp2b_trial_104_colour2_distractors19_r.png'},
    {'name': 'images/exp1a_trial_86_colour2_distractors9_l.png', 'path': 'images/exp1a_trial_86_colour2_distractors9_l.png'},
    {'name': 'images/exp2c_trial_91_colour3_distractors9_l.png', 'path': 'images/exp2c_trial_91_colour3_distractors9_l.png'},
    {'name': 'images/exp1a_trial_107_colour3_distractors4_r.png', 'path': 'images/exp1a_trial_107_colour3_distractors4_r.png'},
    {'name': 'images/exp2c_trial_268_colour3_distractors9_r.png', 'path': 'images/exp2c_trial_268_colour3_distractors9_r.png'},
    {'name': 'images/exp2c_trial_301_colour3_distractors19_r.png', 'path': 'images/exp2c_trial_301_colour3_distractors19_r.png'},
    {'name': 'images/exp1a_trial_256_colour1_distractors1_r.png', 'path': 'images/exp1a_trial_256_colour1_distractors1_r.png'},
    {'name': 'images/exp2b_trial_115_colour1_distractors31_l.png', 'path': 'images/exp2b_trial_115_colour1_distractors31_l.png'},
    {'name': 'images/exp2b_trial_269_colour3_distractors19_r.png', 'path': 'images/exp2b_trial_269_colour3_distractors19_r.png'},
    {'name': 'images/exp1a_trial_128_colour1_distractors1_r.png', 'path': 'images/exp1a_trial_128_colour1_distractors1_r.png'},
    {'name': 'images/exp2c_trial_140_colour3_distractors9_r.png', 'path': 'images/exp2c_trial_140_colour3_distractors9_r.png'},
    {'name': 'images/exp2b_trial_51_colour1_distractors31_l.png', 'path': 'images/exp2b_trial_51_colour1_distractors31_l.png'},
    {'name': 'images/exp1a_trial_82_colour1_distractors19_l.png', 'path': 'images/exp1a_trial_82_colour1_distractors19_l.png'},
    {'name': 'images/exp2b_trial_249_colour3_distractors1_l.png', 'path': 'images/exp2b_trial_249_colour3_distractors1_l.png'},
    {'name': 'images/exp1b_trial_54_colour2_distractors9_l.png', 'path': 'images/exp1b_trial_54_colour2_distractors9_l.png'},
    {'name': 'images/exp1a_trial_98_colour1_distractors9_r.png', 'path': 'images/exp1a_trial_98_colour1_distractors9_r.png'},
    {'name': 'images/exp2b_trial_146_colour1_distractors19_l.png', 'path': 'images/exp2b_trial_146_colour1_distractors19_l.png'},
    {'name': 'images/exp2b_trial_305_colour1_distractors9_l.png', 'path': 'images/exp2b_trial_305_colour1_distractors9_l.png'},
    {'name': 'Practice arrays/exp1a_trial_14_colour3_distractors31_r.png', 'path': 'Practice arrays/exp1a_trial_14_colour3_distractors31_r.png'},
    {'name': 'images/exp2c_trial_158_colour0_distractors0_r.png', 'path': 'images/exp2c_trial_158_colour0_distractors0_r.png'},
    {'name': 'images/exp2b_trial_232_colour2_distractors19_r.png', 'path': 'images/exp2b_trial_232_colour2_distractors19_r.png'},
    {'name': 'images/exp1a_trial_79_colour1_distractors1_l.png', 'path': 'images/exp1a_trial_79_colour1_distractors1_l.png'},
    {'name': 'images/exp1b_trial_315_colour3_distractors9_l.png', 'path': 'images/exp1b_trial_315_colour3_distractors9_l.png'},
    {'name': 'images/exp1a_trial_285_colour3_distractors31_l.png', 'path': 'images/exp1a_trial_285_colour3_distractors31_l.png'},
    {'name': 'images/exp1b_trial_245_colour2_distractors4_l.png', 'path': 'images/exp1b_trial_245_colour2_distractors4_l.png'},
    {'name': 'images/exp1a_trial_125_colour3_distractors31_l.png', 'path': 'images/exp1a_trial_125_colour3_distractors31_l.png'},
    {'name': 'images/exp2b_trial_84_colour2_distractors1_l.png', 'path': 'images/exp2b_trial_84_colour2_distractors1_l.png'},
    {'name': 'images/exp1a_trial_148_colour2_distractors1_l.png', 'path': 'images/exp1a_trial_148_colour2_distractors1_l.png'},
    {'name': 'images/exp2b_trial_278_colour2_distractors9_l.png', 'path': 'images/exp2b_trial_278_colour2_distractors9_l.png'},
    {'name': 'images/exp2b_trial_82_colour1_distractors19_l.png', 'path': 'images/exp2b_trial_82_colour1_distractors19_l.png'},
    {'name': 'images/exp1b_trial_72_colour2_distractors19_r.png', 'path': 'images/exp1b_trial_72_colour2_distractors19_r.png'},
    {'name': 'images/exp1a_trial_290_colour1_distractors9_r.png', 'path': 'images/exp1a_trial_290_colour1_distractors9_r.png'},
    {'name': 'images/exp2c_trial_299_colour3_distractors4_r.png', 'path': 'images/exp2c_trial_299_colour3_distractors4_r.png'},
    {'name': 'images/exp1a_trial_283_colour3_distractors9_l.png', 'path': 'images/exp1a_trial_283_colour3_distractors9_l.png'},
    {'name': 'images/exp2a_trial_275_colour1_distractors31_l.png', 'path': 'images/exp2a_trial_275_colour1_distractors31_l.png'},
    {'name': 'images/exp2b_trial_121_colour3_distractors1_l.png', 'path': 'images/exp2b_trial_121_colour3_distractors1_l.png'},
    {'name': 'images/exp1b_trial_132_colour1_distractors31_r.png', 'path': 'images/exp1b_trial_132_colour1_distractors31_r.png'},
    {'name': 'images/exp1a_trial_156_colour3_distractors19_l.png', 'path': 'images/exp1a_trial_156_colour3_distractors19_l.png'},
    {'name': 'images/exp2a_trial_136_colour2_distractors19_r.png', 'path': 'images/exp2a_trial_136_colour2_distractors19_r.png'},
    {'name': 'images/exp2a_trial_49_colour1_distractors9_l.png', 'path': 'images/exp2a_trial_49_colour1_distractors9_l.png'},
    {'name': 'images/exp1b_trial_220_colour3_distractors19_l.png', 'path': 'images/exp1b_trial_220_colour3_distractors19_l.png'},
    {'name': 'images/exp2a_trial_205_colour3_distractors19_r.png', 'path': 'images/exp2a_trial_205_colour3_distractors19_r.png'},
    {'name': 'images/exp2b_trial_250_colour3_distractors4_l.png', 'path': 'images/exp2b_trial_250_colour3_distractors4_l.png'},
    {'name': 'images/exp1a_trial_96_colour1_distractors1_r.png', 'path': 'images/exp1a_trial_96_colour1_distractors1_r.png'},
    {'name': 'images/exp1b_trial_101_colour2_distractors1_r.png', 'path': 'images/exp1b_trial_101_colour2_distractors1_r.png'},
    {'name': 'images/exp1b_trial_154_colour3_distractors4_l.png', 'path': 'images/exp1b_trial_154_colour3_distractors4_l.png'},
    {'name': 'images/exp1a_trial_309_colour2_distractors4_l.png', 'path': 'images/exp1a_trial_309_colour2_distractors4_l.png'},
    {'name': 'images/exp2c_trial_294_colour2_distractors4_r.png', 'path': 'images/exp2c_trial_294_colour2_distractors4_r.png'},
    {'name': 'images/exp2a_trial_290_colour1_distractors9_r.png', 'path': 'images/exp2a_trial_290_colour1_distractors9_r.png'},
    {'name': 'images/exp2a_trial_311_colour2_distractors19_l.png', 'path': 'images/exp2a_trial_311_colour2_distractors19_l.png'},
    {'name': 'images/exp2c_trial_235_colour3_distractors4_r.png', 'path': 'images/exp2c_trial_235_colour3_distractors4_r.png'},
    {'name': 'images/exp2b_trial_183_colour2_distractors19_l.png', 'path': 'images/exp2b_trial_183_colour2_distractors19_l.png'},
    {'name': 'images/exp2b_trial_207_colour1_distractors1_l.png', 'path': 'images/exp2b_trial_207_colour1_distractors1_l.png'},
    {'name': 'images/exp1a_trial_304_colour1_distractors4_l.png', 'path': 'images/exp1a_trial_304_colour1_distractors4_l.png'},
    {'name': 'images/exp2a_trial_166_colour2_distractors4_r.png', 'path': 'images/exp2a_trial_166_colour2_distractors4_r.png'},
    {'name': 'images/exp1a_trial_36_colour1_distractors31_r.png', 'path': 'images/exp1a_trial_36_colour1_distractors31_r.png'},
    {'name': 'images/exp1b_trial_2_colour1_distractors9_r.png', 'path': 'images/exp1b_trial_2_colour1_distractors9_r.png'},
    {'name': 'images/exp2a_trial_98_colour1_distractors9_r.png', 'path': 'images/exp2a_trial_98_colour1_distractors9_r.png'},
    {'name': 'images/exp2c_trial_7_colour2_distractors9_r.png', 'path': 'images/exp2c_trial_7_colour2_distractors9_r.png'},
    {'name': 'images/exp1b_trial_309_colour2_distractors4_l.png', 'path': 'images/exp1b_trial_309_colour2_distractors4_l.png'},
    {'name': 'targets/leftDisc.png', 'path': 'targets/leftDisc.png'},
    {'name': 'images/exp1b_trial_38_colour2_distractors4_r.png', 'path': 'images/exp1b_trial_38_colour2_distractors4_r.png'},
    {'name': 'images/exp2b_trial_190_colour0_distractors0_r.png', 'path': 'images/exp2b_trial_190_colour0_distractors0_r.png'},
    {'name': 'images/exp2a_trial_306_colour1_distractors19_l.png', 'path': 'images/exp2a_trial_306_colour1_distractors19_l.png'},
    {'name': 'images/exp2b_trial_92_colour3_distractors19_l.png', 'path': 'images/exp2b_trial_92_colour3_distractors19_l.png'},
    {'name': 'images/exp2b_trial_157_colour3_distractors31_l.png', 'path': 'images/exp2b_trial_157_colour3_distractors31_l.png'},
    {'name': 'images/exp1a_trial_278_colour2_distractors9_l.png', 'path': 'images/exp1a_trial_278_colour2_distractors9_l.png'},
    {'name': 'images/exp1b_trial_84_colour2_distractors1_l.png', 'path': 'images/exp1b_trial_84_colour2_distractors1_l.png'},
    {'name': 'images/exp2c_trial_211_colour1_distractors31_l.png', 'path': 'images/exp2c_trial_211_colour1_distractors31_l.png'},
    {'name': 'images/exp2a_trial_69_colour2_distractors1_r.png', 'path': 'images/exp2a_trial_69_colour2_distractors1_r.png'},
    {'name': 'images/exp2b_trial_213_colour2_distractors4_l.png', 'path': 'images/exp2b_trial_213_colour2_distractors4_l.png'},
    {'name': 'images/exp2c_trial_185_colour3_distractors1_l.png', 'path': 'images/exp2c_trial_185_colour3_distractors1_l.png'},
    {'name': 'images/exp2c_trial_159_colour0_distractors0_l.png', 'path': 'images/exp2c_trial_159_colour0_distractors0_l.png'},
    {'name': 'images/exp1a_trial_106_colour3_distractors1_r.png', 'path': 'images/exp1a_trial_106_colour3_distractors1_r.png'},
    {'name': 'images/exp2b_trial_63_colour0_distractors0_l.png', 'path': 'images/exp2b_trial_63_colour0_distractors0_l.png'},
    {'name': 'images/exp2c_trial_155_colour3_distractors9_l.png', 'path': 'images/exp2c_trial_155_colour3_distractors9_l.png'},
    {'name': 'images/exp2c_trial_133_colour2_distractors1_r.png', 'path': 'images/exp2c_trial_133_colour2_distractors1_r.png'},
    {'name': 'images/exp2a_trial_160_colour1_distractors1_r.png', 'path': 'images/exp2a_trial_160_colour1_distractors1_r.png'},
    {'name': 'images/exp2a_trial_168_colour2_distractors19_r.png', 'path': 'images/exp2a_trial_168_colour2_distractors19_r.png'},
    {'name': 'images/exp2c_trial_17_colour1_distractors9_l.png', 'path': 'images/exp2c_trial_17_colour1_distractors9_l.png'},
    {'name': 'images/exp2a_trial_297_colour2_distractors31_r.png', 'path': 'images/exp2a_trial_297_colour2_distractors31_r.png'},
    {'name': 'images/exp1b_trial_36_colour1_distractors31_r.png', 'path': 'images/exp1b_trial_36_colour1_distractors31_r.png'},
    {'name': 'images/exp2a_trial_182_colour2_distractors9_l.png', 'path': 'images/exp2a_trial_182_colour2_distractors9_l.png'},
    {'name': 'images/exp1a_trial_163_colour1_distractors19_r.png', 'path': 'images/exp1a_trial_163_colour1_distractors19_r.png'},
    {'name': 'images/exp2a_trial_200_colour2_distractors19_r.png', 'path': 'images/exp2a_trial_200_colour2_distractors19_r.png'},
    {'name': 'images/exp1b_trial_25_colour3_distractors1_l.png', 'path': 'images/exp1b_trial_25_colour3_distractors1_l.png'},
    {'name': 'images/exp1b_trial_75_colour3_distractors4_r.png', 'path': 'images/exp1b_trial_75_colour3_distractors4_r.png'},
    {'name': 'images/exp2b_trial_41_colour2_distractors31_r.png', 'path': 'images/exp2b_trial_41_colour2_distractors31_r.png'},
    {'name': 'images/exp2c_trial_139_colour3_distractors4_r.png', 'path': 'images/exp2c_trial_139_colour3_distractors4_r.png'},
    {'name': 'images/exp1a_trial_140_colour3_distractors9_r.png', 'path': 'images/exp1a_trial_140_colour3_distractors9_r.png'},
    {'name': 'images/exp2a_trial_83_colour1_distractors31_l.png', 'path': 'images/exp2a_trial_83_colour1_distractors31_l.png'},
    {'name': 'images/exp2b_trial_234_colour3_distractors1_r.png', 'path': 'images/exp2b_trial_234_colour3_distractors1_r.png'},
    {'name': 'images/exp2b_trial_186_colour3_distractors4_l.png', 'path': 'images/exp2b_trial_186_colour3_distractors4_l.png'},
    {'name': 'images/exp2c_trial_213_colour2_distractors4_l.png', 'path': 'images/exp2c_trial_213_colour2_distractors4_l.png'},
    {'name': 'images/exp2b_trial_272_colour1_distractors4_l.png', 'path': 'images/exp2b_trial_272_colour1_distractors4_l.png'},
    {'name': 'images/exp2a_trial_10_colour3_distractors1_r.png', 'path': 'images/exp2a_trial_10_colour3_distractors1_r.png'},
    {'name': 'images/exp2c_trial_48_colour1_distractors4_l.png', 'path': 'images/exp2c_trial_48_colour1_distractors4_l.png'},
    {'name': 'images/exp2b_trial_220_colour3_distractors19_l.png', 'path': 'images/exp2b_trial_220_colour3_distractors19_l.png'},
    {'name': 'images/exp1a_trial_87_colour2_distractors19_l.png', 'path': 'images/exp1a_trial_87_colour2_distractors19_l.png'},
    {'name': 'images/exp1a_trial_216_colour2_distractors31_l.png', 'path': 'images/exp1a_trial_216_colour2_distractors31_l.png'},
    {'name': 'images/exp2c_trial_175_colour1_distractors1_l.png', 'path': 'images/exp2c_trial_175_colour1_distractors1_l.png'},
    {'name': 'images/exp2c_trial_105_colour2_distractors31_r.png', 'path': 'images/exp2c_trial_105_colour2_distractors31_r.png'},
    {'name': 'images/exp2b_trial_70_colour2_distractors4_r.png', 'path': 'images/exp2b_trial_70_colour2_distractors4_r.png'},
    {'name': 'images/exp2a_trial_131_colour1_distractors19_r.png', 'path': 'images/exp2a_trial_131_colour1_distractors19_r.png'},
    {'name': 'images/exp2c_trial_302_colour3_distractors31_r.png', 'path': 'images/exp2c_trial_302_colour3_distractors31_r.png'},
    {'name': 'images/exp2c_trial_256_colour1_distractors1_r.png', 'path': 'images/exp2c_trial_256_colour1_distractors1_r.png'},
    {'name': 'images/exp1a_trial_31_colour0_distractors0_l.png', 'path': 'images/exp1a_trial_31_colour0_distractors0_l.png'},
    {'name': 'images/exp1a_trial_268_colour3_distractors9_r.png', 'path': 'images/exp1a_trial_268_colour3_distractors9_r.png'},
    {'name': 'images/exp2c_trial_4_colour1_distractors31_r.png', 'path': 'images/exp2c_trial_4_colour1_distractors31_r.png'},
    {'name': 'images/exp1a_trial_183_colour2_distractors19_l.png', 'path': 'images/exp1a_trial_183_colour2_distractors19_l.png'},
    {'name': 'images/exp1a_trial_104_colour2_distractors19_r.png', 'path': 'images/exp1a_trial_104_colour2_distractors19_r.png'},
    {'name': 'images/exp1b_trial_71_colour2_distractors9_r.png', 'path': 'images/exp1b_trial_71_colour2_distractors9_r.png'},
    {'name': 'images/exp2c_trial_68_colour1_distractors31_r.png', 'path': 'images/exp2c_trial_68_colour1_distractors31_r.png'},
    {'name': 'images/exp1a_trial_10_colour3_distractors1_r.png', 'path': 'images/exp1a_trial_10_colour3_distractors1_r.png'},
    {'name': 'images/exp1b_trial_30_colour0_distractors0_r.png', 'path': 'images/exp1b_trial_30_colour0_distractors0_r.png'},
    {'name': 'images/exp2a_trial_245_colour2_distractors4_l.png', 'path': 'images/exp2a_trial_245_colour2_distractors4_l.png'},
    {'name': 'images/exp2c_trial_244_colour2_distractors1_l.png', 'path': 'images/exp2c_trial_244_colour2_distractors1_l.png'},
    {'name': 'images/exp2b_trial_93_colour3_distractors31_l.png', 'path': 'images/exp2b_trial_93_colour3_distractors31_l.png'},
    {'name': 'images/exp2b_trial_285_colour3_distractors31_l.png', 'path': 'images/exp2b_trial_285_colour3_distractors31_l.png'},
    {'name': 'images/exp1a_trial_138_colour3_distractors1_r.png', 'path': 'images/exp1a_trial_138_colour3_distractors1_r.png'},
    {'name': 'images/exp2b_trial_128_colour1_distractors1_r.png', 'path': 'images/exp2b_trial_128_colour1_distractors1_r.png'},
    {'name': 'images/exp2a_trial_71_colour2_distractors9_r.png', 'path': 'images/exp2a_trial_71_colour2_distractors9_r.png'},
    {'name': 'images/exp2b_trial_90_colour3_distractors4_l.png', 'path': 'images/exp2b_trial_90_colour3_distractors4_l.png'},
    {'name': 'images/exp1a_trial_46_colour3_distractors31_r.png', 'path': 'images/exp1a_trial_46_colour3_distractors31_r.png'},
    {'name': 'images/exp1b_trial_111_colour1_distractors1_l.png', 'path': 'images/exp1b_trial_111_colour1_distractors1_l.png'},
    {'name': 'images/exp2c_trial_196_colour1_distractors31_r.png', 'path': 'images/exp2c_trial_196_colour1_distractors31_r.png'},
    {'name': 'images/exp2c_trial_182_colour2_distractors9_l.png', 'path': 'images/exp2c_trial_182_colour2_distractors9_l.png'},
    {'name': 'images/exp2b_trial_221_colour3_distractors31_l.png', 'path': 'images/exp2b_trial_221_colour3_distractors31_l.png'},
    {'name': 'images/exp2b_trial_155_colour3_distractors9_l.png', 'path': 'images/exp2b_trial_155_colour3_distractors9_l.png'},
    {'name': 'images/exp1b_trial_277_colour2_distractors4_l.png', 'path': 'images/exp1b_trial_277_colour2_distractors4_l.png'},
    {'name': 'images/exp2b_trial_3_colour1_distractors19_r.png', 'path': 'images/exp2b_trial_3_colour1_distractors19_r.png'},
    {'name': 'images/exp2b_trial_253_colour3_distractors31_l.png', 'path': 'images/exp2b_trial_253_colour3_distractors31_l.png'},
    {'name': 'images/exp1b_trial_187_colour3_distractors9_l.png', 'path': 'images/exp1b_trial_187_colour3_distractors9_l.png'},
    {'name': 'images/exp2a_trial_56_colour2_distractors31_l.png', 'path': 'images/exp2a_trial_56_colour2_distractors31_l.png'},
    {'name': 'images/exp1b_trial_112_colour1_distractors4_l.png', 'path': 'images/exp1b_trial_112_colour1_distractors4_l.png'},
    {'name': 'images/exp1a_trial_167_colour2_distractors9_r.png', 'path': 'images/exp1a_trial_167_colour2_distractors9_r.png'},
    {'name': 'images/exp2c_trial_92_colour3_distractors19_l.png', 'path': 'images/exp2c_trial_92_colour3_distractors19_l.png'},
    {'name': 'images/exp2b_trial_36_colour1_distractors31_r.png', 'path': 'images/exp2b_trial_36_colour1_distractors31_r.png'},
    {'name': 'images/exp2c_trial_260_colour1_distractors31_r.png', 'path': 'images/exp2c_trial_260_colour1_distractors31_r.png'},
    {'name': 'images/exp2a_trial_91_colour3_distractors9_l.png', 'path': 'images/exp2a_trial_91_colour3_distractors9_l.png'},
    {'name': 'images/exp2a_trial_13_colour3_distractors19_r.png', 'path': 'images/exp2a_trial_13_colour3_distractors19_r.png'},
    {'name': 'images/exp2b_trial_31_colour0_distractors0_l.png', 'path': 'images/exp2b_trial_31_colour0_distractors0_l.png'},
    {'name': 'images/exp2b_trial_73_colour2_distractors31_r.png', 'path': 'images/exp2b_trial_73_colour2_distractors31_r.png'},
    {'name': 'images/exp1a_trial_265_colour2_distractors31_r.png', 'path': 'images/exp1a_trial_265_colour2_distractors31_r.png'},
    {'name': 'images/exp1a_trial_222_colour0_distractors0_r.png', 'path': 'images/exp1a_trial_222_colour0_distractors0_r.png'},
    {'name': 'images/exp1a_trial_271_colour1_distractors1_l.png', 'path': 'images/exp1a_trial_271_colour1_distractors1_l.png'},
    {'name': 'images/exp1b_trial_85_colour2_distractors4_l.png', 'path': 'images/exp1b_trial_85_colour2_distractors4_l.png'},
    {'name': 'images/exp1a_trial_55_colour2_distractors19_l.png', 'path': 'images/exp1a_trial_55_colour2_distractors19_l.png'},
    {'name': 'images/exp2a_trial_102_colour2_distractors4_r.png', 'path': 'images/exp2a_trial_102_colour2_distractors4_r.png'},
    {'name': 'images/exp1b_trial_66_colour1_distractors9_r.png', 'path': 'images/exp1b_trial_66_colour1_distractors9_r.png'},
    {'name': 'images/exp1b_trial_95_colour0_distractors0_l.png', 'path': 'images/exp1b_trial_95_colour0_distractors0_l.png'},
    {'name': 'images/exp1b_trial_159_colour0_distractors0_l.png', 'path': 'images/exp1b_trial_159_colour0_distractors0_l.png'},
    {'name': 'images/exp1a_trial_61_colour3_distractors31_l.png', 'path': 'images/exp1a_trial_61_colour3_distractors31_l.png'},
    {'name': 'images/exp1b_trial_50_colour1_distractors19_l.png', 'path': 'images/exp1b_trial_50_colour1_distractors19_l.png'},
    {'name': 'images/exp1b_trial_256_colour1_distractors1_r.png', 'path': 'images/exp1b_trial_256_colour1_distractors1_r.png'},
    {'name': 'images/exp1a_trial_219_colour3_distractors9_l.png', 'path': 'images/exp1a_trial_219_colour3_distractors9_l.png'},
    {'name': 'images/exp2b_trial_284_colour3_distractors19_l.png', 'path': 'images/exp2b_trial_284_colour3_distractors19_l.png'},
    {'name': 'images/exp2b_trial_67_colour1_distractors19_r.png', 'path': 'images/exp2b_trial_67_colour1_distractors19_r.png'},
    {'name': 'images/exp1a_trial_91_colour3_distractors9_l.png', 'path': 'images/exp1a_trial_91_colour3_distractors9_l.png'},
    {'name': 'images/exp2a_trial_299_colour3_distractors4_r.png', 'path': 'images/exp2a_trial_299_colour3_distractors4_r.png'},
    {'name': 'images/exp2c_trial_177_colour1_distractors9_l.png', 'path': 'images/exp2c_trial_177_colour1_distractors9_l.png'},
    {'name': 'images/exp1b_trial_57_colour3_distractors1_l.png', 'path': 'images/exp1b_trial_57_colour3_distractors1_l.png'},
    {'name': 'images/exp2b_trial_202_colour3_distractors1_r.png', 'path': 'images/exp2b_trial_202_colour3_distractors1_r.png'},
    {'name': 'images/exp1b_trial_251_colour3_distractors9_l.png', 'path': 'images/exp1b_trial_251_colour3_distractors9_l.png'},
    {'name': 'images/exp2a_trial_229_colour2_distractors1_r.png', 'path': 'images/exp2a_trial_229_colour2_distractors1_r.png'},
    {'name': 'images/exp1a_trial_67_colour1_distractors19_r.png', 'path': 'images/exp1a_trial_67_colour1_distractors19_r.png'},
    {'name': 'images/exp2a_trial_86_colour2_distractors9_l.png', 'path': 'images/exp2a_trial_86_colour2_distractors9_l.png'},
    {'name': 'images/exp1b_trial_229_colour2_distractors1_r.png', 'path': 'images/exp1b_trial_229_colour2_distractors1_r.png'},
    {'name': 'images/exp1a_trial_176_colour1_distractors4_l.png', 'path': 'images/exp1a_trial_176_colour1_distractors4_l.png'},
    {'name': 'images/exp1b_trial_176_colour1_distractors4_l.png', 'path': 'images/exp1b_trial_176_colour1_distractors4_l.png'},
    {'name': 'images/exp2c_trial_291_colour1_distractors19_r.png', 'path': 'images/exp2c_trial_291_colour1_distractors19_r.png'},
    {'name': 'images/exp1a_trial_54_colour2_distractors9_l.png', 'path': 'images/exp1a_trial_54_colour2_distractors9_l.png'},
    {'name': 'images/exp2c_trial_5_colour2_distractors1_r.png', 'path': 'images/exp2c_trial_5_colour2_distractors1_r.png'},
    {'name': 'images/exp2c_trial_97_colour1_distractors4_r.png', 'path': 'images/exp2c_trial_97_colour1_distractors4_r.png'},
    {'name': 'images/exp2a_trial_84_colour2_distractors1_l.png', 'path': 'images/exp2a_trial_84_colour2_distractors1_l.png'},
    {'name': 'images/exp2a_trial_19_colour1_distractors31_l.png', 'path': 'images/exp2a_trial_19_colour1_distractors31_l.png'},
    {'name': 'images/exp1b_trial_133_colour2_distractors1_r.png', 'path': 'images/exp1b_trial_133_colour2_distractors1_r.png'},
    {'name': 'images/exp1b_trial_318_colour0_distractors0_r.png', 'path': 'images/exp1b_trial_318_colour0_distractors0_r.png'},
    {'name': 'images/exp2c_trial_187_colour3_distractors9_l.png', 'path': 'images/exp2c_trial_187_colour3_distractors9_l.png'},
    {'name': 'images/exp1a_trial_168_colour2_distractors19_r.png', 'path': 'images/exp1a_trial_168_colour2_distractors19_r.png'},
    {'name': 'images/exp1b_trial_91_colour3_distractors9_l.png', 'path': 'images/exp1b_trial_91_colour3_distractors9_l.png'},
    {'name': 'images/exp2a_trial_105_colour2_distractors31_r.png', 'path': 'images/exp2a_trial_105_colour2_distractors31_r.png'},
    {'name': 'images/exp1b_trial_232_colour2_distractors19_r.png', 'path': 'images/exp1b_trial_232_colour2_distractors19_r.png'},
    {'name': 'images/exp2c_trial_134_colour2_distractors4_r.png', 'path': 'images/exp2c_trial_134_colour2_distractors4_r.png'},
    {'name': 'images/exp2c_trial_145_colour1_distractors9_l.png', 'path': 'images/exp2c_trial_145_colour1_distractors9_l.png'},
    {'name': 'images/exp1b_trial_231_colour2_distractors9_r.png', 'path': 'images/exp1b_trial_231_colour2_distractors9_r.png'},
    {'name': 'images/exp2c_trial_298_colour3_distractors1_r.png', 'path': 'images/exp2c_trial_298_colour3_distractors1_r.png'},
    {'name': 'images/exp2a_trial_181_colour2_distractors4_l.png', 'path': 'images/exp2a_trial_181_colour2_distractors4_l.png'},
    {'name': 'images/exp2b_trial_297_colour2_distractors31_r.png', 'path': 'images/exp2b_trial_297_colour2_distractors31_r.png'},
    {'name': 'images/exp2a_trial_43_colour3_distractors4_r.png', 'path': 'images/exp2a_trial_43_colour3_distractors4_r.png'},
    {'name': 'images/exp2a_trial_8_colour2_distractors19_r.png', 'path': 'images/exp2a_trial_8_colour2_distractors19_r.png'},
    {'name': 'images/exp2a_trial_132_colour1_distractors31_r.png', 'path': 'images/exp2a_trial_132_colour1_distractors31_r.png'},
    {'name': 'images/exp1b_trial_9_colour2_distractors31_r.png', 'path': 'images/exp1b_trial_9_colour2_distractors31_r.png'},
    {'name': 'images/exp2b_trial_56_colour2_distractors31_l.png', 'path': 'images/exp2b_trial_56_colour2_distractors31_l.png'},
    {'name': 'images/exp2b_trial_55_colour2_distractors19_l.png', 'path': 'images/exp2b_trial_55_colour2_distractors19_l.png'},
    {'name': 'images/exp2c_trial_295_colour2_distractors9_r.png', 'path': 'images/exp2c_trial_295_colour2_distractors9_r.png'},
    {'name': 'images/exp2b_trial_119_colour2_distractors19_l.png', 'path': 'images/exp2b_trial_119_colour2_distractors19_l.png'},
    {'name': 'images/exp1b_trial_16_colour1_distractors4_l.png', 'path': 'images/exp1b_trial_16_colour1_distractors4_l.png'},
    {'name': 'images/exp2b_trial_277_colour2_distractors4_l.png', 'path': 'images/exp2b_trial_277_colour2_distractors4_l.png'},
    {'name': 'images/exp2a_trial_48_colour1_distractors4_l.png', 'path': 'images/exp2a_trial_48_colour1_distractors4_l.png'},
    {'name': 'images/exp1a_trial_270_colour3_distractors31_r.png', 'path': 'images/exp1a_trial_270_colour3_distractors31_r.png'},
    {'name': 'images/exp2b_trial_109_colour3_distractors19_r.png', 'path': 'images/exp2b_trial_109_colour3_distractors19_r.png'},
    {'name': 'images/exp1b_trial_65_colour1_distractors4_r.png', 'path': 'images/exp1b_trial_65_colour1_distractors4_r.png'},
    {'name': 'images/exp1b_trial_53_colour2_distractors4_l.png', 'path': 'images/exp1b_trial_53_colour2_distractors4_l.png'},
    {'name': 'images/exp2a_trial_159_colour0_distractors0_l.png', 'path': 'images/exp2a_trial_159_colour0_distractors0_l.png'},
    {'name': 'images/exp2b_trial_105_colour2_distractors31_r.png', 'path': 'images/exp2b_trial_105_colour2_distractors31_r.png'},
    {'name': 'images/exp1a_trial_210_colour1_distractors19_l.png', 'path': 'images/exp1a_trial_210_colour1_distractors19_l.png'},
    {'name': 'images/exp2b_trial_275_colour1_distractors31_l.png', 'path': 'images/exp2b_trial_275_colour1_distractors31_l.png'},
    {'name': 'images/exp1a_trial_192_colour1_distractors1_r.png', 'path': 'images/exp1a_trial_192_colour1_distractors1_r.png'},
    {'name': 'images/exp2a_trial_113_colour1_distractors9_l.png', 'path': 'images/exp2a_trial_113_colour1_distractors9_l.png'},
    {'name': 'images/exp1a_trial_73_colour2_distractors31_r.png', 'path': 'images/exp1a_trial_73_colour2_distractors31_r.png'},
    {'name': 'images/exp2a_trial_82_colour1_distractors19_l.png', 'path': 'images/exp2a_trial_82_colour1_distractors19_l.png'},
    {'name': 'images/exp2a_trial_285_colour3_distractors31_l.png', 'path': 'images/exp2a_trial_285_colour3_distractors31_l.png'},
    {'name': 'images/exp1a_trial_116_colour2_distractors1_l.png', 'path': 'images/exp1a_trial_116_colour2_distractors1_l.png'},
    {'name': 'images/exp2b_trial_193_colour1_distractors4_r.png', 'path': 'images/exp2b_trial_193_colour1_distractors4_r.png'},
    {'name': 'images/exp2a_trial_234_colour3_distractors1_r.png', 'path': 'images/exp2a_trial_234_colour3_distractors1_r.png'},
    {'name': 'images/exp2a_trial_274_colour1_distractors19_l.png', 'path': 'images/exp2a_trial_274_colour1_distractors19_l.png'},
    {'name': 'images/exp2a_trial_4_colour1_distractors31_r.png', 'path': 'images/exp2a_trial_4_colour1_distractors31_r.png'},
    {'name': 'images/exp2c_trial_162_colour1_distractors9_r.png', 'path': 'images/exp2c_trial_162_colour1_distractors9_r.png'},
    {'name': 'images/exp2b_trial_268_colour3_distractors9_r.png', 'path': 'images/exp2b_trial_268_colour3_distractors9_r.png'},
    {'name': 'images/exp1a_trial_115_colour1_distractors31_l.png', 'path': 'images/exp1a_trial_115_colour1_distractors31_l.png'},
    {'name': 'images/exp1b_trial_200_colour2_distractors19_r.png', 'path': 'images/exp1b_trial_200_colour2_distractors19_r.png'},
    {'name': 'images/exp2a_trial_180_colour2_distractors1_l.png', 'path': 'images/exp2a_trial_180_colour2_distractors1_l.png'},
    {'name': 'images/exp1a_trial_75_colour3_distractors4_r.png', 'path': 'images/exp1a_trial_75_colour3_distractors4_r.png'},
    {'name': 'images/exp1a_trial_143_colour1_distractors1_l.png', 'path': 'images/exp1a_trial_143_colour1_distractors1_l.png'},
    {'name': 'images/exp2a_trial_236_colour3_distractors9_r.png', 'path': 'images/exp2a_trial_236_colour3_distractors9_r.png'},
    {'name': 'images/exp2a_trial_78_colour3_distractors31_r.png', 'path': 'images/exp2a_trial_78_colour3_distractors31_r.png'},
    {'name': 'images/exp2a_trial_216_colour2_distractors31_l.png', 'path': 'images/exp2a_trial_216_colour2_distractors31_l.png'},
    {'name': 'images/exp2c_trial_16_colour1_distractors4_l.png', 'path': 'images/exp2c_trial_16_colour1_distractors4_l.png'},
    {'name': 'images/exp1b_trial_59_colour3_distractors9_l.png', 'path': 'images/exp1b_trial_59_colour3_distractors9_l.png'},
    {'name': 'images/exp2a_trial_93_colour3_distractors31_l.png', 'path': 'images/exp2a_trial_93_colour3_distractors31_l.png'},
    {'name': 'images/exp2b_trial_290_colour1_distractors9_r.png', 'path': 'images/exp2b_trial_290_colour1_distractors9_r.png'},
    {'name': 'Practice arrays/exp1a_trial_25_colour3_distractors1_l.png', 'path': 'Practice arrays/exp1a_trial_25_colour3_distractors1_l.png'},
    {'name': 'images/exp2a_trial_140_colour3_distractors9_r.png', 'path': 'images/exp2a_trial_140_colour3_distractors9_r.png'},
    {'name': 'images/exp2c_trial_101_colour2_distractors1_r.png', 'path': 'images/exp2c_trial_101_colour2_distractors1_r.png'},
    {'name': 'images/exp1b_trial_197_colour2_distractors1_r.png', 'path': 'images/exp1b_trial_197_colour2_distractors1_r.png'},
    {'name': 'images/exp2a_trial_172_colour3_distractors9_r.png', 'path': 'images/exp2a_trial_172_colour3_distractors9_r.png'},
    {'name': 'images/exp1b_trial_28_colour3_distractors19_l.png', 'path': 'images/exp1b_trial_28_colour3_distractors19_l.png'},
    {'name': 'images/exp1a_trial_114_colour1_distractors19_l.png', 'path': 'images/exp1a_trial_114_colour1_distractors19_l.png'},
    {'name': 'images/exp2a_trial_277_colour2_distractors4_l.png', 'path': 'images/exp2a_trial_277_colour2_distractors4_l.png'},
    {'name': 'images/exp1a_trial_213_colour2_distractors4_l.png', 'path': 'images/exp1a_trial_213_colour2_distractors4_l.png'},
    {'name': 'images/exp2a_trial_262_colour2_distractors4_r.png', 'path': 'images/exp2a_trial_262_colour2_distractors4_r.png'},
    {'name': 'images/exp2c_trial_236_colour3_distractors9_r.png', 'path': 'images/exp2c_trial_236_colour3_distractors9_r.png'},
    {'name': 'images/exp2c_trial_264_colour2_distractors19_r.png', 'path': 'images/exp2c_trial_264_colour2_distractors19_r.png'},
    {'name': 'images/exp2c_trial_318_colour0_distractors0_r.png', 'path': 'images/exp2c_trial_318_colour0_distractors0_r.png'},
    {'name': 'images/exp2c_trial_176_colour1_distractors4_l.png', 'path': 'images/exp2c_trial_176_colour1_distractors4_l.png'},
    {'name': 'images/exp2b_trial_212_colour2_distractors1_l.png', 'path': 'images/exp2b_trial_212_colour2_distractors1_l.png'},
    {'name': 'images/exp2a_trial_207_colour1_distractors1_l.png', 'path': 'images/exp2a_trial_207_colour1_distractors1_l.png'},
    {'name': 'images/exp1b_trial_214_colour2_distractors9_l.png', 'path': 'images/exp1b_trial_214_colour2_distractors9_l.png'},
    {'name': 'images/exp1b_trial_120_colour2_distractors31_l.png', 'path': 'images/exp1b_trial_120_colour2_distractors31_l.png'},
    {'name': 'images/exp1b_trial_217_colour3_distractors1_l.png', 'path': 'images/exp1b_trial_217_colour3_distractors1_l.png'},
    {'name': 'images/exp2a_trial_153_colour3_distractors1_l.png', 'path': 'images/exp2a_trial_153_colour3_distractors1_l.png'},
    {'name': 'images/exp1b_trial_285_colour3_distractors31_l.png', 'path': 'images/exp1b_trial_285_colour3_distractors31_l.png'},
    {'name': 'images/exp2b_trial_274_colour1_distractors19_l.png', 'path': 'images/exp2b_trial_274_colour1_distractors19_l.png'},
    {'name': 'images/exp1a_trial_154_colour3_distractors4_l.png', 'path': 'images/exp1a_trial_154_colour3_distractors4_l.png'},
    {'name': 'images/exp2c_trial_18_colour1_distractors19_l.png', 'path': 'images/exp2c_trial_18_colour1_distractors19_l.png'},
    {'name': 'images/exp2b_trial_279_colour2_distractors19_l.png', 'path': 'images/exp2b_trial_279_colour2_distractors19_l.png'},
    {'name': 'images/exp1b_trial_47_colour1_distractors1_l.png', 'path': 'images/exp1b_trial_47_colour1_distractors1_l.png'},
    {'name': 'images/exp2c_trial_51_colour1_distractors31_l.png', 'path': 'images/exp2c_trial_51_colour1_distractors31_l.png'},
    {'name': 'images/exp1b_trial_312_colour2_distractors31_l.png', 'path': 'images/exp1b_trial_312_colour2_distractors31_l.png'},
    {'name': 'images/exp2c_trial_161_colour1_distractors4_r.png', 'path': 'images/exp2c_trial_161_colour1_distractors4_r.png'},
    {'name': 'images/exp1a_trial_215_colour2_distractors19_l.png', 'path': 'images/exp1a_trial_215_colour2_distractors19_l.png'},
    {'name': 'images/exp2a_trial_150_colour2_distractors9_l.png', 'path': 'images/exp2a_trial_150_colour2_distractors9_l.png'},
    {'name': 'images/exp1b_trial_248_colour2_distractors31_l.png', 'path': 'images/exp1b_trial_248_colour2_distractors31_l.png'},
    {'name': 'images/exp2c_trial_143_colour1_distractors1_l.png', 'path': 'images/exp2c_trial_143_colour1_distractors1_l.png'},
    {'name': 'images/exp1a_trial_130_colour1_distractors9_r.png', 'path': 'images/exp1a_trial_130_colour1_distractors9_r.png'},
    {'name': 'images/exp2c_trial_23_colour2_distractors19_l.png', 'path': 'images/exp2c_trial_23_colour2_distractors19_l.png'},
    {'name': 'images/exp1b_trial_10_colour3_distractors1_r.png', 'path': 'images/exp1b_trial_10_colour3_distractors1_r.png'},
    {'name': 'images/exp2a_trial_79_colour1_distractors1_l.png', 'path': 'images/exp2a_trial_79_colour1_distractors1_l.png'},
    {'name': 'images/exp1b_trial_140_colour3_distractors9_r.png', 'path': 'images/exp1b_trial_140_colour3_distractors9_r.png'},
    {'name': 'images/exp2c_trial_77_colour3_distractors19_r.png', 'path': 'images/exp2c_trial_77_colour3_distractors19_r.png'},
    {'name': 'images/exp2c_trial_249_colour3_distractors1_l.png', 'path': 'images/exp2c_trial_249_colour3_distractors1_l.png'},
    {'name': 'images/exp2b_trial_240_colour1_distractors4_l.png', 'path': 'images/exp2b_trial_240_colour1_distractors4_l.png'},
    {'name': 'Practice arrays/exp1a_trial_27_colour3_distractors9_l.png', 'path': 'Practice arrays/exp1a_trial_27_colour3_distractors9_l.png'},
    {'name': 'images/exp1a_trial_177_colour1_distractors9_l.png', 'path': 'images/exp1a_trial_177_colour1_distractors9_l.png'},
    {'name': 'images/exp1a_trial_204_colour3_distractors9_r.png', 'path': 'images/exp1a_trial_204_colour3_distractors9_r.png'},
    {'name': 'images/exp2b_trial_133_colour2_distractors1_r.png', 'path': 'images/exp2b_trial_133_colour2_distractors1_r.png'},
    {'name': 'images/exp1a_trial_170_colour3_distractors1_r.png', 'path': 'images/exp1a_trial_170_colour3_distractors1_r.png'},
    {'name': 'images/exp1b_trial_5_colour2_distractors1_r.png', 'path': 'images/exp1b_trial_5_colour2_distractors1_r.png'},
    {'name': 'images/exp2b_trial_247_colour2_distractors19_l.png', 'path': 'images/exp2b_trial_247_colour2_distractors19_l.png'},
    {'name': 'images/exp2b_trial_150_colour2_distractors9_l.png', 'path': 'images/exp2b_trial_150_colour2_distractors9_l.png'},
    {'name': 'images/exp2c_trial_56_colour2_distractors31_l.png', 'path': 'images/exp2c_trial_56_colour2_distractors31_l.png'},
    {'name': 'images/exp2c_trial_259_colour1_distractors19_r.png', 'path': 'images/exp2c_trial_259_colour1_distractors19_r.png'},
    {'name': 'images/exp2a_trial_176_colour1_distractors4_l.png', 'path': 'images/exp2a_trial_176_colour1_distractors4_l.png'},
    {'name': 'images/exp1b_trial_60_colour3_distractors19_l.png', 'path': 'images/exp1b_trial_60_colour3_distractors19_l.png'},
    {'name': 'images/exp2a_trial_174_colour3_distractors31_r.png', 'path': 'images/exp2a_trial_174_colour3_distractors31_r.png'},
    {'name': 'images/exp2b_trial_177_colour1_distractors9_l.png', 'path': 'images/exp2b_trial_177_colour1_distractors9_l.png'},
    {'name': 'images/exp1a_trial_230_colour2_distractors4_r.png', 'path': 'images/exp1a_trial_230_colour2_distractors4_r.png'},
    {'name': 'Practice arrays/exp1a_trial_1_colour1_distractors4_r.png', 'path': 'Practice arrays/exp1a_trial_1_colour1_distractors4_r.png'},
    {'name': 'images/exp1b_trial_198_colour2_distractors4_r.png', 'path': 'images/exp1b_trial_198_colour2_distractors4_r.png'},
    {'name': 'images/exp2b_trial_179_colour1_distractors31_l.png', 'path': 'images/exp2b_trial_179_colour1_distractors31_l.png'},
    {'name': 'images/exp1b_trial_266_colour3_distractors1_r.png', 'path': 'images/exp1b_trial_266_colour3_distractors1_r.png'},
    {'name': 'images/exp1a_trial_220_colour3_distractors19_l.png', 'path': 'images/exp1a_trial_220_colour3_distractors19_l.png'},
    {'name': 'images/exp2c_trial_289_colour1_distractors4_r.png', 'path': 'images/exp2c_trial_289_colour1_distractors4_r.png'},
    {'name': 'images/exp1b_trial_12_colour3_distractors9_r.png', 'path': 'images/exp1b_trial_12_colour3_distractors9_r.png'},
    {'name': 'images/exp2b_trial_81_colour1_distractors9_l.png', 'path': 'images/exp2b_trial_81_colour1_distractors9_l.png'},
    {'name': 'images/exp2a_trial_296_colour2_distractors19_r.png', 'path': 'images/exp2a_trial_296_colour2_distractors19_r.png'},
    {'name': 'images/exp1b_trial_316_colour3_distractors19_l.png', 'path': 'images/exp1b_trial_316_colour3_distractors19_l.png'},
    {'name': 'images/exp2b_trial_304_colour1_distractors4_l.png', 'path': 'images/exp2b_trial_304_colour1_distractors4_l.png'},
    {'name': 'images/exp2c_trial_123_colour3_distractors9_l.png', 'path': 'images/exp2c_trial_123_colour3_distractors9_l.png'},
    {'name': 'images/exp2b_trial_161_colour1_distractors4_r.png', 'path': 'images/exp2b_trial_161_colour1_distractors4_r.png'},
    {'name': 'images/exp1b_trial_212_colour2_distractors1_l.png', 'path': 'images/exp1b_trial_212_colour2_distractors1_l.png'},
    {'name': 'images/exp2a_trial_133_colour2_distractors1_r.png', 'path': 'images/exp2a_trial_133_colour2_distractors1_r.png'},
    {'name': 'images/exp1b_trial_241_colour1_distractors9_l.png', 'path': 'images/exp1b_trial_241_colour1_distractors9_l.png'},
    {'name': 'images/exp1b_trial_63_colour0_distractors0_l.png', 'path': 'images/exp1b_trial_63_colour0_distractors0_l.png'},
    {'name': 'images/exp2c_trial_280_colour2_distractors31_l.png', 'path': 'images/exp2c_trial_280_colour2_distractors31_l.png'},
    {'name': 'images/exp1a_trial_165_colour2_distractors1_r.png', 'path': 'images/exp1a_trial_165_colour2_distractors1_r.png'},
    {'name': 'images/exp2a_trial_115_colour1_distractors31_l.png', 'path': 'images/exp2a_trial_115_colour1_distractors31_l.png'},
    {'name': 'images/exp2a_trial_33_colour1_distractors4_r.png', 'path': 'images/exp2a_trial_33_colour1_distractors4_r.png'},
    {'name': 'images/exp2c_trial_147_colour1_distractors31_l.png', 'path': 'images/exp2c_trial_147_colour1_distractors31_l.png'},
    {'name': 'images/exp2b_trial_20_colour2_distractors1_l.png', 'path': 'images/exp2b_trial_20_colour2_distractors1_l.png'},
    {'name': 'images/exp2a_trial_249_colour3_distractors1_l.png', 'path': 'images/exp2a_trial_249_colour3_distractors1_l.png'},
    {'name': 'images/exp2b_trial_195_colour1_distractors19_r.png', 'path': 'images/exp2b_trial_195_colour1_distractors19_r.png'},
    {'name': 'images/exp2a_trial_316_colour3_distractors19_l.png', 'path': 'images/exp2a_trial_316_colour3_distractors19_l.png'},
    {'name': 'images/exp2b_trial_188_colour3_distractors19_l.png', 'path': 'images/exp2b_trial_188_colour3_distractors19_l.png'},
    {'name': 'images/exp1a_trial_257_colour1_distractors4_r.png', 'path': 'images/exp1a_trial_257_colour1_distractors4_r.png'},
    {'name': 'images/exp2a_trial_258_colour1_distractors9_r.png', 'path': 'images/exp2a_trial_258_colour1_distractors9_r.png'},
    {'name': 'images/exp2b_trial_171_colour3_distractors4_r.png', 'path': 'images/exp2b_trial_171_colour3_distractors4_r.png'},
    {'name': 'images/exp1a_trial_315_colour3_distractors9_l.png', 'path': 'images/exp1a_trial_315_colour3_distractors9_l.png'},
    {'name': 'images/exp1a_trial_139_colour3_distractors4_r.png', 'path': 'images/exp1a_trial_139_colour3_distractors4_r.png'},
    {'name': 'images/exp2b_trial_101_colour2_distractors1_r.png', 'path': 'images/exp2b_trial_101_colour2_distractors1_r.png'},
    {'name': 'images/exp2c_trial_14_colour3_distractors31_r.png', 'path': 'images/exp2c_trial_14_colour3_distractors31_r.png'},
    {'name': 'images/exp2a_trial_27_colour3_distractors9_l.png', 'path': 'images/exp2a_trial_27_colour3_distractors9_l.png'},
    {'name': 'images/exp2b_trial_8_colour2_distractors19_r.png', 'path': 'images/exp2b_trial_8_colour2_distractors19_r.png'},
    {'name': 'images/exp2a_trial_183_colour2_distractors19_l.png', 'path': 'images/exp2a_trial_183_colour2_distractors19_l.png'},
    {'name': 'images/exp2b_trial_242_colour1_distractors19_l.png', 'path': 'images/exp2b_trial_242_colour1_distractors19_l.png'},
    {'name': 'images/exp2c_trial_137_colour2_distractors31_r.png', 'path': 'images/exp2c_trial_137_colour2_distractors31_r.png'},
    {'name': 'images/exp2a_trial_54_colour2_distractors9_l.png', 'path': 'images/exp2a_trial_54_colour2_distractors9_l.png'},
    {'name': 'images/exp1a_trial_157_colour3_distractors31_l.png', 'path': 'images/exp1a_trial_157_colour3_distractors31_l.png'},
    {'name': 'images/exp2c_trial_279_colour2_distractors19_l.png', 'path': 'images/exp2c_trial_279_colour2_distractors19_l.png'},
    {'name': 'images/exp1b_trial_233_colour2_distractors31_r.png', 'path': 'images/exp1b_trial_233_colour2_distractors31_r.png'},
    {'name': 'images/exp2a_trial_90_colour3_distractors4_l.png', 'path': 'images/exp2a_trial_90_colour3_distractors4_l.png'},
    {'name': 'images/exp2c_trial_82_colour1_distractors19_l.png', 'path': 'images/exp2c_trial_82_colour1_distractors19_l.png'},
    {'name': 'images/exp1a_trial_8_colour2_distractors19_r.png', 'path': 'images/exp1a_trial_8_colour2_distractors19_r.png'},
    {'name': 'images/exp1b_trial_98_colour1_distractors9_r.png', 'path': 'images/exp1b_trial_98_colour1_distractors9_r.png'},
    {'name': 'images/exp2c_trial_53_colour2_distractors4_l.png', 'path': 'images/exp2c_trial_53_colour2_distractors4_l.png'},
    {'name': 'images/exp2b_trial_267_colour3_distractors4_r.png', 'path': 'images/exp2b_trial_267_colour3_distractors4_r.png'},
    {'name': 'images/exp1a_trial_19_colour1_distractors31_l.png', 'path': 'images/exp1a_trial_19_colour1_distractors31_l.png'},
    {'name': 'images/exp2a_trial_40_colour2_distractors19_r.png', 'path': 'images/exp2a_trial_40_colour2_distractors19_r.png'},
    {'name': 'images/exp2a_trial_107_colour3_distractors4_r.png', 'path': 'images/exp2a_trial_107_colour3_distractors4_r.png'},
    {'name': 'images/exp2a_trial_73_colour2_distractors31_r.png', 'path': 'images/exp2a_trial_73_colour2_distractors31_r.png'},
    {'name': 'images/exp2a_trial_196_colour1_distractors31_r.png', 'path': 'images/exp2a_trial_196_colour1_distractors31_r.png'},
    {'name': 'images/exp2c_trial_269_colour3_distractors19_r.png', 'path': 'images/exp2c_trial_269_colour3_distractors19_r.png'},
    {'name': 'images/exp2a_trial_144_colour1_distractors4_l.png', 'path': 'images/exp2a_trial_144_colour1_distractors4_l.png'},
    {'name': 'images/exp2b_trial_35_colour1_distractors19_r.png', 'path': 'images/exp2b_trial_35_colour1_distractors19_r.png'},
    {'name': 'images/exp2c_trial_166_colour2_distractors4_r.png', 'path': 'images/exp2c_trial_166_colour2_distractors4_r.png'},
    {'name': 'images/exp1a_trial_6_colour2_distractors4_r.png', 'path': 'images/exp1a_trial_6_colour2_distractors4_r.png'},
    {'name': 'images/exp1b_trial_310_colour2_distractors9_l.png', 'path': 'images/exp1b_trial_310_colour2_distractors9_l.png'},
    {'name': 'images/exp2c_trial_39_colour2_distractors9_r.png', 'path': 'images/exp2c_trial_39_colour2_distractors9_r.png'},
    {'name': 'images/exp1b_trial_203_colour3_distractors4_r.png', 'path': 'images/exp1b_trial_203_colour3_distractors4_r.png'},
    {'name': 'images/exp1b_trial_177_colour1_distractors9_l.png', 'path': 'images/exp1b_trial_177_colour1_distractors9_l.png'},
    {'name': 'images/exp2a_trial_298_colour3_distractors1_r.png', 'path': 'images/exp2a_trial_298_colour3_distractors1_r.png'},
    {'name': 'images/exp1a_trial_59_colour3_distractors9_l.png', 'path': 'images/exp1a_trial_59_colour3_distractors9_l.png'},
    {'name': 'images/exp2b_trial_40_colour2_distractors19_r.png', 'path': 'images/exp2b_trial_40_colour2_distractors19_r.png'},
    {'name': 'images/exp2b_trial_87_colour2_distractors19_l.png', 'path': 'images/exp2b_trial_87_colour2_distractors19_l.png'},
    {'name': 'images/exp1a_trial_71_colour2_distractors9_r.png', 'path': 'images/exp1a_trial_71_colour2_distractors9_r.png'},
    {'name': 'images/exp1b_trial_239_colour1_distractors1_l.png', 'path': 'images/exp1b_trial_239_colour1_distractors1_l.png'},
    {'name': 'images/exp2a_trial_315_colour3_distractors9_l.png', 'path': 'images/exp2a_trial_315_colour3_distractors9_l.png'},
    {'name': 'images/exp2b_trial_2_colour1_distractors9_r.png', 'path': 'images/exp2b_trial_2_colour1_distractors9_r.png'},
    {'name': 'images/exp2c_trial_277_colour2_distractors4_l.png', 'path': 'images/exp2c_trial_277_colour2_distractors4_l.png'},
    {'name': 'images/exp2a_trial_155_colour3_distractors9_l.png', 'path': 'images/exp2a_trial_155_colour3_distractors9_l.png'},
    {'name': 'images/exp1b_trial_249_colour3_distractors1_l.png', 'path': 'images/exp1b_trial_249_colour3_distractors1_l.png'},
    {'name': 'images/exp2c_trial_99_colour1_distractors19_r.png', 'path': 'images/exp2c_trial_99_colour1_distractors19_r.png'},
    {'name': 'images/exp1b_trial_121_colour3_distractors1_l.png', 'path': 'images/exp1b_trial_121_colour3_distractors1_l.png'},
    {'name': 'images/exp2b_trial_100_colour1_distractors31_r.png', 'path': 'images/exp2b_trial_100_colour1_distractors31_r.png'},
    {'name': 'images/exp2a_trial_305_colour1_distractors9_l.png', 'path': 'images/exp2a_trial_305_colour1_distractors9_l.png'},
    {'name': 'images/exp1b_trial_294_colour2_distractors4_r.png', 'path': 'images/exp1b_trial_294_colour2_distractors4_r.png'},
    {'name': 'Practice arrays/exp1a_trial_12_colour3_distractors9_r.png', 'path': 'Practice arrays/exp1a_trial_12_colour3_distractors9_r.png'},
    {'name': 'images/exp2a_trial_85_colour2_distractors4_l.png', 'path': 'images/exp2a_trial_85_colour2_distractors4_l.png'},
    {'name': 'images/exp1a_trial_212_colour2_distractors1_l.png', 'path': 'images/exp1a_trial_212_colour2_distractors1_l.png'},
    {'name': 'images/exp1a_trial_198_colour2_distractors4_r.png', 'path': 'images/exp1a_trial_198_colour2_distractors4_r.png'},
    {'name': 'images/exp2a_trial_175_colour1_distractors1_l.png', 'path': 'images/exp2a_trial_175_colour1_distractors1_l.png'},
    {'name': 'images/exp2c_trial_118_colour2_distractors9_l.png', 'path': 'images/exp2c_trial_118_colour2_distractors9_l.png'},
    {'name': 'images/exp2b_trial_125_colour3_distractors31_l.png', 'path': 'images/exp2b_trial_125_colour3_distractors31_l.png'},
    {'name': 'images/exp2b_trial_228_colour1_distractors31_r.png', 'path': 'images/exp2b_trial_228_colour1_distractors31_r.png'},
    {'name': 'images/exp2b_trial_245_colour2_distractors4_l.png', 'path': 'images/exp2b_trial_245_colour2_distractors4_l.png'},
    {'name': 'images/exp2c_trial_314_colour3_distractors4_l.png', 'path': 'images/exp2c_trial_314_colour3_distractors4_l.png'},
    {'name': 'images/exp2c_trial_272_colour1_distractors4_l.png', 'path': 'images/exp2c_trial_272_colour1_distractors4_l.png'},
    {'name': 'images/exp2b_trial_289_colour1_distractors4_r.png', 'path': 'images/exp2b_trial_289_colour1_distractors4_r.png'},
    {'name': 'images/exp1a_trial_262_colour2_distractors4_r.png', 'path': 'images/exp1a_trial_262_colour2_distractors4_r.png'},
    {'name': 'images/exp2a_trial_185_colour3_distractors1_l.png', 'path': 'images/exp2a_trial_185_colour3_distractors1_l.png'},
    {'name': 'images/exp2b_trial_263_colour2_distractors9_r.png', 'path': 'images/exp2b_trial_263_colour2_distractors9_r.png'},
    {'name': 'images/exp1b_trial_146_colour1_distractors19_l.png', 'path': 'images/exp1b_trial_146_colour1_distractors19_l.png'},
    {'name': 'images/exp2a_trial_112_colour1_distractors4_l.png', 'path': 'images/exp2a_trial_112_colour1_distractors4_l.png'},
    {'name': 'images/exp2b_trial_38_colour2_distractors4_r.png', 'path': 'images/exp2b_trial_38_colour2_distractors4_r.png'},
    {'name': 'images/exp2a_trial_103_colour2_distractors9_r.png', 'path': 'images/exp2a_trial_103_colour2_distractors9_r.png'},
    {'name': 'images/exp2b_trial_260_colour1_distractors31_r.png', 'path': 'images/exp2b_trial_260_colour1_distractors31_r.png'},
    {'name': 'images/exp1a_trial_57_colour3_distractors1_l.png', 'path': 'images/exp1a_trial_57_colour3_distractors1_l.png'},
    {'name': 'images/exp1b_trial_181_colour2_distractors4_l.png', 'path': 'images/exp1b_trial_181_colour2_distractors4_l.png'},
    {'name': 'images/exp2c_trial_254_colour0_distractors0_r.png', 'path': 'images/exp2c_trial_254_colour0_distractors0_r.png'},
    {'name': 'images/exp1a_trial_131_colour1_distractors19_r.png', 'path': 'images/exp1a_trial_131_colour1_distractors19_r.png'},
    {'name': 'images/exp1a_trial_310_colour2_distractors9_l.png', 'path': 'images/exp1a_trial_310_colour2_distractors9_l.png'},
    {'name': 'images/exp1b_trial_110_colour3_distractors31_r.png', 'path': 'images/exp1b_trial_110_colour3_distractors31_r.png'},
    {'name': 'images/exp2b_trial_5_colour2_distractors1_r.png', 'path': 'images/exp2b_trial_5_colour2_distractors1_r.png'},
    {'name': 'images/exp1a_trial_279_colour2_distractors19_l.png', 'path': 'images/exp1a_trial_279_colour2_distractors19_l.png'},
    {'name': 'Practice arrays/exp1a_trial_31_colour0_distractors0_l.png', 'path': 'Practice arrays/exp1a_trial_31_colour0_distractors0_l.png'},
    {'name': 'images/exp2c_trial_263_colour2_distractors9_r.png', 'path': 'images/exp2c_trial_263_colour2_distractors9_r.png'},
    {'name': 'images/exp1a_trial_239_colour1_distractors1_l.png', 'path': 'images/exp1a_trial_239_colour1_distractors1_l.png'},
    {'name': 'images/exp1a_trial_94_colour0_distractors0_r.png', 'path': 'images/exp1a_trial_94_colour0_distractors0_r.png'},
    {'name': 'images/exp2b_trial_184_colour2_distractors31_l.png', 'path': 'images/exp2b_trial_184_colour2_distractors31_l.png'},
    {'name': 'images/exp1a_trial_102_colour2_distractors4_r.png', 'path': 'images/exp1a_trial_102_colour2_distractors4_r.png'},
    {'name': 'images/exp1a_trial_39_colour2_distractors9_r.png', 'path': 'images/exp1a_trial_39_colour2_distractors9_r.png'},
    {'name': 'images/exp1a_trial_179_colour1_distractors31_l.png', 'path': 'images/exp1a_trial_179_colour1_distractors31_l.png'},
    {'name': 'images/exp1a_trial_238_colour3_distractors31_r.png', 'path': 'images/exp1a_trial_238_colour3_distractors31_r.png'},
    {'name': 'images/exp2a_trial_226_colour1_distractors9_r.png', 'path': 'images/exp2a_trial_226_colour1_distractors9_r.png'},
    {'name': 'images/exp2a_trial_148_colour2_distractors1_l.png', 'path': 'images/exp2a_trial_148_colour2_distractors1_l.png'},
    {'name': 'images/exp1a_trial_188_colour3_distractors19_l.png', 'path': 'images/exp1a_trial_188_colour3_distractors19_l.png'},
    {'name': 'images/exp1b_trial_180_colour2_distractors1_l.png', 'path': 'images/exp1b_trial_180_colour2_distractors1_l.png'},
    {'name': 'images/exp1b_trial_299_colour3_distractors4_r.png', 'path': 'images/exp1b_trial_299_colour3_distractors4_r.png'},
    {'name': 'images/exp2c_trial_150_colour2_distractors9_l.png', 'path': 'images/exp2c_trial_150_colour2_distractors9_l.png'},
    {'name': 'images/exp1b_trial_70_colour2_distractors4_r.png', 'path': 'images/exp1b_trial_70_colour2_distractors4_r.png'},
    {'name': 'images/exp1b_trial_209_colour1_distractors9_l.png', 'path': 'images/exp1b_trial_209_colour1_distractors9_l.png'},
    {'name': 'images/exp2b_trial_142_colour3_distractors31_r.png', 'path': 'images/exp2b_trial_142_colour3_distractors31_r.png'},
    {'name': 'images/exp1b_trial_22_colour2_distractors9_l.png', 'path': 'images/exp1b_trial_22_colour2_distractors9_l.png'},
    {'name': 'images/exp2a_trial_173_colour3_distractors19_r.png', 'path': 'images/exp2a_trial_173_colour3_distractors19_r.png'},
    {'name': 'images/exp1a_trial_314_colour3_distractors4_l.png', 'path': 'images/exp1a_trial_314_colour3_distractors4_l.png'},
    {'name': 'images/exp2b_trial_131_colour1_distractors19_r.png', 'path': 'images/exp2b_trial_131_colour1_distractors19_r.png'},
    {'name': 'images/exp2b_trial_238_colour3_distractors31_r.png', 'path': 'images/exp2b_trial_238_colour3_distractors31_r.png'},
    {'name': 'images/exp1a_trial_311_colour2_distractors19_l.png', 'path': 'images/exp1a_trial_311_colour2_distractors19_l.png'},
    {'name': 'images/exp2a_trial_217_colour3_distractors1_l.png', 'path': 'images/exp2a_trial_217_colour3_distractors1_l.png'},
    {'name': 'images/exp1b_trial_194_colour1_distractors9_r.png', 'path': 'images/exp1b_trial_194_colour1_distractors9_r.png'},
    {'name': 'images/exp1b_trial_99_colour1_distractors19_r.png', 'path': 'images/exp1b_trial_99_colour1_distractors19_r.png'},
    {'name': 'images/exp2b_trial_46_colour3_distractors31_r.png', 'path': 'images/exp2b_trial_46_colour3_distractors31_r.png'},
    {'name': 'images/exp1b_trial_303_colour1_distractors1_l.png', 'path': 'images/exp1b_trial_303_colour1_distractors1_l.png'},
    {'name': 'images/exp2b_trial_127_colour0_distractors0_l.png', 'path': 'images/exp2b_trial_127_colour0_distractors0_l.png'},
    {'name': 'images/exp1b_trial_278_colour2_distractors9_l.png', 'path': 'images/exp1b_trial_278_colour2_distractors9_l.png'},
    {'name': 'images/exp1b_trial_94_colour0_distractors0_r.png', 'path': 'images/exp1b_trial_94_colour0_distractors0_r.png'},
    {'name': 'images/exp2b_trial_256_colour1_distractors1_r.png', 'path': 'images/exp2b_trial_256_colour1_distractors1_r.png'},
    {'name': 'images/exp1a_trial_42_colour3_distractors1_r.png', 'path': 'images/exp1a_trial_42_colour3_distractors1_r.png'},
    {'name': 'images/exp2c_trial_198_colour2_distractors4_r.png', 'path': 'images/exp2c_trial_198_colour2_distractors4_r.png'},
    {'name': 'images/exp2b_trial_48_colour1_distractors4_l.png', 'path': 'images/exp2b_trial_48_colour1_distractors4_l.png'},
    {'name': 'images/exp1a_trial_246_colour2_distractors9_l.png', 'path': 'images/exp1a_trial_246_colour2_distractors9_l.png'},
    {'name': 'images/exp1b_trial_105_colour2_distractors31_r.png', 'path': 'images/exp1b_trial_105_colour2_distractors31_r.png'},
    {'name': 'images/exp1a_trial_195_colour1_distractors19_r.png', 'path': 'images/exp1a_trial_195_colour1_distractors19_r.png'},
    {'name': 'images/exp1a_trial_254_colour0_distractors0_r.png', 'path': 'images/exp1a_trial_254_colour0_distractors0_r.png'},
    {'name': 'images/exp2a_trial_312_colour2_distractors31_l.png', 'path': 'images/exp2a_trial_312_colour2_distractors31_l.png'},
    {'name': 'images/exp1b_trial_164_colour1_distractors31_r.png', 'path': 'images/exp1b_trial_164_colour1_distractors31_r.png'},
    {'name': 'images/exp2a_trial_25_colour3_distractors1_l.png', 'path': 'images/exp2a_trial_25_colour3_distractors1_l.png'},
    {'name': 'images/exp2c_trial_30_colour0_distractors0_r.png', 'path': 'images/exp2c_trial_30_colour0_distractors0_r.png'},
    {'name': 'images/exp2c_trial_208_colour1_distractors4_l.png', 'path': 'images/exp2c_trial_208_colour1_distractors4_l.png'},
    {'name': 'images/exp1b_trial_14_colour3_distractors31_r.png', 'path': 'images/exp1b_trial_14_colour3_distractors31_r.png'},
    {'name': 'images/exp2b_trial_270_colour3_distractors31_r.png', 'path': 'images/exp2b_trial_270_colour3_distractors31_r.png'},
    {'name': 'images/exp1a_trial_151_colour2_distractors19_l.png', 'path': 'images/exp1a_trial_151_colour2_distractors19_l.png'},
    {'name': 'images/exp1a_trial_294_colour2_distractors4_r.png', 'path': 'images/exp1a_trial_294_colour2_distractors4_r.png'},
    {'name': 'images/exp1b_trial_76_colour3_distractors9_r.png', 'path': 'images/exp1b_trial_76_colour3_distractors9_r.png'},
    {'name': 'images/exp2b_trial_145_colour1_distractors9_l.png', 'path': 'images/exp2b_trial_145_colour1_distractors9_l.png'},
    {'name': 'images/exp1b_trial_247_colour2_distractors19_l.png', 'path': 'images/exp1b_trial_247_colour2_distractors19_l.png'},
    {'name': 'images/exp2b_trial_6_colour2_distractors4_r.png', 'path': 'images/exp2b_trial_6_colour2_distractors4_r.png'},
    {'name': 'images/exp2c_trial_69_colour2_distractors1_r.png', 'path': 'images/exp2c_trial_69_colour2_distractors1_r.png'},
    {'name': 'images/exp2b_trial_86_colour2_distractors9_l.png', 'path': 'images/exp2b_trial_86_colour2_distractors9_l.png'},
    {'name': 'images/exp2b_trial_122_colour3_distractors4_l.png', 'path': 'images/exp2b_trial_122_colour3_distractors4_l.png'},
    {'name': 'images/exp1b_trial_305_colour1_distractors9_l.png', 'path': 'images/exp1b_trial_305_colour1_distractors9_l.png'},
    {'name': 'images/exp1b_trial_122_colour3_distractors4_l.png', 'path': 'images/exp1b_trial_122_colour3_distractors4_l.png'},
    {'name': 'images/exp2a_trial_164_colour1_distractors31_r.png', 'path': 'images/exp2a_trial_164_colour1_distractors31_r.png'},
    {'name': 'images/exp2c_trial_238_colour3_distractors31_r.png', 'path': 'images/exp2c_trial_238_colour3_distractors31_r.png'},
    {'name': 'images/exp2b_trial_178_colour1_distractors19_l.png', 'path': 'images/exp2b_trial_178_colour1_distractors19_l.png'},
    {'name': 'images/exp2c_trial_192_colour1_distractors1_r.png', 'path': 'images/exp2c_trial_192_colour1_distractors1_r.png'},
    {'name': 'images/exp2b_trial_14_colour3_distractors31_r.png', 'path': 'images/exp2b_trial_14_colour3_distractors31_r.png'},
    {'name': 'images/exp2b_trial_299_colour3_distractors4_r.png', 'path': 'images/exp2b_trial_299_colour3_distractors4_r.png'},
    {'name': 'images/exp2c_trial_296_colour2_distractors19_r.png', 'path': 'images/exp2c_trial_296_colour2_distractors19_r.png'},
    {'name': 'images/exp2c_trial_231_colour2_distractors9_r.png', 'path': 'images/exp2c_trial_231_colour2_distractors9_r.png'},
    {'name': 'images/exp1a_trial_30_colour0_distractors0_r.png', 'path': 'images/exp1a_trial_30_colour0_distractors0_r.png'},
    {'name': 'images/exp2c_trial_160_colour1_distractors1_r.png', 'path': 'images/exp2c_trial_160_colour1_distractors1_r.png'},
    {'name': 'images/exp2c_trial_81_colour1_distractors9_l.png', 'path': 'images/exp2c_trial_81_colour1_distractors9_l.png'},
    {'name': 'images/exp2a_trial_268_colour3_distractors9_r.png', 'path': 'images/exp2a_trial_268_colour3_distractors9_r.png'},
    {'name': 'images/exp2b_trial_143_colour1_distractors1_l.png', 'path': 'images/exp2b_trial_143_colour1_distractors1_l.png'},
    {'name': 'images/exp1a_trial_258_colour1_distractors9_r.png', 'path': 'images/exp1a_trial_258_colour1_distractors9_r.png'},
    {'name': 'images/exp1a_trial_84_colour2_distractors1_l.png', 'path': 'images/exp1a_trial_84_colour2_distractors1_l.png'},
    {'name': 'images/exp2c_trial_178_colour1_distractors19_l.png', 'path': 'images/exp2c_trial_178_colour1_distractors19_l.png'},
    {'name': 'images/exp1a_trial_0_colour1_distractors1_r.png', 'path': 'images/exp1a_trial_0_colour1_distractors1_r.png'},
    {'name': 'images/exp1a_trial_229_colour2_distractors1_r.png', 'path': 'images/exp1a_trial_229_colour2_distractors1_r.png'},
    {'name': 'images/exp2a_trial_208_colour1_distractors4_l.png', 'path': 'images/exp2a_trial_208_colour1_distractors4_l.png'},
    {'name': 'images/exp2a_trial_39_colour2_distractors9_r.png', 'path': 'images/exp2a_trial_39_colour2_distractors9_r.png'},
    {'name': 'images/exp2a_trial_318_colour0_distractors0_r.png', 'path': 'images/exp2a_trial_318_colour0_distractors0_r.png'},
    {'name': 'images/exp2c_trial_237_colour3_distractors19_r.png', 'path': 'images/exp2c_trial_237_colour3_distractors19_r.png'},
    {'name': 'images/exp2c_trial_172_colour3_distractors9_r.png', 'path': 'images/exp2c_trial_172_colour3_distractors9_r.png'},
    {'name': 'images/exp1a_trial_124_colour3_distractors19_l.png', 'path': 'images/exp1a_trial_124_colour3_distractors19_l.png'},
    {'name': 'images/exp1a_trial_174_colour3_distractors31_r.png', 'path': 'images/exp1a_trial_174_colour3_distractors31_r.png'},
    {'name': 'image_stimuli.xlsx', 'path': 'image_stimuli.xlsx'},
    {'name': 'images/exp2c_trial_300_colour3_distractors9_r.png', 'path': 'images/exp2c_trial_300_colour3_distractors9_r.png'},
    {'name': 'images/exp2b_trial_116_colour2_distractors1_l.png', 'path': 'images/exp2b_trial_116_colour2_distractors1_l.png'},
    {'name': 'images/exp2b_trial_244_colour2_distractors1_l.png', 'path': 'images/exp2b_trial_244_colour2_distractors1_l.png'},
    {'name': 'images/exp2a_trial_186_colour3_distractors4_l.png', 'path': 'images/exp2a_trial_186_colour3_distractors4_l.png'},
    {'name': 'images/exp1a_trial_173_colour3_distractors19_r.png', 'path': 'images/exp1a_trial_173_colour3_distractors19_r.png'},
    {'name': 'images/exp1b_trial_80_colour1_distractors4_l.png', 'path': 'images/exp1b_trial_80_colour1_distractors4_l.png'},
    {'name': 'images/exp1b_trial_314_colour3_distractors4_l.png', 'path': 'images/exp1b_trial_314_colour3_distractors4_l.png'},
    {'name': 'images/exp1a_trial_26_colour3_distractors4_l.png', 'path': 'images/exp1a_trial_26_colour3_distractors4_l.png'},
    {'name': 'images/exp2c_trial_88_colour2_distractors31_l.png', 'path': 'images/exp2c_trial_88_colour2_distractors31_l.png'},
    {'name': 'images/exp1a_trial_34_colour1_distractors9_r.png', 'path': 'images/exp1a_trial_34_colour1_distractors9_r.png'},
    {'name': 'images/exp1b_trial_258_colour1_distractors9_r.png', 'path': 'images/exp1b_trial_258_colour1_distractors9_r.png'},
    {'name': 'images/exp1b_trial_141_colour3_distractors19_r.png', 'path': 'images/exp1b_trial_141_colour3_distractors19_r.png'},
    {'name': 'images/exp2a_trial_142_colour3_distractors31_r.png', 'path': 'images/exp2a_trial_142_colour3_distractors31_r.png'},
    {'name': 'images/exp1b_trial_17_colour1_distractors9_l.png', 'path': 'images/exp1b_trial_17_colour1_distractors9_l.png'},
    {'name': 'images/exp1a_trial_306_colour1_distractors19_l.png', 'path': 'images/exp1a_trial_306_colour1_distractors19_l.png'},
    {'name': 'images/exp2a_trial_213_colour2_distractors4_l.png', 'path': 'images/exp2a_trial_213_colour2_distractors4_l.png'},
    {'name': 'images/exp1a_trial_35_colour1_distractors19_r.png', 'path': 'images/exp1a_trial_35_colour1_distractors19_r.png'},
    {'name': 'images/exp2c_trial_80_colour1_distractors4_l.png', 'path': 'images/exp2c_trial_80_colour1_distractors4_l.png'},
    {'name': 'images/exp2b_trial_168_colour2_distractors19_r.png', 'path': 'images/exp2b_trial_168_colour2_distractors19_r.png'},
    {'name': 'images/exp2b_trial_315_colour3_distractors9_l.png', 'path': 'images/exp2b_trial_315_colour3_distractors9_l.png'},
    {'name': 'images/exp2c_trial_58_colour3_distractors4_l.png', 'path': 'images/exp2c_trial_58_colour3_distractors4_l.png'},
    {'name': 'images/exp2a_trial_293_colour2_distractors1_r.png', 'path': 'images/exp2a_trial_293_colour2_distractors1_r.png'},
    {'name': 'images/exp1b_trial_185_colour3_distractors1_l.png', 'path': 'images/exp1b_trial_185_colour3_distractors1_l.png'},
    {'name': 'images/exp1b_trial_290_colour1_distractors9_r.png', 'path': 'images/exp1b_trial_290_colour1_distractors9_r.png'},
    {'name': 'images/exp2b_trial_117_colour2_distractors4_l.png', 'path': 'images/exp2b_trial_117_colour2_distractors4_l.png'},
    {'name': 'images/exp2b_trial_276_colour2_distractors1_l.png', 'path': 'images/exp2b_trial_276_colour2_distractors1_l.png'},
    {'name': 'images/exp2a_trial_256_colour1_distractors1_r.png', 'path': 'images/exp2a_trial_256_colour1_distractors1_r.png'},
    {'name': 'images/exp2b_trial_311_colour2_distractors19_l.png', 'path': 'images/exp2b_trial_311_colour2_distractors19_l.png'},
    {'name': 'images/exp1b_trial_172_colour3_distractors9_r.png', 'path': 'images/exp1b_trial_172_colour3_distractors9_r.png'},
    {'name': 'images/exp2a_trial_141_colour3_distractors19_r.png', 'path': 'images/exp2a_trial_141_colour3_distractors19_r.png'},
    {'name': 'images/exp2a_trial_152_colour2_distractors31_l.png', 'path': 'images/exp2a_trial_152_colour2_distractors31_l.png'},
    {'name': 'images/exp2c_trial_153_colour3_distractors1_l.png', 'path': 'images/exp2c_trial_153_colour3_distractors1_l.png'},
    {'name': 'images/exp1a_trial_150_colour2_distractors9_l.png', 'path': 'images/exp1a_trial_150_colour2_distractors9_l.png'},
    {'name': 'images/exp1b_trial_174_colour3_distractors31_r.png', 'path': 'images/exp1b_trial_174_colour3_distractors31_r.png'},
    {'name': 'images/exp2a_trial_52_colour2_distractors1_l.png', 'path': 'images/exp2a_trial_52_colour2_distractors1_l.png'},
    {'name': 'images/exp1a_trial_32_colour1_distractors1_r.png', 'path': 'images/exp1a_trial_32_colour1_distractors1_r.png'},
    {'name': 'images/exp2a_trial_171_colour3_distractors4_r.png', 'path': 'images/exp2a_trial_171_colour3_distractors4_r.png'},
    {'name': 'images/exp1b_trial_319_colour0_distractors0_l.png', 'path': 'images/exp1b_trial_319_colour0_distractors0_l.png'},
    {'name': 'images/exp2b_trial_19_colour1_distractors31_l.png', 'path': 'images/exp2b_trial_19_colour1_distractors31_l.png'},
    {'name': 'images/exp2a_trial_88_colour2_distractors31_l.png', 'path': 'images/exp2a_trial_88_colour2_distractors31_l.png'},
    {'name': 'images/exp1b_trial_283_colour3_distractors9_l.png', 'path': 'images/exp1b_trial_283_colour3_distractors9_l.png'},
    {'name': 'images/exp2c_trial_282_colour3_distractors4_l.png', 'path': 'images/exp2c_trial_282_colour3_distractors4_l.png'},
    {'name': 'images/exp2a_trial_94_colour0_distractors0_r.png', 'path': 'images/exp2a_trial_94_colour0_distractors0_r.png'},
    {'name': 'images/exp2b_trial_259_colour1_distractors19_r.png', 'path': 'images/exp2b_trial_259_colour1_distractors19_r.png'},
    {'name': 'images/exp2a_trial_60_colour3_distractors19_l.png', 'path': 'images/exp2a_trial_60_colour3_distractors19_l.png'},
    {'name': 'images/exp2b_trial_200_colour2_distractors19_r.png', 'path': 'images/exp2b_trial_200_colour2_distractors19_r.png'},
    {'name': 'images/exp2c_trial_200_colour2_distractors19_r.png', 'path': 'images/exp2c_trial_200_colour2_distractors19_r.png'},
    {'name': 'images/exp2c_trial_29_colour3_distractors31_l.png', 'path': 'images/exp2c_trial_29_colour3_distractors31_l.png'},
    {'name': 'images/exp1a_trial_81_colour1_distractors9_l.png', 'path': 'images/exp1a_trial_81_colour1_distractors9_l.png'},
    {'name': 'images/exp1b_trial_51_colour1_distractors31_l.png', 'path': 'images/exp1b_trial_51_colour1_distractors31_l.png'},
    {'name': 'images/exp1b_trial_286_colour0_distractors0_r.png', 'path': 'images/exp1b_trial_286_colour0_distractors0_r.png'},
    {'name': 'images/exp1b_trial_113_colour1_distractors9_l.png', 'path': 'images/exp1b_trial_113_colour1_distractors9_l.png'},
    {'name': 'images/exp2c_trial_93_colour3_distractors31_l.png', 'path': 'images/exp2c_trial_93_colour3_distractors31_l.png'},
    {'name': 'images/exp2c_trial_266_colour3_distractors1_r.png', 'path': 'images/exp2c_trial_266_colour3_distractors1_r.png'},
    {'name': 'images/exp1a_trial_24_colour2_distractors31_l.png', 'path': 'images/exp1a_trial_24_colour2_distractors31_l.png'},
    {'name': 'images/exp2c_trial_202_colour3_distractors1_r.png', 'path': 'images/exp2c_trial_202_colour3_distractors1_r.png'},
    {'name': 'images/exp2a_trial_37_colour2_distractors1_r.png', 'path': 'images/exp2a_trial_37_colour2_distractors1_r.png'},
    {'name': 'images/exp1a_trial_58_colour3_distractors4_l.png', 'path': 'images/exp1a_trial_58_colour3_distractors4_l.png'},
    {'name': 'images/exp1a_trial_90_colour3_distractors4_l.png', 'path': 'images/exp1a_trial_90_colour3_distractors4_l.png'},
    {'name': 'images/exp2b_trial_44_colour3_distractors9_r.png', 'path': 'images/exp2b_trial_44_colour3_distractors9_r.png'},
    {'name': 'images/exp1b_trial_55_colour2_distractors19_l.png', 'path': 'images/exp1b_trial_55_colour2_distractors19_l.png'},
    {'name': 'images/exp2c_trial_184_colour2_distractors31_l.png', 'path': 'images/exp2c_trial_184_colour2_distractors31_l.png'},
    {'name': 'images/exp1a_trial_25_colour3_distractors1_l.png', 'path': 'images/exp1a_trial_25_colour3_distractors1_l.png'},
    {'name': 'images/exp1b_trial_202_colour3_distractors1_r.png', 'path': 'images/exp1b_trial_202_colour3_distractors1_r.png'},
    {'name': 'images/exp1b_trial_190_colour0_distractors0_r.png', 'path': 'images/exp1b_trial_190_colour0_distractors0_r.png'},
    {'name': 'images/exp1a_trial_241_colour1_distractors9_l.png', 'path': 'images/exp1a_trial_241_colour1_distractors9_l.png'},
    {'name': 'images/exp2c_trial_34_colour1_distractors9_r.png', 'path': 'images/exp2c_trial_34_colour1_distractors9_r.png'},
    {'name': 'images/exp1b_trial_297_colour2_distractors31_r.png', 'path': 'images/exp1b_trial_297_colour2_distractors31_r.png'},
    {'name': 'images/exp2c_trial_313_colour3_distractors1_l.png', 'path': 'images/exp2c_trial_313_colour3_distractors1_l.png'},
    {'name': 'images/exp2b_trial_53_colour2_distractors4_l.png', 'path': 'images/exp2b_trial_53_colour2_distractors4_l.png'},
    {'name': 'images/exp2b_trial_301_colour3_distractors19_r.png', 'path': 'images/exp2b_trial_301_colour3_distractors19_r.png'},
    {'name': 'images/exp2a_trial_9_colour2_distractors31_r.png', 'path': 'images/exp2a_trial_9_colour2_distractors31_r.png'},
    {'name': 'images/exp1b_trial_24_colour2_distractors31_l.png', 'path': 'images/exp1b_trial_24_colour2_distractors31_l.png'},
    {'name': 'images/exp2b_trial_318_colour0_distractors0_r.png', 'path': 'images/exp2b_trial_318_colour0_distractors0_r.png'},
    {'name': 'images/exp2c_trial_201_colour2_distractors31_r.png', 'path': 'images/exp2c_trial_201_colour2_distractors31_r.png'},
    {'name': 'images/exp2c_trial_246_colour2_distractors9_l.png', 'path': 'images/exp2c_trial_246_colour2_distractors9_l.png'},
    {'name': 'images/exp1a_trial_3_colour1_distractors19_r.png', 'path': 'images/exp1a_trial_3_colour1_distractors19_r.png'},
    {'name': 'images/exp2a_trial_31_colour0_distractors0_l.png', 'path': 'images/exp2a_trial_31_colour0_distractors0_l.png'},
    {'name': 'images/exp2c_trial_129_colour1_distractors4_r.png', 'path': 'images/exp2c_trial_129_colour1_distractors4_r.png'},
    {'name': 'images/exp2b_trial_13_colour3_distractors19_r.png', 'path': 'images/exp2b_trial_13_colour3_distractors19_r.png'},
    {'name': 'images/exp2a_trial_157_colour3_distractors31_l.png', 'path': 'images/exp2a_trial_157_colour3_distractors31_l.png'},
    {'name': 'images/exp1b_trial_265_colour2_distractors31_r.png', 'path': 'images/exp1b_trial_265_colour2_distractors31_r.png'},
    {'name': 'images/exp1b_trial_77_colour3_distractors19_r.png', 'path': 'images/exp1b_trial_77_colour3_distractors19_r.png'},
    {'name': 'images/exp2c_trial_38_colour2_distractors4_r.png', 'path': 'images/exp2c_trial_38_colour2_distractors4_r.png'},
    {'name': 'images/exp1a_trial_160_colour1_distractors1_r.png', 'path': 'images/exp1a_trial_160_colour1_distractors1_r.png'},
    {'name': 'images/exp2b_trial_222_colour0_distractors0_r.png', 'path': 'images/exp2b_trial_222_colour0_distractors0_r.png'},
    {'name': 'images/exp2a_trial_212_colour2_distractors1_l.png', 'path': 'images/exp2a_trial_212_colour2_distractors1_l.png'},
    {'name': 'images/exp2a_trial_232_colour2_distractors19_r.png', 'path': 'images/exp2a_trial_232_colour2_distractors19_r.png'},
    {'name': 'images/exp2a_trial_72_colour2_distractors19_r.png', 'path': 'images/exp2a_trial_72_colour2_distractors19_r.png'},
    {'name': 'images/exp2b_trial_25_colour3_distractors1_l.png', 'path': 'images/exp2b_trial_25_colour3_distractors1_l.png'},
    {'name': 'images/exp2b_trial_130_colour1_distractors9_r.png', 'path': 'images/exp2b_trial_130_colour1_distractors9_r.png'},
    {'name': 'images/exp1b_trial_271_colour1_distractors1_l.png', 'path': 'images/exp1b_trial_271_colour1_distractors1_l.png'},
    {'name': 'images/exp2c_trial_315_colour3_distractors9_l.png', 'path': 'images/exp2c_trial_315_colour3_distractors9_l.png'},
    {'name': 'images/exp2c_trial_132_colour1_distractors31_r.png', 'path': 'images/exp2c_trial_132_colour1_distractors31_r.png'},
    {'name': 'images/exp2c_trial_148_colour2_distractors1_l.png', 'path': 'images/exp2c_trial_148_colour2_distractors1_l.png'},
    {'name': 'images/exp2b_trial_162_colour1_distractors9_r.png', 'path': 'images/exp2b_trial_162_colour1_distractors9_r.png'},
    {'name': 'images/exp2c_trial_275_colour1_distractors31_l.png', 'path': 'images/exp2c_trial_275_colour1_distractors31_l.png'},
    {'name': 'images/exp2b_trial_58_colour3_distractors4_l.png', 'path': 'images/exp2b_trial_58_colour3_distractors4_l.png'},
    {'name': 'images/exp2a_trial_32_colour1_distractors1_r.png', 'path': 'images/exp2a_trial_32_colour1_distractors1_r.png'},
    {'name': 'images/exp2c_trial_106_colour3_distractors1_r.png', 'path': 'images/exp2c_trial_106_colour3_distractors1_r.png'},
    {'name': 'images/exp2a_trial_119_colour2_distractors19_l.png', 'path': 'images/exp2a_trial_119_colour2_distractors19_l.png'},
    {'name': 'images/exp1b_trial_178_colour1_distractors19_l.png', 'path': 'images/exp1b_trial_178_colour1_distractors19_l.png'},
    {'name': 'images/exp1a_trial_267_colour3_distractors4_r.png', 'path': 'images/exp1a_trial_267_colour3_distractors4_r.png'},
    {'name': 'images/exp1b_trial_116_colour2_distractors1_l.png', 'path': 'images/exp1b_trial_116_colour2_distractors1_l.png'},
    {'name': 'images/exp2c_trial_96_colour1_distractors1_r.png', 'path': 'images/exp2c_trial_96_colour1_distractors1_r.png'},
    {'name': 'images/exp2a_trial_50_colour1_distractors19_l.png', 'path': 'images/exp2a_trial_50_colour1_distractors19_l.png'},
    {'name': 'images/exp1b_trial_62_colour0_distractors0_r.png', 'path': 'images/exp1b_trial_62_colour0_distractors0_r.png'},
    {'name': 'images/exp2c_trial_119_colour2_distractors19_l.png', 'path': 'images/exp2c_trial_119_colour2_distractors19_l.png'},
    {'name': 'images/exp1b_trial_193_colour1_distractors4_r.png', 'path': 'images/exp1b_trial_193_colour1_distractors4_r.png'},
    {'name': 'images/exp2b_trial_30_colour0_distractors0_r.png', 'path': 'images/exp2b_trial_30_colour0_distractors0_r.png'},
    {'name': 'images/exp2c_trial_75_colour3_distractors4_r.png', 'path': 'images/exp2c_trial_75_colour3_distractors4_r.png'},
    {'name': 'images/exp1a_trial_83_colour1_distractors31_l.png', 'path': 'images/exp1a_trial_83_colour1_distractors31_l.png'},
    {'name': 'images/exp2a_trial_161_colour1_distractors4_r.png', 'path': 'images/exp2a_trial_161_colour1_distractors4_r.png'},
    {'name': 'images/exp1b_trial_161_colour1_distractors4_r.png', 'path': 'images/exp1b_trial_161_colour1_distractors4_r.png'},
    {'name': 'images/exp1a_trial_137_colour2_distractors31_r.png', 'path': 'images/exp1a_trial_137_colour2_distractors31_r.png'},
    {'name': 'images/exp1a_trial_200_colour2_distractors19_r.png', 'path': 'images/exp1a_trial_200_colour2_distractors19_r.png'},
    {'name': 'images/exp2c_trial_228_colour1_distractors31_r.png', 'path': 'images/exp2c_trial_228_colour1_distractors31_r.png'},
    {'name': 'images/exp2a_trial_270_colour3_distractors31_r.png', 'path': 'images/exp2a_trial_270_colour3_distractors31_r.png'},
    {'name': 'images/exp1b_trial_169_colour2_distractors31_r.png', 'path': 'images/exp1b_trial_169_colour2_distractors31_r.png'},
    {'name': 'images/exp2a_trial_307_colour1_distractors31_l.png', 'path': 'images/exp2a_trial_307_colour1_distractors31_l.png'},
    {'name': 'images/exp1b_trial_302_colour3_distractors31_r.png', 'path': 'images/exp1b_trial_302_colour3_distractors31_r.png'},
    {'name': 'images/exp1b_trial_254_colour0_distractors0_r.png', 'path': 'images/exp1b_trial_254_colour0_distractors0_r.png'},
    {'name': 'images/exp2a_trial_170_colour3_distractors1_r.png', 'path': 'images/exp2a_trial_170_colour3_distractors1_r.png'},
    {'name': 'images/exp2b_trial_37_colour2_distractors1_r.png', 'path': 'images/exp2b_trial_37_colour2_distractors1_r.png'},
    {'name': 'images/exp2b_trial_107_colour3_distractors4_r.png', 'path': 'images/exp2b_trial_107_colour3_distractors4_r.png'},
    {'name': 'images/exp1b_trial_82_colour1_distractors19_l.png', 'path': 'images/exp1b_trial_82_colour1_distractors19_l.png'},
    {'name': 'images/exp2b_trial_181_colour2_distractors4_l.png', 'path': 'images/exp2b_trial_181_colour2_distractors4_l.png'},
    {'name': 'images/exp1a_trial_250_colour3_distractors4_l.png', 'path': 'images/exp1a_trial_250_colour3_distractors4_l.png'},
    {'name': 'images/exp2c_trial_104_colour2_distractors19_r.png', 'path': 'images/exp2c_trial_104_colour2_distractors19_r.png'},
    {'name': 'images/exp2a_trial_222_colour0_distractors0_r.png', 'path': 'images/exp2a_trial_222_colour0_distractors0_r.png'},
    {'name': 'images/exp1a_trial_280_colour2_distractors31_l.png', 'path': 'images/exp1a_trial_280_colour2_distractors31_l.png'},
    {'name': 'images/exp2c_trial_220_colour3_distractors19_l.png', 'path': 'images/exp2c_trial_220_colour3_distractors19_l.png'},
    {'name': 'images/exp2c_trial_26_colour3_distractors4_l.png', 'path': 'images/exp2c_trial_26_colour3_distractors4_l.png'},
    {'name': 'images/exp1b_trial_289_colour1_distractors4_r.png', 'path': 'images/exp1b_trial_289_colour1_distractors4_r.png'},
    {'name': 'images/exp2a_trial_2_colour1_distractors9_r.png', 'path': 'images/exp2a_trial_2_colour1_distractors9_r.png'},
    {'name': 'images/exp1b_trial_48_colour1_distractors4_l.png', 'path': 'images/exp1b_trial_48_colour1_distractors4_l.png'},
    {'name': 'images/exp2a_trial_62_colour0_distractors0_r.png', 'path': 'images/exp2a_trial_62_colour0_distractors0_r.png'},
    {'name': 'images/exp2c_trial_164_colour1_distractors31_r.png', 'path': 'images/exp2c_trial_164_colour1_distractors31_r.png'},
    {'name': 'images/exp2a_trial_187_colour3_distractors9_l.png', 'path': 'images/exp2a_trial_187_colour3_distractors9_l.png'},
    {'name': 'images/exp2c_trial_317_colour3_distractors31_l.png', 'path': 'images/exp2c_trial_317_colour3_distractors31_l.png'},
    {'name': 'images/exp2b_trial_102_colour2_distractors4_r.png', 'path': 'images/exp2b_trial_102_colour2_distractors4_r.png'},
    {'name': 'images/exp1b_trial_49_colour1_distractors9_l.png', 'path': 'images/exp1b_trial_49_colour1_distractors9_l.png'},
    {'name': 'images/exp1a_trial_118_colour2_distractors9_l.png', 'path': 'images/exp1a_trial_118_colour2_distractors9_l.png'},
    {'name': 'images/exp1b_trial_64_colour1_distractors1_r.png', 'path': 'images/exp1b_trial_64_colour1_distractors1_r.png'},
    {'name': 'images/exp2b_trial_106_colour3_distractors1_r.png', 'path': 'images/exp2b_trial_106_colour3_distractors1_r.png'},
    {'name': 'images/exp2c_trial_35_colour1_distractors19_r.png', 'path': 'images/exp2c_trial_35_colour1_distractors19_r.png'},
    {'name': 'images/exp2a_trial_199_colour2_distractors9_r.png', 'path': 'images/exp2a_trial_199_colour2_distractors9_r.png'},
    {'name': 'images/exp1b_trial_317_colour3_distractors31_l.png', 'path': 'images/exp1b_trial_317_colour3_distractors31_l.png'},
    {'name': 'images/exp2b_trial_112_colour1_distractors4_l.png', 'path': 'images/exp2b_trial_112_colour1_distractors4_l.png'},
    {'name': 'images/exp2b_trial_227_colour1_distractors19_r.png', 'path': 'images/exp2b_trial_227_colour1_distractors19_r.png'},
    {'name': 'images/exp2b_trial_312_colour2_distractors31_l.png', 'path': 'images/exp2b_trial_312_colour2_distractors31_l.png'},
    {'name': 'images/exp1b_trial_219_colour3_distractors9_l.png', 'path': 'images/exp1b_trial_219_colour3_distractors9_l.png'},
    {'name': 'images/exp2a_trial_264_colour2_distractors19_r.png', 'path': 'images/exp2a_trial_264_colour2_distractors19_r.png'},
    {'name': 'Practice arrays/exp1a_trial_18_colour1_distractors19_l.png', 'path': 'Practice arrays/exp1a_trial_18_colour1_distractors19_l.png'},
    {'name': 'images/exp2c_trial_311_colour2_distractors19_l.png', 'path': 'images/exp2c_trial_311_colour2_distractors19_l.png'},
    {'name': 'images/exp2b_trial_10_colour3_distractors1_r.png', 'path': 'images/exp2b_trial_10_colour3_distractors1_r.png'},
    {'name': 'images/exp1a_trial_223_colour0_distractors0_l.png', 'path': 'images/exp1a_trial_223_colour0_distractors0_l.png'},
    {'name': 'images/exp1a_trial_132_colour1_distractors31_r.png', 'path': 'images/exp1a_trial_132_colour1_distractors31_r.png'},
    {'name': 'images/exp1b_trial_267_colour3_distractors4_r.png', 'path': 'images/exp1b_trial_267_colour3_distractors4_r.png'},
    {'name': 'images/exp1b_trial_145_colour1_distractors9_l.png', 'path': 'images/exp1b_trial_145_colour1_distractors9_l.png'},
    {'name': 'images/exp2c_trial_240_colour1_distractors4_l.png', 'path': 'images/exp2c_trial_240_colour1_distractors4_l.png'},
    {'name': 'images/exp2b_trial_308_colour2_distractors1_l.png', 'path': 'images/exp2b_trial_308_colour2_distractors1_l.png'},
    {'name': 'images/exp1b_trial_268_colour3_distractors9_r.png', 'path': 'images/exp1b_trial_268_colour3_distractors9_r.png'},
    {'name': 'images/exp2a_trial_51_colour1_distractors31_l.png', 'path': 'images/exp2a_trial_51_colour1_distractors31_l.png'},
    {'name': 'images/exp1b_trial_43_colour3_distractors4_r.png', 'path': 'images/exp1b_trial_43_colour3_distractors4_r.png'},
    {'name': 'images/exp2c_trial_283_colour3_distractors9_l.png', 'path': 'images/exp2c_trial_283_colour3_distractors9_l.png'},
    {'name': 'images/exp2c_trial_151_colour2_distractors19_l.png', 'path': 'images/exp2c_trial_151_colour2_distractors19_l.png'},
    {'name': 'images/exp2a_trial_66_colour1_distractors9_r.png', 'path': 'images/exp2a_trial_66_colour1_distractors9_r.png'},
    {'name': 'images/exp2c_trial_73_colour2_distractors31_r.png', 'path': 'images/exp2c_trial_73_colour2_distractors31_r.png'},
    {'name': 'images/exp1a_trial_275_colour1_distractors31_l.png', 'path': 'images/exp1a_trial_275_colour1_distractors31_l.png'},
    {'name': 'images/exp1b_trial_73_colour2_distractors31_r.png', 'path': 'images/exp1b_trial_73_colour2_distractors31_r.png'},
    {'name': 'images/exp1b_trial_61_colour3_distractors31_l.png', 'path': 'images/exp1b_trial_61_colour3_distractors31_l.png'},
    {'name': 'images/exp2a_trial_138_colour3_distractors1_r.png', 'path': 'images/exp2a_trial_138_colour3_distractors1_r.png'},
    {'name': 'images/exp1b_trial_295_colour2_distractors9_r.png', 'path': 'images/exp1b_trial_295_colour2_distractors9_r.png'},
    {'name': 'images/exp2c_trial_247_colour2_distractors19_l.png', 'path': 'images/exp2c_trial_247_colour2_distractors19_l.png'},
    {'name': 'images/exp1b_trial_7_colour2_distractors9_r.png', 'path': 'images/exp1b_trial_7_colour2_distractors9_r.png'},
    {'name': 'images/exp2a_trial_169_colour2_distractors31_r.png', 'path': 'images/exp2a_trial_169_colour2_distractors31_r.png'},
    {'name': 'images/exp2b_trial_9_colour2_distractors31_r.png', 'path': 'images/exp2b_trial_9_colour2_distractors31_r.png'},
    {'name': 'images/exp1a_trial_65_colour1_distractors4_r.png', 'path': 'images/exp1a_trial_65_colour1_distractors4_r.png'},
    {'name': 'images/exp2b_trial_217_colour3_distractors1_l.png', 'path': 'images/exp2b_trial_217_colour3_distractors1_l.png'},
    {'name': 'images/exp2c_trial_32_colour1_distractors1_r.png', 'path': 'images/exp2c_trial_32_colour1_distractors1_r.png'},
    {'name': 'images/exp2a_trial_57_colour3_distractors1_l.png', 'path': 'images/exp2a_trial_57_colour3_distractors1_l.png'},
    {'name': 'images/exp2b_trial_69_colour2_distractors1_r.png', 'path': 'images/exp2b_trial_69_colour2_distractors1_r.png'},
    {'name': 'images/exp2a_trial_55_colour2_distractors19_l.png', 'path': 'images/exp2a_trial_55_colour2_distractors19_l.png'},
    {'name': 'images/exp2a_trial_266_colour3_distractors1_r.png', 'path': 'images/exp2a_trial_266_colour3_distractors1_r.png'},
    {'name': 'images/exp2b_trial_264_colour2_distractors19_r.png', 'path': 'images/exp2b_trial_264_colour2_distractors19_r.png'},
    {'name': 'images/exp1b_trial_263_colour2_distractors9_r.png', 'path': 'images/exp1b_trial_263_colour2_distractors9_r.png'},
    {'name': 'images/exp2b_trial_210_colour1_distractors19_l.png', 'path': 'images/exp2b_trial_210_colour1_distractors19_l.png'},
    {'name': 'images/exp2c_trial_169_colour2_distractors31_r.png', 'path': 'images/exp2c_trial_169_colour2_distractors31_r.png'},
    {'name': 'images/exp1a_trial_180_colour2_distractors1_l.png', 'path': 'images/exp1a_trial_180_colour2_distractors1_l.png'},
    {'name': 'images/exp1b_trial_118_colour2_distractors9_l.png', 'path': 'images/exp1b_trial_118_colour2_distractors9_l.png'},
    {'name': 'images/exp2a_trial_134_colour2_distractors4_r.png', 'path': 'images/exp2a_trial_134_colour2_distractors4_r.png'},
    {'name': 'images/exp2c_trial_66_colour1_distractors9_r.png', 'path': 'images/exp2c_trial_66_colour1_distractors9_r.png'},
    {'name': 'images/exp1b_trial_196_colour1_distractors31_r.png', 'path': 'images/exp1b_trial_196_colour1_distractors31_r.png'},
    {'name': 'images/exp1a_trial_181_colour2_distractors4_l.png', 'path': 'images/exp1a_trial_181_colour2_distractors4_l.png'},
    {'name': 'images/exp1b_trial_167_colour2_distractors9_r.png', 'path': 'images/exp1b_trial_167_colour2_distractors9_r.png'},
    {'name': 'images/exp1a_trial_103_colour2_distractors9_r.png', 'path': 'images/exp1a_trial_103_colour2_distractors9_r.png'},
    {'name': 'images/exp1a_trial_166_colour2_distractors4_r.png', 'path': 'images/exp1a_trial_166_colour2_distractors4_r.png'},
    {'name': 'images/exp2b_trial_293_colour2_distractors1_r.png', 'path': 'images/exp2b_trial_293_colour2_distractors1_r.png'},
    {'name': 'images/exp2c_trial_273_colour1_distractors9_l.png', 'path': 'images/exp2c_trial_273_colour1_distractors9_l.png'},
    {'name': 'images/exp1a_trial_217_colour3_distractors1_l.png', 'path': 'images/exp1a_trial_217_colour3_distractors1_l.png'},
    {'name': 'images/exp2c_trial_252_colour3_distractors19_l.png', 'path': 'images/exp2c_trial_252_colour3_distractors19_l.png'},
    {'name': 'images/exp1a_trial_293_colour2_distractors1_r.png', 'path': 'images/exp1a_trial_293_colour2_distractors1_r.png'},
    {'name': 'images/exp2b_trial_97_colour1_distractors4_r.png', 'path': 'images/exp2b_trial_97_colour1_distractors4_r.png'},
    {'name': 'images/exp1b_trial_206_colour3_distractors31_r.png', 'path': 'images/exp1b_trial_206_colour3_distractors31_r.png'},
    {'name': 'images/exp2c_trial_115_colour1_distractors31_l.png', 'path': 'images/exp2c_trial_115_colour1_distractors31_l.png'},
    {'name': 'image_stimuli_practice.xlsx', 'path': 'image_stimuli_practice.xlsx'},
    {'name': 'images/exp2a_trial_46_colour3_distractors31_r.png', 'path': 'images/exp2a_trial_46_colour3_distractors31_r.png'},
    {'name': 'images/exp2b_trial_72_colour2_distractors19_r.png', 'path': 'images/exp2b_trial_72_colour2_distractors19_r.png'},
    {'name': 'images/exp1b_trial_293_colour2_distractors1_r.png', 'path': 'images/exp1b_trial_293_colour2_distractors1_r.png'},
    {'name': 'images/exp1b_trial_306_colour1_distractors19_l.png', 'path': 'images/exp1b_trial_306_colour1_distractors19_l.png'},
    {'name': 'images/exp2c_trial_83_colour1_distractors31_l.png', 'path': 'images/exp2c_trial_83_colour1_distractors31_l.png'},
    {'name': 'images/exp1b_trial_39_colour2_distractors9_r.png', 'path': 'images/exp1b_trial_39_colour2_distractors9_r.png'},
    {'name': 'images/exp1b_trial_175_colour1_distractors1_l.png', 'path': 'images/exp1b_trial_175_colour1_distractors1_l.png'},
    {'name': 'images/exp2a_trial_184_colour2_distractors31_l.png', 'path': 'images/exp2a_trial_184_colour2_distractors31_l.png'},
    {'name': 'images/exp2a_trial_114_colour1_distractors19_l.png', 'path': 'images/exp2a_trial_114_colour1_distractors19_l.png'},
    {'name': 'images/exp1b_trial_226_colour1_distractors9_r.png', 'path': 'images/exp1b_trial_226_colour1_distractors9_r.png'},
    {'name': 'images/exp1b_trial_135_colour2_distractors9_r.png', 'path': 'images/exp1b_trial_135_colour2_distractors9_r.png'},
    {'name': 'images/exp2b_trial_118_colour2_distractors9_l.png', 'path': 'images/exp2b_trial_118_colour2_distractors9_l.png'},
    {'name': 'images/exp2b_trial_266_colour3_distractors1_r.png', 'path': 'images/exp2b_trial_266_colour3_distractors1_r.png'},
    {'name': 'images/exp1a_trial_145_colour1_distractors9_l.png', 'path': 'images/exp1a_trial_145_colour1_distractors9_l.png'},
    {'name': 'images/exp1b_trial_130_colour1_distractors9_r.png', 'path': 'images/exp1b_trial_130_colour1_distractors9_r.png'},
    {'name': 'images/exp2c_trial_180_colour2_distractors1_l.png', 'path': 'images/exp2c_trial_180_colour2_distractors1_l.png'},
    {'name': 'images/exp1b_trial_102_colour2_distractors4_r.png', 'path': 'images/exp1b_trial_102_colour2_distractors4_r.png'},
    {'name': 'images/exp2a_trial_95_colour0_distractors0_l.png', 'path': 'images/exp2a_trial_95_colour0_distractors0_l.png'},
    {'name': 'images/exp1a_trial_108_colour3_distractors9_r.png', 'path': 'images/exp1a_trial_108_colour3_distractors9_r.png'},
    {'name': 'images/exp1b_trial_171_colour3_distractors4_r.png', 'path': 'images/exp1b_trial_171_colour3_distractors4_r.png'},
    {'name': 'images/exp2a_trial_243_colour1_distractors31_l.png', 'path': 'images/exp2a_trial_243_colour1_distractors31_l.png'},
    {'name': 'images/exp2b_trial_4_colour1_distractors31_r.png', 'path': 'images/exp2b_trial_4_colour1_distractors31_r.png'},
    {'name': 'images/exp2a_trial_303_colour1_distractors1_l.png', 'path': 'images/exp2a_trial_303_colour1_distractors1_l.png'},
    {'name': 'images/exp1a_trial_80_colour1_distractors4_l.png', 'path': 'images/exp1a_trial_80_colour1_distractors4_l.png'},
    {'name': 'images/exp1a_trial_60_colour3_distractors19_l.png', 'path': 'images/exp1a_trial_60_colour3_distractors19_l.png'},
    {'name': 'images/exp2a_trial_269_colour3_distractors19_r.png', 'path': 'images/exp2a_trial_269_colour3_distractors19_r.png'},
    {'name': 'images/exp2b_trial_141_colour3_distractors19_r.png', 'path': 'images/exp2b_trial_141_colour3_distractors19_r.png'},
    {'name': 'images/exp1b_trial_40_colour2_distractors19_r.png', 'path': 'images/exp1b_trial_40_colour2_distractors19_r.png'},
    {'name': 'images/exp2c_trial_44_colour3_distractors9_r.png', 'path': 'images/exp2c_trial_44_colour3_distractors9_r.png'},
    {'name': 'images/exp1b_trial_260_colour1_distractors31_r.png', 'path': 'images/exp1b_trial_260_colour1_distractors31_r.png'},
    {'name': 'images/exp2c_trial_113_colour1_distractors9_l.png', 'path': 'images/exp2c_trial_113_colour1_distractors9_l.png'},
    {'name': 'images/exp1a_trial_29_colour3_distractors31_l.png', 'path': 'images/exp1a_trial_29_colour3_distractors31_l.png'},
    {'name': 'images/exp1a_trial_245_colour2_distractors4_l.png', 'path': 'images/exp1a_trial_245_colour2_distractors4_l.png'},
    {'name': 'images/exp1a_trial_142_colour3_distractors31_r.png', 'path': 'images/exp1a_trial_142_colour3_distractors31_r.png'},
    {'name': 'images/exp2b_trial_191_colour0_distractors0_l.png', 'path': 'images/exp2b_trial_191_colour0_distractors0_l.png'},
    {'name': 'images/exp2b_trial_34_colour1_distractors9_r.png', 'path': 'images/exp2b_trial_34_colour1_distractors9_r.png'},
    {'name': 'images/exp2b_trial_216_colour2_distractors31_l.png', 'path': 'images/exp2b_trial_216_colour2_distractors31_l.png'},
    {'name': 'images/exp1a_trial_22_colour2_distractors9_l.png', 'path': 'images/exp1a_trial_22_colour2_distractors9_l.png'},
    {'name': 'images/exp1b_trial_243_colour1_distractors31_l.png', 'path': 'images/exp1b_trial_243_colour1_distractors31_l.png'},
    {'name': 'images/exp2b_trial_71_colour2_distractors9_r.png', 'path': 'images/exp2b_trial_71_colour2_distractors9_r.png'},
    {'name': 'images/exp1b_trial_107_colour3_distractors4_r.png', 'path': 'images/exp1b_trial_107_colour3_distractors4_r.png'},
    {'name': 'images/exp1a_trial_284_colour3_distractors19_l.png', 'path': 'images/exp1a_trial_284_colour3_distractors19_l.png'},
    {'name': 'images/exp1a_trial_201_colour2_distractors31_r.png', 'path': 'images/exp1a_trial_201_colour2_distractors31_r.png'},
    {'name': 'images/exp2a_trial_201_colour2_distractors31_r.png', 'path': 'images/exp2a_trial_201_colour2_distractors31_r.png'},
    {'name': 'images/exp2c_trial_107_colour3_distractors4_r.png', 'path': 'images/exp2c_trial_107_colour3_distractors4_r.png'},
    {'name': 'images/exp2c_trial_3_colour1_distractors19_r.png', 'path': 'images/exp2c_trial_3_colour1_distractors19_r.png'},
    {'name': 'images/exp1b_trial_139_colour3_distractors4_r.png', 'path': 'images/exp1b_trial_139_colour3_distractors4_r.png'},
    {'name': 'images/exp2c_trial_103_colour2_distractors9_r.png', 'path': 'images/exp2c_trial_103_colour2_distractors9_r.png'},
    {'name': 'images/exp1b_trial_138_colour3_distractors1_r.png', 'path': 'images/exp1b_trial_138_colour3_distractors1_r.png'},
    {'name': 'images/exp2c_trial_111_colour1_distractors1_l.png', 'path': 'images/exp2c_trial_111_colour1_distractors1_l.png'},
    {'name': 'images/exp2a_trial_198_colour2_distractors4_r.png', 'path': 'images/exp2a_trial_198_colour2_distractors4_r.png'},
    {'name': 'images/exp2b_trial_108_colour3_distractors9_r.png', 'path': 'images/exp2b_trial_108_colour3_distractors9_r.png'},
    {'name': 'images/exp1b_trial_191_colour0_distractors0_l.png', 'path': 'images/exp1b_trial_191_colour0_distractors0_l.png'},
    {'name': 'images/exp1a_trial_126_colour0_distractors0_r.png', 'path': 'images/exp1a_trial_126_colour0_distractors0_r.png'},
    {'name': 'images/exp1b_trial_262_colour2_distractors4_r.png', 'path': 'images/exp1b_trial_262_colour2_distractors4_r.png'},
    {'name': 'images/exp2c_trial_288_colour1_distractors1_r.png', 'path': 'images/exp2c_trial_288_colour1_distractors1_r.png'},
    {'name': 'images/exp2c_trial_224_colour1_distractors1_r.png', 'path': 'images/exp2c_trial_224_colour1_distractors1_r.png'},
    {'name': 'images/exp1b_trial_234_colour3_distractors1_r.png', 'path': 'images/exp1b_trial_234_colour3_distractors1_r.png'},
    {'name': 'images/exp2a_trial_209_colour1_distractors9_l.png', 'path': 'images/exp2a_trial_209_colour1_distractors9_l.png'},
    {'name': 'images/exp2a_trial_308_colour2_distractors1_l.png', 'path': 'images/exp2a_trial_308_colour2_distractors1_l.png'},
    {'name': 'images/exp2b_trial_173_colour3_distractors19_r.png', 'path': 'images/exp2b_trial_173_colour3_distractors19_r.png'},
    {'name': 'images/exp2c_trial_108_colour3_distractors9_r.png', 'path': 'images/exp2c_trial_108_colour3_distractors9_r.png'},
    {'name': 'images/exp2c_trial_47_colour1_distractors1_l.png', 'path': 'images/exp2c_trial_47_colour1_distractors1_l.png'},
    {'name': 'images/exp2c_trial_50_colour1_distractors19_l.png', 'path': 'images/exp2c_trial_50_colour1_distractors19_l.png'},
    {'name': 'images/exp2c_trial_10_colour3_distractors1_r.png', 'path': 'images/exp2c_trial_10_colour3_distractors1_r.png'},
    {'name': 'images/exp2c_trial_55_colour2_distractors19_l.png', 'path': 'images/exp2c_trial_55_colour2_distractors19_l.png'},
    {'name': 'images/exp2a_trial_197_colour2_distractors1_r.png', 'path': 'images/exp2a_trial_197_colour2_distractors1_r.png'},
    {'name': 'images/exp2b_trial_255_colour0_distractors0_l.png', 'path': 'images/exp2b_trial_255_colour0_distractors0_l.png'},
    {'name': 'images/exp1b_trial_46_colour3_distractors31_r.png', 'path': 'images/exp1b_trial_46_colour3_distractors31_r.png'},
    {'name': 'images/exp2a_trial_227_colour1_distractors19_r.png', 'path': 'images/exp2a_trial_227_colour1_distractors19_r.png'},
    {'name': 'images/exp1a_trial_9_colour2_distractors31_r.png', 'path': 'images/exp1a_trial_9_colour2_distractors31_r.png'},
    {'name': 'images/exp1b_trial_199_colour2_distractors9_r.png', 'path': 'images/exp1b_trial_199_colour2_distractors9_r.png'},
    {'name': 'images/exp2a_trial_6_colour2_distractors4_r.png', 'path': 'images/exp2a_trial_6_colour2_distractors4_r.png'},
    {'name': 'images/exp2a_trial_117_colour2_distractors4_l.png', 'path': 'images/exp2a_trial_117_colour2_distractors4_l.png'},
    {'name': 'images/exp1b_trial_244_colour2_distractors1_l.png', 'path': 'images/exp1b_trial_244_colour2_distractors1_l.png'},
    {'name': 'images/exp2c_trial_154_colour3_distractors4_l.png', 'path': 'images/exp2c_trial_154_colour3_distractors4_l.png'},
    {'name': 'images/exp2c_trial_242_colour1_distractors19_l.png', 'path': 'images/exp2c_trial_242_colour1_distractors19_l.png'},
    {'name': 'images/exp1b_trial_41_colour2_distractors31_r.png', 'path': 'images/exp1b_trial_41_colour2_distractors31_r.png'},
    {'name': 'images/exp2b_trial_163_colour1_distractors19_r.png', 'path': 'images/exp2b_trial_163_colour1_distractors19_r.png'},
    {'name': 'images/exp1b_trial_287_colour0_distractors0_l.png', 'path': 'images/exp1b_trial_287_colour0_distractors0_l.png'},
    {'name': 'images/exp1b_trial_3_colour1_distractors19_r.png', 'path': 'images/exp1b_trial_3_colour1_distractors19_r.png'},
    {'name': 'images/exp1b_trial_280_colour2_distractors31_l.png', 'path': 'images/exp1b_trial_280_colour2_distractors31_l.png'},
    {'name': 'images/exp2c_trial_206_colour3_distractors31_r.png', 'path': 'images/exp2c_trial_206_colour3_distractors31_r.png'},
    {'name': 'images/exp2a_trial_34_colour1_distractors9_r.png', 'path': 'images/exp2a_trial_34_colour1_distractors9_r.png'},
    {'name': 'images/exp2c_trial_60_colour3_distractors19_l.png', 'path': 'images/exp2c_trial_60_colour3_distractors19_l.png'},
    {'name': 'images/exp2b_trial_89_colour3_distractors1_l.png', 'path': 'images/exp2b_trial_89_colour3_distractors1_l.png'},
    {'name': 'images/exp2a_trial_42_colour3_distractors1_r.png', 'path': 'images/exp2a_trial_42_colour3_distractors1_r.png'},
    {'name': 'images/exp2c_trial_63_colour0_distractors0_l.png', 'path': 'images/exp2c_trial_63_colour0_distractors0_l.png'},
    {'name': 'images/exp2c_trial_193_colour1_distractors4_r.png', 'path': 'images/exp2c_trial_193_colour1_distractors4_r.png'},
    {'name': 'images/exp2a_trial_178_colour1_distractors19_l.png', 'path': 'images/exp2a_trial_178_colour1_distractors19_l.png'},
    {'name': 'images/exp1b_trial_89_colour3_distractors1_l.png', 'path': 'images/exp1b_trial_89_colour3_distractors1_l.png'},
    {'name': 'images/exp2a_trial_278_colour2_distractors9_l.png', 'path': 'images/exp2a_trial_278_colour2_distractors9_l.png'},
    {'name': 'images/exp1b_trial_131_colour1_distractors19_r.png', 'path': 'images/exp1b_trial_131_colour1_distractors19_r.png'},
    {'name': 'images/exp1a_trial_153_colour3_distractors1_l.png', 'path': 'images/exp1a_trial_153_colour3_distractors1_l.png'},
    {'name': 'images/exp1a_trial_305_colour1_distractors9_l.png', 'path': 'images/exp1a_trial_305_colour1_distractors9_l.png'},
    {'name': 'images/exp2c_trial_65_colour1_distractors4_r.png', 'path': 'images/exp2c_trial_65_colour1_distractors4_r.png'},
    {'name': 'images/exp1a_trial_240_colour1_distractors4_l.png', 'path': 'images/exp1a_trial_240_colour1_distractors4_l.png'},
    {'name': 'images/exp2a_trial_221_colour3_distractors31_l.png', 'path': 'images/exp2a_trial_221_colour3_distractors31_l.png'},
    {'name': 'images/exp1a_trial_110_colour3_distractors31_r.png', 'path': 'images/exp1a_trial_110_colour3_distractors31_r.png'},
    {'name': 'images/exp2b_trial_153_colour3_distractors1_l.png', 'path': 'images/exp2b_trial_153_colour3_distractors1_l.png'},
    {'name': 'images/exp2a_trial_63_colour0_distractors0_l.png', 'path': 'images/exp2a_trial_63_colour0_distractors0_l.png'},
    {'name': 'images/exp2a_trial_110_colour3_distractors31_r.png', 'path': 'images/exp2a_trial_110_colour3_distractors31_r.png'},
    {'name': 'images/exp2a_trial_271_colour1_distractors1_l.png', 'path': 'images/exp2a_trial_271_colour1_distractors1_l.png'},
    {'name': 'images/exp2b_trial_151_colour2_distractors19_l.png', 'path': 'images/exp2b_trial_151_colour2_distractors19_l.png'},
    {'name': 'images/exp1b_trial_115_colour1_distractors31_l.png', 'path': 'images/exp1b_trial_115_colour1_distractors31_l.png'},
    {'name': 'images/exp1a_trial_227_colour1_distractors19_r.png', 'path': 'images/exp1a_trial_227_colour1_distractors19_r.png'},
    {'name': 'images/exp1a_trial_171_colour3_distractors4_r.png', 'path': 'images/exp1a_trial_171_colour3_distractors4_r.png'},
    {'name': 'images/exp1a_trial_127_colour0_distractors0_l.png', 'path': 'images/exp1a_trial_127_colour0_distractors0_l.png'},
    {'name': 'images/exp2a_trial_235_colour3_distractors4_r.png', 'path': 'images/exp2a_trial_235_colour3_distractors4_r.png'},
    {'name': 'images/exp2b_trial_167_colour2_distractors9_r.png', 'path': 'images/exp2b_trial_167_colour2_distractors9_r.png'},
    {'name': 'images/exp1b_trial_103_colour2_distractors9_r.png', 'path': 'images/exp1b_trial_103_colour2_distractors9_r.png'},
    {'name': 'images/exp2c_trial_255_colour0_distractors0_l.png', 'path': 'images/exp2c_trial_255_colour0_distractors0_l.png'},
    {'name': 'images/exp1a_trial_312_colour2_distractors31_l.png', 'path': 'images/exp1a_trial_312_colour2_distractors31_l.png'},
    {'name': 'images/exp2b_trial_281_colour3_distractors1_l.png', 'path': 'images/exp2b_trial_281_colour3_distractors1_l.png'},
    {'name': 'images/exp1b_trial_218_colour3_distractors4_l.png', 'path': 'images/exp1b_trial_218_colour3_distractors4_l.png'},
    {'name': 'images/exp1b_trial_69_colour2_distractors1_r.png', 'path': 'images/exp1b_trial_69_colour2_distractors1_r.png'},
    {'name': 'images/exp1b_trial_259_colour1_distractors19_r.png', 'path': 'images/exp1b_trial_259_colour1_distractors19_r.png'},
    {'name': 'images/exp2a_trial_224_colour1_distractors1_r.png', 'path': 'images/exp2a_trial_224_colour1_distractors1_r.png'},
    {'name': 'images/exp2c_trial_212_colour2_distractors1_l.png', 'path': 'images/exp2c_trial_212_colour2_distractors1_l.png'},
    {'name': 'images/exp1b_trial_313_colour3_distractors1_l.png', 'path': 'images/exp1b_trial_313_colour3_distractors1_l.png'},
    {'name': 'images/exp2a_trial_17_colour1_distractors9_l.png', 'path': 'images/exp2a_trial_17_colour1_distractors9_l.png'},
    {'name': 'images/exp1b_trial_291_colour1_distractors19_r.png', 'path': 'images/exp1b_trial_291_colour1_distractors19_r.png'},
    {'name': 'images/exp2a_trial_126_colour0_distractors0_r.png', 'path': 'images/exp2a_trial_126_colour0_distractors0_r.png'},
    {'name': 'images/exp2b_trial_80_colour1_distractors4_l.png', 'path': 'images/exp2b_trial_80_colour1_distractors4_l.png'},
    {'name': 'images/exp2c_trial_304_colour1_distractors4_l.png', 'path': 'images/exp2c_trial_304_colour1_distractors4_l.png'},
    {'name': 'images/exp1b_trial_142_colour3_distractors31_r.png', 'path': 'images/exp1b_trial_142_colour3_distractors31_r.png'},
    {'name': 'images/exp2b_trial_201_colour2_distractors31_r.png', 'path': 'images/exp2b_trial_201_colour2_distractors31_r.png'},
    {'name': 'images/exp1b_trial_296_colour2_distractors19_r.png', 'path': 'images/exp1b_trial_296_colour2_distractors19_r.png'},
    {'name': 'images/exp1a_trial_164_colour1_distractors31_r.png', 'path': 'images/exp1a_trial_164_colour1_distractors31_r.png'},
    {'name': 'images/exp2a_trial_252_colour3_distractors19_l.png', 'path': 'images/exp2a_trial_252_colour3_distractors19_l.png'},
    {'name': 'images/exp1a_trial_21_colour2_distractors4_l.png', 'path': 'images/exp1a_trial_21_colour2_distractors4_l.png'},
    {'name': 'images/exp2c_trial_270_colour3_distractors31_r.png', 'path': 'images/exp2c_trial_270_colour3_distractors31_r.png'},
    {'name': 'images/exp2b_trial_215_colour2_distractors19_l.png', 'path': 'images/exp2b_trial_215_colour2_distractors19_l.png'},
    {'name': 'images/exp2b_trial_66_colour1_distractors9_r.png', 'path': 'images/exp2b_trial_66_colour1_distractors9_r.png'},
    {'name': 'images/exp2a_trial_89_colour3_distractors1_l.png', 'path': 'images/exp2a_trial_89_colour3_distractors1_l.png'},
    {'name': 'images/exp2c_trial_230_colour2_distractors4_r.png', 'path': 'images/exp2c_trial_230_colour2_distractors4_r.png'},
    {'name': 'images/exp2a_trial_59_colour3_distractors9_l.png', 'path': 'images/exp2a_trial_59_colour3_distractors9_l.png'},
    {'name': 'images/exp2c_trial_293_colour2_distractors1_r.png', 'path': 'images/exp2c_trial_293_colour2_distractors1_r.png'},
    {'name': 'images/exp2a_trial_215_colour2_distractors19_l.png', 'path': 'images/exp2a_trial_215_colour2_distractors19_l.png'},
    {'name': 'images/exp2a_trial_319_colour0_distractors0_l.png', 'path': 'images/exp2a_trial_319_colour0_distractors0_l.png'},
    {'name': 'images/exp1b_trial_58_colour3_distractors4_l.png', 'path': 'images/exp1b_trial_58_colour3_distractors4_l.png'},
    {'name': 'images/exp2b_trial_160_colour1_distractors1_r.png', 'path': 'images/exp2b_trial_160_colour1_distractors1_r.png'},
    {'name': 'images/exp1a_trial_33_colour1_distractors4_r.png', 'path': 'images/exp1a_trial_33_colour1_distractors4_r.png'},
    {'name': 'images/exp2a_trial_38_colour2_distractors4_r.png', 'path': 'images/exp2a_trial_38_colour2_distractors4_r.png'},
    {'name': 'images/exp2a_trial_116_colour2_distractors1_l.png', 'path': 'images/exp2a_trial_116_colour2_distractors1_l.png'},
    {'name': 'images/exp2b_trial_237_colour3_distractors19_r.png', 'path': 'images/exp2b_trial_237_colour3_distractors19_r.png'},
    {'name': 'images/exp2a_trial_204_colour3_distractors9_r.png', 'path': 'images/exp2a_trial_204_colour3_distractors9_r.png'},
    {'name': 'images/exp2a_trial_30_colour0_distractors0_r.png', 'path': 'images/exp2a_trial_30_colour0_distractors0_r.png'},
    {'name': 'images/exp1a_trial_51_colour1_distractors31_l.png', 'path': 'images/exp1a_trial_51_colour1_distractors31_l.png'},
    {'name': 'images/exp2c_trial_46_colour3_distractors31_r.png', 'path': 'images/exp2c_trial_46_colour3_distractors31_r.png'},
    {'name': 'images/exp2c_trial_40_colour2_distractors19_r.png', 'path': 'images/exp2c_trial_40_colour2_distractors19_r.png'},
    {'name': 'images/exp2c_trial_232_colour2_distractors19_r.png', 'path': 'images/exp2c_trial_232_colour2_distractors19_r.png'},
    {'name': 'images/exp1b_trial_90_colour3_distractors4_l.png', 'path': 'images/exp1b_trial_90_colour3_distractors4_l.png'},
    {'name': 'Practice arrays/exp1a_trial_7_colour2_distractors9_r.png', 'path': 'Practice arrays/exp1a_trial_7_colour2_distractors9_r.png'},
    {'name': 'images/exp1a_trial_206_colour3_distractors31_r.png', 'path': 'images/exp1a_trial_206_colour3_distractors31_r.png'},
    {'name': 'images/exp2a_trial_287_colour0_distractors0_l.png', 'path': 'images/exp2a_trial_287_colour0_distractors0_l.png'},
    {'name': 'images/exp2b_trial_165_colour2_distractors1_r.png', 'path': 'images/exp2b_trial_165_colour2_distractors1_r.png'},
    {'name': 'images/exp2c_trial_142_colour3_distractors31_r.png', 'path': 'images/exp2c_trial_142_colour3_distractors31_r.png'},
    {'name': 'images/exp2c_trial_8_colour2_distractors19_r.png', 'path': 'images/exp2c_trial_8_colour2_distractors19_r.png'},
    {'name': 'images/exp2c_trial_167_colour2_distractors9_r.png', 'path': 'images/exp2c_trial_167_colour2_distractors9_r.png'},
    {'name': 'images/exp2c_trial_181_colour2_distractors4_l.png', 'path': 'images/exp2c_trial_181_colour2_distractors4_l.png'},
    {'name': 'images/exp2c_trial_239_colour1_distractors1_l.png', 'path': 'images/exp2c_trial_239_colour1_distractors1_l.png'},
    {'name': 'images/exp1a_trial_14_colour3_distractors31_r.png', 'path': 'images/exp1a_trial_14_colour3_distractors31_r.png'},
    {'name': 'images/exp1a_trial_194_colour1_distractors9_r.png', 'path': 'images/exp1a_trial_194_colour1_distractors9_r.png'},
    {'name': 'images/exp2c_trial_241_colour1_distractors9_l.png', 'path': 'images/exp2c_trial_241_colour1_distractors9_l.png'},
    {'name': 'images/exp2a_trial_255_colour0_distractors0_l.png', 'path': 'images/exp2a_trial_255_colour0_distractors0_l.png'},
    {'name': 'images/exp2b_trial_154_colour3_distractors4_l.png', 'path': 'images/exp2b_trial_154_colour3_distractors4_l.png'},
    {'name': 'Practice arrays/exp1a_trial_16_colour1_distractors4_l.png', 'path': 'Practice arrays/exp1a_trial_16_colour1_distractors4_l.png'},
    {'name': 'images/exp2c_trial_267_colour3_distractors4_r.png', 'path': 'images/exp2c_trial_267_colour3_distractors4_r.png'},
    {'name': 'images/exp1a_trial_155_colour3_distractors9_l.png', 'path': 'images/exp1a_trial_155_colour3_distractors9_l.png'},
    {'name': 'images/exp1a_trial_303_colour1_distractors1_l.png', 'path': 'images/exp1a_trial_303_colour1_distractors1_l.png'},
    {'name': 'images/exp2c_trial_262_colour2_distractors4_r.png', 'path': 'images/exp2c_trial_262_colour2_distractors4_r.png'},
    {'name': 'images/exp1a_trial_247_colour2_distractors19_l.png', 'path': 'images/exp1a_trial_247_colour2_distractors19_l.png'},
    {'name': 'images/exp2b_trial_59_colour3_distractors9_l.png', 'path': 'images/exp2b_trial_59_colour3_distractors9_l.png'},
    {'name': 'images/exp2c_trial_190_colour0_distractors0_r.png', 'path': 'images/exp2c_trial_190_colour0_distractors0_r.png'},
    {'name': 'images/exp2a_trial_44_colour3_distractors9_r.png', 'path': 'images/exp2a_trial_44_colour3_distractors9_r.png'},
    {'name': 'images/exp2b_trial_300_colour3_distractors9_r.png', 'path': 'images/exp2b_trial_300_colour3_distractors9_r.png'},
    {'name': 'images/exp2a_trial_188_colour3_distractors19_l.png', 'path': 'images/exp2a_trial_188_colour3_distractors19_l.png'},
    {'name': 'images/exp1b_trial_1_colour1_distractors4_r.png', 'path': 'images/exp1b_trial_1_colour1_distractors4_r.png'},
    {'name': 'images/exp1b_trial_257_colour1_distractors4_r.png', 'path': 'images/exp1b_trial_257_colour1_distractors4_r.png'},
    {'name': 'images/exp1b_trial_19_colour1_distractors31_l.png', 'path': 'images/exp1b_trial_19_colour1_distractors31_l.png'},
    {'name': 'images/exp1b_trial_301_colour3_distractors19_r.png', 'path': 'images/exp1b_trial_301_colour3_distractors19_r.png'},
    {'name': 'images/exp1b_trial_284_colour3_distractors19_l.png', 'path': 'images/exp1b_trial_284_colour3_distractors19_l.png'},
    {'name': 'images/exp1a_trial_78_colour3_distractors31_r.png', 'path': 'images/exp1a_trial_78_colour3_distractors31_r.png'},
    {'name': 'images/exp2a_trial_273_colour1_distractors9_l.png', 'path': 'images/exp2a_trial_273_colour1_distractors9_l.png'},
    {'name': 'images/exp2c_trial_109_colour3_distractors19_r.png', 'path': 'images/exp2c_trial_109_colour3_distractors19_r.png'},
    {'name': 'images/exp1a_trial_92_colour3_distractors19_l.png', 'path': 'images/exp1a_trial_92_colour3_distractors19_l.png'},
    {'name': 'images/exp2c_trial_183_colour2_distractors19_l.png', 'path': 'images/exp2c_trial_183_colour2_distractors19_l.png'},
    {'name': 'images/exp1a_trial_313_colour3_distractors1_l.png', 'path': 'images/exp1a_trial_313_colour3_distractors1_l.png'},
    {'name': 'images/exp2c_trial_20_colour2_distractors1_l.png', 'path': 'images/exp2c_trial_20_colour2_distractors1_l.png'},
    {'name': 'images/exp2c_trial_248_colour2_distractors31_l.png', 'path': 'images/exp2c_trial_248_colour2_distractors31_l.png'},
    {'name': 'images/exp2c_trial_74_colour3_distractors1_r.png', 'path': 'images/exp2c_trial_74_colour3_distractors1_r.png'},
    {'name': 'images/exp1b_trial_83_colour1_distractors31_l.png', 'path': 'images/exp1b_trial_83_colour1_distractors31_l.png'},
    {'name': 'images/exp1a_trial_120_colour2_distractors31_l.png', 'path': 'images/exp1a_trial_120_colour2_distractors31_l.png'},
    {'name': 'images/exp1b_trial_87_colour2_distractors19_l.png', 'path': 'images/exp1b_trial_87_colour2_distractors19_l.png'},
    {'name': 'images/exp2a_trial_247_colour2_distractors19_l.png', 'path': 'images/exp2a_trial_247_colour2_distractors19_l.png'},
    {'name': 'images/exp1a_trial_38_colour2_distractors4_r.png', 'path': 'images/exp1a_trial_38_colour2_distractors4_r.png'},
    {'name': 'images/exp2c_trial_265_colour2_distractors31_r.png', 'path': 'images/exp2c_trial_265_colour2_distractors31_r.png'},
    {'name': 'images/exp2c_trial_290_colour1_distractors9_r.png', 'path': 'images/exp2c_trial_290_colour1_distractors9_r.png'},
    {'name': 'images/exp2b_trial_251_colour3_distractors9_l.png', 'path': 'images/exp2b_trial_251_colour3_distractors9_l.png'},
    {'name': 'images/exp2b_trial_233_colour2_distractors31_r.png', 'path': 'images/exp2b_trial_233_colour2_distractors31_r.png'},
    {'name': 'images/exp1b_trial_67_colour1_distractors19_r.png', 'path': 'images/exp1b_trial_67_colour1_distractors19_r.png'},
    {'name': 'images/exp1a_trial_259_colour1_distractors19_r.png', 'path': 'images/exp1a_trial_259_colour1_distractors19_r.png'},
    {'name': 'images/exp1b_trial_68_colour1_distractors31_r.png', 'path': 'images/exp1b_trial_68_colour1_distractors31_r.png'},
    {'name': 'images/exp2c_trial_156_colour3_distractors19_l.png', 'path': 'images/exp2c_trial_156_colour3_distractors19_l.png'},
    {'name': 'images/exp2b_trial_287_colour0_distractors0_l.png', 'path': 'images/exp2b_trial_287_colour0_distractors0_l.png'},
    {'name': 'images/exp1a_trial_144_colour1_distractors4_l.png', 'path': 'images/exp1a_trial_144_colour1_distractors4_l.png'},
    {'name': 'images/exp2c_trial_253_colour3_distractors31_l.png', 'path': 'images/exp2c_trial_253_colour3_distractors31_l.png'},
    {'name': 'images/exp2b_trial_26_colour3_distractors4_l.png', 'path': 'images/exp2b_trial_26_colour3_distractors4_l.png'},
    {'name': 'images/exp2b_trial_110_colour3_distractors31_r.png', 'path': 'images/exp2b_trial_110_colour3_distractors31_r.png'},
    {'name': 'images/exp2b_trial_208_colour1_distractors4_l.png', 'path': 'images/exp2b_trial_208_colour1_distractors4_l.png'},
    {'name': 'images/exp2a_trial_29_colour3_distractors31_l.png', 'path': 'images/exp2a_trial_29_colour3_distractors31_l.png'},
    {'name': 'images/exp2a_trial_286_colour0_distractors0_r.png', 'path': 'images/exp2a_trial_286_colour0_distractors0_r.png'},
    {'name': 'images/exp2c_trial_276_colour2_distractors1_l.png', 'path': 'images/exp2c_trial_276_colour2_distractors1_l.png'},
    {'name': 'images/exp2b_trial_258_colour1_distractors9_r.png', 'path': 'images/exp2b_trial_258_colour1_distractors9_r.png'},
    {'name': 'images/exp2b_trial_198_colour2_distractors4_r.png', 'path': 'images/exp2b_trial_198_colour2_distractors4_r.png'},
    {'name': 'images/exp1a_trial_252_colour3_distractors19_l.png', 'path': 'images/exp1a_trial_252_colour3_distractors19_l.png'},
    {'name': 'images/exp2c_trial_12_colour3_distractors9_r.png', 'path': 'images/exp2c_trial_12_colour3_distractors9_r.png'},
    {'name': 'images/exp1a_trial_64_colour1_distractors1_r.png', 'path': 'images/exp1a_trial_64_colour1_distractors1_r.png'},
    {'name': 'images/exp1b_trial_127_colour0_distractors0_l.png', 'path': 'images/exp1b_trial_127_colour0_distractors0_l.png'},
    {'name': 'images/exp1a_trial_317_colour3_distractors31_l.png', 'path': 'images/exp1a_trial_317_colour3_distractors31_l.png'},
    {'name': 'images/exp1a_trial_23_colour2_distractors19_l.png', 'path': 'images/exp1a_trial_23_colour2_distractors19_l.png'},
    {'name': 'images/exp1a_trial_122_colour3_distractors4_l.png', 'path': 'images/exp1a_trial_122_colour3_distractors4_l.png'},
    {'name': 'images/exp2a_trial_129_colour1_distractors4_r.png', 'path': 'images/exp2a_trial_129_colour1_distractors4_r.png'},
    {'name': 'images/exp2c_trial_64_colour1_distractors1_r.png', 'path': 'images/exp2c_trial_64_colour1_distractors1_r.png'},
    {'name': 'images/exp2b_trial_273_colour1_distractors9_l.png', 'path': 'images/exp2b_trial_273_colour1_distractors9_l.png'},
    {'name': 'images/exp2b_trial_95_colour0_distractors0_l.png', 'path': 'images/exp2b_trial_95_colour0_distractors0_l.png'},
    {'name': 'images/exp2a_trial_219_colour3_distractors9_l.png', 'path': 'images/exp2a_trial_219_colour3_distractors9_l.png'},
    {'name': 'images/exp2a_trial_0_colour1_distractors1_r.png', 'path': 'images/exp2a_trial_0_colour1_distractors1_r.png'},
    {'name': 'images/exp2b_trial_79_colour1_distractors1_l.png', 'path': 'images/exp2b_trial_79_colour1_distractors1_l.png'},
    {'name': 'images/exp1b_trial_13_colour3_distractors19_r.png', 'path': 'images/exp1b_trial_13_colour3_distractors19_r.png'},
    {'name': 'images/exp2b_trial_239_colour1_distractors1_l.png', 'path': 'images/exp2b_trial_239_colour1_distractors1_l.png'},
    {'name': 'images/exp2b_trial_28_colour3_distractors19_l.png', 'path': 'images/exp2b_trial_28_colour3_distractors19_l.png'},
    {'name': 'images/exp2c_trial_285_colour3_distractors31_l.png', 'path': 'images/exp2c_trial_285_colour3_distractors31_l.png'},
    {'name': 'images/exp2c_trial_141_colour3_distractors19_r.png', 'path': 'images/exp2c_trial_141_colour3_distractors19_r.png'},
    {'name': 'images/exp1a_trial_301_colour3_distractors19_r.png', 'path': 'images/exp1a_trial_301_colour3_distractors19_r.png'},
    {'name': 'images/exp2a_trial_276_colour2_distractors1_l.png', 'path': 'images/exp2a_trial_276_colour2_distractors1_l.png'},
    {'name': 'images/exp1b_trial_74_colour3_distractors1_r.png', 'path': 'images/exp1b_trial_74_colour3_distractors1_r.png'},
    {'name': 'images/exp2b_trial_83_colour1_distractors31_l.png', 'path': 'images/exp2b_trial_83_colour1_distractors31_l.png'},
    {'name': 'images/exp2a_trial_137_colour2_distractors31_r.png', 'path': 'images/exp2a_trial_137_colour2_distractors31_r.png'},
    {'name': 'images/exp2c_trial_126_colour0_distractors0_r.png', 'path': 'images/exp2c_trial_126_colour0_distractors0_r.png'},
    {'name': 'images/exp1a_trial_228_colour1_distractors31_r.png', 'path': 'images/exp1a_trial_228_colour1_distractors31_r.png'},
    {'name': 'images/exp1a_trial_100_colour1_distractors31_r.png', 'path': 'images/exp1a_trial_100_colour1_distractors31_r.png'},
    {'name': 'images/exp2a_trial_162_colour1_distractors9_r.png', 'path': 'images/exp2a_trial_162_colour1_distractors9_r.png'},
    {'name': 'images/exp1a_trial_272_colour1_distractors4_l.png', 'path': 'images/exp1a_trial_272_colour1_distractors4_l.png'},
    {'name': 'images/exp2b_trial_248_colour2_distractors31_l.png', 'path': 'images/exp2b_trial_248_colour2_distractors31_l.png'},
    {'name': 'images/exp2b_trial_11_colour3_distractors4_r.png', 'path': 'images/exp2b_trial_11_colour3_distractors4_r.png'},
    {'name': 'images/exp2c_trial_70_colour2_distractors4_r.png', 'path': 'images/exp2c_trial_70_colour2_distractors4_r.png'},
    {'name': 'images/exp1a_trial_119_colour2_distractors19_l.png', 'path': 'images/exp1a_trial_119_colour2_distractors19_l.png'},
    {'name': 'images/exp1b_trial_236_colour3_distractors9_r.png', 'path': 'images/exp1b_trial_236_colour3_distractors9_r.png'},
    {'name': 'images/exp1a_trial_12_colour3_distractors9_r.png', 'path': 'images/exp1a_trial_12_colour3_distractors9_r.png'},
    {'name': 'images/exp2b_trial_174_colour3_distractors31_r.png', 'path': 'images/exp2b_trial_174_colour3_distractors31_r.png'},
    {'name': 'images/exp2c_trial_67_colour1_distractors19_r.png', 'path': 'images/exp2c_trial_67_colour1_distractors19_r.png'},
    {'name': 'images/exp1a_trial_85_colour2_distractors4_l.png', 'path': 'images/exp1a_trial_85_colour2_distractors4_l.png'},
    {'name': 'images/exp2c_trial_274_colour1_distractors19_l.png', 'path': 'images/exp2c_trial_274_colour1_distractors19_l.png'},
    {'name': 'images/exp2a_trial_76_colour3_distractors9_r.png', 'path': 'images/exp2a_trial_76_colour3_distractors9_r.png'},
    {'name': 'images/exp1a_trial_269_colour3_distractors19_r.png', 'path': 'images/exp1a_trial_269_colour3_distractors19_r.png'},
    {'name': 'images/exp2a_trial_309_colour2_distractors4_l.png', 'path': 'images/exp2a_trial_309_colour2_distractors4_l.png'},
    {'name': 'images/exp1a_trial_70_colour2_distractors4_r.png', 'path': 'images/exp1a_trial_70_colour2_distractors4_r.png'},
    {'name': 'images/exp2b_trial_197_colour2_distractors1_r.png', 'path': 'images/exp2b_trial_197_colour2_distractors1_r.png'},
    {'name': 'images/exp2c_trial_45_colour3_distractors19_r.png', 'path': 'images/exp2c_trial_45_colour3_distractors19_r.png'},
    {'name': 'images/exp2c_trial_57_colour3_distractors1_l.png', 'path': 'images/exp2c_trial_57_colour3_distractors1_l.png'},
    {'name': 'images/exp2a_trial_64_colour1_distractors1_r.png', 'path': 'images/exp2a_trial_64_colour1_distractors1_r.png'},
    {'name': 'images/exp2c_trial_117_colour2_distractors4_l.png', 'path': 'images/exp2c_trial_117_colour2_distractors4_l.png'},
    {'name': 'images/exp2c_trial_243_colour1_distractors31_l.png', 'path': 'images/exp2c_trial_243_colour1_distractors31_l.png'},
    {'name': 'images/exp1a_trial_63_colour0_distractors0_l.png', 'path': 'images/exp1a_trial_63_colour0_distractors0_l.png'},
    {'name': 'images/exp1a_trial_105_colour2_distractors31_r.png', 'path': 'images/exp1a_trial_105_colour2_distractors31_r.png'},
    {'name': 'images/exp2b_trial_138_colour3_distractors1_r.png', 'path': 'images/exp2b_trial_138_colour3_distractors1_r.png'},
    {'name': 'images/exp1b_trial_282_colour3_distractors4_l.png', 'path': 'images/exp1b_trial_282_colour3_distractors4_l.png'},
    {'name': 'images/exp1a_trial_319_colour0_distractors0_l.png', 'path': 'images/exp1a_trial_319_colour0_distractors0_l.png'},
    {'name': 'images/exp2b_trial_235_colour3_distractors4_r.png', 'path': 'images/exp2b_trial_235_colour3_distractors4_r.png'},
    {'name': 'images/exp2b_trial_74_colour3_distractors1_r.png', 'path': 'images/exp2b_trial_74_colour3_distractors1_r.png'},
    {'name': 'images/exp2c_trial_85_colour2_distractors4_l.png', 'path': 'images/exp2c_trial_85_colour2_distractors4_l.png'},
    {'name': 'images/exp1b_trial_0_colour1_distractors1_r.png', 'path': 'images/exp1b_trial_0_colour1_distractors1_r.png'},
    {'name': 'images/exp1a_trial_147_colour1_distractors31_l.png', 'path': 'images/exp1a_trial_147_colour1_distractors31_l.png'},
    {'name': 'images/exp2a_trial_156_colour3_distractors19_l.png', 'path': 'images/exp2a_trial_156_colour3_distractors19_l.png'},
    {'name': 'images/exp1a_trial_135_colour2_distractors9_r.png', 'path': 'images/exp1a_trial_135_colour2_distractors9_r.png'},
    {'name': 'images/exp1a_trial_159_colour0_distractors0_l.png', 'path': 'images/exp1a_trial_159_colour0_distractors0_l.png'},
    {'name': 'images/exp2c_trial_1_colour1_distractors4_r.png', 'path': 'images/exp2c_trial_1_colour1_distractors4_r.png'},
    {'name': 'images/exp1a_trial_37_colour2_distractors1_r.png', 'path': 'images/exp1a_trial_37_colour2_distractors1_r.png'},
    {'name': 'images/exp1b_trial_153_colour3_distractors1_l.png', 'path': 'images/exp1b_trial_153_colour3_distractors1_l.png'},
    {'name': 'images/exp2c_trial_24_colour2_distractors31_l.png', 'path': 'images/exp2c_trial_24_colour2_distractors31_l.png'},
    {'name': 'images/exp2b_trial_254_colour0_distractors0_r.png', 'path': 'images/exp2b_trial_254_colour0_distractors0_r.png'},
    {'name': 'images/exp1a_trial_89_colour3_distractors1_l.png', 'path': 'images/exp1a_trial_89_colour3_distractors1_l.png'},
    {'name': 'images/exp2a_trial_130_colour1_distractors9_r.png', 'path': 'images/exp2a_trial_130_colour1_distractors9_r.png'},
    {'name': 'images/exp1a_trial_289_colour1_distractors4_r.png', 'path': 'images/exp1a_trial_289_colour1_distractors4_r.png'},
    {'name': 'images/exp2c_trial_203_colour3_distractors4_r.png', 'path': 'images/exp2c_trial_203_colour3_distractors4_r.png'},
    {'name': 'images/exp1a_trial_172_colour3_distractors9_r.png', 'path': 'images/exp1a_trial_172_colour3_distractors9_r.png'},
    {'name': 'images/exp2c_trial_179_colour1_distractors31_l.png', 'path': 'images/exp2c_trial_179_colour1_distractors31_l.png'},
    {'name': 'images/exp1b_trial_86_colour2_distractors9_l.png', 'path': 'images/exp1b_trial_86_colour2_distractors9_l.png'},
    {'name': 'images/exp2b_trial_47_colour1_distractors1_l.png', 'path': 'images/exp2b_trial_47_colour1_distractors1_l.png'},
    {'name': 'targets/rightDisc.png', 'path': 'targets/rightDisc.png'},
    {'name': 'images/exp2b_trial_60_colour3_distractors19_l.png', 'path': 'images/exp2b_trial_60_colour3_distractors19_l.png'},
    {'name': 'images/exp2c_trial_13_colour3_distractors19_r.png', 'path': 'images/exp2c_trial_13_colour3_distractors19_r.png'},
    {'name': 'images/exp2a_trial_58_colour3_distractors4_l.png', 'path': 'images/exp2a_trial_58_colour3_distractors4_l.png'},
    {'name': 'images/exp2b_trial_309_colour2_distractors4_l.png', 'path': 'images/exp2b_trial_309_colour2_distractors4_l.png'},
    {'name': 'images/exp2b_trial_33_colour1_distractors4_r.png', 'path': 'images/exp2b_trial_33_colour1_distractors4_r.png'},
    {'name': 'images/exp2b_trial_231_colour2_distractors9_r.png', 'path': 'images/exp2b_trial_231_colour2_distractors9_r.png'},
    {'name': 'images/exp1b_trial_117_colour2_distractors4_l.png', 'path': 'images/exp1b_trial_117_colour2_distractors4_l.png'},
    {'name': 'images/exp2c_trial_210_colour1_distractors19_l.png', 'path': 'images/exp2c_trial_210_colour1_distractors19_l.png'},
    {'name': 'images/exp1a_trial_263_colour2_distractors9_r.png', 'path': 'images/exp1a_trial_263_colour2_distractors9_r.png'},
    {'name': 'images/exp2b_trial_12_colour3_distractors9_r.png', 'path': 'images/exp2b_trial_12_colour3_distractors9_r.png'},
    {'name': 'images/exp2a_trial_74_colour3_distractors1_r.png', 'path': 'images/exp2a_trial_74_colour3_distractors1_r.png'},
    {'name': 'images/exp1a_trial_207_colour1_distractors1_l.png', 'path': 'images/exp1a_trial_207_colour1_distractors1_l.png'},
    {'name': 'images/exp2c_trial_100_colour1_distractors31_r.png', 'path': 'images/exp2c_trial_100_colour1_distractors31_r.png'},
    {'name': 'images/exp1a_trial_56_colour2_distractors31_l.png', 'path': 'images/exp1a_trial_56_colour2_distractors31_l.png'},
    {'name': 'images/exp1a_trial_53_colour2_distractors4_l.png', 'path': 'images/exp1a_trial_53_colour2_distractors4_l.png'},
    {'name': 'images/exp2a_trial_14_colour3_distractors31_r.png', 'path': 'images/exp2a_trial_14_colour3_distractors31_r.png'},
    {'name': 'images/exp1a_trial_48_colour1_distractors4_l.png', 'path': 'images/exp1a_trial_48_colour1_distractors4_l.png'},
    {'name': 'images/exp2c_trial_71_colour2_distractors9_r.png', 'path': 'images/exp2c_trial_71_colour2_distractors9_r.png'},
    {'name': 'images/exp2a_trial_104_colour2_distractors19_r.png', 'path': 'images/exp2a_trial_104_colour2_distractors19_r.png'},
    {'name': 'images/exp1b_trial_157_colour3_distractors31_l.png', 'path': 'images/exp1b_trial_157_colour3_distractors31_l.png'},
    {'name': 'images/exp2c_trial_116_colour2_distractors1_l.png', 'path': 'images/exp2c_trial_116_colour2_distractors1_l.png'},
    {'name': 'images/exp1a_trial_41_colour2_distractors31_r.png', 'path': 'images/exp1a_trial_41_colour2_distractors31_r.png'},
    {'name': 'images/exp1b_trial_192_colour1_distractors1_r.png', 'path': 'images/exp1b_trial_192_colour1_distractors1_r.png'},
    {'name': 'images/exp2b_trial_134_colour2_distractors4_r.png', 'path': 'images/exp2b_trial_134_colour2_distractors4_r.png'},
    {'name': 'images/exp2c_trial_319_colour0_distractors0_l.png', 'path': 'images/exp2c_trial_319_colour0_distractors0_l.png'},
    {'name': 'images/exp1a_trial_205_colour3_distractors19_r.png', 'path': 'images/exp1a_trial_205_colour3_distractors19_r.png'},
    {'name': 'images/exp2c_trial_52_colour2_distractors1_l.png', 'path': 'images/exp2c_trial_52_colour2_distractors1_l.png'},
    {'name': 'images/exp1b_trial_106_colour3_distractors1_r.png', 'path': 'images/exp1b_trial_106_colour3_distractors1_r.png'},
    {'name': 'images/exp1b_trial_188_colour3_distractors19_l.png', 'path': 'images/exp1b_trial_188_colour3_distractors19_l.png'},
    {'name': 'images/exp2c_trial_218_colour3_distractors4_l.png', 'path': 'images/exp2c_trial_218_colour3_distractors4_l.png'},
    {'name': 'images/exp2b_trial_316_colour3_distractors19_l.png', 'path': 'images/exp2b_trial_316_colour3_distractors19_l.png'},
    {'name': 'images/exp1b_trial_189_colour3_distractors31_l.png', 'path': 'images/exp1b_trial_189_colour3_distractors31_l.png'},
    {'name': 'images/exp2c_trial_214_colour2_distractors9_l.png', 'path': 'images/exp2c_trial_214_colour2_distractors9_l.png'},
    {'name': 'images/exp2b_trial_52_colour2_distractors1_l.png', 'path': 'images/exp2b_trial_52_colour2_distractors1_l.png'},
    {'name': 'images/exp1a_trial_226_colour1_distractors9_r.png', 'path': 'images/exp1a_trial_226_colour1_distractors9_r.png'},
    {'name': 'images/exp1a_trial_318_colour0_distractors0_r.png', 'path': 'images/exp1a_trial_318_colour0_distractors0_r.png'},
    {'name': 'images/exp1b_trial_300_colour3_distractors9_r.png', 'path': 'images/exp1b_trial_300_colour3_distractors9_r.png'},
    {'name': 'images/exp1a_trial_27_colour3_distractors9_l.png', 'path': 'images/exp1a_trial_27_colour3_distractors9_l.png'},
    {'name': 'images/exp1b_trial_128_colour1_distractors1_r.png', 'path': 'images/exp1b_trial_128_colour1_distractors1_r.png'},
    {'name': 'images/exp2b_trial_144_colour1_distractors4_l.png', 'path': 'images/exp2b_trial_144_colour1_distractors4_l.png'},
    {'name': 'images/exp2c_trial_9_colour2_distractors31_r.png', 'path': 'images/exp2c_trial_9_colour2_distractors31_r.png'},
    {'name': 'images/exp2c_trial_94_colour0_distractors0_r.png', 'path': 'images/exp2c_trial_94_colour0_distractors0_r.png'},
    {'name': 'images/exp1a_trial_225_colour1_distractors4_r.png', 'path': 'images/exp1a_trial_225_colour1_distractors4_r.png'},
    {'name': 'images/exp2c_trial_189_colour3_distractors31_l.png', 'path': 'images/exp2c_trial_189_colour3_distractors31_l.png'},
    {'name': 'images/exp1b_trial_269_colour3_distractors19_r.png', 'path': 'images/exp1b_trial_269_colour3_distractors19_r.png'},
    {'name': 'images/exp1a_trial_237_colour3_distractors19_r.png', 'path': 'images/exp1a_trial_237_colour3_distractors19_r.png'},
    {'name': 'images/exp1a_trial_300_colour3_distractors9_r.png', 'path': 'images/exp1a_trial_300_colour3_distractors9_r.png'},
    {'name': 'images/exp2b_trial_189_colour3_distractors31_l.png', 'path': 'images/exp2b_trial_189_colour3_distractors31_l.png'},
    {'name': 'images/exp2c_trial_122_colour3_distractors4_l.png', 'path': 'images/exp2c_trial_122_colour3_distractors4_l.png'},
    {'name': 'images/exp1b_trial_93_colour3_distractors31_l.png', 'path': 'images/exp1b_trial_93_colour3_distractors31_l.png'},
    {'name': 'images/exp2b_trial_43_colour3_distractors4_r.png', 'path': 'images/exp2b_trial_43_colour3_distractors4_r.png'},
    {'name': 'images/exp1b_trial_270_colour3_distractors31_r.png', 'path': 'images/exp1b_trial_270_colour3_distractors31_r.png'},
    {'name': 'images/exp1a_trial_197_colour2_distractors1_r.png', 'path': 'images/exp1a_trial_197_colour2_distractors1_r.png'},
    {'name': 'images/exp2a_trial_267_colour3_distractors4_r.png', 'path': 'images/exp2a_trial_267_colour3_distractors4_r.png'},
    {'name': 'images/exp1b_trial_156_colour3_distractors19_l.png', 'path': 'images/exp1b_trial_156_colour3_distractors19_l.png'},
    {'name': 'images/exp2b_trial_180_colour2_distractors1_l.png', 'path': 'images/exp2b_trial_180_colour2_distractors1_l.png'},
    {'name': 'images/exp1a_trial_50_colour1_distractors19_l.png', 'path': 'images/exp1a_trial_50_colour1_distractors19_l.png'},
    {'name': 'images/exp1b_trial_6_colour2_distractors4_r.png', 'path': 'images/exp1b_trial_6_colour2_distractors4_r.png'},
    {'name': 'images/exp1a_trial_199_colour2_distractors9_r.png', 'path': 'images/exp1a_trial_199_colour2_distractors9_r.png'},
    {'name': 'images/exp2c_trial_229_colour2_distractors1_r.png', 'path': 'images/exp2c_trial_229_colour2_distractors1_r.png'},
    {'name': 'images/exp1a_trial_273_colour1_distractors9_l.png', 'path': 'images/exp1a_trial_273_colour1_distractors9_l.png'},
    {'name': 'images/exp2a_trial_23_colour2_distractors19_l.png', 'path': 'images/exp2a_trial_23_colour2_distractors19_l.png'},
    {'name': 'images/exp1a_trial_202_colour3_distractors1_r.png', 'path': 'images/exp1a_trial_202_colour3_distractors1_r.png'},
    {'name': 'images/exp2a_trial_263_colour2_distractors9_r.png', 'path': 'images/exp2a_trial_263_colour2_distractors9_r.png'},
    {'name': 'images/exp2b_trial_211_colour1_distractors31_l.png', 'path': 'images/exp2b_trial_211_colour1_distractors31_l.png'},
    {'name': 'images/exp2b_trial_307_colour1_distractors31_l.png', 'path': 'images/exp2b_trial_307_colour1_distractors31_l.png'},
    {'name': 'images/exp2c_trial_271_colour1_distractors1_l.png', 'path': 'images/exp2c_trial_271_colour1_distractors1_l.png'},
    {'name': 'images/exp2a_trial_195_colour1_distractors19_r.png', 'path': 'images/exp2a_trial_195_colour1_distractors19_r.png'},
    {'name': 'images/exp2a_trial_242_colour1_distractors19_l.png', 'path': 'images/exp2a_trial_242_colour1_distractors19_l.png'},
    {'name': 'Practice arrays/exp1a_trial_23_colour2_distractors19_l.png', 'path': 'Practice arrays/exp1a_trial_23_colour2_distractors19_l.png'},
    {'name': 'images/exp2b_trial_139_colour3_distractors4_r.png', 'path': 'images/exp2b_trial_139_colour3_distractors4_r.png'},
    {'name': 'images/exp2b_trial_265_colour2_distractors31_r.png', 'path': 'images/exp2b_trial_265_colour2_distractors31_r.png'},
    {'name': 'images/exp2a_trial_265_colour2_distractors31_r.png', 'path': 'images/exp2a_trial_265_colour2_distractors31_r.png'},
    {'name': 'images/exp2c_trial_226_colour1_distractors9_r.png', 'path': 'images/exp2c_trial_226_colour1_distractors9_r.png'},
    {'name': 'images/exp1a_trial_182_colour2_distractors9_l.png', 'path': 'images/exp1a_trial_182_colour2_distractors9_l.png'},
    {'name': 'images/exp2c_trial_120_colour2_distractors31_l.png', 'path': 'images/exp2c_trial_120_colour2_distractors31_l.png'},
    {'name': 'images/exp2c_trial_43_colour3_distractors4_r.png', 'path': 'images/exp2c_trial_43_colour3_distractors4_r.png'},
    {'name': 'images/exp1b_trial_129_colour1_distractors4_r.png', 'path': 'images/exp1b_trial_129_colour1_distractors4_r.png'},
    {'name': 'images/exp2a_trial_257_colour1_distractors4_r.png', 'path': 'images/exp2a_trial_257_colour1_distractors4_r.png'},
    {'name': 'images/exp2c_trial_194_colour1_distractors9_r.png', 'path': 'images/exp2c_trial_194_colour1_distractors9_r.png'},
    {'name': 'images/exp1b_trial_183_colour2_distractors19_l.png', 'path': 'images/exp1b_trial_183_colour2_distractors19_l.png'},
    {'name': 'images/exp1b_trial_170_colour3_distractors1_r.png', 'path': 'images/exp1b_trial_170_colour3_distractors1_r.png'},
    {'name': 'images/exp2b_trial_85_colour2_distractors4_l.png', 'path': 'images/exp2b_trial_85_colour2_distractors4_l.png'},
    {'name': 'images/exp1b_trial_143_colour1_distractors1_l.png', 'path': 'images/exp1b_trial_143_colour1_distractors1_l.png'},
    {'name': 'images/exp2b_trial_286_colour0_distractors0_r.png', 'path': 'images/exp2b_trial_286_colour0_distractors0_r.png'},
    {'name': 'images/exp1b_trial_211_colour1_distractors31_l.png', 'path': 'images/exp1b_trial_211_colour1_distractors31_l.png'},
    {'name': 'images/exp2a_trial_314_colour3_distractors4_l.png', 'path': 'images/exp2a_trial_314_colour3_distractors4_l.png'},
    {'name': 'images/exp2a_trial_125_colour3_distractors31_l.png', 'path': 'images/exp2a_trial_125_colour3_distractors31_l.png'},
    {'name': 'images/exp2b_trial_17_colour1_distractors9_l.png', 'path': 'images/exp2b_trial_17_colour1_distractors9_l.png'},
    {'name': 'images/exp2c_trial_90_colour3_distractors4_l.png', 'path': 'images/exp2c_trial_90_colour3_distractors4_l.png'},
    {'name': 'images/exp1b_trial_37_colour2_distractors1_r.png', 'path': 'images/exp1b_trial_37_colour2_distractors1_r.png'},
    {'name': 'images/exp1b_trial_238_colour3_distractors31_r.png', 'path': 'images/exp1b_trial_238_colour3_distractors31_r.png'},
    {'name': 'images/exp2b_trial_257_colour1_distractors4_r.png', 'path': 'images/exp2b_trial_257_colour1_distractors4_r.png'},
    {'name': 'images/exp2b_trial_317_colour3_distractors31_l.png', 'path': 'images/exp2b_trial_317_colour3_distractors31_l.png'},
    {'name': 'images/exp2b_trial_164_colour1_distractors31_r.png', 'path': 'images/exp2b_trial_164_colour1_distractors31_r.png'},
    {'name': 'images/exp1b_trial_237_colour3_distractors19_r.png', 'path': 'images/exp1b_trial_237_colour3_distractors19_r.png'},
    {'name': 'images/exp1a_trial_281_colour3_distractors1_l.png', 'path': 'images/exp1a_trial_281_colour3_distractors1_l.png'},
    {'name': 'images/exp2b_trial_78_colour3_distractors31_r.png', 'path': 'images/exp2b_trial_78_colour3_distractors31_r.png'},
    {'name': 'images/exp1b_trial_304_colour1_distractors4_l.png', 'path': 'images/exp1b_trial_304_colour1_distractors4_l.png'},
    {'name': 'images/exp1b_trial_163_colour1_distractors19_r.png', 'path': 'images/exp1b_trial_163_colour1_distractors19_r.png'},
    {'name': 'images/exp1a_trial_162_colour1_distractors9_r.png', 'path': 'images/exp1a_trial_162_colour1_distractors9_r.png'},
    {'name': 'images/exp1b_trial_27_colour3_distractors9_l.png', 'path': 'images/exp1b_trial_27_colour3_distractors9_l.png'},
    {'name': 'images/exp1b_trial_20_colour2_distractors1_l.png', 'path': 'images/exp1b_trial_20_colour2_distractors1_l.png'},
    {'name': 'images/exp1a_trial_152_colour2_distractors31_l.png', 'path': 'images/exp1a_trial_152_colour2_distractors31_l.png'},
    {'name': 'images/exp2c_trial_21_colour2_distractors4_l.png', 'path': 'images/exp2c_trial_21_colour2_distractors4_l.png'},
    {'name': 'images/exp1b_trial_215_colour2_distractors19_l.png', 'path': 'images/exp1b_trial_215_colour2_distractors19_l.png'},
    {'name': 'images/exp2c_trial_233_colour2_distractors31_r.png', 'path': 'images/exp2c_trial_233_colour2_distractors31_r.png'},
    {'name': 'images/exp1b_trial_298_colour3_distractors1_r.png', 'path': 'images/exp1b_trial_298_colour3_distractors1_r.png'},
    {'name': 'images/exp2a_trial_179_colour1_distractors31_l.png', 'path': 'images/exp2a_trial_179_colour1_distractors31_l.png'},
    {'name': 'images/exp2a_trial_218_colour3_distractors4_l.png', 'path': 'images/exp2a_trial_218_colour3_distractors4_l.png'},
    {'name': 'images/exp1b_trial_252_colour3_distractors19_l.png', 'path': 'images/exp1b_trial_252_colour3_distractors19_l.png'},
    {'name': 'images/exp2c_trial_258_colour1_distractors9_r.png', 'path': 'images/exp2c_trial_258_colour1_distractors9_r.png'},
    {'name': 'images/exp2c_trial_98_colour1_distractors9_r.png', 'path': 'images/exp2c_trial_98_colour1_distractors9_r.png'},
    {'name': 'images/exp1a_trial_261_colour2_distractors1_r.png', 'path': 'images/exp1a_trial_261_colour2_distractors1_r.png'},
    {'name': 'images/exp1a_trial_296_colour2_distractors19_r.png', 'path': 'images/exp1a_trial_296_colour2_distractors19_r.png'},
    {'name': 'images/exp1b_trial_221_colour3_distractors31_l.png', 'path': 'images/exp1b_trial_221_colour3_distractors31_l.png'},
    {'name': 'images/exp1a_trial_255_colour0_distractors0_l.png', 'path': 'images/exp1a_trial_255_colour0_distractors0_l.png'},
    {'name': 'images/exp2b_trial_291_colour1_distractors19_r.png', 'path': 'images/exp2b_trial_291_colour1_distractors19_r.png'},
    {'name': 'images/exp2a_trial_246_colour2_distractors9_l.png', 'path': 'images/exp2a_trial_246_colour2_distractors9_l.png'},
    {'name': 'images/exp1b_trial_35_colour1_distractors19_r.png', 'path': 'images/exp1b_trial_35_colour1_distractors19_r.png'},
    {'name': 'images/exp2a_trial_151_colour2_distractors19_l.png', 'path': 'images/exp2a_trial_151_colour2_distractors19_l.png'},
    {'name': 'images/exp2b_trial_159_colour0_distractors0_l.png', 'path': 'images/exp2b_trial_159_colour0_distractors0_l.png'},
    {'name': 'images/exp1b_trial_150_colour2_distractors9_l.png', 'path': 'images/exp1b_trial_150_colour2_distractors9_l.png'},
    {'name': 'images/exp2b_trial_132_colour1_distractors31_r.png', 'path': 'images/exp2b_trial_132_colour1_distractors31_r.png'},
    {'name': 'images/exp2a_trial_41_colour2_distractors31_r.png', 'path': 'images/exp2a_trial_41_colour2_distractors31_r.png'},
    {'name': 'images/exp2a_trial_283_colour3_distractors9_l.png', 'path': 'images/exp2a_trial_283_colour3_distractors9_l.png'},
    {'name': 'images/exp2b_trial_252_colour3_distractors19_l.png', 'path': 'images/exp2b_trial_252_colour3_distractors19_l.png'},
    {'name': 'images/exp2c_trial_146_colour1_distractors19_l.png', 'path': 'images/exp2c_trial_146_colour1_distractors19_l.png'},
    {'name': 'images/exp2a_trial_96_colour1_distractors1_r.png', 'path': 'images/exp2a_trial_96_colour1_distractors1_r.png'},
    {'name': 'images/exp2b_trial_236_colour3_distractors9_r.png', 'path': 'images/exp2b_trial_236_colour3_distractors9_r.png'},
    {'name': 'images/exp1b_trial_225_colour1_distractors4_r.png', 'path': 'images/exp1b_trial_225_colour1_distractors4_r.png'},
    {'name': 'images/exp1a_trial_266_colour3_distractors1_r.png', 'path': 'images/exp1a_trial_266_colour3_distractors1_r.png'},
    {'name': 'images/exp2a_trial_109_colour3_distractors19_r.png', 'path': 'images/exp2a_trial_109_colour3_distractors19_r.png'},
    {'name': 'images/exp2a_trial_122_colour3_distractors4_l.png', 'path': 'images/exp2a_trial_122_colour3_distractors4_l.png'},
    {'name': 'images/exp1b_trial_222_colour0_distractors0_r.png', 'path': 'images/exp1b_trial_222_colour0_distractors0_r.png'},
    {'name': 'images/exp2c_trial_102_colour2_distractors4_r.png', 'path': 'images/exp2c_trial_102_colour2_distractors4_r.png'},
    {'name': 'images/exp1b_trial_11_colour3_distractors4_r.png', 'path': 'images/exp1b_trial_11_colour3_distractors4_r.png'},
    {'name': 'images/exp2a_trial_75_colour3_distractors4_r.png', 'path': 'images/exp2a_trial_75_colour3_distractors4_r.png'},
    {'name': 'images/exp1b_trial_152_colour2_distractors31_l.png', 'path': 'images/exp1b_trial_152_colour2_distractors31_l.png'},
    {'name': 'images/exp2a_trial_68_colour1_distractors31_r.png', 'path': 'images/exp2a_trial_68_colour1_distractors31_r.png'},
    {'name': 'images/exp2a_trial_165_colour2_distractors1_r.png', 'path': 'images/exp2a_trial_165_colour2_distractors1_r.png'},
    {'name': 'images/exp2c_trial_135_colour2_distractors9_r.png', 'path': 'images/exp2c_trial_135_colour2_distractors9_r.png'},
    {'name': 'images/exp2b_trial_261_colour2_distractors1_r.png', 'path': 'images/exp2b_trial_261_colour2_distractors1_r.png'},
    {'name': 'images/exp1a_trial_99_colour1_distractors19_r.png', 'path': 'images/exp1a_trial_99_colour1_distractors19_r.png'},
    {'name': 'images/exp2a_trial_244_colour2_distractors1_l.png', 'path': 'images/exp2a_trial_244_colour2_distractors1_l.png'},
    {'name': 'images/exp2b_trial_214_colour2_distractors9_l.png', 'path': 'images/exp2b_trial_214_colour2_distractors9_l.png'},
    {'name': 'images/exp1a_trial_196_colour1_distractors31_r.png', 'path': 'images/exp1a_trial_196_colour1_distractors31_r.png'},
    {'name': 'images/exp1a_trial_260_colour1_distractors31_r.png', 'path': 'images/exp1a_trial_260_colour1_distractors31_r.png'},
    {'name': 'images/exp1a_trial_49_colour1_distractors9_l.png', 'path': 'images/exp1a_trial_49_colour1_distractors9_l.png'},
    {'name': 'images/exp1b_trial_242_colour1_distractors19_l.png', 'path': 'images/exp1b_trial_242_colour1_distractors19_l.png'},
    {'name': 'images/exp2b_trial_209_colour1_distractors9_l.png', 'path': 'images/exp2b_trial_209_colour1_distractors9_l.png'},
    {'name': 'images/exp2a_trial_167_colour2_distractors9_r.png', 'path': 'images/exp2a_trial_167_colour2_distractors9_r.png'},
    {'name': 'images/exp1b_trial_195_colour1_distractors19_r.png', 'path': 'images/exp1b_trial_195_colour1_distractors19_r.png'},
    {'name': 'images/exp2b_trial_282_colour3_distractors4_l.png', 'path': 'images/exp2b_trial_282_colour3_distractors4_l.png'},
    {'name': 'images/exp1b_trial_33_colour1_distractors4_r.png', 'path': 'images/exp1b_trial_33_colour1_distractors4_r.png'},
    {'name': 'images/exp1b_trial_18_colour1_distractors19_l.png', 'path': 'images/exp1b_trial_18_colour1_distractors19_l.png'},
    {'name': 'images/exp2a_trial_128_colour1_distractors1_r.png', 'path': 'images/exp2a_trial_128_colour1_distractors1_r.png'},
    {'name': 'images/exp1a_trial_178_colour1_distractors19_l.png', 'path': 'images/exp1a_trial_178_colour1_distractors19_l.png'},
    {'name': 'images/exp2a_trial_154_colour3_distractors4_l.png', 'path': 'images/exp2a_trial_154_colour3_distractors4_l.png'},
    {'name': 'images/exp2c_trial_138_colour3_distractors1_r.png', 'path': 'images/exp2c_trial_138_colour3_distractors1_r.png'},
    {'name': 'images/exp1a_trial_295_colour2_distractors9_r.png', 'path': 'images/exp1a_trial_295_colour2_distractors9_r.png'},
    {'name': 'images/exp2b_trial_24_colour2_distractors31_l.png', 'path': 'images/exp2b_trial_24_colour2_distractors31_l.png'},
    {'name': 'images/exp2c_trial_219_colour3_distractors9_l.png', 'path': 'images/exp2c_trial_219_colour3_distractors9_l.png'},
    {'name': 'images/exp2c_trial_171_colour3_distractors4_r.png', 'path': 'images/exp2c_trial_171_colour3_distractors4_r.png'},
    {'name': 'images/exp2a_trial_231_colour2_distractors9_r.png', 'path': 'images/exp2a_trial_231_colour2_distractors9_r.png'},
    {'name': 'images/exp2a_trial_111_colour1_distractors1_l.png', 'path': 'images/exp2a_trial_111_colour1_distractors1_l.png'},
    {'name': 'images/exp2c_trial_221_colour3_distractors31_l.png', 'path': 'images/exp2c_trial_221_colour3_distractors31_l.png'},
    {'name': 'images/exp2c_trial_281_colour3_distractors1_l.png', 'path': 'images/exp2c_trial_281_colour3_distractors1_l.png'},
    {'name': 'images/exp2a_trial_190_colour0_distractors0_r.png', 'path': 'images/exp2a_trial_190_colour0_distractors0_r.png'},
    {'name': 'images/exp2a_trial_21_colour2_distractors4_l.png', 'path': 'images/exp2a_trial_21_colour2_distractors4_l.png'},
    {'name': 'images/exp1a_trial_307_colour1_distractors31_l.png', 'path': 'images/exp1a_trial_307_colour1_distractors31_l.png'},
    {'name': 'images/exp1b_trial_288_colour1_distractors1_r.png', 'path': 'images/exp1b_trial_288_colour1_distractors1_r.png'},
    {'name': 'images/exp2c_trial_72_colour2_distractors19_r.png', 'path': 'images/exp2c_trial_72_colour2_distractors19_r.png'},
    {'name': 'images/exp2c_trial_78_colour3_distractors31_r.png', 'path': 'images/exp2c_trial_78_colour3_distractors31_r.png'},
    {'name': 'images/exp2b_trial_223_colour0_distractors0_l.png', 'path': 'images/exp2b_trial_223_colour0_distractors0_l.png'},
    {'name': 'images/exp2c_trial_199_colour2_distractors9_r.png', 'path': 'images/exp2c_trial_199_colour2_distractors9_r.png'},
    {'name': 'images/exp2b_trial_96_colour1_distractors1_r.png', 'path': 'images/exp2b_trial_96_colour1_distractors1_r.png'},
    {'name': 'images/exp2b_trial_135_colour2_distractors9_r.png', 'path': 'images/exp2b_trial_135_colour2_distractors9_r.png'},
    {'name': 'images/exp2a_trial_294_colour2_distractors4_r.png', 'path': 'images/exp2a_trial_294_colour2_distractors4_r.png'},
    {'name': 'images/exp2b_trial_205_colour3_distractors19_r.png', 'path': 'images/exp2b_trial_205_colour3_distractors19_r.png'},
    {'name': 'images/exp2c_trial_310_colour2_distractors9_l.png', 'path': 'images/exp2c_trial_310_colour2_distractors9_l.png'},
    {'name': 'images/exp1a_trial_101_colour2_distractors1_r.png', 'path': 'images/exp1a_trial_101_colour2_distractors1_r.png'},
    {'name': 'images/exp1a_trial_299_colour3_distractors4_r.png', 'path': 'images/exp1a_trial_299_colour3_distractors4_r.png'},
    {'name': 'images/exp2b_trial_225_colour1_distractors4_r.png', 'path': 'images/exp2b_trial_225_colour1_distractors4_r.png'},
    {'name': 'image_stimuli_final_master.xlsx', 'path': 'image_stimuli_final_master.xlsx'},
    {'name': 'images/exp2a_trial_67_colour1_distractors19_r.png', 'path': 'images/exp2a_trial_67_colour1_distractors19_r.png'},
    {'name': 'images/exp1b_trial_223_colour0_distractors0_l.png', 'path': 'images/exp1b_trial_223_colour0_distractors0_l.png'},
    {'name': 'images/exp1a_trial_248_colour2_distractors31_l.png', 'path': 'images/exp1a_trial_248_colour2_distractors31_l.png'},
    {'name': 'images/exp2a_trial_101_colour2_distractors1_r.png', 'path': 'images/exp2a_trial_101_colour2_distractors1_r.png'},
    {'name': 'images/exp2c_trial_22_colour2_distractors9_l.png', 'path': 'images/exp2c_trial_22_colour2_distractors9_l.png'},
    {'name': 'images/exp1b_trial_144_colour1_distractors4_l.png', 'path': 'images/exp1b_trial_144_colour1_distractors4_l.png'},
    {'name': 'images/exp2a_trial_100_colour1_distractors31_r.png', 'path': 'images/exp2a_trial_100_colour1_distractors31_r.png'},
    {'name': 'images/exp2a_trial_241_colour1_distractors9_l.png', 'path': 'images/exp2a_trial_241_colour1_distractors9_l.png'},
    {'name': 'images/exp2c_trial_309_colour2_distractors4_l.png', 'path': 'images/exp2c_trial_309_colour2_distractors4_l.png'},
    {'name': 'images/exp2b_trial_230_colour2_distractors4_r.png', 'path': 'images/exp2b_trial_230_colour2_distractors4_r.png'},
    {'name': 'images/exp2b_trial_77_colour3_distractors19_r.png', 'path': 'images/exp2b_trial_77_colour3_distractors19_r.png'},
    {'name': 'images/exp1b_trial_186_colour3_distractors4_l.png', 'path': 'images/exp1b_trial_186_colour3_distractors4_l.png'},
    {'name': 'images/exp2a_trial_65_colour1_distractors4_r.png', 'path': 'images/exp2a_trial_65_colour1_distractors4_r.png'},
    {'name': 'images/exp2a_trial_20_colour2_distractors1_l.png', 'path': 'images/exp2a_trial_20_colour2_distractors1_l.png'},
    {'name': 'images/exp2a_trial_108_colour3_distractors9_r.png', 'path': 'images/exp2a_trial_108_colour3_distractors9_r.png'},
    {'name': 'images/exp1a_trial_7_colour2_distractors9_r.png', 'path': 'images/exp1a_trial_7_colour2_distractors9_r.png'},
    {'name': 'images/exp2c_trial_42_colour3_distractors1_r.png', 'path': 'images/exp2c_trial_42_colour3_distractors1_r.png'},
    {'name': 'images/exp1a_trial_233_colour2_distractors31_r.png', 'path': 'images/exp1a_trial_233_colour2_distractors31_r.png'},
    {'name': 'images/exp1b_trial_97_colour1_distractors4_r.png', 'path': 'images/exp1b_trial_97_colour1_distractors4_r.png'},
    {'name': 'images/exp2a_trial_87_colour2_distractors19_l.png', 'path': 'images/exp2a_trial_87_colour2_distractors19_l.png'},
    {'name': 'images/exp1a_trial_253_colour3_distractors31_l.png', 'path': 'images/exp1a_trial_253_colour3_distractors31_l.png'},
    {'name': 'images/exp2a_trial_1_colour1_distractors4_r.png', 'path': 'images/exp2a_trial_1_colour1_distractors4_r.png'},
    {'name': 'images/exp2a_trial_289_colour1_distractors4_r.png', 'path': 'images/exp2a_trial_289_colour1_distractors4_r.png'},
    {'name': 'images/exp2c_trial_49_colour1_distractors9_l.png', 'path': 'images/exp2c_trial_49_colour1_distractors9_l.png'},
    {'name': 'images/exp1b_trial_279_colour2_distractors19_l.png', 'path': 'images/exp1b_trial_279_colour2_distractors19_l.png'},
    {'name': 'images/exp1a_trial_298_colour3_distractors1_r.png', 'path': 'images/exp1a_trial_298_colour3_distractors1_r.png'},
    {'name': 'images/exp1a_trial_308_colour2_distractors1_l.png', 'path': 'images/exp1a_trial_308_colour2_distractors1_l.png'},
    {'name': 'images/exp2a_trial_35_colour1_distractors19_r.png', 'path': 'images/exp2a_trial_35_colour1_distractors19_r.png'}
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.EXP);


var frameDur;
async function updateInfo() {
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2021.2.3';
  expInfo['OS'] = window.navigator.platform;

  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  
  return Scheduler.Event.NEXT;
}


var consent1Clock;
var text_6;
var buttonBox;
var consent2Clock;
var text_7;
var buttonBox_3;
var consent3Clock;
var text_8;
var buttonBox_4;
var consent4Clock;
var text_9;
var buttonBox_5;
var WelcomePracticeClock;
var text_2;
var buttonBox_6;
var instructionsClock;
var text_5;
var buttonBox_7;
var targetStimuliClock;
var image_2;
var text_3;
var image_3;
var buttonBox_8;
var first_fixClock;
var text_12;
var polygon;
var buttonBox_9;
var practiceTrialsClock;
var image;
var buttonBox_10;
var practiceFeedbackClock;
var msg;
var text_4;
var WelcomeScreenClock;
var text;
var buttonBox_11;
var targetInfoClock;
var message;
var targetTypeInstruction;
var buttonBox_2;
var trialClock;
var dispStimuli;
var buttonBox_12;
var break_2Clock;
var trialCounter;
var accuracySum;
var totRT;
var breakMessage;
var buttonBox_13;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "consent1"
  consent1Clock = new util.Clock();
  text_6 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_6',
    text: 'Please read each statement carefully and click either RED button to Agree and continue or ESC button to disagree and terminate the experiment.',
    font: 'Arial',
    units: 'norm', 
    pos: [0, 0], height: 0.1,  wrapWidth: 1.5, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  buttonBox = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "consent2"
  consent2Clock = new util.Clock();
  text_7 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_7',
    text: 'I understand that my participation in this project will involve looking for a target object on a computer screen and indicating what direction the target is facing, by pressing a computer keyboard buttons. This will require approximately 30min of my time.\nI understand that participation in this study is entirely voluntary and that I can withdraw from the study at any time without providing a reason by simply closing the browser or pressing esc button on your keyboard. I am aware that this will lead to loss of course credit or reimbursement. The incomplete data sets will not be saved.\nI understand that I can discuss any concerns with the experimenters before or after participating.\nThis research is carried out by postdoctoral research fellow Dr Anna Nowakowska in the School of Psychology, University of Aberdeen under the supervision of lecturer Anna Hughes and lecturer Alasdair Clarke (Department of Psychology, University of Essex)\nContact information:\n[a.nowakowska@abdn.ac.uk, anna.hughes@essex.ac.uk, a.clarke@essex.ac.uk]\nPress RED button to Agree and continue.\nPress ESC button to terminate the experiment.\n\n',
    font: 'Arial',
    units: 'norm', 
    pos: [0, 0], height: 0.08,  wrapWidth: 1.5, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  buttonBox_3 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "consent3"
  consent3Clock = new util.Clock();
  text_8 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_8',
    text: 'I understand that the information provided by me will be held anonymously so that it is impossible to trace this information back to me individually. Information will be held on a secure server and may be retained indefinitely. \nTo ensure access to the data for the wider research community, the anonymous dataset may be archived in an online repository (e.g., the Open Science Framework, https://osf.io/) or send to other researchers upon request for inspection.\nPress RED button to Agree and continue.\nPress ESC button to disagree and terminate the experiment.\n\n',
    font: 'Arial',
    units: 'norm', 
    pos: [0, 0], height: 0.08,  wrapWidth: 1.5, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  buttonBox_4 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "consent4"
  consent4Clock = new util.Clock();
  text_9 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_9',
    text: 'I confirm that the purpose, participation information, and data storage of this research have been sufficiently explained. \nI understand that at the end of the experiment I will be provided with additional information about the purpose of this research.\nPress RED button to agree and continue to the experiment.\nPress ESC button to disagree and terminate the experiment.',
    font: 'Arial',
    units: 'norm', 
    pos: [0, 0], height: 0.1,  wrapWidth: 1.5, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  buttonBox_5 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "WelcomePractice"
  WelcomePracticeClock = new util.Clock();
  text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_2',
    text: 'Welcome! Your task is to find\nwhite or red semicircle and indicate \nif it is facing left or right.\nPress RED bar to continue.\n',
    font: 'Arial',
    units: 'norm', 
    pos: [0, 0], height: 0.07,  wrapWidth: 1.5, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  buttonBox_6 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "instructions"
  instructionsClock = new util.Clock();
  text_5 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_5',
    text: 'Look at the fixation cross and press RED button when you\nare ready to start the trial.\nPress left arrow for semicircle facing left.\nPress right arrow for semicircle facing right.\nYou will first complete 16 practice trials.\nPress RED bar when you are ready to start.',
    font: 'Arial',
    units: 'norm', 
    pos: [0, 0], height: 0.07,  wrapWidth: 1.5, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  buttonBox_7 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "targetStimuli"
  targetStimuliClock = new util.Clock();
  image_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_2', units : 'norm', 
    image : 'targets/leftDisc.png', mask : undefined,
    ori : 0, pos : [(- 0.02), 0.15], size : [0.03, 0.08],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : 0.0 
  });
  text_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_3',
    text: 'Press left arrow if you see left semicircle\n\n\nPress right arrow if you see right semicircle\n\n\nPress RED button to start',
    font: 'Arial',
    units: 'norm', 
    pos: [0, 0], height: 0.08,  wrapWidth: 1.5, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  image_3 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_3', units : 'norm', 
    image : 'targets/rightDisc.png', mask : undefined,
    ori : 0, pos : [0, (- 0.15)], size : [0.03, 0.08],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -2.0 
  });
  buttonBox_8 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "first_fix"
  first_fixClock = new util.Clock();
  text_12 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_12',
    text: 'la la la',
    font: 'Open Sans',
    units: 'cm', 
    pos: [0, 0], height: 6.0,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: 1.0,
    depth: 0.0 
  });
  
  polygon = new visual.ShapeStim ({
    win: psychoJS.window, name: 'polygon', units : 'height', 
    vertices: 'cross', size:[2.5, 2.5],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color('white'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -1, interpolate: true,
  });
  
  buttonBox_9 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "practiceTrials"
  practiceTrialsClock = new util.Clock();
  image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image', units : 'norm', 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : [2, 2],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : true,
    texRes : 128, interpolate : true, depth : 0.0 
  });
  buttonBox_10 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "practiceFeedback"
  practiceFeedbackClock = new util.Clock();
  msg = "doh";
  
  
  text_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_4',
    text: '',
    font: 'Arial',
    units: 'norm', 
    pos: [0, 0], height: 0.1,  wrapWidth: 1.5, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  // Initialize components for Routine "WelcomeScreen"
  WelcomeScreenClock = new util.Clock();
  text = new visual.TextStim({
    win: psychoJS.window,
    name: 'text',
    text: 'Welcome to the experimental trials.\nBe reminded that your task is to look for \na white or a red semicircle.\nIf semicircle is facing left press left arrow key.\nIf semicircle is facing right press right arrow key.\nPress RED button to continue\n',
    font: 'Arial',
    units: 'norm', 
    pos: [0, 0], height: 0.07,  wrapWidth: 1.5, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  buttonBox_11 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "targetInfo"
  targetInfoClock = new util.Clock();
  message = "doh";
  (trislCounterForFeedback === 0);
  
  targetTypeInstruction = new visual.TextStim({
    win: psychoJS.window,
    name: 'targetTypeInstruction',
    text: '',
    font: 'Open Sans',
    units: 'norm', 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  buttonBox_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "trial"
  trialClock = new util.Clock();
  dispStimuli = new visual.ImageStim({
    win : psychoJS.window,
    name : 'dispStimuli', units : 'norm', 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : 1.0,
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : 0.0 
  });
  buttonBox_12 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "break_2"
  break_2Clock = new util.Clock();
  msg = "";
  trialCounter=0;
  accuracySum=0;
  totRT=0;
  
  //round = function(num, n=0) {    
  //   return +(Math.round(num + ("e+" + n))  + ("e-" + n));
  //}
  
  breakMessage = new visual.TextStim({
    win: psychoJS.window,
    name: 'breakMessage',
    text: '',
    font: 'Arial',
    units: 'norm', 
    pos: [0, 0], height: 0.1,  wrapWidth: 1.5, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  buttonBox_13 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var consent1Components;
function consent1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'consent1'-------
    t = 0;
    consent1Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // keep track of which components have finished
    consent1Components = [];
    consent1Components.push(text_6);
    
    consent1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function consent1RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'consent1'-------
    // get current time
    t = consent1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_6* updates
    if (t >= 0.0 && text_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_6.tStart = t;  // (not accounting for frame time here)
      text_6.frameNStart = frameN;  // exact frame index
      
      text_6.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    consent1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function consent1RoutineEnd() {
  return async function () {
    //------Ending Routine 'consent1'-------
    consent1Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // the Routine "consent1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var consent2Components;
function consent2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'consent2'-------
    t = 0;
    consent2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // keep track of which components have finished
    consent2Components = [];
    consent2Components.push(text_7);
    
    consent2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function consent2RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'consent2'-------
    // get current time
    t = consent2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_7* updates
    if (t >= 0.0 && text_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_7.tStart = t;  // (not accounting for frame time here)
      text_7.frameNStart = frameN;  // exact frame index
      
      text_7.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    consent2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function consent2RoutineEnd() {
  return async function () {
    //------Ending Routine 'consent2'-------
    consent2Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // the Routine "consent2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var consent3Components;
function consent3RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'consent3'-------
    t = 0;
    consent3Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // keep track of which components have finished
    consent3Components = [];
    consent3Components.push(text_8);
    
    consent3Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function consent3RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'consent3'-------
    // get current time
    t = consent3Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_8* updates
    if (t >= 0.0 && text_8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_8.tStart = t;  // (not accounting for frame time here)
      text_8.frameNStart = frameN;  // exact frame index
      
      text_8.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    consent3Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function consent3RoutineEnd() {
  return async function () {
    //------Ending Routine 'consent3'-------
    consent3Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // the Routine "consent3" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var consent4Components;
function consent4RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'consent4'-------
    t = 0;
    consent4Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // keep track of which components have finished
    consent4Components = [];
    consent4Components.push(text_9);
    
    consent4Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function consent4RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'consent4'-------
    // get current time
    t = consent4Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_9* updates
    if (t >= 0.0 && text_9.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_9.tStart = t;  // (not accounting for frame time here)
      text_9.frameNStart = frameN;  // exact frame index
      
      text_9.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    consent4Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function consent4RoutineEnd() {
  return async function () {
    //------Ending Routine 'consent4'-------
    consent4Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // the Routine "consent4" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var WelcomePracticeComponents;
function WelcomePracticeRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'WelcomePractice'-------
    t = 0;
    WelcomePracticeClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // keep track of which components have finished
    WelcomePracticeComponents = [];
    WelcomePracticeComponents.push(text_2);
    
    WelcomePracticeComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function WelcomePracticeRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'WelcomePractice'-------
    // get current time
    t = WelcomePracticeClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_2* updates
    if (t >= 0.0 && text_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_2.tStart = t;  // (not accounting for frame time here)
      text_2.frameNStart = frameN;  // exact frame index
      
      text_2.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    WelcomePracticeComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function WelcomePracticeRoutineEnd() {
  return async function () {
    //------Ending Routine 'WelcomePractice'-------
    WelcomePracticeComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // the Routine "WelcomePractice" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var instructionsComponents;
function instructionsRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'instructions'-------
    t = 0;
    instructionsClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // keep track of which components have finished
    instructionsComponents = [];
    instructionsComponents.push(text_5);
    
    instructionsComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function instructionsRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'instructions'-------
    // get current time
    t = instructionsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_5* updates
    if (t >= 0 && text_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_5.tStart = t;  // (not accounting for frame time here)
      text_5.frameNStart = frameN;  // exact frame index
      
      text_5.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    instructionsComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instructionsRoutineEnd() {
  return async function () {
    //------Ending Routine 'instructions'-------
    instructionsComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // the Routine "instructions" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var targetStimuliComponents;
function targetStimuliRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'targetStimuli'-------
    t = 0;
    targetStimuliClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // keep track of which components have finished
    targetStimuliComponents = [];
    targetStimuliComponents.push(image_2);
    targetStimuliComponents.push(text_3);
    targetStimuliComponents.push(image_3);
    
    targetStimuliComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function targetStimuliRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'targetStimuli'-------
    // get current time
    t = targetStimuliClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *image_2* updates
    if (t >= 0.0 && image_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_2.tStart = t;  // (not accounting for frame time here)
      image_2.frameNStart = frameN;  // exact frame index
      
      image_2.setAutoDraw(true);
    }

    
    // *text_3* updates
    if (t >= 0.0 && text_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_3.tStart = t;  // (not accounting for frame time here)
      text_3.frameNStart = frameN;  // exact frame index
      
      text_3.setAutoDraw(true);
    }

    
    // *image_3* updates
    if (t >= 0.0 && image_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_3.tStart = t;  // (not accounting for frame time here)
      image_3.frameNStart = frameN;  // exact frame index
      
      image_3.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    targetStimuliComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function targetStimuliRoutineEnd() {
  return async function () {
    //------Ending Routine 'targetStimuli'-------
    targetStimuliComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // the Routine "targetStimuli" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var trials_2;
var currentLoop;
function trials_2LoopBegin(trials_2LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_2 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'image_stimuli_practice.xlsx',
      seed: undefined, name: 'trials_2'
    });
    psychoJS.experiment.addLoop(trials_2); // add the loop to the experiment
    currentLoop = trials_2;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    trials_2.forEach(function() {
      const snapshot = trials_2.getSnapshot();
    
      trials_2LoopScheduler.add(importConditions(snapshot));
      trials_2LoopScheduler.add(first_fixRoutineBegin(snapshot));
      trials_2LoopScheduler.add(first_fixRoutineEachFrame());
      trials_2LoopScheduler.add(first_fixRoutineEnd());
      trials_2LoopScheduler.add(practiceTrialsRoutineBegin(snapshot));
      trials_2LoopScheduler.add(practiceTrialsRoutineEachFrame());
      trials_2LoopScheduler.add(practiceTrialsRoutineEnd());
      trials_2LoopScheduler.add(practiceFeedbackRoutineBegin(snapshot));
      trials_2LoopScheduler.add(practiceFeedbackRoutineEachFrame());
      trials_2LoopScheduler.add(practiceFeedbackRoutineEnd());
      trials_2LoopScheduler.add(endLoopIteration(trials_2LoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function trials_2LoopEnd() {
  psychoJS.experiment.removeLoop(trials_2);

  return Scheduler.Event.NEXT;
}


var trials;
function trialsLoopBegin(trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: (("orders/list_sub_" + Number.parseInt(expInfo["participant"]).toString()) + ".xlsx"),
      seed: undefined, name: 'trials'
    });
    psychoJS.experiment.addLoop(trials); // add the loop to the experiment
    currentLoop = trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    trials.forEach(function() {
      const snapshot = trials.getSnapshot();
    
      trialsLoopScheduler.add(importConditions(snapshot));
      trialsLoopScheduler.add(targetInfoRoutineBegin(snapshot));
      trialsLoopScheduler.add(targetInfoRoutineEachFrame());
      trialsLoopScheduler.add(targetInfoRoutineEnd());
      trialsLoopScheduler.add(first_fixRoutineBegin(snapshot));
      trialsLoopScheduler.add(first_fixRoutineEachFrame());
      trialsLoopScheduler.add(first_fixRoutineEnd());
      trialsLoopScheduler.add(trialRoutineBegin(snapshot));
      trialsLoopScheduler.add(trialRoutineEachFrame());
      trialsLoopScheduler.add(trialRoutineEnd());
      trialsLoopScheduler.add(break_2RoutineBegin(snapshot));
      trialsLoopScheduler.add(break_2RoutineEachFrame());
      trialsLoopScheduler.add(break_2RoutineEnd());
      trialsLoopScheduler.add(endLoopIteration(trialsLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function trialsLoopEnd() {
  psychoJS.experiment.removeLoop(trials);

  return Scheduler.Event.NEXT;
}


var first_fixComponents;
function first_fixRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'first_fix'-------
    t = 0;
    first_fixClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // keep track of which components have finished
    first_fixComponents = [];
    first_fixComponents.push(text_12);
    first_fixComponents.push(polygon);
    
    first_fixComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function first_fixRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'first_fix'-------
    // get current time
    t = first_fixClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_12* updates
    if (t >= 0.0 && text_12.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_12.tStart = t;  // (not accounting for frame time here)
      text_12.frameNStart = frameN;  // exact frame index
      
      text_12.setAutoDraw(true);
    }

    
    // *polygon* updates
    if (t >= 0.0 && polygon.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      polygon.tStart = t;  // (not accounting for frame time here)
      polygon.frameNStart = frameN;  // exact frame index
      
      polygon.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    first_fixComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function first_fixRoutineEnd() {
  return async function () {
    //------Ending Routine 'first_fix'-------
    first_fixComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // the Routine "first_fix" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var practiceTrialsComponents;
function practiceTrialsRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'practiceTrials'-------
    t = 0;
    practiceTrialsClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    image.setImage(ImageFile);
    // keep track of which components have finished
    practiceTrialsComponents = [];
    practiceTrialsComponents.push(image);
    
    practiceTrialsComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function practiceTrialsRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'practiceTrials'-------
    // get current time
    t = practiceTrialsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *image* updates
    if (t >= 0.0 && image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image.tStart = t;  // (not accounting for frame time here)
      image.frameNStart = frameN;  // exact frame index
      
      image.setAutoDraw(true);
    }

    frameRemains = 0.0 + 5.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (image.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      image.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    practiceTrialsComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function practiceTrialsRoutineEnd() {
  return async function () {
    //------Ending Routine 'practiceTrials'-------
    practiceTrialsComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // the Routine "practiceTrials" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var practiceFeedbackComponents;
function practiceFeedbackRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'practiceFeedback'-------
    t = 0;
    practiceFeedbackClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(2.000000);
    // update component parameters for each repeat
    console.log(key_resp_4.corr);
    
    if(key_resp_4.corr) {
        msg = "Correct!";
    } else {
        msg = "Oops, incorrect";
    }
            
    text_4.setText(msg);
    // keep track of which components have finished
    practiceFeedbackComponents = [];
    practiceFeedbackComponents.push(text_4);
    
    practiceFeedbackComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function practiceFeedbackRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'practiceFeedback'-------
    // get current time
    t = practiceFeedbackClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    //if ((manual_loop !== 20)) {
    //    continueRoutine = false;
    //}
    
    //responses = psychoJS.experiment._trialsData  // get list of responses
    //nCorr = responses.reduce((a, b) => a + b['key_resp_4.corr'], 0)  // get sum
    //meanRT = responses.reduce((a, b) => a + b['key_resp_4.rt'], 0) / responses.length  // get mean
    
    //meanRT = round(meanRT, 3);
    
    
    // *text_4* updates
    if (t >= 0.0 && text_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_4.tStart = t;  // (not accounting for frame time here)
      text_4.frameNStart = frameN;  // exact frame index
      
      text_4.setAutoDraw(true);
    }

    frameRemains = 0.0 + 2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_4.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_4.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    practiceFeedbackComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function practiceFeedbackRoutineEnd() {
  return async function () {
    //------Ending Routine 'practiceFeedback'-------
    practiceFeedbackComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    return Scheduler.Event.NEXT;
  };
}


var WelcomeScreenComponents;
function WelcomeScreenRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'WelcomeScreen'-------
    t = 0;
    WelcomeScreenClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // keep track of which components have finished
    WelcomeScreenComponents = [];
    WelcomeScreenComponents.push(text);
    
    WelcomeScreenComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function WelcomeScreenRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'WelcomeScreen'-------
    // get current time
    t = WelcomeScreenClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text* updates
    if (t >= 0.0 && text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text.tStart = t;  // (not accounting for frame time here)
      text.frameNStart = frameN;  // exact frame index
      
      text.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    WelcomeScreenComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function WelcomeScreenRoutineEnd() {
  return async function () {
    //------Ending Routine 'WelcomeScreen'-------
    WelcomeScreenComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // the Routine "WelcomeScreen" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var targetInfoComponents;
function targetInfoRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'targetInfo'-------
    t = 0;
    targetInfoClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    /* Syntax Error: Fix Python code */
    targetTypeInstruction.setText(messageFeedback);
    // keep track of which components have finished
    targetInfoComponents = [];
    targetInfoComponents.push(targetTypeInstruction);
    
    targetInfoComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function targetInfoRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'targetInfo'-------
    // get current time
    t = targetInfoClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *targetTypeInstruction* updates
    if (t >= 0.0 && targetTypeInstruction.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      targetTypeInstruction.tStart = t;  // (not accounting for frame time here)
      targetTypeInstruction.frameNStart = frameN;  // exact frame index
      
      targetTypeInstruction.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    targetInfoComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function targetInfoRoutineEnd() {
  return async function () {
    //------Ending Routine 'targetInfo'-------
    targetInfoComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // the Routine "targetInfo" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var trialComponents;
function trialRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'trial'-------
    t = 0;
    trialClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    dispStimuli.setSize([2, 2]);
    dispStimuli.setImage(ImageFile);
    // keep track of which components have finished
    trialComponents = [];
    trialComponents.push(dispStimuli);
    
    trialComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function trialRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'trial'-------
    // get current time
    t = trialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *dispStimuli* updates
    if (t >= 0.0 && dispStimuli.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      dispStimuli.tStart = t;  // (not accounting for frame time here)
      dispStimuli.frameNStart = frameN;  // exact frame index
      
      dispStimuli.setAutoDraw(true);
    }

    frameRemains = 0.0 + 5.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (dispStimuli.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      dispStimuli.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    trialComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trialRoutineEnd() {
  return async function () {
    //------Ending Routine 'trial'-------
    trialComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // the Routine "trial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var percentAccurate;
var meanRT;
var break_2Components;
function break_2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'break_2'-------
    t = 0;
    break_2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    trialCounter=trialCounter+1;  
    
    if(key_resp_2.corr) {
        accuracySum = accuracySum + 1;
        totRT = totRT + key_resp_2.rt;
    }
    
    percentAccurate = accuracySum/trialCounter * 100;
    percentAccurate = round(percentAccurate, 3);
    meanRT = totRT/trialCounter;
    meanRT = round(meanRT, 3);
    
    msg = "You have completed " + trialCounter + " trials. You are " + percentAccurate + "% accurate so far, with an average reaction time of " + meanRT + "s. Press space bar to continue";
    breakMessage.setText(msg);
    // keep track of which components have finished
    break_2Components = [];
    break_2Components.push(breakMessage);
    
    break_2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function break_2RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'break_2'-------
    // get current time
    t = break_2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    if ((trialCounter !== 120 && trialCounter !== 240 && trialCounter !== 360 && trialCounter !== 480 && trialCounter !== 600 && trialCounter !== 720 && trialCounter !== 840)) {
        continueRoutine = false;
    }
    
    
    
    
    // *breakMessage* updates
    if (t >= 0.0 && breakMessage.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      breakMessage.tStart = t;  // (not accounting for frame time here)
      breakMessage.frameNStart = frameN;  // exact frame index
      
      breakMessage.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    break_2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function break_2RoutineEnd() {
  return async function () {
    //------Ending Routine 'break_2'-------
    break_2Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // the Routine "break_2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


function endLoopIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        const thisTrial = snapshot.getCurrentTrial();
        if (typeof thisTrial === 'undefined' || !('isTrials' in thisTrial) || thisTrial.isTrials) {
          psychoJS.experiment.nextEntry(snapshot);
        }
      }
    return Scheduler.Event.NEXT;
    }
  };
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  
  
  
  
  
  
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
