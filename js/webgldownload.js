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

// TEST
function testDirectionalLight() {
	domDirectionalLightTest_30_60_1 = generateSceneSingleDirectionalLight(30, 60, generateBigRedSphere(), ChoiceEnum.HILL);
	document.body.appendChild( domDirectionalLightTest_30_60_1.domElement);
}

function generateTest() {
	domDirectionalLightTest_30_20_1 = generateSceneSingleDirectionalLight(30, 20, getGlossyMaterial(), generateBigRedSphere(), ChoiceEnum.HILL);
	downloadCanvas(domDirectionalLightTest_30_20_1, "DirectionalLightTest_Glossy_30_20_1");
}

// DOWNLOAD FILES

function generateSingleDirectionalLight30FloorSlantMatte() {
	/* generate all our stimulus ahead of time */
	domDirectionalLightTest_30_20_1 = generateSceneSingleDirectionalLight(30, 20, getMatteMaterial(), generateBigRedSphere(), ChoiceEnum.HILL);
	downloadCanvas(domDirectionalLightTest_30_20_1, "DirectionalLightTest_Matte_30_20_1");
	domDirectionalLightTest_30_20_2 = generateSceneSingleDirectionalLight(30, 20, getMatteMaterial(), generateSmallRedSphere(), ChoiceEnum.HILL);
	downloadCanvas(domDirectionalLightTest_30_20_2, "DirectionalLightTest_Matte_30_20_2");
	domDirectionalLightTest_30_30_1 = generateSceneSingleDirectionalLight(30, 30, getMatteMaterial(), generateBigRedSphere(), ChoiceEnum.VALLEY, 1.1);
	downloadCanvas(domDirectionalLightTest_30_30_1, "DirectionalLightTest_Matte_30_30_1");
	domDirectionalLightTest_30_30_2 = generateSceneSingleDirectionalLight(30, 30, getMatteMaterial(), generateSmallRedSphere(), ChoiceEnum.VALLEY, 1.1);
	downloadCanvas(domDirectionalLightTest_30_30_2, "DirectionalLightTest_Matte_30_30_2");
	domDirectionalLightTest_30_40_1 = generateSceneSingleDirectionalLight(30, 40, getMatteMaterial(), generateBigRedSphere(), ChoiceEnum.HILL, 1.2);
	downloadCanvas(domDirectionalLightTest_30_40_1, "DirectionalLightTest_Matte_30_40_1");
	domDirectionalLightTest_30_40_2 = generateSceneSingleDirectionalLight(30, 40, getMatteMaterial(), generateSmallRedSphere(), ChoiceEnum.HILL, 1.2);
	downloadCanvas(domDirectionalLightTest_30_40_2, "DirectionalLightTest_Matte_30_40_2");
	domDirectionalLightTest_30_50_1 = generateSceneSingleDirectionalLight(30, 50, getMatteMaterial(), generateBigRedSphere(), ChoiceEnum.HILL, 1.3);
	downloadCanvas(domDirectionalLightTest_30_50_1, "DirectionalLightTest_Matte_30_50_1");
	domDirectionalLightTest_30_50_2 = generateSceneSingleDirectionalLight(30, 50, getMatteMaterial(), generateSmallRedSphere(), ChoiceEnum.HILL, 1.3);
	downloadCanvas(domDirectionalLightTest_30_50_2, "DirectionalLightTest_Matte_30_50_2");
	domDirectionalLightTest_30_60_1 = generateSceneSingleDirectionalLight(30, 60, getMatteMaterial(), generateBigRedSphere(), ChoiceEnum.VALLEY, 1.4);
	downloadCanvas(domDirectionalLightTest_30_60_1, "DirectionalLightTest_Matte_30_60_1");
	domDirectionalLightTest_30_60_2 = generateSceneSingleDirectionalLight(30, 60, getMatteMaterial(), generateSmallRedSphere(), ChoiceEnum.VALLEY, 1.4);
	downloadCanvas(domDirectionalLightTest_30_60_2, "DirectionalLightTest_Matte_30_60_2");
	domDirectionalLightTest_30_70_1 = generateSceneSingleDirectionalLight(30, 70, getMatteMaterial(), generateBigRedSphere(), ChoiceEnum.VALLEY, 1.5);
	downloadCanvas(domDirectionalLightTest_30_70_1, "DirectionalLightTest_Matte_30_70_1");
	domDirectionalLightTest_30_70_2 = generateSceneSingleDirectionalLight(30, 70, getMatteMaterial(), generateSmallRedSphere(), ChoiceEnum.VALLEY, 1.5);
	downloadCanvas(domDirectionalLightTest_30_70_2, "DirectionalLightTest_Matte_30_70_2");
}

