// main.js: hier word alles ingeladen en doorgegeven aan de pagina
import TWEEN from "three/examples/jsm/libs/tween.module.js";
import { createScene } from "./setup/scene.js";
import { createCamera } from "./setup/camera.js";
import { createRenderer } from "./setup/renderer.js";
import { createControls, updateControls } from "./setup/controls.js";
import { createLights } from "./components/lights/lights.js";
import {
	loadSatellite,
	resetSatellite,
	rotateSatellite,
} from "./components/objects/Satellite.js";
import { createStars } from "./components/objects/star.js";
import { updateInfobox } from "./scripts/changeInfoBox.js";
import { updateCamera } from "./scripts/updateCamera.js";
import "./scripts/changeInfoBox.js";
import { toggleDropdown } from "./scripts/dropdown.js";
import "./scripts/controlsFadeOut.js";

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

// add 300 stars to the scene
createStars(300, scene);

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

// EVENT LISTENERS
const inputFields = document.querySelector("form");

inputFields.addEventListener("change", (e) => {
	resetSatellite();
	updateInfobox(e);
	updateCamera(controls, camera, {
		x: e.target.dataset.x,
		y: e.target.dataset.y,
		z: e.target.dataset.z,
	});

	// paused becomes true when anything other than default is selected
	paused = e.target.id !== "default";

	if (inputFields.classList.contains("dropdown-shown")) {
		inputFields.classList.remove("dropdown-shown");
		toggleControls.classList.remove("hide");
	}
});

const componentPicker = document.querySelector(".component-picker");
const toggleControls = document.querySelector(".show-controls");

componentPicker.addEventListener("click", () => {
	toggleDropdown();
	inputFields.classList.contains("dropdown-shown")
		? toggleControls.classList.add("hide")
		: toggleControls.classList.remove("hide");
});
