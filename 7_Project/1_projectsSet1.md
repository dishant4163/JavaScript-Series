// Projects related to DOM

# Projects related to DOM

## Project Link -> [click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Projects Code Solutions

## Project-1 Soln Color Changer 🔥

```javascript
console.log("dishant")

const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    // e yhan par event-ke-object ka name h
    console.log(e);
    console.log(e.target);
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
  });
});

```



## Project-2 Soln BMI Generator ☕️

```javascript
const form = document.querySelector('form');
// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

    if(bmi < 18.5) {
      results.innerHTML = `${bmi}, which is Under Weight`;
    } 
    else if(bmi >= 18.5 && bmi <= 24.9) {
      results.innerHTML = `${bmi}, which is Normal Weight`;
    }
    else {

    // show the result
    results.innerHTML = `${bmi}, which is Over Weight`;
    }
  }
});

```



## Project-3 Soln Digital Clock 🕒

```javascript
const clock = document.getElementById('clock'); //another method

//const clock = document.querySelector('#clock')

setInterval(function () {
  let date = new Date();

  //humhe console mein time run nhi kar h 
  //console.log(date.toLocaleTimeString());

  //humhe document update karna tha har-seconds mein time run karna h
  clock.innerHTML = date.toLocaleTimeString();
}, 1000); //this syntax pt. to be noted, 1000 in miliseconds

```



## Project-4 Soln Guess the Number🤔

```javascript

//generating random number
let randomNumber = parseInt(Math.random() * 100 + 1);
// +1 for not getting zero
// parseInt => for not getting decimal values

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remainingSlot = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    //prevent values to get push on server from form bcz
    //we need to be used here
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess); //passing values to next
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('Plz enter a valid number');
  } else if (guess < 1) {
    alert('Plz enter a number more than 1');
  } else if (guess > 100) {
    alert('Plz enter a number less than 100');
  } else {
    //push guessed number in array
    prevGuess.push(guess);
    //if gameis over bcz only 10 attempts to do
    if (numGuess === 11) {
      cleanUpGuess(guess);
      displayMessage(`Game Over :-) Random number was ${randomNumber}`);
      endGame();
    } else {
      cleanUpGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You guessed it right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is Tooo Low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is Tooo High`);
  }
}

function cleanUpGuess(guess) {
  userInput.value = ''; //cleanUp vaues
  guessSlot.innerHTML += `${guess}  `; //adding values
  numGuess++; //moves to next value
  //find & changing remaining values
  remainingSlot.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = ''; //clear the input fields/values

  //user cannot add more values while ending game
  userInput.setAttribute('disabled', ''); //diabled works in key-value pair for ending game
  p.classList.add('button'); //start bttn
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startOver.appendChild(p); //adding new child & para in gloabla scope
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = []; //previous values get reset
    numGuess = 1;
    guessSlot.innerHTML = '';
    remainingSlot.innerHTML = `${11 - numGuess} `;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);

    playGame = true;
  });
}


```

