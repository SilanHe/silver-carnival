// Variables
// -----------------------------------------------------------------------------
var NUM_POINTS = 350;
var CAMERA_FOV = 50;
const ChoiceEnum = {
	HILL: 0,
	VALLEY: 1, 
};
var DISK_DISTANCE = 6;

var WINDOW_WIDTH = 1920;
var WINDOW_HEIGHT = 1200;

var LIGHT_Z_DISTANCE = 100;
var CAMERA_POSITION = 83;

// Functions
// -----------------------------------------------------------------------------

/**
 * sine function
 * @param {Numner} amplitude 
 * @param {Number} frequency 
 * @param {Number} phase 
 * @param {Number} t 
 */
function sine(amplitude, frequency, phase, t) {
	return amplitude * Math.sin(2 * Math.PI * frequency * t + phase);
}

/**
 * generate preset hills and valleys
 */
function hillsAndValleys(seed = 1) {
	noise.seed(seed);

	var amplitude = 0.9;
	var min = -17.5;
	var max = 17.5;
	var range = Math.abs(max - min);
	var numPointsEdge = NUM_POINTS;
	var increment = range/numPointsEdge;
	var vertices = [];

	for (var i = 0; i < numPointsEdge; i++) {
		for (var j = 0; j < numPointsEdge; j ++) {

			// get point coordinates in plane's coordinate system
			// in the plane coordinate system we are using z as the height for the height map
			var x = min + increment * i;
			var y = min + increment * j;

			// get height map / z
			var z = amplitude * noise.perlin2(x / 4.5,y / 4.5);

			vertices.push(new THREE.Vector3(x,y,z));
		}
	}

	return vertices;
}

/**
 *  triangulate a list of vertices that is spread uniformly generated by hillsAndValleys()
 * @param {Array of Number} vertices 
 */
function triangulateVertices(vertices) {

	var faces = []
	// hacky way of generating triangles because I know how the points are split, pretty standard
	for (var i = 0; i < NUM_POINTS - 1; i ++) {
		for (var j = 0; j < NUM_POINTS - 1; j ++) {

			var index = i * NUM_POINTS + j;
			// counter clockwise order
			faces.push(new THREE.Face3(index,index + NUM_POINTS,index + 1));
			faces.push(new THREE.Face3(index + 1,index + NUM_POINTS,index + 1 + NUM_POINTS));
		}
	}

	return faces;
}

/**
 * Get both the hill and valley point in the center
 * @param {Array of Number} vertices 
 */
function getLocalExtremaInCenter(vertices) {

	// local max and local min tracking variables
	var localMax = Number.MIN_SAFE_INTEGER;
	var localMaxIndex = 0;
	var localMin = Number.MAX_SAFE_INTEGER;
	var localMinIndex = 0;

	// approximate center area tracking variables
	var centerWidth = 150;
	var centerWidthHalved = Math.floor(centerWidth/4);
	var startRow = Math.abs(Math.floor(NUM_POINTS / 2 - centerWidth / 2));
	var endRow = startRow + centerWidth;

	// for each index in the approximate center area, get local min index and local max index
	for (var i = startRow; i < endRow; i++) {
		for (var j = startRow; j < endRow; j++) {

			// convert from rowXcol to index in vertices list
			var curIndex = i * NUM_POINTS + j;

			// update local min and local max

			if (vertices[curIndex].z > localMax){
				localLocalMax = vertices[curIndex].z;
				for (var y = - centerWidthHalved; y <= centerWidthHalved; y++) {
					for (var x = - centerWidthHalved; x <= centerWidthHalved; x++) {
						var curcurIndex = (i + y) * NUM_POINTS + (j + x);
						
						if (vertices[curcurIndex].z > localLocalMax) {
							localLocalMax = vertices[curcurIndex].z;
						}
					}
				}

				if (localLocalMax == vertices[curIndex].z) {
					localMax = vertices[curIndex].z;
					localMaxIndex = curIndex;
				}
			}
	
			if (vertices[curIndex].z < localMin){
				localLocalMin = vertices[curIndex].z;
				for (var y = - centerWidthHalved; y <= centerWidthHalved; y++) {
					for (var x = - centerWidthHalved; x <= centerWidthHalved; x++) {
						var curcurIndex = (i + y) * NUM_POINTS + (j + x);
						
						if (vertices[curcurIndex].z < localLocalMin) {
							localLocalMin = vertices[curcurIndex].z;
						}
					}
				}
				localMin = vertices[curIndex].z;
				localMinIndex = curIndex;
			}
		}
	}

	return [localMaxIndex, localMinIndex];
}

