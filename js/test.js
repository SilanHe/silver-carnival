let choiceEnum = ChoiceEnum.HILL;
let seed = 211453;
var DISK_DISTANCE = 2;
var PIP_DISTANCE = 0.2;

var amplitude30 = 0.45;
var amplitude45 = 0.35;
var amplitude60 = 0.16;

let test1 = generateExperimentScene( amplitude60, 60, [getDirectionalLight(120)], getMatteMaterial(), choiceEnum, generateSmallRedSphere(), PIP_DISTANCE, seed);
document.body.appendChild( test1.domElement);

let test2 = generateExperimentScene( amplitude60, 60, [getDirectionalLight(120)], getGlossyMaterial(), choiceEnum, generateSmallRedSphere(), PIP_DISTANCE, seed);
document.body.appendChild( test2.domElement);

let test3 = generateExperimentScene( amplitude30, 30, [getDirectionalLight(40)], getMatteMaterial(), choiceEnum, generateSmallRedSphere(), PIP_DISTANCE, seed);
document.body.appendChild( test3.domElement);

let test4 = generateExperimentScene( amplitude30, 30, [getDirectionalLight(40)], getGlossyMaterial(), choiceEnum, generateSmallRedSphere(), PIP_DISTANCE, seed);
document.body.appendChild( test4.domElement);

let test5 = generateExperimentScene( amplitude30, 30, [getDirectionalLight(60)], getMatteMaterial(), choiceEnum, generateSmallRedSphere(), PIP_DISTANCE, seed);
document.body.appendChild( test5.domElement);

let test6 = generateExperimentScene( amplitude30, 30, [getDirectionalLight(60)], getGlossyMaterial(), choiceEnum, generateSmallRedSphere(), PIP_DISTANCE, seed);
document.body.appendChild( test6.domElement);

let test7 = generateExperimentScene( amplitude45, 45, [getMatlabLight()], getMatteMaterial(), choiceEnum, generateSmallRedSphere(), PIP_DISTANCE, seed);
document.body.appendChild( test7.domElement);

let test8 = generateExperimentScene( amplitude45, 45, getMathematicaLights(), getMatteMaterial(), choiceEnum, generateSmallRedSphere(), PIP_DISTANCE, seed);
document.body.appendChild( test8.domElement);