/* generate all our stimulus ahead of time */
domDirectionalLightTest_30_60_1 = generateSceneSingleDirectionalLight(30, 60, generateBigRedSphere(), ChoiceEnum.HILL);
domDirectionalLightTest_30_60_2 = generateSceneSingleDirectionalLight(30, 60, generateSmallRedSphere(), ChoiceEnum.HILL);

/* create timeline */
var timeline = [];

timeline.push({
  type: 'fullscreen',
  fullscreen_mode: true
});

timeline.push({
  type: 'html-keyboard-response',
  stimulus: 'This trial will be in fullscreen mode.'
});

/* define welcome message trial */
var welcome = {
  type: "html-keyboard-response",
  stimulus: "Welcome to the experiment. Press any key to begin."
};
timeline.push(welcome);

/* define instructions trial */
var instructions = {
  type: "html-keyboard-response",
  stimulus: "<p>In this experiment, a red sphere will appear near the center " +
      "of the screen on top of some hills and valleys.</p>" +
      "<p>If you believe the point is located on a hill, press the letter F on the keyboard as fast as you can.</p>" +
      "<p>If you believe the point is located in a valley, press the letter J as fast as you can.</p>" +
      "<p>Press any key to begin.</p>",
  post_trial_gap: 2000

};
timeline.push(instructions);


/* test trials */
var test_stimuli = [
  { stimulus1: domDirectionalLightTest_30_60_1.domElement, stimulus2: domDirectionalLightTest_30_60_2.domElement},
];

var fixation = {
  type: 'html-keyboard-response',
  stimulus: '<div style="font-size:60px;">+</div>',
  choices: jsPsych.NO_KEYS,
  trial_duration: 1000,
}

var pre_test = {
  type: 'html-dom-element-keyboard-response',
  stimulus: jsPsych.timelineVariable('stimulus1'),
  choices: jsPsych.NO_KEYS,
  trial_duration: 350,
}

var test = {
  type: "html-dom-element-keyboard-response",
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
  timeline: timeline
});
