var SEED_START = 1000; // there are approximately 50 (x2) images to gen
var seed = SEED_START;
var choiceEnum = ChoiceEnum.HILL;

var choiceEnumString = "";
if (choiceEnum == ChoiceEnum.HILL) {
	choiceEnumString = "Hill";
} else {
	choiceEnumString = "Valley";
}

function downloadCanvas(renderer, filename = "canvas_images.png") {

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

	seed ++;
	domDirectionalLightTest_30_20_1 = generateSceneSingleDirectionalLightDisk(30, 20, getMatteMaterial(), choiceEnum, seed);
	downloadCanvas(domDirectionalLightTest_30_20_1, "DirectionalLightTest_Seed" + seed + choiceEnumString + "_Matte_30_20_1");
	domDirectionalLightTest_30_20_2 = generateSceneSingleDirectionalLight(30, 20, getMatteMaterial(), choiceEnum, seed);
	downloadCanvas(domDirectionalLightTest_30_20_2, "DirectionalLightTest_Seed" + seed + choiceEnumString + "_Matte_30_20_2");
	seed ++;
	domDirectionalLightTest_30_30_1 = generateSceneSingleDirectionalLightDisk(30, 30, getMatteMaterial(), choiceEnum, seed);
	downloadCanvas(domDirectionalLightTest_30_30_1, "DirectionalLightTest_Seed" + seed + choiceEnumString + "_Matte_30_30_1");
	domDirectionalLightTest_30_30_2 = generateSceneSingleDirectionalLight(30, 30, getMatteMaterial(), choiceEnum, seed);
	downloadCanvas(domDirectionalLightTest_30_30_2, "DirectionalLightTest_Seed" + seed + choiceEnumString + "_Matte_30_30_2");
	seed ++;
	domDirectionalLightTest_30_40_1 = generateSceneSingleDirectionalLightDisk(30, 40, getMatteMaterial(), choiceEnum, seed);
	downloadCanvas(domDirectionalLightTest_30_40_1, "DirectionalLightTest_Seed" + seed + choiceEnumString + "_Matte_30_40_1");
	domDirectionalLightTest_30_40_2 = generateSceneSingleDirectionalLight(30, 40, getMatteMaterial(), choiceEnum, seed);
	downloadCanvas(domDirectionalLightTest_30_40_2, "DirectionalLightTest_Seed" + seed + choiceEnumString + "_Matte_30_40_2");
	seed ++;
	domDirectionalLightTest_30_50_1 = generateSceneSingleDirectionalLightDisk(30, 50, getMatteMaterial(), choiceEnum, seed);
	downloadCanvas(domDirectionalLightTest_30_50_1, "DirectionalLightTest_Seed" + seed + choiceEnumString + "_Matte_30_50_1");
	domDirectionalLightTest_30_50_2 = generateSceneSingleDirectionalLight(30, 50, getMatteMaterial(), choiceEnum, seed);
	downloadCanvas(domDirectionalLightTest_30_50_2, "DirectionalLightTest_Seed" + seed + choiceEnumString + "_Matte_30_50_2");
	seed ++;
	domDirectionalLightTest_30_60_1 = generateSceneSingleDirectionalLightDisk(30, 60, getMatteMaterial(), choiceEnum, seed);
	downloadCanvas(domDirectionalLightTest_30_60_1, "DirectionalLightTest_Seed" + seed + choiceEnumString + "_Matte_30_60_1");
	domDirectionalLightTest_30_60_2 = generateSceneSingleDirectionalLight(30, 60, getMatteMaterial(), choiceEnum, seed);
	downloadCanvas(domDirectionalLightTest_30_60_2, "DirectionalLightTest_Seed" + seed + choiceEnumString + "_Matte_30_60_2");
	seed ++;
	domDirectionalLightTest_30_70_1 = generateSceneSingleDirectionalLightDisk(30, 70, getMatteMaterial(), choiceEnum, seed);
	downloadCanvas(domDirectionalLightTest_30_70_1, "DirectionalLightTest_Seed" + seed + choiceEnumString + "_Matte_30_70_1");
	domDirectionalLightTest_30_70_2 = generateSceneSingleDirectionalLight(30, 70, getMatteMaterial(), choiceEnum, seed);
	downloadCanvas(domDirectionalLightTest_30_70_2, "DirectionalLightTest_Seed" + seed + choiceEnumString + "_Matte_30_70_2");
}

