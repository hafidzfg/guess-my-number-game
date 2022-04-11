'use strict';

let guessNumber = document.querySelector('.guess');
let btnCheck = document.querySelector('.btn.check');
let score = document.querySelector('.score');
let numberDisplay = document.querySelector('.number');
let randomNumber;
let hs = document.querySelector('.highscore');

//change display message function
const changeMessage = function (message) {
  document.querySelector('.message').innerText = message;
};

//Change high score function
let highScore = function (score) {
  hs.innerText = score;
};
// Change background color
const bgColor = function (color) {
  document.body.style.backgroundColor = color;
};
// enable or disable button and input
const stateDisplay = function (state) {
  guessNumber.disabled = state;
  btnCheck.disabled = state;
};
const randomize = function () {
  return Math.floor(Math.random() * 20 + 1);
};

randomNumber = randomize();
//Check the guessed number on 'Check' button click
let checkWinner = (btnCheck.onclick = function checkNumber() {
  //Check if guess number is correct
  if (guessNumber.value == randomNumber) {
    changeMessage('🎉 Correct!');
    bgColor('seagreen');
    numberDisplay.innerHTML = randomNumber;
    stateDisplay(true);
    // Update high score
    if (guessNumber.value > hs.innerText) {
      highScore(guessNumber.value);
    }
  }
  //When guess number is outside 1-20
  else if (guessNumber.value > 20 || guessNumber.value < 1) {
    changeMessage('❌ No no no, guess between 1 - 20 only!');
  }
  //When guess number is incorrect
  else if (guessNumber.value != randomNumber) {
    score.innerText--;
    bgColor('hotpink');
    if (score.innerText === '0') {
      changeMessage('☠️ Game Over!');
      stateDisplay(true);
      bgColor('maroon');
    } else if (guessNumber.value > randomNumber) {
      changeMessage('🙅‍♀️ You guessed too high!');
    } else if (guessNumber.value < randomNumber) {
      changeMessage('🙅 You guessed too low!');
    }
  }
});
//'Again!' button logic
document.querySelector('.btn.again').addEventListener('click', function () {
  bgColor('#222');
  changeMessage('Take a guess!');
  stateDisplay(false);
  numberDisplay.innerHTML = '?';
  randomNumber = randomize();
});
