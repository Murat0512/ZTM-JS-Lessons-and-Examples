// // BigInt 

// // It is a new type that can represent integers with arbitrary precision.
// //  It is denoted by appending 'n' to the end of an integer 
// // literal or by using the BigInt constructor.
// // Max safe integer , there is a limit a number can be stored in JS 

// const maxNumber = BigInt(Number.MAX_SAFE_INTEGER); // 9007199254740991


// const added = maxNumber + 10n;

// console.log(added);


// // Nullish Coelascing Operator


// console.log(typeof(1n + 2n + 3n)); // "bigint"


// //////////////////////////////////////


// ///           NULLISH COALESCING OPERATOR /////////////

// // The nullish coalescing operator (??) is a logical operator that returns 
// // the right-hand operand when the left-hand operand is null or undefined, and otherwise returns 
// // the left-hand operand. It is often used to provide default 
// // values for variables that may be null or undefined.




// let andrei_pokemon = {
//     pokemon: {
//         species: "Mouse Pokemon",
//         height: 0.4,
//         weight: 6,
//         power: "Lightning Bolt"
//     }
// }

// let power = andrei_pokemon.power ?? "No power assigned";
// console.log(power); // "Lightning Bolt"











// Optional chaining operator (?.) is a new feature in JavaScript that allows 
// you to safely access nested properties of an object without having to check 
// if each property in the chain exists. It returns undefined if any part of the chain 
// is null or undefined, instead of throwing an error.


// let andrei_pikatchu = {
//     raichu: {
//         species: "pikachu",
//         height: 0.4,
//         weight: 6
//     }
// }


// let weight = andrei_pikatchu ?.pikatchu?.weight 

// console.log(weight);

// // We can search if objectv has the elememnt or not using optional chaining operator

// let hasRaichu = andrei_pikatchu ?.raichu !== undefined;
// console.log(hasRaichu); // true

// let hasPikatchu = andrei_pikatchu ?.pikatchu !== undefined;
// console.log(hasPikatchu); // false




///////////////////////////////////////////////////////////////////////////////////////////////////




// Exercise 1: what do you think the MIN_SAFE_INTEGER is?
// console.log(Number.MAX_SAFE_INTEGER)  

// console.log(Number.MIN_SAFE_INTEGER)// As oppose to positive max_safe_integer this is
// //  the negative representation of safe integer value


//Exercise 2: why does this throw an error? How can you fix it?

console.log (BigInt(100) + 1n); 
// this throws an error because we are trying to add a regular number (100) to a BigInt (1n).
// To fix this, we can either convert the regular number to a BigInt or convert the BigInt to a regular number before performing the addition.



// // Exercise 3: Clean up this code using optional chaining
// let will_pokemon = {
//     pikachu: {
//         species: 'Mouse Pokemon',
//         height: 0.4,
//         weight: 6,
//         power: 'lightning',
//         friend: { 
//             charizard: {
//                 species: 'Dragon Pokemon',
//                 height: 1.7,
//                 weight: 90.5,
//                 power: 'fire'
//             }
//         }
//     }
// }

// let andrei_pokemon = {
//     raichu: {
//         species: 'Mouse Pokemon',
//         height: 0.8,
//         weight: 30,
//         power: ''
//     }
// }



if (andrei_pokemon?.raichu && will_pokemon?.pikachu?.friend?.charizard) {
        console.log('fight!')
    } else {
        console.log('walk away...')
    }

// if (andrei_pokemon && andrei_pokemon.raichu && will_pokemon 
//     && will_pokemon.pikachu && will_pokemon.pikachu.friend 
//     && will_pokemon.pikachu.friend.charizard) {
//         console.log('fight!')
//     } else {
//         console.log('walk away...')
//     }


// // Exercise 4: What do these each output?
// console.log(false ?? 'hellooo')
// console.log(null ?? 'hellooo')
// console.log(null || 'hellooo')
// console.log((false || null) ?? 'hellooo')
// console.log(null ?? (false || 'hellooo'))

