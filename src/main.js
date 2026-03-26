// main.js

import { createScene } from './setup/scene.js';
import { createCamera } from './setup/camera.js';
import { createRenderer } from './setup/renderer.js';
import { createControls, updateControls } from './setup/controls.js';
import { createLights } from './components/lights/lights.js';
import { loadSatellite, rotateSatellite } from './components/objects/Satellite.js';
import { createStars } from './components/objects/star.js';
import { CSS2DRenderer } from "three/examples/jsm/renderers/CSS2DRenderer.js";
import './scripts/changeInfoBox.js';


// scene setup
const scene = createScene();
const camera = createCamera();
const renderer = createRenderer();

// controls met camera en renderer
const controls = createControls(camera, renderer);

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

// laad satellite in
loadSatellite(scene);

// resonsive
// add 300 stars to the scene
createStars(300, scene);

// responsive
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

function animate() {
    requestAnimationFrame(animate);

    rotateSatellite();
    updateControls();

    renderer.render(scene, camera);
    labelRenderer.render(scene, camera);
}

animate();
// main file hier wordt alles ingeladen en doorgegeven aan de pagina
