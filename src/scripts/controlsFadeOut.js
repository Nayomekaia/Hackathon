const container = document.querySelector(".container");
const toggleControls = document.querySelector(".show-controls");
const componentPicker = document.querySelector(".component-picker");
const canvas = document.querySelector("#app");

// if there is a click event inside the component-picker or inside the canvas the the controls dissapear
[componentPicker, canvas].forEach(el => {
  el.addEventListener("click", () => {
    if (container) {
      container.classList.add("hide");
      toggleControls.classList.remove("hide");
    }
  });
});

toggleControls.addEventListener("click", () => {
  if (toggleControls) {
    container.classList.remove("hide");
    toggleControls.classList.add("hide");
  }
});
