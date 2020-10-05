var SEED_START = 2200; // there are approximately 50 (x2) images to gen
var seed = SEED_START;
var choiceEnum = ChoiceEnum.VALLEY;
var file_extension = ".jpeg"

var choiceEnumString = "";
if (choiceEnum == ChoiceEnum.HILL) {
	choiceEnumString = "Hill";
} else {
	choiceEnumString = "Valley";
}

function downloadCanvas(renderer, filename = "canvas_images.jpeg") {

	// Convert the canvas to data
	var image = renderer.domElement.toDataURL();
	// Create a link
	var aDownloadLink = document.createElement('a');
	// Add the name of the file to the link
	aDownloadLink.download = filename;
	// Attach the data to the link
	aDownloadLink.href = image;
	// Get the code to click the download link
	aDownloadLink.click();
	
}

// DOWNLOAD FILES

function generateSingleDirectionalLight30FloorSlantMatte() {
	/* generate all our stimulus ahead of time */
	surfaceSlant = 30;

	seed ++;
	domDirectionalLightTest_30_20_1 = generateSceneBigDisk( surfaceSlant, [getDirectionalLight(20)], getMatteMaterial(), choiceEnum, seed);
	downloadCanvas(domDirectionalLightTest_30_20_1, "DirectionalLightTest_Seed" + seed + choiceEnumString + "_Matte_30_20_1" + file_extension);
	domDirectionalLightTest_30_20_2 = generateSceneSmallPip( surfaceSlant, [getDirectionalLight(20)], getMatteMaterial(), choiceEnum, seed);
	downloadCanvas(domDirectionalLightTest_30_20_2, "DirectionalLightTest_Seed" + seed + choiceEnumString + "_Matte_30_20_2" + file_extension);
	seed ++;
	domDirectionalLightTest_30_30_1 = generateSceneBigDisk( surfaceSlant, [getDirectionalLight(30)], getMatteMaterial(), choiceEnum, seed);
	downloadCanvas(domDirectionalLightTest_30_30_1, "DirectionalLightTest_Seed" + seed + choiceEnumString + "_Matte_30_30_1" + file_extension);
	domDirectionalLightTest_30_30_2 = generateSceneSmallPip( surfaceSlant, [getDirectionalLight(30)], getMatteMaterial(), choiceEnum, seed);
	downloadCanvas(domDirectionalLightTest_30_30_2, "DirectionalLightTest_Seed" + seed + choiceEnumString + "_Matte_30_30_2" + file_extension);
	seed ++;
	domDirectionalLightTest_30_40_1 = generateSceneBigDisk( surfaceSlant, [getDirectionalLight(40)], getMatteMaterial(), choiceEnum, seed);
	downloadCanvas(domDirectionalLightTest_30_40_1, "DirectionalLightTest_Seed" + seed + choiceEnumString + "_Matte_30_40_1" + file_extension);
	domDirectionalLightTest_30_40_2 = generateSceneSmallPip( surfaceSlant, [getDirectionalLight(40)], getMatteMaterial(), choiceEnum, seed);
	downloadCanvas(domDirectionalLightTest_30_40_2, "DirectionalLightTest_Seed" + seed + choiceEnumString + "_Matte_30_40_2" + file_extension);
	seed ++;
	domDirectionalLightTest_30_50_1 = generateSceneBigDisk( surfaceSlant, [getDirectionalLight(50)], getMatteMaterial(), choiceEnum, seed);
	downloadCanvas(domDirectionalLightTest_30_50_1, "DirectionalLightTest_Seed" + seed + choiceEnumString + "_Matte_30_50_1" + file_extension);
	domDirectionalLightTest_30_50_2 = generateSceneSmallPip( surfaceSlant, [getDirectionalLight(50)], getMatteMaterial(), choiceEnum, seed);
	downloadCanvas(domDirectionalLightTest_30_50_2, "DirectionalLightTest_Seed" + seed + choiceEnumString + "_Matte_30_50_2" + file_extension);
	seed ++;
	domDirectionalLightTest_30_60_1 = generateSceneBigDisk( surfaceSlant, [getDirectionalLight(60)], getMatteMaterial(), choiceEnum, seed);
	downloadCanvas(domDirectionalLightTest_30_60_1, "DirectionalLightTest_Seed" + seed + choiceEnumString + "_Matte_30_60_1" + file_extension);
	domDirectionalLightTest_30_60_2 = generateSceneSmallPip( surfaceSlant, [getDirectionalLight(60)], getMatteMaterial(), choiceEnum, seed);
	downloadCanvas(domDirectionalLightTest_30_60_2, "DirectionalLightTest_Seed" + seed + choiceEnumString + "_Matte_30_60_2" + file_extension);
	seed ++;
	domDirectionalLightTest_30_70_1 = generateSceneBigDisk( surfaceSlant, [getDirectionalLight(70)], getMatteMaterial(), choiceEnum, seed);
	downloadCanvas(domDirectionalLightTest_30_70_1, "DirectionalLightTest_Seed" + seed + choiceEnumString + "_Matte_30_70_1" + file_extension);
	domDirectionalLightTest_30_70_2 = generateSceneSmallPip( surfaceSlant, [getDirectionalLight(70)], getMatteMaterial(), choiceEnum, seed);
	downloadCanvas(domDirectionalLightTest_30_70_2, "DirectionalLightTest_Seed" + seed + choiceEnumString + "_Matte_30_70_2" + file_extension);
}

