// Object de-structure & JSON API intro


const course = {
    courseName: "JS by Chai aur Code",
    price: "999",
    courseInstructor: "JS Master"
}

//print the values of course 
// course.courseInstructor // this can be & it practice too


// Another way to access/print values

const {courseInstructor} = course

// console.log(courseInstructor);


// De-structuring the object
const {courseInstructor: instructor} = course

console.log(instructor);





// ******************* API(in JSON) *****************

// eg of API but in JSON which is unname object
{
    "name": "dishant",
    "courseName": "JS",
    "price": "free"
}







/* +****+ Object De-Structure & JSON Api Notes-  +****+
1. Destructuring in JS is done using curly-braces and another name is given to the same object


2. Some more Example of de-structuring in "React"
 # In react, there 'props' aka properties which define as:-

 const navbar = ({company}) => {
    
}

navbar(company = "pal")

 # But in React, DeStructing is done ' ({ }) ' inside this.



  > JSON API is un-named Object.
  > Which have key-value pairs but in string formats
*/
