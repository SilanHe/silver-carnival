/**
Generate scene according to parameters et on the UI
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
var geometry = new THREE.PlaneGeometry( 4,  4);
var material = new THREE.MeshPhongMaterial( 
	{
		color: 0xffff00, 
		side: THREE.DoubleSide,
		emissive: new THREE.Color(0,0,0);
		specular: new Three.Color(0,0,0);
		flatShading: false;
		wireframe: false;
		wireframeLinewidth: 10;

	} 
);
var plane = new THREE.Mesh( geometry, material );
scene.add( plane );

camera.position.z = 5;

// rotate plane
var rotate = function (obj,x,y,z) {
	obj.rotation.x += x;
	obj.rotation.y += y;
	obj.rotation.z += z;
};
rotate(plane,0,0,0);

function animate() {
	requestAnimationFrame( animate );
	renderer.render( scene, camera );
}
animate();

// remember these initial values
var tanFOV = Math.tan( ( ( Math.PI / 180 ) * camera.fov / 2 ) );
var windowHeight = window.innerHeight;

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