function generateSingleDirectionalLight45FloorSlantMatte() {
	// /* generate all our stimulus ahead of time */
	seed += 8;
	surfaceSlant = 45;

	seed ++;
	domDirectionalLightTest_45_30_1 = generateSceneBigDisk( surfaceSlant, [getDirectionalLight(30)], getMatteMaterial(), choiceEnum, seed);
	downloadCanvas(domDirectionalLightTest_45_30_1, "DirectionalLightTest_Seed" + seed + choiceEnumString + "_Matte_45_30_1" + file_extension);
	domDirectionalLightTest_45_30_2 = generateSceneSmallPip( surfaceSlant, [getDirectionalLight(30)], getMatteMaterial(), choiceEnum, seed);
	downloadCanvas(domDirectionalLightTest_45_30_2, "DirectionalLightTest_Seed" + seed + choiceEnumString + "_Matte_45_30_2" + file_extension);
	seed ++;
	domDirectionalLightTest_45_40_1 = generateSceneBigDisk( surfaceSlant, [getDirectionalLight(40)], getMatteMaterial(), choiceEnum, seed);
	downloadCanvas(domDirectionalLightTest_45_40_1, "DirectionalLightTest_Seed" + seed + choiceEnumString + "_Matte_45_40_1" + file_extension);
	domDirectionalLightTest_45_40_2 = generateSceneSmallPip( surfaceSlant, [getDirectionalLight(40)], getMatteMaterial(), choiceEnum, seed);
	downloadCanvas(domDirectionalLightTest_45_40_2, "DirectionalLightTest_Seed" + seed + choiceEnumString + "_Matte_45_40_2" + file_extension);
	seed ++;
	domDirectionalLightTest_45_50_1 = generateSceneBigDisk( surfaceSlant, [getDirectionalLight(50)], getMatteMaterial(), choiceEnum, seed);
	downloadCanvas(domDirectionalLightTest_45_50_1, "DirectionalLightTest_Seed" + seed + choiceEnumString + "_Matte_45_50_1" + file_extension);
	domDirectionalLightTest_45_50_2 = generateSceneSmallPip( surfaceSlant, [getDirectionalLight(50)], getMatteMaterial(), choiceEnum, seed);
	downloadCanvas(domDirectionalLightTest_45_50_2, "DirectionalLightTest_Seed" + seed + choiceEnumString + "_Matte_45_50_2" + file_extension);
	seed ++;
	domDirectionalLightTest_45_60_1 = generateSceneBigDisk( surfaceSlant, [getDirectionalLight(60)], getMatteMaterial(), choiceEnum, seed);
	downloadCanvas(domDirectionalLightTest_45_60_1, "DirectionalLightTest_Seed" + seed + choiceEnumString + "_Matte_45_60_1" + file_extension);
	domDirectionalLightTest_45_60_2 = generateSceneSmallPip( surfaceSlant, [getDirectionalLight(60)], getMatteMaterial(), choiceEnum, seed);
	downloadCanvas(domDirectionalLightTest_45_60_2, "DirectionalLightTest_Seed" + seed + choiceEnumString + "_Matte_45_60_2" + file_extension);
	seed ++;
	domDirectionalLightTest_45_70_1 = generateSceneBigDisk( surfaceSlant, [getDirectionalLight(70)], getMatteMaterial(), choiceEnum, seed);
	downloadCanvas(domDirectionalLightTest_45_70_1, "DirectionalLightTest_Seed" + seed + choiceEnumString + "_Matte_45_70_1" + file_extension);
	domDirectionalLightTest_45_70_2 = generateSceneSmallPip( surfaceSlant, [getDirectionalLight(70)], getMatteMaterial(), choiceEnum, seed);
	downloadCanvas(domDirectionalLightTest_45_70_2, "DirectionalLightTest_Seed" + seed + choiceEnumString + "_Matte_45_70_2" + file_extension);
	seed ++;
	domDirectionalLightTest_45_80_1 = generateSceneBigDisk( surfaceSlant, [getDirectionalLight(80)], getMatteMaterial(), choiceEnum, seed);
	downloadCanvas(domDirectionalLightTest_45_80_1, "DirectionalLightTest_Seed" + seed + choiceEnumString + "_Matte_45_80_1" + file_extension);
	domDirectionalLightTest_45_80_2 = generateSceneSmallPip( surfaceSlant, [getDirectionalLight(80)], getMatteMaterial(), choiceEnum, seed);
	downloadCanvas(domDirectionalLightTest_45_80_2, "DirectionalLightTest_Seed" + seed + choiceEnumString + "_Matte_45_80_2" + file_extension);
	seed ++;
	domDirectionalLightTest_45_90_1 = generateSceneBigDisk( surfaceSlant, [getDirectionalLight(90)], getMatteMaterial(), choiceEnum, seed);
	downloadCanvas(domDirectionalLightTest_45_90_1, "DirectionalLightTest_Seed" + seed + choiceEnumString + "_Matte_45_90_1" + file_extension);
	domDirectionalLightTest_45_90_2 = generateSceneSmallPip( surfaceSlant, [getDirectionalLight(90)], getMatteMaterial(), choiceEnum, seed);
	downloadCanvas(domDirectionalLightTest_45_90_2, "DirectionalLightTest_Seed" + seed + choiceEnumString + "_Matte_45_90_2" + file_extension);
	seed ++;
	domDirectionalLightTest_45_100_1 = generateSceneBigDisk( surfaceSlant, [getDirectionalLight(100)], getMatteMaterial(), choiceEnum, seed);
	downloadCanvas(domDirectionalLightTest_45_100_1, "DirectionalLightTest_Seed" + seed + choiceEnumString + "_Matte_45_100_1" + file_extension);
	domDirectionalLightTest_45_100_2 = generateSceneSmallPip( surfaceSlant, [getDirectionalLight(100)], getMatteMaterial(), choiceEnum, seed);
	downloadCanvas(domDirectionalLightTest_45_100_2, "DirectionalLightTest_Seed" + seed + choiceEnumString + "_Matte_45_100_2" + file_extension);
}

