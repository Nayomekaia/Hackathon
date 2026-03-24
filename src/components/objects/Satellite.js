// Satellite.js
import * as THREE from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';

let satellite; 

export function loadSatellite(scene) {
  const loader = new OBJLoader();

  loader.load(
    '/satellite.obj', 
    (object) => {
      satellite = object;

  // Laad de texture
const textureLoader = new THREE.TextureLoader();
const texture = textureLoader.load('/textured_mesh.jpg'); 

// fallback materiaal met texture
object.traverse((child) => {
  if (child.isMesh) {
    child.material = new THREE.MeshStandardMaterial({
      map: texture,
    });
  }
});
      //voeg toe aan scene
      scene.add(object);
    },
    undefined,
    (error) => {
      console.error('Error loading satellite OBJ:', error);
    }
  );
}

