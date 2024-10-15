// Map in JS

const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums = myNumbers.map( (num) => num + 10) //no use of scope/{}, so return direct automatically


// console.log(newNums);



//use of scope/{} in map, therefore return manually
const nuNums = myNumbers.map( (Num) => {
    // Num + 20 //gives undefined for all values
    return Num + 20
})

// console.log(nuNums);









/* NOTES

 1. map bhi callbackfn hai in js.

 2. personal pov, it is better than forEach

 3. it can be stored in variables too.

 4. good pt. is that it returns th values

   > NOTE
 5. agr {}/scope kiya map tu return keyword ka use karna hoga mtlb manually return karna hoga

 6. agr sir () ke andar values return ki mtlb bina {}/scope open kiye tu map automatically value return kara dega

*/
