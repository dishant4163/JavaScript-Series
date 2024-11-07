// staticprop


class User {
    constructor(username) {
        this.username = username
    }

    logMe() {
        console.log(`Username: ${this.username}`);
    }

    // making my own method/property
    static createId() {
        return `123`
    }

}


const dishant = new User("dishant")
// console.log(dishant.createId());


class Teacher extends User {
    constructor(username, email) {
        super(username)
        this.email = email
    }
}

const masterG = new Teacher("masterG", "masterG@iph.com")
console.log(masterG.createIdId());

