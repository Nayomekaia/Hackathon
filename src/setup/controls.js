// controls 
import { DragControls } from 'three/examples/jsm/Addons.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

let controls;

export function createControls(camera, renderer) {
    controls = new OrbitControls(camera, renderer.domElement);

    controls.enableDamping = true;
    controls.enableZoom = true;
    controls.enablePan = false;
    controls.enableRotate = true;


    return controls;
}

export function updateControls() {
    if (controls) controls.update();
}