/**
 * My constructor for THREE.Geometry
 * @param {Array of Number} vertices 
 * @param {Array of THREE.Face3} faces 
 */
function geometryConstructorWrapper(vertices, faces) {
	var geometry = new THREE.Geometry();
	geometry.vertices = vertices;
	geometry.faces = faces;
	
	return geometry;
}

function getRedMaterial() {
	var material = new THREE.MeshBasicMaterial( 
		{
			color: 0xff0000,
			side: THREE.DoubleSide,
		} 
	);

	return material;
}

function getMatteMaterial() {
	var material = new THREE.MeshStandardMaterial( 
		{
			side: THREE.DoubleSide,
		} 
	);

	return material;
}

function getGlossyMaterial() {
	var material = new THREE.MeshPhongMaterial( 
		{
			side: THREE.DoubleSide,
			color: new THREE.Color(0xc1c1c1c1),
			specular: new THREE.Color(0x4c4c4c),
			shininess: 6,
		} 
	);

	return material;
}

function getTanFromDegrees(degrees) {
	return Math.tan(degrees * Math.PI / 180);
}

function getSinFromDegrees(degrees) {
	return Math.sin(degrees * Math.PI / 180);
}

/**
 * Retunrs the first light option, which is a directional light at a defined light slant
 * @param {*} lightSlant in degrees
 */
function getDirectionalLight(lightSlant) {

	// target of directional light is (0,0,0) by default
	var directionalLight = new THREE.DirectionalLight( 0xffffff, 1 );

	if (lightSlant < 90) {

		var lightY = getTanFromDegrees(lightSlant) * LIGHT_Z_DISTANCE;
		directionalLight.position.set( 0, lightY, LIGHT_Z_DISTANCE);

		return directionalLight;

	} else if (lightSlant == 90) {

		directionalLight.position.set( 0, LIGHT_Z_DISTANCE, 0);

		return directionalLight;

	} else {

		var lightZ = getSinFromDegrees(lightSlant - 90) * LIGHT_Z_DISTANCE;
		directionalLight.position.set(0, LIGHT_Z_DISTANCE, - lightZ);

		return directionalLight;
	}
	
}

/**
 * Returns default matlab lighting conditions
 */
function getMatlabLight() {
	var directionalLight = new THREE.DirectionalLight( 0xffffff, 1 );
	// target of directional light is (0,0,0) by default
	directionalLight.position.set( LIGHT_Z_DISTANCE, 0, LIGHT_Z_DISTANCE);

	return directionalLight;
}

/**
 * retuns list of 3 diffuse light sources colored red, green and blue
 */
function getMathematicaLights() {
	var redDirectionLight = new THREE.DirectionalLight( 0xff0000, 1 );
	redDirectionLight.position.set( LIGHT_Z_DISTANCE, 0, LIGHT_Z_DISTANCE);

	var greenDirectionLight = new THREE.DirectionalLight( 0x00ff00,  );
	greenDirectionLight.position.set( LIGHT_Z_DISTANCE, LIGHT_Z_DISTANCE, LIGHT_Z_DISTANCE);

	var blueDirectionLight = new THREE.DirectionalLight( 0x0000ff, 1 );
	blueDirectionLight.position.set( 0, LIGHT_Z_DISTANCE, LIGHT_Z_DISTANCE);

	return [redDirectionLight, greenDirectionLight, blueDirectionLight];
}

/**
 * Generic scene generation function with default settings
 * @param {THREE.Mesh} mesh 
 * @param {Array of THREE.Light} lights 
 */
