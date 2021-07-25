
//https://www.udemy.com/course/javascript-es6-tutorial/
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
    console.log("---New forEach array helper method:1");   
    posts.forEach(function(post){
        savePost(post);
    });
}
handlePosts();

console.log("---Processing values:2");
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

console.log("---Plucking values:3");
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

console.log("---Calculating values:4");
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


console.log("---Really Hard: Implementating PLUCK:5");
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


  console.log("---Filtering Values:6");
  //find array of numbers and return new array with values > 50
  var numbers = [15, 25, 35, 45, 55, 65, 75, 85, 95];
  var filteredNumbers = numbers.filter(function(num){
    return num>50;
  });
  console.log(filteredNumbers);


  console.log("---Handling permissions with filter:7");
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


  console.log("---Implement Reject:8");
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


console.log("---Finding admin users:9");