function generateSingleDirectionalLight45FloorSlantMatte() {
	// /* generate all our stimulus ahead of time */
	seed += 8;

	seed ++;
	domDirectionalLightTest_45_30_1 = generateSceneSingleDirectionalLightDisk(45, 30, getMatteMaterial(), choiceEnum, seed);
	downloadCanvas(domDirectionalLightTest_45_30_1, "DirectionalLightTest_Seed" + seed + choiceEnumString + "_Matte_45_30_1");
	domDirectionalLightTest_45_30_2 = generateSceneSingleDirectionalLight(45, 30, getMatteMaterial(), choiceEnum, seed);
	downloadCanvas(domDirectionalLightTest_45_30_2, "DirectionalLightTest_Seed" + seed + choiceEnumString + "_Matte_45_30_2");
	seed ++;
	domDirectionalLightTest_45_40_1 = generateSceneSingleDirectionalLightDisk(45, 40, getMatteMaterial(), choiceEnum, seed);
	downloadCanvas(domDirectionalLightTest_45_40_1, "DirectionalLightTest_Seed" + seed + choiceEnumString + "_Matte_45_40_1");
	domDirectionalLightTest_45_40_2 = generateSceneSingleDirectionalLight(45, 40, getMatteMaterial(), choiceEnum, seed);
	downloadCanvas(domDirectionalLightTest_45_40_2, "DirectionalLightTest_Seed" + seed + choiceEnumString + "_Matte_45_40_2");
	seed ++;
	domDirectionalLightTest_45_50_1 = generateSceneSingleDirectionalLightDisk(45, 50, getMatteMaterial(), choiceEnum, seed);
	downloadCanvas(domDirectionalLightTest_45_50_1, "DirectionalLightTest_Seed" + seed + choiceEnumString + "_Matte_45_50_1");
	domDirectionalLightTest_45_50_2 = generateSceneSingleDirectionalLight(45, 50, getMatteMaterial(), choiceEnum, seed);
	downloadCanvas(domDirectionalLightTest_45_50_2, "DirectionalLightTest_Seed" + seed + choiceEnumString + "_Matte_45_50_2");
	seed ++;
	domDirectionalLightTest_45_60_1 = generateSceneSingleDirectionalLightDisk(45, 60, getMatteMaterial(), choiceEnum, seed);
	downloadCanvas(domDirectionalLightTest_45_60_1, "DirectionalLightTest_Seed" + seed + choiceEnumString + "_Matte_45_60_1");
	domDirectionalLightTest_45_60_2 = generateSceneSingleDirectionalLight(45, 60, getMatteMaterial(), choiceEnum, seed);
	downloadCanvas(domDirectionalLightTest_45_60_2, "DirectionalLightTest_Seed" + seed + choiceEnumString + "_Matte_45_60_2");
	seed ++;
	domDirectionalLightTest_45_70_1 = generateSceneSingleDirectionalLightDisk(45, 70, getMatteMaterial(), choiceEnum, seed);
	downloadCanvas(domDirectionalLightTest_45_70_1, "DirectionalLightTest_Seed" + seed + choiceEnumString + "_Matte_45_70_1");
	domDirectionalLightTest_45_70_2 = generateSceneSingleDirectionalLight(45, 70, getMatteMaterial(), choiceEnum, seed);
	downloadCanvas(domDirectionalLightTest_45_70_2, "DirectionalLightTest_Seed" + seed + choiceEnumString + "_Matte_45_70_2");
	seed ++;
	domDirectionalLightTest_45_80_1 = generateSceneSingleDirectionalLightDisk(45, 80, getMatteMaterial(), choiceEnum, seed);
	downloadCanvas(domDirectionalLightTest_45_80_1, "DirectionalLightTest_Seed" + seed + choiceEnumString + "_Matte_45_80_1");
	domDirectionalLightTest_45_80_2 = generateSceneSingleDirectionalLight(45, 80, getMatteMaterial(), choiceEnum, seed);
	downloadCanvas(domDirectionalLightTest_45_80_2, "DirectionalLightTest_Seed" + seed + choiceEnumString + "_Matte_45_80_2");
	seed ++;
	domDirectionalLightTest_45_90_1 = generateSceneSingleDirectionalLightDisk(45, 90, getMatteMaterial(), choiceEnum, seed);
	downloadCanvas(domDirectionalLightTest_45_90_1, "DirectionalLightTest_Seed" + seed + choiceEnumString + "_Matte_45_90_1");
	domDirectionalLightTest_45_90_2 = generateSceneSingleDirectionalLight(45, 90, getMatteMaterial(), choiceEnum, seed);
	downloadCanvas(domDirectionalLightTest_45_90_2, "DirectionalLightTest_Seed" + seed + choiceEnumString + "_Matte_45_90_2");
	seed ++;
	domDirectionalLightTest_45_100_1 = generateSceneSingleDirectionalLightDisk(45, 100, getMatteMaterial(), choiceEnum, seed);
	downloadCanvas(domDirectionalLightTest_45_100_1, "DirectionalLightTest_Seed" + seed + choiceEnumString + "_Matte_45_100_1");
	domDirectionalLightTest_45_100_2 = generateSceneSingleDirectionalLight(45, 100, getMatteMaterial(), choiceEnum, seed);
	downloadCanvas(domDirectionalLightTest_45_100_2, "DirectionalLightTest_Seed" + seed + choiceEnumString + "_Matte_45_100_2");
}

