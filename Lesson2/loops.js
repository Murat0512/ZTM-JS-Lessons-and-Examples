// // looping Doing things over and over

// const { count } = require("node:console");


var todos = [
    "clean room!", 
    "brush teeth!", 
    "exercise!", 
    "study javascript!", 
    "eat healthy!"];



// // for loop


// for (var i = 0 ; i< todos.length; i++){
//     todos[i] = todos[i] + "!";
// }


// console.log(todos);

// // While loop[ 

// var counterOne = 10 ; 
// while (counterOne > 0){
//     console.log(counterOne);
//     counterOne--;
// }


// // do while loop 

// var counterTwo = 10; 
// do {
//     console.log(counterTwo);
//     counterTwo--;
// }
// while (counterTwo > 0);


//  forEach loop 


todos.forEach(function(todo,i ){
    console.log(todo,i);
}
);

function logTodos(todo,i){
    console.log(todo, i);
}

todos.forEach(logTodos);