function generateSingleDirectionalLight60FloorSlantMatte() {
	/* generate all our stimulus ahead of time */
	seed += 16;
	surfaceSlant = 60;

	seed ++;
	domDirectionalLightTest_60_90_1 = generateSceneBigDisk( surfaceSlant, [getDirectionalLight(90)], getMatteMaterial(), choiceEnum, seed);
	downloadCanvas(domDirectionalLightTest_60_90_1, "DirectionalLightTest_Seed" + seed + choiceEnumString + "_Matte_60_90_1" + file_extension);
	domDirectionalLightTest_60_90_2 = generateSceneSmallPip( surfaceSlant, [getDirectionalLight(90)], getMatteMaterial(), choiceEnum, seed);
	downloadCanvas(domDirectionalLightTest_60_90_2, "DirectionalLightTest_Seed" + seed + choiceEnumString + "_Matte_60_90_2" + file_extension);
	seed ++;
	domDirectionalLightTest_60_100_1 = generateSceneBigDisk( surfaceSlant, [getDirectionalLight(100)], getMatteMaterial(), choiceEnum, seed);
	downloadCanvas(domDirectionalLightTest_60_100_1, "DirectionalLightTest_Seed" + seed + choiceEnumString + "_Matte_60_100_1" + file_extension);
	domDirectionalLightTest_60_100_2 = generateSceneSmallPip( surfaceSlant, [getDirectionalLight(100)], getMatteMaterial(), choiceEnum, seed);
	downloadCanvas(domDirectionalLightTest_60_100_2, "DirectionalLightTest_Seed" + seed + choiceEnumString + "_Matte_60_100_2" + file_extension);
	seed ++;
	domDirectionalLightTest_60_110_1 = generateSceneBigDisk( surfaceSlant, [getDirectionalLight(110)], getMatteMaterial(), choiceEnum, seed);
	downloadCanvas(domDirectionalLightTest_60_110_1, "DirectionalLightTest_Seed" + seed + choiceEnumString + "_Matte_60_110_1" + file_extension);
	domDirectionalLightTest_60_110_2 = generateSceneSmallPip( surfaceSlant, [getDirectionalLight(110)], getMatteMaterial(), choiceEnum, seed);
	downloadCanvas(domDirectionalLightTest_60_110_2, "DirectionalLightTest_Seed" + seed + choiceEnumString + "_Matte_60_110_2" + file_extension);
	seed ++;
	domDirectionalLightTest_60_120_1 = generateSceneBigDisk( surfaceSlant, [getDirectionalLight(120)], getMatteMaterial(), choiceEnum, seed);
	downloadCanvas(domDirectionalLightTest_60_120_1, "DirectionalLightTest_Seed" + seed + choiceEnumString + "_Matte_60_120_1" + file_extension);
	domDirectionalLightTest_60_120_2 = generateSceneSmallPip( surfaceSlant, [getDirectionalLight(120)], getMatteMaterial(), choiceEnum, seed);
	downloadCanvas(domDirectionalLightTest_60_120_2, "DirectionalLightTest_Seed" + seed + choiceEnumString + "_Matte_60_120_2" + file_extension);
	seed ++;
	domDirectionalLightTest_60_130_1 = generateSceneBigDisk( surfaceSlant, [getDirectionalLight(130)], getMatteMaterial(), choiceEnum, seed);
	downloadCanvas(domDirectionalLightTest_60_130_1, "DirectionalLightTest_Seed" + seed + choiceEnumString + "_Matte_60_130_1" + file_extension);
	domDirectionalLightTest_60_130_2 = generateSceneSmallPip( surfaceSlant, [getDirectionalLight(130)], getMatteMaterial(), choiceEnum, seed);
	downloadCanvas(domDirectionalLightTest_60_130_2, "DirectionalLightTest_Seed" + seed + choiceEnumString + "_Matte_60_130_2" + file_extension);
}