function generateSingleDirectionalLight45FloorSlantMatte() {
	/* generate all our stimulus ahead of time */
	domDirectionalLightTest_45_30_1 = generateSceneSingleDirectionalLight(45, 30, getMatteMaterial(), generateBigRedSphere(), ChoiceEnum.VALLEY, 1.6);
	downloadCanvas(domDirectionalLightTest_45_30_1, "DirectionalLightTest_Matte_45_30_1");
	domDirectionalLightTest_45_30_2 = generateSceneSingleDirectionalLight(45, 30, getMatteMaterial(), generateSmallRedSphere(), ChoiceEnum.VALLEY, 1.6);
	downloadCanvas(domDirectionalLightTest_45_30_2, "DirectionalLightTest_Matte_45_30_2");
	domDirectionalLightTest_45_40_1 = generateSceneSingleDirectionalLight(45, 40, getMatteMaterial(), generateBigRedSphere(), ChoiceEnum.HILL, 1.7);
	downloadCanvas(domDirectionalLightTest_45_40_1, "DirectionalLightTest_Matte_45_40_1");
	domDirectionalLightTest_45_40_2 = generateSceneSingleDirectionalLight(45, 40, getMatteMaterial(), generateSmallRedSphere(), ChoiceEnum.HILL, 1.7);
	downloadCanvas(domDirectionalLightTest_45_40_2, "DirectionalLightTest_Matte_45_40_2");
	domDirectionalLightTest_45_50_1 = generateSceneSingleDirectionalLight(45, 50, getMatteMaterial(), generateBigRedSphere(), ChoiceEnum.HILL, 1.8);
	downloadCanvas(domDirectionalLightTest_45_50_1, "DirectionalLightTest_Matte_45_50_1");
	domDirectionalLightTest_45_50_2 = generateSceneSingleDirectionalLight(45, 50, getMatteMaterial(), generateSmallRedSphere(), ChoiceEnum.HILL, 1.8);
	downloadCanvas(domDirectionalLightTest_45_50_2, "DirectionalLightTest_Matte_45_50_2");
	domDirectionalLightTest_45_60_1 = generateSceneSingleDirectionalLight(45, 60, getMatteMaterial(), generateBigRedSphere(), ChoiceEnum.VALLEY, 1.9);
	downloadCanvas(domDirectionalLightTest_45_60_1, "DirectionalLightTest_Matte_45_60_1");
	domDirectionalLightTest_45_60_2 = generateSceneSingleDirectionalLight(45, 60, getMatteMaterial(), generateSmallRedSphere(), ChoiceEnum.VALLEY, 1.9);
	downloadCanvas(domDirectionalLightTest_45_60_2, "DirectionalLightTest_Matte_45_60_2");
	domDirectionalLightTest_45_70_1 = generateSceneSingleDirectionalLight(45, 70, getMatteMaterial(), generateBigRedSphere(), ChoiceEnum.VALLEY, 2);
	downloadCanvas(domDirectionalLightTest_45_70_1, "DirectionalLightTest_Matte_45_70_1");
	domDirectionalLightTest_45_70_2 = generateSceneSingleDirectionalLight(45, 70, getMatteMaterial(), generateSmallRedSphere(), ChoiceEnum.VALLEY, 2);
	downloadCanvas(domDirectionalLightTest_45_70_2, "DirectionalLightTest_Matte_45_70_2");
	domDirectionalLightTest_45_80_1 = generateSceneSingleDirectionalLight(45, 80, getMatteMaterial(), generateBigRedSphere(), ChoiceEnum.HILL, 2.1);
	downloadCanvas(domDirectionalLightTest_45_80_1, "DirectionalLightTest_Matte_45_80_1");
	domDirectionalLightTest_45_80_2 = generateSceneSingleDirectionalLight(45, 80, getMatteMaterial(), generateSmallRedSphere(), ChoiceEnum.HILL, 2.1);
	downloadCanvas(domDirectionalLightTest_45_80_2, "DirectionalLightTest_Matte_45_80_2");
	domDirectionalLightTest_45_90_1 = generateSceneSingleDirectionalLight(45, 90, getMatteMaterial(), generateBigRedSphere(), ChoiceEnum.HILL, 2.2);
	downloadCanvas(domDirectionalLightTest_45_90_1, "DirectionalLightTest_Matte_45_90_1");
	domDirectionalLightTest_45_90_2 = generateSceneSingleDirectionalLight(45, 90, getMatteMaterial(), generateSmallRedSphere(), ChoiceEnum.HILL, 2.2);
	downloadCanvas(domDirectionalLightTest_45_90_2, "DirectionalLightTest_Matte_45_90_2");
	domDirectionalLightTest_45_100_1 = generateSceneSingleDirectionalLight(45, 100, getMatteMaterial(), generateBigRedSphere(), ChoiceEnum.HILL, 2.3);
	downloadCanvas(domDirectionalLightTest_45_100_1, "DirectionalLightTest_Matte_45_100_1");
	domDirectionalLightTest_45_100_2 = generateSceneSingleDirectionalLight(45, 100, getMatteMaterial(), generateSmallRedSphere(), ChoiceEnum.HILL, 2.3);
	downloadCanvas(domDirectionalLightTest_45_100_2, "DirectionalLightTest_Matte_45_100_2");
}

