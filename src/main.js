// main.js
import TWEEN from "three/examples/jsm/libs/tween.module.js";
import { createScene } from "./setup/scene.js";
import { createCamera } from "./setup/camera.js";
import { createRenderer } from "./setup/renderer.js";
import { createControls, updateControls } from "./setup/controls.js";
import { createLights } from "./components/lights/lights.js";
import { loadSatellite, resetSatellite, rotateSatellite, } from "./components/objects/Satellite.js";
import { createStars } from "./components/objects/star.js";
import { updateInfobox } from "./scripts/changeInfoBox.js";
import { updateCamera } from "./scripts/updateCamera.js";
import { CSS2DRenderer } from "three/examples/jsm/renderers/CSS2DRenderer.js";
import "./scripts/changeInfoBox.js";
import './scripts/controlsFadeOut.js';

// scene setup
const scene = createScene();
const camera = createCamera();
const renderer = createRenderer();

// controls met camera en renderer
const controls = createControls(camera, renderer);
let paused = false;

// licht toevoegen
createLights(scene);

// CSS2D Label Renderer
// https://www.ramijames.com/learn-threejs/interaction/html-overlays-and-labels#:~:text=const%20labelRenderer%20%3D,(labelRenderer.domElement)%3B
const labelRenderer = new CSS2DRenderer();
labelRenderer.setSize(window.innerWidth, window.innerHeight);
labelRenderer.domElement.style.position = "absolute";
labelRenderer.domElement.style.top = "0";
labelRenderer.domElement.style.pointerEvents = "none";
document.body.appendChild(labelRenderer.domElement);

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
    labelRenderer.render(scene, camera);
}

animate();
// main file hier word alles ingeladen en doorgegeven aan de pagina

const inputFields = document.querySelector("form");

inputFields.addEventListener("change", (e) => {
	resetSatellite();
	updateInfobox(e);

	if (e.target.id == "default") {
		paused = false;
		updateCamera(controls, camera, { x: 0, y: 0, z: 5 });
		return;
	}

	updateCamera(controls, camera, {
		x: e.target.dataset.x,
		y: e.target.dataset.y,
		z: e.target.dataset.z,
	});

	paused = true;
});
