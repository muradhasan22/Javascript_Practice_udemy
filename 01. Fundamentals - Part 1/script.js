let js = 'amazing';

if (js === 'amazing') {
    alert('JavaScript is FUN!');
}
console.log("Murad");
console.log('33');

let firstName = "Elmi";

console.log(firstName);
console.log(firstName);

/*understanding =, == & === operator in javascript

1.Assignment(=) --> assign a value to a variable */

let a;
a = 10;
console.log(a);
/* The value 10 is assigned to variable a using '=' and printed.

2. Equality Operator (==) --> Type conversation and then compare values */

let x = "100";
let y = 100;
console.log(x == y);
/* == allows type convertion and string "100" is converted to number 100 before comparison.

3. Strict Equality (===) --> 
Compare value and just check type. */

let w = "100";
let z = 100;
console.log(w === z);
/* === check both value and type , "100" is string and 100 is number, so they are not equal. */

/* Mix them up below : */

let m = 10;
let n = "10";

if (m == n) {
    console.log("loose match");
}

if (m === n) {
    console.log("strict match");
}

/* Output = "loose match" */

let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof "Elmi");
console.log(typeof 34);

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1992;
console.log(typeof year);
console.log(year);

console.log(typeof null);

/* Mutate a variable is we call this reassigning a value to a variable.*/

let age = 30;
age = 31;
console.log(age);

const birthYear = 1990;
birthYear = 1992;

/* in const variable cann't change for any point in the future. 
const variable is immutable. */

var job = 'programmer'
job = 'teacher';
console.log(job);


