// Reduce in JS

const myNums = [1, 2, 3]

// 0(acc) + 1 + 2 + 3 = 6
// const myTotal = myNums.reduce(function (accumulator, currentvalue) {
//     console.log(`acc: ${accumulator} & curVal: ${currentvalue}`);
//     return accumulator + currentvalue
// }, 0) // 0 is given as accumulator value



// using with arrow function
const myTotal = myNums.reduce( (acc, curval) => acc + curval, 3) // 3 is given as accumulator value


// console.log(myTotal); //output: 6 other outpur: 9





//shopping kart problem with handle by 'reduce'

const shoppingKart = [
    {
        itemname: "js course",
        price: 1999
    },
    {
        itemname: "py course",
        price: 1499
    },
    {
        itemname: "dsa course",
        price: 9999
    },
    {
        itemname: "web-dev course",
        price: 19999
    }
]


const priceToPay = shoppingKart.reduce( (acc, curVal) => acc + curVal, 0)


console.log(priceToPay);













/* NOTES

 1. reduce is also callbackfn type in js

 2. it have 2 variable, i): accumulator, ii): currentvalue

 3. ' ,/comma ' is neccessary for assigning accumulator value.



*/
