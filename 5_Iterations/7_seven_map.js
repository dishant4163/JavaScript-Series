// Map in JS

const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums = myNumbers.map((num) => num + 10) //no use of scope/{}, so return direct automatically


// console.log(newNums);



//use of scope/{} in map, therefore return manually
const nuNums = myNumbers.map((Num) => {
  // Num + 20 //gives undefined for all values
  return Num + 20
})

// console.log(nuNums);






// Chaining in map | JS

//eg., of chaining in it can done with both map or filter
// const newN= myNumbers.map().map().filter 



const newNums2 = myNumbers
  .map((nos) => nos * 10)
  .map((nos) => nos + 7)
  .map((nos) => nos - 2)
  .filter((nos) => nos >= 40)


console.log(newNums2);








// const codeNum = [1, 2, 3, 4, 5, 6, 7]

// const values = codeNum.forEach( (item) => {
//     console.log(item);
//     return item //forEach return type is undefined
// })

// console.log(values);








/* NOTES

 1. map bhi callbackfn hai in js.

 2. personal pov, it is better than forEach

 3. it can be stored in variables too.

 4. good pt. is that it returns th values

   > NOTE
 5. agr {}/scope kiya map tu return keyword ka use karna hoga mtlb manually return karna hoga

 6. agr sir () ke andar values return ki mtlb bina {}/scope open kiye tu map automatically value return kara dega

 7. forEach also use with map for getting map values


 8. filter automatically filter kar detha h par as such map mein aise kuch nhi h


   > NOTE
 9. If in chaining, the 1st chain method pass the result to next chain method
*/
