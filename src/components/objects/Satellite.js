// Satellite.js
import * as THREE from "three";
import TWEEN from "three/examples/jsm/libs/tween.module.js";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { CSS2DObject } from "three/examples/jsm/renderers/CSS2DRenderer.js";

let satellite;
let meshIndex = 0;

export function loadSatellite(scene) {
  const loader = new GLTFLoader();

  loader.load(
    "/NebulaXplorer.glb",
    function (glbData) {
      satellite = glbData.scene;

      // positie en schaal
      satellite.position.set(0, 0, 0);
      satellite.scale.set(0.1, 0.1, 0.1);

      // zet object schuin naar de andere kant
      satellite.rotation.x = THREE.MathUtils.degToRad(40);
      satellite.rotation.y = THREE.MathUtils.degToRad(-35);
      satellite.rotation.z = THREE.MathUtils.degToRad(-10);

      // voeg hotspots toe aan satellite
      glbHotspot(glbData.scene.children);

      //voeg toe aan scene
      scene.add(glbData.scene);
    },
    undefined,
    (error) => {
      console.error("Error loading satellite GLB:", error);
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

export function resetSatellite() {
  if (satellite) {
    let currentSatelliteRotation = {
      x: satellite.rotation.x,
      y: satellite.rotation.y,
      z: satellite.rotation.z,
    };

    let targetSatelliteRotation = {
      x: 0.698,
      y: -0.611,
      z: -0.175,
    };

    new TWEEN.Tween(currentSatelliteRotation)
      .to(targetSatelliteRotation, 1500)
      .easing(TWEEN.Easing.Quadratic.InOut)
      .onUpdate(() => {
        satellite.rotation.set(
          currentSatelliteRotation.x,
          currentSatelliteRotation.y,
          currentSatelliteRotation.z,
        );
      })
      .start();
  }
}

const hotspotPositions = [
  { x: 0, y: 2, z: 0 },
  { x: 1.5, y: 0, z: 0 },
  { x: -1, y: 1, z: 0.5 },
  { x: 0, y: 0, z: 2 },
  { x: 0.5, y: -1, z: 1 },
  { x: -0.5, y: 1.5, z: -1 },
  { x: 1, y: 0.5, z: -0.5 },
  { x: 0, y: -0.5, z: 1.5 },
];

function glbHotspot(parts) {
  meshIndex = 0;
  parts.forEach((child) => {
    child.traverse((n) => {
      // Find the hotspots
      if (n.name && n.isMesh) {
        // console.log(n)
        console.log(meshIndex, n.name);

        const pos = hotspotPositions[meshIndex] || { x: 0, y: 0, z: 0 };

        let meshName = n.name;

        const hotspot = document.createElement("div");
        hotspot.className = "hotspot";
        hotspot.setAttribute("name", meshName);

        // Add a tooltip element
        const tooltip = document.createElement("div");
        tooltip.className = "tooltip";

        // voeg name van de mesh toe aan tooltip, te zien bij hover
        tooltip.innerHTML = meshName;
        hotspot.appendChild(tooltip);

        const hotspotLabel = new CSS2DObject(hotspot);
        hotspotLabel.position.set(pos.x, pos.y, pos.z);
        n.add(hotspotLabel);
        hotspotLabel.layers.set(0);

        meshIndex++;
      }
    });
  });
}