function generateSingleDirectionalLight60FloorSlantMatte() {
	/* generate all our stimulus ahead of time */
	domDirectionalLightTest_60_90_1 = generateSceneSingleDirectionalLight(60, 90, getMatteMaterial(), generateBigRedSphere(), ChoiceEnum.HILL, 2.4);
	downloadCanvas(domDirectionalLightTest_60_90_1, "DirectionalLightTest_Matte_60_90_1");
	domDirectionalLightTest_60_90_2 = generateSceneSingleDirectionalLight(60, 90, getMatteMaterial(), generateSmallRedSphere(), ChoiceEnum.HILL, 2.4);
	downloadCanvas(domDirectionalLightTest_60_90_2, "DirectionalLightTest_Matte_60_90_2");
	domDirectionalLightTest_60_100_1 = generateSceneSingleDirectionalLight(60, 100, getMatteMaterial(), generateBigRedSphere(), ChoiceEnum.VALLEY, 2.5);
	downloadCanvas(domDirectionalLightTest_60_100_1, "DirectionalLightTest_Matte_60_100_1");
	domDirectionalLightTest_60_100_2 = generateSceneSingleDirectionalLight(60, 100, getMatteMaterial(), generateSmallRedSphere(), ChoiceEnum.VALLEY, 2.5);
	downloadCanvas(domDirectionalLightTest_60_100_2, "DirectionalLightTest_Matte_60_100_2");
	domDirectionalLightTest_60_110_1 = generateSceneSingleDirectionalLight(60, 110, getMatteMaterial(), generateBigRedSphere(), ChoiceEnum.HILL, 2.6);
	downloadCanvas(domDirectionalLightTest_60_110_1, "DirectionalLightTest_Matte_60_110_1");
	domDirectionalLightTest_60_110_2 = generateSceneSingleDirectionalLight(60, 110, getMatteMaterial(), generateSmallRedSphere(), ChoiceEnum.HILL, 2.6);
	downloadCanvas(domDirectionalLightTest_60_110_2, "DirectionalLightTest_Matte_60_110_2");
	domDirectionalLightTest_60_120_1 = generateSceneSingleDirectionalLight(60, 120, getMatteMaterial(), generateBigRedSphere(), ChoiceEnum.HILL, 2.7);
	downloadCanvas(domDirectionalLightTest_60_120_1, "DirectionalLightTest_Matte_60_120_1");
	domDirectionalLightTest_60_120_2 = generateSceneSingleDirectionalLight(60, 120, getMatteMaterial(), generateSmallRedSphere(), ChoiceEnum.HILL, 2.7);
	downloadCanvas(domDirectionalLightTest_60_120_2, "DirectionalLightTest_Matte_60_120_2");
	domDirectionalLightTest_60_130_1 = generateSceneSingleDirectionalLight(60, 130, getMatteMaterial(), generateBigRedSphere(), ChoiceEnum.VALLEY, 2.8);
	downloadCanvas(domDirectionalLightTest_60_130_1, "DirectionalLightTest_Matte_60_130_1");
	domDirectionalLightTest_60_130_2 = generateSceneSingleDirectionalLight(60, 130, getMatteMaterial(), generateSmallRedSphere(), ChoiceEnum.VALLEY, 2.8);
	downloadCanvas(domDirectionalLightTest_60_130_2, "DirectionalLightTest_Matte_60_130_2");
}

