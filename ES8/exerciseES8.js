// Solve the below problems:

// #1) Line up the Turtle and the Rabbit at the start line:
console.log(startLine = '     ||<- Start line');

let turtle= "🐢";
console.log(turtle.padStart(10));

let rabbit = '🐇';
console.log(rabbit.padStart(10));


turtle= turtle.trim().padEnd(9, "=");

console.log(turtle);


// // #2) What happens when you run turtle.trim().padEnd(9, '=') on the turtle variable
// // Read about what the second parameter does in padEnd and padStart
// turtle = turtle.trim().padEnd(9, '=');

// console.log(Object.entries(object1).map(value => {
// return value[1] + value[0].replace("username", "" ); 
// }));


// // #3) Get the below object to go from:
let obj = {
my: 'name',
is: 'Rudolf',
the: 'raindeer'
}
// // to this:
// 'my name is Rudolf the raindeer'

console.log(Object.entries(obj).map(value => {
    return value[0] + " " + value[1] + " "
}).join(""))

