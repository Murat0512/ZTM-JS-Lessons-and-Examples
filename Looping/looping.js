// WE TALKED ABOUT WHILE LOOP, FOR LOOP, FOReACH LLOPS AND DO LOOP.

// // THERE are 2 more method in JS 

// const basket = [ "apples", "oranges", "grapes"]; 

// // for (let i = 0 ;  i < basket.length; i++ ){
// //     console.log(basket[i]);
// // }

// // ////////////////////

// // basket.forEach( item => {
// //     console.log(item);
// // })

// //////////////////////


// // FOR OF (iteration of array) You can itrate over arrays, strings, 

// for( item of  basket){
//     console.log(item);
// }

/////////////////////////////////////////////////////////////////
//and FOR IN loops  work with OBJECTS 
// for in loop is not iteratiing , it is enumerating  the object and showing us the properties of the object/ 

//  Properties of an Objects are enumerable 

// const detailedBasket = {
//     apples: 24,
//     oranges:12,
//     grapes: 6

// }

// for (item in detailedBasket){
//     console.log(item);
//}
//////////////////////////////////////////////////////////////////

// const array = [-1,0,3,100, 99, 2, 99] 

// function biggestNumberInArray(arr){
//     let highest = arr[0]; 
//     for (let i = 0 ; i < arr.length; i++) {
//         if (arr[i] > highest ) {
//             highest = arr[i]; 
//         }
//     }
//     return highest; 
// }

// const result= biggestNumberInArray(array); 

// console.log(result);

// //////////////////////////////////////////

const array2 = ['a', 3, 4, 2] // should return 4


function biggestNumberInArray1(arr){

let highest = -Infinity; 

    for( let i = 0 ; i < arr.length; i++){
        if (typeof arr[i] === "string") {
            console.log("This is not a number");
            continue; 
        }
    
        
        if(arr[i] > highest){
                highest = arr[i];
            }
        }
    return highest;        
}
      
const result= biggestNumberInArray1(array2);

console.log(result);