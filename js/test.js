let choiceEnum = ChoiceEnum.VALLEY;
let seed = 2134;

// let domMathematicaLightTest_30_1 = generateSceneMathematicaLightDisk(30, getMatteMaterial(), choiceEnum, seed);
// document.body.appendChild( domMathematicaLightTest_30_1.domElement);

let domMatlabLightTest_60_2 = generateSceneSmallPip(45, [getMatlabLight()], getGlossyMaterial(), choiceEnum, seed);
document.body.appendChild( domMatlabLightTest_60_2.domElement);