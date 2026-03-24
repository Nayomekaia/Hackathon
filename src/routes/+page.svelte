<script>
	import { onMount } from 'svelte';
	import * as THREE from 'three';
</script>

<main>
	<section class="component-picker">
		<hgroup>
			<h2>Choose Component</h2>
			<p>Get more information about the component</p>
		</hgroup>
		<form>
			<label><input type="radio" name="component" />X-ray Instrument</label>

			<label><input type="radio" name="component" />Battery Packs</label>

			<label><input type="radio" name="component" />Star Tracker Module</label>

			<label><input type="radio" name="component" />Bus Subsystem Mounting Rack</label>

			<label><input type="radio" name="component" />Dawn 4U Cubedrive</label>

			<label><input type="radio" name="component" />S-Band Antenna</label>

			<label><input type="radio" name="component" />GNSS Receiver</label>

			<label><input type="radio" name="component" />Sun Sensor</label>

			<label><input type="radio" name="component" />Instrument Electronics Module</label>

			<label><input type="radio" name="component" />Magnetometers</label>

			<label><input type="radio" name="component" />SADM</label>

			<label><input type="radio" name="component" />Reaction Wheel Module</label>

			<label><input type="radio" name="component" />OBC, TCM, Inertial Measurement Unit</label>
		</form>
	</section>
</main>

<style>
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	main {
		display: grid;
		justify-content: end;
		padding: 2rem;
		font-family: 'Varela Round', sans-serif;
		background-image: url('$lib/assets/galaxy.jpg');
	}

	.component-picker {
		border: 1px solid white;
		border-radius: 10px;
		padding: 1.5em;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1.5em;
		backdrop-filter: blur(10px);
		color: white;
		background-color: #ececec1a;

		hgroup {
			width: 100%;
			text-align: center;
		}

		h2 {
			font-size: 1.5rem;
			text-transform: uppercase;
			letter-spacing: -0.5px;
		}

		form {
			display: flex;
			flex-direction: column;
			gap: 0.75em;
		}

		label {
			border: 1px solid white;
			border-radius: 4px;
			padding: 0.75em;
			text-transform: uppercase;
			backdrop-filter: blur(10px);
			transition: 0.2s;

			&:hover {
				border: 1px solid blue;
			}

			&:has(input[type='radio']:checked) {
				background-color: blue;
			}
		}

		input[type='radio'] {
			appearance: none;
		}
	}
</style>
