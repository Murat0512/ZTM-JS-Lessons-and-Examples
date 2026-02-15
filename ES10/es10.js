// // New features in ES10 (ECMAScript 2019)



// // Flat 

// const array = [ 1,2,3,4,5,6] 

// const array1 = [ 1,2,[3,4],5,[6,[7]]]


// console.log(array); // object = [1,2,3,4,5,6]
// console.log(array1.flat(2)); // the result would be object1 = [1,2,3,4,5,6,7]  if we have  2 layers of arrays we can set it 
// // so set your array layers depends on how many you have, It is set to 1 by default 



// const entries = [ "bob2", "sally"  , , , , , , "Martin"];

// console.log(entries.flat())  // ["bob", "Sallu", "Martin"]



// // FLATMAP() 


// const userEmail = [ 
//     "Murat@hotmail.",
//     "kevin2collins@yahoo.",
//     "annaefth@gmail."
// ]


// const userCom = userEmail.flatMap( addCom => addCom + "com")

// console.log(userCom)  // result would be ["murat@hotmail.com", "kevincollins@yahoo.com", "annaefth@gmail.com"]



// // trimStart and trimEnd 


//  const useremail1 = "             murat@hotmail.com";
//  const useremail2 = "kevincollins@yahoo.com              "; 

//  console.log(useremail1.trimStart());
//  console.log(useremail2.trimEnd());


 // formEntries  It transform a key-value pair to an object


 userProfile = [["Commander Tom , 23 "],["Derek", 40], ["Murat", 46]];

 userProfiles= (Object.fromEntries(userProfile)); // { 'Commander Tom , 23 ': undefined, Derek: 40, Murat: 46 }

 console.log(userProfile); //[ [ 'Commander Tom , 23 ' ], [ 'Derek', 40 ], [ 'Murat', 46 ] ]

 console.log(userProfiles); 


 // Object.entries 

 userProfilesentries = Object.entries(userProfiles);

 console.log(userProfilesentries)   //[
  //[ 'Commander Tom , 23 ', undefined ],
  //[ 'Derek', 40 ],
  //[ 'Murat', 46 ]
//]

//It reurned all the values as the original FormData. as ARRAY






