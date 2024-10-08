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










/* NOtes on Truthy & Falsy values

 1. Falsy Values in JS:
 #  false, 0, -0, BigInt 0n, "", null, undefined, NaN

 2. Truthy Values in JS
 #  "0", 'false', " ", [], {}, function(){}


*/
