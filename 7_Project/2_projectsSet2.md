// Projects related Events & Time Function


# Projects related to DOM + Events & Time

## Project Link -> [click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Projects Code Solutions

## Project-5 Soln

```javascript

```

## Project-6 Soln Unlimited ♾️ Colors 🎨🎨 🧠

```javascript
// generating a random color

const randomColor = function () {
  const hex = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    //color ko constantly add karni h
    //aur hex mein random color ki position dena h
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color; //return generated randomcolor
};

let intervalId;
const startChangingColor = function () {
  //doing saftey check
  if(!intervalId) {
    intervalId = setInterval(changeBgColor, 1000);
  }

  function changeBgColor() {
    document.body.style.backgroundColor = randomColor();
  }
};

const stopChangingColor = function () {
  clearInterval(intervalId);
  intervalId = null;
};

document.querySelector('#start').addEventListener('click', startChangingColor);

document.querySelector('#stop').addEventListener('click', stopChangingColor);

```


