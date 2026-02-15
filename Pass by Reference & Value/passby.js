// //  Passing the value of a constant variable to another variable

// let a = 5;
// let b= a 

// console.log(b);

// console.log(b+1);

// console.log(a);

///////////////////////////////////////////////////////


// // Passing the value of an object to another variable


// let object = { a: "a" , b: "b" , c: "c"};


// let object1 = object;

// console.log(object1);


// object1.c = "New Value"; 

// console.log(object);

////////////////////////////////////////////////////

// let array1 =[1,2,3,4,5];

// let array2 = array1;

// array2.push(1234567890);

// console.log(array1);
// console.log(array2);

////////////////////////////////////////

// //  As you can see onee you modify one array it changes the second array object,
// //  This can be dangerous at times as well as benefits 
// // What if i wanted to change only one of them but keep the initial object1 array



// //  WAYS TO DO IT 

// // Using Concat methos 


// let array3 = array1.concat()
// console.log(array3);

// array3.push("murat2");

// console.log(array3);
// console.log(array1);


////////////////////////////////////////////////////


// // Cloning an object using Object.assign() method

// let object1 = { a: "a" , b: "b" , c: "c"};

// let clone = Object.assign({}, object1);

// object1.c = "New Value";

// console.log(object1);
// console.log(clone);


// //  Using ... spread operator

// let clone2 = { ... object1};
// console.log(clone2);


//////////////////////////////////////

// What if we had object within an object 


let obj = {
    a: "a",
    b: "b",
    c: {
        deep: "try and copy me"
    }
}



























