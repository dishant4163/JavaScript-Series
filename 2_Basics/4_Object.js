// ********** Objects(& array) in JS Part-2 **********


// const tinderUser = new Object()

const tinderUser = {}

tinderUser.id = "123xyzj"
tinderUser.name = "Name"
tinderUser.isLoggedIn = false

console.log(tinderUser);



const regularUser = {
    email: "undefine@gmail.com",
    fullName: {
        // object k undar object/ nested objects
        userfullName: {
            firstName: "dishant",
            lastName: "pal",
        }
    }
}

console.log(regularUser.fullName.userfullName.firstName);




// Merging of Objects
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj3 = {5: "e", 6: "f"}

const obj4 = { obj1, obj2} // bad practice to use 
// bcz object k object as data lele ga 


const obj5 = Object.assign({}, obj1, obj2, obj3) //good practice to use this syntax
// adding empty '{ }' is good practice due to more value in original object
console.log(obj5);




//but 'assign' is used less so more good practice to use is ' Spread Operator' to merging objects
const obj6 = {...obj1, ...obj2, ...obj3}
console.log(obj6);


/* Same things Happens when data/Values comes from the DataBases
 DataBases se array-of-Objects aate h jada tar which is given below
*/
const users = [
    {
        id: 1,
        email: "eg1@gamil.com"
    },
    {
        id: 1,
        email: "eg1@gamil.com"
    },
    {
        id: 1,
        email: "eg1@gamil.com"
    }
]

// how to print this
users[1].email
console.log(tinderUser);

// Diff. Methods to Fectch Keys-Values form Objects
console.log(Object.keys(tinderUser)); // Output DataType is Array
console.log(Object.values(tinderUser)); // Output DataType is Array

// Another method to fectch both Keys-Values but it gives array k undar array as output
console.log(Object.entries(tinderUser));


console.log(tinderUser.hasOwnProperty('isLoggedIn')); // Result types is Boolean








/* Objects-2 Notes in JS

***Remember Objects Stores dat in Key-Value Pair

 1. Nested of objects is possible

 2. ' ? ', use to  check value is present or not and it is known as ' OPtinal Chaining / ? '.

 3. Assign is used to assign/merge objects

 4.1 Adding empty { }, while merging the objects
 4.2 More Good practice to use 'Spread OPerator' to merging the objects same as done in Arrays

5. "hasOwnProperty" is questioner property to ask or check the values is present or not & result is given in Boolean

*/
