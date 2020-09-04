// Variables
// -----------------------------------------------------------------------------
var NUM_POINTS = 350;
var CAMERA_FOV = 50;
const ChoiceEnum = {
	VALLEY: 0,
	HILL: 1, 
};

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

	var amplitude = 1.2;
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
			var z = amplitude * noise.perlin2(x / 3,y / 3);

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
	var centerWidth = 50;
	var startRow = Math.abs(Math.floor(NUM_POINTS / 2 - centerWidth / 2));
	var endRow = startRow + centerWidth;

	// for each index in the approximate center area, get local min index and local max index
	for (var i = startRow; i < endRow; i++) {
		for (var j = startRow; j < endRow; j++) {

			// convert from rowXcol to index in vertices list
			var curIndex = i * NUM_POINTS + j;

			// update local min and local max

			if (vertices[curIndex].z > localMax){
				localMax = vertices[curIndex].z;
				localMaxIndex = curIndex;
			}
	
			if (vertices[curIndex].z < localMin){
				localMin = vertices[curIndex].z;
				localMinIndex = curIndex;
			}
		}
	}

	localMaxIndex;
	localMaxIndex;

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
	var material = new THREE.MeshPhongMaterial( 
		{
			side: THREE.DoubleSide,
			shininess: 0,
			flatShading: false,
			wireframe: false,
			wireframeLinewidth: 1,
		} 
	);

	return material;
}

function getGlossyMaterial() {
	var material = new THREE.MeshPhongMaterial( 
		{
			side: THREE.DoubleSide,
			shininess: 51,
			flatShading: false,
			wireframe: false,
			wireframeLinewidth: 1,
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
	var LIGHT_Z_DISTANCE = 6;

	// target of directional light is (0,0,0) by default
	var directionalLight = new THREE.DirectionalLight( 0xffffff, 0.5 );

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
	var directionalLight = new THREE.DirectionalLight( 0xffffff, 0.5 );
	// target of directional light is (0,0,0) by default
	directionalLight.position.set( 1, 0, 1);

	return directionalLight;
}

/**
 * retuns list of 3 diffuse light sources colored red, green and blue
 */
function getMathematicaLights() {
	var redDirectionLight = new THREE.DirectionalLight( 0xff0000, 0.5 );
	redDirectionLight.position.set( 1, 0, 1);

	var greenDirectionLight = new THREE.DirectionalLight( 0x00ff00, 0.5 );
	greenDirectionLight.position.set( 1, 1, 1);

	var blueDirectionLight = new THREE.DirectionalLight( 0x0000ff, 0.5 );
	blueDirectionLight.position.set( 0, 1, 1);

	return [redDirectionLight, greenDirectionLight, blueDirectionLight];
}

/**
 * Generic scene generation function with default settings
 * @param {THREE.Mesh} mesh 
 * @param {Array of THREE.Light} lights 
 */
function generateScene(group, lights) {
	var scene = new THREE.Scene();
	var camera = new THREE.PerspectiveCamera( CAMERA_FOV, window.innerWidth / window.innerHeight, 0.1, 1000);
	var renderer = new THREE.WebGLRenderer({
		preserveDrawingBuffer: true 
	});

	camera.position.set(0,0,53);
	renderer.setSize( window.innerWidth, window.innerHeight);

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

	// remember these initial values
	// for window resize
	var tanFOV = Math.tan( ( ( Math.PI / 180 ) * CAMERA_FOV / 2 ) );
	var windowHeight = window.innerHeight;

	function onWindowResize( event ) {

	    camera.aspect = window.innerWidth / window.innerHeight;
	    
	    // adjust the FOV
	    camera.fov = ( 360 / Math.PI ) * Math.atan( tanFOV * ( window.innerHeight / windowHeight ) );
	    
	    camera.updateProjectionMatrix();
	    camera.lookAt( scene.position );

	    renderer.setSize(window.innerWidth, window.innerHeight );
	    renderer.render( scene, camera );
	}

	window.addEventListener( 'resize', onWindowResize, false );

	animate();

	return renderer;
}

function generateSmallRedSphere() {
	var sphereGeometry = new THREE.SphereGeometry( 0.1, 32, 32 );
	var redMaterial = getRedMaterial();
	var sphere = new THREE.Mesh(sphereGeometry, redMaterial);

	return sphere;
}

function generateBigRedSphere() {
	var sphereGeometry = new THREE.SphereGeometry( 1, 32, 32 );
	var redMaterial = getRedMaterial();
	var sphere = new THREE.Mesh(sphereGeometry, redMaterial);

	return sphere;
}

function generateSceneSingleDirectionalLight(slant, lightSlant, material, disk, choice, seed = 1) {
	var vertices = hillsAndValleys(seed);
	var faces = triangulateVertices(vertices);
	var geometry = geometryConstructorWrapper(vertices, faces);
	var mesh = new THREE.Mesh(geometry, material);
	mesh.geometry.computeVertexNormals();
	var hillAndValleyIndices = getLocalExtremaInCenter(vertices);

	disk.position.set(vertices[hillAndValleyIndices[choice]].x, vertices[hillAndValleyIndices[choice]].y, vertices[hillAndValleyIndices[choice]].z);

	var group = new THREE.Group();
	group.add(disk);
	group.add(mesh);

	group.rotation.set(-slant/180 * Math.PI,0,0);

	var lights = [getDirectionalLight(lightSlant)];

	return generateScene(group, lights);
}

function generateSceneMatlabLight( slant, material, disk, choice, seed = 1) {
	var vertices = hillsAndValleys(seed);
	var faces = triangulateVertices(vertices);
	var geometry = geometryConstructorWrapper(vertices, faces);
	var mesh = new THREE.Mesh(geometry, material);
	mesh.geometry.computeVertexNormals();
	var hillAndValleyIndices = getLocalExtremaInCenter(vertices);

	disk.position.set(vertices[hillAndValleyIndices[choice]].x, vertices[hillAndValleyIndices[choice]].y, vertices[hillAndValleyIndices[choice]].z);

	var group = new THREE.Group();
	group.add(disk);
	group.add(mesh);

	group.rotation.set(-slant/180 * Math.PI,0,0);

	var lights = [getMatlabLight()];

	return generateScene(group, lights);
}

function generateSceneMathematicaLight(slant, material, disk, choice, seed = 1) {
	var vertices = hillsAndValleys(seed);
	var faces = triangulateVertices(vertices);
	var geometry = geometryConstructorWrapper(vertices, faces);
	var mesh = new THREE.Mesh(geometry, material);
	mesh.geometry.computeVertexNormals();
	var hillAndValleyIndices = getLocalExtremaInCenter(vertices);

	disk.position.set(vertices[hillAndValleyIndices[choice]].x, vertices[hillAndValleyIndices[choice]].y, vertices[hillAndValleyIndices[choice]].z);

	var group = new THREE.Group();
	group.add(disk);
	group.add(mesh);

	group.rotation.set(-slant/180 * Math.PI,0,0);

	var lights = getMathematicaLights();

	return generateScene(group, lights);
}