function generateSingleDirectionalLight30FloorSlantGlossy() {
	/* generate all our stimulus ahead of time */
	seed += 22;
	surfaceSlant = 30;

	seed ++;
	domDirectionalLightTest_30_20_1 = generateSceneBigDisk( surfaceSlant, [getDirectionalLight(20)], getGlossyMaterial(), choiceEnum, seed);
	downloadCanvas(domDirectionalLightTest_30_20_1, "DirectionalLightTest_Seed" + seed + choiceEnumString + "_Glossy_30_20_1" + file_extension);
	domDirectionalLightTest_30_20_2 = generateSceneSmallPip( surfaceSlant, [getDirectionalLight(20)], getGlossyMaterial(), choiceEnum, seed);
	downloadCanvas(domDirectionalLightTest_30_20_2, "DirectionalLightTest_Seed" + seed + choiceEnumString + "_Glossy_30_20_2" + file_extension);
	seed ++;
	domDirectionalLightTest_30_30_1 = generateSceneBigDisk( surfaceSlant, [getDirectionalLight(30)], getGlossyMaterial(), choiceEnum, seed);
	downloadCanvas(domDirectionalLightTest_30_30_1, "DirectionalLightTest_Seed" + seed + choiceEnumString + "_Glossy_30_30_1" + file_extension);
	domDirectionalLightTest_30_30_2 = generateSceneSmallPip( surfaceSlant, [getDirectionalLight(30)], getGlossyMaterial(), choiceEnum, seed);
	downloadCanvas(domDirectionalLightTest_30_30_2, "DirectionalLightTest_Seed" + seed + choiceEnumString + "_Glossy_30_30_2" + file_extension);
	seed ++;
	domDirectionalLightTest_30_40_1 = generateSceneBigDisk( surfaceSlant, [getDirectionalLight(40)], getGlossyMaterial(), choiceEnum, seed);
	downloadCanvas(domDirectionalLightTest_30_40_1, "DirectionalLightTest_Seed" + seed + choiceEnumString + "_Glossy_30_40_1" + file_extension);
	domDirectionalLightTest_30_40_2 = generateSceneSmallPip( surfaceSlant, [getDirectionalLight(40)], getGlossyMaterial(), choiceEnum, seed);
	downloadCanvas(domDirectionalLightTest_30_40_2, "DirectionalLightTest_Seed" + seed + choiceEnumString + "_Glossy_30_40_2" + file_extension);
	seed ++;
	domDirectionalLightTest_30_50_1 = generateSceneBigDisk( surfaceSlant, [getDirectionalLight(50)], getGlossyMaterial(), choiceEnum, seed);
	downloadCanvas(domDirectionalLightTest_30_50_1, "DirectionalLightTest_Seed" + seed + choiceEnumString + "_Glossy_30_50_1" + file_extension);
	domDirectionalLightTest_30_50_2 = generateSceneSmallPip( surfaceSlant, [getDirectionalLight(50)], getGlossyMaterial(), choiceEnum, seed);
	downloadCanvas(domDirectionalLightTest_30_50_2, "DirectionalLightTest_Seed" + seed + choiceEnumString + "_Glossy_30_50_2" + file_extension);
	seed ++;
	domDirectionalLightTest_30_60_1 = generateSceneBigDisk( surfaceSlant, [getDirectionalLight(60)], getGlossyMaterial(), choiceEnum, seed);
	downloadCanvas(domDirectionalLightTest_30_60_1, "DirectionalLightTest_Seed" + seed + choiceEnumString + "_Glossy_30_60_1" + file_extension);
	domDirectionalLightTest_30_60_2 = generateSceneSmallPip( surfaceSlant, [getDirectionalLight(60)], getGlossyMaterial(), choiceEnum, seed);
	downloadCanvas(domDirectionalLightTest_30_60_2, "DirectionalLightTest_Seed" + seed + choiceEnumString + "_Glossy_30_60_2" + file_extension);
	seed ++;
	domDirectionalLightTest_30_70_1 = generateSceneBigDisk( surfaceSlant, [getDirectionalLight(70)], getGlossyMaterial(), choiceEnum, seed);
	downloadCanvas(domDirectionalLightTest_30_70_1, "DirectionalLightTest_Seed" + seed + choiceEnumString + "_Glossy_30_70_1" + file_extension);
	domDirectionalLightTest_30_70_2 = generateSceneSmallPip( surfaceSlant, [getDirectionalLight(70)], getGlossyMaterial(), choiceEnum, seed);
	downloadCanvas(domDirectionalLightTest_30_70_2, "DirectionalLightTest_Seed" + seed + choiceEnumString + "_Glossy_30_70_2" + file_extension);
}

