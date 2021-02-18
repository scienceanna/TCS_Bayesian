/******************** 
 * Searchdisc4 Test *
 ********************/

// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0, 0, 0]),
  units: 'pix',
  waitBlanking: true
});

// store info about the experiment session:
let expName = 'searchDisc4';  // from the Builder filename that created this script
let expInfo = {'participant': '', 'session': '001'};

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
flowScheduler.add(creditcardRoutineBegin());
flowScheduler.add(creditcardRoutineEachFrame());
flowScheduler.add(creditcardRoutineEnd());
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
flowScheduler.add(trials_2LoopBegin, trials_2LoopScheduler);
flowScheduler.add(trials_2LoopScheduler);
flowScheduler.add(trials_2LoopEnd);
flowScheduler.add(WelcomeScreenRoutineBegin());
flowScheduler.add(WelcomeScreenRoutineEachFrame());
flowScheduler.add(WelcomeScreenRoutineEnd());
const trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trialsLoopBegin, trialsLoopScheduler);
flowScheduler.add(trialsLoopScheduler);
flowScheduler.add(trialsLoopEnd);
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    {'name': 'Images/exp2c_trial_26_colour2_distractors9_l.png', 'path': 'Images/exp2c_trial_26_colour2_distractors9_l.png'},
    {'name': 'Images/exp1b_trial_34_colour3_distractors31_l.png', 'path': 'Images/exp1b_trial_34_colour3_distractors31_l.png'},
    {'name': 'Images/exp2a_trial_92_colour3_distractors31_r.png', 'path': 'Images/exp2a_trial_92_colour3_distractors31_r.png'},
    {'name': 'Images/exp2c_trial_46_colour2_distractors9_r.png', 'path': 'Images/exp2c_trial_46_colour2_distractors9_r.png'},
    {'name': 'Images/exp2a_trial_88_colour3_distractors1_r.png', 'path': 'Images/exp2a_trial_88_colour3_distractors1_r.png'},
    {'name': 'Images/exp2b_trial_64_colour2_distractors9_l.png', 'path': 'Images/exp2b_trial_64_colour2_distractors9_l.png'},
    {'name': 'Images/exp1a_trial_55_colour3_distractors43_r.png', 'path': 'Images/exp1a_trial_55_colour3_distractors43_r.png'},
    {'name': 'Images/exp1b_trial_86_colour2_distractors31_r.png', 'path': 'Images/exp1b_trial_86_colour2_distractors31_r.png'},
    {'name': 'Images/exp2c_trial_38_colour1_distractors1_r.png', 'path': 'Images/exp2c_trial_38_colour1_distractors1_r.png'},
    {'name': 'Images/exp2a_trial_30_colour3_distractors1_l.png', 'path': 'Images/exp2a_trial_30_colour3_distractors1_l.png'},
    {'name': 'Images/exp2b_trial_59_colour1_distractors19_l.png', 'path': 'Images/exp2b_trial_59_colour1_distractors19_l.png'},
    {'name': 'Images/exp2a_trial_53_colour3_distractors19_r.png', 'path': 'Images/exp2a_trial_53_colour3_distractors19_r.png'},
    {'name': 'Images/exp2a_trial_8_colour2_distractors9_r.png', 'path': 'Images/exp2a_trial_8_colour2_distractors9_r.png'},
    {'name': 'Images/exp2a_trial_89_colour3_distractors4_r.png', 'path': 'Images/exp2a_trial_89_colour3_distractors4_r.png'},
    {'name': 'Images/exp1a_trial_93_colour3_distractors43_r.png', 'path': 'Images/exp1a_trial_93_colour3_distractors43_r.png'},
    {'name': 'Images/exp2a_trial_18_colour1_distractors1_l.png', 'path': 'Images/exp2a_trial_18_colour1_distractors1_l.png'},
    {'name': 'Images/exp2c_trial_56_colour1_distractors1_l.png', 'path': 'Images/exp2c_trial_56_colour1_distractors1_l.png'},
    {'name': 'Images/exp1b_trial_94_colour1_distractors1_l.png', 'path': 'Images/exp1b_trial_94_colour1_distractors1_l.png'},
    {'name': 'Images/exp2a_trial_46_colour2_distractors9_r.png', 'path': 'Images/exp2a_trial_46_colour2_distractors9_r.png'},
    {'name': 'Images/exp2a_trial_6_colour2_distractors1_r.png', 'path': 'Images/exp2a_trial_6_colour2_distractors1_r.png'},
    {'name': 'Images/exp2b_trial_20_colour1_distractors9_l.png', 'path': 'Images/exp2b_trial_20_colour1_distractors9_l.png'},
    {'name': 'Images/exp2c_trial_99_colour1_distractors43_l.png', 'path': 'Images/exp2c_trial_99_colour1_distractors43_l.png'},
    {'name': 'Images/exp1b_trial_108_colour3_distractors9_l.png', 'path': 'Images/exp1b_trial_108_colour3_distractors9_l.png'},
    {'name': 'Images/exp1b_trial_7_colour2_distractors4_r.png', 'path': 'Images/exp1b_trial_7_colour2_distractors4_r.png'},
    {'name': 'Images/exp1a_trial_48_colour2_distractors31_r.png', 'path': 'Images/exp1a_trial_48_colour2_distractors31_r.png'},
    {'name': 'Images/exp2c_trial_32_colour3_distractors9_l.png', 'path': 'Images/exp2c_trial_32_colour3_distractors9_l.png'},
    {'name': 'Images/exp1b_trial_61_colour1_distractors43_l.png', 'path': 'Images/exp1b_trial_61_colour1_distractors43_l.png'},
    {'name': 'Images/exp2c_trial_1_colour1_distractors4_r.png', 'path': 'Images/exp2c_trial_1_colour1_distractors4_r.png'},
    {'name': 'Images/exp2b_trial_111_colour3_distractors43_l.png', 'path': 'Images/exp2b_trial_111_colour3_distractors43_l.png'},
    {'name': 'Images/exp1b_trial_0_colour1_distractors1_r.png', 'path': 'Images/exp1b_trial_0_colour1_distractors1_r.png'},
    {'name': 'Images/exp2a_trial_86_colour2_distractors31_r.png', 'path': 'Images/exp2a_trial_86_colour2_distractors31_r.png'},
    {'name': 'Images/exp2b_trial_10_colour2_distractors31_r.png', 'path': 'Images/exp2b_trial_10_colour2_distractors31_r.png'},
    {'name': 'Images/exp1a_trial_32_colour3_distractors9_l.png', 'path': 'Images/exp1a_trial_32_colour3_distractors9_l.png'},
    {'name': 'Images/exp1a_trial_110_colour3_distractors31_l.png', 'path': 'Images/exp1a_trial_110_colour3_distractors31_l.png'},
    {'name': 'Images/exp2b_trial_100_colour2_distractors1_l.png', 'path': 'Images/exp2b_trial_100_colour2_distractors1_l.png'},
    {'name': 'Images/exp1b_trial_42_colour1_distractors31_r.png', 'path': 'Images/exp1b_trial_42_colour1_distractors31_r.png'},
    {'name': 'Images/exp2b_trial_72_colour3_distractors31_l.png', 'path': 'Images/exp2b_trial_72_colour3_distractors31_l.png'},
    {'name': 'Images/exp2b_trial_69_colour3_distractors4_l.png', 'path': 'Images/exp2b_trial_69_colour3_distractors4_l.png'},
    {'name': 'Images/exp2c_trial_24_colour2_distractors1_l.png', 'path': 'Images/exp2c_trial_24_colour2_distractors1_l.png'},
    {'name': 'Images/exp2a_trial_56_colour1_distractors1_l.png', 'path': 'Images/exp2a_trial_56_colour1_distractors1_l.png'},
    {'name': 'Images/exp2c_trial_40_colour1_distractors9_r.png', 'path': 'Images/exp2c_trial_40_colour1_distractors9_r.png'},
    {'name': 'Images/exp2a_trial_17_colour3_distractors43_r.png', 'path': 'Images/exp2a_trial_17_colour3_distractors43_r.png'},
    {'name': 'Images/exp2b_trial_112_colour0_distractors0_r.png', 'path': 'Images/exp2b_trial_112_colour0_distractors0_r.png'},
    {'name': 'Images/exp2c_trial_112_colour0_distractors0_r.png', 'path': 'Images/exp2c_trial_112_colour0_distractors0_r.png'},
    {'name': 'Images/exp2b_trial_85_colour2_distractors19_r.png', 'path': 'Images/exp2b_trial_85_colour2_distractors19_r.png'},
    {'name': 'Images/exp2c_trial_101_colour2_distractors4_l.png', 'path': 'Images/exp2c_trial_101_colour2_distractors4_l.png'},
    {'name': 'Images/exp1a_trial_20_colour1_distractors9_l.png', 'path': 'Images/exp1a_trial_20_colour1_distractors9_l.png'},
    {'name': 'Images/exp1b_trial_15_colour3_distractors19_r.png', 'path': 'Images/exp1b_trial_15_colour3_distractors19_r.png'},
    {'name': 'Images/exp2a_trial_110_colour3_distractors31_l.png', 'path': 'Images/exp2a_trial_110_colour3_distractors31_l.png'},
    {'name': 'Images/exp2b_trial_52_colour3_distractors9_r.png', 'path': 'Images/exp2b_trial_52_colour3_distractors9_r.png'},
    {'name': 'Images/exp2b_trial_63_colour2_distractors4_l.png', 'path': 'Images/exp2b_trial_63_colour2_distractors4_l.png'},
    {'name': 'Images/exp1a_trial_104_colour2_distractors31_l.png', 'path': 'Images/exp1a_trial_104_colour2_distractors31_l.png'},
    {'name': 'Images/exp2b_trial_81_colour1_distractors43_r.png', 'path': 'Images/exp2b_trial_81_colour1_distractors43_r.png'},
    {'name': 'Images/exp1b_trial_29_colour2_distractors43_l.png', 'path': 'Images/exp1b_trial_29_colour2_distractors43_l.png'},
    {'name': 'Images/exp2c_trial_55_colour3_distractors43_r.png', 'path': 'Images/exp2c_trial_55_colour3_distractors43_r.png'},
    {'name': 'Images/exp2c_trial_100_colour2_distractors1_l.png', 'path': 'Images/exp2c_trial_100_colour2_distractors1_l.png'},
    {'name': 'Images/exp1a_trial_19_colour1_distractors4_l.png', 'path': 'Images/exp1a_trial_19_colour1_distractors4_l.png'},
    {'name': 'Images/exp2c_trial_31_colour3_distractors4_l.png', 'path': 'Images/exp2c_trial_31_colour3_distractors4_l.png'},
    {'name': 'Images/exp2c_trial_111_colour3_distractors43_l.png', 'path': 'Images/exp2c_trial_111_colour3_distractors43_l.png'},
    {'name': 'Images/exp1b_trial_87_colour2_distractors43_r.png', 'path': 'Images/exp1b_trial_87_colour2_distractors43_r.png'},
    {'name': 'Practice arrays/exp1a_trial_12_colour3_distractors1_r.png', 'path': 'Practice arrays/exp1a_trial_12_colour3_distractors1_r.png'},
    {'name': 'Images/exp1b_trial_23_colour1_distractors43_l.png', 'path': 'Images/exp1b_trial_23_colour1_distractors43_l.png'},
    {'name': 'Images/exp1a_trial_112_colour0_distractors0_r.png', 'path': 'Images/exp1a_trial_112_colour0_distractors0_r.png'},
    {'name': 'Images/exp2c_trial_91_colour3_distractors19_r.png', 'path': 'Images/exp2c_trial_91_colour3_distractors19_r.png'},
    {'name': 'Images/exp2a_trial_66_colour2_distractors31_l.png', 'path': 'Images/exp2a_trial_66_colour2_distractors31_l.png'},
    {'name': 'Images/exp2c_trial_93_colour3_distractors43_r.png', 'path': 'Images/exp2c_trial_93_colour3_distractors43_r.png'},
    {'name': 'Images/exp1a_trial_40_colour1_distractors9_r.png', 'path': 'Images/exp1a_trial_40_colour1_distractors9_r.png'},
    {'name': 'Images/exp2a_trial_107_colour3_distractors4_l.png', 'path': 'Images/exp2a_trial_107_colour3_distractors4_l.png'},
    {'name': 'Images/exp2c_trial_29_colour2_distractors43_l.png', 'path': 'Images/exp2c_trial_29_colour2_distractors43_l.png'},
    {'name': 'Images/exp2c_trial_70_colour3_distractors9_l.png', 'path': 'Images/exp2c_trial_70_colour3_distractors9_l.png'},
    {'name': 'Images/exp1a_trial_84_colour2_distractors9_r.png', 'path': 'Images/exp1a_trial_84_colour2_distractors9_r.png'},
    {'name': 'Images/exp2b_trial_57_colour1_distractors4_l.png', 'path': 'Images/exp2b_trial_57_colour1_distractors4_l.png'},
    {'name': 'Images/exp2c_trial_45_colour2_distractors4_r.png', 'path': 'Images/exp2c_trial_45_colour2_distractors4_r.png'},
    {'name': 'Images/exp2c_trial_49_colour2_distractors43_r.png', 'path': 'Images/exp2c_trial_49_colour2_distractors43_r.png'},
    {'name': 'Images/exp1b_trial_83_colour2_distractors4_r.png', 'path': 'Images/exp1b_trial_83_colour2_distractors4_r.png'},
    {'name': 'Images/exp2a_trial_37_colour0_distractors0_l.png', 'path': 'Images/exp2a_trial_37_colour0_distractors0_l.png'},
    {'name': 'Images/exp2a_trial_73_colour3_distractors43_l.png', 'path': 'Images/exp2a_trial_73_colour3_distractors43_l.png'},
    {'name': 'Images/exp2c_trial_113_colour0_distractors0_l.png', 'path': 'Images/exp2c_trial_113_colour0_distractors0_l.png'},
    {'name': 'Images/exp1b_trial_105_colour2_distractors43_l.png', 'path': 'Images/exp1b_trial_105_colour2_distractors43_l.png'},
    {'name': 'Images/exp2a_trial_0_colour1_distractors1_r.png', 'path': 'Images/exp2a_trial_0_colour1_distractors1_r.png'},
    {'name': 'Images/exp1b_trial_35_colour3_distractors43_l.png', 'path': 'Images/exp1b_trial_35_colour3_distractors43_l.png'},
    {'name': 'Images/exp1b_trial_71_colour3_distractors19_l.png', 'path': 'Images/exp1b_trial_71_colour3_distractors19_l.png'},
    {'name': 'Images/exp2b_trial_91_colour3_distractors19_r.png', 'path': 'Images/exp2b_trial_91_colour3_distractors19_r.png'},
    {'name': 'Images/exp1a_trial_33_colour3_distractors19_l.png', 'path': 'Images/exp1a_trial_33_colour3_distractors19_l.png'},
    {'name': 'Images/exp1b_trial_67_colour2_distractors43_l.png', 'path': 'Images/exp1b_trial_67_colour2_distractors43_l.png'},
    {'name': 'Images/exp2b_trial_71_colour3_distractors19_l.png', 'path': 'Images/exp2b_trial_71_colour3_distractors19_l.png'},
    {'name': 'Images/exp2a_trial_28_colour2_distractors31_l.png', 'path': 'Images/exp2a_trial_28_colour2_distractors31_l.png'},
    {'name': 'Images/exp2a_trial_51_colour3_distractors4_r.png', 'path': 'Images/exp2a_trial_51_colour3_distractors4_r.png'},
    {'name': 'Images/exp2c_trial_34_colour3_distractors31_l.png', 'path': 'Images/exp2c_trial_34_colour3_distractors31_l.png'},
    {'name': 'Images/exp1a_trial_28_colour2_distractors31_l.png', 'path': 'Images/exp1a_trial_28_colour2_distractors31_l.png'},
    {'name': 'Images/exp2a_trial_1_colour1_distractors4_r.png', 'path': 'Images/exp2a_trial_1_colour1_distractors4_r.png'},
    {'name': 'Images/exp2c_trial_21_colour1_distractors19_l.png', 'path': 'Images/exp2c_trial_21_colour1_distractors19_l.png'},
    {'name': 'Images/exp1b_trial_66_colour2_distractors31_l.png', 'path': 'Images/exp1b_trial_66_colour2_distractors31_l.png'},
    {'name': 'Images/exp2a_trial_96_colour1_distractors9_l.png', 'path': 'Images/exp2a_trial_96_colour1_distractors9_l.png'},
    {'name': 'Images/exp2a_trial_41_colour1_distractors19_r.png', 'path': 'Images/exp2a_trial_41_colour1_distractors19_r.png'},
    {'name': 'Images/exp2a_trial_74_colour0_distractors0_r.png', 'path': 'Images/exp2a_trial_74_colour0_distractors0_r.png'},
    {'name': 'Images/exp2b_trial_25_colour2_distractors4_l.png', 'path': 'Images/exp2b_trial_25_colour2_distractors4_l.png'},
    {'name': 'Images/exp2b_trial_68_colour3_distractors1_l.png', 'path': 'Images/exp2b_trial_68_colour3_distractors1_l.png'},
    {'name': 'Images/exp2c_trial_3_colour1_distractors19_r.png', 'path': 'Images/exp2c_trial_3_colour1_distractors19_r.png'},
    {'name': 'Images/exp2a_trial_61_colour1_distractors43_l.png', 'path': 'Images/exp2a_trial_61_colour1_distractors43_l.png'},
    {'name': 'Images/exp2c_trial_78_colour1_distractors9_r.png', 'path': 'Images/exp2c_trial_78_colour1_distractors9_r.png'},
    {'name': 'Images/exp2c_trial_43_colour1_distractors43_r.png', 'path': 'Images/exp2c_trial_43_colour1_distractors43_r.png'},
    {'name': 'Images/exp1a_trial_25_colour2_distractors4_l.png', 'path': 'Images/exp1a_trial_25_colour2_distractors4_l.png'},
    {'name': 'Images/exp2a_trial_111_colour3_distractors43_l.png', 'path': 'Images/exp2a_trial_111_colour3_distractors43_l.png'},
    {'name': 'Images/exp2b_trial_76_colour1_distractors1_r.png', 'path': 'Images/exp2b_trial_76_colour1_distractors1_r.png'},
    {'name': 'Images/exp2b_trial_44_colour2_distractors1_r.png', 'path': 'Images/exp2b_trial_44_colour2_distractors1_r.png'},
    {'name': 'Images/exp2c_trial_9_colour2_distractors19_r.png', 'path': 'Images/exp2c_trial_9_colour2_distractors19_r.png'},
    {'name': 'Images/exp1b_trial_22_colour1_distractors31_l.png', 'path': 'Images/exp1b_trial_22_colour1_distractors31_l.png'},
    {'name': 'Images/exp1b_trial_104_colour2_distractors31_l.png', 'path': 'Images/exp1b_trial_104_colour2_distractors31_l.png'},
    {'name': 'Images/exp1a_trial_85_colour2_distractors19_r.png', 'path': 'Images/exp1a_trial_85_colour2_distractors19_r.png'},
    {'name': 'Images/exp2a_trial_103_colour2_distractors19_l.png', 'path': 'Images/exp2a_trial_103_colour2_distractors19_l.png'},
    {'name': 'Images/exp1b_trial_110_colour3_distractors31_l.png', 'path': 'Images/exp1b_trial_110_colour3_distractors31_l.png'},
    {'name': 'Images/exp1b_trial_51_colour3_distractors4_r.png', 'path': 'Images/exp1b_trial_51_colour3_distractors4_r.png'},
    {'name': 'bank-1300155_640.png', 'path': 'bank-1300155_640.png'},
    {'name': 'Images/exp2a_trial_98_colour1_distractors31_l.png', 'path': 'Images/exp2a_trial_98_colour1_distractors31_l.png'},
    {'name': 'Images/exp1b_trial_79_colour1_distractors19_r.png', 'path': 'Images/exp1b_trial_79_colour1_distractors19_r.png'},
    {'name': 'Images/exp1a_trial_73_colour3_distractors43_l.png', 'path': 'Images/exp1a_trial_73_colour3_distractors43_l.png'},
    {'name': 'Images/exp1a_trial_46_colour2_distractors9_r.png', 'path': 'Images/exp1a_trial_46_colour2_distractors9_r.png'},
    {'name': 'Images/exp1b_trial_96_colour1_distractors9_l.png', 'path': 'Images/exp1b_trial_96_colour1_distractors9_l.png'},
    {'name': 'Images/exp1a_trial_58_colour1_distractors9_l.png', 'path': 'Images/exp1a_trial_58_colour1_distractors9_l.png'},
    {'name': 'Images/exp1a_trial_13_colour3_distractors4_r.png', 'path': 'Images/exp1a_trial_13_colour3_distractors4_r.png'},
    {'name': 'Images/exp2c_trial_81_colour1_distractors43_r.png', 'path': 'Images/exp2c_trial_81_colour1_distractors43_r.png'},
    {'name': 'Images/exp2c_trial_17_colour3_distractors43_r.png', 'path': 'Images/exp2c_trial_17_colour3_distractors43_r.png'},
    {'name': 'Practice arrays/exp1a_trial_0_colour1_distractors1_r.png', 'path': 'Practice arrays/exp1a_trial_0_colour1_distractors1_r.png'},
    {'name': 'Images/exp1b_trial_12_colour3_distractors1_r.png', 'path': 'Images/exp1b_trial_12_colour3_distractors1_r.png'},
    {'name': 'Images/exp1b_trial_41_colour1_distractors19_r.png', 'path': 'Images/exp1b_trial_41_colour1_distractors19_r.png'},
    {'name': 'Images/exp2b_trial_75_colour0_distractors0_l.png', 'path': 'Images/exp2b_trial_75_colour0_distractors0_l.png'},
    {'name': 'Images/exp2a_trial_29_colour2_distractors43_l.png', 'path': 'Images/exp2a_trial_29_colour2_distractors43_l.png'},
    {'name': 'Images/exp1a_trial_23_colour1_distractors43_l.png', 'path': 'Images/exp1a_trial_23_colour1_distractors43_l.png'},
    {'name': 'Images/exp1b_trial_68_colour3_distractors1_l.png', 'path': 'Images/exp1b_trial_68_colour3_distractors1_l.png'},
    {'name': 'Images/exp2c_trial_75_colour0_distractors0_l.png', 'path': 'Images/exp2c_trial_75_colour0_distractors0_l.png'},
    {'name': 'Images/exp2b_trial_35_colour3_distractors43_l.png', 'path': 'Images/exp2b_trial_35_colour3_distractors43_l.png'},
    {'name': 'Images/exp2b_trial_16_colour3_distractors31_r.png', 'path': 'Images/exp2b_trial_16_colour3_distractors31_r.png'},
    {'name': 'Images/exp1a_trial_75_colour0_distractors0_l.png', 'path': 'Images/exp1a_trial_75_colour0_distractors0_l.png'},
    {'name': 'Images/exp2c_trial_85_colour2_distractors19_r.png', 'path': 'Images/exp2c_trial_85_colour2_distractors19_r.png'},
    {'name': 'Images/exp1a_trial_35_colour3_distractors43_l.png', 'path': 'Images/exp1a_trial_35_colour3_distractors43_l.png'},
    {'name': 'Images/exp2a_trial_113_colour0_distractors0_l.png', 'path': 'Images/exp2a_trial_113_colour0_distractors0_l.png'},
    {'name': 'Images/exp2b_trial_39_colour1_distractors4_r.png', 'path': 'Images/exp2b_trial_39_colour1_distractors4_r.png'},
    {'name': 'Images/exp2b_trial_79_colour1_distractors19_r.png', 'path': 'Images/exp2b_trial_79_colour1_distractors19_r.png'},
    {'name': 'Images/exp2a_trial_104_colour2_distractors31_l.png', 'path': 'Images/exp2a_trial_104_colour2_distractors31_l.png'},
    {'name': 'Images/exp2a_trial_81_colour1_distractors43_r.png', 'path': 'Images/exp2a_trial_81_colour1_distractors43_r.png'},
    {'name': 'Images/exp1a_trial_77_colour1_distractors4_r.png', 'path': 'Images/exp1a_trial_77_colour1_distractors4_r.png'},
    {'name': 'Images/exp2b_trial_41_colour1_distractors19_r.png', 'path': 'Images/exp2b_trial_41_colour1_distractors19_r.png'},
    {'name': 'Images/exp2a_trial_10_colour2_distractors31_r.png', 'path': 'Images/exp2a_trial_10_colour2_distractors31_r.png'},
    {'name': 'Images/exp1a_trial_80_colour1_distractors31_r.png', 'path': 'Images/exp1a_trial_80_colour1_distractors31_r.png'},
    {'name': 'Images/exp2c_trial_48_colour2_distractors31_r.png', 'path': 'Images/exp2c_trial_48_colour2_distractors31_r.png'},
    {'name': 'Images/exp1b_trial_74_colour0_distractors0_r.png', 'path': 'Images/exp1b_trial_74_colour0_distractors0_r.png'},
    {'name': 'Images/exp2b_trial_11_colour2_distractors43_r.png', 'path': 'Images/exp2b_trial_11_colour2_distractors43_r.png'},
    {'name': 'Images/exp1a_trial_111_colour3_distractors43_l.png', 'path': 'Images/exp1a_trial_111_colour3_distractors43_l.png'},
    {'name': 'Images/exp2c_trial_7_colour2_distractors4_r.png', 'path': 'Images/exp2c_trial_7_colour2_distractors4_r.png'},
    {'name': 'Images/exp2b_trial_14_colour3_distractors9_r.png', 'path': 'Images/exp2b_trial_14_colour3_distractors9_r.png'},
    {'name': 'Images/exp2a_trial_24_colour2_distractors1_l.png', 'path': 'Images/exp2a_trial_24_colour2_distractors1_l.png'},
    {'name': 'Images/exp1a_trial_113_colour0_distractors0_l.png', 'path': 'Images/exp1a_trial_113_colour0_distractors0_l.png'},
    {'name': 'Images/exp2b_trial_67_colour2_distractors43_l.png', 'path': 'Images/exp2b_trial_67_colour2_distractors43_l.png'},
    {'name': 'Images/exp1a_trial_6_colour2_distractors1_r.png', 'path': 'Images/exp1a_trial_6_colour2_distractors1_r.png'},
    {'name': 'Images/exp2c_trial_59_colour1_distractors19_l.png', 'path': 'Images/exp2c_trial_59_colour1_distractors19_l.png'},
    {'name': 'Images/exp2c_trial_16_colour3_distractors31_r.png', 'path': 'Images/exp2c_trial_16_colour3_distractors31_r.png'},
    {'name': 'Images/exp2a_trial_62_colour2_distractors1_l.png', 'path': 'Images/exp2a_trial_62_colour2_distractors1_l.png'},
    {'name': 'Images/exp2c_trial_69_colour3_distractors4_l.png', 'path': 'Images/exp2c_trial_69_colour3_distractors4_l.png'},
    {'name': 'Images/exp2a_trial_2_colour1_distractors9_r.png', 'path': 'Images/exp2a_trial_2_colour1_distractors9_r.png'},
    {'name': 'Images/exp2a_trial_36_colour0_distractors0_r.png', 'path': 'Images/exp2a_trial_36_colour0_distractors0_r.png'},
    {'name': 'Images/exp2a_trial_9_colour2_distractors19_r.png', 'path': 'Images/exp2a_trial_9_colour2_distractors19_r.png'},
    {'name': 'Images/exp1b_trial_107_colour3_distractors4_l.png', 'path': 'Images/exp1b_trial_107_colour3_distractors4_l.png'},
    {'name': 'Images/exp1b_trial_9_colour2_distractors19_r.png', 'path': 'Images/exp1b_trial_9_colour2_distractors19_r.png'},
    {'name': 'Images/exp2a_trial_87_colour2_distractors43_r.png', 'path': 'Images/exp2a_trial_87_colour2_distractors43_r.png'},
    {'name': 'Images/exp1b_trial_90_colour3_distractors9_r.png', 'path': 'Images/exp1b_trial_90_colour3_distractors9_r.png'},
    {'name': 'Images/exp2a_trial_15_colour3_distractors19_r.png', 'path': 'Images/exp2a_trial_15_colour3_distractors19_r.png'},
    {'name': 'Images/exp2a_trial_55_colour3_distractors43_r.png', 'path': 'Images/exp2a_trial_55_colour3_distractors43_r.png'},
    {'name': 'Images/exp1a_trial_18_colour1_distractors1_l.png', 'path': 'Images/exp1a_trial_18_colour1_distractors1_l.png'},
    {'name': 'Images/exp2a_trial_23_colour1_distractors43_l.png', 'path': 'Images/exp2a_trial_23_colour1_distractors43_l.png'},
    {'name': 'Images/exp2a_trial_72_colour3_distractors31_l.png', 'path': 'Images/exp2a_trial_72_colour3_distractors31_l.png'},
    {'name': 'Images/exp1b_trial_95_colour1_distractors4_l.png', 'path': 'Images/exp1b_trial_95_colour1_distractors4_l.png'},
    {'name': 'Images/exp2a_trial_4_colour1_distractors31_r.png', 'path': 'Images/exp2a_trial_4_colour1_distractors31_r.png'},
    {'name': 'Images/exp2b_trial_51_colour3_distractors4_r.png', 'path': 'Images/exp2b_trial_51_colour3_distractors4_r.png'},
    {'name': 'Images/exp2c_trial_87_colour2_distractors43_r.png', 'path': 'Images/exp2c_trial_87_colour2_distractors43_r.png'},
    {'name': 'Images/exp1a_trial_56_colour1_distractors1_l.png', 'path': 'Images/exp1a_trial_56_colour1_distractors1_l.png'},
    {'name': 'Images/exp1b_trial_36_colour0_distractors0_r.png', 'path': 'Images/exp1b_trial_36_colour0_distractors0_r.png'},
    {'name': 'Images/exp1a_trial_26_colour2_distractors9_l.png', 'path': 'Images/exp1a_trial_26_colour2_distractors9_l.png'},
    {'name': 'Images/exp2a_trial_52_colour3_distractors9_r.png', 'path': 'Images/exp2a_trial_52_colour3_distractors9_r.png'},
    {'name': 'Images/exp1a_trial_39_colour1_distractors4_r.png', 'path': 'Images/exp1a_trial_39_colour1_distractors4_r.png'},
    {'name': 'Images/exp1a_trial_16_colour3_distractors31_r.png', 'path': 'Images/exp1a_trial_16_colour3_distractors31_r.png'},
    {'name': 'Images/exp2b_trial_46_colour2_distractors9_r.png', 'path': 'Images/exp2b_trial_46_colour2_distractors9_r.png'},
    {'name': 'Images/exp2c_trial_83_colour2_distractors4_r.png', 'path': 'Images/exp2c_trial_83_colour2_distractors4_r.png'},
    {'name': 'Images/exp2c_trial_35_colour3_distractors43_l.png', 'path': 'Images/exp2c_trial_35_colour3_distractors43_l.png'},
    {'name': 'Images/exp1a_trial_65_colour2_distractors19_l.png', 'path': 'Images/exp1a_trial_65_colour2_distractors19_l.png'},
    {'name': 'Images/exp1a_trial_9_colour2_distractors19_r.png', 'path': 'Images/exp1a_trial_9_colour2_distractors19_r.png'},
    {'name': 'Images/exp1a_trial_54_colour3_distractors31_r.png', 'path': 'Images/exp1a_trial_54_colour3_distractors31_r.png'},
    {'name': 'Images/exp2c_trial_39_colour1_distractors4_r.png', 'path': 'Images/exp2c_trial_39_colour1_distractors4_r.png'},
    {'name': 'Images/exp2b_trial_42_colour1_distractors31_r.png', 'path': 'Images/exp2b_trial_42_colour1_distractors31_r.png'},
    {'name': 'Images/exp2c_trial_98_colour1_distractors31_l.png', 'path': 'Images/exp2c_trial_98_colour1_distractors31_l.png'},
    {'name': 'Images/exp1a_trial_70_colour3_distractors9_l.png', 'path': 'Images/exp1a_trial_70_colour3_distractors9_l.png'},
    {'name': 'Images/exp2b_trial_21_colour1_distractors19_l.png', 'path': 'Images/exp2b_trial_21_colour1_distractors19_l.png'},
    {'name': 'Images/exp1b_trial_109_colour3_distractors19_l.png', 'path': 'Images/exp1b_trial_109_colour3_distractors19_l.png'},
    {'name': 'Practice arrays/exp1a_trial_25_colour2_distractors4_l.png', 'path': 'Practice arrays/exp1a_trial_25_colour2_distractors4_l.png'},
    {'name': 'Images/exp1b_trial_33_colour3_distractors19_l.png', 'path': 'Images/exp1b_trial_33_colour3_distractors19_l.png'},
    {'name': 'Images/exp2c_trial_8_colour2_distractors9_r.png', 'path': 'Images/exp2c_trial_8_colour2_distractors9_r.png'},
    {'name': 'Images/exp2c_trial_20_colour1_distractors9_l.png', 'path': 'Images/exp2c_trial_20_colour1_distractors9_l.png'},
    {'name': 'Images/exp1a_trial_21_colour1_distractors19_l.png', 'path': 'Images/exp1a_trial_21_colour1_distractors19_l.png'},
    {'name': 'Images/exp2a_trial_71_colour3_distractors19_l.png', 'path': 'Images/exp2a_trial_71_colour3_distractors19_l.png'},
    {'name': 'Images/exp1a_trial_3_colour1_distractors19_r.png', 'path': 'Images/exp1a_trial_3_colour1_distractors19_r.png'},
    {'name': 'Images/exp2b_trial_109_colour3_distractors19_l.png', 'path': 'Images/exp2b_trial_109_colour3_distractors19_l.png'},
    {'name': 'Images/exp1b_trial_81_colour1_distractors43_r.png', 'path': 'Images/exp1b_trial_81_colour1_distractors43_r.png'},
    {'name': 'Images/exp1b_trial_18_colour1_distractors1_l.png', 'path': 'Images/exp1b_trial_18_colour1_distractors1_l.png'},
    {'name': 'Images/exp2c_trial_90_colour3_distractors9_r.png', 'path': 'Images/exp2c_trial_90_colour3_distractors9_r.png'},
    {'name': 'Images/exp1b_trial_14_colour3_distractors9_r.png', 'path': 'Images/exp1b_trial_14_colour3_distractors9_r.png'},
    {'name': 'Images/exp2b_trial_87_colour2_distractors43_r.png', 'path': 'Images/exp2b_trial_87_colour2_distractors43_r.png'},
    {'name': 'Images/exp2b_trial_37_colour0_distractors0_l.png', 'path': 'Images/exp2b_trial_37_colour0_distractors0_l.png'},
    {'name': 'Images/exp2c_trial_37_colour0_distractors0_l.png', 'path': 'Images/exp2c_trial_37_colour0_distractors0_l.png'},
    {'name': 'Images/exp2a_trial_76_colour1_distractors1_r.png', 'path': 'Images/exp2a_trial_76_colour1_distractors1_r.png'},
    {'name': 'Images/exp1a_trial_2_colour1_distractors9_r.png', 'path': 'Images/exp1a_trial_2_colour1_distractors9_r.png'},
    {'name': 'Images/exp1b_trial_31_colour3_distractors4_l.png', 'path': 'Images/exp1b_trial_31_colour3_distractors4_l.png'},
    {'name': 'Images/exp1b_trial_64_colour2_distractors9_l.png', 'path': 'Images/exp1b_trial_64_colour2_distractors9_l.png'},
    {'name': 'Images/exp1b_trial_62_colour2_distractors1_l.png', 'path': 'Images/exp1b_trial_62_colour2_distractors1_l.png'},
    {'name': 'Images/exp1a_trial_89_colour3_distractors4_r.png', 'path': 'Images/exp1a_trial_89_colour3_distractors4_r.png'},
    {'name': 'Images/exp2c_trial_109_colour3_distractors19_l.png', 'path': 'Images/exp2c_trial_109_colour3_distractors19_l.png'},
    {'name': 'Images/exp2c_trial_104_colour2_distractors31_l.png', 'path': 'Images/exp2c_trial_104_colour2_distractors31_l.png'},
    {'name': 'Images/exp1a_trial_74_colour0_distractors0_r.png', 'path': 'Images/exp1a_trial_74_colour0_distractors0_r.png'},
    {'name': 'Images/exp2a_trial_3_colour1_distractors19_r.png', 'path': 'Images/exp2a_trial_3_colour1_distractors19_r.png'},
    {'name': 'Images/exp1a_trial_17_colour3_distractors43_r.png', 'path': 'Images/exp1a_trial_17_colour3_distractors43_r.png'},
    {'name': 'Images/exp2c_trial_58_colour1_distractors9_l.png', 'path': 'Images/exp2c_trial_58_colour1_distractors9_l.png'},
    {'name': 'Images/exp1a_trial_41_colour1_distractors19_r.png', 'path': 'Images/exp1a_trial_41_colour1_distractors19_r.png'},
    {'name': 'Images/exp1b_trial_16_colour3_distractors31_r.png', 'path': 'Images/exp1b_trial_16_colour3_distractors31_r.png'},
    {'name': 'Images/exp2c_trial_66_colour2_distractors31_l.png', 'path': 'Images/exp2c_trial_66_colour2_distractors31_l.png'},
    {'name': 'Practice arrays/exp1a_trial_10_colour2_distractors31_r.png', 'path': 'Practice arrays/exp1a_trial_10_colour2_distractors31_r.png'},
    {'name': 'Images/exp1a_trial_15_colour3_distractors19_r.png', 'path': 'Images/exp1a_trial_15_colour3_distractors19_r.png'},
    {'name': 'Images/exp2a_trial_85_colour2_distractors19_r.png', 'path': 'Images/exp2a_trial_85_colour2_distractors19_r.png'},
    {'name': 'Images/exp2b_trial_26_colour2_distractors9_l.png', 'path': 'Images/exp2b_trial_26_colour2_distractors9_l.png'},
    {'name': 'Images/exp1b_trial_103_colour2_distractors19_l.png', 'path': 'Images/exp1b_trial_103_colour2_distractors19_l.png'},
    {'name': 'Images/exp2a_trial_38_colour1_distractors1_r.png', 'path': 'Images/exp2a_trial_38_colour1_distractors1_r.png'},
    {'name': 'Images/exp2b_trial_56_colour1_distractors1_l.png', 'path': 'Images/exp2b_trial_56_colour1_distractors1_l.png'},
    {'name': 'Images/exp1a_trial_51_colour3_distractors4_r.png', 'path': 'Images/exp1a_trial_51_colour3_distractors4_r.png'},
    {'name': 'Images/exp2a_trial_59_colour1_distractors19_l.png', 'path': 'Images/exp2a_trial_59_colour1_distractors19_l.png'},
    {'name': 'Images/exp1a_trial_0_colour1_distractors1_r.png', 'path': 'Images/exp1a_trial_0_colour1_distractors1_r.png'},
    {'name': 'Images/exp2c_trial_42_colour1_distractors31_r.png', 'path': 'Images/exp2c_trial_42_colour1_distractors31_r.png'},
    {'name': 'Images/exp2a_trial_26_colour2_distractors9_l.png', 'path': 'Images/exp2a_trial_26_colour2_distractors9_l.png'},
    {'name': 'Images/exp2b_trial_83_colour2_distractors4_r.png', 'path': 'Images/exp2b_trial_83_colour2_distractors4_r.png'},
    {'name': 'Images/exp2c_trial_108_colour3_distractors9_l.png', 'path': 'Images/exp2c_trial_108_colour3_distractors9_l.png'},
    {'name': 'Images/exp1b_trial_58_colour1_distractors9_l.png', 'path': 'Images/exp1b_trial_58_colour1_distractors9_l.png'},
    {'name': 'Images/exp1a_trial_86_colour2_distractors31_r.png', 'path': 'Images/exp1a_trial_86_colour2_distractors31_r.png'},
    {'name': 'Images/exp2b_trial_30_colour3_distractors1_l.png', 'path': 'Images/exp2b_trial_30_colour3_distractors1_l.png'},
    {'name': 'Images/exp2b_trial_47_colour2_distractors19_r.png', 'path': 'Images/exp2b_trial_47_colour2_distractors19_r.png'},
    {'name': 'Images/exp2c_trial_36_colour0_distractors0_r.png', 'path': 'Images/exp2c_trial_36_colour0_distractors0_r.png'},
    {'name': 'Images/exp1a_trial_53_colour3_distractors19_r.png', 'path': 'Images/exp1a_trial_53_colour3_distractors19_r.png'},
    {'name': 'Images/exp1b_trial_56_colour1_distractors1_l.png', 'path': 'Images/exp1b_trial_56_colour1_distractors1_l.png'},
    {'name': 'Images/exp2b_trial_90_colour3_distractors9_r.png', 'path': 'Images/exp2b_trial_90_colour3_distractors9_r.png'},
    {'name': 'Practice arrays/exp1a_trial_35_colour3_distractors43_l.png', 'path': 'Practice arrays/exp1a_trial_35_colour3_distractors43_l.png'},
    {'name': 'Images/exp2b_trial_48_colour2_distractors31_r.png', 'path': 'Images/exp2b_trial_48_colour2_distractors31_r.png'},
    {'name': 'Images/exp2b_trial_0_colour1_distractors1_r.png', 'path': 'Images/exp2b_trial_0_colour1_distractors1_r.png'},
    {'name': 'Images/exp1b_trial_27_colour2_distractors19_l.png', 'path': 'Images/exp1b_trial_27_colour2_distractors19_l.png'},
    {'name': 'Images/exp1b_trial_49_colour2_distractors43_r.png', 'path': 'Images/exp1b_trial_49_colour2_distractors43_r.png'},
    {'name': 'Images/exp2c_trial_6_colour2_distractors1_r.png', 'path': 'Images/exp2c_trial_6_colour2_distractors1_r.png'},
    {'name': 'Images/exp1a_trial_106_colour3_distractors1_l.png', 'path': 'Images/exp1a_trial_106_colour3_distractors1_l.png'},
    {'name': 'image_stimuli_practice.xlsx', 'path': 'image_stimuli_practice.xlsx'},
    {'name': 'Images/exp2b_trial_104_colour2_distractors31_l.png', 'path': 'Images/exp2b_trial_104_colour2_distractors31_l.png'},
    {'name': 'Images/exp2a_trial_60_colour1_distractors31_l.png', 'path': 'Images/exp2a_trial_60_colour1_distractors31_l.png'},
    {'name': 'Images/exp2a_trial_54_colour3_distractors31_r.png', 'path': 'Images/exp2a_trial_54_colour3_distractors31_r.png'},
    {'name': 'Images/exp1b_trial_111_colour3_distractors43_l.png', 'path': 'Images/exp1b_trial_111_colour3_distractors43_l.png'},
    {'name': 'Images/exp2a_trial_21_colour1_distractors19_l.png', 'path': 'Images/exp2a_trial_21_colour1_distractors19_l.png'},
    {'name': 'Images/exp1a_trial_24_colour2_distractors1_l.png', 'path': 'Images/exp1a_trial_24_colour2_distractors1_l.png'},
    {'name': 'Images/exp2a_trial_31_colour3_distractors4_l.png', 'path': 'Images/exp2a_trial_31_colour3_distractors4_l.png'},
    {'name': 'Images/exp2a_trial_83_colour2_distractors4_r.png', 'path': 'Images/exp2a_trial_83_colour2_distractors4_r.png'},
    {'name': 'Images/exp1a_trial_14_colour3_distractors9_r.png', 'path': 'Images/exp1a_trial_14_colour3_distractors9_r.png'},
    {'name': 'Images/exp1b_trial_102_colour2_distractors9_l.png', 'path': 'Images/exp1b_trial_102_colour2_distractors9_l.png'},
    {'name': 'Practice arrays/exp1a_trial_7_colour2_distractors4_r.png', 'path': 'Practice arrays/exp1a_trial_7_colour2_distractors4_r.png'},
    {'name': 'Images/exp1a_trial_7_colour2_distractors4_r.png', 'path': 'Images/exp1a_trial_7_colour2_distractors4_r.png'},
    {'name': 'Images/exp1b_trial_30_colour3_distractors1_l.png', 'path': 'Images/exp1b_trial_30_colour3_distractors1_l.png'},
    {'name': 'Images/exp1b_trial_43_colour1_distractors43_r.png', 'path': 'Images/exp1b_trial_43_colour1_distractors43_r.png'},
    {'name': 'Images/exp2c_trial_54_colour3_distractors31_r.png', 'path': 'Images/exp2c_trial_54_colour3_distractors31_r.png'},
    {'name': 'Images/exp1b_trial_10_colour2_distractors31_r.png', 'path': 'Images/exp1b_trial_10_colour2_distractors31_r.png'},
    {'name': 'Images/exp2b_trial_4_colour1_distractors31_r.png', 'path': 'Images/exp2b_trial_4_colour1_distractors31_r.png'},
    {'name': 'Images/exp1b_trial_37_colour0_distractors0_l.png', 'path': 'Images/exp1b_trial_37_colour0_distractors0_l.png'},
    {'name': 'Images/exp1a_trial_62_colour2_distractors1_l.png', 'path': 'Images/exp1a_trial_62_colour2_distractors1_l.png'},
    {'name': 'Images/exp2a_trial_63_colour2_distractors4_l.png', 'path': 'Images/exp2a_trial_63_colour2_distractors4_l.png'},
    {'name': 'Images/exp2c_trial_10_colour2_distractors31_r.png', 'path': 'Images/exp2c_trial_10_colour2_distractors31_r.png'},
    {'name': 'Images/exp2b_trial_102_colour2_distractors9_l.png', 'path': 'Images/exp2b_trial_102_colour2_distractors9_l.png'},
    {'name': 'Images/exp2a_trial_100_colour2_distractors1_l.png', 'path': 'Images/exp2a_trial_100_colour2_distractors1_l.png'},
    {'name': 'Images_List.xlsx', 'path': 'Images_List.xlsx'},
    {'name': 'Images/exp1b_trial_39_colour1_distractors4_r.png', 'path': 'Images/exp1b_trial_39_colour1_distractors4_r.png'},
    {'name': 'Images/exp1b_trial_46_colour2_distractors9_r.png', 'path': 'Images/exp1b_trial_46_colour2_distractors9_r.png'},
    {'name': 'Images/exp2c_trial_82_colour2_distractors1_r.png', 'path': 'Images/exp2c_trial_82_colour2_distractors1_r.png'},
    {'name': 'Images/exp2a_trial_97_colour1_distractors19_l.png', 'path': 'Images/exp2a_trial_97_colour1_distractors19_l.png'},
    {'name': 'Images/exp2a_trial_78_colour1_distractors9_r.png', 'path': 'Images/exp2a_trial_78_colour1_distractors9_r.png'},
    {'name': 'Images/exp2a_trial_102_colour2_distractors9_l.png', 'path': 'Images/exp2a_trial_102_colour2_distractors9_l.png'},
    {'name': 'Images/exp2a_trial_35_colour3_distractors43_l.png', 'path': 'Images/exp2a_trial_35_colour3_distractors43_l.png'},
    {'name': 'Images/exp2b_trial_8_colour2_distractors9_r.png', 'path': 'Images/exp2b_trial_8_colour2_distractors9_r.png'},
    {'name': 'Images/exp2a_trial_80_colour1_distractors31_r.png', 'path': 'Images/exp2a_trial_80_colour1_distractors31_r.png'},
    {'name': 'Images/exp1a_trial_105_colour2_distractors43_l.png', 'path': 'Images/exp1a_trial_105_colour2_distractors43_l.png'},
    {'name': 'Images/exp1a_trial_42_colour1_distractors31_r.png', 'path': 'Images/exp1a_trial_42_colour1_distractors31_r.png'},
    {'name': 'Images/exp2c_trial_103_colour2_distractors19_l.png', 'path': 'Images/exp2c_trial_103_colour2_distractors19_l.png'},
    {'name': 'Images/exp1a_trial_103_colour2_distractors19_l.png', 'path': 'Images/exp1a_trial_103_colour2_distractors19_l.png'},
    {'name': 'Images/exp1a_trial_87_colour2_distractors43_r.png', 'path': 'Images/exp1a_trial_87_colour2_distractors43_r.png'},
    {'name': 'Images/exp2c_trial_76_colour1_distractors1_r.png', 'path': 'Images/exp2c_trial_76_colour1_distractors1_r.png'},
    {'name': 'Images/exp2c_trial_19_colour1_distractors4_l.png', 'path': 'Images/exp2c_trial_19_colour1_distractors4_l.png'},
    {'name': 'Images/exp1a_trial_57_colour1_distractors4_l.png', 'path': 'Images/exp1a_trial_57_colour1_distractors4_l.png'},
    {'name': 'Images/exp1a_trial_61_colour1_distractors43_l.png', 'path': 'Images/exp1a_trial_61_colour1_distractors43_l.png'},
    {'name': 'Images/exp1a_trial_95_colour1_distractors4_l.png', 'path': 'Images/exp1a_trial_95_colour1_distractors4_l.png'},
    {'name': 'Images/exp1b_trial_55_colour3_distractors43_r.png', 'path': 'Images/exp1b_trial_55_colour3_distractors43_r.png'},
    {'name': 'Images/exp1a_trial_82_colour2_distractors1_r.png', 'path': 'Images/exp1a_trial_82_colour2_distractors1_r.png'},
    {'name': 'Images/exp2a_trial_27_colour2_distractors19_l.png', 'path': 'Images/exp2a_trial_27_colour2_distractors19_l.png'},
    {'name': 'Practice arrays/exp1a_trial_20_colour1_distractors9_l.png', 'path': 'Practice arrays/exp1a_trial_20_colour1_distractors9_l.png'},
    {'name': 'Images/exp2b_trial_27_colour2_distractors19_l.png', 'path': 'Images/exp2b_trial_27_colour2_distractors19_l.png'},
    {'name': 'Practice arrays/exp1a_trial_5_colour1_distractors43_r.png', 'path': 'Practice arrays/exp1a_trial_5_colour1_distractors43_r.png'},
    {'name': 'Images/exp2c_trial_41_colour1_distractors19_r.png', 'path': 'Images/exp2c_trial_41_colour1_distractors19_r.png'},
    {'name': 'Images/exp2b_trial_12_colour3_distractors1_r.png', 'path': 'Images/exp2b_trial_12_colour3_distractors1_r.png'},
    {'name': 'Images/exp2a_trial_77_colour1_distractors4_r.png', 'path': 'Images/exp2a_trial_77_colour1_distractors4_r.png'},
    {'name': 'Images/exp2b_trial_84_colour2_distractors9_r.png', 'path': 'Images/exp2b_trial_84_colour2_distractors9_r.png'},
    {'name': 'Images/exp2c_trial_68_colour3_distractors1_l.png', 'path': 'Images/exp2c_trial_68_colour3_distractors1_l.png'},
    {'name': 'Images/exp2b_trial_98_colour1_distractors31_l.png', 'path': 'Images/exp2b_trial_98_colour1_distractors31_l.png'},
    {'name': 'Images/exp2c_trial_77_colour1_distractors4_r.png', 'path': 'Images/exp2c_trial_77_colour1_distractors4_r.png'},
    {'name': 'Images/exp2a_trial_57_colour1_distractors4_l.png', 'path': 'Images/exp2a_trial_57_colour1_distractors4_l.png'},
    {'name': 'Images/exp1b_trial_21_colour1_distractors19_l.png', 'path': 'Images/exp1b_trial_21_colour1_distractors19_l.png'},
    {'name': 'Images/exp2b_trial_92_colour3_distractors31_r.png', 'path': 'Images/exp2b_trial_92_colour3_distractors31_r.png'},
    {'name': 'Images/exp1b_trial_63_colour2_distractors4_l.png', 'path': 'Images/exp1b_trial_63_colour2_distractors4_l.png'},
    {'name': 'Images/exp2a_trial_22_colour1_distractors31_l.png', 'path': 'Images/exp2a_trial_22_colour1_distractors31_l.png'},
    {'name': 'Images/exp1b_trial_77_colour1_distractors4_r.png', 'path': 'Images/exp1b_trial_77_colour1_distractors4_r.png'},
    {'name': 'Images/exp1a_trial_37_colour0_distractors0_l.png', 'path': 'Images/exp1a_trial_37_colour0_distractors0_l.png'},
    {'name': 'Images/exp2b_trial_5_colour1_distractors43_r.png', 'path': 'Images/exp2b_trial_5_colour1_distractors43_r.png'},
    {'name': 'Images/exp1a_trial_52_colour3_distractors9_r.png', 'path': 'Images/exp1a_trial_52_colour3_distractors9_r.png'},
    {'name': 'Images/exp2b_trial_33_colour3_distractors19_l.png', 'path': 'Images/exp2b_trial_33_colour3_distractors19_l.png'},
    {'name': 'Images/exp2b_trial_94_colour1_distractors1_l.png', 'path': 'Images/exp2b_trial_94_colour1_distractors1_l.png'},
    {'name': 'Images/exp2b_trial_45_colour2_distractors4_r.png', 'path': 'Images/exp2b_trial_45_colour2_distractors4_r.png'},
    {'name': 'Images/exp2b_trial_34_colour3_distractors31_l.png', 'path': 'Images/exp2b_trial_34_colour3_distractors31_l.png'},
    {'name': 'Images/exp1a_trial_68_colour3_distractors1_l.png', 'path': 'Images/exp1a_trial_68_colour3_distractors1_l.png'},
    {'name': 'Images/exp2b_trial_77_colour1_distractors4_r.png', 'path': 'Images/exp2b_trial_77_colour1_distractors4_r.png'},
    {'name': 'Images/exp2b_trial_2_colour1_distractors9_r.png', 'path': 'Images/exp2b_trial_2_colour1_distractors9_r.png'},
    {'name': 'Images/exp2a_trial_12_colour3_distractors1_r.png', 'path': 'Images/exp2a_trial_12_colour3_distractors1_r.png'},
    {'name': 'Images/exp1b_trial_1_colour1_distractors4_r.png', 'path': 'Images/exp1b_trial_1_colour1_distractors4_r.png'},
    {'name': 'Images/exp2a_trial_16_colour3_distractors31_r.png', 'path': 'Images/exp2a_trial_16_colour3_distractors31_r.png'},
    {'name': 'Images/exp1a_trial_64_colour2_distractors9_l.png', 'path': 'Images/exp1a_trial_64_colour2_distractors9_l.png'},
    {'name': 'Images/exp2b_trial_40_colour1_distractors9_r.png', 'path': 'Images/exp2b_trial_40_colour1_distractors9_r.png'},
    {'name': 'Images/exp2b_trial_22_colour1_distractors31_l.png', 'path': 'Images/exp2b_trial_22_colour1_distractors31_l.png'},
    {'name': 'Images/exp1b_trial_76_colour1_distractors1_r.png', 'path': 'Images/exp1b_trial_76_colour1_distractors1_r.png'},
    {'name': 'Images/exp2c_trial_67_colour2_distractors43_l.png', 'path': 'Images/exp2c_trial_67_colour2_distractors43_l.png'},
    {'name': 'Images/exp2c_trial_44_colour2_distractors1_r.png', 'path': 'Images/exp2c_trial_44_colour2_distractors1_r.png'},
    {'name': 'Practice arrays/exp1a_trial_21_colour1_distractors19_l.png', 'path': 'Practice arrays/exp1a_trial_21_colour1_distractors19_l.png'},
    {'name': 'Images/exp2a_trial_32_colour3_distractors9_l.png', 'path': 'Images/exp2a_trial_32_colour3_distractors9_l.png'},
    {'name': 'Images/exp2c_trial_12_colour3_distractors1_r.png', 'path': 'Images/exp2c_trial_12_colour3_distractors1_r.png'},
    {'name': 'Images/exp1a_trial_83_colour2_distractors4_r.png', 'path': 'Images/exp1a_trial_83_colour2_distractors4_r.png'},
    {'name': 'Images/exp2b_trial_53_colour3_distractors19_r.png', 'path': 'Images/exp2b_trial_53_colour3_distractors19_r.png'},
    {'name': 'Images/exp1b_trial_65_colour2_distractors19_l.png', 'path': 'Images/exp1b_trial_65_colour2_distractors19_l.png'},
    {'name': 'Images/exp2b_trial_108_colour3_distractors9_l.png', 'path': 'Images/exp2b_trial_108_colour3_distractors9_l.png'},
    {'name': 'Images/exp1b_trial_70_colour3_distractors9_l.png', 'path': 'Images/exp1b_trial_70_colour3_distractors9_l.png'},
    {'name': 'Images/exp1b_trial_113_colour0_distractors0_l.png', 'path': 'Images/exp1b_trial_113_colour0_distractors0_l.png'},
    {'name': 'Images/exp2a_trial_39_colour1_distractors4_r.png', 'path': 'Images/exp2a_trial_39_colour1_distractors4_r.png'},
    {'name': 'Images/exp2b_trial_54_colour3_distractors31_r.png', 'path': 'Images/exp2b_trial_54_colour3_distractors31_r.png'},
    {'name': 'Images/exp2b_trial_99_colour1_distractors43_l.png', 'path': 'Images/exp2b_trial_99_colour1_distractors43_l.png'},
    {'name': 'Images/exp2b_trial_23_colour1_distractors43_l.png', 'path': 'Images/exp2b_trial_23_colour1_distractors43_l.png'},
    {'name': 'Images/exp2b_trial_110_colour3_distractors31_l.png', 'path': 'Images/exp2b_trial_110_colour3_distractors31_l.png'},
    {'name': 'Images/exp2c_trial_63_colour2_distractors4_l.png', 'path': 'Images/exp2c_trial_63_colour2_distractors4_l.png'},
    {'name': 'Images/exp2a_trial_43_colour1_distractors43_r.png', 'path': 'Images/exp2a_trial_43_colour1_distractors43_r.png'},
    {'name': 'Images/exp1b_trial_4_colour1_distractors31_r.png', 'path': 'Images/exp1b_trial_4_colour1_distractors31_r.png'},
    {'name': 'Images/exp2a_trial_5_colour1_distractors43_r.png', 'path': 'Images/exp2a_trial_5_colour1_distractors43_r.png'},
    {'name': 'Images/exp2b_trial_101_colour2_distractors4_l.png', 'path': 'Images/exp2b_trial_101_colour2_distractors4_l.png'},
    {'name': 'Images/exp1a_trial_101_colour2_distractors4_l.png', 'path': 'Images/exp1a_trial_101_colour2_distractors4_l.png'},
    {'name': 'Practice arrays/exp1a_trial_13_colour3_distractors4_r.png', 'path': 'Practice arrays/exp1a_trial_13_colour3_distractors4_r.png'},
    {'name': 'Images/exp1a_trial_45_colour2_distractors4_r.png', 'path': 'Images/exp1a_trial_45_colour2_distractors4_r.png'},
    {'name': 'Images/exp1a_trial_72_colour3_distractors31_l.png', 'path': 'Images/exp1a_trial_72_colour3_distractors31_l.png'},
    {'name': 'Images/exp1b_trial_17_colour3_distractors43_r.png', 'path': 'Images/exp1b_trial_17_colour3_distractors43_r.png'},
    {'name': 'Images/exp2b_trial_70_colour3_distractors9_l.png', 'path': 'Images/exp2b_trial_70_colour3_distractors9_l.png'},
    {'name': 'Images/exp2b_trial_107_colour3_distractors4_l.png', 'path': 'Images/exp2b_trial_107_colour3_distractors4_l.png'},
    {'name': 'Images/exp2c_trial_5_colour1_distractors43_r.png', 'path': 'Images/exp2c_trial_5_colour1_distractors43_r.png'},
    {'name': 'Images/exp2c_trial_73_colour3_distractors43_l.png', 'path': 'Images/exp2c_trial_73_colour3_distractors43_l.png'},
    {'name': 'Images/exp2b_trial_32_colour3_distractors9_l.png', 'path': 'Images/exp2b_trial_32_colour3_distractors9_l.png'},
    {'name': 'Images/exp2c_trial_106_colour3_distractors1_l.png', 'path': 'Images/exp2c_trial_106_colour3_distractors1_l.png'},
    {'name': 'Images/exp1a_trial_91_colour3_distractors19_r.png', 'path': 'Images/exp1a_trial_91_colour3_distractors19_r.png'},
    {'name': 'Images/exp2c_trial_51_colour3_distractors4_r.png', 'path': 'Images/exp2c_trial_51_colour3_distractors4_r.png'},
    {'name': 'Images/exp1a_trial_12_colour3_distractors1_r.png', 'path': 'Images/exp1a_trial_12_colour3_distractors1_r.png'},
    {'name': 'Images/exp2b_trial_82_colour2_distractors1_r.png', 'path': 'Images/exp2b_trial_82_colour2_distractors1_r.png'},
    {'name': 'Images/exp1b_trial_48_colour2_distractors31_r.png', 'path': 'Images/exp1b_trial_48_colour2_distractors31_r.png'},
    {'name': 'Images/exp1b_trial_84_colour2_distractors9_r.png', 'path': 'Images/exp1b_trial_84_colour2_distractors9_r.png'},
    {'name': 'Practice arrays/exp1a_trial_8_colour2_distractors9_r.png', 'path': 'Practice arrays/exp1a_trial_8_colour2_distractors9_r.png'},
    {'name': 'Images/exp1b_trial_50_colour3_distractors1_r.png', 'path': 'Images/exp1b_trial_50_colour3_distractors1_r.png'},
    {'name': 'Images/exp2a_trial_112_colour0_distractors0_r.png', 'path': 'Images/exp2a_trial_112_colour0_distractors0_r.png'},
    {'name': 'Images/exp2c_trial_74_colour0_distractors0_r.png', 'path': 'Images/exp2c_trial_74_colour0_distractors0_r.png'},
    {'name': 'Images/exp2a_trial_69_colour3_distractors4_l.png', 'path': 'Images/exp2a_trial_69_colour3_distractors4_l.png'},
    {'name': 'Images/exp1a_trial_38_colour1_distractors1_r.png', 'path': 'Images/exp1a_trial_38_colour1_distractors1_r.png'},
    {'name': 'Images/exp1b_trial_3_colour1_distractors19_r.png', 'path': 'Images/exp1b_trial_3_colour1_distractors19_r.png'},
    {'name': 'Images/exp1b_trial_6_colour2_distractors1_r.png', 'path': 'Images/exp1b_trial_6_colour2_distractors1_r.png'},
    {'name': 'Images/exp1b_trial_85_colour2_distractors19_r.png', 'path': 'Images/exp1b_trial_85_colour2_distractors19_r.png'},
    {'name': 'Images/exp2b_trial_58_colour1_distractors9_l.png', 'path': 'Images/exp2b_trial_58_colour1_distractors9_l.png'},
    {'name': 'Images/exp1a_trial_27_colour2_distractors19_l.png', 'path': 'Images/exp1a_trial_27_colour2_distractors19_l.png'},
    {'name': 'Images/exp1a_trial_109_colour3_distractors19_l.png', 'path': 'Images/exp1a_trial_109_colour3_distractors19_l.png'},
    {'name': 'Images/exp2a_trial_93_colour3_distractors43_r.png', 'path': 'Images/exp2a_trial_93_colour3_distractors43_r.png'},
    {'name': 'Images/exp2b_trial_62_colour2_distractors1_l.png', 'path': 'Images/exp2b_trial_62_colour2_distractors1_l.png'},
    {'name': 'Images/exp2a_trial_68_colour3_distractors1_l.png', 'path': 'Images/exp2a_trial_68_colour3_distractors1_l.png'},
    {'name': 'Images/exp1a_trial_30_colour3_distractors1_l.png', 'path': 'Images/exp1a_trial_30_colour3_distractors1_l.png'},
    {'name': 'Images/exp2a_trial_13_colour3_distractors4_r.png', 'path': 'Images/exp2a_trial_13_colour3_distractors4_r.png'},
    {'name': 'Images/exp2a_trial_99_colour1_distractors43_l.png', 'path': 'Images/exp2a_trial_99_colour1_distractors43_l.png'},
    {'name': 'Images/exp2b_trial_6_colour2_distractors1_r.png', 'path': 'Images/exp2b_trial_6_colour2_distractors1_r.png'},
    {'name': 'Images/exp2c_trial_105_colour2_distractors43_l.png', 'path': 'Images/exp2c_trial_105_colour2_distractors43_l.png'},
    {'name': 'Images/exp1b_trial_54_colour3_distractors31_r.png', 'path': 'Images/exp1b_trial_54_colour3_distractors31_r.png'},
    {'name': 'Images/exp2a_trial_65_colour2_distractors19_l.png', 'path': 'Images/exp2a_trial_65_colour2_distractors19_l.png'},
    {'name': 'Images/exp2a_trial_67_colour2_distractors43_l.png', 'path': 'Images/exp2a_trial_67_colour2_distractors43_l.png'},
    {'name': 'Images/exp2a_trial_11_colour2_distractors43_r.png', 'path': 'Images/exp2a_trial_11_colour2_distractors43_r.png'},
    {'name': 'Images/exp1b_trial_78_colour1_distractors9_r.png', 'path': 'Images/exp1b_trial_78_colour1_distractors9_r.png'},
    {'name': 'Images/exp2b_trial_78_colour1_distractors9_r.png', 'path': 'Images/exp2b_trial_78_colour1_distractors9_r.png'},
    {'name': 'Images/exp2a_trial_48_colour2_distractors31_r.png', 'path': 'Images/exp2a_trial_48_colour2_distractors31_r.png'},
    {'name': 'Images/exp1b_trial_73_colour3_distractors43_l.png', 'path': 'Images/exp1b_trial_73_colour3_distractors43_l.png'},
    {'name': 'Images/exp2a_trial_19_colour1_distractors4_l.png', 'path': 'Images/exp2a_trial_19_colour1_distractors4_l.png'},
    {'name': 'Images/exp2c_trial_27_colour2_distractors19_l.png', 'path': 'Images/exp2c_trial_27_colour2_distractors19_l.png'},
    {'name': 'Images/exp1b_trial_8_colour2_distractors9_r.png', 'path': 'Images/exp1b_trial_8_colour2_distractors9_r.png'},
    {'name': 'Images/exp1a_trial_50_colour3_distractors1_r.png', 'path': 'Images/exp1a_trial_50_colour3_distractors1_r.png'},
    {'name': 'Images/exp1b_trial_82_colour2_distractors1_r.png', 'path': 'Images/exp1b_trial_82_colour2_distractors1_r.png'},
    {'name': 'Images/exp1a_trial_78_colour1_distractors9_r.png', 'path': 'Images/exp1a_trial_78_colour1_distractors9_r.png'},
    {'name': 'Images/exp2c_trial_28_colour2_distractors31_l.png', 'path': 'Images/exp2c_trial_28_colour2_distractors31_l.png'},
    {'name': 'Images/exp2c_trial_33_colour3_distractors19_l.png', 'path': 'Images/exp2c_trial_33_colour3_distractors19_l.png'},
    {'name': 'Images/exp2c_trial_107_colour3_distractors4_l.png', 'path': 'Images/exp2c_trial_107_colour3_distractors4_l.png'},
    {'name': 'Images/exp2c_trial_65_colour2_distractors19_l.png', 'path': 'Images/exp2c_trial_65_colour2_distractors19_l.png'},
    {'name': 'Images/exp2c_trial_25_colour2_distractors4_l.png', 'path': 'Images/exp2c_trial_25_colour2_distractors4_l.png'},
    {'name': 'Images/exp2b_trial_95_colour1_distractors4_l.png', 'path': 'Images/exp2b_trial_95_colour1_distractors4_l.png'},
    {'name': 'Images/exp2b_trial_7_colour2_distractors4_r.png', 'path': 'Images/exp2b_trial_7_colour2_distractors4_r.png'},
    {'name': 'Images/exp1a_trial_81_colour1_distractors43_r.png', 'path': 'Images/exp1a_trial_81_colour1_distractors43_r.png'},
    {'name': 'Images/exp1b_trial_106_colour3_distractors1_l.png', 'path': 'Images/exp1b_trial_106_colour3_distractors1_l.png'},
    {'name': 'Images/exp1a_trial_22_colour1_distractors31_l.png', 'path': 'Images/exp1a_trial_22_colour1_distractors31_l.png'},
    {'name': 'Images/exp2c_trial_23_colour1_distractors43_l.png', 'path': 'Images/exp2c_trial_23_colour1_distractors43_l.png'},
    {'name': 'Images/exp2b_trial_103_colour2_distractors19_l.png', 'path': 'Images/exp2b_trial_103_colour2_distractors19_l.png'},
    {'name': 'Images/exp1a_trial_29_colour2_distractors43_l.png', 'path': 'Images/exp1a_trial_29_colour2_distractors43_l.png'},
    {'name': 'Images/exp2b_trial_89_colour3_distractors4_r.png', 'path': 'Images/exp2b_trial_89_colour3_distractors4_r.png'},
    {'name': 'Images/exp1b_trial_100_colour2_distractors1_l.png', 'path': 'Images/exp1b_trial_100_colour2_distractors1_l.png'},
    {'name': 'Images/exp2b_trial_9_colour2_distractors19_r.png', 'path': 'Images/exp2b_trial_9_colour2_distractors19_r.png'},
    {'name': 'Images/exp2b_trial_106_colour3_distractors1_l.png', 'path': 'Images/exp2b_trial_106_colour3_distractors1_l.png'},
    {'name': 'Images/exp2a_trial_101_colour2_distractors4_l.png', 'path': 'Images/exp2a_trial_101_colour2_distractors4_l.png'},
    {'name': 'Images/exp2a_trial_64_colour2_distractors9_l.png', 'path': 'Images/exp2a_trial_64_colour2_distractors9_l.png'},
    {'name': 'Images/exp2b_trial_55_colour3_distractors43_r.png', 'path': 'Images/exp2b_trial_55_colour3_distractors43_r.png'},
    {'name': 'Images/exp2c_trial_52_colour3_distractors9_r.png', 'path': 'Images/exp2c_trial_52_colour3_distractors9_r.png'},
    {'name': 'Images/exp2c_trial_71_colour3_distractors19_l.png', 'path': 'Images/exp2c_trial_71_colour3_distractors19_l.png'},
    {'name': 'Images/exp2a_trial_106_colour3_distractors1_l.png', 'path': 'Images/exp2a_trial_106_colour3_distractors1_l.png'},
    {'name': 'Images/exp1a_trial_8_colour2_distractors9_r.png', 'path': 'Images/exp1a_trial_8_colour2_distractors9_r.png'},
    {'name': 'Images/exp2c_trial_57_colour1_distractors4_l.png', 'path': 'Images/exp2c_trial_57_colour1_distractors4_l.png'},
    {'name': 'Images/exp1b_trial_20_colour1_distractors9_l.png', 'path': 'Images/exp1b_trial_20_colour1_distractors9_l.png'},
    {'name': 'Images/exp2c_trial_102_colour2_distractors9_l.png', 'path': 'Images/exp2c_trial_102_colour2_distractors9_l.png'},
    {'name': 'Images/exp1b_trial_19_colour1_distractors4_l.png', 'path': 'Images/exp1b_trial_19_colour1_distractors4_l.png'},
    {'name': 'Images/exp1a_trial_97_colour1_distractors19_l.png', 'path': 'Images/exp1a_trial_97_colour1_distractors19_l.png'},
    {'name': 'Images/exp2c_trial_2_colour1_distractors9_r.png', 'path': 'Images/exp2c_trial_2_colour1_distractors9_r.png'},
    {'name': 'Practice arrays/exp1a_trial_3_colour1_distractors19_r.png', 'path': 'Practice arrays/exp1a_trial_3_colour1_distractors19_r.png'},
    {'name': 'Images/exp1b_trial_93_colour3_distractors43_r.png', 'path': 'Images/exp1b_trial_93_colour3_distractors43_r.png'},
    {'name': 'Images/exp2a_trial_70_colour3_distractors9_l.png', 'path': 'Images/exp2a_trial_70_colour3_distractors9_l.png'},
    {'name': 'Images/exp2a_trial_14_colour3_distractors9_r.png', 'path': 'Images/exp2a_trial_14_colour3_distractors9_r.png'},
    {'name': 'Images/exp2c_trial_15_colour3_distractors19_r.png', 'path': 'Images/exp2c_trial_15_colour3_distractors19_r.png'},
    {'name': 'Images/exp1a_trial_10_colour2_distractors31_r.png', 'path': 'Images/exp1a_trial_10_colour2_distractors31_r.png'},
    {'name': 'Images/exp2a_trial_40_colour1_distractors9_r.png', 'path': 'Images/exp2a_trial_40_colour1_distractors9_r.png'},
    {'name': 'Images/exp1b_trial_32_colour3_distractors9_l.png', 'path': 'Images/exp1b_trial_32_colour3_distractors9_l.png'},
    {'name': 'Practice arrays/exp1a_trial_28_colour2_distractors31_l.png', 'path': 'Practice arrays/exp1a_trial_28_colour2_distractors31_l.png'},
    {'name': 'Images/exp2b_trial_15_colour3_distractors19_r.png', 'path': 'Images/exp2b_trial_15_colour3_distractors19_r.png'},
    {'name': 'Images/exp2a_trial_58_colour1_distractors9_l.png', 'path': 'Images/exp2a_trial_58_colour1_distractors9_l.png'},
    {'name': 'Images/exp1a_trial_92_colour3_distractors31_r.png', 'path': 'Images/exp1a_trial_92_colour3_distractors31_r.png'},
    {'name': 'Images/exp2c_trial_4_colour1_distractors31_r.png', 'path': 'Images/exp2c_trial_4_colour1_distractors31_r.png'},
    {'name': 'Images/exp1a_trial_5_colour1_distractors43_r.png', 'path': 'Images/exp1a_trial_5_colour1_distractors43_r.png'},
    {'name': 'Images/exp2b_trial_49_colour2_distractors43_r.png', 'path': 'Images/exp2b_trial_49_colour2_distractors43_r.png'},
    {'name': 'Images/exp1a_trial_36_colour0_distractors0_r.png', 'path': 'Images/exp1a_trial_36_colour0_distractors0_r.png'},
    {'name': 'targets/leftDisc.png', 'path': 'targets/leftDisc.png'},
    {'name': 'Images/exp2c_trial_64_colour2_distractors9_l.png', 'path': 'Images/exp2c_trial_64_colour2_distractors9_l.png'},
    {'name': 'Images/exp1a_trial_67_colour2_distractors43_l.png', 'path': 'Images/exp1a_trial_67_colour2_distractors43_l.png'},
    {'name': 'Practice arrays/exp1a_trial_19_colour1_distractors4_l.png', 'path': 'Practice arrays/exp1a_trial_19_colour1_distractors4_l.png'},
    {'name': 'Images/exp2b_trial_97_colour1_distractors19_l.png', 'path': 'Images/exp2b_trial_97_colour1_distractors19_l.png'},
    {'name': 'Images/exp2c_trial_94_colour1_distractors1_l.png', 'path': 'Images/exp2c_trial_94_colour1_distractors1_l.png'},
    {'name': 'Images/exp2a_trial_90_colour3_distractors9_r.png', 'path': 'Images/exp2a_trial_90_colour3_distractors9_r.png'},
    {'name': 'Images/exp2c_trial_47_colour2_distractors19_r.png', 'path': 'Images/exp2c_trial_47_colour2_distractors19_r.png'},
    {'name': 'Images/exp1b_trial_44_colour2_distractors1_r.png', 'path': 'Images/exp1b_trial_44_colour2_distractors1_r.png'},
    {'name': 'Images/exp2b_trial_60_colour1_distractors31_l.png', 'path': 'Images/exp2b_trial_60_colour1_distractors31_l.png'},
    {'name': 'Images/exp1b_trial_98_colour1_distractors31_l.png', 'path': 'Images/exp1b_trial_98_colour1_distractors31_l.png'},
    {'name': 'Images/exp2c_trial_72_colour3_distractors31_l.png', 'path': 'Images/exp2c_trial_72_colour3_distractors31_l.png'},
    {'name': 'Images/exp1a_trial_107_colour3_distractors4_l.png', 'path': 'Images/exp1a_trial_107_colour3_distractors4_l.png'},
    {'name': 'Images/exp1b_trial_26_colour2_distractors9_l.png', 'path': 'Images/exp1b_trial_26_colour2_distractors9_l.png'},
    {'name': 'Images/exp1b_trial_99_colour1_distractors43_l.png', 'path': 'Images/exp1b_trial_99_colour1_distractors43_l.png'},
    {'name': 'Images/exp1a_trial_59_colour1_distractors19_l.png', 'path': 'Images/exp1a_trial_59_colour1_distractors19_l.png'},
    {'name': 'Images/exp1b_trial_97_colour1_distractors19_l.png', 'path': 'Images/exp1b_trial_97_colour1_distractors19_l.png'},
    {'name': 'targets/rightDisc.png', 'path': 'targets/rightDisc.png'},
    {'name': 'Images/exp1a_trial_47_colour2_distractors19_r.png', 'path': 'Images/exp1a_trial_47_colour2_distractors19_r.png'},
    {'name': 'Images/exp1a_trial_96_colour1_distractors9_l.png', 'path': 'Images/exp1a_trial_96_colour1_distractors9_l.png'},
    {'name': 'Images/exp2b_trial_24_colour2_distractors1_l.png', 'path': 'Images/exp2b_trial_24_colour2_distractors1_l.png'},
    {'name': 'Images/exp2b_trial_19_colour1_distractors4_l.png', 'path': 'Images/exp2b_trial_19_colour1_distractors4_l.png'},
    {'name': 'Images/exp2b_trial_38_colour1_distractors1_r.png', 'path': 'Images/exp2b_trial_38_colour1_distractors1_r.png'},
    {'name': 'Images/exp2c_trial_11_colour2_distractors43_r.png', 'path': 'Images/exp2c_trial_11_colour2_distractors43_r.png'},
    {'name': 'Images/exp1b_trial_57_colour1_distractors4_l.png', 'path': 'Images/exp1b_trial_57_colour1_distractors4_l.png'},
    {'name': 'Images/exp2a_trial_42_colour1_distractors31_r.png', 'path': 'Images/exp2a_trial_42_colour1_distractors31_r.png'},
    {'name': 'Images/exp1a_trial_71_colour3_distractors19_l.png', 'path': 'Images/exp1a_trial_71_colour3_distractors19_l.png'},
    {'name': 'Images/exp2b_trial_74_colour0_distractors0_r.png', 'path': 'Images/exp2b_trial_74_colour0_distractors0_r.png'},
    {'name': 'Images/exp2c_trial_18_colour1_distractors1_l.png', 'path': 'Images/exp2c_trial_18_colour1_distractors1_l.png'},
    {'name': 'Images/exp1a_trial_98_colour1_distractors31_l.png', 'path': 'Images/exp1a_trial_98_colour1_distractors31_l.png'},
    {'name': 'Images/exp2a_trial_82_colour2_distractors1_r.png', 'path': 'Images/exp2a_trial_82_colour2_distractors1_r.png'},
    {'name': 'Images/exp1b_trial_38_colour1_distractors1_r.png', 'path': 'Images/exp1b_trial_38_colour1_distractors1_r.png'},
    {'name': 'Images/exp1a_trial_100_colour2_distractors1_l.png', 'path': 'Images/exp1a_trial_100_colour2_distractors1_l.png'},
    {'name': 'Practice arrays/exp1a_trial_29_colour2_distractors43_l.png', 'path': 'Practice arrays/exp1a_trial_29_colour2_distractors43_l.png'},
    {'name': 'Images/exp1a_trial_49_colour2_distractors43_r.png', 'path': 'Images/exp1a_trial_49_colour2_distractors43_r.png'},
    {'name': 'Images/exp1a_trial_79_colour1_distractors19_r.png', 'path': 'Images/exp1a_trial_79_colour1_distractors19_r.png'},
    {'name': 'Images/exp1b_trial_80_colour1_distractors31_r.png', 'path': 'Images/exp1b_trial_80_colour1_distractors31_r.png'},
    {'name': 'Images/exp2b_trial_113_colour0_distractors0_l.png', 'path': 'Images/exp2b_trial_113_colour0_distractors0_l.png'},
    {'name': 'Images/exp2b_trial_17_colour3_distractors43_r.png', 'path': 'Images/exp2b_trial_17_colour3_distractors43_r.png'},
    {'name': 'Images/exp2a_trial_44_colour2_distractors1_r.png', 'path': 'Images/exp2a_trial_44_colour2_distractors1_r.png'},
    {'name': 'Images/exp2b_trial_80_colour1_distractors31_r.png', 'path': 'Images/exp2b_trial_80_colour1_distractors31_r.png'},
    {'name': 'Images/exp1a_trial_31_colour3_distractors4_l.png', 'path': 'Images/exp1a_trial_31_colour3_distractors4_l.png'},
    {'name': 'Images/exp2b_trial_29_colour2_distractors43_l.png', 'path': 'Images/exp2b_trial_29_colour2_distractors43_l.png'},
    {'name': 'Images/exp2c_trial_61_colour1_distractors43_l.png', 'path': 'Images/exp2c_trial_61_colour1_distractors43_l.png'},
    {'name': 'Images/exp1b_trial_88_colour3_distractors1_r.png', 'path': 'Images/exp1b_trial_88_colour3_distractors1_r.png'},
    {'name': 'Images/exp2a_trial_47_colour2_distractors19_r.png', 'path': 'Images/exp2a_trial_47_colour2_distractors19_r.png'},
    {'name': 'Images/exp2c_trial_14_colour3_distractors9_r.png', 'path': 'Images/exp2c_trial_14_colour3_distractors9_r.png'},
    {'name': 'Images/exp2b_trial_18_colour1_distractors1_l.png', 'path': 'Images/exp2b_trial_18_colour1_distractors1_l.png'},
    {'name': 'Images/exp1b_trial_59_colour1_distractors19_l.png', 'path': 'Images/exp1b_trial_59_colour1_distractors19_l.png'},
    {'name': 'Images/exp2b_trial_43_colour1_distractors43_r.png', 'path': 'Images/exp2b_trial_43_colour1_distractors43_r.png'},
    {'name': 'Images/exp1a_trial_43_colour1_distractors43_r.png', 'path': 'Images/exp1a_trial_43_colour1_distractors43_r.png'},
    {'name': 'Images/exp2b_trial_3_colour1_distractors19_r.png', 'path': 'Images/exp2b_trial_3_colour1_distractors19_r.png'},
    {'name': 'Images/exp2a_trial_50_colour3_distractors1_r.png', 'path': 'Images/exp2a_trial_50_colour3_distractors1_r.png'},
    {'name': 'Images/exp1b_trial_40_colour1_distractors9_r.png', 'path': 'Images/exp1b_trial_40_colour1_distractors9_r.png'},
    {'name': 'Images/exp2b_trial_31_colour3_distractors4_l.png', 'path': 'Images/exp2b_trial_31_colour3_distractors4_l.png'},
    {'name': 'Images/exp2c_trial_62_colour2_distractors1_l.png', 'path': 'Images/exp2c_trial_62_colour2_distractors1_l.png'},
    {'name': 'Images/exp2b_trial_61_colour1_distractors43_l.png', 'path': 'Images/exp2b_trial_61_colour1_distractors43_l.png'},
    {'name': 'Images/exp2c_trial_97_colour1_distractors19_l.png', 'path': 'Images/exp2c_trial_97_colour1_distractors19_l.png'},
    {'name': 'Images/exp2c_trial_95_colour1_distractors4_l.png', 'path': 'Images/exp2c_trial_95_colour1_distractors4_l.png'},
    {'name': 'Images/exp1b_trial_11_colour2_distractors43_r.png', 'path': 'Images/exp1b_trial_11_colour2_distractors43_r.png'},
    {'name': 'Images/exp1b_trial_69_colour3_distractors4_l.png', 'path': 'Images/exp1b_trial_69_colour3_distractors4_l.png'},
    {'name': 'Images/exp1b_trial_24_colour2_distractors1_l.png', 'path': 'Images/exp1b_trial_24_colour2_distractors1_l.png'},
    {'name': 'Images/exp1b_trial_92_colour3_distractors31_r.png', 'path': 'Images/exp1b_trial_92_colour3_distractors31_r.png'},
    {'name': 'Images/exp2c_trial_53_colour3_distractors19_r.png', 'path': 'Images/exp2c_trial_53_colour3_distractors19_r.png'},
    {'name': 'Images/exp2b_trial_65_colour2_distractors19_l.png', 'path': 'Images/exp2b_trial_65_colour2_distractors19_l.png'},
    {'name': 'Images/exp1a_trial_66_colour2_distractors31_l.png', 'path': 'Images/exp1a_trial_66_colour2_distractors31_l.png'},
    {'name': 'Images/exp1b_trial_101_colour2_distractors4_l.png', 'path': 'Images/exp1b_trial_101_colour2_distractors4_l.png'},
    {'name': 'Images/exp1a_trial_90_colour3_distractors9_r.png', 'path': 'Images/exp1a_trial_90_colour3_distractors9_r.png'},
    {'name': 'Images/exp2a_trial_75_colour0_distractors0_l.png', 'path': 'Images/exp2a_trial_75_colour0_distractors0_l.png'},
    {'name': 'Images/exp2a_trial_94_colour1_distractors1_l.png', 'path': 'Images/exp2a_trial_94_colour1_distractors1_l.png'},
    {'name': 'Images/exp2c_trial_30_colour3_distractors1_l.png', 'path': 'Images/exp2c_trial_30_colour3_distractors1_l.png'},
    {'name': 'Images/exp2b_trial_86_colour2_distractors31_r.png', 'path': 'Images/exp2b_trial_86_colour2_distractors31_r.png'},
    {'name': 'Images/exp2a_trial_25_colour2_distractors4_l.png', 'path': 'Images/exp2a_trial_25_colour2_distractors4_l.png'},
    {'name': 'Images/exp1a_trial_34_colour3_distractors31_l.png', 'path': 'Images/exp1a_trial_34_colour3_distractors31_l.png'},
    {'name': 'Images/exp1a_trial_94_colour1_distractors1_l.png', 'path': 'Images/exp1a_trial_94_colour1_distractors1_l.png'},
    {'name': 'Images/exp1b_trial_53_colour3_distractors19_r.png', 'path': 'Images/exp1b_trial_53_colour3_distractors19_r.png'},
    {'name': 'Images/exp2a_trial_95_colour1_distractors4_l.png', 'path': 'Images/exp2a_trial_95_colour1_distractors4_l.png'},
    {'name': 'Images/exp1a_trial_63_colour2_distractors4_l.png', 'path': 'Images/exp1a_trial_63_colour2_distractors4_l.png'},
    {'name': 'Images/exp1b_trial_45_colour2_distractors4_r.png', 'path': 'Images/exp1b_trial_45_colour2_distractors4_r.png'},
    {'name': 'Images/exp2b_trial_93_colour3_distractors43_r.png', 'path': 'Images/exp2b_trial_93_colour3_distractors43_r.png'},
    {'name': 'Practice arrays/exp1a_trial_36_colour0_distractors0_r.png', 'path': 'Practice arrays/exp1a_trial_36_colour0_distractors0_r.png'},
    {'name': 'Images/exp2c_trial_13_colour3_distractors4_r.png', 'path': 'Images/exp2c_trial_13_colour3_distractors4_r.png'},
    {'name': 'Images/exp2c_trial_96_colour1_distractors9_l.png', 'path': 'Images/exp2c_trial_96_colour1_distractors9_l.png'},
    {'name': 'Images/exp1b_trial_25_colour2_distractors4_l.png', 'path': 'Images/exp1b_trial_25_colour2_distractors4_l.png'},
    {'name': 'Images/exp2c_trial_60_colour1_distractors31_l.png', 'path': 'Images/exp2c_trial_60_colour1_distractors31_l.png'},
    {'name': 'Images/exp1a_trial_76_colour1_distractors1_r.png', 'path': 'Images/exp1a_trial_76_colour1_distractors1_r.png'},
    {'name': 'Images/exp1b_trial_47_colour2_distractors19_r.png', 'path': 'Images/exp1b_trial_47_colour2_distractors19_r.png'},
    {'name': 'Practice arrays/exp1a_trial_37_colour0_distractors0_l.png', 'path': 'Practice arrays/exp1a_trial_37_colour0_distractors0_l.png'},
    {'name': 'Images/exp2b_trial_1_colour1_distractors4_r.png', 'path': 'Images/exp2b_trial_1_colour1_distractors4_r.png'},
    {'name': 'Images/exp2a_trial_91_colour3_distractors19_r.png', 'path': 'Images/exp2a_trial_91_colour3_distractors19_r.png'},
    {'name': 'Practice arrays/exp1a_trial_16_colour3_distractors31_r.png', 'path': 'Practice arrays/exp1a_trial_16_colour3_distractors31_r.png'},
    {'name': 'Images/exp2a_trial_45_colour2_distractors4_r.png', 'path': 'Images/exp2a_trial_45_colour2_distractors4_r.png'},
    {'name': 'Images/exp1a_trial_99_colour1_distractors43_l.png', 'path': 'Images/exp1a_trial_99_colour1_distractors43_l.png'},
    {'name': 'Images/exp1b_trial_5_colour1_distractors43_r.png', 'path': 'Images/exp1b_trial_5_colour1_distractors43_r.png'},
    {'name': 'Images/exp2a_trial_109_colour3_distractors19_l.png', 'path': 'Images/exp2a_trial_109_colour3_distractors19_l.png'},
    {'name': 'Practice arrays/exp1a_trial_33_colour3_distractors19_l.png', 'path': 'Practice arrays/exp1a_trial_33_colour3_distractors19_l.png'},
    {'name': 'Images/exp2a_trial_7_colour2_distractors4_r.png', 'path': 'Images/exp2a_trial_7_colour2_distractors4_r.png'},
    {'name': 'Images/exp2c_trial_80_colour1_distractors31_r.png', 'path': 'Images/exp2c_trial_80_colour1_distractors31_r.png'},
    {'name': 'Images/exp2b_trial_88_colour3_distractors1_r.png', 'path': 'Images/exp2b_trial_88_colour3_distractors1_r.png'},
    {'name': 'Images/exp2c_trial_84_colour2_distractors9_r.png', 'path': 'Images/exp2c_trial_84_colour2_distractors9_r.png'},
    {'name': 'Images/exp2c_trial_92_colour3_distractors31_r.png', 'path': 'Images/exp2c_trial_92_colour3_distractors31_r.png'},
    {'name': 'Images/exp1b_trial_13_colour3_distractors4_r.png', 'path': 'Images/exp1b_trial_13_colour3_distractors4_r.png'},
    {'name': 'Images/exp2a_trial_84_colour2_distractors9_r.png', 'path': 'Images/exp2a_trial_84_colour2_distractors9_r.png'},
    {'name': 'Images/exp1b_trial_28_colour2_distractors31_l.png', 'path': 'Images/exp1b_trial_28_colour2_distractors31_l.png'},
    {'name': 'Images/exp2a_trial_49_colour2_distractors43_r.png', 'path': 'Images/exp2a_trial_49_colour2_distractors43_r.png'},
    {'name': 'Images/exp2c_trial_88_colour3_distractors1_r.png', 'path': 'Images/exp2c_trial_88_colour3_distractors1_r.png'},
    {'name': 'Images/exp1b_trial_91_colour3_distractors19_r.png', 'path': 'Images/exp1b_trial_91_colour3_distractors19_r.png'},
    {'name': 'Images/exp1a_trial_1_colour1_distractors4_r.png', 'path': 'Images/exp1a_trial_1_colour1_distractors4_r.png'},
    {'name': 'Images/exp2c_trial_89_colour3_distractors4_r.png', 'path': 'Images/exp2c_trial_89_colour3_distractors4_r.png'},
    {'name': 'Images/exp1b_trial_60_colour1_distractors31_l.png', 'path': 'Images/exp1b_trial_60_colour1_distractors31_l.png'},
    {'name': 'Images/exp2c_trial_86_colour2_distractors31_r.png', 'path': 'Images/exp2c_trial_86_colour2_distractors31_r.png'},
    {'name': 'Images/exp2a_trial_105_colour2_distractors43_l.png', 'path': 'Images/exp2a_trial_105_colour2_distractors43_l.png'},
    {'name': 'Images/exp2b_trial_105_colour2_distractors43_l.png', 'path': 'Images/exp2b_trial_105_colour2_distractors43_l.png'},
    {'name': 'Images/exp1b_trial_112_colour0_distractors0_r.png', 'path': 'Images/exp1b_trial_112_colour0_distractors0_r.png'},
    {'name': 'Images/exp2b_trial_50_colour3_distractors1_r.png', 'path': 'Images/exp2b_trial_50_colour3_distractors1_r.png'},
    {'name': 'Images/exp1b_trial_2_colour1_distractors9_r.png', 'path': 'Images/exp1b_trial_2_colour1_distractors9_r.png'},
    {'name': 'Images/exp1a_trial_88_colour3_distractors1_r.png', 'path': 'Images/exp1a_trial_88_colour3_distractors1_r.png'},
    {'name': 'Images/exp1b_trial_75_colour0_distractors0_l.png', 'path': 'Images/exp1b_trial_75_colour0_distractors0_l.png'},
    {'name': 'Images/exp1b_trial_52_colour3_distractors9_r.png', 'path': 'Images/exp1b_trial_52_colour3_distractors9_r.png'},
    {'name': 'Images/exp2b_trial_28_colour2_distractors31_l.png', 'path': 'Images/exp2b_trial_28_colour2_distractors31_l.png'},
    {'name': 'Images/exp2c_trial_22_colour1_distractors31_l.png', 'path': 'Images/exp2c_trial_22_colour1_distractors31_l.png'},
    {'name': 'Images/exp2c_trial_0_colour1_distractors1_r.png', 'path': 'Images/exp2c_trial_0_colour1_distractors1_r.png'},
    {'name': 'Images/exp2b_trial_66_colour2_distractors31_l.png', 'path': 'Images/exp2b_trial_66_colour2_distractors31_l.png'},
    {'name': 'Images/exp1a_trial_69_colour3_distractors4_l.png', 'path': 'Images/exp1a_trial_69_colour3_distractors4_l.png'},
    {'name': 'Images/exp2c_trial_50_colour3_distractors1_r.png', 'path': 'Images/exp2c_trial_50_colour3_distractors1_r.png'},
    {'name': 'Images/exp2c_trial_79_colour1_distractors19_r.png', 'path': 'Images/exp2c_trial_79_colour1_distractors19_r.png'},
    {'name': 'Images/exp2b_trial_36_colour0_distractors0_r.png', 'path': 'Images/exp2b_trial_36_colour0_distractors0_r.png'},
    {'name': 'Images/exp2a_trial_34_colour3_distractors31_l.png', 'path': 'Images/exp2a_trial_34_colour3_distractors31_l.png'},
    {'name': 'Images/exp2b_trial_96_colour1_distractors9_l.png', 'path': 'Images/exp2b_trial_96_colour1_distractors9_l.png'},
    {'name': 'Images/exp1b_trial_89_colour3_distractors4_r.png', 'path': 'Images/exp1b_trial_89_colour3_distractors4_r.png'},
    {'name': 'Images/exp1a_trial_108_colour3_distractors9_l.png', 'path': 'Images/exp1a_trial_108_colour3_distractors9_l.png'},
    {'name': 'Images/exp1a_trial_44_colour2_distractors1_r.png', 'path': 'Images/exp1a_trial_44_colour2_distractors1_r.png'},
    {'name': 'Images/exp1a_trial_60_colour1_distractors31_l.png', 'path': 'Images/exp1a_trial_60_colour1_distractors31_l.png'},
    {'name': 'Images/exp1b_trial_72_colour3_distractors31_l.png', 'path': 'Images/exp1b_trial_72_colour3_distractors31_l.png'},
    {'name': 'Images/exp2a_trial_33_colour3_distractors19_l.png', 'path': 'Images/exp2a_trial_33_colour3_distractors19_l.png'},
    {'name': 'Images/exp1a_trial_102_colour2_distractors9_l.png', 'path': 'Images/exp1a_trial_102_colour2_distractors9_l.png'},
    {'name': 'Images/exp2a_trial_79_colour1_distractors19_r.png', 'path': 'Images/exp2a_trial_79_colour1_distractors19_r.png'},
    {'name': 'Images/exp2b_trial_13_colour3_distractors4_r.png', 'path': 'Images/exp2b_trial_13_colour3_distractors4_r.png'},
    {'name': 'Images/exp2c_trial_110_colour3_distractors31_l.png', 'path': 'Images/exp2c_trial_110_colour3_distractors31_l.png'},
    {'name': 'Practice arrays/exp1a_trial_32_colour3_distractors9_l.png', 'path': 'Practice arrays/exp1a_trial_32_colour3_distractors9_l.png'},
    {'name': 'Images/exp2b_trial_73_colour3_distractors43_l.png', 'path': 'Images/exp2b_trial_73_colour3_distractors43_l.png'},
    {'name': 'Images/exp1a_trial_11_colour2_distractors43_r.png', 'path': 'Images/exp1a_trial_11_colour2_distractors43_r.png'},
    {'name': 'Images/exp2a_trial_108_colour3_distractors9_l.png', 'path': 'Images/exp2a_trial_108_colour3_distractors9_l.png'},
    {'name': 'Images/exp1a_trial_4_colour1_distractors31_r.png', 'path': 'Images/exp1a_trial_4_colour1_distractors31_r.png'},
    {'name': 'Images/exp2a_trial_20_colour1_distractors9_l.png', 'path': 'Images/exp2a_trial_20_colour1_distractors9_l.png'}
  ]
});


