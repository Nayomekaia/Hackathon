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

export function renderLine() {
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
}

// ----------------------------------------------------------------------------------------------------------


