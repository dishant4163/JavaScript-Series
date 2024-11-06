function SetUserName(username) {
    // complex DB calls
    this.username = username
}

function createUser(username, email, password) {
    SetUserName(username)

    this.email = email
    this.password = password
}
