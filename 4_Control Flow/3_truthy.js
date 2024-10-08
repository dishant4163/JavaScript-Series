// truthy & falsy in JS

const userEmail = [] //"user@email.ai"

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}


// falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " "/str with space, []/empt arr, {}/empty obj, function(){}/this is called empty function




// Empty Array check via trythy & falsy
// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }




// Empty Object check via trythy & falsy
const emptyObj = {}

if (Object.keys(emptyObj).length === 0) { //obj works as key-value pairs
    console.log("Object is empty");
}





// **** Nullish Coalescing Operator in JS *****

// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 18 ?? 27

console.log(val1);



// Terniary Operator

// conditionIsToBeCheck ? true : false

const teaPrice = 150
teaPrice <= 100 ? console.log("less than 100") : console.log("more than 100");










/* NOtes on Truthy & Falsy values

 1. Falsy Values in JS:
 #  false, 0, -0, BigInt 0n, "", null, undefined, NaN

 2. Truthy Values in JS
 #  "0", 'false', " ", [], {}, function(){}


  3. In inspect console (for general basic)
 # false == 0 then   O/p is: true
 # false == '' then  O/p is: true
 # 0 == ''  then     O/p is: true


  4. Nullish Coalescing Operator (??): null undefined
 # It have 2 keywords:- i) null, ii) undefined


   5.  NOTE*****
 # Terniary Operator(?) & Nullish Coalescing Operator(??) both are different things

*/
