// Satellite.js
import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { CSS2DObject, } from "three/examples/jsm/renderers/CSS2DRenderer.js";

let satellite;


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
      glbChildren(glbData.scene.children);

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

function glbChildren(parts) {
  parts.forEach((child) => {
    child.traverse((n) => {
      // Find the hotspots
      if (n.name && n.isMesh) {
        console.log(n)

        let meshName = n.name

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
        hotspotLabel.position.set(0, 0, 0);
        n.add(hotspotLabel);
        hotspotLabel.layers.set(0);
      }
    });
  });
}


