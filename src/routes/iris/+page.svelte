<script>
	import { browser } from '$app/environment';
	import * as THREE from 'three';
	import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
	import { onMount } from 'svelte';

	if (browser) {
		let gltf;
		let camera;
		let scene;
		let renderer;
		const GLTFloader = new GLTFLoader();

		const init = () => {
			scene = new THREE.Scene();
			camera = new THREE.PerspectiveCamera(150, window.innerWidth / window.innerHeight, 0.1, 1000);
			renderer = new THREE.WebGLRenderer();

			renderer.setSize(window.innerWidth, window.innerHeight);
			document.body.appendChild(renderer.domElement);

			const light = new THREE.AmbientLight(0x404040, 50); // soft white light
			scene.add(light);

			const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
			scene.add(directionalLight);

			camera.position.z = 8;
		};

		let model;

		GLTFloader.load(
			'/rocket.glb',
			function (gltf) {
				model = gltf.scene;
				scene.add(model);
			},
			undefined,
			function (error) {
				console.error(error);
			}
		);

		const render = () => {
			renderer.clear();
			renderer.render(scene, camera);
		};

		const animate = (time) => {
			if (model) {
				model.rotation.y = time / 1000;
			}
			requestAnimationFrame(animate);

			render();
		};

		init();
		animate();
	}
</script>

<svelte:head>
	<title>SvelteKit + ThreeJS</title>
</svelte:head>

<style>
	:global(body) {
		background-color: grey;
	}
</style>
