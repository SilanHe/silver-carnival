function main() {
	const canvas = document.querySelector("#glCanvas");

	//init the GL context
	const gl = canvas.getContext("webgl");

	// only conitnue if Webgl is available and working
	if (gl === null) {
		alert("unable to initialize WEbGL. Your browser or machine may not support it.");
		return;
	}

	// set clear color to black, fully opaque
	gl.clearColor(0.0, 0.0, 0.0, 1.0);
	// clear the color buffer with specified clear color
	gl.clear(gl.COLOR_BUFFER_BIT);
}

window.onload = main;