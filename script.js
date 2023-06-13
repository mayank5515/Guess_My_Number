'use strict';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = '🥳 Correct Answer';
const startGuessingMessage = document.querySelector('.message');
const scoreTwnty = document.querySelector('.score');
const questionMark = document.querySelector('.number');
const checkBtn = document.querySelector('.check');
const againBtn = document.querySelector('.again');
const inputGuessBox = document.querySelector('.guess');
// const scoreText = document.querySelector('.score');
//HIGHSCORE TEXT ELEMENT FROM UI
let highScoreText = document.querySelector('.highscore');
//GENERATING RANDOM NUM
let randomNum = Math.trunc(Math.random() * 100) + 1; //CHANGED LIMIT ?
console.log(`random num is ${randomNum}`);
//CHANCES INITIALLY
let score = 20; //CHANGING SCORE?
//HIGHSCORE INITIALLY
let highscore = 0;

const gameLogic = function () {
  let guess = Number(inputGuessBox.value);

  // when there is no number
  if (!guess) {
    startGuessingMessage.textContent = '🚫 No Number';
  }
  //when we win the game
  else if (guess === randomNum) {
    startGuessingMessage.textContent = '🥳 Correct Answer';
    questionMark.textContent = guess;
    //UPDATE HIGHSCORE IF SCORE IS GREATER THAN HIGHSCORE
    if (score > highscore) {
      highScoreText.textContent = score;
      highscore = score;
    }
    //changing styles
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
  }
  //when guess is wrong
  else if (guess !== randomNum) {
    if (score > 1) {
      const difference = randomNum - guess;
      const absDifference = Math.abs(randomNum - guess);
      // console.log(`absolute differene ${absDifference}`);
      // console.log(`difference ${difference}`);
      if (difference < 0 && absDifference < 5) {
        startGuessingMessage.textContent = '😶 High but close..';
        score--;
        scoreTwnty.textContent = score;
      } else if (difference > 0 && absDifference < 5) {
        startGuessingMessage.textContent = '😶‍🌫️ Low but close..';
        score--;
        scoreTwnty.textContent = score;
      } else {
        startGuessingMessage.textContent =
          guess > randomNum ? '📈 Too High' : '📉 Too Low';
        score--;
        scoreTwnty.textContent = score;
      }
    }
    //if score becomes 0, we lose the game
    else {
      startGuessingMessage.textContent = '💥 You Lost The Game!';
      document.querySelector('body').style.backgroundColor = 'red';
      scoreTwnty.textContent = 0;

      //
      const title = document.querySelector('h1');
      title.textContent = 'Correct Answer Was';
      questionMark.textContent = guess;

      // console.log(title);
    }
  }
};

const againGameLogic = function () {
  questionMark.textContent = '?'; //question mark
  document.querySelector('body').style.backgroundColor = '#222'; //changing bg color
  questionMark.style.width = '15rem'; //changing width
  startGuessingMessage.textContent = 'Start Guessing...'; //changing message content
  inputGuessBox.value = ''; //emptying the input field
  score = 20; //CHANGED SCORE ?
  scoreTwnty.textContent = 20; //CHANGED SCORE?
  randomNum = Math.trunc(Math.random() * 100) + 1; //CHANGED LIMIT ?
  console.log(`new random num is ${randomNum}`);

  //
};

//EVENT LISTENERS
checkBtn.addEventListener('click', gameLogic);
document.addEventListener('keypress', e => {
  // console.log(e.key);
  if (e.key === 'Enter') {
    // gameLogic;
    gameLogic();
    // console.log(e.key);
  }
  if (e.key === 'a') {
    againGameLogic();
  }
});
///////////////////////////////////////
// Coding Challenge #1

/* 
Implement a game rest functionality, so that the player can make a new guess! Here is how:

1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the score and secretNumber variables
3. Restore the initial conditions of the message, number, score and guess input field
4. Also restore the original background color (#222) and number width (15rem)

GOOD LUCK 😀
*/
//AGAIN -CHANGES NEW RANDOM NUM, SCORE, CLEARING INPUT FIELD, TEXTS AND OTHERS
againBtn.addEventListener('click', againGameLogic);
