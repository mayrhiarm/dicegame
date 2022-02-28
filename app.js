// document.body.style.backgroundColor = "yellow"
// let randomNumber = Math.ceil(Math.random() * 6);

// // console.log(randomNumber);

// let randomDiceImage = "dice" + randomNumber + ".jpeg";

// let randomImageSource = "IMAGES/" + randomDiceImage;

// let images = document.querySelectorAll("img")[0];

// images.setAttribute("src", randomImageSource);

// //player 2
// let randomNumber2 = Math.ceil(Math.random() * 6);

// let randomDiceImage2 = "dice" + randomNumber2 + ".jpeg";

// let randomImageSource2 = "IMAGES/" + randomDiceImage2;

// let images2 = document.querySelectorAll("img")[1];

// images2.setAttribute("src", randomImageSource2);

//ASSIGNMENT

const btn = document.querySelector(".btn");

function DICE() {
  let randomNumber = Math.ceil(Math.random() * 6);

  // console.log(randomNumber);

  let randomDiceImage = "dice" + randomNumber + ".jpeg";

  let randomImageSource = "IMAGES/" + randomDiceImage;

  let images = document.querySelectorAll("img")[0];

  images.setAttribute("src", randomImageSource);

  let randomNumber2 = Math.ceil(Math.random() * 6);

  let randomDiceImage2 = "dice" + randomNumber2 + ".jpeg";

  let randomImageSource2 = "IMAGES/" + randomDiceImage2;

  let images2 = document.querySelectorAll("img")[1];

  images2.setAttribute("src", randomImageSource2);

  let game = document.querySelector(".start");

  if (randomNumber > randomNumber2) {
    console.log(game);
    game.innerText = "Player 1 Is The Winner";
  } else if (randomNumber < randomNumber2) {
    console.log(game);
    game.innerText = "Player 2 Is The Winner";
  } else if (randomNumber === randomNumber2) {
    console.log(game);
    game.innerText = "Its A Tie";
  } else {
    console.log(game);
    game.innerText = "No Winner";
  }
}

DICE();

btn.addEventListener("click", DICE);

//ANOTHER METHOD
// //FUNCTION TO ROLL A DICE BY REFRESHING PAGE
// const refreshButton = document.querySelector('.roll')

// // const refreshPage = () => {
// //     location.reload();
// //   }

// // refreshButton.addEventListener('click', refreshPage)                            //Arrow function

// function refreshPage() {
//     location.reload()
// }

// refreshButton.addEventListener('click', refreshPage)

// //FUNCTION TO DISPLAY WINNER OR DRAW

// let player1 = "Player 1";
// let player2 = "Player 2";

// if (randomNumber === randomNumber2) {
//     document.querySelector('h1').textContent = 'Draw!'
// } else if (randomNumber > randomNumber2) {
//     document.querySelector('h1').textContent = (player1 + ' WINS!')
// } else {
//     document.querySelector('h1').textContent = (player2  + " WINS!")
// }

// let food = document.querySelector(".mine");
// food.innerText = "David dice game";

// let h1 = document.querySelector("h1");
// h1.style.color = "blue";

// let spoon = document.querySelector(".spoon");
// spoon.style.color = "red";

// // let plate = document.querySelector(".plate").
// // plate.style.color = "violet";
// document.querySelector(".plate").style.color = "violet";
