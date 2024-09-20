// ******DataTypes_Summary (Lec: 1 to 4)*******


/*// Primitive Data Types:-
1. 	Call/Compared by Value
2.  Stored directly in the stack
3.  No methods (except for wrapper objects)
4.  Immutable (cannot be changed)
5.  typeof operator returns specific type
6.  Performance Generally faster due to simplicity
*/

// 7 Primitive Data Types in JS: String, Number, Boolean, null, undefined, Symbol, BigInt(for scitenfic values)

const score = 100 //Number
const scoreValue = 100.5 //Number

const isLoggedIn = false //Boolean
const outsideTemperature = null //object
let userEmail; //undefined



// Declaring/Define ' Symbol ' in JS

const id = Symbol('123')
const anotherId = Symbol('123')
// Checks both Symbol with different Id's Value & datatype Via Strict Check/Equality ( === )
console.log(id === anotherId); //return Boolean


const bigNumber = 3456543576654356754 //number
const bigNumber2 = 3456543576654356754n //use 'n' in last of the number if it is a integer
console.log(typeof bigNumber); //return BigInt








/*// Reference/Non-Primitive Data Types:-
1.  Call/Compared by Reference
2.  Stored as References in the Heap
3.  Can have methods and properties
4.  Mutable (can be modified)
5.  typeof returns "object" for many types
6.  Performance Can be slower due to reference handling
*/

// 3 Basic Non-Primitive Data Types in JS: Array, Objects, Functions 


// eg., of Arrays
const heros = ["ironMan", "Thor", "Hulk"];
console.log(heros); //return type Object


// in Curly Braces Objects are define in Key-Value Pair in JS
// here Storing Object in variable or can strore direct in Curly Braces
let heroObj = {
    name: "Thor",
    age: 1500,
}
console.log(typeof heroObj); //return type Object





// eg., of Functions in JS (basic)
//declare in vari
const myFunction = function(){
    console.log("Welcome to the JavaScript-Series :-)");
}

// console.log(typeof myFunction); //iska return type Function But it is known as object-Function





// https://262.ecma-international.org/5.1/#sec-11.4.3  






// +++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack & Heap memory in javascript

/* NOTES:- 
  # in JS we have 2 types of Memory, i). Stack, ii). Heap
  # Primitive DataType usage STACK(in stack we get copy of variable)
  # Non-Primitive DataType usage HEAP(in heap, we get reference of Original value(jo bhi change hoga wo original mein hoga) )
*/

let myName = "DishantPal"

let anotherName = myName
anotherName = "JavaScript" //change in copy(stack)

console.log(myName);
console.log(anotherName);




//get copy in stack & goes into Heap as reference from stack
// userOne variable goes in stack then give reference
let userOne = {
    email: "user1@gmail.com",
    upi: "user1@ybl"
}

let userTwo  = userOne

userTwo.email = "user2@hotmail.com"

console.log(userOne.email);
console.log(userTwo.email);