function generateSingleDirectionalLight30FloorSlantGlossy() {
	/* generate all our stimulus ahead of time */
	domDirectionalLightTest_30_20_1 = generateSceneSingleDirectionalLight(30, 20, getGlossyMaterial(), generateBigRedSphere(), ChoiceEnum.HILL);
	downloadCanvas(domDirectionalLightTest_30_20_1, "DirectionalLightTest_Glossy_30_20_1");
	domDirectionalLightTest_30_20_2 = generateSceneSingleDirectionalLight(30, 20, getGlossyMaterial(), generateSmallRedSphere(), ChoiceEnum.HILL);
	downloadCanvas(domDirectionalLightTest_30_20_2, "DirectionalLightTest_Glossy_30_20_2");
	domDirectionalLightTest_30_30_1 = generateSceneSingleDirectionalLight(30, 30, getGlossyMaterial(), generateBigRedSphere(), ChoiceEnum.VALLEY, 1.1);
	downloadCanvas(domDirectionalLightTest_30_30_1, "DirectionalLightTest_Glossy_30_30_1");
	domDirectionalLightTest_30_30_2 = generateSceneSingleDirectionalLight(30, 30, getGlossyMaterial(), generateSmallRedSphere(), ChoiceEnum.VALLEY, 1.1);
	downloadCanvas(domDirectionalLightTest_30_30_2, "DirectionalLightTest_Glossy_30_30_2");
	domDirectionalLightTest_30_40_1 = generateSceneSingleDirectionalLight(30, 40, getGlossyMaterial(), generateBigRedSphere(), ChoiceEnum.HILL, 1.2);
	downloadCanvas(domDirectionalLightTest_30_40_1, "DirectionalLightTest_Glossy_30_40_1");
	domDirectionalLightTest_30_40_2 = generateSceneSingleDirectionalLight(30, 40, getGlossyMaterial(), generateSmallRedSphere(), ChoiceEnum.HILL, 1.2);
	downloadCanvas(domDirectionalLightTest_30_40_2, "DirectionalLightTest_Glossy_30_40_2");
	domDirectionalLightTest_30_50_1 = generateSceneSingleDirectionalLight(30, 50, getGlossyMaterial(), generateBigRedSphere(), ChoiceEnum.HILL, 1.3);
	downloadCanvas(domDirectionalLightTest_30_50_1, "DirectionalLightTest_Glossy_30_50_1");
	domDirectionalLightTest_30_50_2 = generateSceneSingleDirectionalLight(30, 50, getGlossyMaterial(), generateSmallRedSphere(), ChoiceEnum.HILL, 1.3);
	downloadCanvas(domDirectionalLightTest_30_50_2, "DirectionalLightTest_Glossy_30_50_2");
	domDirectionalLightTest_30_60_1 = generateSceneSingleDirectionalLight(30, 60, getGlossyMaterial(), generateBigRedSphere(), ChoiceEnum.VALLEY, 1.4);
	downloadCanvas(domDirectionalLightTest_30_60_1, "DirectionalLightTest_Glossy_30_60_1");
	domDirectionalLightTest_30_60_2 = generateSceneSingleDirectionalLight(30, 60, getGlossyMaterial(), generateSmallRedSphere(), ChoiceEnum.VALLEY, 1.4);
	downloadCanvas(domDirectionalLightTest_30_60_2, "DirectionalLightTest_Glossy_30_60_2");
	domDirectionalLightTest_30_70_1 = generateSceneSingleDirectionalLight(30, 70, getGlossyMaterial(), generateBigRedSphere(), ChoiceEnum.VALLEY, 1.5);
	downloadCanvas(domDirectionalLightTest_30_70_1, "DirectionalLightTest_Glossy_30_70_1");
	domDirectionalLightTest_30_70_2 = generateSceneSingleDirectionalLight(30, 70, getGlossyMaterial(), generateSmallRedSphere(), ChoiceEnum.VALLEY, 1.5);
	downloadCanvas(domDirectionalLightTest_30_70_2, "DirectionalLightTest_Glossy_30_70_2");
}