var frameDur;
function updateInfo() {
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2020.2.2';
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


var creditcardClock;
var event;
var thisExp;
var win;
var oldt;
var x_size;
var y_size;
var screen_height;
var x_scale;
var y_scale;
var dbase;
var unittext;
var vsize;
var text_top;
var text_bottom;
var ccimage;
var consent1Clock;
var text_6;
var key_resp_10;
var consent2Clock;
var text_7;
var key_resp_11;
var consent3Clock;
var text_8;
var key_resp_12;
var consent4Clock;
var text_9;
var key_resp_13;
var WelcomePracticeClock;
var text_2;
var key_resp_5;
var instructionsClock;
var text_5;
var key_resp_8;
var targetStimuliClock;
var image_2;
var key_resp_6;
var text_3;
var image_3;
var fixationClock;
var fix;
var key_resp_7;
var practiceTrialsClock;
var image;
var key_resp_4;
var practiceFeedbackClock;
var msg;
var text_4;
var WelcomeScreenClock;
var text;
var key_resp_3;
var fix2Clock;
var fix2experiment;
var key_resp_9;
var trialClock;
var dispStimuli;
var key_resp_2;
var break_2Clock;
var trialCounter;
var accuracySum;
var totRT;
var round;
var breakMessage;
var key_resp;
var globalClock;
var routineTimer;
function experimentInit() {
  // Initialize components for Routine "creditcard"
  creditcardClock = new util.Clock();
  event = psychoJS.eventManager;
  thisExp = psychoJS.experiment;
  win = psychoJS.window;
  oldt = 0;
  x_size = 8.56;
  y_size = 5.398;
  screen_height = 0;
  if ((win.units === "norm")) {
      x_scale = 0.05;
      y_scale = 0.1;
      dbase = 0.0001;
      unittext = " norm units";
      vsize = 2;
  } else {
      if ((win.units === "pix")) {
          x_scale = 60;
          y_scale = 40;
          dbase = 0.1;
          unittext = " pixels";
          vsize = win.size[1];
      } else {
          x_scale = 0.05;
          y_scale = 0.05;
          dbase = 0.0001;
          unittext = " height units";
          vsize = 1;
      }
  }
  
  text_top = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_top',
    text: 'Resize this image to match the size of a credit card\nUp arrow for taller\nDown arrow for shorter\nLeft arrow for narrower\nRight arrow for wider',
    font: 'Arial',
    units: 'norm', 
    pos: [0, 0.7], height: 0.1,  wrapWidth: 1.5, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -2.0 
  });
  
  text_bottom = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_bottom',
    text: 'Press the space bar when done',
    font: 'Arial',
    units: 'norm', 
    pos: [0, (- 0.6)], height: 0.1,  wrapWidth: 1.5, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -3.0 
  });
  
  ccimage = new visual.ImageStim({
    win : psychoJS.window,
    name : 'ccimage', units : undefined, 
    image : 'bank-1300155_640.png', mask : undefined,
    ori : 0, pos : [0, 0], size : [(x_size * x_scale), (y_size * y_scale)],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -4.0 
  });
  // Initialize components for Routine "consent1"
  consent1Clock = new util.Clock();
  text_6 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_6',
    text: 'Please read each statement carefully and click either SPACE to Agree and continue or ESC to disagree and terminate the experiment.\nPress SPACE to continue.',
    font: 'Arial',
    units: 'norm', 
    pos: [0, 0], height: 0.05,  wrapWidth: 1.5, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  key_resp_10 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "consent2"
  consent2Clock = new util.Clock();
  text_7 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_7',
    text: 'I understand that my participation in this project will involve looking for a target object on a computer screen and indicating what direction the target is facing, by pressing a computer keyboard buttons. This will require approximately 30min of my time.\nI understand that participation in this study is entirely voluntary and that I can withdraw from the study at any time without providing a reason by simply closing the browser or pressing esc button on your keyboard. I am aware that this will lead to loss of course credit or reimbursement. The incomplete data sets will not be saved.\nI understand that I can discuss any concerns with the experimenters before or after participating.\nThis research is carried out by postdoctoral research fellow Dr Anna Nowakowska in the School of Psychology, University of Aberdeen under the supervision of lecturer Anna Hughes and lecturer Alasdair Clarke (Department of Psychology, University of Essex)\nContact information:\n[a.nowakowska@abdn.ac.uk, anna.hughes@essex.ac.uk, a.clarke@essex.ac.uk]\nPress Space to Agree and continue.\nPress ESC button to disagree and terminate the experiment.\nPress SPACE to agree and continue.\n\n',
    font: 'Arial',
    units: 'norm', 
    pos: [0, 0], height: 0.03,  wrapWidth: 1.5, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  key_resp_11 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "consent3"
  consent3Clock = new util.Clock();
  text_8 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_8',
    text: 'I understand that the information provided by me will be held anonymously so that it is impossible to trace this information back to me individually. Information will be held on a secure server and may be retained indefinitely. \nTo ensure access to the data for the wider research community, the anonymous dataset may be archived in an online repository (e.g., the Open Science Framework, https://osf.io/) or send to other researchers upon request for inspection.\nPress Space to Agree and continue.\nPress ESC button to disagree and terminate the experiment.\n\n',
    font: 'Arial',
    units: 'norm', 
    pos: [0, 0], height: 0.05,  wrapWidth: 1.5, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  key_resp_12 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "consent4"
  consent4Clock = new util.Clock();
  text_9 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_9',
    text: 'I confirm that the purpose, participation information, and data storage of this research have been sufficiently explained. \nI understand that at the end of the experiment I will be provided with additional information about the purpose of this research.\nPress SPACE to agree and continue to the experiment.\nPress ESC button to disagree and terminate the experiment.',
    font: 'Arial',
    units: 'norm', 
    pos: [0, 0], height: 0.05,  wrapWidth: 1.5, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  key_resp_13 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "WelcomePractice"
  WelcomePracticeClock = new util.Clock();
  text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_2',
    text: 'Welcome! Your task is to find\nwhite or blue semicircle and indicate \nif it is facing left or right.\nPress SPACE bar to continue.\n',
    font: 'Arial',
    units: 'norm', 
    pos: [0, 0], height: 0.07,  wrapWidth: 1.5, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  key_resp_5 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "instructions"
  instructionsClock = new util.Clock();
  text_5 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_5',
    text: "Look at the fixation cross and press SPACE bar when you\nare ready to start the trial.\nPress '1' for semicircle facing left.\nPress '2' for semicircle facing right.\nYou will first complete 20 practice trials.\nPress SPACE bar when you are ready to start.",
    font: 'Arial',
    units: 'norm', 
    pos: [0, 0], height: 0.07,  wrapWidth: 1.5, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  key_resp_8 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "targetStimuli"
  targetStimuliClock = new util.Clock();
  image_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_2', units : undefined, 
    image : 'targets/leftDisc.png', mask : undefined,
    ori : 0, pos : [0, 75], size : 1.0,
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : 0.0 
  });
  key_resp_6 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  text_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_3',
    text: 'Press 1 if you see left semicircle\n\n\nPress 2 if you see right semicircle\n\n\nPress SPACE to start',
    font: 'Arial',
    units: 'norm', 
    pos: [0, 0], height: 0.08,  wrapWidth: 1.5, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -2.0 
  });
  
  image_3 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_3', units : undefined, 
    image : 'targets/rightDisc.png', mask : undefined,
    ori : 0, pos : [0, (- 100)], size : 1.0,
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -3.0 
  });
  // Initialize components for Routine "fixation"
  fixationClock = new util.Clock();
  fix = new visual.ShapeStim ({
    win: psychoJS.window, name: 'fix', 
    vertices: 'cross', size:[1.0, 1.0],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 1, depth: 0, interpolate: true,
  });
  
  key_resp_7 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "practiceTrials"
  practiceTrialsClock = new util.Clock();
  image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : 1.0,
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : 0.0 
  });
  key_resp_4 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "practiceFeedback"
  practiceFeedbackClock = new util.Clock();
  msg = "doh";
  
  
  text_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_4',
    text: 'default text',
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
    text: "Welcome to the experimental trials.\nBe reminded that your task is to look for \na white or a blue semicircle.\nIf semicircle is facing left press '1'.\nIf semicircle is facing right press '2'.\nPress SPACE bar to continue\n",
    font: 'Arial',
    units: 'norm', 
    pos: [0, 0], height: 0.07,  wrapWidth: 1.5, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  key_resp_3 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "fix2"
  fix2Clock = new util.Clock();
  fix2experiment = new visual.ShapeStim ({
    win: psychoJS.window, name: 'fix2experiment', 
    vertices: 'cross', size:[1.0, 1.0],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 1, depth: 0, interpolate: true,
  });
  
  key_resp_9 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "trial"
  trialClock = new util.Clock();
  dispStimuli = new visual.ImageStim({
    win : psychoJS.window,
    name : 'dispStimuli', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : 1.0,
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : 0.0 
  });
  key_resp_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "break_2"
  break_2Clock = new util.Clock();
  msg = "";
  trialCounter=0;
  accuracySum=0;
  totRT=0;
  
  round = function(num, n=0) {    
     return +(Math.round(num + ("e+" + n))  + ("e-" + n));
  }
  
  breakMessage = new visual.TextStim({
    win: psychoJS.window,
    name: 'breakMessage',
    text: 'default text',
    font: 'Arial',
    units: 'norm', 
    pos: [0, 0], height: 0.1,  wrapWidth: 1.5, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var creditcardComponents;
function creditcardRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'creditcard'-------
    t = 0;
    creditcardClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    // keep track of which components have finished
    creditcardComponents = [];
    creditcardComponents.push(text_top);
    creditcardComponents.push(text_bottom);
    creditcardComponents.push(ccimage);
    
    creditcardComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    
    return Scheduler.Event.NEXT;
  };
}


