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
// const score = 420

// if(score > 150) {
//     const power = "fly"
//     console.log(`User power: ${power}`); //or ye scope k andar h or inka alag scope count hota h
//     // agr yhan const ki jagah 'var' which is bad pratice 
//     // but ye var scope k bhara bhi access hota
// }

// console.log(`User power: ${power}`); //ye scope bhara h tu iska kamm khatam



// shortHand Notation aka Implicit scope(bad practice)
// const balance = 1000

// if (balance > 150) console.log("test"), console.log("test2");



// NESTING Conditions in Logic-Flow

// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");
// } else if (balance < 900) {
//     console.log("less than 750");
// } else {
//     console.log("less than 1200");
// }


const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard) {
    console.log("Allow to order food :-) ");
    
}








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

 # Implicit Scope-> in this all code written in line & mandatory to end with ';' and multiple values can be written by seprarting ','.

 # 

*/

