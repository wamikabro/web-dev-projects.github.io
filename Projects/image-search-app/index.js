const searchBox = document.querySelector(".search-box");
const searchButton = document.querySelector(".search-button");
const showMoreButton = document.querySelector(".show-more-button");
const searchResultsSection = document.querySelector(".search-results-section");
// things to be passed into API URL
let page = 1;
let searchQuery = "";
const accessKey = "RZEIOVfPhS7vMLkFdd2TSKGFBS4o9_FmcV1Nje3FSjw"; // will change it after verification

searchButton.addEventListener("click", () => {
  searchQuery = searchBox.value;
  page = 1; // reset page on new search
  // if search query is not empty
  if (searchQuery) {
    callAPI(searchQuery);
  } // if search query is empty
  else {
    showMoreButton.classList.add("hidden");
    searchResultsSection.innerHTML = "";
  }
});

showMoreButton.addEventListener("click", () => {
  page++;
  callAPI(searchQuery);
});

async function callAPI(searchQuery) {
  const apiURL = `https://api.unsplash.com/search/photos?page=${page}&query=${searchQuery}&client_id=${accessKey}`;

  const response = await fetch(apiURL);
  const data = await response.json();
  const results = data.results;

  if (page === 1) {
    searchResultsSection.innerHTML = "";
  }

  // if data was found, then show 'show more' button, otherwise just return
  // don't do further things
  if (data.total != 0) {
    showMoreButton.classList.remove("hidden");
  } else {
    showMoreButton.classList.add("hidden");
    return;
  }

  // results has the objects, each object containing a result
  // that's why we will iterate through it using map
  results.map((results) => {
    const imageWrapper = document.createElement("div");
    imageWrapper.classList.add("search-result");

    const image = document.createElement("img");
    image.src = results.urls.small;
    image.alt = results.urls.alt_description;

    const imageLink = document.createElement("a");
    imageLink.href = results.links.html;
    imageLink.target = "_blank";
    imageLink.textContent = results.alt_description;

    imageWrapper.appendChild(image);
    imageWrapper.appendChild(imageLink);
    searchResultsSection.appendChild(imageWrapper);
  });
}
