// Advanced Interview Question can we get pi=3.14 value as 3 or 4. (possible or not)
// It is object realted problem :-)


const descripter = Object.getOwnPropertyDescriptor(Math, "PI")

// console.log(descripter)


// console.log(Math.PI);
// Math.PI = 5 //overwrite karne k bad bhi constant h as 3.14
// console.log(Math.PI);



//using factory function i.e, 'create'
const chai = {
    name: 'ginger-elachi chai',
    price: 150,
    isAvailable: true,


    orderChai: function() {
        console.log("chai nhi bani mtlb code fat gaya h :-( ")
    }

}

// console.log(Object.getOwnPropertyDescriptor(chai)); //gives undefined
// bcz chai is Object & we want property descriptor i.e, name, price, "Pi", etc
console.log(Object.getOwnPropertyDescriptor(chai, 'name')); // so define property too


// JS provide limeted control to teas ur
// own code to declare ur own properies
Object.defineProperty(chai, 'name', {
    // writable: false,
    enumerable: false // agr mein ab iss true kar don tu iteration hoga if writeable is commented/false
    // i.e, iteration disabled
})

// now check what desprictor gives after changing
console.log(Object.getOwnPropertyDescriptor(chai, "name"));



// try looping 
for (let [key, value] of Object.entries(chai)) {
    // handling faati huyi chai mtlb fata hua code 
    if (typeof value !== 'function') {
        console.log(`${key} : ${value}`);    
    }


}




// by default object iterable nhi h tu
// tu iterate krne k liye ' Object.entries() ' ka use krna hota h
// or is k undar object define karna hota h.






/*// Now Soln for the asked query in Interview

// First, get the property descriptor of Math.PI
const descriptor2 = Object.getOwnPropertyDescriptor(Math, 'PI');

// Then, redefine the property to make it writable
Object.defineProperty(Math, 'PI', { writable: true, configurable: true });

// Now you can change its value
Math.PI = 3;
console.log(Math.PI); // 3

// Restore the original property descriptor to protect it again
Object.defineProperty(Math, 'PI', descriptor2);
console.log(Math.PI); // 3.141592653589793

*/