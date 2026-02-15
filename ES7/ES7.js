//  ES7 has 2 changes to the langiuage:

// 1. The includes method for arrays and strings
// 2. The exponentiation operator (**)

// 1. The includes method for arrays and strings
// The includes method is a new method that is added to the Array and String prototypes.
// It allows you to check if an array or a string includes a certain value.

// For example:

console.log("Helloo".includes("o")); // true
console.log([1, 2, 3].includes(2)); // true
console.log([1, 2, 3].includes(4)); // false

const pets = ["cats", "dogs", "birds"];

console.log(pets.includes("dogs"));

console.log(pets.includes("birds"));


// Exponential Operation

const square = (x) =>  x**2 
const cube = (y) => y**3

console.log(square(5));

console.log(cube(7));