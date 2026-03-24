// stand van de camera 

import * as THREE from 'three';

export function createCamera() {
    const camera = new THREE.PerspectiveCamera(
        20,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
    );

    camera.position.z = 5;

    return camera;
}
