// Arrays part-2

const marvel_heros = ["Ironman", "Thor", "Spiderman"]
const dc_heros = ["Batman", "Superman", "Flash"]

// marvel_heros.push(dc_heros)

//in result array ke undar aaray aayega
// console.log(marvel_heros); //another array ko bi as data liya h
// console.log(marvel_heros[3][1]);

// merging arrays using ' concat '
// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);


// merging arrays using 'spredout operator' good practice
const all_new_heros = [...marvel_heros, ...dc_heros]
// console.log(all_new_heros);







