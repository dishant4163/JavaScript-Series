// Inheritance in JS


class User {
    constructor(username) {
        this.username = username
    }


    logMe() {
        console.log(`USERNAME is ${this.username}`);
    }

}

class Teacher extends User{ //extends is sugar-syntax of prototype
    constructor(username, email, password) {
        super(username) //super extends class and get the reference, automatically get 'this'
        this.email = email
        this.password = password
    }


    addCourse() {
        console.log(`A new course was added by ${this.username}`);
    }

}


// making object from the 'Teacher'
const chai = new Teacher("chai", "chai@teacher.com", "123");

chai.logMe()
const masalaChai = new User("masalaChai")

masalaChai.logMe()

console.log(chai instanceof User);

