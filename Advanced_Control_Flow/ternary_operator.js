

// TERNARY OPERATOR  


// Syntax looks like this 

//condition ? expr1 : expr2;

//  This says  if the condition is true use expression 1 if it is false use expression 2


// EXAMPLE 


function isUserValid(bool){
    return bool; 

}

var answer = isUserValid(true) ? "You may enter" : "Access denied";

console.log(answer);


function condition(){
    if (isUserValid(true)){
        return "You may enter";
    } 
    else{
        return "Access denied";
    }
    }

    var answer2 = condition();

    console.log(answer2);
    