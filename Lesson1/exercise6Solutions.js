var array = [ "Banana", "Apple", "Oranges", "Blueberries"]; 


// Remove banana from array

array.shift()

console.log(array); // [ 'Apple', 'Oranges', 'Blueberries' ]


//  Sort the Array in order 


console.log(array.sort());


//  remove the Apples from array 


array.shift();

console.log(array);

//  Add kiwi at the end of the array 

array.push("Kiwi");

console.log(array);

// reverse the array 


array.reverse();

console.log(array);


//  indexing in arrays

var array1 = [ "Banana", ["Apple", ["Oranges"], "Blueberries"]];


console.log(array1[1][1][0])