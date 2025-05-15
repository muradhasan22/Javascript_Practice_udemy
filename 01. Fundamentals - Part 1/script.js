let js = 'amazing';

if (js === 'amazing') {
    alert('JavaScript is FUN!');
}
console.log("Murad");
console.log('33');

let Name = "Elmi";

console.log(Name);
console.log(Name);

/*understanding =, == & === operator in javascript

1.Assignment(=) --> assign a value to a variable */

let a;
a = 10;
console.log(a);
/* The value 10 is assigned to variable a using '=' and printed.

2. Equality Operator (==) --> Type conversation and then compare values */

let u = "100";
let i = 100;
console.log(u == i);
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

/*const birthYear = 1990;
birthYear = 1992; */

/* in const variable cann't change for any point in the future. 
const variable is immutable. */

var job = 'programmer'
job = 'teacher';


/*Operators 
1. Mathematical operators: +,-,*,/ */

const now = 2025;
const ageMurad = now - 1991;
const ageElmi = now - 2022;
console.log(ageMurad, ageElmi);

console.log(ageMurad * 2, ageElmi / 10, 2 ** 3);
/* 2 ** 3 means, 2 to the power of 3 = 2*2*2 = 8 */

const firstName = 'Murad';
const lastName = 'Hassan';
console.log(firstName + ' ' + lastName);

/*Assignment Operators:

let x = 10 + 5; // x = 15
x += 10; // x = x + 10 
x *= 4;  // x = x* 4
x++;  // x = x + 1
x--;
x--;

console.log(x); */

// Comparison Operator : >, <, >=,<=

console.log(ageMurad > ageElmi);
console.log(ageElmi < ageMurad);
console.log(ageElmi <= 8);
console.log(ageElmi >= 8);
// ageElmi = ageElmi < 8

const isFullAge = ageElmi <= 3;
console.log(now - 1991 >= now - 2022);





// Precedence of defferent operators;

let x, y;
x = y = 25 - 10 - 5;// x = y = 10
console.log(x, y);

//Determine average values:
/*
const averageAge = (ageMurad + ageElmi) / 2;
console.log(ageMurad, ageElmi, averageAge);

//Coding Challenge #1:

//Declare variable with mass and height:
const massMark = 78;
const heightMark = 1.69;
const massjohn = 92;
const heightJohn = 1.95;

//Calculate their BMI with recommended formula:
const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massjohn / (heightJohn * heightJohn);

//Create a boolean variable :
const markHigherBMI = BMIMark > BMIJohn;

//Executed them together below:
console.log(BMIMark, BMIJohn, markHigherBMI);*/

//Coding Challenge #1:

//Declare variable with mass and height:
const massMark = 95;
const heightMark = 1.88;
const massjohn = 85;
const heightJohn = 1.76;

//Calculate their BMI with recommended formula:
const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massjohn / (heightJohn * heightJohn);

//Create a boolean variable :
const markHigherBMI = BMIMark > BMIJohn;

//Executed them together below:
console.log(BMIMark, BMIJohn, markHigherBMI);



