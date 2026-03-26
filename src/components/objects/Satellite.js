// Satellite.js
import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

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

      // console.log(glbData.scene.children);
      glbChildren(glbData.scene.children);

      //voeg toe aan scene
      scene.add(glbData.scene);

      // voeg hotspots toe
      // addHotspots(glbData.scene);

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

import { CSS2DRenderer, CSS2DObject, } from "three/examples/jsm/renderers/CSS2DRenderer.js";

let labelRenderer;

// Roep dit EENMALIG aan bij setup
export function initLabelRenderer() {
  labelRenderer = new CSS2DRenderer();
  labelRenderer.setSize(window.innerWidth, window.innerHeight);
  labelRenderer.domElement.style.position = "absolute";
  labelRenderer.domElement.style.top = "0";
  labelRenderer.domElement.style.pointerEvents = "none";
  document.body.appendChild(labelRenderer.domElement);

  window.addEventListener("resize", () => {
    labelRenderer.setSize(window.innerWidth, window.innerHeight);
  });

  return labelRenderer;
}

export function renderLabels(scene, camera) {
  if (labelRenderer) {
    labelRenderer.render(scene, camera);
  }
}

const hotspotInfo = {
  Propulsion_Module: {
    tooltipText: "Zorgt voor de voortstuwing van de satelliet",
  },
  Star_Tracker_Module: {
    tooltipText: "Navigeert aan de hand van sterrenposities",
  },
  Star_Tracker_Module_Bracket: {
    tooltipText: "Bevestiging voor de star tracker",
  },
};

function glbChildren(parts) {
  parts.forEach((child) => {
    child.traverse((n) => {
      // Alleen hotspots toevoegen voor meshes in hotspotInfo
      if (n.name && n.isMesh && hotspotInfo[n.name]) {
        const info = hotspotInfo[n.name];

        const hotspot = document.createElement("div");
        hotspot.className = "hotspot";
        hotspot.setAttribute("name", n.name);

        // Add a tooltip element
        const tooltip = document.createElement("div");
        tooltip.className = "tooltip";

        // Gebruik tooltipText uit hotspotInfo (zoals userData in de blog)
        tooltip.innerHTML = info.tooltipText;
        hotspot.appendChild(tooltip);

        const hotspotLabel = new CSS2DObject(hotspot);
        hotspotLabel.position.set(0, 0, 0);
        n.add(hotspotLabel);
        hotspotLabel.layers.set(0);
      }
    });
  });
}


