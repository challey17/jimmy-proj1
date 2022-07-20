//https://dog.ceo/dog-api/documentation/
//document.getElementById("myBtn").addEventListener("click", displayDate);

// EVENT LISTENERS
document.getElementById("get-random").addEventListener("click", getRandomDog);
document.getElementById("get-breed").addEventListener("click", searchByBreed);
document.getElementById("dark-light").addEventListener("click", toggleDarkMode);

// get random dog picture
// https://dog.ceo/api/breeds/image/random
function getRandomDog() {
  //clear previous image, if any
  document.getElementById("rando").replaceChildren();
  const randoContainer = document.getElementById("rando");
  // get random img from api
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      //display image in DOM
      // document.getElementById("random-img").src = data.message;
      const img = document.createElement("img");
      img.src = data.message;
      randoContainer.append(img);
    });
}

// search by breed
//  https://dog.ceo/api/breed/hound/images
function searchByBreed() {
  //clear previous images, if any
  document.getElementById("breed").replaceChildren();
  // Grab input value
  const searchInput = document.getElementById("search-input").value;
  console.log(searchInput);

  const breed = document.getElementById("breed");

  // get  images by breed
  fetch(`https://dog.ceo/api/breed/${searchInput}/images`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data.message);
      data.message.forEach((element, index) => {
        if (index <= 2) {
          const img = document.createElement("img");
          img.src = element;
          breed.append(img);
        }
      });
    });
}

// toggle dark mode
function toggleDarkMode() {
  console.log("toggleDarkMode() runs");
}

// TO DO
// ADD ERROR HANDLING TO SEARCH BY BREED FUNCTION
// HANDLE IMAGE SIZING
// BASIC CSS
// IMAGE BY BREED SHOULD DISPLAY MULTIPLE IMAGES
// IMPLEMENT/TOGGLE DARK MODE
