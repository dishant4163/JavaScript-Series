// How Getter & Setter are declare via object-based


// declaring Object
const UserAsObj = {
    _email: 'dp@tesla.ai',
    _password: "asdfg",


    get email() {
        return this._email.toUpperCase()
    },

    set email(value) {
        this._email = value
    }

}


// in this we can easily use 'factory function' i.e., "create"
const tea = Object.create(UserAsObj)
console.log(tea.email); // why not '_email' & this _email is pvt. property with no meaning
// for this, it is overwritten by the JS
