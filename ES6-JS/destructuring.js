// DeSTRUCTRING 

// Say we have an object and we want to pick the properties of the object we have th write 

const obj = {
 player: "murat",
 experience: 1000,
 score: true
}

// This is a long way to show the assignment 
// const player = obj.player; 
// const experience = obj.experience;
// let score = obj.score;

//With destructuring 

const {player , experience} = obj; 
let {score} = obj 


// If we have const variables like 

// const a= "Murat";
// const b = 1000;
// const c = "Living"; 

// //  And you know these wont change and you want to use them in an object 

// // You can put them as 
// const obj = {
//     a,
//     b,
//     c
// };
// console.log(obj);


//  Template STRING 

// name= "Sally"; 
// course= "Science"; 

// const greeting  = `This is ${name} studying ${course} and eader to join the club `

// console.log(greeting)




// Default Arguments 

// function greet(name= "" , age = 30 , pet = "cat") {
//    return  `Hello${name}, you seem to be ${age-10}. What a lovely ${pet}.`
// }


// console.log(greet());


// ARROW FUNCTIONS 

// const add = (a,b) => a + b ;

// console.log(add(4,6));




