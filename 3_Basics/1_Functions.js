// Functions in JS


function sayMyName() {
    console.log("D");
    console.log("I");
    console.log("S");
    console.log("H");
    console.log("A");
    console.log("N");
    console.log("T");
}

// how to call function
// sayMyName() 
// 'sayMyName' is function ka reference mtlb yhan function rahetha hai
// '()' or ye hai function ka Executor



// Function to Add 2 numbers
// function addTwoNumbers(numbers1, numbers2){
//     console.log(numbers1 + numbers2);
// }

//calling Function
// addTwoNumbers() // func. with no arguments gives NAN
// addTwoNumbers(2, 7) // func. with arguments gives result

// Storing Function in Variables
// const result = addTwoNumbers(2, 7) //result 9
// console.log("Result : ", result); //gives 'undefine'

function addTwoNumbers(numbers1, numbers2){
    // let result = numbers1 + numbers2
    // return result

    // another way to return result
    return numbers1 + numbers2


    // 'return' k bad function kamm nhi karega acc. to function defination in JS lekin return phele kar saktha h
    // console.log("pal");
    
}

// Storing Function in Variables
const result = addTwoNumbers(2, 7) //result 9

// console.log("Result : ", result); //gives 'defined result' 






function loginUserMessage(username = "default user"){
    //checking is username is there or not
    if(username === undefined) { // we can use 'if(!username)' 
        console.log("Plz enter a username");
        return
    }

    return `${username} just logged in`
}

// console.log(loginUserMessage("dishant"))
// console.log(loginUserMessage("pal")) //it over-write the default user





// for Shopping Cart problem
function calculateCartPrice(val1, val2, ...num1) {
    return num1
}

// console.log(calculateCartPrice(150, 200, 400, 2000))


// declaring Object
const user = {
    username: "dishant",
    prices: 399
}



// Passing Object in function
function handleObject(anyObject) {
    console.log(`Username is ${anyObject.username} & courseprice is ${anyObject.price}`);
    
}

// calling function
// handleObject(user)
handleObject({ // another way to call object-function
    username: "default-user",
    price: 399
})





// Passing Arrays in Function  
const myNewArray = [150, 200, 100, 600]

function returnSecondValue(getArray) {
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([150, 200, 100, 600]));










/* Functions Notes in JS

 1. Define/declaration structure of Function
  # function FunctionName() {

  # }

  # 'keyword' 'function ka name' 'pir () isme function ke parameters pass hote h' us ke bad function ka 'scope/ya function ka defination {}'
  # or jab Function ko Call karathe h tab 'isko ()' Arguments bola jata h


 2. We store calling function in variables (line no. -> )

 3. For solving shopping cart-price problem we use (...)/spread operator aka known as rest operator
  # Acc. to use case we give name to '(...)' as spread or rest operator

 4. For passing multiple values in shop cart-price we rest operator
  # & it add multiple values in array to give result

 
*/
