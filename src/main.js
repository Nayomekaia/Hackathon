// main.js

import { createScene } from './setup/scene.js';
import { createCamera } from './setup/camera.js';
import { createRenderer } from './setup/renderer.js';
import { createControls, updateControls } from './setup/controls.js';
import { createLights } from './components/lights/lights.js';
import { loadSatellite, rotateSatellite } from './components/objects/Satellite.js';
import './scripts/changeInfoBox.js';


// scene setup
const scene = createScene();
const camera = createCamera();
const renderer = createRenderer();

// controls met camera en renderer
const controls = createControls(camera, renderer);

// licht toevoegen
createLights(scene);

// laad satellite
loadSatellite(scene);

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
}

animate();
// main file hier wordt alles ingeladen en doorgegeven aan de pagina
