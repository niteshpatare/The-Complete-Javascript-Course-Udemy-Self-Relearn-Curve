
//https://www.udemy.com/course/javascript-es6-tutorial/
//Contains all solved challenges from course


console.log('---Moving away from for loop: Use forEach');

function savePost (post){
    console.log(post);
}
function handlePosts() {
    var posts = [
      { id: 23, title: 'Daily JS News' },
      { id: 52, title: 'Code Refactor City' },
      { id: 105, title: 'The Brightest Ruby' }
    ];
    //old 
    console.log("---Old for loop");  
    for (var i = 0; i < posts.length; i++) {
      savePost(posts[i]);
    }

//new forEach array helper method - completed
console.log("---New forEach array helper method: #1");   
    posts.forEach(function(post){
        savePost(post);
    });
}
handlePosts();

console.log("---Processing values: #2");
//calculate area of image w*h and store in new Array
  var images = [
    { height: 10, width: 30 },
    { height: 20, width: 90 },
    { height: 54, width: 32 }
  ];
  var areas = [];
  images.forEach(function(image){
      areas.push(image.height*image.width);
  });
  console.log(areas); //[300, 1800, 1728]

console.log("---Plucking values: #3");
//show height*width in new array heights
  var images = [
    { height: '34px', width: '39px' },
    { height: '54px', width: '19px' },
    { height: '83px', width: '75px' },
  ];
  var heights = images.map(function(image){
      return image.height;
  });
  console.log(heights); //["34px", "54px", "83px"]

console.log("---Calculating values: #4");
//calculate distance/time
  var trips = [
    { distance: 34, time: 10 },
    { distance: 90, time: 50 },
    { distance: 59, time: 25 }
  ];
  var speeds = trips.map(function(trip){
      return trip.distance/trip.time;
  });
  console.log(speeds); //[3.4, 1.8, 2.36]


console.log("---Really Hard: Implementating PLUCK: #5");
//pluck function must accept array and property name as input to call and return an array with values of that properties as new array
//works in browser case #1
  var paints = [{ color: 'red'}, {color: 'blue'}, {color: 'yellow'}]
  var colors = [];
  function pluck1(paints, property) {
    let color = paints.map(function(paint){ 
        return colors.push(paint[property]);
    });
    return color;
  }
  pluck1(paints, 'color');
  console.log(colors);
   //approved by udemy cas #2
  var paints = [{ color: 'red'}, {color: 'blue'}, {color: 'yellow'}]
  var colors2 = [];
  function pluck(paints, property) {
    let color = paints.map(function(paint){ 
        return paint[property];
    });
    return color;
  }
  colors2.push(pluck(paints, 'color'));
  console.log(colors);


  console.log("---Filtering Values: #6");
  //find array of numbers and return new array with values > 50
  var numbers = [15, 25, 35, 45, 55, 65, 75, 85, 95];
  var filteredNumbers = numbers.filter(function(num){
    return num>50;
  });
  console.log(filteredNumbers);


  console.log("---Handling permissions with filter: #7");
//filter array of user, returning only those with admin access
  var users = [
    { id: 1, admin: true },  
    { id: 2, admin: false },
    { id: 3, admin: false },
    { id: 4, admin: false },
    { id: 5, admin: true },
  ];
  var filteredUsers = users.filter(function(user){
       return user.admin;
  });  
  console.log(filteredUsers);


  console.log("---Implement Reject: #8");
  //create function reject, if function returns true, the number must not be included in new array

   //way1 - check of number > 15 and return numbers less than 15 in new array
  var numbers1 = [ 10, 20, 30 ];
  var lessThanFifteen1 = []; 
  lessThanFifteen1 = numbers1.filter(reject1).filter(reject1);
  function reject1(num) { //console.log(num);
      if(num > 15) return false; else return true;
  }
    console.log(lessThanFifteen1);

  
   //way2 - udemy approved solution
   var numbers = [ 10, 20, 30 ];
   function reject(numbers){
         return numbers.filter(function(num){
             return num >15 ? false: true;
         });
   };
   var lessThanFifteen = reject(numbers)
   console.log(lessThanFifteen); // [10]


