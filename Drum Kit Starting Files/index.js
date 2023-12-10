// function that seclects the button and plays the sound
var numberOfDrumButtons = document.querySelectorAll(".drum").length;
for (var i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
}
// function that detects the keypress and plays the sound
document.addEventListener("keypress", function (event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});
// function that plays the sound
function makeSound(key) {
  switch (key) {
    case "w":
      var crash = new Audio("./sounds/crash.mp3");
      crash.play();
      break;
    case "a":
      var kick = new Audio("./sounds/kick-bass.mp3");
      kick.play();
      break;
    case "s":
      var snare = new Audio("./sounds/snare.mp3");
      snare.play();
      break;
    case "d":
      var tom = new Audio("./sounds/tom-1.mp3");
      tom.play();
      break;
    case "j":
      var snare = new Audio("./sounds/tom-2.mp3");
      snare.play();
      break;
    case "k":
      var crash = new Audio("./sounds/tom-3.mp3");
      crash.play();
      break;
    case "l":
      var kick = new Audio("./sounds/tom-3.mp3");
      kick.play();
      break;
    default:
      console.log(buttonInnerHTML);
  }
}
// function that animates the button
function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}





