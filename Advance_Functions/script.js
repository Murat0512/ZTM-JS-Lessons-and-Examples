
// Closure is a fundamental concept in JavaScript that allows a function to access variables from its outer scope, 
// even after the outer function has finished executing.

const first= () => {
    const greet = "Hi"; 
    const second = () => {
        console.log(greet);
    }
    return second;

}

const newFunc = first();
newFunc (); 



// Currying is a functional programming technique where a function with multiple arguments is transformed into a sequence of functions that each take a single argument.

const multiply = (a,b) => a * b ;

const curriedMultiply= (a) => (b) => (a * b); 

const curriedMultiplyBy5 = curriedMultiply(5);

console.log(curriedMultiplyBy5(5));

// Here we assigned the constant curriedMultiplyBy5 to the function curriedMultiply with the argument 5. 
// This means that curriedMultiplyBy5 is now a function that takes one argument (b) and multiplies it by 5.
// When we call curriedMultiplyBy5(5), it multiplies 5 by 5 and returns 25.

// In this case a is 5 snd b is 5, so the result is 25.



// Compose is a functional programming technique where you combine two or more functions to create a new function.


const compose = (f, g) => (a) => f(g(a));

const sum = (num) => num + 1;

compose (sum, sum)(5);

console.log(compose (sum, sum)(5));