function generateScene(group, lights) {
	var scene = new THREE.Scene();
	scene.background = new THREE.Color( 0x111111);
	var camera = new THREE.PerspectiveCamera( CAMERA_FOV, WINDOW_WIDTH/ WINDOW_HEIGHT, 0.1, 1000);
	var renderer = new THREE.WebGLRenderer({
		preserveDrawingBuffer: true 
	});

	camera.position.set(0,0,CAMERA_POSITION);
	renderer.setSize( WINDOW_WIDTH, WINDOW_HEIGHT);

	// axis helper
	// var axesHelper = new THREE.AxesHelper( 20 );
	// scene.add( axesHelper );
	// document.body.appendChild( renderer.domElement);

	scene.add(group);

	// add our lights
	for (var i = 0; i < lights.length; i ++) {
		scene.add(lights[i]);

		// debug light
		// var helper = new THREE.DirectionalLightHelper( lights[i], 5 ); 
		// scene.add( helper );
	}

	function animate() {
		// requestAnimationFrame( animate );
		// // uncomment debug graphically by rotating plane
		// requestAnimationFrame( animate );
		// group.rotation.x += 0.01;
		// group.rotation.y += 0.01;

		renderer.render( scene, camera );
	}

	// // remember these initial values
	// // for window resize
	// var tanFOV = Math.tan( ( ( Math.PI / 180 ) * CAMERA_FOV / 2 ) );
	// var windowHeight = window.innerHeight;

	// function onWindowResize( event ) {

	//     camera.aspect = window.innerWidth / window.innerHeight;
	    
	//     // adjust the FOV
	//     camera.fov = ( 360 / Math.PI ) * Math.atan( tanFOV * ( window.innerHeight / windowHeight ) );
	    
	//     camera.updateProjectionMatrix();
	//     camera.lookAt( scene.position );

	//     renderer.setSize(window.innerWidth, window.innerHeight );
	//     renderer.render( scene, camera );
	// }

	// window.addEventListener( 'resize', onWindowResize, false );

	animate();

	return renderer;
}

function generateSmallRedSphere() {
	var sphereGeometry = new THREE.SphereGeometry( 0.1, 32, 32 );
	var redMaterial = getRedMaterial();
	var sphere = new THREE.Mesh(sphereGeometry, redMaterial);

	return sphere;
}

function generateBigRedDisk() {
	var sphereGeometry = new THREE.SphereGeometry( 1, 32, 32 );
	var redMaterial = getRedMaterial();
	var sphere = new THREE.Mesh(sphereGeometry, redMaterial);

	return sphere;
}

function generateSceneSingleDirectionalLightDisk(slant, lightSlant, material, choice, seed = 1) {
	var vertices = hillsAndValleys(seed);
	var faces = triangulateVertices(vertices);
	var geometry = geometryConstructorWrapper(vertices, faces);
	var mesh = new THREE.Mesh(geometry, material);
	mesh.geometry.computeVertexNormals();
	var hillAndValleyIndices = getLocalExtremaInCenter(vertices);
	var disk = generateBigRedDisk();

	var group = new THREE.Group();
	group.add(disk);
	group.add(mesh);
	
	// rotate disk back to be flat and move forward in world Z axis
	mesh.rotateX(-slant/180 * Math.PI);
	mesh.updateMatrixWorld();
	mesh.localToWorld(vertices[hillAndValleyIndices[choice]]);
	disk.translateX(vertices[hillAndValleyIndices[choice]].x);
	disk.translateY(vertices[hillAndValleyIndices[choice]].y);
	disk.translateZ(vertices[hillAndValleyIndices[choice]].z + DISK_DISTANCE);


	var lights = [getDirectionalLight(lightSlant)];

	return generateScene(group, lights);
}


function generateSceneSingleDirectionalLight(slant, lightSlant, material, choice, seed = 1) {
	var vertices = hillsAndValleys(seed);
	var faces = triangulateVertices(vertices);
	var geometry = geometryConstructorWrapper(vertices, faces);
	var mesh = new THREE.Mesh(geometry, material);
	mesh.geometry.computeVertexNormals();
	var hillAndValleyIndices = getLocalExtremaInCenter(vertices);
	var disk = generateSmallRedSphere();

	var group = new THREE.Group();
	group.add(disk);
	group.add(mesh);

	disk.position.set(vertices[hillAndValleyIndices[choice]].x, 
		vertices[hillAndValleyIndices[choice]].y, 
		vertices[hillAndValleyIndices[choice]].z);

	group.rotateX(-slant/180 * Math.PI);

	var lights = [getDirectionalLight(lightSlant)];

	return generateScene(group, lights);
}

