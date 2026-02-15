// change everything below to the newer Javascript!

// let a = "test";
// let b = true ; 
// const c= 879; 
// a= "test2";

// // let + const
// var a = 'test';
// var b = true;
// var c = 789;
// a = 'test2';

//////////////////////

// // Destructuring
// var person = {
//     firstName : "John",
//     lastName  : "Doe",
//     age       : 50,
//     eyeColor  : "blue"
// };

// const {firstName, lastName, eyeColor} = person; 
// let {age} = person;

// var firstName = person.firstName;
// var lastName = person.lastName;
// var age = person.age;
// var eyeColor = person.eyeColor;

//____________________///////////////////////


// Object properties
// var a = 'test';
// var b = true;
// var c = 789;


// const obj = {
//     a: "test", 
//     b: true, 
//     c: 789
// };

// var okObj = {
//   a: a,
//   b: b,
//   c: c
// };

// const okObj ={
//     a,
//     b,
//     c
// }


// // Template strings
// var message = "Hello " + firstName + " have I met you before? I think we met in " + city + " last summer no???";

// function message(firstName, city){
//     return `Hello ${firstName}. Have I met you before? I think we met in ${city} 5 years ago.`

// }

// console.log(message("Ahmed", "Istanbul"));

// // default arguments
// // default age to 10;
// function isValidAge(age) {
//     return age
// }



// // Symbol
// // Create a symbol: "This is my first Symbol"

// let sym1 = symbol();
// let sym2 = symbol("mysymbol");
// let sym3 = symbol ("foo");


// // Arrow functions
// function whereAmI(username, location) {
//     if (username && location) {
//         return "I am not lost";
//     } else {
//         return "I am totally lost!";
//     }
// }

const wherEaMi = (username, location) => {
    if (username && location) {
        return "I am not lost";
    } else {
        return "I am totally lost!";
    }
}
