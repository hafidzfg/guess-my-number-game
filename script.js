'use strict';

let guessNumber = document.querySelector('.guess');
let btnCheck = document.querySelector('.btn.check');
let score = document.querySelector('.score');
let messageResult = document.querySelector('.message');
let highScore = document.querySelector('.highscore');
let numberDisplay = document.querySelector('.number');
let checkWinner = (btnCheck.onclick = function checkNumber() {
  let randomNumber = Math.floor(Math.random() * 20 + 1);
  numberDisplay.innerHTML = randomNumber;
  if (guessNumber.value == randomNumber) {
    messageResult.innerText = '🎉Correct!';
    highScore.innerText = guessNumber.value;
    document.body.style.backgroundColor = 'seagreen';
  } else if (guessNumber.value > 20 || guessNumber.value < 1) {
    messageResult.innerText = '❌ No no no, guess between 1 - 20 only!';
  } else if (guessNumber.value != randomNumber) {
    messageResult.innerText = '🙅‍♀️ Nope, try again!';
    score.innerText = score.innerText - 1;
    document.body.style.backgroundColor = 'hotpink';
    if (score.innerText === '0') {
      messageResult.innerText = "☠️ Game Over! Please reload or click 'Again!'";
      guessNumber.disabled = true;
      btnCheck.disabled = true;
      document.body.style.backgroundColor = 'maroon';
    }
  }
});
document.querySelector('.btn.again').addEventListener('click', function () {
  location.reload();
  return false;
});
