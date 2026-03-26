import * as THREE from 'three';

export function createLights(scene) {

    // hoofdlamp van de scene, iets feller en van onderaf
    const mainLight = new THREE.DirectionalLight(0xffffff, 50); 
    mainLight.position.set(0, -10, 5); 
    mainLight.castShadow = true;
    mainLight.shadow.mapSize.width = 2048;
    mainLight.shadow.mapSize.height = 2048;

    // ambient licht voor zachte belichting overal
    const ambient = new THREE.AmbientLight(0xffffff, 5000);

    // rim light – highlight, accentueert randen van het object
    const rimLight = new THREE.DirectionalLight(0xffffff, 10); 
    rimLight.position.set(-10, -5, -10); 

    // fill light vult schaduwen op, zodat objecten niet te donker zijn
    const fillLight = new THREE.DirectionalLight(0xffffff, 50000); 
    fillLight.position.set(-5, 5, 5); 

    // bovenlicht – van bovenaf
    const topLight = new THREE.DirectionalLight(0xffffff, 10); 
    topLight.position.set(0, 10, 5); 
    topLight.castShadow = false;

       // onderverlichting
       const bottomLight = new THREE.DirectionalLight(0xffffff, 2000); 
       bottomLight.position.set(-0, -10, -5); 
       bottomLight.castShadow = false;

       const backLight = new THREE.DirectionalLight(0xffffff, 500); 
       backLight.position.set(0, -5, -5); 
       backLight.castShadow = false;

    // voeg alle lichten toe
    scene.add(mainLight, ambient, rimLight, fillLight, topLight, bottomLight, backLight);
}