function generateSingleDirectionalLight45FloorSlantGlossy() {
	/* generate all our stimulus ahead of time */
	domDirectionalLightTest_45_30_1 = generateSceneSingleDirectionalLight(45, 30, getGlossyMaterial(), generateBigRedSphere(), ChoiceEnum.VALLEY, 1.6);
	downloadCanvas(domDirectionalLightTest_45_30_1, "DirectionalLightTest_Glossy_45_30_1");
	domDirectionalLightTest_45_30_2 = generateSceneSingleDirectionalLight(45, 30, getGlossyMaterial(), generateSmallRedSphere(), ChoiceEnum.VALLEY, 1.6);
	downloadCanvas(domDirectionalLightTest_45_30_2, "DirectionalLightTest_Glossy_45_30_2");
	domDirectionalLightTest_45_40_1 = generateSceneSingleDirectionalLight(45, 40, getGlossyMaterial(), generateBigRedSphere(), ChoiceEnum.HILL, 1.7);
	downloadCanvas(domDirectionalLightTest_45_40_1, "DirectionalLightTest_Glossy_45_40_1");
	domDirectionalLightTest_45_40_2 = generateSceneSingleDirectionalLight(45, 40, getGlossyMaterial(), generateSmallRedSphere(), ChoiceEnum.HILL, 1.7);
	downloadCanvas(domDirectionalLightTest_45_40_2, "DirectionalLightTest_Glossy_45_40_2");
	domDirectionalLightTest_45_50_1 = generateSceneSingleDirectionalLight(45, 50, getGlossyMaterial(), generateBigRedSphere(), ChoiceEnum.HILL, 1.8);
	downloadCanvas(domDirectionalLightTest_45_50_1, "DirectionalLightTest_Glossy_45_50_1");
	domDirectionalLightTest_45_50_2 = generateSceneSingleDirectionalLight(45, 50, getGlossyMaterial(), generateSmallRedSphere(), ChoiceEnum.HILL, 1.8);
	downloadCanvas(domDirectionalLightTest_45_50_2, "DirectionalLightTest_Glossy_45_50_2");
	domDirectionalLightTest_45_60_1 = generateSceneSingleDirectionalLight(45, 60, getGlossyMaterial(), generateBigRedSphere(), ChoiceEnum.VALLEY, 1.9);
	downloadCanvas(domDirectionalLightTest_45_60_1, "DirectionalLightTest_Glossy_45_60_1");
	domDirectionalLightTest_45_60_2 = generateSceneSingleDirectionalLight(45, 60, getGlossyMaterial(), generateSmallRedSphere(), ChoiceEnum.VALLEY, 1.9);
	downloadCanvas(domDirectionalLightTest_45_60_2, "DirectionalLightTest_Glossy_45_60_2");
	domDirectionalLightTest_45_70_1 = generateSceneSingleDirectionalLight(45, 70, getGlossyMaterial(), generateBigRedSphere(), ChoiceEnum.VALLEY, 2);
	downloadCanvas(domDirectionalLightTest_45_70_1, "DirectionalLightTest_Glossy_45_70_1");
	domDirectionalLightTest_45_70_2 = generateSceneSingleDirectionalLight(45, 70, getGlossyMaterial(), generateSmallRedSphere(), ChoiceEnum.VALLEY, 2);
	downloadCanvas(domDirectionalLightTest_45_70_2, "DirectionalLightTest_Glossy_45_70_2");
	domDirectionalLightTest_45_80_1 = generateSceneSingleDirectionalLight(45, 80, getGlossyMaterial(), generateBigRedSphere(), ChoiceEnum.HILL, 2.1);
	downloadCanvas(domDirectionalLightTest_45_80_1, "DirectionalLightTest_Glossy_45_80_1");
	domDirectionalLightTest_45_80_2 = generateSceneSingleDirectionalLight(45, 80, getGlossyMaterial(), generateSmallRedSphere(), ChoiceEnum.HILL, 2.1);
	downloadCanvas(domDirectionalLightTest_45_80_2, "DirectionalLightTest_Glossy_45_80_2");
	domDirectionalLightTest_45_90_1 = generateSceneSingleDirectionalLight(45, 90, getGlossyMaterial(), generateBigRedSphere(), ChoiceEnum.HILL, 2.2);
	downloadCanvas(domDirectionalLightTest_45_90_1, "DirectionalLightTest_Glossy_45_90_1");
	domDirectionalLightTest_45_90_2 = generateSceneSingleDirectionalLight(45, 90, getGlossyMaterial(), generateSmallRedSphere(), ChoiceEnum.HILL, 2.2);
	downloadCanvas(domDirectionalLightTest_45_90_2, "DirectionalLightTest_Glossy_45_90_2");
	domDirectionalLightTest_45_100_1 = generateSceneSingleDirectionalLight(45, 100, getGlossyMaterial(), generateBigRedSphere(), ChoiceEnum.HILL, 2.3);
	downloadCanvas(domDirectionalLightTest_45_100_1, "DirectionalLightTest_Glossy_45_100_1");
	domDirectionalLightTest_45_100_2 = generateSceneSingleDirectionalLight(45, 100, getGlossyMaterial(), generateSmallRedSphere(), ChoiceEnum.HILL, 2.3);
	downloadCanvas(domDirectionalLightTest_45_100_2, "DirectionalLightTest_Glossy_45_100_2");
}

