const gameContainer = document.getElementById("game");
let choice1 = null;
let choice2 = null;
let selections = 0;
let stopClicks = false;


const COLORS = [
  "GIFS/benzema.gif",
  "GIFS/chiesa.gif",
  "GIFS/debruyne.gif",
  "GIFS/haaland.gif",
  "GIFS/lewandowski.gif",
  "GIFS/raphinha.gif",
  "GIFS/vandijk.gif",
  "GIFS/degea.gif",
  "GIFS/son.gif",
  "GIFS/kane.gif",
  "GIFS/salah.gif",
  "GIFS/mbappe.gif",
  "GIFS/mane.gif",
  "GIFS/messi.gif",
  "GIFS/modric.gif",
  "GIFS/benzema.gif",
  "GIFS/chiesa.gif",
  "GIFS/debruyne.gif",
  "GIFS/haaland.gif",
  "GIFS/lewandowski.gif",
  "GIFS/raphinha.gif",
  "GIFS/vandijk.gif",
  "GIFS/degea.gif",
  "GIFS/son.gif",
  "GIFS/kane.gif",
  "GIFS/salah.gif",
  "GIFS/mbappe.gif",
  "GIFS/mane.gif",
  "GIFS/messi.gif",
  "GIFS/modric.gif"
];


// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want ot research more
function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let shuffledColors = shuffle(COLORS);

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    // create a new div
    const newDiv = document.createElement("img");

    // give it a class attribute for the value we are looping over
    newDiv.classList.add(color);
  
   

    // call a function handleCardClick when a div is clicked on
    newDiv.addEventListener("click", handleCardClick);

    // append the div to the element with an id of game
    gameContainer.append(newDiv);
  }
}

function handleCardClick(e) {
  if (stopClicks) return;
  if (e.target.classList.contains("turned")) return;

  let currentCard = e.target;
  currentCard.src = currentCard.classList[0];

  if (!choice1 || !choice2) {
    currentCard.classList.add("turned");
    choice1 = choice1 || currentCard;
    choice2 = currentCard === choice1 ? null : currentCard;
  }

  if (choice1 && choice2) {
    stopClicks = true;
    let gif1 = choice1.className;
    let gif2 = choice2.className;

    if (gif1 === gif2) {
      selections += 2;
      choice1.removeEventListener("click", handleCardClick);
      choice2.removeEventListener("click", handleCardClick);
      choice1 = null;
      choice2 = null;
      stopClicks = false;
    } else {
      setTimeout(function() {
        choice1.src = "";
        choice2.src = "";
        choice1.classList.remove("turned");
        choice2.classList.remove("turned");
        choice1 = null;
        choice2 = null;
        stopClicks = false;
      }, 1000);
    }
  }
  if (selections === COLORS.length) alert ("YOU WIN");
}
createDivsForColors(shuffledColors);
