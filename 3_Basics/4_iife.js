// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    console.log(`DB CONNECTED`);
})()




//global scope se functions ke andar pollution na ho 
//tu iss waja se 'iife' ka use lete h








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
