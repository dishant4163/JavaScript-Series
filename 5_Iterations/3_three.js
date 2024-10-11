// for of Loop in JS



/* //common scenior in JS, Arrays having Strings & Object in it.

// ["", "", ""] //array having multiple strings init.
// [{}, {}, {}] //array having multiple object init.
*/


const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    // console.log(num);
}


const greetings = "Hello Ji!"

for (const greet of greetings) {
    // console.log(`Each char is ${greet}`);
}



// MAPS 

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('UK', "United Kingdom")
map.set('IN', "India")


// console.log(map);


for (const [key, value] of map) { // array de-structruing 
    //console.log(key, ':- ', value);
}



// On Object
const myObj = {
    game1: 'NFS',
    game2: 'Tekken 3'
}



// for (const [key, value] of myObj) {
//     console.log(key, ':- ', value);
// }






/* NOTES

 1. These type of loops in JS is Array & Object Specific.

 2. In JS, Maps are same as Array which have Uniques Values init.

 3. Map is a Object itself. And hold Keys-Value pairs.

 4. Same method cannot be used on Object as on Maps for 'forof' loop.

 5. For objects have different & another method to iterate using loops.

*/

