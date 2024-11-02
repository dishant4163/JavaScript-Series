// Object Literal (simple object banana => {} ) 


//Eg. of Object literal
const user = {
    // properties
    username: "dishant",
    loginCount: 3,
    signedIn: true,


    getUserDetails: function() {
        console.log("Got user details from database")
    }

}

console.log(user.username)
console.log(user.getUserDetails)
