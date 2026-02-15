
//  Function declaration 

function checkDrivingAge(age){
    if (age<18){
        console.log("I am sorry! You are not legally allowed to drive");
    } else if (age ===18){
        console.log("That's great! You can start driving but with a supervision");
    }
    else {
        console.log((`Congratulations! You are old enough to drive`));
}
}

checkDrivingAge(17);
checkDrivingAge(18);
checkDrivingAge(19);


//  Function Expression 


const checkDrivingAge = function(age){
    if (age <18){
        console.log("I am sorry! You are not legally allowed to drive");
    }
    else if (age === 18){
        console.log("That's great! You can start driving but with a supervision");
    }
    else {
        console.log((`Congratulations! You are old enough to drive`));
    }
}

checkDrivingAge(17);
checkDrivingAge(18);
checkDrivingAge(19);
