// Global & local scope | scope this and arrow


// var c = 300

let a = 300

if(true) { // this e.g., of block scope
    let a = 10
    const b =20
    console.log("INNER: ", a);
    
}

console.log(a);
// console.log(b);
// console.log(c);





/* Scope Notes for JS
 1. {} this is known as Scope in JS

 2. Scope are always declare with functions & if, else.

3. Anything written inside is called Block-Scope

4. Anything written outside is Global-Scope

5. Web-Browser, Inspect console me Scope aka 'Core Scope' alag hota h. Aur jab code environment me Node k through check krthe h tu global scope alag h 
*/
