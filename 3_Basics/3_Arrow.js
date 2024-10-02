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

// function chai () {
//     let username = "Dishant"
//     console.log(this.username);
// }

// chai()




// another way to declare function specailly arrow function k through

const chai = function() {
    let username = "Dishant"
    console.log(this.username);
}















/*
1. this keyword current contex ke bare me bata h mtlb current contex ko 'refer' kartha h
 # context simple means 'kis k bare me baat ho rahi h' Or means Values

2. Browser k andar inspect me jab 'console.log(this)' karenge to whan pe empty object/{} as compare node terminal ki jagah 'window' as global object h



*/
