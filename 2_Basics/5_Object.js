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

console.log(courseInstructor); // give result JS Master


// De-structuring the object
const {courseInstructor: instructor} = course

console.log(instructor); // give result JS Master





// ****************** API(in JSON) *****************

// eg., of API but in JSON which is unname object

// {
//     "name": "dishant",
//     "courseName": "JS",
//     "price": "free"
// }


// eg., API in ARRAY formats

// [
//     {},
//     {},
//     {}
// ]





/* +****+ Object De-Structure & JSON Api Notes-  +****+
1. Destructuring in JS is done using curly-braces and another name is given to the same object


2. Some more Example of de-structuring in "React"
 # In react, there 'props' aka properties which define as:-

 const navbar = ({company}) => {
    
}

navbar(company = "pal")

 # But in React, DeStructing is done ' ({ }) ' inside this.



  > JSON API is un-named Object.
  > Which have key-value pairs but in string formats (line-> 34-38)
  > Sometimes API is not gievn objects
  > Sometimes API is also given in array format (line-> 43-47)

 # There are some online tools to make JSON/API to JSON Formater to make it readable the api data.
*/
