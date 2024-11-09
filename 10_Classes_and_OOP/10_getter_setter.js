// Getter & Setter in JS


class User {
    constructor(email, password) {
        this.email = email
        this.password = password
    }


    get email(){
        return this._email.toUpperCase()
    }
    set email(value) {
        // note 'setters' ko return nhi karthe h kabhi-bhi
        this._email = value.toUpperCase()
    }

    // definfe getter & setter
    get password() {
        // same here define new propert in get too. i.e (_password)
        return this._password.toUpperCase()

        // another way show & change password
        // return `${this._password}dishant`.toUpperCase()
    }

    set password(koibhiname) {
        // ans/soln of how? by defining new propert i.e (_password)
        this._password = koibhiname
    } 
    // yhan pe range error aayegi bcz constructor bhoi or setter
    // password set kar raha h jis se 'RangeError: Maximum call stack size exceeded'
    // then how to set?

}


const dishant = new User("dp@jswala.com", "abc")
console.log(dishant.email);
console.log(dishant.password);





/* NOTES:-
 1. For customized code, such not give password acces to anyone
 so, in that  case 'getter & getter' play their role.

 2. If getter is define then we to must declare setter too.

 3. We don't return setter at any cost.

 4. 'email' & '_email' or 'password' & '_password' both are different
 means '_email' & '_password' are new fields but actually almost private property.
 But we accesing inside class & outside we are giving it access by our choice.


 5. For knowing or checking old-syntax how getter & setter work in oldcode files. 
 For that check "11_properties_get_set.js" how they are define and use.
*/