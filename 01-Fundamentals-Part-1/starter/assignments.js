console.info('**************************************');
console.info('::Assignment::');
document.write('<h1>::Open console to view output::</h1>');
// ctrl + / - repeat to uncomment

/* 
multi
line
*/ 
console.log('---Values & variable');
const country = 'India';
const continent = 'Asia';
let population = 100.35; // value hold data type
console.log(country);
console.log(continent);
console.log(population);

console.log('---Data types');
const isIsland = false;
let language;
console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

console.log('---let, const and variable');
language = 'Hindi and other native languages';
//continent = 'Pangea'; //generates TypeError: assignment to constant variable, const continent was reassigned value


console.log('---basic operators');
let halfPopulation = population / 2; //must use console.log directly, variable was not required
console.log(halfPopulation); //50.175
//1. correct- 
console.log(population/2);

console.log(population+0.01); //100.36
//2. corrrect- increment by 1unit then log
population++;
console.log(population);

const finlandPopulation = 6;
console.log(population > finlandPopulation); //true

//correct- just check in console, extra declarations not required
console.log(population>6);

const averagePopulation = 33;
console.log(population < averagePopulation); //false
//correct- just check in console, extra declarations not required
console.log(population<33);


let description = 'Portugal is in europe, and its 11 million people speak portuguese';

//correct- have to display usage of concat operator & use const where ever required first, change later if required
const DESCRIPTION = 
country +
' is in ' + 
continent + 
', and its ' +
population + 
' million people speak ' + 
language;
console.log(DESCRIPTION);
