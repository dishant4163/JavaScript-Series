const accountId = 4163
let accountEmail = "bond007@gmail.com"
var accountPassword = "1234567"
//another way to assign var/variable & it is bad practice
accountCity = "Jaipur"

let accountState;//this let is 'undefined' i.e, no value given to accState therefore it return undefined

//accountId = 2 //since accId is const/constant that cannot be changed which is not allowed

accountEmail = "b7b7@gmail.com"
accountPassword = "654123"
accountCity = "Bengaluru"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope i.e., " {} " and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
