//  We have let and const 

const player = "Kevin"; // if spomething wont change use const 
let gamingScore = 100; 
let gamingLevel = 4; 


const a = function(){
}

// A fucntion once created it wont change, so it is logical assigning to a const


const obj= {
    player: "murat",
    score: 400,
    experienced: true
}


// obj = 5 //  It will not accept assigning a new value to an object but it will allow you to modify the property inside it. 


obj.experienced= false 


console.log(obj); // { player: 'murat', score: 400, experienced: false }