// let myName = "dishant     "
// let mychai = "chaiPiloFriends     "

// console.log(myName.trueLength);




let myHeros = ["thor", "spiderman"]



let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spider power is ${this.spiderman}`);
    }
}


Object.prototype.dishant = function(){
    console.log(`dishant is present in all objects`);
}


Array.prototype.heydishant = function(){
    console.log(`DP says Hello Ji! :-)`);
}


// heroPower.dishant()
// myHeros.dishant()
// myHeros.heydishant()
// heroPower.heydishant()





// inheritance (prototypal-inheritance)

//old synatax
const User = {
    name: "chai",
    email: "chaiwala@google.com"
}


const Teacher = {
    takeClass: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User







// Mordern Syntax

Object.setPrototypeOf(TeachingSupport, Teacher) //(prototypal-inheritance)

let anotherUsername = "ChaiAurPM       "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    // console.log(`${this.name}`); // undefined
    console.log(`Ture length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"dishant".trueLength()
"elachiTea".trueLength()

