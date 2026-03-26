const container = document.querySelector(".container");
const toggleControls = document.querySelector(".show-controls");
const componentPicker = document.querySelector(".component-picker");
const canvas = document.querySelector("#app");

// if there is a click event inside the component-picker or inside the canvas the the controls dissapear
[componentPicker, canvas].forEach((element) => {
  element.addEventListener("click", () => {
    if (container) {
      container.classList.add("hide");
      container.classList.remove("show");
      toggleControls.classList.remove("hide");
      toggleControls.classList.add("show");
    }
  });
});

toggleControls.addEventListener("click", () => {
  if (toggleControls) {
    toggleControls.classList.remove("show");
    toggleControls.classList.add("hide");
    container.classList.remove("hide");
    container.classList.add("show");
  }
});