function generateSceneMatlabLightDisk( slant, material, choice, seed = 1) {
	var vertices = hillsAndValleys(seed);
	var faces = triangulateVertices(vertices);
	var geometry = geometryConstructorWrapper(vertices, faces);
	var mesh = new THREE.Mesh(geometry, material);
	mesh.geometry.computeVertexNormals();
	var hillAndValleyIndices = getLocalExtremaInCenter(vertices);
	var disk = generateBigRedDisk();

	var group = new THREE.Group();
	group.add(disk);
	group.add(mesh);

	// rotate disk back to be flat and move forward in world Z axis
	mesh.rotateX(-slant/180 * Math.PI);
	mesh.updateMatrixWorld();
	mesh.localToWorld(vertices[hillAndValleyIndices[choice]]);
	disk.translateX(vertices[hillAndValleyIndices[choice]].x);
	disk.translateY(vertices[hillAndValleyIndices[choice]].y);
	disk.translateZ(vertices[hillAndValleyIndices[choice]].z + DISK_DISTANCE);

	var lights = [getMatlabLight()];

	return generateScene(group, lights);
}

function generateSceneMatlabLight( slant, material, choice, seed = 1) {
	var vertices = hillsAndValleys(seed);
	var faces = triangulateVertices(vertices);
	var geometry = geometryConstructorWrapper(vertices, faces);
	var mesh = new THREE.Mesh(geometry, material);
	mesh.geometry.computeVertexNormals();
	var hillAndValleyIndices = getLocalExtremaInCenter(vertices);
	var disk = generateSmallRedSphere();

	var group = new THREE.Group();
	group.add(disk);
	group.add(mesh);

	disk.position.set(vertices[hillAndValleyIndices[choice]].x, 
		vertices[hillAndValleyIndices[choice]].y, 
		vertices[hillAndValleyIndices[choice]].z);

	group.rotateX(-slant/180 * Math.PI);

	var lights = [getMatlabLight()];

	return generateScene(group, lights);
}

function generateSceneMathematicaLightDisk(slant, material, choice, seed = 1) {
	var vertices = hillsAndValleys(seed);
	var faces = triangulateVertices(vertices);
	var geometry = geometryConstructorWrapper(vertices, faces);
	var mesh = new THREE.Mesh(geometry, material);
	mesh.geometry.computeVertexNormals();
	var hillAndValleyIndices = getLocalExtremaInCenter(vertices);
	var disk = generateBigRedDisk();

	// rotate disk back to be flat and move forward in world Z axis
	mesh.rotateX(-slant/180 * Math.PI);
	mesh.updateMatrixWorld();
	mesh.localToWorld(vertices[hillAndValleyIndices[choice]]);
	disk.translateX(vertices[hillAndValleyIndices[choice]].x);
	disk.translateY(vertices[hillAndValleyIndices[choice]].y);
	disk.translateZ(vertices[hillAndValleyIndices[choice]].z + DISK_DISTANCE);

	var group = new THREE.Group();
	group.add(disk);
	group.add(mesh);

	var lights = getMathematicaLights();

	return generateScene(group, lights);
}

function generateSceneMathematicaLight(slant, material, choice, seed = 1) {
	var vertices = hillsAndValleys(seed);
	var faces = triangulateVertices(vertices);
	var geometry = geometryConstructorWrapper(vertices, faces);
	var mesh = new THREE.Mesh(geometry, material);
	mesh.geometry.computeVertexNormals();
	var hillAndValleyIndices = getLocalExtremaInCenter(vertices);
	var disk = generateSmallRedSphere();

	var group = new THREE.Group();
	group.add(disk);
	group.add(mesh);

	disk.position.set(vertices[hillAndValleyIndices[choice]].x, 
		vertices[hillAndValleyIndices[choice]].y, 
		vertices[hillAndValleyIndices[choice]].z);

	group.rotateX(-slant/180 * Math.PI);

	var lights = getMathematicaLights();

	return generateScene(group, lights);
}
