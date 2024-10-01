// Arrow Function & this keyword


const user = {
    username: "dishant",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , wlc to website`);
        console.log(this);
        
    }
}


user.welcomeMessage()
user.username = "default user"
user.welcomeMessage()







/*
1. this keyword current contex ke bare me bata h mtlb current contex ko 'refer' kartha h
 # context simple means 'kis k bare me baat ho rahi h' Or means Values
*/