function generateSingleDirectionalLight45FloorSlantGlossy() {
	/* generate all our stimulus ahead of time */
	seed += 28;
	surfaceSlant = 45;

	seed ++;
	domDirectionalLightTest_45_30_1 = generateSceneBigDisk( surfaceSlant, [getDirectionalLight(30)], getGlossyMaterial(), choiceEnum, seed);
	downloadCanvas(domDirectionalLightTest_45_30_1, "DirectionalLightTest_Seed" + seed + choiceEnumString + "_Glossy_45_30_1" + file_extension);
	domDirectionalLightTest_45_30_2 = generateSceneSmallPip( surfaceSlant, [getDirectionalLight(30)], getGlossyMaterial(), choiceEnum, seed);
	downloadCanvas(domDirectionalLightTest_45_30_2, "DirectionalLightTest_Seed" + seed + choiceEnumString + "_Glossy_45_30_2" + file_extension);
	seed ++;
	domDirectionalLightTest_45_40_1 = generateSceneBigDisk( surfaceSlant, [getDirectionalLight(40)], getGlossyMaterial(), choiceEnum, seed);
	downloadCanvas(domDirectionalLightTest_45_40_1, "DirectionalLightTest_Seed" + seed + choiceEnumString + "_Glossy_45_40_1" + file_extension);
	domDirectionalLightTest_45_40_2 = generateSceneSmallPip( surfaceSlant, [getDirectionalLight(40)], getGlossyMaterial(), choiceEnum, seed);
	downloadCanvas(domDirectionalLightTest_45_40_2, "DirectionalLightTest_Seed" + seed + choiceEnumString + "_Glossy_45_40_2" + file_extension);
	seed ++;
	domDirectionalLightTest_45_50_1 = generateSceneBigDisk( surfaceSlant, [getDirectionalLight(50)], getGlossyMaterial(), choiceEnum, seed);
	downloadCanvas(domDirectionalLightTest_45_50_1, "DirectionalLightTest_Seed" + seed + choiceEnumString + "_Glossy_45_50_1" + file_extension);
	domDirectionalLightTest_45_50_2 = generateSceneSmallPip( surfaceSlant, [getDirectionalLight(50)], getGlossyMaterial(), choiceEnum, seed);
	downloadCanvas(domDirectionalLightTest_45_50_2, "DirectionalLightTest_Seed" + seed + choiceEnumString + "_Glossy_45_50_2" + file_extension);
	seed ++;
	domDirectionalLightTest_45_60_1 = generateSceneBigDisk( surfaceSlant, [getDirectionalLight(60)], getGlossyMaterial(), choiceEnum, seed);
	downloadCanvas(domDirectionalLightTest_45_60_1, "DirectionalLightTest_Seed" + seed + choiceEnumString + "_Glossy_45_60_1" + file_extension);
	domDirectionalLightTest_45_60_2 = generateSceneSmallPip( surfaceSlant, [getDirectionalLight(60)], getGlossyMaterial(), choiceEnum, seed);
	downloadCanvas(domDirectionalLightTest_45_60_2, "DirectionalLightTest_Seed" + seed + choiceEnumString + "_Glossy_45_60_2" + file_extension);
	seed ++;
	domDirectionalLightTest_45_70_1 = generateSceneBigDisk( surfaceSlant, [getDirectionalLight(70)], getGlossyMaterial(), choiceEnum, seed);
	downloadCanvas(domDirectionalLightTest_45_70_1, "DirectionalLightTest_Seed" + seed + choiceEnumString + "_Glossy_45_70_1" + file_extension);
	domDirectionalLightTest_45_70_2 = generateSceneSmallPip( surfaceSlant, [getDirectionalLight(70)], getGlossyMaterial(), choiceEnum, seed);
	downloadCanvas(domDirectionalLightTest_45_70_2, "DirectionalLightTest_Seed" + seed + choiceEnumString + "_Glossy_45_70_2" + file_extension);
	seed ++;
	domDirectionalLightTest_45_80_1 = generateSceneBigDisk( surfaceSlant, [getDirectionalLight(80)], getGlossyMaterial(), choiceEnum, seed);
	downloadCanvas(domDirectionalLightTest_45_80_1, "DirectionalLightTest_Seed" + seed + choiceEnumString + "_Glossy_45_80_1" + file_extension);
	domDirectionalLightTest_45_80_2 = generateSceneSmallPip( surfaceSlant, [getDirectionalLight(80)], getGlossyMaterial(), choiceEnum, seed);
	downloadCanvas(domDirectionalLightTest_45_80_2, "DirectionalLightTest_Seed" + seed + choiceEnumString + "_Glossy_45_80_2" + file_extension);
	seed ++;
	domDirectionalLightTest_45_90_1 = generateSceneBigDisk( surfaceSlant, [getDirectionalLight(90)], getGlossyMaterial(), choiceEnum, seed);
	downloadCanvas(domDirectionalLightTest_45_90_1, "DirectionalLightTest_Seed" + seed + choiceEnumString + "_Glossy_45_90_1" + file_extension);
	domDirectionalLightTest_45_90_2 = generateSceneSmallPip( surfaceSlant, [getDirectionalLight(90)], getGlossyMaterial(), choiceEnum, seed);
	downloadCanvas(domDirectionalLightTest_45_90_2, "DirectionalLightTest_Seed" + seed + choiceEnumString + "_Glossy_45_90_2" + file_extension);
	seed ++;
	domDirectionalLightTest_45_100_1 = generateSceneBigDisk( surfaceSlant, [getDirectionalLight(100)], getGlossyMaterial(), choiceEnum, seed);
	downloadCanvas(domDirectionalLightTest_45_100_1, "DirectionalLightTest_Seed" + seed + choiceEnumString + "_Glossy_45_100_1" + file_extension);
	domDirectionalLightTest_45_100_2 = generateSceneSmallPip( surfaceSlant, [getDirectionalLight(100)], getGlossyMaterial(), choiceEnum, seed);
	downloadCanvas(domDirectionalLightTest_45_100_2, "DirectionalLightTest_Seed" + seed + choiceEnumString + "_Glossy_45_100_2" + file_extension);
}

