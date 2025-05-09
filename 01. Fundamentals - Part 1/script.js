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

/* Output = "loose match"