function generateSingleDirectionalLight60FloorSlantGlossy() {
	/* generate all our stimulus ahead of time */
	domDirectionalLightTest_60_90_1 = generateSceneSingleDirectionalLight(60, 90, getGlossyMaterial(), generateBigRedSphere(), ChoiceEnum.HILL, 2.4);
	downloadCanvas(domDirectionalLightTest_60_90_1, "DirectionalLightTest_Glossy_60_90_1");
	domDirectionalLightTest_60_90_2 = generateSceneSingleDirectionalLight(60, 90, getGlossyMaterial(), generateSmallRedSphere(), ChoiceEnum.HILL, 2.4);
	downloadCanvas(domDirectionalLightTest_60_90_2, "DirectionalLightTest_Glossy_60_90_2");
	domDirectionalLightTest_60_100_1 = generateSceneSingleDirectionalLight(60, 100, getGlossyMaterial(), generateBigRedSphere(), ChoiceEnum.VALLEY, 2.5);
	downloadCanvas(domDirectionalLightTest_60_100_1, "DirectionalLightTest_Glossy_60_100_1");
	domDirectionalLightTest_60_100_2 = generateSceneSingleDirectionalLight(60, 100, getGlossyMaterial(), generateSmallRedSphere(), ChoiceEnum.VALLEY, 2.5);
	downloadCanvas(domDirectionalLightTest_60_100_2, "DirectionalLightTest_Glossy_60_100_2");
	domDirectionalLightTest_60_110_1 = generateSceneSingleDirectionalLight(60, 110, getGlossyMaterial(), generateBigRedSphere(), ChoiceEnum.HILL, 2.6);
	downloadCanvas(domDirectionalLightTest_60_110_1, "DirectionalLightTest_Glossy_60_110_1");
	domDirectionalLightTest_60_110_2 = generateSceneSingleDirectionalLight(60, 110, getGlossyMaterial(), generateSmallRedSphere(), ChoiceEnum.HILL, 2.6);
	downloadCanvas(domDirectionalLightTest_60_110_2, "DirectionalLightTest_Glossy_60_110_2");
	domDirectionalLightTest_60_120_1 = generateSceneSingleDirectionalLight(60, 120, getGlossyMaterial(), generateBigRedSphere(), ChoiceEnum.HILL, 2.7);
	downloadCanvas(domDirectionalLightTest_60_120_1, "DirectionalLightTest_Glossy_60_120_1");
	domDirectionalLightTest_60_120_2 = generateSceneSingleDirectionalLight(60, 120, getGlossyMaterial(), generateSmallRedSphere(), ChoiceEnum.HILL, 2.7);
	downloadCanvas(domDirectionalLightTest_60_120_2, "DirectionalLightTest_Glossy_60_120_2");
	domDirectionalLightTest_60_130_1 = generateSceneSingleDirectionalLight(60, 130, getGlossyMaterial(), generateBigRedSphere(), ChoiceEnum.VALLEY, 2.8);
	downloadCanvas(domDirectionalLightTest_60_130_1, "DirectionalLightTest_Glossy_60_130_1");
	domDirectionalLightTest_60_130_2 = generateSceneSingleDirectionalLight(60, 130, getGlossyMaterial(), generateSmallRedSphere(), ChoiceEnum.VALLEY, 2.8);
	downloadCanvas(domDirectionalLightTest_60_130_2, "DirectionalLightTest_Glossy_60_130_2");
}

