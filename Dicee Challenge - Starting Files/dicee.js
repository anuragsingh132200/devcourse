// getting a random integer between 1 and 6 for player 1
var randomNumber1 = Math.floor(Math.random() * 6) + 1; // 1-6
var randomImageSource1 = "images/dice" + randomNumber1 + ".png";

// getting a random integer between 1 and 6 for player 2
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

// setting the source attribute for player 1's image
document.querySelector(".img1").setAttribute("src", randomImageSource1);

// setting the source attribute for player 2's image
document.querySelector(".img2").setAttribute("src", randomImageSource2);

// comparing the random numbers and displaying the result
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 1 Wins!";
} else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins!";
} else {
  document.querySelector("h1").innerHTML = "Draw!";
}
