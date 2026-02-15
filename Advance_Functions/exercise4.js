//Solve these problems:

//#1 Create a one line function that adds adds two parameters  /// Compose functions

const compose = (f,g) => (a) => f(g(a));

const sum = (num ) => num +1 ; 

compose(sum,sum((5)));

console.log(compose(sum,sum)((5)));

///////////////////////////////////////////////




// // Closure: What does the last line return?

const addTo = x => y => x + y
const addToTen = addTo(10)
addToTen(3)

console.log(addToTen(3));


// We assign  10 to x already then we have the addtoTen function requesting adding 3 on ten, so the total will be 13 



// //Currying: What does the last line return?
// const sum = (a, b) => a + b
// const curriedSum = (a) => (b) => a + b
// curriedSum(30)(1)
//The last line return 31 because we are calling the curriedSum function with 30 as the first argument (a) and 1 as the second argument (b).




// //Currying: What does the last line return?
// const sum = (a, b) => a + b
// const curriedSum = (a) => (b) => a + b
// const add5 = curriedSum(5)
// add5(12)
// The last line returns 17



// //Composing: What does the last line return?
// const compose = (f, g) => (a) => f(g(a));
// const add1 = (num) => num + 1;
// const add5 = (num) => num + 5;
// compose(add1, add5)(10)

// //What are the two elements of a pure function?

// it either return a value or undefined  it does not create any side effect
