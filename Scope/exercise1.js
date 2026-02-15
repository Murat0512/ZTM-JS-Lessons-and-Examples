
// For all of these, what is the value of a when the function gets called with the alert()
// #1
function q1() {
    var a = 5;
    if(a > 1) {
        a = 3; // a will be 3
    }
    alert(a);
}

//#2
var a = 0;
function q2() {
    a = 5;   // The function will print 5, because a is declared in the global scope and is being reassigned to 5 in the function.

function q22() {
    alert(a);
}
 //function uses the global variable a which is 0 

//#3
function q3() {
    window.a = "hello";
}


function q32() {
    alert(a); // the function will print hello because it is in thr root scope and is being assigned to "hello" in the q3 function.
}

//#4
var a = 1;
function q4() {
    var a = "test";
    alert(a);
} // Alert will show test as it will look for the local variable assigned to it. 

//#5
var a = 2;
if (true) {
    var a = 5;
    alert(a);
}
alert(a);}

// it will print 5 then will print 5 because var is function scoped, not block scoped. 
// the second alert is still within the same function scope where a was reassigned to 5.