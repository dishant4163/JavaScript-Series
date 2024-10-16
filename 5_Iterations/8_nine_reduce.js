// Reduce in JS

const myNums = [1, 2, 3]

// 4(acc) + 1 + 2 + 3 = 6
const myTotal = myNums.reduce(function (accumulator, currentvalue) {
    console.log(`acc: ${accumulator} & curVal: ${currentvalue}`);
    return accumulator + currentvalue
}, 4) // 0 is given as accumulator value

console.log(myTotal); //output: 10











/* NOTES

 1. reduce is also callbackfn type in js

 2. it have 2 variable, i): accumulator, ii): currentvalue

*/
