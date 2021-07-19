console.info('**************************************');
console.info('::Coding Challenge #1:: Fundamentals 1-datatyles, operators');

//data 1:
let markMass = 78;
let markHeight = 1.69;
let johnMass = 92;
let johnHeight = 1.95;
let markBMI = markMass / (markHeight ** 2);
let johnBMI = johnMass / (johnHeight ** 2);
console.log(markBMI);
console.log(johnBMI);
let markHigherBMI;
if(markBMI > johnBMI) markHigherBMI = true; 
else markHigherBMI = false;
console.log(markHigherBMI);

//data 2: correct way
markMass = 95;
markHeight = 1.88;
johnMass = 85;
johnHeight = 1.76;
markBMI = markMass / (markHeight ** 2);
johnBMI = johnMass / (johnHeight * johnHeight);
markHigherBMI = markBMI > johnBMI;
console.log(markBMI, johnBMI, markHigherBMI);

//notes:
//use person names at end for naming conventions
//by default used const but renamed const to let for data2
//seperate console.log not required just use comma/sequence
//if & else not required to store boolen value of math operations, reduces code size