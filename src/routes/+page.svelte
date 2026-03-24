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
		font-family: sans-serif;
		background-image: url('$lib/assets/galaxy.jpg');
	}

	.component-picker {
		border: 1px solid white;
		border-radius: 10px;
		padding: 1em;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1em;
		backdrop-filter: blur(10px);
		color: white;

		hgroup {
			width: 100%;
			text-align: center;
		}

		h2 {
			font-family: 'Varela Round', sans-serif;
			font-size: 1.5rem;
			text-transform: uppercase;
		}

		form {
			gap: 0.5em;
			display: flex;
			flex-direction: column;
		}

		label {
			border: 1px solid white;
			border-radius: 4px;
			padding: 0.5em;
			text-transform: uppercase;
		}

		label:has(input[type='radio']:checked) {
			border: 1px solid blue;
		}

		input[type='radio'] {
			appearance: none;
		}
	}
</style>