function generateSingleDirectionalLight60FloorSlantMatte() {
	/* generate all our stimulus ahead of time */
	seed += 16;

	seed ++;
	domDirectionalLightTest_60_90_1 = generateSceneSingleDirectionalLightDisk(60, 90, getMatteMaterial(), choiceEnum, seed);
	downloadCanvas(domDirectionalLightTest_60_90_1, "DirectionalLightTest_Seed" + seed + choiceEnumString + "_Matte_60_90_1");
	domDirectionalLightTest_60_90_2 = generateSceneSingleDirectionalLight(60, 90, getMatteMaterial(), choiceEnum, seed);
	downloadCanvas(domDirectionalLightTest_60_90_2, "DirectionalLightTest_Seed" + seed + choiceEnumString + "_Matte_60_90_2");
	seed ++;
	domDirectionalLightTest_60_100_1 = generateSceneSingleDirectionalLightDisk(60, 100, getMatteMaterial(), choiceEnum, seed);
	downloadCanvas(domDirectionalLightTest_60_100_1, "DirectionalLightTest_Seed" + seed + choiceEnumString + "_Matte_60_100_1");
	domDirectionalLightTest_60_100_2 = generateSceneSingleDirectionalLight(60, 100, getMatteMaterial(), choiceEnum, seed);
	downloadCanvas(domDirectionalLightTest_60_100_2, "DirectionalLightTest_Seed" + seed + choiceEnumString + "_Matte_60_100_2");
	seed ++;
	domDirectionalLightTest_60_110_1 = generateSceneSingleDirectionalLightDisk(60, 110, getMatteMaterial(), choiceEnum, seed);
	downloadCanvas(domDirectionalLightTest_60_110_1, "DirectionalLightTest_Seed" + seed + choiceEnumString + "_Matte_60_110_1");
	domDirectionalLightTest_60_110_2 = generateSceneSingleDirectionalLight(60, 110, getMatteMaterial(), choiceEnum, seed);
	downloadCanvas(domDirectionalLightTest_60_110_2, "DirectionalLightTest_Seed" + seed + choiceEnumString + "_Matte_60_110_2");
	seed ++;
	domDirectionalLightTest_60_120_1 = generateSceneSingleDirectionalLightDisk(60, 120, getMatteMaterial(), choiceEnum, seed);
	downloadCanvas(domDirectionalLightTest_60_120_1, "DirectionalLightTest_Seed" + seed + choiceEnumString + "_Matte_60_120_1");
	domDirectionalLightTest_60_120_2 = generateSceneSingleDirectionalLight(60, 120, getMatteMaterial(), choiceEnum, seed);
	downloadCanvas(domDirectionalLightTest_60_120_2, "DirectionalLightTest_Seed" + seed + choiceEnumString + "_Matte_60_120_2");
	seed ++;
	domDirectionalLightTest_60_130_1 = generateSceneSingleDirectionalLightDisk(60, 130, getMatteMaterial(), choiceEnum, seed);
	downloadCanvas(domDirectionalLightTest_60_130_1, "DirectionalLightTest_Seed" + seed + choiceEnumString + "_Matte_60_130_1");
	domDirectionalLightTest_60_130_2 = generateSceneSingleDirectionalLight(60, 130, getMatteMaterial(), choiceEnum, seed);
	downloadCanvas(domDirectionalLightTest_60_130_2, "DirectionalLightTest_Seed" + seed + choiceEnumString + "_Matte_60_130_2");
}

