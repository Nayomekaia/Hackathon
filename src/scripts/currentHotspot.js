const form = document.querySelector("form");

let allHotspots;

// wait for hotspots to load
setTimeout(() => {
  allHotspots = document.querySelectorAll(".hotspot");
}, 1000);

form.addEventListener("change", (e) => {
  const selectedId = e.target.id;
  
  // if clear selection is clicked, show all hotspots
  if (selectedId === "default") {
    allHotspots.forEach((spot) => {
      spot.classList.remove("hide");
    });
  }
  // hide all hotspots except the one matching the clicked input's id
  else {
    allHotspots.forEach((spot) => {
      if (spot.id === selectedId) {
        spot.classList.remove("hide");
      } else {
        spot.classList.add("hide");
      }
    });
  }
});
