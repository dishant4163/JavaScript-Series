// forEach loop in JS


const coding = ["js", "ruby", "java", "python", "cpp"]

// Higer Order Array loops

// types of way for callbackfn

// coding.forEach( function (val) { //here using function(unname function)
//     console.log(val);
// } )



//here using arrow function
// coding.forEach( (item) => {
//     console.log(item);
// })



//function with name deaclartion
// function printMe(items) {
//     console.log(items);
// }

// coding.forEach(printMe) //here we were giving functions as reference and not executing it & rest print it will do by itself.




// coding.forEach( (item, index, arr) => {
//     console.log(item, index, arr);
    
// })




// Array holding multiple objects
const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    }
]


myCoding.forEach( (item) => {
    console.log(item.languageName);
})










/*
1. callbackfn:-> this function didn't have name 

 2. Arrow function can have mupltiple parameters and values to hold & their acces too.

 3. Array can hold mupltiple object & which can acces via foreach loop
*/

