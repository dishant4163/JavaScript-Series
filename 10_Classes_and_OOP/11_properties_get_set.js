// How Getter & Setter are declare using define-property (Old synatx) i.e, usally found in old code files.



// here function declare as Object
function User(email, password) {
    this._email = email
    this._password = password

// structur(give 'this' context, 'that propert to be get-set', {} <-3rd declare object )
    Object.defineProperty(this, 'email', {
        get: function() {
            return this._email.toUpperCase()
        } ,
        set: function(value) { //setter Value Set kar tha h tu dena padega as 
            // 'value ya koi or name' for setting value
            this._email = value
        }
    })

    Object.defineProperty(this, 'password', {
        get: function() {
            return this._password.toUpperCase()
        } ,
        set: function(value) { //setter Value Set kar tha h tu dena padega as 
            // 'value ya koi or name' for setting value
            this._password = value
        }
    })


}


//declare object to check its work or not

const chai = new User("chai@powerbychai.ai", "chaipeelofrinedz")
console.log(chai.email);
console.log(chai.password);






// Note
/*
  1. Function have 2 behaviour (i). as function, (ii). as Object

 2. 'defineProperty()' actually it is a property of 'getter & setter'

 3. Old v/s new sytnax for getter & setter have difference of clean code as bca new 
 syntax clean & clear due constructor. And limited acces to developer but provide 
 customization to gives its customize method & to check logic

   4. There is one more syntax which is Object based and this one is function-based syntax.
   And this one is quite mordern due to use of function
*/
