const container = document.querySelector(".container");
const toggleControls = document.querySelector(".show-controls");
const componentPicker = document.querySelector(".component-picker");
const canvas = document.querySelector("#app");

//  fade out bij klik van de controls
componentPicker.addEventListener("click", () => {
  if (container) {
    container.classList.add("hide");
    toggleControls.classList.remove("hide");
  }
});

canvas.addEventListener("click", () => {
  if (container) {
    container.classList.add("hide");
    toggleControls.classList.remove("hide");
  }
});

toggleControls.addEventListener("click", () => {
  if (toggleControls) {
    container.classList.remove("hide");
    toggleControls.classList.add("hide");
  }
});