function generateMatlabLightMatte() {
	/* generate all our stimulus ahead of time */
	domMatlabLightTest_30_1 = generateSceneMatlabLight(30, getMatteMaterial(), generateBigRedSphere(), ChoiceEnum.HILL, 2.9);
	downloadCanvas(domMatlabLightTest_30_1, "MatlabTest_Matte_30_1");
	domMatlabLightTest_30_2 = generateSceneMatlabLight(30, getMatteMaterial(), generateSmallRedSphere(), ChoiceEnum.HILL, 2.9);
	downloadCanvas(domMatlabLightTest_30_2, "MatlabTest_Matte_30_2");
	domMatlabLightTest_45_1 = generateSceneMatlabLight(45, getMatteMaterial(), generateBigRedSphere(), ChoiceEnum.VALLEY, 3);
	downloadCanvas(domMatlabLightTest_45_1, "MatlabTest_Matte_45_1");
	domMatlabLightTest_45_2 = generateSceneMatlabLight(45, getMatteMaterial(), generateSmallRedSphere(), ChoiceEnum.VALLEY, 3);
	downloadCanvas(domMatlabLightTest_45_2, "MatlabTest_Matte_45_2");
	domMatlabLightTest_60_1 = generateSceneMatlabLight(60, getMatteMaterial(), generateBigRedSphere(), ChoiceEnum.VALLEY, 3.1);
	downloadCanvas(domMatlabLightTest_60_1, "MatlabTest_Matte_60_1");
	domMatlabLightTest_60_2 = generateSceneMatlabLight(60, getMatteMaterial(), generateSmallRedSphere(), ChoiceEnum.VALLEY, 3.1);
	downloadCanvas(domMatlabLightTest_60_2, "MatlabTest_Matte_60_2");
}

