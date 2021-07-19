console.log('::Course::');
console.log('---Values & variable');
let js = 'amazing'; 
console.log( 40 +8 +23-10);

console.log( 'Nitesh');
console.log(27);

console.log(js);

let nitesh_patare = 'NP';
let $function = 27; //keyword can be used by $ or _ at beginning
let person = 'Nitesh'; //must not start with UPPERCASE
let PI = 3.1415;  //constant
let name = 'Nitesh'; //is a keyword but can be used, can cause issues

let myFirstJob = 'Programmer';
let myCurrentJob = 'Life long learner'; //good naming convention

let job1 = 'Programmer';
let job2 = 'Learner'; //bad naming convention


console.log('---Datatypes');
//variable is a box to store values, we give it a name to reference it later over and over again
let jsFun = true; // value hold data type
console.log(jsFun);

console.log(typeof true);
console.log(typeof jsFun);
console.log(typeof 23);
console.log(typeof 'Nitesh');

jsFun = 'yes'; //dynamic typing assigns new value to existing variable
console.log(jsFun);
console.log(typeof jsFun);

let year;
console.log(year); //undefined
console.log(typeof year); //undefined

year = 1991;
console.log(typeof year);

//bug in js- still kept for legacy reasons
console.log(typeof null);  //returns object - must be null


console.log('---Let, const & var');
//let & const moden js, var is old js style to declare variables

//::let::
let age =3000;
age = 31; //mutated variable, this is perfect case to use let, declare empty val at top and assign values later in programm

//::const::
const birthYear = 1990
//birthYear = 1992; //gives error
//usecase to create a immutable variable, which cannot be changed/mutated, birth year cannot change hence constant, 

//const job; //gives error, it means empty const is not legal

//by default use const and let only if variable needs to change in future

//good practise to have little mutation/changes, bcoz changing variable introduces potential for bugs in code

//const bydefault

//avoid var compltely, but only know how it works for legacy reasons

//::var::
//old way to declare variables
var job = 'programmer';
job = 'learner';

//let block scope for
//var function scope - never use var

lastName = 'patare';
console.log(lastName); //terrible way, creates property on global object

//::Properly declare variables:: by const, if required then let, if function scope then var::


console.log('---Operators');
//Math operators (BODMAS)
//minus operator, 
const now = 2021
const ageNitesh = now -1990;
const ageNikhil = now - 1992;
console.log(ageNitesh, ageNikhil);
//times operator,exponatiation operator, division operator
console.log(ageNitesh*2, ageNikhil /10, 2**3);
//2**3 menas 2 to the power of 3 = 2*2*2

const FIRSTNAME = 'Nitesh';
const LASTNAME = 'Patare';
console.log(FIRSTNAME+' '+LASTNAME); //concat operator
console.log(`${FIRSTNAME} ${LASTNAME}`); //template literals
console.log(typeof isIsland); //typeof operator

//assignment operators
//operator precedence is applied, hence 10+5 is done first and result is applied to x
let x = 10+5; //15
x+=10; //25, x =x+10
x*=4; //x = x*4 -//100
x++; //x=x+1 -//101
x--; //x=X-1
x--; //99
console.log(x);

//comparison operator - to produce boolean values
console.log(ageNitesh > ageNikhil); // <,<, <=, <=, >=,
console.log(ageNitesh >= 18); //true
console.log(ageNitesh <=18); //false
const isFullAge = ageNitesh >= 18;
console.log(now - 1990 > now - 1992); //true
//- is 14 precedence
//> 12 precedence


//?? MATH or comparison operator precedence...?
//JS has well defined order of operator, mdn operator precedence, developer.mozilla.org
//21-1, grouping ( ... ) - comma/sequence ... , ...
//execution of operator left-to-right or right-to-left

console.log(25-10-5); //left-to-right

let x1,y1;
x1 = y1 = 25-10-5;
console.log(x1,y1);
 //precedence of minus is highther, so left-to-right after this assignment operator is  right-to-left execution 
// x=y=10, y=10, x=10
console.log(x1,y1); // 10 10

const averageAge = (ageNitesh + ageNikhil) /2; //used grouping operator gives correct result with higher precedence
console.log(ageNitesh, ageNikhil, averageAge);


console.log('---String & template literal');
const firstName = 'Nitesh';
const job3 = 'learner';
const birthYear2 = 1990;
const year2 = 2021;

const nitesh = "I'm " + firstName + ", a " + (year2 - birthYear2) + " years old " + job3 + '!';
console.log(nitesh);

//template literals
const nikhil = `I'm ${firstName}, a ${year2 - birthYear2} years old ${job3}!`
console.log(nikhil);

//use template literals at all places
//use template literals for multiline strings, earlier we used \n\ to end line and started on new line, example below of old way
console.log('String with \n\
multiple \n\
lines');


console.log('---If / else control structure'); //allows us to have control over the blocks of code, gives us control over how code works
const age2 = 15;
if(age2 >=18){ 
    console.log('Nitesh old enough to drive🚗'); //win+. shortcut key for emoticon
}
else {
    const yearLeft = 18 -age2;
    console.log(`Nitesh not old enough to drive. 🚲. Wait for ${ yearLeft } years`);
}
