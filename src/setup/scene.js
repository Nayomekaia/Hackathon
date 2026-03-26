import * as THREE from 'three';

export function createScene(renderer) {
    const scene = new THREE.Scene();
    const loader = new THREE.TextureLoader();

    loader.load('/galaxy.jpg', (texture) => {
        texture.colorSpace = THREE.SRGBColorSpace;

        const geometry = new THREE.SphereGeometry(60, 74, 64);

        const material = new THREE.MeshBasicMaterial({
            map: texture,
            side: THREE.BackSide,
            color: new THREE.Color(5.5, 5.5, 5.5) 
        });

        const sky = new THREE.Mesh(geometry, material);
        scene.add(sky);
    });

    return scene;
}