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

```

