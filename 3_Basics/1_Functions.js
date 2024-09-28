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






function loginUserMessage(username){
    //checking is username is there or not
    if(username === undefined) { // we can use 'if(!username)' 
        console.log("Plz enter a username");
        return
    }

    return `${username} just logged in`
}

// console.log(loginUserMessage("dishant"))
console.log(loginUserMessage())






/* Functions Notes in JS

 1. Define/declaration structure of Function
  # function FunctionName() {

  # }

  # 'keyword' 'function ka name' 'pir () isme function ke parameters pass hote h' us ke bad function ka 'scope/ya function ka defination {}'
  # or jab Function ko Call karathe h tab 'isko ()' Arguments bola jata h


 2. We store calling function in variables (line no. -> )

*/
