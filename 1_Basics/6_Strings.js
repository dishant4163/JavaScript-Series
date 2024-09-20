// Strings(Primitive) in JS


const name = "dishant"
const uid = 4163

// Outdated syntax for concatenation of string
// console.log(name + uid + " Value");



// modern way syntax
//uses backtick (` `), it uses for STRING Interpolation

// console.log(`Hello my Name is ${name} and my uid is ${uid}`);


const gameName = new String('dishant-dp-com')

// console.log(gameName[0]); //return 0 index from object
// console.log(gameName.__proto__); //return {} <-empty object


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('w'));



const newString = gameName.substring(0, 4); // substring(start no, end no)
console.log(newString);


// in slice we can use -ve values
const anotherString = gameName.slice(-5, 3);
console.log(anotherString);

// NOTE:- substring didn't obey -ve values



// Trim & Replace method
const newStringOne = "    dishant     "
console.log(newStringOne);
console.log(newStringOne.trim()); //trim remove extra space


const url = "https://github.com/dishant%204163"

console.log(url);
console.log(url.replace('%20', '-')); //replace %20 with '-'

console.log(url.includes('dishant')); //if present return true
console.log(url.includes('dishantpal')); //return false


console.log(gameName.split('-'));




