// Arrays part-2

const marvel_heros = ["Ironman", "Thor", "Spiderman"]
const dc_heros = ["Batman", "Superman", "Flash"]

marvel_heros.push(dc_heros)

//in result array ke undar aaray aayega
console.log(marvel_heros); //another array ko bi as data liya h
console.log(marvel_heros[3][1]);

// merging arrays using ' concat '
const allHeros = marvel_heros.concat(dc_heros)
console.log(allHeros);


// merging arrays using 'spredout operator' good practice
const all_new_heros = [...marvel_heros, ...dc_heros]
console.log(all_new_heros);


const another_Array = [1, 2, 3, [4,5,6], 7, [6,7, [4,5]]]
const real_another_array = another_Array.flat(Infinity)
// giving dept as Infinity but we have to define exact dept in numbers
console.log(real_another_array);



// ******** array during doing data-scrapping **********

console.log(Array.isArray("Dishant")) //1st check is the array or not (by using 'isArray')

// how to convert above string into array(by using from)
console.log(Array.from("Dishant"))



// Interesting Case of Array with objects, in line 39
console.log(Array.from({name: "pal"})); //gives empty array
// for this situation define which keys, values ka array banana h ya pir nhi


let score1 = 100 
let score2 = 200
let score3 = 300


// another way to convert multiple variable using (' .of ')
console.log(Array.of(score1, score2, score3));


