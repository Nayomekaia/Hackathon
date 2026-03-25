// main.js
import TWEEN from "three/examples/jsm/libs/tween.module.js";
import { createScene } from "./setup/scene.js";
import { createCamera } from "./setup/camera.js";
import { createRenderer } from "./setup/renderer.js";
import { createControls, updateControls } from "./setup/controls.js";
import { createLights } from "./components/lights/lights.js";
import {
	loadSatellite,
	rotateSatellite,
} from "./components/objects/Satellite.js";
import { updateInfobox } from "./scripts/changeInfoBox.js";
import { updateCamera } from "./scripts/updateCamera.js";

// scene setup
const scene = createScene();
const camera = createCamera();
const renderer = createRenderer();

// controls met camera en renderer
const controls = createControls(camera, renderer);
let paused = false;

// licht toevoegen
createLights(scene);

// laad satellite
loadSatellite(scene);

// responsive
window.addEventListener("resize", () => {
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
	renderer.setSize(window.innerWidth, window.innerHeight);
});

function animate() {
	requestAnimationFrame(animate);

	if (!paused) {
		rotateSatellite();
	}
	updateControls();
	TWEEN.update();

	renderer.render(scene, camera);
}

animate();
// main file hier word alles ingeladen en doorgegeven aan de pagina

const inputFields = document.querySelector("form");

inputFields.addEventListener("change", (e) => {
	if (e.target.id == "clear") {
		paused = false;
		return;
	}

	updateInfobox(e);
	updateCamera(controls, camera, {
		x: e.target.dataset.x,
		y: e.target.dataset.y,
		z: e.target.dataset.z,
	});

	paused = true;
});