function generateMatlabLightGlossy() {
	/* generate all our stimulus ahead of time */
	domMatlabLightTest_30_1 = generateSceneMatlabLight(30, getGlossyMaterial(), generateBigRedSphere(), ChoiceEnum.HILL, 2.9);
	downloadCanvas(domMatlabLightTest_30_1, "MatlabTest_Glossy_30_1");
	domMatlabLightTest_30_2 = generateSceneMatlabLight(30, getGlossyMaterial(), generateSmallRedSphere(), ChoiceEnum.HILL, 2.9);
	downloadCanvas(domMatlabLightTest_30_2, "MatlabTest_Glossy_30_2");
	domMatlabLightTest_45_1 = generateSceneMatlabLight(45, getGlossyMaterial(), generateBigRedSphere(), ChoiceEnum.VALLEY, 3);
	downloadCanvas(domMatlabLightTest_45_1, "MatlabTest_Glossy_45_1");
	domMatlabLightTest_45_2 = generateSceneMatlabLight(45, getGlossyMaterial(), generateSmallRedSphere(), ChoiceEnum.VALLEY, 3);
	downloadCanvas(domMatlabLightTest_45_2, "MatlabTest_Glossy_45_2");
	domMatlabLightTest_60_1 = generateSceneMatlabLight(60, getGlossyMaterial(), generateBigRedSphere(), ChoiceEnum.VALLEY, 3.1);
	downloadCanvas(domMatlabLightTest_60_1, "MatlabTest_Glossy_60_1");
	domMatlabLightTest_60_2 = generateSceneMatlabLight(60, getGlossyMaterial(), generateSmallRedSphere(), ChoiceEnum.VALLEY, 3.1);
	downloadCanvas(domMatlabLightTest_60_2, "MatlabTest_Glossy_60_2");
}

function generateMathematicaLightMatte() {
	/* generate all our stimulus ahead of time */
	domMathematicaLightTest_30_1 = generateSceneMathematicaLight(30, getMatteMaterial(), generateBigRedSphere(), ChoiceEnum.HILL, 3.5);
	downloadCanvas(domMathematicaLightTest_30_1, "MathematicaTest_Matte_30_1");
	domMathematicaLightTest_30_2 = generateSceneMathematicaLight(30, getMatteMaterial(), generateSmallRedSphere(), ChoiceEnum.HILL, 3.5);
	downloadCanvas(domMathematicaLightTest_30_2, "MathematicaTest_Matte_30_2");
	domMathematicaLightTest_45_1 = generateSceneMathematicaLight(45, getMatteMaterial(), generateBigRedSphere(), ChoiceEnum.VALLEY, 3.6);
	downloadCanvas(domMathematicaLightTest_45_1, "MathematicaTest_Matte_45_1");
	domMathematicaLightTest_45_2 = generateSceneMathematicaLight(45, getMatteMaterial(), generateSmallRedSphere(), ChoiceEnum.VALLEY, 3.6);
	downloadCanvas(domMathematicaLightTest_45_2, "MathematicaTest_Matte_45_2");
	domMathematicaLightTest_60_1 = generateSceneMathematicaLight(60, getMatteMaterial(), generateBigRedSphere(), ChoiceEnum.HILL, 3.7);
	downloadCanvas(domMathematicaLightTest_60_1, "MathematicaTest_Matte_60_1");
	domMathematicaLightTest_60_2 = generateSceneMathematicaLight(60, getMatteMaterial(), generateSmallRedSphere(), ChoiceEnum.HILL, 3.7);
	downloadCanvas(domMathematicaLightTest_60_2, "MathematicaTest_Matte_60_2");
}

// INIT
// generateSingleDirectionalLight30FloorSlantMatte();
// generateSingleDirectionalLight45FloorSlantMatte();
// generateSingleDirectionalLight60FloorSlantMatte();
// generateSingleDirectionalLight30FloorSlantGlossy();
// generateSingleDirectionalLight45FloorSlantGlossy();
// generateSingleDirectionalLight60FloorSlantGlossy();
// generateMatlabLightMatte();
// generateMatlabLightGlossy();
// generateMathematicaLightMatte();