// main file hier word alles ingeladen en doorgegeven aan de pagina

let fetchedData = [];

// fetch JSON and store it in a global list
fetch("/src/assets/infoText.json")
  .then((res) => res.json())
  .then((data) => {
    fetchedData = data;
  });

// select all input fields
const inputFields = document.querySelectorAll('input[type="radio"]');
const infoBoxTitle = document.querySelector(".info-box h3");
const infoBoxText = document.querySelector(".info-box p");

// eventlistener on each input
inputFields.forEach((input) => {
  input.addEventListener("click", (e) => {
    // get input id from the clicked input field
    let inputId = e.currentTarget;

    // get json object with matching id
    let infoBoxData = getMatchingData(inputId);
    let newTitle = infoBoxData[0];
    let newText = infoBoxData[1];

    infoBoxTitle.textContent = newTitle;
    infoBoxText.textContent = newText;

    console.log(getMatchingData(inputId));
  });
});

function getMatchingData(item) {
  // get id of the HTML element
  let itemId = item.id;
  // search for the id inside the JSON data
  let jsonMatch = fetchedData.find((i) => i.id === itemId);

  let infoDetails = [];
  infoDetails.push(jsonMatch.title);
  infoDetails.push(jsonMatch.description);
  //   console.log(infoDetails)

  // return json object with matching id
  return infoDetails;
}
