const data = [
	{
		id: "default",
		title: "Nebula Xplorer Satellite",
		description:
			"<p>Nebula Xplorer is a cutting-edge X-ray satellite exploring extreme objects like black holes and neutron stars. By tracking how X-ray emissions change over time, it reveals what’s happening in these intense environments.</p><p>This student-driven mission, developed with academic and industry partners, combines innovation with real-world expertise. With high time resolution and continuous observations, it uncovers how matter behaves, how jets form, and how these systems evolve.<\/p><p>Using advanced spectral-timing techniques, it provides a unique view into the structure and physics of the universe’s most extreme regions.</p><p>Ready to explore the unknown? Discover the components of our satellite.</p>",
	},
	{
		id: "component-1",
		title: "X-ray instrument",
		description:
			"Sending a telescope to space means engineering for the impossible: it has to survive a rocket launch, then operate flawlessly in a vacuum where temperatures swing by hundreds of degrees. NEBULA-Xplorer's X-ray instrument does exactly that, suspended on three precision titanium mounts that isolate it from every shock and temperature change, anchored to a reinforced panel strong enough to carry its weight, and oriented to make full use of every centimeter of space inside the rocket fairing.",
	},
	{
		id: "component-2",
		title: "Star tracker module",
		description:
			"To observe a faint X-ray source hundreds of light-years away, NEBULA-Xplorer needs to hold its aim with extraordinary precision. Star trackers continuously scan the sky, recognize patterns of stars, and determine the spacecraft’s orientation down to a few arcseconds. Two units ensure constant visibility of stars even during rotation.",
	},
	{
		id: "component-3",
		title: "Dawn 4U Cubedrive",
		description:
			"The propulsion system counters atmospheric drag, performs collision avoidance, and enables controlled reentry. This compact thruster unit carries under two kilograms of propellant and is precisely aligned to ensure stable and accurate maneuvers throughout the mission.",
	},
	{
		id: "component-4",
		title: "S-band Antenna",
		description:
			"The S-band antenna enables communication with Earth during brief contact windows. It transmits gigabytes of scientific data over large distances in just minutes, ensuring valuable observations reach ground stations.",
	},
	{
		id: "component-5",
		title: "Sun sensor",
		description:
			"Sun sensors provide basic orientation by detecting the Sun’s position. They are crucial during emergencies or initial deployment, helping the spacecraft maintain power and avoid dangerous pointing scenarios.",
	},
	{
		id: "component-6",
		title: "Magnetorquers",
		description:
			"These external devices generate magnetic torque to control the satellite’s orientation and desaturate the reaction wheels. Placed along the satellite’s primary axes (x, y, z) and positioned away from electrical systems like battery packs, they are sized to counter peak disturbance torques with added margin. By interacting with Earth’s magnetic field, they provide efficient three-axis attitude control without the complexity of thrusters, ensuring reliable operation throughout every orbit.",
	},
	{
		id: "component-7",
		title: "Solar Panel",
		description:
			"These panels convert sunlight into electricity to power the satellite’s systems and instruments. Positioned to capture maximum sunlight, they ensure continuous operation, even when the satellite passes into Earth’s shadow thanks to onboard energy storage..",
	},
];

// select all HTML elements
const infoTitle = document.querySelector(".info-box h3");
const infoText = document.querySelector(".info-box .text");
const container = document.querySelector(".container");

export function updateInfobox(e) {
	// get clicked element id and use custom function for finding the matching title and description
	const inputId = e.target;
	const infoBoxData = getMatchingData(inputId);

	if (!infoBoxData) return;

	infoTitle.textContent = infoBoxData.title;
	infoText.innerHTML = infoBoxData.description;
}

// function om data te matchen
function getMatchingData(element) {
	const itemId = element.id;
	const jsonMatch = data.find((i) => i.id === itemId);
	if (!jsonMatch) return null;

	return {
		title: jsonMatch.title,
		description: jsonMatch.description,
	};
}
