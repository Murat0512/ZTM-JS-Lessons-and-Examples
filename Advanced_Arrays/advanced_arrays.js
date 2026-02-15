const array = [ 1,2,15,24,2,55,55,67,89,100]; 

const double= [];  // if we are looking to produce a newe array we always need a new basket to put them 

const newArray = array.forEach ((num) => {
    double.push(num*2); // if we have a new basket,  think how you will place them into it, thats where .push command comes in. 
});


console.log("forEach:", double); // [ 2,4,6,8,10]


//   MAP, FILET , REDUCE COMMANDS (tHE MOST IMPORTANT ARRAY COMMANDS)

//  MAP ARRAY CREATES A LOOP OVER THE VALUES IN AN ARRAY AND APPLIES THE FUNCTION TO EACH VALUE IN THE ARRAY AND RETURNS A NEW ARRAY WITH THE RESULTS.

const mapArray = array.map ((num) => {
return num * 2;  // Do not forget to add returbn statement in map method, otherwise it will return undefined for each element in the array and we will end up with an array of undefined values.
});

console.log("Maparray:", mapArray); // [ 2,4,6,8,10]
//  Map array is preferred option as it returs a new array and it is more concise and easier to read than forEach method.and It does not creates a side effect on the original array.

// we are not touching the original array and we are creating a new array with the results of the function applied to each element in the original array.


// FILTER METHOD 

const filterArray = array.filter (num =>{  // Allows us to choose which element we want to pick from an array 
    return num <= 5  // This also requires return statement 
}); // We can use operators such as <, >, <=, >=, ==, != to filter the array based on our condition.

console.log(filterArray); // in the end it will return us a new array with the elements that satisfy the
//  condition we set in the filter method. In this case, it will return [1, 2, 2] because those are the only elements 
// in the original array that are less than or equal to 5.


// REDUCE METHOD 

const reducedArray = array.reduce ((accumulator, number) => {
    return accumulator + number 
} , 0); ; // The reduce method takes a callback function and an initial value as arguments. T
// he callback function takes two arguments, the accumulator and the current value. 
// The accumulator is the value that is returned by the previous iteration of the callback function, and the current 
// value is the current element being processed in the array. The initial value is the value that is used as the first argument to 
// the first call of the callback function. In this case, we are using 0 as the initial value, which means that the first time the callback 
// function is called, the accumulator will be 0 and the current value will be the first element of the array. The reduce method will then 
// iterate through the array, calling the callback function for each element and updating the accumulator with the return value of the callback function. 
// In this case, we are adding the current value to the accumulator, which means that at the end of the iteration, 
// the accumulator will contain the sum of all the elements in the array.

console.log(reducedArray); // 410, which is the sum of all the elements in the array.

