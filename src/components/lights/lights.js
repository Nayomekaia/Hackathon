// verlichting op object
import * as THREE from 'three';

export function createLights(scene) {
    const mainLight = new THREE.DirectionalLight(0xffffff, 2);
    mainLight.position.set(10, 5, 2);

    const ambient = new THREE.AmbientLight(0xffffff, 0.2);

    const rimLight = new THREE.DirectionalLight(0xffffff, 0.8);
    rimLight.position.set(-5, -5, -5);

    scene.add(mainLight);
    scene.add(ambient);
    scene.add(rimLight);

    return { update: () => {} };
}