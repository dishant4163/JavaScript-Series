// Filter map and Reduce in javascript 


// const coding = ["js", "ruby", "java", "python", "cpp"]


// const values = coding.forEach( (item) => { //storing forEach loop in variable 

//     //console.log(item);
//     return item
// })

// console.log(values);




// filters in JS
const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//storing filter in JS
// const newNum = myNum.filter( (num) => num > 4)
// console.log(newNum);



// Another Way

// const newNum = myNum.filter( (Num) => {
//     return Num > 4
// } )

// console.log(newNum);





// const newNum2 = []

// myNum.forEach( (num) => {
//     if (num > 4) {
//         newNum2.push(num)
//     }
// } )

// console.log(newNum2);




const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

let userBooks = books.filter( (bk) => bk.genre === 'History') 

console.log(userBooks);












/* NOTES
 1. forEach koi bhi value return nhi kartha sirf particular callbackfn ka 'undefined' show kartha h manually return karne k bad bhi.

 2. for the above problem in pt. 1, we have filter

 3. Agar hum filter me scope/{} start kardenge tu  humhe pir return karna padega
 4. Agr hum scope/{} open nhi kar h tu direct hi parenthese () ka istamal kar the h tu filter mein direct value return kar denge 

 5.  Pt. 3 & 4 is can be done with forEach loop in line of code 40 to 

*/

