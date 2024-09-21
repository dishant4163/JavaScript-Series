// Number and Maths in JS 

const marks = 100
// console.log(marks);

// ' new ' keyword in JavaScript is used to create an instance of an object
const balance = new Number(150);
// console.log(balance);
// convert number into string also checking size
// console.log(balance.toString().length);
//' toFixed() ' method in JS is used to specify the number of digits 
// to appear after the decimal point.
// console.log(balance.toFixed(2)); //give decimal point upto 2 decimal pts.


const otherNum = 129.8667

// console.log(otherNum.toPrecision(4));
/* NOTE:- About toPrecision
-> Number of significant digits. Must be in the range 1 - 21, inclusive.

quite confusing and interesting to use toPrecision
*/


const hundreds = 1000000
// console.log(hundreds); //comparing 

//'toLocaleString()' convert no. into string
// i.e, 10000 to 10,000
// console.log(typeof hundreds.toLocaleString());
// console.log(hundreds.toLocaleString('en-US')); 
// gives acc. to USA standrad
// console.log(hundreds.toLocaleString('en-IN')); 
// gives acc. to Indian Standard/number system




// +++++++++******** Maths *********+++++++++++


// console.log(Math);
// console.log(Math.abs(-5));
// console.log(Math.round(2.9));
// console.log(Math.ceil(8.3));
// console.log(Math.floor(6.9));
// console.log(Math.min(11, 24, 37));
// console.log(Math.max(16, 8, 11));



console.log(Math.random());
// adding +1 to avoid Zero Values
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);



const min = 10
const max = 20


// Point to note line no. - 60-65
console.log(Math.floor(Math.random() * (max - min + 1)) + min);


