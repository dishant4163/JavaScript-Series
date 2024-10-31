//1. Creating & Storing in Variable

//promis create
const promiseOne = new Promise(function(resolve, reject){
    //Do an Async task take time to load
    //DB calls, cryptography, network related
    setTimeout(function(){
        console.log('Async task is Complete');
        resolve()
    }, 1000)
})

//now consume promise
promiseOne.then(function(){
    console.log("Promise consumed");
})





//2. Without Storing in variable(creating & consuming both done in 1-part)
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2")
        resolve()
    }, 1000)
}).then(function(){
    console.log("Async 2 resolved")
})




//Passing values from this part 
const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        //passing parameters in resolve as object/{}
        resolve({username: "Dp", email: "chai@example.com"})
    }, 1000)
})

//to this part
promiseThree.then(function(user){ //consuming promise3
    console.log(user);
})





const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error) {
            //passing object in resolve
            resolve({username: "dishant", password: "123"})
        } else {
            //Rejection error detha 
            reject('ERROR: Something went wrong :( ')
        }
    }, 1000)
})


//consuming promise4
// advance step to know (i.e how to avoid callback-Hell)
promiseFour.then((user) => {
    console.log(user);
    return user.username
}).then((username) => { // Chaining
    console.log(username);
}).catch(function(error){ //cathing bcz we were getting error
    console.log(error);
}).finally(() => console.log("The promise is either resolved :) or rejected :( "))






// Promise with async wait
const promiseFive = new Promise(function(resolve, reject){ 
    setTimeout(function(){
        let error = true
        if(!error) {
            //passing object in resolve
            resolve({username: "JavaScript", password: "666"})
        } else {
            //Rejection error detha 
            reject('ERROR: JS went wrong :( ')
        }
    }, 1000)
})


async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}


consumePromiseFive()






// async function getAllUsers(){
//     try {
//         //fetch take time to load so we do wait by doing 'await'
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json() //converting resopnse string data into json form
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

// getAllUsers()





// same above method with dot(.)then .catch
fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))



// promise.all
// ye samasyiha h tu iss ke liye padhna padega