var _pj;
var keys;
var dscale;
var continueRoutine;
function creditcardRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'creditcard'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = creditcardClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    var _pj;
    function _pj_snippets(container) {
        function in_es6(left, right) {
            if (((right instanceof Array) || ((typeof right) === "string"))) {
                return (right.indexOf(left) > (- 1));
            } else {
                if (((right instanceof Map) || (right instanceof Set) || (right instanceof WeakMap) || (right instanceof WeakSet))) {
                    return right.has(left);
                } else {
                    return (left in right);
                }
            }
        }
        container["in_es6"] = in_es6;
        return container;
    }
    _pj = {};
    _pj_snippets(_pj);
    keys = event.getKeys();
    if (keys.length) {
        if (((t - oldt) < 0.5)) {
            dscale = (5 * dbase);
            oldt = t;
        } else {
            dscale = dbase;
            oldt = t;
        }
        if (_pj.in_es6("space", keys)) {
            continueRoutine = false;
        } else {
            if (_pj.in_es6("up", keys)) {
                y_scale = (round(((y_scale + dscale) * 10000)) / 10000);
            } else {
                if (_pj.in_es6("down", keys)) {
                    y_scale = (round(((y_scale - dscale) * 10000)) / 10000);
                } else {
                    if (_pj.in_es6("left", keys)) {
                        x_scale = (round(((x_scale - dscale) * 10000)) / 10000);
                    } else {
                        if (_pj.in_es6("right", keys)) {
                            x_scale = (round(((x_scale + dscale) * 10000)) / 10000);
                        }
                    }
                }
            }
        }
        screen_height = (round(((vsize * 10) / y_scale)) / 10);
        text_bottom.text = (((((((("X Scale = " + x_scale.toString()) + unittext) + " per cm, Y Scale = ") + y_scale.toString()) + unittext) + " per cm\nScreen height = ") + screen_height.toString()) + " cm\n\nPress the space bar when done");
        ccimage.size = [(x_size * x_scale), (y_size * y_scale)];
    }
    
    
    // *text_top* updates
    if (t >= 0.0 && text_top.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_top.tStart = t;  // (not accounting for frame time here)
      text_top.frameNStart = frameN;  // exact frame index
      
      text_top.setAutoDraw(true);
    }

    
    // *text_bottom* updates
    if (t >= 0.0 && text_bottom.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_bottom.tStart = t;  // (not accounting for frame time here)
      text_bottom.frameNStart = frameN;  // exact frame index
      
      text_bottom.setAutoDraw(true);
    }

    
    // *ccimage* updates
    if (t >= 0.0 && ccimage.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ccimage.tStart = t;  // (not accounting for frame time here)
      ccimage.frameNStart = frameN;  // exact frame index
      
      ccimage.setAutoDraw(true);
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
    creditcardComponents.forEach( function(thisComponent) {
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


function creditcardRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'creditcard'-------
    creditcardComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    thisExp.addData("X Scale", x_scale);
    thisExp.addData("Y Scale", y_scale);
    
    // the Routine "creditcard" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_10_allKeys;
var consent1Components;
function consent1RoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'consent1'-------
    t = 0;
    consent1Clock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    key_resp_10.keys = undefined;
    key_resp_10.rt = undefined;
    _key_resp_10_allKeys = [];
    // keep track of which components have finished
    consent1Components = [];
    consent1Components.push(text_6);
    consent1Components.push(key_resp_10);
    
    consent1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    
    return Scheduler.Event.NEXT;
  };
}


function consent1RoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'consent1'-------
    let continueRoutine = true; // until we're told otherwise
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

    
    // *key_resp_10* updates
    if (t >= 0.0 && key_resp_10.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_10.tStart = t;  // (not accounting for frame time here)
      key_resp_10.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_10.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_10.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_10.clearEvents(); });
    }

    if (key_resp_10.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_10.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_10_allKeys = _key_resp_10_allKeys.concat(theseKeys);
      if (_key_resp_10_allKeys.length > 0) {
        key_resp_10.keys = _key_resp_10_allKeys[_key_resp_10_allKeys.length - 1].name;  // just the last key pressed
        key_resp_10.rt = _key_resp_10_allKeys[_key_resp_10_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
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


function consent1RoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'consent1'-------
    consent1Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('key_resp_10.keys', key_resp_10.keys);
    if (typeof key_resp_10.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_10.rt', key_resp_10.rt);
        routineTimer.reset();
        }
    
    key_resp_10.stop();
    // the Routine "consent1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_11_allKeys;
var consent2Components;
function consent2RoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'consent2'-------
    t = 0;
    consent2Clock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    key_resp_11.keys = undefined;
    key_resp_11.rt = undefined;
    _key_resp_11_allKeys = [];
    // keep track of which components have finished
    consent2Components = [];
    consent2Components.push(text_7);
    consent2Components.push(key_resp_11);
    
    consent2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    
    return Scheduler.Event.NEXT;
  };
}


function consent2RoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'consent2'-------
    let continueRoutine = true; // until we're told otherwise
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

    
    // *key_resp_11* updates
    if (t >= 0.0 && key_resp_11.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_11.tStart = t;  // (not accounting for frame time here)
      key_resp_11.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_11.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_11.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_11.clearEvents(); });
    }

    if (key_resp_11.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_11.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_11_allKeys = _key_resp_11_allKeys.concat(theseKeys);
      if (_key_resp_11_allKeys.length > 0) {
        key_resp_11.keys = _key_resp_11_allKeys[_key_resp_11_allKeys.length - 1].name;  // just the last key pressed
        key_resp_11.rt = _key_resp_11_allKeys[_key_resp_11_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
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


function consent2RoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'consent2'-------
    consent2Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('key_resp_11.keys', key_resp_11.keys);
    if (typeof key_resp_11.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_11.rt', key_resp_11.rt);
        routineTimer.reset();
        }
    
    key_resp_11.stop();
    // the Routine "consent2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_12_allKeys;
var consent3Components;
function consent3RoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'consent3'-------
    t = 0;
    consent3Clock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    key_resp_12.keys = undefined;
    key_resp_12.rt = undefined;
    _key_resp_12_allKeys = [];
    // keep track of which components have finished
    consent3Components = [];
    consent3Components.push(text_8);
    consent3Components.push(key_resp_12);
    
    consent3Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    
    return Scheduler.Event.NEXT;
  };
}


function consent3RoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'consent3'-------
    let continueRoutine = true; // until we're told otherwise
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

    
    // *key_resp_12* updates
    if (t >= 0.0 && key_resp_12.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_12.tStart = t;  // (not accounting for frame time here)
      key_resp_12.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_12.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_12.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_12.clearEvents(); });
    }

    if (key_resp_12.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_12.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_12_allKeys = _key_resp_12_allKeys.concat(theseKeys);
      if (_key_resp_12_allKeys.length > 0) {
        key_resp_12.keys = _key_resp_12_allKeys[_key_resp_12_allKeys.length - 1].name;  // just the last key pressed
        key_resp_12.rt = _key_resp_12_allKeys[_key_resp_12_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
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


function consent3RoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'consent3'-------
    consent3Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('key_resp_12.keys', key_resp_12.keys);
    if (typeof key_resp_12.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_12.rt', key_resp_12.rt);
        routineTimer.reset();
        }
    
    key_resp_12.stop();
    // the Routine "consent3" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_13_allKeys;
var consent4Components;
function consent4RoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'consent4'-------
    t = 0;
    consent4Clock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    key_resp_13.keys = undefined;
    key_resp_13.rt = undefined;
    _key_resp_13_allKeys = [];
    // keep track of which components have finished
    consent4Components = [];
    consent4Components.push(text_9);
    consent4Components.push(key_resp_13);
    
    consent4Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    
    return Scheduler.Event.NEXT;
  };
}


function consent4RoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'consent4'-------
    let continueRoutine = true; // until we're told otherwise
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

    
    // *key_resp_13* updates
    if (t >= 0.0 && key_resp_13.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_13.tStart = t;  // (not accounting for frame time here)
      key_resp_13.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_13.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_13.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_13.clearEvents(); });
    }

    if (key_resp_13.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_13.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_13_allKeys = _key_resp_13_allKeys.concat(theseKeys);
      if (_key_resp_13_allKeys.length > 0) {
        key_resp_13.keys = _key_resp_13_allKeys[_key_resp_13_allKeys.length - 1].name;  // just the last key pressed
        key_resp_13.rt = _key_resp_13_allKeys[_key_resp_13_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
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


function consent4RoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'consent4'-------
    consent4Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('key_resp_13.keys', key_resp_13.keys);
    if (typeof key_resp_13.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_13.rt', key_resp_13.rt);
        routineTimer.reset();
        }
    
    key_resp_13.stop();
    // the Routine "consent4" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_5_allKeys;
var WelcomePracticeComponents;
function WelcomePracticeRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'WelcomePractice'-------
    t = 0;
    WelcomePracticeClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    key_resp_5.keys = undefined;
    key_resp_5.rt = undefined;
    _key_resp_5_allKeys = [];
    // keep track of which components have finished
    WelcomePracticeComponents = [];
    WelcomePracticeComponents.push(text_2);
    WelcomePracticeComponents.push(key_resp_5);
    
    WelcomePracticeComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    
    return Scheduler.Event.NEXT;
  };
}


function WelcomePracticeRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'WelcomePractice'-------
    let continueRoutine = true; // until we're told otherwise
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

    
    // *key_resp_5* updates
    if (t >= 1.0 && key_resp_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_5.tStart = t;  // (not accounting for frame time here)
      key_resp_5.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_5.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_5.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_5.clearEvents(); });
    }

    if (key_resp_5.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_5.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_5_allKeys = _key_resp_5_allKeys.concat(theseKeys);
      if (_key_resp_5_allKeys.length > 0) {
        key_resp_5.keys = _key_resp_5_allKeys[_key_resp_5_allKeys.length - 1].name;  // just the last key pressed
        key_resp_5.rt = _key_resp_5_allKeys[_key_resp_5_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
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


function WelcomePracticeRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'WelcomePractice'-------
    WelcomePracticeComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('key_resp_5.keys', key_resp_5.keys);
    if (typeof key_resp_5.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_5.rt', key_resp_5.rt);
        routineTimer.reset();
        }
    
    key_resp_5.stop();
    // the Routine "WelcomePractice" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_8_allKeys;
var instructionsComponents;
function instructionsRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'instructions'-------
    t = 0;
    instructionsClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    key_resp_8.keys = undefined;
    key_resp_8.rt = undefined;
    _key_resp_8_allKeys = [];
    // keep track of which components have finished
    instructionsComponents = [];
    instructionsComponents.push(text_5);
    instructionsComponents.push(key_resp_8);
    
    instructionsComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    
    return Scheduler.Event.NEXT;
  };
}


function instructionsRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'instructions'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = instructionsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_5* updates
    if (t >= 0.0 && text_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_5.tStart = t;  // (not accounting for frame time here)
      text_5.frameNStart = frameN;  // exact frame index
      
      text_5.setAutoDraw(true);
    }

    
    // *key_resp_8* updates
    if (t >= 0.0 && key_resp_8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_8.tStart = t;  // (not accounting for frame time here)
      key_resp_8.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_8.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_8.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_8.clearEvents(); });
    }

    if (key_resp_8.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_8.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_8_allKeys = _key_resp_8_allKeys.concat(theseKeys);
      if (_key_resp_8_allKeys.length > 0) {
        key_resp_8.keys = _key_resp_8_allKeys[_key_resp_8_allKeys.length - 1].name;  // just the last key pressed
        key_resp_8.rt = _key_resp_8_allKeys[_key_resp_8_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
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


function instructionsRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'instructions'-------
    instructionsComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('key_resp_8.keys', key_resp_8.keys);
    if (typeof key_resp_8.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_8.rt', key_resp_8.rt);
        routineTimer.reset();
        }
    
    key_resp_8.stop();
    // the Routine "instructions" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_6_allKeys;
var targetStimuliComponents;
function targetStimuliRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'targetStimuli'-------
    t = 0;
    targetStimuliClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    image_2.setSize([(1 * x_scale), (1 * y_scale)]);
    key_resp_6.keys = undefined;
    key_resp_6.rt = undefined;
    _key_resp_6_allKeys = [];
    image_3.setSize([(1 * x_scale), (1 * y_scale)]);
    // keep track of which components have finished
    targetStimuliComponents = [];
    targetStimuliComponents.push(image_2);
    targetStimuliComponents.push(key_resp_6);
    targetStimuliComponents.push(text_3);
    targetStimuliComponents.push(image_3);
    
    targetStimuliComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    
    return Scheduler.Event.NEXT;
  };
}


function targetStimuliRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'targetStimuli'-------
    let continueRoutine = true; // until we're told otherwise
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

    
    // *key_resp_6* updates
    if (t >= 1 && key_resp_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_6.tStart = t;  // (not accounting for frame time here)
      key_resp_6.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_6.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_6.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_6.clearEvents(); });
    }

    if (key_resp_6.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_6.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_6_allKeys = _key_resp_6_allKeys.concat(theseKeys);
      if (_key_resp_6_allKeys.length > 0) {
        key_resp_6.keys = _key_resp_6_allKeys[_key_resp_6_allKeys.length - 1].name;  // just the last key pressed
        key_resp_6.rt = _key_resp_6_allKeys[_key_resp_6_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
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


function targetStimuliRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'targetStimuli'-------
    targetStimuliComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('key_resp_6.keys', key_resp_6.keys);
    if (typeof key_resp_6.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_6.rt', key_resp_6.rt);
        routineTimer.reset();
        }
    
    key_resp_6.stop();
    // the Routine "targetStimuli" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var trials_2;
var currentLoop;
function trials_2LoopBegin(trials_2LoopScheduler) {
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
    trials_2LoopScheduler.add(fixationRoutineBegin(snapshot));
    trials_2LoopScheduler.add(fixationRoutineEachFrame(snapshot));
    trials_2LoopScheduler.add(fixationRoutineEnd(snapshot));
    trials_2LoopScheduler.add(practiceTrialsRoutineBegin(snapshot));
    trials_2LoopScheduler.add(practiceTrialsRoutineEachFrame(snapshot));
    trials_2LoopScheduler.add(practiceTrialsRoutineEnd(snapshot));
    trials_2LoopScheduler.add(practiceFeedbackRoutineBegin(snapshot));
    trials_2LoopScheduler.add(practiceFeedbackRoutineEachFrame(snapshot));
    trials_2LoopScheduler.add(practiceFeedbackRoutineEnd(snapshot));
    trials_2LoopScheduler.add(endLoopIteration(trials_2LoopScheduler, snapshot));
  });

  return Scheduler.Event.NEXT;
}


function trials_2LoopEnd() {
  psychoJS.experiment.removeLoop(trials_2);

  return Scheduler.Event.NEXT;
}


var trials;
function trialsLoopBegin(trialsLoopScheduler) {
  // set up handler to look after randomisation of conditions etc
  trials = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: 'Images_List.xlsx',
    seed: undefined, name: 'trials'
  });
  psychoJS.experiment.addLoop(trials); // add the loop to the experiment
  currentLoop = trials;  // we're now the current loop

  // Schedule all the trials in the trialList:
  trials.forEach(function() {
    const snapshot = trials.getSnapshot();

    trialsLoopScheduler.add(importConditions(snapshot));
    trialsLoopScheduler.add(fix2RoutineBegin(snapshot));
    trialsLoopScheduler.add(fix2RoutineEachFrame(snapshot));
    trialsLoopScheduler.add(fix2RoutineEnd(snapshot));
    trialsLoopScheduler.add(trialRoutineBegin(snapshot));
    trialsLoopScheduler.add(trialRoutineEachFrame(snapshot));
    trialsLoopScheduler.add(trialRoutineEnd(snapshot));
    trialsLoopScheduler.add(break_2RoutineBegin(snapshot));
    trialsLoopScheduler.add(break_2RoutineEachFrame(snapshot));
    trialsLoopScheduler.add(break_2RoutineEnd(snapshot));
    trialsLoopScheduler.add(endLoopIteration(trialsLoopScheduler, snapshot));
  });

  return Scheduler.Event.NEXT;
}