function generateSingleDirectionalLight30FloorSlantGlossy() {
	/* generate all our stimulus ahead of time */
	seed += 22;

	seed ++;
	domDirectionalLightTest_30_20_1 = generateSceneSingleDirectionalLightDisk(30, 20, getGlossyMaterial(), choiceEnum, seed);
	downloadCanvas(domDirectionalLightTest_30_20_1, "DirectionalLightTest_Seed" + seed + choiceEnumString + "_Glossy_30_20_1");
	domDirectionalLightTest_30_20_2 = generateSceneSingleDirectionalLight(30, 20, getGlossyMaterial(), choiceEnum, seed);
	downloadCanvas(domDirectionalLightTest_30_20_2, "DirectionalLightTest_Seed" + seed + choiceEnumString + "_Glossy_30_20_2");
	seed ++;
	domDirectionalLightTest_30_30_1 = generateSceneSingleDirectionalLightDisk(30, 30, getGlossyMaterial(), choiceEnum, seed);
	downloadCanvas(domDirectionalLightTest_30_30_1, "DirectionalLightTest_Seed" + seed + choiceEnumString + "_Glossy_30_30_1");
	domDirectionalLightTest_30_30_2 = generateSceneSingleDirectionalLight(30, 30, getGlossyMaterial(), choiceEnum, seed);
	downloadCanvas(domDirectionalLightTest_30_30_2, "DirectionalLightTest_Seed" + seed + choiceEnumString + "_Glossy_30_30_2");
	seed ++;
	domDirectionalLightTest_30_40_1 = generateSceneSingleDirectionalLightDisk(30, 40, getGlossyMaterial(), choiceEnum, seed);
	downloadCanvas(domDirectionalLightTest_30_40_1, "DirectionalLightTest_Seed" + seed + choiceEnumString + "_Glossy_30_40_1");
	domDirectionalLightTest_30_40_2 = generateSceneSingleDirectionalLight(30, 40, getGlossyMaterial(), choiceEnum, seed);
	downloadCanvas(domDirectionalLightTest_30_40_2, "DirectionalLightTest_Seed" + seed + choiceEnumString + "_Glossy_30_40_2");
	seed ++;
	domDirectionalLightTest_30_50_1 = generateSceneSingleDirectionalLightDisk(30, 50, getGlossyMaterial(), choiceEnum, seed);
	downloadCanvas(domDirectionalLightTest_30_50_1, "DirectionalLightTest_Seed" + seed + choiceEnumString + "_Glossy_30_50_1");
	domDirectionalLightTest_30_50_2 = generateSceneSingleDirectionalLight(30, 50, getGlossyMaterial(), choiceEnum, seed);
	downloadCanvas(domDirectionalLightTest_30_50_2, "DirectionalLightTest_Seed" + seed + choiceEnumString + "_Glossy_30_50_2");
	seed ++;
	domDirectionalLightTest_30_60_1 = generateSceneSingleDirectionalLightDisk(30, 60, getGlossyMaterial(), choiceEnum, seed);
	downloadCanvas(domDirectionalLightTest_30_60_1, "DirectionalLightTest_Seed" + seed + choiceEnumString + "_Glossy_30_60_1");
	domDirectionalLightTest_30_60_2 = generateSceneSingleDirectionalLight(30, 60, getGlossyMaterial(), choiceEnum, seed);
	downloadCanvas(domDirectionalLightTest_30_60_2, "DirectionalLightTest_Seed" + seed + choiceEnumString + "_Glossy_30_60_2");
	seed ++;
	domDirectionalLightTest_30_70_1 = generateSceneSingleDirectionalLightDisk(30, 70, getGlossyMaterial(), choiceEnum, seed);
	downloadCanvas(domDirectionalLightTest_30_70_1, "DirectionalLightTest_Seed" + seed + choiceEnumString + "_Glossy_30_70_1");
	domDirectionalLightTest_30_70_2 = generateSceneSingleDirectionalLight(30, 70, getGlossyMaterial(), choiceEnum, seed);
	downloadCanvas(domDirectionalLightTest_30_70_2, "DirectionalLightTest_Seed" + seed + choiceEnumString + "_Glossy_30_70_2");
}

