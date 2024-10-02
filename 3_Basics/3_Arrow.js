// Arrow Function & this keyword


const user = {
    username: "dishant",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , wlc to website`);
        console.log(this);
        
    }
}


// user.welcomeMessage()
// user.username = "default user" // yhan pr current contex change kiya h
// user.welcomeMessage()

// console.log(this); // for this code there is no refering contex in global so it will return empty object '{}' if above 3 lines code is not working





// +++++++ Arrow Function ' () => '

// function chai1 () {
//     let username = "Dishant"
//     console.log(this.username);
// }

// chai1() //return function values as 'undefined'




// another way to declare function specailly arrow function k through

// const chai2 = function() {
//     let username = "Dishant"
//     console.log(this.username);
// }

// chai2() //return function values as 'undefined' 





// Decalaring arrow function 
const chai = () => {
    let username = "Dishant"
    console.log(this); // return empty object {}
    console.log(this.username); //return undefined
}

// chai() //this also return 'undefined' & empty obj {} value of function





//Now, know about pure arrow function

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }



//Another way 2 use of Arrow function as Implicit return

// const addTwo = (num1, num2) => num1 + num2

const addTwo = (num1, num2) => (num1 + num2)

console.log(addTwo(3, 7))












/*
1. this keyword current contex ke bare me bata h mtlb current contex ko 'refer' kartha h
 # context simple means 'kis k bare me baat ho rahi h' Or means Values

2. Browser k andar inspect me jab 'console.log(this)' karenge to whan pe empty object/{} as compare node terminal ki jagah 'window' as global object h


3. Arrow function ko Implicit return kar sakthe mtlb bina curly braces/{} ke aur same line me
 # Agr Implicit me curly braces ke use kar tu to pir return keyword use karna mandatory h such as line no. 66 - 68
 # use Parenthesis to return value such as line no 74 & 76.


4. Explict ka mtlb jab function return keyword ka use with curly braces in arrow function

NOTE:- 3 & 4 always used in React.



*/
