// Prototype in JS | is Function is a Object



function multipleBy5(num) {
    return num * 5;
}


multipleBy5.power = 2

console.log(multipleBy5(5)); // 25
console.log(multipleBy5.power); // 2
console.log(multipleBy5.prototype); // return empty object/{}. Aur actually
// ye bydefault current contex set hota h or 
// actually mein '{}' us method ka 'this' h

/* // above practical result
 # function function bhi h
 # function object bhi h bas depend kar tha kis traha behave kara rahe h
*/



function createUser(usrename, score) {
    this.usrename = usrename
    this.score = score
}

// declaring my own functionality / functions
createUser.prototype.increment = function() {
    this.score++ //'this' means jiss ka mtlab 'this' i.e, 
    // jisne bhi bulaya uska this
}
createUser.prototype.printMe = function() {
    console.log(`Price is ${this.score}`); //'this' means jiss ka mtlab 'this'
}

//now creating diff. users
const chai = new createUser("chai", 150)
const tea = createUser("tea", 420)

chai.printMe() //yhan pr problem aayi h par properties add ho
// gayi h jo humne add ki h jisko prototype me check kr sakthe h
//jab humne function(createUser) se chai me transfer ki tu humne us bataya nhi
// ki user se addtional properties aayi h by using 'new'
/* TypeError in line-43.printMe(), (for solving this we have use 'new' keyboard)

chai.printMe()
     ^

TypeError: Cannot read properties of undefined (reading 'printMe')

*/




/* 'new' Keyword Notes

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/