function generateSingleDirectionalLight45FloorSlantGlossy() {
	/* generate all our stimulus ahead of time */
	seed += 28;

	seed ++;
	domDirectionalLightTest_45_30_1 = generateSceneSingleDirectionalLightDisk(45, 30, getGlossyMaterial(), choiceEnum, seed);
	downloadCanvas(domDirectionalLightTest_45_30_1, "DirectionalLightTest_Seed" + seed + choiceEnumString + "_Glossy_45_30_1");
	domDirectionalLightTest_45_30_2 = generateSceneSingleDirectionalLight(45, 30, getGlossyMaterial(), choiceEnum, seed);
	downloadCanvas(domDirectionalLightTest_45_30_2, "DirectionalLightTest_Seed" + seed + choiceEnumString + "_Glossy_45_30_2");
	seed ++;
	domDirectionalLightTest_45_40_1 = generateSceneSingleDirectionalLightDisk(45, 40, getGlossyMaterial(), choiceEnum, seed);
	downloadCanvas(domDirectionalLightTest_45_40_1, "DirectionalLightTest_Seed" + seed + choiceEnumString + "_Glossy_45_40_1");
	domDirectionalLightTest_45_40_2 = generateSceneSingleDirectionalLight(45, 40, getGlossyMaterial(), choiceEnum, seed);
	downloadCanvas(domDirectionalLightTest_45_40_2, "DirectionalLightTest_Seed" + seed + choiceEnumString + "_Glossy_45_40_2");
	seed ++;
	domDirectionalLightTest_45_50_1 = generateSceneSingleDirectionalLightDisk(45, 50, getGlossyMaterial(), choiceEnum, seed);
	downloadCanvas(domDirectionalLightTest_45_50_1, "DirectionalLightTest_Seed" + seed + choiceEnumString + "_Glossy_45_50_1");
	domDirectionalLightTest_45_50_2 = generateSceneSingleDirectionalLight(45, 50, getGlossyMaterial(), choiceEnum, seed);
	downloadCanvas(domDirectionalLightTest_45_50_2, "DirectionalLightTest_Seed" + seed + choiceEnumString + "_Glossy_45_50_2");
	seed ++;
	domDirectionalLightTest_45_60_1 = generateSceneSingleDirectionalLightDisk(45, 60, getGlossyMaterial(), choiceEnum, seed);
	downloadCanvas(domDirectionalLightTest_45_60_1, "DirectionalLightTest_Seed" + seed + choiceEnumString + "_Glossy_45_60_1");
	domDirectionalLightTest_45_60_2 = generateSceneSingleDirectionalLight(45, 60, getGlossyMaterial(), choiceEnum, seed);
	downloadCanvas(domDirectionalLightTest_45_60_2, "DirectionalLightTest_Seed" + seed + choiceEnumString + "_Glossy_45_60_2");
	seed ++;
	domDirectionalLightTest_45_70_1 = generateSceneSingleDirectionalLightDisk(45, 70, getGlossyMaterial(), choiceEnum, seed);
	downloadCanvas(domDirectionalLightTest_45_70_1, "DirectionalLightTest_Seed" + seed + choiceEnumString + "_Glossy_45_70_1");
	domDirectionalLightTest_45_70_2 = generateSceneSingleDirectionalLight(45, 70, getGlossyMaterial(), choiceEnum, seed);
	downloadCanvas(domDirectionalLightTest_45_70_2, "DirectionalLightTest_Seed" + seed + choiceEnumString + "_Glossy_45_70_2");
	seed ++;
	domDirectionalLightTest_45_80_1 = generateSceneSingleDirectionalLightDisk(45, 80, getGlossyMaterial(), choiceEnum, seed);
	downloadCanvas(domDirectionalLightTest_45_80_1, "DirectionalLightTest_Seed" + seed + choiceEnumString + "_Glossy_45_80_1");
	domDirectionalLightTest_45_80_2 = generateSceneSingleDirectionalLight(45, 80, getGlossyMaterial(), choiceEnum, seed);
	downloadCanvas(domDirectionalLightTest_45_80_2, "DirectionalLightTest_Seed" + seed + choiceEnumString + "_Glossy_45_80_2");
	seed ++;
	domDirectionalLightTest_45_90_1 = generateSceneSingleDirectionalLightDisk(45, 90, getGlossyMaterial(), choiceEnum, seed);
	downloadCanvas(domDirectionalLightTest_45_90_1, "DirectionalLightTest_Seed" + seed + choiceEnumString + "_Glossy_45_90_1");
	domDirectionalLightTest_45_90_2 = generateSceneSingleDirectionalLight(45, 90, getGlossyMaterial(), choiceEnum, seed);
	downloadCanvas(domDirectionalLightTest_45_90_2, "DirectionalLightTest_Seed" + seed + choiceEnumString + "_Glossy_45_90_2");
	seed ++;
	domDirectionalLightTest_45_100_1 = generateSceneSingleDirectionalLightDisk(45, 100, getGlossyMaterial(), choiceEnum, seed);
	downloadCanvas(domDirectionalLightTest_45_100_1, "DirectionalLightTest_Seed" + seed + choiceEnumString + "_Glossy_45_100_1");
	domDirectionalLightTest_45_100_2 = generateSceneSingleDirectionalLight(45, 100, getGlossyMaterial(), choiceEnum, seed);
	downloadCanvas(domDirectionalLightTest_45_100_2, "DirectionalLightTest_Seed" + seed + choiceEnumString + "_Glossy_45_100_2");
}

