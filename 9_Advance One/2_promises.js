//1. Creating & Storing in Variable

//promis create
const promiseOne = new Promise(function(resolve, reject){
    //Do an Async task
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