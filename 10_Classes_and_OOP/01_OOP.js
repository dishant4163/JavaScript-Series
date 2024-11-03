// Object Literal (simple object banana => {} ) 


//Eg. of Object literal
const user = {
    // properties
    username: "dishant",
    loginCount: 3,
    signedIn: true,


    getUserDetails: function() {
        // console.log("Got user details from database")
        // console.log(`Username: ${this.username}`);
        console.log(this);
        
    }

}

// console.log(user.username)
// console.log(user.getUserDetails())
// console.log(this);






// constructor function

/* NOtes on constructor function
// const promiseOne = new Promise() //eg.,
// const date = new Date() //eg.,

// ye 'new' keyword hi constructor function hai
// or ye new kya kamm kartha h?
// ye ek hi object literals se multiple instances bana saktha h
// new keyword use karthe hi ek empty object/{} create hota h jisko instances bolthe h.


  How “new” keyword works:-

1. "new" keyword creates a new empty object or we can say instance.
2. constructor function is called that will have all the arguments
3. "this" keyword is injected in a new instance with all the arguments
4. We will receive the new object instance with all the arguments
*/


function User(username, loginCount, isLoggedIn) {
    // usrename = username //to avoid this problem of naming we use 'this' keyword
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    // writng method
    this.greeting = function() {
        console.log(`Welcome ${this.username}`);
    }


    return this
}

const userOne = new User("dishant", 3, true)
const userTwo = new User("elon mast", 666, false)
console.log(userOne.constructor);
// console.log(userTwo);


// constructor property is the reference of its own

// Read about 'instanceof' on internet/mdn
