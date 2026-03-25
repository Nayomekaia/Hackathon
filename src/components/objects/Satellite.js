// Satellite.js
import * as THREE from "three";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader.js";

let satellite;

export function loadSatellite(scene) {
  const loader = new OBJLoader();

  loader.load(
    "/satellite.obj",
    (object) => {
      satellite = object;

      // Laad de texture
      const textureLoader = new THREE.TextureLoader();
      const texture = textureLoader.load("/textured_mesh.jpg");

      // fallback materiaal met texture
      object.traverse((child) => {
        if (child.isMesh) {
          child.material = new THREE.MeshStandardMaterial({
            map: texture,
          });
        }
      });

      // positie en schaal
      object.position.set(0, 0, 0);
      object.scale.set(0.5, 0.5, 0.5);

      // zet object schuin naar de andere kant
      object.rotation.x = THREE.MathUtils.degToRad(40);
      object.rotation.y = THREE.MathUtils.degToRad(-35);
      object.rotation.z = THREE.MathUtils.degToRad(-10);

      //voeg toe aan scene
      scene.add(object);
    },
    undefined,
    (error) => {
      console.error("Error loading satellite OBJ:", error);
    },
  );
}

// roteren in animatieloop
export function rotateSatellite() {
  if (satellite) {
    // Langzaam draaien rond Y as
    satellite.rotation.y += 0.001;

    // Kleine kanteling rond X as
    satellite.rotation.x += 0.0005;

    // kleine draai rond Z as
    satellite.rotation.z += 0.0003;
  }
}
