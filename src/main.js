// main file hier word alles ingeladen en doorgegeven aan de pagina

let fetchedData = [];

// fetch JSON and store it in a global list
fetch("/src/assets/infoText.json")
  .then((res) => res.json())
  .then((data) => {
    fetchedData = data;
  });

// select all HTML elements
const inputFields = document.querySelectorAll('input[type="radio"]');
const infoTitle = document.querySelector(".info-box h3");
const infoText = document.querySelector(".info-box p");

inputFields.forEach((input) => {
  input.addEventListener("click", (e) => {
    // get clicked element id and use custom function for finding the matching title and description
    let inputId = e.currentTarget;
    let infoBoxData = getMatchingData(inputId);

    // change title and description
    infoTitle.textContent = infoBoxData[0];
    infoText.textContent = infoBoxData[1];
  });
});

// A function that selects the id of an element, and searches the JSON for a matching id.
// then stores the title and description of the found JSON object into a new list
function getMatchingData(element) {
  let itemId = element.id;

  let jsonMatch = fetchedData.find((i) => i.id === itemId);

  let infoDetails = [];
  infoDetails.push(jsonMatch.title);
  infoDetails.push(jsonMatch.description);

  return infoDetails;
}