function generateSingleDirectionalLight60FloorSlantGlossy() {
	/* generate all our stimulus ahead of time */
	seed += 37;

	seed ++;
	domDirectionalLightTest_60_90_1 = generateSceneSingleDirectionalLightDisk(60, 90, getGlossyMaterial(), choiceEnum, seed);
	downloadCanvas(domDirectionalLightTest_60_90_1, "DirectionalLightTest_Seed" + seed + choiceEnumString + "_Glossy_60_90_1");
	domDirectionalLightTest_60_90_2 = generateSceneSingleDirectionalLight(60, 90, getGlossyMaterial(), choiceEnum, seed);
	downloadCanvas(domDirectionalLightTest_60_90_2, "DirectionalLightTest_Seed" + seed + choiceEnumString + "_Glossy_60_90_2");
	seed ++;
	domDirectionalLightTest_60_100_1 = generateSceneSingleDirectionalLightDisk(60, 100, getGlossyMaterial(), choiceEnum, seed);
	downloadCanvas(domDirectionalLightTest_60_100_1, "DirectionalLightTest_Seed" + seed + choiceEnumString + "_Glossy_60_100_1");
	domDirectionalLightTest_60_100_2 = generateSceneSingleDirectionalLight(60, 100, getGlossyMaterial(), choiceEnum, seed);
	downloadCanvas(domDirectionalLightTest_60_100_2, "DirectionalLightTest_Seed" + seed + choiceEnumString + "_Glossy_60_100_2");
	seed ++;
	domDirectionalLightTest_60_110_1 = generateSceneSingleDirectionalLightDisk(60, 110, getGlossyMaterial(), choiceEnum, seed);
	downloadCanvas(domDirectionalLightTest_60_110_1, "DirectionalLightTest_Seed" + seed + choiceEnumString + "_Glossy_60_110_1");
	domDirectionalLightTest_60_110_2 = generateSceneSingleDirectionalLight(60, 110, getGlossyMaterial(), choiceEnum, seed);
	downloadCanvas(domDirectionalLightTest_60_110_2, "DirectionalLightTest_Seed" + seed + choiceEnumString + "_Glossy_60_110_2");
	seed ++;
	domDirectionalLightTest_60_120_1 = generateSceneSingleDirectionalLightDisk(60, 120, getGlossyMaterial(), choiceEnum, seed);
	downloadCanvas(domDirectionalLightTest_60_120_1, "DirectionalLightTest_Seed" + seed + choiceEnumString + "_Glossy_60_120_1");
	domDirectionalLightTest_60_120_2 = generateSceneSingleDirectionalLight(60, 120, getGlossyMaterial(), choiceEnum, seed);
	downloadCanvas(domDirectionalLightTest_60_120_2, "DirectionalLightTest_Seed" + seed + choiceEnumString + "_Glossy_60_120_2");
	seed ++;
	domDirectionalLightTest_60_130_1 = generateSceneSingleDirectionalLightDisk(60, 130, getGlossyMaterial(), choiceEnum, seed);
	downloadCanvas(domDirectionalLightTest_60_130_1, "DirectionalLightTest_Seed" + seed + choiceEnumString + "_Glossy_60_130_1");
	domDirectionalLightTest_60_130_2 = generateSceneSingleDirectionalLight(60, 130, getGlossyMaterial(), choiceEnum, seed);
	downloadCanvas(domDirectionalLightTest_60_130_2, "DirectionalLightTest_Seed" + seed + choiceEnumString + "_Glossy_60_130_2");
}