console.log("---Finding admin users:#9");
//find user who admin value us true
var users = [
    { id: 1, admin: false },
    { id: 2, admin: false },
    { id: 3, admin: true }
  ];
  var admin = users.find(function(user){
      return user.admin === true;
  });
  console.log(admin); //{id: 3, admin: true}


console.log("---Whats your balance:#10");
//return account with blance 1728
var accounts = [
    { balance: -10 },
    { balance: 12 },
    { balance: 0 }
  ];
  
  var account = accounts.find(function(acc){
      return acc.balance === 12;
  });
  console.log(account);


console.log("---Hard Custom findWhere helper:#11");
var ladders = [
    { id:1, height: 25 },
    { id:2, height: 20 },
    { id:3, height: 29 }
];
var foundLadder;
function findWhere(ladders, criteria) {
  foundLadder  = ladders.find(function(ladder){
      console.log(ladder.height, Object.keys(ladder)[1], criteria.height, Object.keys(criteria)[0]);
      return (Object.keys(ladder)[1] === Object.keys(criteria)[0]) && (ladder.height === criteria.height);
  });
  return foundLadder;
}
findWhere(ladders, { height: 20 });
console.log(foundLadder);


console.log("---Hard: every & some validation example: pre#12");
  function Field(value){
    this.value = value
  };
  const username = new Field("Nitesh");
  const password = new Field("everysome");
  Field.prototype.validate = function(){
   return this.value.length >0;
  }

//old way need to cann validate every time when we add new fields
  if(username.validate() && password.validate()){
  //login
  }
  else{
  //display ms on screem
  }

//new way using every helper
  const birthdate = new Field("20/11/1992"); //incase new validation is added
  let isValidForm = false;
  const fields = [username, password, birthdate]; //if new vlidation required add here for validation
  isValidForm = fields.every(function(field){
    field.validate();
  });
  if(isValidForm){ 
    //allow user to submit form and login ahead
  }
  else {
    //show an error message
  }


  console.log("---finding submitted users:#12");
  //return true if every user has submitted a request from
  var users = [
    { id: 21, hasSubmitted: true },
    { id: 62, hasSubmitted: false },
    { id: 4, hasSubmitted: true }
  ];
  var hasSubmitted = users.every(function(user){
      return user.hasSubmitted === true
  });


  console.log("---Progress n/w request:#13");
  var requests = [
    { url: '/photos', status: 'complete' },
    { url: '/albums', status: 'pending' },
    { url: '/users', status: 'failed' }
  ];
  var inProgress = requests.some(function(request){
      return request.status === 'pending';
  });


  console.log("---Distance travelled: #14");
  //calculate sum of distance travelled
  var trips = [{ distance: 34 }, { distance: 12 } , { distance: 1 }];
  var totalDistance = trips.reduce(function(previous, trip){ 
    return previous + trip.distance;
}, 0);
console.log(totalDistance);

  console.log("---Reducing properties: #15");
  var desks = [
    { type: 'sitting' },
    { type: 'standing' },
    { type: 'sitting' },
    { type: 'sitting' },
    { type: 'standing' }
  ];
  var deskTypes = desks.reduce(function(previous, desk) {
      if(desk.type==='sitting') previous.sitting++;
      if(desk.type === 'standing') previous.standing++;
      return previous;
  }, { sitting: 0, standing: 0 });
  console.log(deskTypes);


  console.log("---Custom unique helper: #16");
  let numbers2 = [1, 1, 2, 3, 4, 4, 5];
  let numFound, currentFound;
  function unique(numbers2) {
    numFound = numbers2.reduce(function(previous, current){
          currentFound = previous.find(function(curr){
            if(current==curr) { 
              console.log(curr); 
              return current; 
            }
          });
          if(!currentFound) previous.push(current);
          return previous;
    }, []);
    return numFound;
  }
  unique(numbers2);
  console.log(numFound);
