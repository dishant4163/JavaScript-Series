// forof Loop on Object



const myObject = {
    js: 'javascript',
    cpp: 'c++',
    rb: 'ruby',
    swift: 'swift by apple'
}

for (const key in myObject) {
    // console.log(key); //only print key info
    // console.log(myObject[key]); //only print values info
    // console.log(`${key} shortcut is for ${myObject[key]}`); //print both key & values
}



// forin on arrays
const programming = ["js", "rb", "cpp", "java", "py"]

for (const key in programming) {
    // console.log(key); // only print arrays keys
    // console.log(programming[key]); //only print arrays values 
}





// MAPS 

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('UK', "United Kingdom")
// map.set('IN', "India")

// for (const key in map) {
//     console.log(key);
// }








/*

 1. Arrays ki aayegi agar hum forin loop ka use karenge tu.
 2. Aur arrays key start hoti hai 0 se till the last value in array.

 3. Map is not iterateable on forin there is another way or condition for iterations on map.
*/
