import "./styles.css";

const states = [
  "Alabama",
  "Alaska",
  "American Samoa",
  "Arizona",
  "Arkansas",
  "California",
  "Colorado",
  "Connecticut",
  "Delaware",
  "District of Columbia",
  "Federated States of Micronesia",
  "Florida",
  "Georgia",
  "Guam",
  "Hawaii",
  "Idaho",
  "Illinois",
  "Indiana",
  "Iowa",
  "Kansas",
  "Kentucky",
  "Louisiana",
  "Maine",
  "Marshall Islands",
  "Maryland",
  "Massachusetts",
  "Michigan",
  "Minnesota",
  "Mississippi",
  "Missouri",
  "Montana",
  "Nebraska",
  "Nevada",
  "New Hampshire",
  "New Jersey",
  "New Mexico",
  "New York",
  "North Carolina",
  "North Dakota",
  "Northern Mariana Islands",
  "Ohio",
  "Oklahoma",
  "Oregon",
  "Palau",
  "Pennsylvania",
  "Puerto Rico",
  "Rhode Island",
  "South Carolina",
  "South Dakota",
  "Tennessee",
  "Texas",
  "Utah",
  "Vermont",
  "Virgin Island",
  "Virginia",
  "Washington",
  "West Virginia",
  "Wisconsin",
  "Wyoming",
];

const result = document.getElementById("#autoCompleteContainer");
const input = document.querySelector("#autocomplete");
const button = document.querySelector("#showAll");
const filterButton = document.querySelector("#filterLength");
const hideButton = document.querySelector("#hideAll");
const displayAllArea = document.getElementById("displayArea");
const stateInput = document.querySelector("#addStateForm");

function sortStates(e) {
  let sortedStates = states.filter((state) =>
    state.toLowerCase().startsWith(e.target.value.toLowerCase())
  );
  const renderState = document.createElement("li");
  renderState.innerText = sortedStates;
  result.append(renderState);
}

function showAllStates() {
  let allStates = states.map((s) => document.createElement("li"));
  allStates.innerText = allStates;
  console.log("clicked");
  displayAllArea.append(states);
}

function hideAll() {
  displayAllArea.style.display = "none";
}

function filterByLength() {
  let filteredStates = states.sort(function (a, b) {
    return a.length - b.length;
  });
  let renderFilteredStates = document.createElement("li");
  renderFilteredStates.innerText = filteredStates;
  displayAllArea.append(renderFilteredStates);
}

function addState(e) {
  let userState = e.target.value;
  states.push(userState);
  console.log("State Added", userState, states);
}

stateInput.addEventListener("change", addState);
hideButton.addEventListener("click", hideAll);
button.addEventListener("click", showAllStates);
input.addEventListener("change", sortStates);
filterButton.addEventListener("click", filterByLength);

console.log(input);
