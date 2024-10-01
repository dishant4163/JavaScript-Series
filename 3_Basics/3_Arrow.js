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
// user.username = "default user"
// user.welcomeMessage()

// console.log(this); // for this code there is no refering contex in global so it will return empty object '{}'





// +++++++ Arrow Function ' () => '







/*
1. this keyword current contex ke bare me bata h mtlb current contex ko 'refer' kartha h
 # context simple means 'kis k bare me baat ho rahi h' Or means Values


*/
