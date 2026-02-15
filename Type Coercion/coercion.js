console.log(1=== "1")

console.log(1=="1"); //Strict equality vs Loose equality

// 1 is a number and "1" is a string, so they are not strictly equal,
//  but they are loosely equal because of type coercion.

// Type coercion is the process of converting a value from one type to another.
// In JavaScript, this can happen implicitly when you use operators or functions that 
// expect a certain type of value. For example, when you use the + operator with a number 
// and a string, 
// JavaScript will convert the number to a string and concatenate them together.   


// All types have coercion in JS 