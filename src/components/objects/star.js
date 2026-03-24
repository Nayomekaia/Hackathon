import * as THREE from 'three';

function createStar(parent){
    //normal sphere creation
    const geometry = new THREE.SphereGeometry( 0.02, 12, 8);
    const material = new THREE.MeshBasicMaterial({color: "White"});
    const star = new THREE.Mesh(geometry, material);

    //randomize the coordinates: random number between 15 and -15
    star.position.set(Math.floor(Math.random() * 30) - 15, Math.floor(Math.random() * 30) - 15, Math.floor(Math.random() * 30) - 15);

    //we don't want the stars too close to the center of the scene, so we'll move the star away on one axis
    correctCoordinates(star);

    //finally, add the star to whichever parent we've selected
    parent.add(star);
}

function correctCoordinates(object){
    //randomize which axis will be reassigned
    let randomNumber = Math.floor(Math.random()*3)+1;
    switch (randomNumber) {
        case 1:
            object.position.x = reassigncoordinate();
            break;
    
        case 2:
            object.position.y = reassigncoordinate();
            
            break;

        case 3:
            object.position.z = reassigncoordinate();
            
            break;
    }
}

//generate a random number between -8 or -15 OR between 9 qnd 15 (which is good enough)
function reassigncoordinate(){
    let coordinate = Math.floor(Math.random() * 15) + 1; // random number between 1 and 15
    if(coordinate < 9 ){// if 8 or less, subtract 16, this way the negative numbers are between -8 and -15, leaving the positives to be between 9 and 15
        coordinate = coordinate - 16;
    }

    return coordinate;
}

// create a custom amount of stars attached to the parent
function createStars(amount, parent){
    for (let i = 0; i < amount; i++) {
    createStar(parent);
    
    }
}

//we're only exporting the createAtmosphere function because we'll always want to add more than one star at a time
export {createStars}