//first use reducer and loop through all to return an [] array
//use find to check if our previous array[] has curr number
//i.e. if current does not have curr(from prev) return current
//if !current returned then push in previous array and return that previous array from fun to display on console


  console.log("---A constant excercise of letting variables be variables: #17");
  const name = 'Nitesh';
  let age = 32;
  const dateOfBirth = '27/03/1990'


  console.log("---const / let refactoring: #18");
  //replace var with const/let
  const statuses = [ 
    { code: 'OK', response: 'Request successful' },
    { code: 'FAILED', response: 'There was an error with your request' },
    { code: 'PENDING', response: 'Your reqeust is still pending' }
  ];
  let message = '';
  const currentCode = 'OK';
  
  for (var i = 0; i < statuses.length; i++) {
    if (statuses[i].code === currentCode) {
      message = statuses[i].response;
    }
  }


  console.log("---Template strings in practise: #19");
  function doubleMessage(number) {
    return `Your number doubled is ${(2 * number)}`;
  }


  console.log("---Name helpers: #20");
  function fullName(firstName, lastName) {
    return `${firstName} ${lastName}`;
  }


  console.log("---Refactoring keyword function: #21");
  const fibonacci = n => {
    if (n < 3) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
  }


  console.log("---Arrow function arent always the solution: #22");
  //not working with arrow functions
  const profile = {
    name: 'Alex',
    getName:  () => {
        return `${this.name}`
    }
};

//working using function declaration thats anonymous function
const profile2 = {
  name: 'Alex',
  getName: function (){
      return `${this.name}`
  }
};

console.log("---Multiple properties with enhanced object literal notation: #23");
const red = '#ff0000';
const blue = '#0000ff';
const COLORS = { red, blue };


console.log("---Condensing code with enhanced notation: #24");
const fields1 = ['firstName', 'lastName', 'phoneNumber'];
const props = { fields1 };


console.log("---Literals in fucntions: #25");
const canvasDimensions = function(width, initialHeight) {
  const height = initialHeight * 9 /16;
  return { 
    width, 
    height 
  };
}


console.log("---Refactor to use enhanced literal notation: #26");
const color = 'red';
const Car = {
  color,
  drive: function() {
    return 'Vroom!';
  },
  getColor: function() {
    return this.color;
  }
};


console.log("---Using default arguments: #27");
function sum(a =0, b=0) {
  return a + b;
}


console.log("---Dumping unused code: #28");
function addOffset(style = {}) {
  style.offset = '10px'; 
  return style;
}


console.log("---Many Many arguments: #29");
function product(...numbers3) { 
  return numbers3.reduce(function(acc, number) {
    return acc * number;
  }, 1)
}


console.log("---Spreading arrays: #30");
function join(array1, array2) {
  return [...array1, ...array2]
}


console.log("---Mixing rest & spread: #31");
function unshift(array, ...array2) {
  return [...array2, ...array]
}


console.log("---Destructuring in practise: #32");
const profile1 = {
  title: 'Engineer',
  department: 'Engineering'
};
function isEngineer({department, title}) {
  return title === 'Engineer' && department === 'Engineering';
}


console.log("---Array destructuring in practise: #33");
const classes = [
  [ 'Chemistry', '9AM', 'Mr. Darnick' ],
  [ 'Physics', '10:15AM', 'Mrs. Lithun'],
  [ 'Math', '11:30AM', 'Mrs. Vitalis' ]
];

const classesAsObject = classes.map((classi) => {
    const [subject, time, teacher] = [...classi];
    return {subject:subject, time:time, teacher:teacher}
});
/*advanced sol with  enhanced array literal: best solution
const classesAsObject = classes.map(([subject, time, teacher]) => {
    return {subject, time, teacher}
});
 */
console.log(classesAsObject);


console.log("---Recursion with destructuring: #34");
/*old way es5
const numbers4 = [1, 2, 3];
let numdouble=[]; var i=0;
function double(number) {
  numdouble.push(2*number);
}

for(;i<numbers4.length;i++){
  double(numbers4[i]);
}
console.log(numdouble);
*/

/*Using array destructuring, recursion & rest/spread operator */
//use number variable in udemy code instead of numbers5
const numbers5 = [1, 2, 3];

let numdouble=[]; var l=numbers5.length; var i=0;
function double(numbers) {
  if(i<l){  numdouble.push(numbers[i]*2); i++; double(numbers); }
  else { 
      return [...numdouble];
  }
}
double(numbers5);
console.log(numdouble); 


