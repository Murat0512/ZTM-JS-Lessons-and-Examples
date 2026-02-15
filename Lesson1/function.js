function name(name) {
  console.log("Hallo there! How are you " + name);
}

name("Murat");

function greet(name) {
  console.log("Hello " + name + " welcome to JavaScript!");
}

greet("Murat");


// ________________________________________________________________________________________
// Anonymous function is a function that does not have a name. It is often used as a 
// callback function or assigned to a variable.

var sayBye = function (name) {
  console.log("Goodbye " + name + " see you later!");
};

sayBye("Murat");

// __________________________________________________________________________________________

//  Arguments make our functions usable for different inputs. We can pass different
//  values to the function and it will work accordingly. Do not repeat yorself  (DRY) 
// principle is important in programming. It helps us to avoid code duplication and makes our 
// code more efficient and easier to maintain.


function multiply(a,b){
    return a * b;   
}

console.log(multiply(5,10)); // This will return 50     

// Function expression and decleration  are 2 diffrent thing 

function user(){
  console.log("This is a function decleration")
}

var user2 = function() {
  console.log("This is a function expression")
};

// Function expressiom  finishes with a semicolon 
// because it is an assignment statement. Function decleration does not need a s
// emicolon because it is not an assignment statement.



// Calling or invoking a function, there are several ways to invoke a function 

alert(); 

newfunction(para1,para2);


// Assign a variable 

var a = true;
// function VS method

function thisisaFunction(){
  console.log("This is a function");
}

var obj = {
  thisisAMethod: function(){
    console.log("This is a method");
  }
}

// Calling function and method 

thisisaFunction();
obj.thisisAMethod();
