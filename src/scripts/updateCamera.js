import TWEEN from "three/examples/jsm/libs/tween.module.js";

export function updateCamera(controls) {
	let x = Math.floor(Math.random() * 10);
	let y = Math.floor(Math.random() * 20);
	let z = Math.floor(Math.random() * 10);

	new TWEEN.Tween(controls.target)
		.to(
			{
				x: x,
				y: y,
				z: z,
			},
			1500,
		)
		.start();
	controls.update();
}
