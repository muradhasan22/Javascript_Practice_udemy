let js = 'amazing';

if (js === 'amazing') {
    alert('JavaScript is FUN!');
}
console.log("Murad");
console.log('33');

let Name = "Elmi";

console.log(Name);
console.log(Name);

/* 22. understanding =, == & === operator in javascript

1.Assignment(=)-- > assign a value to a variable */

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

/*Declare variable with mass and height:
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
console.log(BMIMark, BMIJohn, markHigherBMI); */

/* Non-Primitive data Types :

1. Object: (Key - value pair): */
let student = {
    name: "Anabiya",
    age: 4,
    isStudent: true
};
console.log(student.name);
// A students record in a school management system
/*
2. Array: ( list of item stored in ordered index[0]) */

let fruits = ["Mango", "Banana", "Apple", "Water Melon"];

console.log(fruits[1]);
//A basket containing multiple fruits.
/*
3. Function: ( A block of code) */
function greet(name) {
    console.log("Hello " + name);
}
greet("Muntaha");

// 17. String And template literals:

const fName = 'Murad';
const jb = 'Web Developer';
const birthYear = 1992;
const yr = 2025;

const murad = "I'm " + fName + ', a ' + (yr - birthYear) + ' years old ' + jb + '!';
console.log(murad);

const muradnew = `I'm ${fName}, a ${yr - birthYear} years old ${jb}!`;
console.log(muradnew);

console.log(`Just a regular srting...`);

console.log('String with \n\
multiple \n\
lines');

console.log(`String write in
    muliple lines
    with backtics`);

//18. If / Else statements(Control structure):
const ag = 15;
//const isOldEnough = age >= 18;

if (ag >= 18) {
    console.log('Elmi is eligible for driving license !');
} else {
    const yearsLeft = 18 - ag;
    console.log(`Elmi is too young, wait another ${yearsLeft} years.`);
}

const brthyear = 2001;

let century;
if (brthyear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);

//Coding Challenge #2:

//Part - 1:
//Declare variable with mass and height:
const massMark = 95;
const heightMark = 1.88;
const massJhon = 85;
const heightJhon = 1.76;

//Calculate their BMI with recommended formula:
const BMIMark = massMark / heightMark ** 2;
const BMIJhon = massJhon / (heightJhon * heightJhon);
console.log(BMIMark, BMIJhon);

/*if (BMIMark > BMIJhon) {
console.log("Mark's BMI is higher than Jhon's!")
} else {
    console.log("John's BMI is higher than Mark's!")
} */
//Part-2:
if (BMIMark > BMIJhon) {
    console.log(`Mark's BMI (${BMIMark}) is higher than Jhon's BMI (${BMIJhon})!`)
} else {
    console.log(`John's BMI (${BMIJhon}) is higher than Mark's BMI (${BMIMark})!`)
}

// 20.Type conversion and coersion:

const inputYear = '1991';
console.log(Number(inputYear));
console.log(Number(inputYear) + 33);

console.log(String(23), 23);


console.log('I am a ' + 33 + ' years old programmar.');
console.log('33' - '20' - 3);
console.log('23' / 2);

let p = '1' + 1;// '11'
p = p - 1;
console.log(p);

//21. Truthy and falsy values :
// 5 Falsy Values : 0, '', undefined, null, NaN.

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Elmi')); //string is truthy value
console.log(Boolean(null));
console.log(Boolean(NaN));


const money = 100;
if (money) {
    console.log('Dont spend it at all');
} else {
    console.log('You should get a job.!');
}

let height = 100;
if (height) {
    console.log('Hey, Height is defined !');
} else {
    console.log('Height is undefined !')
}

// 23. Boolean Logic:
// Javascript implement boolean logic with and(&&), Or(||), Not (!) operators

const hasDriversLicense = true //A
const hasGoodVision = true //B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

/*if (hasDriversLicense && hasGoodVision) {
console.log("Elmi is able to drive!");
} else {
    ("Someone else should drive..");
} */
const isTired = true //C

if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log("Elmi is able to drive!");
} else {
    console.log("Someone else should drive..");
}

// Coding Challenge - 3:

/* question no - 1;
const scoreDolphin = (96 + 108 + 89) / 3;
const scoreKoalas = (88 + 91 + 110) / 3;
console.log(scoreDolphin, scoreKoalas);

//question no - 2;
if (scoreDolphin > scoreKoalas) {
    console.log("Dolphin's win the trophy.!");
} else if (scoreKoalas > scoreDolphin) {
    console.log("Koalas's win the tropht.!");
} else if (scoreKoalas === scoreDolphin) {
    console.log("Both win the trophy.!");
} else {
    console.log("No one win the trophy.!");
} */

const scoreDolphin = (97 + 95 + 101) / 3;
const scoreKoalas = (101 + 95 + 103) / 3;
console.log(scoreDolphin, scoreKoalas);

//question no - 2;
if (scoreDolphin > scoreKoalas && scoreDolphin >= 100) {
    console.log("Dolphin's win the trophy.!");
} else if (scoreKoalas > scoreDolphin && scoreKoalas >= 100) {
    console.log("Koalas's win the tropht.!");
} else if (scoreKoalas === scoreDolphin && scoreDolphin >= 100 && scoreKoalas >= 100) {
    console.log("Both win the trophy.!");
} else {
    console.log("No one wins the trophy.!😂")
}

//26. Switch statement:

const day = 'saterday';

switch (day) {
    case 'monday':
        console.log('Plan course structure');
        console.log('Go to coding meetup');
        break;

    case 'tuesday':
        console.log('Prepare theory video');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('Write code examples');
        break;
    case 'friday':
        console.log('Record videos');
        break;
    case 'saterday':
    case 'sunday':
        console.log('Enjoy the weekend :D');
        break;
    default:
        console.log('Not a valid day');
}

//27.Statement and Expression :

//Expression : A piece of code that produce a value
3 + 7;
1992;
true && false || !true;

//Statement: A larger piece of code that doesn't produce a value by itself

if (23 > 10) {
    const str = '23 is bigger';
}

// In template literals we can only insert expression not statemenmt.
age = 2025 - 1992;
console.log(`I'm ${age} years old web developer.`); // works expression

//28.Conditional(Ternary) operator;\:

const ags = 23;
const drink = age >= 18 ? 'wine' : 'water';
console.log(drink);

let drink2;
if (age >= 18) {
    drink2 = 'wine';
} else {
    drink2 = 'water';
}
console.log(`I like to drink ${age >= 18 ? 'wine' : 'water'}`);