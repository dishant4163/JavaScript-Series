// for loops

for (let i=0; i <= 10; i++) {
    const element = i;
    if(element == 5) {
        // console.log("5 is a number");
    }
        //console.log(element);
}

// console.log(element);


for (let i=1; i<= 10; i++) {
    // console.log(`Outer Loop value: ${i}`);
    for (let j=1; j<=10; j++) {
        // console.log(`Inner Loop value: ${j} & inner Loop ${i}`);
        // console.log(i + '*' + j + ' = ' + i*j);
    }
}



let myArr = ["Flash", "Batman", "Superman"]
// length of array
// console.log(myArr.length);
for (let ind = 0; ind < myArr.length; ind++) {
    const element = myArr[ind];
    // console.log(element);
}






// break and continu

for (let ind = 1; ind <= 10; ind++) {
    if (ind == 5) {
        console.log(`Detected 5`);
        break
    }
    console.log(`Value of i is ${ind}`);
}








/* Notes:

1. Loops aka Iterations


*/

