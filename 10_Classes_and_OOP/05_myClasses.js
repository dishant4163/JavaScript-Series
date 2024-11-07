// This JS series Lectures is madeup after the Launch of "ES6"  


class User {
    // declaring constructor
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }

    // declaring own methods
    encryptPassword() {
        return `${this.password}abc`
    }
    // declaring own methods
    changeUsername() {
        return `${this.username.toUpperCase()}`
    }

}


const chai = new User("chai", "chai@fb.com", "123")

console.log(chai.encryptPassword());
console.log(chai.changeUsername());




// behind the scene
function user(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
}


// adding/injecting properties in this above mentioned functions
user.prototype.encryptPassword = function() {
    return `${this.password}abc`
}
user.prototype.changeUsername = function() {
    return `${this.username.toUpperCase()}`
}


// use-Case of this function 4 behind scenes
const tea = new user("tea", "tea@fb.com", "123")

console.log(tea.encryptPassword());
console.log(tea.changeUsername());

