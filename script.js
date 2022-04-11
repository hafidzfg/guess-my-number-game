'use strict';

let guessNumber = document.querySelector('.guess');
let btnCheck = document.querySelector('.btn.check');
let score = document.querySelector('.score');
let messageResult = document.querySelector('.message');
let highScore = document.querySelector('.highscore');
let numberDisplay = document.querySelector('.number');
let randomNumber = Math.floor(Math.random() * 20 + 1);

let checkWinner = (btnCheck.onclick = function checkNumber() {
  if (guessNumber.value == randomNumber) {
    messageResult.innerText = '🎉Correct!';
    document.body.style.backgroundColor = 'seagreen';
    numberDisplay.innerHTML = randomNumber;
    guessNumber.disabled = true;
    btnCheck.disabled = true;
    if (guessNumber.value > highScore.innerText) {
      highScore.innerText = guessNumber.value;
    }
  } else if (guessNumber.value > 20 || guessNumber.value < 1) {
    messageResult.innerText = '❌ No no no, guess between 1 - 20 only!';
  } else if (guessNumber.value != randomNumber) {
    if (guessNumber.value > randomNumber) {
      messageResult.innerText = '🙅‍♀️ You guessed too high!';
      score.innerText = score.innerText - 1;
      document.body.style.backgroundColor = 'hotpink';
    } else if (guessNumber.value < randomNumber) {
      messageResult.innerText = '🙅 You guessed too low!';
      score.innerText = score.innerText - 1;
      document.body.style.backgroundColor = 'hotpink';
    } else if (score.innerText === '0') {
      messageResult.innerText = '☠️ Game Over!';
      guessNumber.disabled = true;
      btnCheck.disabled = true;
      document.body.style.backgroundColor = 'maroon';
    }
  }
});
document.querySelector('.btn.again').addEventListener('click', function () {
  document.body.style.backgroundColor = '#222';
  messageResult.innerText = 'Take a guess!';
  guessNumber.disabled = false;
  btnCheck.disabled = false;
  numberDisplay.innerHTML = '?';
  randomNumber;
});
