
//https://dog.ceo/dog-api/documentation/
//document.getElementById("myBtn").addEventListener("click", displayDate);

// EVENT LISTENERS
const randomBtn = document.getElementById("get-random").addEventListener("click", getRandomDog)
const searchBreedBtn = document.getElementById("get-breed").addEventListener("click", searchByBreed)
const darkLightToggle = document.getElementById("dark-light").addEventListener("click", toggleDarkMode)


// get random dog picture
// https://dog.ceo/api/breeds/image/random
function getRandomDog(){
    
    // get random img from api
    fetch("https://dog.ceo/api/breeds/image/random")
        .then(response => response.json())
        .then(data => {
            console.log(data)
            //display image in DOM
            document.getElementById("random-img").src = data.message;
        });
 }

 // search by breed
//  https://dog.ceo/api/breed/hound/images
 function searchByBreed(){
   // Grab input value
   const searchInput = document.getElementById("search-input").value;
   console.log(searchInput)

    // get  images by breed
    fetch(`https://dog.ceo/api/breed/${searchInput}/images`)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            document.getElementById("breed-img").src = data.message[0];
        });
 }

 // toggle dark mode
 function toggleDarkMode(){
    console.log("toggleDarkMode() runs")
 }

// TO DO
// ADD ERROR HANDLING TO SEARCH BY BREED FUNCTION
// HANDLE IMAGE SIZING
// BASIC CSS
// IMAGE BY BREED SHOULD DISPLAY MULTIPLE IMAGES
// IMPLEMENT/TOGGLE DARK MODE