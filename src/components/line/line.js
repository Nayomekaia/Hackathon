import * as THREE from "three";

// eventlistener op input
// in de DOM in een svg over de hele viewport
// afhankelijk van input verandert de stroke van de svg om een lijn te maken
// opgeslagen coordinaten voor elke stroke/component

let camera;
let currentComponent = null;

// hardcoded coordinates per component
const componentCoordinates = {
  "component-1": [10, 20, 30],
  "component-2": [50, 120, 300],
};

const svgL = document.querySelector("#connector");

export function renderLine(scene) {
  // mbv de input id bepalen welke componentCoordinate gebruikt wordt
  document.querySelector("form").addEventListener("change", (e) => {
    currentComponent = e.target.id;
    console.log(currentComponent);

    // gebruik de harcoded component coordinaten om de svg lijn te maken
    svgL.setAttribute("x1", componentCoordinates[currentComponent][0]);
    svgL.setAttribute("x2", componentCoordinates[currentComponent][1]);
    svgL.setAttribute("y1", componentCoordinates[currentComponent][2]);
    svgL.setAttribute("y2", componentCoordinates[currentComponent][0]);
  });

  // console.log(scene.children);

  // const glb = scene.getObjectByName("satellite");

  // console.log(glb); // dit is de root group

  // glb.traverse((child) => {
  //   if (child.isMesh) {
  //     console.log("Mesh:", child);
  //   }
  // });
}

// ----------------------------------------------------------------------------------------------------------

import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

// const loader = new GLTFLoader();
// loader.load("Camera.glb", function (gltf) {
//   //Traverse through the meshes
//   gltf.scene.children.forEach((child) => {
//     child.traverse((n) => {
//       // Find the hotspots
//       if (n.name && n.name.includes("hotspot")) {
//         // ...
//       }
//     })
//   });
// })

// console.log(glbData.scene.children);
