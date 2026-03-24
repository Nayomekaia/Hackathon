// verlichting op object
import * as THREE from 'three';

export function createLights(scene) {
    const light = new THREE.DirectionalLight(0xffffff, 2);
    light.position.set(5, 5, 5);

    const ambient = new THREE.AmbientLight(0xffffff, 0.5);

    scene.add(light);
    scene.add(ambient);

    return { update: () => { } };
}