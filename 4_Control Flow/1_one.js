// Control Flow in JS | (How does javascript execute code + call stack) | control-flow aka logic-flow


// if

const isUserLoggedIn = true
const temperature = 40

// if (isUserLoggedIn) {
//     console.log("user loggedIn");
// }

// if (temperature === 40) {
//     console.log("Less than 50");
// }  else {
//     console.log("temperature is greter than 50");
// }


// Quite Interesting thing in js & it is related to scope/{ }
const score = 420

if(score > 150) {
    const power = "fly"
    console.log(`User power: ${power}`); //or ye scope k andar h or inka alag scope count hota h
    // agr yhan const ki jagah 'var' which is bad pratice 
    // but ye var scope k bhara bhi access hota
}

console.log(`User power: ${power}`); //ye scope bhara h tu iska kamm khatam










/* JS Comparison Operators

== 	   equal to
===    equal value and equal type //aka konw as strcit check/equal bcz it also check the data type
!= 	   not equal
!==    not equal value or not equal type //aka strict check in Anti-Pattern
> 	   greater than
< 	   less than
>= 	   greater than or equal to
<=     less than or equal to
? 	   ternary operator

*/


/* Control/Logic Flow NOTES:-



*/

