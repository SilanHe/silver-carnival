// Functions
// -----------------------------------------------------------------------------
function sine(amplitude, frequency, phase, t) {
	return amplitude * Math.sin(2 * Math.PI * frequency * t + phase);
}

function hillsAndValleys() {
	var min = -2;
	var max = 2;
	var range = Math.abs(max - min);
	var numPointsEdge = 100;
	var increment = range/numPointsEdge;
	var vertices = [];

	for (var i = 0; i < numPointsEdge; i++) {
		for (var j = 0; j < numPointsEdge; j ++) {

			// get point coordinates in plane's coordinate system
			// in the plane coordinate system we are using z as the height for the height map
			var x = min + increment * i;
			var y = min + increment * j;

			// get height map / z
			var z = 0;
			z += sine(2,5,0,x);
			z += sine(1,7,0,y);

			vertices.push(new THREE.Vector3(x,y,z));
		}
	}

	return vertices;
}
// Variables
// -----------------------------------------------------------------------------

/**
INIT
Generate scene according to parameters et on the UI
// -----------------------------------------------------------------------------
**/
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000);
var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight/2);
document.body.appendChild( renderer.domElement);


// White directional light at half intensity shining from the top.
var directionalLight = new THREE.DirectionalLight( 0xffffff, 0.5 );
directionalLight.position = new THREE.Vector3( 0, 0, 6);
scene.add( directionalLight );

// plane
var vertices = hillsAndValleys();
console.log(vertices);
var holes = [];
var triangles;
var geometry = new THREE.Geometry();
var material = new THREE.MeshPhongMaterial( 
	{
		color: 0xffff00,
		side: THREE.DoubleSide,
		emissive: new THREE.Color(0.5,0.5,0.5),
		specular: new THREE.Color(0.8,0.8,0.8),
		shininess: 30,
		flatShading: false,
		wireframe: true,
		wireframeLinewidth: 10,
	} 
);
geometry.vertices = vertices;

// automate triangulation
triangles = THREE.ShapeUtils.triangulateShape( vertices, holes );

console.log(triangles);

for( var i = 0; i < triangles.length; i++ ){

    geometry.faces.push( new THREE.Face3( triangles[i][0], triangles[i][1], triangles[i][2] ));

}

var plane = new THREE.Mesh( geometry, material );
scene.add( plane );

camera.position.z = 5;

// rotate plane
var rotate = function (x,y,z) {
	plane.rotation.x = x;
	plane.rotation.y = y;
	plane.rotation.z = z;
};
rotate(-0.725,0,0); // rotate 45 for now

function animate() {
	requestAnimationFrame( animate );
	renderer.render( scene, camera );
}
animate();

// remember these initial values

// for window resize
var tanFOV = Math.tan( ( ( Math.PI / 180 ) * camera.fov / 2 ) );
var windowHeight = window.innerHeight;

// UI
// -----------------------------------------------------------------------------

// Event Listeners
// -----------------------------------------------------------------------------
window.addEventListener( 'resize', onWindowResize, false );

function onWindowResize( event ) {

    camera.aspect = window.innerWidth / window.innerHeight;
    
    // adjust the FOV
    camera.fov = ( 360 / Math.PI ) * Math.atan( tanFOV * ( window.innerHeight / windowHeight ) );
    
    camera.updateProjectionMatrix();
    camera.lookAt( scene.position );

    renderer.setSize(window.innerWidth, window.innerHeight/2 );
    renderer.render( scene, camera );
}