function generateMatlabLightMatte() {
	/* generate all our stimulus ahead of time */
	seed += 42;

	seed ++;
	domMatlabLightTest_30_1 = generateSceneMatlabLightDisk(30, getMatteMaterial(), choiceEnum, seed);
	downloadCanvas(domMatlabLightTest_30_1, "MatlabTest_Seed" + seed + choiceEnumString + "_Matte_30_1");
	domMatlabLightTest_30_2 = generateSceneMatlabLight(30, getMatteMaterial(), choiceEnum, seed);
	downloadCanvas(domMatlabLightTest_30_2, "MatlabTest_Seed" + seed + choiceEnumString + "_Matte_30_2");
	seed ++;
	domMatlabLightTest_45_1 = generateSceneMatlabLightDisk(45, getMatteMaterial(), choiceEnum, seed);
	downloadCanvas(domMatlabLightTest_45_1, "MatlabTest_Seed" + seed + choiceEnumString + "_Matte_45_1");
	domMatlabLightTest_45_2 = generateSceneMatlabLight(45, getMatteMaterial(), choiceEnum, seed);
	downloadCanvas(domMatlabLightTest_45_2, "MatlabTest_Seed" + seed + choiceEnumString + "_Matte_45_2");
	seed ++;
	domMatlabLightTest_60_1 = generateSceneMatlabLightDisk(60, getMatteMaterial(), choiceEnum, seed);
	downloadCanvas(domMatlabLightTest_60_1, "MatlabTest_Seed" + seed + choiceEnumString + "_Matte_60_1");
	domMatlabLightTest_60_2 = generateSceneMatlabLight(60, getMatteMaterial(), choiceEnum, seed);
	downloadCanvas(domMatlabLightTest_60_2, "MatlabTest_Seed" + seed + choiceEnumString + "_Matte_60_2");
}

