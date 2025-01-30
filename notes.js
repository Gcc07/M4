// IF STATEMENTS //
let age = 25;

if(age >= 21) {
    console.log("You are a legal adult");
}
if(age < 21) {
    console.log("You are a child");
}
let hasLicense = true;

if(age >= 16) {
    if(hasLicense) { // age >= 16 and has license
        console.log("You can drive");
    }  
    else { // age >= 16 but no license
        console.log("You can't drive");
    }    
}
else { // age < 16
    console.log("You can't drive because you are not old enough");
}

age = 13

if(age >= 13) {
    console.log("You old enough to doomscroll");
}

// FUNCTIONS

function functionname(parameter1, parameter2) {
    console.log("This is a function: $(parameter1) $(parameter2)");
}

function isEven(number){
    return number % 2 === 0 ? true : false; // ternary operator
}
console.log(isEven(4)); // true

function isValidEmail(email){
    return email.includes("@") ? true : false;  
}
console.log(isValidEmail("gabec@gmail.com")); // true