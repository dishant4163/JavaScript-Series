//Basic of Comparision in JS


// Output of all below code in Boolean form 
console.log(2 > 1);
console.log(2 >= 1);
console.log(2 < 1);
console.log(2 == 2);
console.log(2 != 1);


//Note:- Problem B/w when not comparing same DataType
console.log("2" > 1); // string > number
console.log("02" > 1)


console.log(null > 0);
console.log(null >= 0);
console.log(null == 0);
console.log(null < 0);
console.log(null <= 0);

// Point to Ponder
// Reason is that an Equality Check == & comparisions >, <, >=, <= works differently

// Comparisions Convert null to a Number, treating it as 0.
// i.e., (18) null >= 0 is true & (17) null > 0 is false 




// same case Happens with 'undefined' 
// but it always gives false as comparision answer
console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

console.log(undefined >= 0);
console.log(undefined <= 0);



// Case of triple equality check ' === ' or we call 'Strict Check'
console.log("2" === 2);




// Note such of Comparision that mention Above