// Projects related Events & Time Function


# Projects related to DOM + Events & Time

## Project Link -> [click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Projects Code Solutions

## Project-5 Soln Keyboard Check 👻👻

```javascript

//Press any key on board & Check the Magick(magic)
const insert = document.getElementById('insert');

window.addEventListener('keydown', (e) => {
  insert.innerHTML = `
    <div class='color'>
        <table>
        <tr>
            <th>Key</th>
            <th>KeyCode</th>
            <th>Code</th>
        </tr>
        <tr>
            <td>${e.key === ' ' ? 'Space' : e.key}</td>
            <td>${e.keyCode}</td>
            <td>${e.code}</td>
        </tr>
        </table>
    </div>
    `;
});

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
    //since intervalId is getting overwrite whenever it calls
    intervalId = null;//so for that dereference or flushout from memory
};

document.querySelector('#start').addEventListener('click', startChangingColor);

document.querySelector('#stop').addEventListener('click', stopChangingColor);

```

