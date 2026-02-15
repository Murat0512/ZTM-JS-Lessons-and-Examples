//  There are additions in ES8 

//1 - String Padding


// .padStart()
// .padend()


const firstSentence = "This is my first sentence"

console.log(firstSentence.padStart(20));


const secondsentence = "This is my second sentence"

console.log(secondsentence.padEnd(20));


////////////////////////////////

// Trailing comas, 

const fun = (a,b,c,d,) => {
    console.log(a);
}

fun(5,6,7,8);



//////////////////////

// Object.values
//Object.entries
// Object.keys


let object1 = {
    username1: "Santa",
    username2: "Rudolf", 
    username3: "Mr. Grinch"
}

Object.keys(object1).forEach((key,index) => {
    console.log(key, object1[key]);
})

Object.values(object1).forEach(value => {
    console.log(value);
})


Object.entries(object1).forEach(value => {
    console.log(value);
})


//  Real life example,

// We have been given usernames from the backend and we want to see the names and just the numbers of them instead of username1 usernam2 etc... 

// We can use a 

console.log(Object.entries(object1).map(value => {
    return value[1] + value[0].replace("username", "" ); 
}));











