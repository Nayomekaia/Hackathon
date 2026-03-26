// maakt de scene oftewel 3d wereld waar alles in zit
import * as THREE from "three";

export function createScene() {
  const scene = new THREE.Scene();

  const loader = new THREE.TextureLoader();
  loader.load("/galaxy.jpg", (texture) => {
    texture.mapping = THREE.EquirectangularReflectionMapping;
    scene.background = texture;
  });

  return scene;
}
