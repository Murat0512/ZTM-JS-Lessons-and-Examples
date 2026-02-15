// It is all about arrays in ES2023. The new features include:

// 1. Array findLast and findLastIndex methods
// 2. Array toSorted method
// 3. Array toReversed method
// 4. Array toSpliced method
// 5. Array with method

// Example:

// const chemicalElements = [
//     { name: "Hydrogen", symbol: "H", atomicNumber: 1 },
//     { name: "Helium", symbol: "He", atomicNumber: 2 },
//     { name: "Lithium", symbol: "Li", atomicNumber: 3 },
//     { name: "Beryllium", symbol: "Be", atomicNumber: 4 },
//     { name: "Boron", symbol: "B", atomicNumber: 5 },
//     { name: "Carbon", symbol: "C", atomicNumber: 6 },
//     { name: "Nitrogen", symbol: "N", atomicNumber: 7 },
// ]


// const lastElement = chemicalElements.findLast(element => element.atomicNumber >4);

// console.log(lastElement);


// // LAST INDEX OF AN ELEMENT IN AN ARRAY

// const lastElementIndex = chemicalElements.findLastIndex(element => element.atomicNumber >4);

// console.log(lastElementIndex);


//   TO REVERSED


const animals = ["Dog", "Cat", "Elephant", "Giraffe"];

// reverse would changed the original array but toReversed
//  does not change the original array and gives you a new reversed array.

// animals.reverse(); // [ 'Giraffe', 'Elephant', 'Cat', 'Dog' ]
// console.log(animals); // This will give you the reversed array but the original array is also changed.


// If we want to keep the original array and get a new reversed array we can use toReversed method.

// const reversedAnimals = animals.toReversed();

// console.log(reversedAnimals); // This will give you the reversed array but the original array is not changed.
// console.log(animals); // This will give you the original array as it is not changed by toReversed method.


//////////////////////////////////////////////


// TO SORTED
// this is same logic it does not touch the original array but creates a new sorted array 

// normally we could do this to sort an array:

// animals.sort();// Sorted alphabetically but the oginal array is changed.

// console.log(animals); // This will give you the sorted array but the original array is also changed.

// We could use .toSorted() to get a new sorted array without changing the original array.

// const sortedAnimals = animals.toSorted(); 

// console.log(sortedAnimals);



//////////////////////////////////////////////////////


//  TO SPLICED

// This method is used to change the contents of an array by removing or 
// replacing existing elements and/or adding new elements in place.



// const splicedAnimals = animals.toSpliced(2, 1, "Lion", "Tiger");

// console.log(splicedAnimals); // This will give you a new array with the spliced elements but the original array is not changed.
// console.log(animals); // This will give you the original array as it is not changed by toSpliced method.

// // We removed the second in the index which is elephant and removed only one element then added lion and tiger from that 
// // point we removed elephant and added lion and tiger in the new array but the original
// //  array is not changed.


//////////////////////////////////////////////////

// WITH METHOD

// This method is used to create a new array with the specified elements.
//  It is similar to the spread operator but it is more concise and easier to read.


const modifiedAnimals = animals.with(2, "iguana"); 

console.log(modifiedAnimals); // This will give you a new array with the modified element but the original array is not changed.
console.log(animals); // This will give you the original array as it is not changed by with method.

// We modified the element at index 2 which is elephant and replaced it with iguana in the new array but the original array is not changed.