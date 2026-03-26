import * as THREE from 'three';

export function createLights(scene) {

    // hoofdlamp van de scene, iets feller en van onderaf
    const mainLight = new THREE.DirectionalLight(0xffffff, 5); 
    mainLight.position.set(0, -10, 5); 
    mainLight.castShadow = true;
    mainLight.shadow.mapSize.width = 2048;
    mainLight.shadow.mapSize.height = 2048;

    // ambient licht voor zachte belichting overal
    const ambient = new THREE.AmbientLight(0xffffff, 10);

    // rim light – highlight, accentueert randen van het object
    const rimLight = new THREE.DirectionalLight(0xffffff, 10); 
    rimLight.position.set(-10, -5, -10); 

    // fill light vult schaduwen op, zodat objecten niet te donker zijn
    const fillLight = new THREE.DirectionalLight(0xffffff, 25); 
    fillLight.position.set(-5, 5, 5); 

    // bovenlicht 
    const topLight = new THREE.DirectionalLight(0xffffff, 5); 
    topLight.position.set(0, 10, 5); 
    topLight.castShadow = false;

        // achterlicht – van bovenaf
       const backLight = new THREE.DirectionalLight(0xffffff, 100); 
       backLight.position.set(0, -5, -5); 
       backLight.castShadow = false;

    // voeg alle lichten toe
    scene.add(mainLight, ambient, rimLight, fillLight, topLight, backLight);
}