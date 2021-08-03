console.info('**************************************');
console.info('::Coding Challenge #2::Fundamentals 1-If/Else');

const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;
const bmiMark = massMark / (heightMark ** 2);
const bmiJohn = massJohn / (heightJohn * heightJohn);
console.log(bmiMark, bmiJohn, bmiMark > bmiJohn);
if(bmiMark > bmiJohn){
    console.log(`Mark's BMI (${bmiMark}) is higher than John's (${bmiJohn})!`);
}
else{
    console.log(`John's BMI (${bmiJohn}) is higher than Mark's (${bmiMark})!`);
}