function generateSingleDirectionalLight60FloorSlantGlossy() {
	/* generate all our stimulus ahead of time */
	seed += 37;
	surfaceSlant = 60;

	seed ++;
	domDirectionalLightTest_60_90_1 = generateSceneBigDisk( surfaceSlant, [getDirectionalLight(90)], getGlossyMaterial(), choiceEnum, seed);
	downloadCanvas(domDirectionalLightTest_60_90_1, "DirectionalLightTest_Seed" + seed + choiceEnumString + "_Glossy_60_90_1" + file_extension);
	domDirectionalLightTest_60_90_2 = generateSceneSmallPip( surfaceSlant, [getDirectionalLight(90)], getGlossyMaterial(), choiceEnum, seed);
	downloadCanvas(domDirectionalLightTest_60_90_2, "DirectionalLightTest_Seed" + seed + choiceEnumString + "_Glossy_60_90_2" + file_extension);
	seed ++;
	domDirectionalLightTest_60_100_1 = generateSceneBigDisk( surfaceSlant, [getDirectionalLight(100)], getGlossyMaterial(), choiceEnum, seed);
	downloadCanvas(domDirectionalLightTest_60_100_1, "DirectionalLightTest_Seed" + seed + choiceEnumString + "_Glossy_60_100_1" + file_extension);
	domDirectionalLightTest_60_100_2 = generateSceneSmallPip( surfaceSlant, [getDirectionalLight(100)], getGlossyMaterial(), choiceEnum, seed);
	downloadCanvas(domDirectionalLightTest_60_100_2, "DirectionalLightTest_Seed" + seed + choiceEnumString + "_Glossy_60_100_2" + file_extension);
	seed ++;
	domDirectionalLightTest_60_110_1 = generateSceneBigDisk( surfaceSlant, [getDirectionalLight(110)], getGlossyMaterial(), choiceEnum, seed);
	downloadCanvas(domDirectionalLightTest_60_110_1, "DirectionalLightTest_Seed" + seed + choiceEnumString + "_Glossy_60_110_1" + file_extension);
	domDirectionalLightTest_60_110_2 = generateSceneSmallPip( surfaceSlant, [getDirectionalLight(110)], getGlossyMaterial(), choiceEnum, seed);
	downloadCanvas(domDirectionalLightTest_60_110_2, "DirectionalLightTest_Seed" + seed + choiceEnumString + "_Glossy_60_110_2" + file_extension);
	seed ++;
	domDirectionalLightTest_60_120_1 = generateSceneBigDisk( surfaceSlant, [getDirectionalLight(120)], getGlossyMaterial(), choiceEnum, seed);
	downloadCanvas(domDirectionalLightTest_60_120_1, "DirectionalLightTest_Seed" + seed + choiceEnumString + "_Glossy_60_120_1" + file_extension);
	domDirectionalLightTest_60_120_2 = generateSceneSmallPip( surfaceSlant, [getDirectionalLight(120)], getGlossyMaterial(), choiceEnum, seed);
	downloadCanvas(domDirectionalLightTest_60_120_2, "DirectionalLightTest_Seed" + seed + choiceEnumString + "_Glossy_60_120_2" + file_extension);
	seed ++;
	domDirectionalLightTest_60_130_1 = generateSceneBigDisk( surfaceSlant, [getDirectionalLight(130)], getGlossyMaterial(), choiceEnum, seed);
	downloadCanvas(domDirectionalLightTest_60_130_1, "DirectionalLightTest_Seed" + seed + choiceEnumString + "_Glossy_60_130_1" + file_extension);
	domDirectionalLightTest_60_130_2 = generateSceneSmallPip( surfaceSlant, [getDirectionalLight(130)], getGlossyMaterial(), choiceEnum, seed);
	downloadCanvas(domDirectionalLightTest_60_130_2, "DirectionalLightTest_Seed" + seed + choiceEnumString + "_Glossy_60_130_2" + file_extension);
}

