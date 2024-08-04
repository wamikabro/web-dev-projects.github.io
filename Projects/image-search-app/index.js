const searchBox = document.querySelector(".search-box");
const searchButton = document.querySelector(".search-button");
const showMoreButton = document.querySelector(".show-more-button");
const searchResultsSection = document.querySelector(".search-results-section");

// things to be passed into API URL
let page = 1;
let searchQuery = "";
const accessKey = "RZEIOVfPhS7vMLkFdd2TSKGFBS4o9_FmcV1Nje3FSjw"; // will change it after verification

searchButton.addEventListener("click", () => {
  // not empty
  if (searchBox.value) {
    callAPI(searchBox.value);
  }
});

async function callAPI(searchQuery) {
  const apiURL = `https://api.unsplash.com/search/photos?page=${page}&query=${searchQuery}&client_id=${accessKey}`;

  const response = await fetch(apiURL);

  const data = await response.json();

  console.log(data);
}
