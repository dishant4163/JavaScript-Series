// ********** Objects(& array) in JS Part-1 **********

// singleton (comimg soon...)
Object.create //declare object through constructor method or issme 'singleton' banega





// object literals
//declare objects in Literals


const mySym = Symbol("key1") //declaring symbol in objects

const JsUser = {
    //objects me data 'Keys & Values' me define hoti h
    name: "Dishant",
    "Full Name": "Dishant Pal",
    [mySym]: "mykey1",//declare as symbol using []
    uid: 4163,
    location: "Mohali",
    email: "user007@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Mon", "Fri"] //objects k undar hum array, objects etc kuch bhi value de sakthe h
}


//how to Access Objects in diffrent ways
console.log(JsUser.email); // using ' dot ' 
console.log(JsUser["email"]); // Notes 3 pt, using square-notation '[]' to access object as string

console.log(JsUser["Full Name"]); //no way to dot or double quotes, so use [" "]'

console.log(JsUser[mySym]); //access symbol using []





// How to change Objects Values
JsUser.email = "user1@hotmail.com"
console.log(JsUser["email"]);

//we if don't want to allow to change any values in objects
// Object.freeze(JsUser)
JsUser.email = "user1@jsmail.com"
console.log(JsUser);





// Adding Functions in Objects
JsUser.greeting = function() {
    console.log("Hello JS user");
}

// now access this Function
console.log(JsUser.greeting); //it gives undefine due object.freeze code is active
// if not active then it gives, [Function (anonymous)] i.e, it gives func. ka reference

// console.log(JsUser.greeting());//check results in terminal



JsUser.greetingTwo = function() {
    console.log(`Hello JS user, ${this.name}`);
}


console.log(JsUser.greeting());//check results in terminal
console.log(JsUser.greetingTwo());












/* Objects Notes in JS

1. There are 2 ways to declare Objects:-
  a). As Literals
  b). As Constructor
  c). there are others way too, but these 2 are main

2. Objects/{} k undar Keys & values hota h

3. Objects me data String me define hota h in machine (vvv imp Point)

4. ' this ' keyword is used to reference the same object with 'dot' to gets its property

5. 'singleton' ye Literals mein nhi ban tha h par constructor se bantha h. Or ye apne thara ka object h

*/