function generateMatlabLightGlossy() {
	/* generate all our stimulus ahead of time */
	seed += 45;

	seed ++;
	domMatlabLightTest_30_1 = generateSceneMatlabLightDisk(30, getGlossyMaterial(), choiceEnum, seed);
	downloadCanvas(domMatlabLightTest_30_1, "MatlabTest_Seed" + seed + choiceEnumString + "_Glossy_30_1");
	domMatlabLightTest_30_2 = generateSceneMatlabLight(30, getGlossyMaterial(), choiceEnum, seed);
	downloadCanvas(domMatlabLightTest_30_2, "MatlabTest_Seed" + seed + choiceEnumString + "_Glossy_30_2");
	seed ++;
	domMatlabLightTest_45_1 = generateSceneMatlabLightDisk(45, getGlossyMaterial(), choiceEnum, seed);
	downloadCanvas(domMatlabLightTest_45_1, "MatlabTest_Seed" + seed + choiceEnumString + "_Glossy_45_1");
	domMatlabLightTest_45_2 = generateSceneMatlabLight(45, getGlossyMaterial(), choiceEnum, seed);
	downloadCanvas(domMatlabLightTest_45_2, "MatlabTest_Seed" + seed + choiceEnumString + "_Glossy_45_2");
	seed ++;
	domMatlabLightTest_60_1 = generateSceneMatlabLightDisk(60, getGlossyMaterial(), choiceEnum, seed);
	downloadCanvas(domMatlabLightTest_60_1, "MatlabTest_Seed" + seed + choiceEnumString + "_Glossy_60_1");
	domMatlabLightTest_60_2 = generateSceneMatlabLight(60, getGlossyMaterial(), choiceEnum, seed);
	downloadCanvas(domMatlabLightTest_60_2, "MatlabTest_Seed" + seed + choiceEnumString + "_Glossy_60_2");
}

function generateMathematicaLightMatte() {
	/* generate all our stimulus ahead of time */
	seed += 48;

	seed ++;
	domMathematicaLightTest_30_1 = generateSceneMathematicaLightDisk(30, getMatteMaterial(), choiceEnum, seed);
	downloadCanvas(domMathematicaLightTest_30_1, "MathematicaTest_Seed" + seed + choiceEnumString + "_Matte_30_1");
	domMathematicaLightTest_30_2 = generateSceneMathematicaLight(30, getMatteMaterial(), choiceEnum, seed);
	downloadCanvas(domMathematicaLightTest_30_2, "MathematicaTest_Seed" + seed + choiceEnumString + "_Matte_30_2");
	seed ++;
	domMathematicaLightTest_45_1 = generateSceneMathematicaLightDisk(45, getMatteMaterial(), choiceEnum, seed);
	downloadCanvas(domMathematicaLightTest_45_1, "MathematicaTest_Seed" + seed + choiceEnumString + "_Matte_45_1");
	domMathematicaLightTest_45_2 = generateSceneMathematicaLight(45, getMatteMaterial(), choiceEnum, seed);
	downloadCanvas(domMathematicaLightTest_45_2, "MathematicaTest_Seed" + seed + choiceEnumString + "_Matte_45_2");
	seed ++;
	domMathematicaLightTest_60_1 = generateSceneMathematicaLightDisk(60, getMatteMaterial(), choiceEnum, seed);
	downloadCanvas(domMathematicaLightTest_60_1, "MathematicaTest_Seed" + seed + choiceEnumString + "_Matte_60_1");
	domMathematicaLightTest_60_2 = generateSceneMathematicaLight(60, getMatteMaterial(), choiceEnum, seed);
	downloadCanvas(domMathematicaLightTest_60_2, "MathematicaTest_Seed" + seed + choiceEnumString + "_Matte_60_2");
}

// INIT
generateSingleDirectionalLight30FloorSlantMatte();
// generateSingleDirectionalLight45FloorSlantMatte();
// generateSingleDirectionalLight60FloorSlantMatte();
// generateSingleDirectionalLight30FloorSlantGlossy();
// generateSingleDirectionalLight45FloorSlantGlossy();
// generateSingleDirectionalLight60FloorSlantGlossy();
// generateMatlabLightMatte();
// generateMatlabLightGlossy();
// generateMathematicaLightMatte();