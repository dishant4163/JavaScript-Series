// Dates

// create objec with it instance
let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);




// Decalring a date with diff. methods
let myCreatedDate = new Date(2024, 0, 30)
console.log(myCreatedDate.toDateString());


//declaring time with the specific date
let myCreatedDate2 = new Date(2023, 0, 23, 5, 3) 
console.log(myCreatedDate2.toLocaleString());


let myCreatedDate3 = new Date("2023-01-14") // yyyy-mm-dd
//in this we write date in string so Jan starts from 01
console.log(myCreatedDate3.toLocaleString());


let myCreatedDate4 = new Date("01-18-2023") // acc. to Indian format i.e., " mm-dd-yyyy "
console.log(myCreatedDate4.toLocaleString());





// Time-Stamps (for getting exact time stamp)

let myTimeStamp = Date.now() // we can use new keyword also

console.log(myTimeStamp); //give long digit in milliseconds
// getting date in milliseconds for compariing time & date
console.log(myCreatedDate.getTime());
//convert into seconds
console.log(Math.floor(Date.now()/1000));





//Ohter new methods with Date
let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()); //here Month Starts from 0 for not getting months starts from 0
console.log(newDate.getMonth() + 1); 
console.log(newDate.getDay()); //monday starts from 1


/* Pt. to Note:
use " string interpolation i.e., ` ` " for writing complex program of date & time in which is mention below

// `${newDate.getDay()} and the time`
*/







//***Special Method for Date declare & it is very usefull**
// defining object inside "{}" it... & we can define diff properties in it
newDate.toLocaleString("default", {
    weekday: "long"
})






/* Notes:-
 # In JS, Date, months start from 0, ends at 11
 # Date in js is Object type
 # Time-Stamp is Number type

   # Know more about Special Method i.e in line of code 68-73
   # Know more about Date & Time bcz it is quite complex topic
*/

