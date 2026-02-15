// Solve the below problems:


// #1) Check if this array includes the name "John".
const Dragons = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];


console.log(Dragons.includes("john"));



// #2) Check if this array includes any name that has "John" inside of it. If it does, return that
// name or names in an array.
const dragons = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];

console.log(dragons.filter(name => name.includes('John')));// ['Johnathan'])


// #3) Create a function that calulates the power of 100 of a number entered as a parameter

const power= (z) => z**100;

console.log(power(2));

// #4) Useing your function from #3, put in the paramter 10000. What is the result?
// Research for yourself why you get this result

