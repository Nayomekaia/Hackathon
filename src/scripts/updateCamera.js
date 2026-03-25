import TWEEN from "three/examples/jsm/libs/tween.module.js";
import * as THREE from "three";

export function updateCamera(controls, camera, target) {
	const targetPoint = new THREE.Vector3(0, target.y, target.z);

	// Position camera at an offset from the target (so it's visible from the side)
	const offset = 3; // distance from target
	const targetCameraPos = {
		x: target.x + offset,
		y: target.y + offset * 0.5,
		z: target.z + offset,
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
			camera.lookAt(targetPoint);
			controls.target.copy(targetPoint);
			controls.update();
		})
		.start();
}

// pinpoint a specific point on the satellite
// either move camera to look at that point, or rotate satellite so that point faces the camera. which is easier to achieve?
