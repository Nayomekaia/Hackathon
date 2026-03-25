import TWEEN from "three/examples/jsm/libs/tween.module.js";
import * as THREE from "three";

export function updateCamera(controls, camera, target) {
	const targetCameraPos = {
		x: target.x,
		y: target.y,
		z: target.z,
	};

	const cameraPosition = {
		x: camera.position.x,
		y: camera.position.y,
		z: camera.position.z,
	};

	new TWEEN.Tween(cameraPosition)
		.to(targetCameraPos, 1500)
		.easing(TWEEN.Easing.Quadratic.InOut)
		.onUpdate(() => {
			camera.position.set(cameraPosition.x, cameraPosition.y, cameraPosition.z);
			camera.lookAt(new THREE.Vector3(0, 0, 0));
			controls.target.copy(new THREE.Vector3(0, 0, 0));
			controls.update();
		})
		.start();
}

// pinpoint a specific point on the satellite
// either move camera to look at that point, or rotate satellite so that point faces the camera. which is easier to achieve?