function generateMatlabLightMatte() {
	/* generate all our stimulus ahead of time */
	seed += 42;

	seed ++;
	domMatlabLightTest_30_1 = generateSceneBigDisk(30, [getMatlabLight()], getMatteMaterial(), choiceEnum, seed);
	downloadCanvas(domMatlabLightTest_30_1, "MatlabTest_Seed" + seed + choiceEnumString + "_Matte_30_1" + file_extension);
	domMatlabLightTest_30_2 = generateSceneSmallPip(30, [getMatlabLight()], getMatteMaterial(), choiceEnum, seed);
	downloadCanvas(domMatlabLightTest_30_2, "MatlabTest_Seed" + seed + choiceEnumString + "_Matte_30_2" + file_extension);
	seed ++;
	domMatlabLightTest_45_1 = generateSceneBigDisk(45, [getMatlabLight()], getMatteMaterial(), choiceEnum, seed);
	downloadCanvas(domMatlabLightTest_45_1, "MatlabTest_Seed" + seed + choiceEnumString + "_Matte_45_1" + file_extension);
	domMatlabLightTest_45_2 = generateSceneSmallPip(45, [getMatlabLight()], getMatteMaterial(), choiceEnum, seed);
	downloadCanvas(domMatlabLightTest_45_2, "MatlabTest_Seed" + seed + choiceEnumString + "_Matte_45_2" + file_extension);
	seed ++;
	domMatlabLightTest_60_1 = generateSceneBigDisk(60, [getMatlabLight()], getMatteMaterial(), choiceEnum, seed);
	downloadCanvas(domMatlabLightTest_60_1, "MatlabTest_Seed" + seed + choiceEnumString + "_Matte_60_1" + file_extension);
	domMatlabLightTest_60_2 = generateSceneSmallPip(60, [getMatlabLight()], getMatteMaterial(), choiceEnum, seed);
	downloadCanvas(domMatlabLightTest_60_2, "MatlabTest_Seed" + seed + choiceEnumString + "_Matte_60_2" + file_extension);
}

function generateMatlabLightGlossy() {
	/* generate all our stimulus ahead of time */
	seed += 45;

	seed ++;
	domMatlabLightTest_30_1 = generateSceneBigDisk(30, [getMatlabLight()], getGlossyMaterial(), choiceEnum, seed);
	downloadCanvas(domMatlabLightTest_30_1, "MatlabTest_Seed" + seed + choiceEnumString + "_Glossy_30_1" + file_extension);
	domMatlabLightTest_30_2 = generateSceneSmallPip(30, [getMatlabLight()], getGlossyMaterial(), choiceEnum, seed);
	downloadCanvas(domMatlabLightTest_30_2, "MatlabTest_Seed" + seed + choiceEnumString + "_Glossy_30_2" + file_extension);
	seed ++;
	domMatlabLightTest_45_1 = generateSceneBigDisk(45, [getMatlabLight()], getGlossyMaterial(), choiceEnum, seed);
	downloadCanvas(domMatlabLightTest_45_1, "MatlabTest_Seed" + seed + choiceEnumString + "_Glossy_45_1" + file_extension);
	domMatlabLightTest_45_2 = generateSceneSmallPip(45, [getMatlabLight()], getGlossyMaterial(), choiceEnum, seed);
	downloadCanvas(domMatlabLightTest_45_2, "MatlabTest_Seed" + seed + choiceEnumString + "_Glossy_45_2" + file_extension);
	seed ++;
	domMatlabLightTest_60_1 = generateSceneBigDisk(60, [getMatlabLight()], getGlossyMaterial(), choiceEnum, seed);
	downloadCanvas(domMatlabLightTest_60_1, "MatlabTest_Seed" + seed + choiceEnumString + "_Glossy_60_1" + file_extension);
	domMatlabLightTest_60_2 = generateSceneSmallPip(60, [getMatlabLight()], getGlossyMaterial(), choiceEnum, seed);
	downloadCanvas(domMatlabLightTest_60_2, "MatlabTest_Seed" + seed + choiceEnumString + "_Glossy_60_2" + file_extension);
}

