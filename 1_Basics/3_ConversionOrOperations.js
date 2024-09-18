let score = 75

console.log(typeof score); //Return number
//another way to check type as Method
console.log(typeof (score)); //Return number



let score1 = "80"
console.log(typeof score1); //Return String

let valueInNumber = Number(score1)
console.log(typeof valueInNumber); //Return number
console.log(valueInNumber); // return 80




let score2 = "45abc"

let valueInNumber2 = Number(score2)
console.log(typeof valueInNumber2); //return Number
console.log(valueInNumber2); // return NaN(Not a Number) of "45abc" & it is a special type



let num = null

console.log(typeof (num)) //return Object
let valueInNum = Number(num)
console.log(typeof valueInNum); // return Number
console.log(valueInNum); // return 0




let num2 = undefined

console.log(typeof num2); //return Undefined

let valueInNum2 = Number(num2)
console.log(typeof valueInNum2); //return Number
console.log(valueInNum2) //return NaN




let num3 = true

console.log(typeof (num3)) //return Boolean

let valueInNum3 = Number(num3)
console.log(typeof valueInNum3); //return Number
console.log(valueInNum3) //return 1 for true 0 for false




let score3 = "Dishant"

console.log(typeof score3); //return String
console.log(typeof (score3)); //return String

let valueInNumber3 = Number(score3)
console.log(typeof valueInNumber3); //return Number
console.log(valueInNumber3); //return NaN







// Points to Ponder

// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0



let isLoggedIn = 1

let booleanIsLogged = Boolean(isLoggedIn)
//convert 1 to true bool value
console.log(booleanIsLogged); //return True




let isLoggedIn2 = ""

let booleanIsLogged2 = Boolean(isLoggedIn2)
//convert empty string into bool value but 
//empty string with space init gives true bool value
console.log(booleanIsLogged2); //return False



//Points to Ponder

// 1 => true; 0 => false
// "" => false
// "hitesh" => true




let someString = 45

let stringNumber = String(someString)
console.log(stringNumber); //return 45
console.log(typeof stringNumber); //return string






// *********** Operations *************

let value = 3
let negValue = -value //assign -ve assign 
console.log(value); // return +ve value ka 3
console.log(negValue); //return -ve value ka -3

console.log(2+2); // doing Addition
console.log(2-2); // doing substraction
console.log(2*2); // doing Multiplication

// ** this double asteric means raise to power
console.log(2**2); // 2 raise to power 3
console.log(2/3); // for Divice
console.log(2%3); // for getting Remainder



let str1 = "Dishant"
let str2 = "Pal"
// Concatenation of 2 String
let str3 = str1 + str2 
console.log("Concatenation of 2 String is: "+ str3);




// Some Tricky Tricks in Opeartions

console.log("1" + 2)
/* Here's what happens:
  1. The first operand is the string "1".
  2. The second operand is the number 2.
  3. Since one of the operands is a string, JavaScript converts the number 2 into a string as well.
  4. It then concatenates the two strings: "1" + "2" results in "12".

// NOTE-: If you want to perform arithmetic addition instead of string concatenation, you can convert the string to a number using Number() or parseInt():


console.log(Number("1") + 2); // Outputs: 3
*/

console.log(1 + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2")

console.log( (3 + 4) * 5 % 3); //return 2 as answer but bad practice for writing confusion code




console.log(true); //return true
console.log(+true); //return 1, bcz true get converted
console.log(+""); //return 0, empty string get converted



let no1, no2, no3

no1 = no2 = no3 = 2 + 2


let gameCounter = 100
++gameCounter
console.log(gameCounter);




// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion 


