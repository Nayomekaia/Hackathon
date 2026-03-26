import TWEEN from "three/examples/jsm/libs/tween.module.js";
import * as THREE from "three";

export function updateCamera(controls, camera, target) {
	// the camera starting position
	const startCameraPosition = {
		x: camera.position.x,
		y: camera.position.y,
		z: camera.position.z,
	};

	// the destination of the camera, based on the coordinates of the selected input element
	const endCameraPosition = {
		x: parseFloat(target.x),
		y: parseFloat(target.y),
		z: parseFloat(target.z),
	};

	// transition between the start and end position of the camera
	new TWEEN.Tween(startCameraPosition)
		.to(endCameraPosition, 1500)
		.easing(TWEEN.Easing.Quadratic.InOut)
		.onUpdate(() => {
			camera.position.set(
				startCameraPosition.x,
				startCameraPosition.y,
				startCameraPosition.z,
			);
			camera.lookAt(new THREE.Vector3(0, 0, 0));
			controls.target.copy(new THREE.Vector3(0, 0, 0));
			controls.update();
		})
		.start();

	// on update (TWEEN.update() is called in animate() which in turn is located in main),
	// set the newly calculated camera position,
	// point the camera at 0, 0, 0, where the satellite is
	// update the controls to look at 0, 0, 0 as well.
}