function generateMathematicaLightMatte() {
	/* generate all our stimulus ahead of time */
	seed += 49;

	seed ++;
	domMathematicaLightTest_30_1 = generateSceneBigDisk(30, getMathematicaLights(), getMatteMaterial(), choiceEnum, seed);
	downloadCanvas(domMathematicaLightTest_30_1, "MathematicaTest_Seed" + seed + choiceEnumString + "_Matte_30_1" + file_extension);
	domMathematicaLightTest_30_2 = generateSceneSmallPip(30, getMathematicaLights(), getMatteMaterial(), choiceEnum, seed);
	downloadCanvas(domMathematicaLightTest_30_2, "MathematicaTest_Seed" + seed + choiceEnumString + "_Matte_30_2" + file_extension);
	seed ++;
	domMathematicaLightTest_45_1 = generateSceneBigDisk(45, getMathematicaLights(), getMatteMaterial(), choiceEnum, seed);
	downloadCanvas(domMathematicaLightTest_45_1, "MathematicaTest_Seed" + seed + choiceEnumString + "_Matte_45_1" + file_extension);
	domMathematicaLightTest_45_2 = generateSceneSmallPip(45, getMathematicaLights(), getMatteMaterial(), choiceEnum, seed);
	downloadCanvas(domMathematicaLightTest_45_2, "MathematicaTest_Seed" + seed + choiceEnumString + "_Matte_45_2" + file_extension);
	seed ++;
	domMathematicaLightTest_60_1 = generateSceneBigDisk(60, getMathematicaLights(), getMatteMaterial(), choiceEnum, seed);
	downloadCanvas(domMathematicaLightTest_60_1, "MathematicaTest_Seed" + seed + choiceEnumString + "_Matte_60_1" + file_extension);
	domMathematicaLightTest_60_2 = generateSceneSmallPip(60, getMathematicaLights(), getMatteMaterial(), choiceEnum, seed);
	downloadCanvas(domMathematicaLightTest_60_2, "MathematicaTest_Seed" + seed + choiceEnumString + "_Matte_60_2" + file_extension);
}

function generateSpecific() {
	seed = 2111;
	surfaceSlant = 45;

	domDirectionalLightTest_45_50_1 = generateSceneBigDisk( surfaceSlant, [getDirectionalLight(50)], getMatteMaterial(), ChoiceEnum.VALLEY, seed);
	downloadCanvas(domDirectionalLightTest_45_50_1, "DirectionalLightTest_Seed" + seed + "Valley" + "_Matte_45_50_1" + file_extension);
	domDirectionalLightTest_45_50_2 = generateSceneSmallPip( surfaceSlant, [getDirectionalLight(50)], getMatteMaterial(), ChoiceEnum.VALLEY, seed);
	downloadCanvas(domDirectionalLightTest_45_50_2, "DirectionalLightTest_Seed" + seed + "Valley" + "_Matte_45_50_2" + file_extension);

	domDirectionalLightTest_45_50_1 = generateSceneBigDisk( surfaceSlant, [getDirectionalLight(50)], getMatteMaterial(), ChoiceEnum.HILL, seed);
	downloadCanvas(domDirectionalLightTest_45_50_1, "DirectionalLightTest_Seed" + seed + "Hill" + "_Matte_45_50_1" + file_extension);
	domDirectionalLightTest_45_50_2 = generateSceneSmallPip( surfaceSlant, [getDirectionalLight(50)], getMatteMaterial(), ChoiceEnum.HILL, seed);
	downloadCanvas(domDirectionalLightTest_45_50_2, "DirectionalLightTest_Seed" + seed + "Hill" + "_Matte_45_50_2" + file_extension);
}

// INIT
generateSingleDirectionalLight30FloorSlantMatte();
generateSingleDirectionalLight45FloorSlantMatte();
generateSingleDirectionalLight60FloorSlantMatte();
generateSingleDirectionalLight30FloorSlantGlossy();
generateSingleDirectionalLight45FloorSlantGlossy();
generateSingleDirectionalLight60FloorSlantGlossy();
generateMatlabLightMatte();
generateMatlabLightGlossy();
generateMathematicaLightMatte();
// generateSpecific();