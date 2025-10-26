//activating strict mode with

'use strict';

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
console.log(hasDriversLicense);

// Function
// A function is a block of reusable code that performs a specific task.

function greetUser(name) {
    console.log("Hello, " + name + "!");
}
greetUser("Elmi");

//explanation: name is parameter. When call/invoke the function, i pass the argument("Elmi").

//Function Declaration :
function calcAge1(birthyear) {
    return 2037 - birthyear;
}
const age1 = calcAge1(1991);

//Function Expression:
/*what we can with function expression: 
** store them in variable,
** pass them to other function
** retrurn them from function */

const calcAge2 = function (birthyear) {
    return 2037 - birthyear;
}
const age2 = calcAge2(1991);

console.log(age1, age2);

//Arrow function :

const yearsUntilretirement = (birthYear, firstname) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;

    return `${firstname} retires in ${retirement} years .`
}
console.log(yearsUntilretirement(1991, 'Murad'));
console.log(yearsUntilretirement(1980, 'Murad'));