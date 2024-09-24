// Arrays

const myArr = [0, 1, 2, 3, 4, 5]
// in JS, Arrays are define using square brackets ' [ ] '
const myHeros = ["ironMan", "Thor", "Venom"]

// Another way to represent Array using new keyword
const myArr2 = new Array(1, 2, 3, 4, 6)
console.log(myArr[2]);




// Array methods

myArr.push(8)
myArr.push(11)
myArr.pop();


//this unshift add element at start of array 
myArr.unshift(15)
//same as pop but it removed the start element
myArr.shift(); 

console.log(myArr.includes(3));//includes gives ans is bool
console.log(myArr.indexOf(7));



const newArr = myArr.join()



console.log(myArr);
console.log(typeof myArr);
console.log(newArr);
console.log(typeof newArr);




// slice, splice methods

console.log("A ", myArr);

const mynewAr1 = myArr.slice(1, 3)


console.log(mynewAr1);
console.log("B ", myArr);



const mynewAr2 = myArr.splice(1, 3)
console.log(mynewAr2);


console.log("C ", myArr);
console.log(mynewAr2);









/* Notes:-
 # In JS, Array can have mix data types like number, strings etc.
 # Using unshift is bad practice
 # In JS, includes is questioner method which gives answer in boolean form
 # Join operation in Array- it add all elements of an array into string & its typeof is String

 -> Slice:- original array remains same
 # it include strating, but excludes last part
 -> Splice:- original array get manipulates i.e remove the portions
*/

