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

      //voeg toe aan scene
      scene.add(object);
    },
    undefined,
    (error) => {
      console.error('Error loading satellite OBJ:', error);
    }
  );
}