function trialsLoopEnd() {
  psychoJS.experiment.removeLoop(trials);

  return Scheduler.Event.NEXT;
}


var _key_resp_7_allKeys;
var fixationComponents;
function fixationRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'fixation'-------
    t = 0;
    fixationClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    fix.setSize([(1 * x_scale), (1 * y_scale)]);
    key_resp_7.keys = undefined;
    key_resp_7.rt = undefined;
    _key_resp_7_allKeys = [];
    // keep track of which components have finished
    fixationComponents = [];
    fixationComponents.push(fix);
    fixationComponents.push(key_resp_7);
    
    fixationComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    
    return Scheduler.Event.NEXT;
  };
}


function fixationRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'fixation'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = fixationClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *fix* updates
    if (t >= 0.0 && fix.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fix.tStart = t;  // (not accounting for frame time here)
      fix.frameNStart = frameN;  // exact frame index
      
      fix.setAutoDraw(true);
    }

    
    // *key_resp_7* updates
    if (t >= 0.0 && key_resp_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_7.tStart = t;  // (not accounting for frame time here)
      key_resp_7.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_7.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_7.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_7.clearEvents(); });
    }

    if (key_resp_7.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_7.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_7_allKeys = _key_resp_7_allKeys.concat(theseKeys);
      if (_key_resp_7_allKeys.length > 0) {
        key_resp_7.keys = _key_resp_7_allKeys[_key_resp_7_allKeys.length - 1].name;  // just the last key pressed
        key_resp_7.rt = _key_resp_7_allKeys[_key_resp_7_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
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
    fixationComponents.forEach( function(thisComponent) {
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


function fixationRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'fixation'-------
    fixationComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('key_resp_7.keys', key_resp_7.keys);
    if (typeof key_resp_7.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_7.rt', key_resp_7.rt);
        routineTimer.reset();
        }
    
    key_resp_7.stop();
    // the Routine "fixation" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_4_allKeys;
var practiceTrialsComponents;
function practiceTrialsRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'practiceTrials'-------
    t = 0;
    practiceTrialsClock.reset(); // clock
    frameN = -1;
    routineTimer.add(5.000000);
    // update component parameters for each repeat
    image.setSize([(50 * x_scale), (28.125 * y_scale)]);
    image.setImage(ImageFile);
    key_resp_4.keys = undefined;
    key_resp_4.rt = undefined;
    _key_resp_4_allKeys = [];
    // keep track of which components have finished
    practiceTrialsComponents = [];
    practiceTrialsComponents.push(image);
    practiceTrialsComponents.push(key_resp_4);
    
    practiceTrialsComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    
    return Scheduler.Event.NEXT;
  };
}


var frameRemains;
function practiceTrialsRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'practiceTrials'-------
    let continueRoutine = true; // until we're told otherwise
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
    
    // *key_resp_4* updates
    if (t >= 0.0 && key_resp_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_4.tStart = t;  // (not accounting for frame time here)
      key_resp_4.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_4.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_4.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_4.clearEvents(); });
    }

    frameRemains = 0.0 + 5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (key_resp_4.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      key_resp_4.status = PsychoJS.Status.FINISHED;
  }

    if (key_resp_4.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_4.getKeys({keyList: ['1', '2'], waitRelease: false});
      _key_resp_4_allKeys = _key_resp_4_allKeys.concat(theseKeys);
      if (_key_resp_4_allKeys.length > 0) {
        key_resp_4.keys = _key_resp_4_allKeys[_key_resp_4_allKeys.length - 1].name;  // just the last key pressed
        key_resp_4.rt = _key_resp_4_allKeys[_key_resp_4_allKeys.length - 1].rt;
        // was this correct?
        if (key_resp_4.keys == correctAnswer) {
            key_resp_4.corr = 1;
        } else {
            key_resp_4.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
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
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function practiceTrialsRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'practiceTrials'-------
    practiceTrialsComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // was no response the correct answer?!
    if (key_resp_4.keys === undefined) {
      if (['None','none',undefined].includes(correctAnswer)) {
         key_resp_4.corr = 1;  // correct non-response
      } else {
         key_resp_4.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for thisExp (ExperimentHandler)
    psychoJS.experiment.addData('key_resp_4.keys', key_resp_4.keys);
    psychoJS.experiment.addData('key_resp_4.corr', key_resp_4.corr);
    if (typeof key_resp_4.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_4.rt', key_resp_4.rt);
        routineTimer.reset();
        }
    
    key_resp_4.stop();
    return Scheduler.Event.NEXT;
  };
}


var practiceFeedbackComponents;
function practiceFeedbackRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'practiceFeedback'-------
    t = 0;
    practiceFeedbackClock.reset(); // clock
    frameN = -1;
    routineTimer.add(1.000000);
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
  };
}


function practiceFeedbackRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'practiceFeedback'-------
    let continueRoutine = true; // until we're told otherwise
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

    frameRemains = 0.0 + 1 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
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


function practiceFeedbackRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'practiceFeedback'-------
    practiceFeedbackComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_3_allKeys;
var WelcomeScreenComponents;
function WelcomeScreenRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'WelcomeScreen'-------
    t = 0;
    WelcomeScreenClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    key_resp_3.keys = undefined;
    key_resp_3.rt = undefined;
    _key_resp_3_allKeys = [];
    // keep track of which components have finished
    WelcomeScreenComponents = [];
    WelcomeScreenComponents.push(text);
    WelcomeScreenComponents.push(key_resp_3);
    
    WelcomeScreenComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    
    return Scheduler.Event.NEXT;
  };
}


function WelcomeScreenRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'WelcomeScreen'-------
    let continueRoutine = true; // until we're told otherwise
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

    
    // *key_resp_3* updates
    if (t >= 3 && key_resp_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_3.tStart = t;  // (not accounting for frame time here)
      key_resp_3.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_3.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_3.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_3.clearEvents(); });
    }

    if (key_resp_3.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_3.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_3_allKeys = _key_resp_3_allKeys.concat(theseKeys);
      if (_key_resp_3_allKeys.length > 0) {
        key_resp_3.keys = _key_resp_3_allKeys[_key_resp_3_allKeys.length - 1].name;  // just the last key pressed
        key_resp_3.rt = _key_resp_3_allKeys[_key_resp_3_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
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


function WelcomeScreenRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'WelcomeScreen'-------
    WelcomeScreenComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('key_resp_3.keys', key_resp_3.keys);
    if (typeof key_resp_3.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_3.rt', key_resp_3.rt);
        routineTimer.reset();
        }
    
    key_resp_3.stop();
    // the Routine "WelcomeScreen" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_9_allKeys;
var fix2Components;
function fix2RoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'fix2'-------
    t = 0;
    fix2Clock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    fix2experiment.setSize([(1 * x_scale), (1 * y_scale)]);
    key_resp_9.keys = undefined;
    key_resp_9.rt = undefined;
    _key_resp_9_allKeys = [];
    // keep track of which components have finished
    fix2Components = [];
    fix2Components.push(fix2experiment);
    fix2Components.push(key_resp_9);
    
    fix2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    
    return Scheduler.Event.NEXT;
  };
}


function fix2RoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'fix2'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = fix2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *fix2experiment* updates
    if (t >= 0.0 && fix2experiment.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fix2experiment.tStart = t;  // (not accounting for frame time here)
      fix2experiment.frameNStart = frameN;  // exact frame index
      
      fix2experiment.setAutoDraw(true);
    }

    
    // *key_resp_9* updates
    if (t >= 0.0 && key_resp_9.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_9.tStart = t;  // (not accounting for frame time here)
      key_resp_9.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_9.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_9.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_9.clearEvents(); });
    }

    if (key_resp_9.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_9.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_9_allKeys = _key_resp_9_allKeys.concat(theseKeys);
      if (_key_resp_9_allKeys.length > 0) {
        key_resp_9.keys = _key_resp_9_allKeys[_key_resp_9_allKeys.length - 1].name;  // just the last key pressed
        key_resp_9.rt = _key_resp_9_allKeys[_key_resp_9_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
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
    fix2Components.forEach( function(thisComponent) {
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


function fix2RoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'fix2'-------
    fix2Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('key_resp_9.keys', key_resp_9.keys);
    if (typeof key_resp_9.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_9.rt', key_resp_9.rt);
        routineTimer.reset();
        }
    
    key_resp_9.stop();
    // the Routine "fix2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_2_allKeys;
var trialComponents;
function trialRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'trial'-------
    t = 0;
    trialClock.reset(); // clock
    frameN = -1;
    routineTimer.add(5.000000);
    // update component parameters for each repeat
    dispStimuli.setSize([(50 * x_scale), (28.125 * y_scale)]);
    dispStimuli.setImage(ImageFile);
    key_resp_2.keys = undefined;
    key_resp_2.rt = undefined;
    _key_resp_2_allKeys = [];
    // keep track of which components have finished
    trialComponents = [];
    trialComponents.push(dispStimuli);
    trialComponents.push(key_resp_2);
    
    trialComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    
    return Scheduler.Event.NEXT;
  };
}


function trialRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'trial'-------
    let continueRoutine = true; // until we're told otherwise
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
    
    // *key_resp_2* updates
    if (t >= 0.0 && key_resp_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_2.tStart = t;  // (not accounting for frame time here)
      key_resp_2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_2.clearEvents(); });
    }

    frameRemains = 0.0 + 5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (key_resp_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      key_resp_2.status = PsychoJS.Status.FINISHED;
  }

    if (key_resp_2.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_2.getKeys({keyList: ['1', '2'], waitRelease: false});
      _key_resp_2_allKeys = _key_resp_2_allKeys.concat(theseKeys);
      if (_key_resp_2_allKeys.length > 0) {
        key_resp_2.keys = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].name;  // just the last key pressed
        key_resp_2.rt = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].rt;
        // was this correct?
        if (key_resp_2.keys == correctAnswer) {
            key_resp_2.corr = 1;
        } else {
            key_resp_2.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
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
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trialRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'trial'-------
    trialComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // was no response the correct answer?!
    if (key_resp_2.keys === undefined) {
      if (['None','none',undefined].includes(correctAnswer)) {
         key_resp_2.corr = 1;  // correct non-response
      } else {
         key_resp_2.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for thisExp (ExperimentHandler)
    psychoJS.experiment.addData('key_resp_2.keys', key_resp_2.keys);
    psychoJS.experiment.addData('key_resp_2.corr', key_resp_2.corr);
    if (typeof key_resp_2.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_2.rt', key_resp_2.rt);
        routineTimer.reset();
        }
    
    key_resp_2.stop();
    return Scheduler.Event.NEXT;
  };
}


var percentAccurate;
var meanRT;
var _key_resp_allKeys;
var break_2Components;
function break_2RoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'break_2'-------
    t = 0;
    break_2Clock.reset(); // clock
    frameN = -1;
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
    key_resp.keys = undefined;
    key_resp.rt = undefined;
    _key_resp_allKeys = [];
    // keep track of which components have finished
    break_2Components = [];
    break_2Components.push(breakMessage);
    break_2Components.push(key_resp);
    
    break_2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    
    return Scheduler.Event.NEXT;
  };
}


