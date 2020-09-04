/* generate all our stimulus ahead of time */
domDirectionalLightTest_30_20_1 = generateSceneSingleDirectionalLight(30, 20, getMatteMaterial(), generateBigRedSphere(), ChoiceEnum.HILL);
domDirectionalLightTest_30_20_2 = generateSceneSingleDirectionalLight(30, 20, getMatteMaterial(), generateSmallRedSphere(), ChoiceEnum.HILL);

domDirectionalLightTest_30_30_1 = generateSceneSingleDirectionalLight(30, 30, getMatteMaterial(), generateBigRedSphere(), ChoiceEnum.VALLEY, 1.1);
domDirectionalLightTest_30_30_2 = generateSceneSingleDirectionalLight(30, 30, getMatteMaterial(), generateSmallRedSphere(), ChoiceEnum.VALLEY, 1.1);

domDirectionalLightTest_30_40_1 = generateSceneSingleDirectionalLight(30, 40, getMatteMaterial(), generateBigRedSphere(), ChoiceEnum.HILL, 1.2);
domDirectionalLightTest_30_40_2 = generateSceneSingleDirectionalLight(30, 40, getMatteMaterial(), generateSmallRedSphere(), ChoiceEnum.HILL, 1.2);

domDirectionalLightTest_30_50_1 = generateSceneSingleDirectionalLight(30, 50, getMatteMaterial(), generateBigRedSphere(), ChoiceEnum.HILL, 1.3);
domDirectionalLightTest_30_50_2 = generateSceneSingleDirectionalLight(30, 50, getMatteMaterial(), generateSmallRedSphere(), ChoiceEnum.HILL, 1.3);

domDirectionalLightTest_30_60_1 = generateSceneSingleDirectionalLight(30, 60, getMatteMaterial(), generateBigRedSphere(), ChoiceEnum.HILL, 1.4);
domDirectionalLightTest_30_60_2 = generateSceneSingleDirectionalLight(30, 60, getMatteMaterial(), generateSmallRedSphere(), ChoiceEnum.HILL, 1.4);

domDirectionalLightTest_30_70_1 = generateSceneSingleDirectionalLight(30, 70, getMatteMaterial(), generateBigRedSphere(), ChoiceEnum.HILL, 1.5);
domDirectionalLightTest_30_70_2 = generateSceneSingleDirectionalLight(30, 70, getMatteMaterial(), generateSmallRedSphere(), ChoiceEnum.HILL, 1.5);

/* create timeline */
var timeline = [];

timeline.push({
  type: 'fullscreen',
  fullscreen_mode: true
});

timeline.push({
  type: 'html-keyboard-response',
  stimulus: "<div class=\"display_text\">" +
  "This trial will be in fullscreen mode. Press any key on the keyboard to begin." +
  "<\div>"
});

/* define welcome message trial */
var welcome = {
  type: "html-keyboard-response",
  stimulus: "<div class=\"display_text\">" +
  "Welcome to the experiment. Press any key on the keyboard to begin." +
  "<\div>"
};
timeline.push(welcome);

/* define instructions trial */
var instructions = {
  type: "html-keyboard-response",
  stimulus: "<div class=\"display_text\">" +
      "<p>In this experiment, a red sphere will appear near the center of the screen on top of some hills and valleys.</p>" +
      "<p>If you believe the point is located on a hill, press the letter F on the keyboard as fast as you can.</p>" +
      "<p>If you believe the point is located in a valley, press the letter J as fast as you can.</p>" +
      "<p>Press any key on the keyboard to begin.</p>" +
      "<\div>",
  post_trial_gap: 2000

};
timeline.push(instructions);


/* test trials */
var test_stimuli = [
  { 
    stimulus1_name: "1. directional light, 30 degree surface slant, 20 degree light slant, matte, pre",
    stimulus1: domDirectionalLightTest_30_20_1.domElement,
    stimulus2_name: "1. directional light, 30 degree surface slant, 20 degree light slant, matte, post",
    stimulus2: domDirectionalLightTest_30_20_2.domElement
  },
  { 
    stimulus1_name: "1. directional light, 30 degree surface slant, 30 degree light slant, matte, pre",
    stimulus1: domDirectionalLightTest_30_30_1.domElement,
    stimulus2_name: "1. directional light, 30 degree surface slant, 30 degree light slant, matte, post",
    stimulus2: domDirectionalLightTest_30_30_2.domElement
  },
  { 
    stimulus1_name: "1. directional light, 30 degree surface slant, 40 degree light slant, matte, pre",
    stimulus1: domDirectionalLightTest_30_40_1.domElement,
    stimulus2_name: "1. directional light, 30 degree surface slant, 40 degree light slant, matte, post",
    stimulus2: domDirectionalLightTest_30_40_2.domElement
  },
  { 
    stimulus1_name: "1. directional light, 30 degree surface slant, 50 degree light slant, matte, pre",
    stimulus1: domDirectionalLightTest_30_50_1.domElement,
    stimulus2_name: "1. directional light, 30 degree surface slant, 50 degree light slant, matte, post",
    stimulus2: domDirectionalLightTest_30_50_2.domElement
  },
  { 
    stimulus1_name: "1. directional light, 30 degree surface slant, 60 degree light slant, matte, pre",
    stimulus1: domDirectionalLightTest_30_60_1.domElement,
    stimulus2_name: "1. directional light, 30 degree surface slant, 60 degree light slant, matte, post",
    stimulus2: domDirectionalLightTest_30_60_2.domElement
  },
  { 
    stimulus1_name: "1. directional light, 30 degree surface slant, 70 degree light slant, matte, pre",
    stimulus1: domDirectionalLightTest_30_70_1.domElement,
    stimulus2_name: "1. directional light, 30 degree surface slant, 70 degree light slant, matte, post",
    stimulus2: domDirectionalLightTest_30_70_2.domElement
  },
];

var fixation = {
  type: 'html-keyboard-response',
  stimulus: '<div class=\"display_text\" style="font-size:60px;">+</div>',
  choices: jsPsych.NO_KEYS,
  trial_duration: 1000,
}

var pre_test = {
  type: 'html-dom-element-keyboard-response',
  stimulus_name: jsPsych.timelineVariable('stimulus1_name'),
  stimulus: jsPsych.timelineVariable('stimulus1'),
  choices: jsPsych.NO_KEYS,
  trial_duration: 350,
}

var test = {
  type: "html-dom-element-keyboard-response",
  stimulus_name: jsPsych.timelineVariable('stimulus2_name'),
  stimulus: jsPsych.timelineVariable('stimulus2'),
  choices: ['f', 'j'],
  trial_duration: 3150,
}

var test_procedure = {
  timeline: [fixation, pre_test, test],
  timeline_variables: test_stimuli
}

timeline.push(test_procedure);

// exit fullscreen mode
timeline.push({
  type: 'fullscreen',
  fullscreen_mode: false
});

/* start the experiment */
jsPsych.init({
  timeline: timeline,
  on_finish: function() {
    jsPsych.data.displayData();
  }
});
