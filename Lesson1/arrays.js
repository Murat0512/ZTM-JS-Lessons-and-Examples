//  Array examples 

//  Crreate a series of arrays and type check them in the console
var list = [1, 2, 3, 4, 5];
var list2 = ['a', 'b', 'c', 'd', 'e'];
var list3 = [1, 'a', true, null, undefined];

console.log(typeof list); // object
console.log(typeof list2); // object
console.log(typeof list3); // object


console.log(list[1]); // 2
console.log(list2[3]); // 'd'
console.log(list3[2]); // true


//  Lists can also have functions in it as well 

var list4 = [ function () { console.log('Hello'); }, function() { console.log('World'); } ];

list4[0](); // Hello
list4[1](); // World


//  We can have arrays within arrays 

var list5 = [ 1,3,5, [2,4,6] ];

console.log(list5[3][2]);

//  Operations with lists 

//  Shift and unshift
var list6 = [1, 2, 3];
list6.unshift(0);
console.log(list6); // [0, 1, 2, 3]
list6.shift();
console.log(list6); // [1, 2, 3]

//  List pop and push 

var list7 = [1, 2, 3];
list7.push(4);
console.log(list7); // [1, 2, 3, 4] // Adds a new element at the end of the list
list7.pop();
console.log(list7); // [1, 2, 3] // removes the last element from the list
    
//  List concatenation

var list8 = [1, 2, 3];
var list9 = [4, 5, 6];
var list10 = list8.concat(list9);
console.log(list10); // [1, 2, 3, 4, 5, 6]


//  list sort 
var list11 = [3, 1, 4, 2, 5, 3];
list11.sort();
console.log(list11); // [1, 2, 3, 3, 4, 5] // sorts the list in ascending order

//  sort only sorts the original list , if you concatenate the list it will not sort the new list
var list12 = list11.concat([6, 0]);
console.log(list12); // [1, 2, 3, 3, 4, 5, 6, 0] // the new list is not sorted  

console.log(list11); // [1, 2, 3, 3, 4, 5] // the original list is still sorted

//  there are many more operstions , check them on W3 schools or MDN documentation for more information on arrays in JavaScript.