function break_2RoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'break_2'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = break_2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    if ((trialCounter !== 60 && trialCounter !== 120 && trialCounter !== 180 && trialCounter !== 240 && trialCounter !== 300 && trialCounter !== 360 && trialCounter !== 420)) {
        continueRoutine = false;
    }
    
    
    
    
    // *breakMessage* updates
    if (t >= 0.0 && breakMessage.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      breakMessage.tStart = t;  // (not accounting for frame time here)
      breakMessage.frameNStart = frameN;  // exact frame index
      
      breakMessage.setAutoDraw(true);
    }

    
    // *key_resp* updates
    if (t >= 0.0 && key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp.tStart = t;  // (not accounting for frame time here)
      key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp.clearEvents(); });
    }

    if (key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp.getKeys({keyList: ['space', 'return'], waitRelease: false});
      _key_resp_allKeys = _key_resp_allKeys.concat(theseKeys);
      if (_key_resp_allKeys.length > 0) {
        key_resp.keys = _key_resp_allKeys[_key_resp_allKeys.length - 1].name;  // just the last key pressed
        key_resp.rt = _key_resp_allKeys[_key_resp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
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


function break_2RoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'break_2'-------
    break_2Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('key_resp.keys', key_resp.keys);
    if (typeof key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp.rt', key_resp.rt);
        routineTimer.reset();
        }
    
    key_resp.stop();
    // the Routine "break_2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


function endLoopIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return function () {
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
  return function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  
  
  
  
  
  
  
  
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
