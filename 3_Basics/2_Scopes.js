// Global & local scope | scope this and arrow


// var c = 300

let a = 300

if(true) { // this e.g., of block scope
    let a = 10
    const b =20
    //console.log("INNER: ", a);
    
}


// console.log(a);
// console.log(b);
// console.log(c);



function one() {
    const username = "dishant"

    // this is eg of nested function
    function two() {
        const website = "github"
        console.log(username);
    }
    // console.log(website)

    two()

}

// one()


if (true) {
    const username = "dishantpal"
    if (username === "dishantpal") {
        const website = " github"
        // console.log(username + website);
    }
    //console.log(website);

}

// console.log(username);






// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5));

function addone(num) {
    return num + 1
}



// this below line codes -> 68 to 71 is an eg of hosting
addTwo(7)
const addTwo = function(num) {
    return num + 2
}







/* Scope Notes for JS
 1. {} this is known as Scope in JS

 2. Scope are always declare with functions & if, else.

3. Anything written inside is called Block-Scope

4. Anything written outside is Global-Scope

5. Web-Browser, Inspect console me Scope aka 'Core Scope' alag hota h. Aur jab code environment me Node k through check krthe h tu global scope alag h 
*/
