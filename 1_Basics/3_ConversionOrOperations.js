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

