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
