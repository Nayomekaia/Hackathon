// camera en scene omzetten naar pixels

import * as THREE from 'three';

export function createRenderer() {
    const canvas = document.querySelector('#app');
  
    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true
    });
  
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
  
    return renderer;
  }