// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    // this named IIFE
    console.log(`DB CONNECTED`);
})();


//global scope se functions ke andar pollution na ho 
//tu iss waja se 'iife' ka use lete h


( (name) => {
    // unnamed iife with parameter passed as name
    console.log(`DB CONNECTED TWO ${name}`);
} )('dishant')

//iss func->aurcode me iife invoked tu ho gaya h par isse pata nhi hai ki khana rukna h
// tu isse rokne k liye chai wale func me iife ko end kar na hoga ';' laga ke such lineofcode no. 6

// POINT TO PONDER
// agr ek iife function h tu main func ko ';' se end kar
// agr doo iife function h tu first 2 func ko ';' se end karo









/* Notes on 'iiFE'

 > What is an IIFE?
 > Definition: An IIFE is a function that runs as soon as it is defined.


  # Key Uses of IIFEs
  i). Scope Isolation:- Creates a new scope to avoid variable collisions.

  ii). Encapsulation:- Keeps variables private, preventing them from being accessed from outside.

  iii). Avoiding Global Variables:- Helps prevent adding unnecessary variables to the global scope.

  iv). Module Pattern:- Often used to create modules that bundle related code and functionality.

  v). Initialization Code:- Useful for running setup code without affecting the global environment.

*/
