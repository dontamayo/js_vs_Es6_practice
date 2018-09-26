// var number = 10;

// number / 20;
// number / 2;

// 'your number is : ' + number;

// var greeting  = { hello: number}

// greeting;




//   ecmascript = Es6
//   nre version of javascript

//   Es5 = 2008
//   Es6 = 2015


//-------------ES5 vs ES6 ----------------------------//

// ARRAY HELPER
// FOREACH

// var colors = ['red', 'blue', 'green','yellow'];

// for (var i =0; i < colors.length; i++){
//  console.log(colors[i]);
// }



// var showtime = ['vice ganda', 'anne', 'vhong', 'mariele', 'jhong'];

// // for (var i = 0; i < showtime.length; i++)
// // console.log(showtime[i])

// showtime.forEach(function(name){
//   console.log(name)
// })
//-------------ES5 vs ES6 ----------------------------//

// //When we called for each array we provide an iterator function that is ran one time for each element in the array and the element is passed as an argument.

// //create an array of numbers
// var numbers= [1,2,3,4,5]

// // create a variable to hold the sum
// var sum = 0;

// // loop over the array, incrementing the sum variable.
// // numbers.forEach(function(num){
// // sum += num;
// // });

// // or

// function adder(num){
//   sum += num;
// }
// numbers.forEach(adder)

// // print the sum variable

// console.log(sum)

//-------------why use for Each ----------------------------//

//practical use
// example

// emails.forEach(function(email){
//   deleteEmail(email);
// })



// //-------------Test 2  ----------------------------//

// function handlePosts() {
//     var posts = [
//       { id: 23, title: 'Daily JS News' },
//       { id: 52, title: 'Code Refactor City' },
//       { id: 105, title: 'The Brightest Ruby' }
//     ];

// //     // for (var i = 0; i < posts.length; i++) {
// //     //   savePost(posts[i]);
// //     // }
// // }
// posts.forEach(function(post){
//   savePost(post)
// })
// }


// //-------------Test 3 ----------------------------//
// var images = [
//   { height: 10, width: 30 },
//   { height: 20, width: 90 },
//   { height: 54, width: 32 }
// ];
// var areas = [];

// images.forEach(adder);
// function adder(image){
//   areas.push(image.height * image.width)
// }



// console.log(areas)


// //-------------MAP Helper----------------------------//

// // widely use array around.

// var numbers = [1,2,3,4,5,6];
// //var doubledNumbers = [];

// // for(var i = 0; i< numbers.length; i++){
// //   doubledNumbers.push(numbers[i]* 2)
// // }

// var doubled = numbers.map(function(number){
//   return  number * 2
// })

// doubled;



// //-------------MAP Helper 2 ----------------------------//
//Map - is collecting properties of an array

// var cars =[
//   {model: 'corolla', price: 23000},
//   {model:'BMW', price:'Expensive'}
// ];
// //i want to find the price of my cars.

// var prices = cars.map(function(car){
//   return car.price;
// })

// //want to get the model of my car
// var models = cars.map(function(carModel){
//   return carModel.model
// })
// console.log(prices);
// console.log(models)


// ====MAp helper in practical used in development===========

//rendering a list of Data , like twitter, reddit, facebook

//======MAP helper Test 1 =======================//

// var images = [
//   { height: '34px', width: '39px' },
//   { height: '54px', width: '19px' },
//   { height: '83px', width: '75px' },
// ];

// //======= get the heigths =======//
// // var heights = images.map(function(image){
// //   return image.height
// // })

// //======== arrow map functions ========//

// var heights = images.map((image)=>{
//   return image.height
// })

// heights

//=============Map helper test 2 ===========//

//   var trips = [
//   { distance: 34, time: 10 },
//   { distance: 90, time: 50 },
//   { distance: 59, time: 25 }
// ];

// // var speeds = trips.map(function(trip){
// //   return trip.distance / trip.time
// // })

// var speeds = trips.map((trip)=>{
//   return trip.distance / trip.time
// })
// speeds

//===MAP helper 3 ================//


// var paints = [

//     {color: 'red'},

//     {color: 'blue'},

//     {color: 'yellow'}

// ];

// function pluck(array, property) {

//     var plucked = array.map(function(obj){

//         return obj[property];

//     });

//     return plucked;

// }

// console.log(pluck(paints, 'color'));

// =============FILTER Helper ============//
// Use for sorting our list, amazon, filtering of a list

// var products = [
//   {name: 'cucumber', type: 'vegetable'},
//   {name: 'banana', type: 'fruit'},
//   {name: 'malunggay', type: 'vegetable'},
//   {name: 'orange', type: 'fruit'}

// ];

//===traditional ======filtering fruit====//
// var filterred = [];
// for(var i = 0; i< products.length; i++){
//   if (products[i].type === 'fruit'){
//     filterred.push(products[i]);

//   }
// }

//===function es6 ========//
// var filterred = products.filter(function(product){
//   return product.type === 'vegetable'
// })


//=====arrow function============//
// var filterred = products.filter((product)=>{
//   return product.type == 'vegetable'
// })

// console.log(filterred)


//+++++++sample 2 ++++++++++++++//
// MOre complex filtering

// var products = [
//   {name: 'cucumber', type: 'vegetable', quantity: 4, price: 20},
//   {name: 'banana', type: 'fruit',quantity: 10, price: 10},
//   {name: 'malunggay', type: 'vegetable',quantity: 2, price: 5},
//   {name: 'orange', type: 'fruit',quantity: 3, price: 7}

// ];
// // type a vegetable, quantity is greter than 1, price is less then 10

// var iWant = products.filter((product)=>{
//   return product.type === 'vegetable'
//   && product.quantity > 1
//   && product.price < 10
// })

// iWant;

//+++++++sample 3 ++++++++++++++//
// MOre complex filtering

// var post = {id: 4, title: "I am a Software Engineer"}
// var comments = [
//   {postId: 4, content: "your are a legend"},
//   {postId: 3, content: "your are a dummy"},
//   {postId: 4, content: "your a 6 figure men"},

// ]
// function commentforPost(post, comments){
//   return comments.filter(function(comment){
//     return comment.postId === post.id;
//   })
// }

// commentforPost(post,comments)

//++++++++++++++ test 1 for filter helper +++++?/

// var numbers = [15, 25, 35, 45, 55, 65, 75, 85, 95];

// var filteredNumbers = numbers.filter(function(number){
//   return number > 50
// })
// //-------- better simplier solution--------//
// //var filteredNumbers = numbers.filter(number => {return number > 50; })
// filteredNumbers

//++++++++++++++ test 2 for filter helper +++++?/

// var users = [
//  { id: 1, admin: true },
//  { id: 2, admin: false },
//  { id: 3, admin: false },
//  { id: 4, admin: false },
//  { id: 5, admin: true },
// ];

// // var filteredUsers = users.filter((user)=>{
// //   return user.users === users.id && user.admin === true
// // })
// //filteredUsers



// //??+++solution 2
// // var filteredUsers;

// // users.filter(function(user){
// //    filteredUsers = user.admin === true;
// //    return filteredUsers;
// // });

// //solution 3 ------------//
// var filteredUsers = users.filter(user => user.admin === true);

// filteredUsers

//++++++++++++ FIND helper ++++++++++ to search trough in an array, will return that record +++++//

// var users = [
//   {name : 'Don', motto:'God is good'},
//   {name : 'Gabi'},
//   {name : 'ANfrew'},
//   {name : 'Kalbo'},

// ]
// var status = {stat1: 'married'}


// //users.find(user => user.name === 'Don')
//  function postName(users, status){
//    return users.find(function(user){
//      return user.status === status.stat1
//    })
//  }
//  //postName


//============find the admin =======
// var users = [
//   { id: 1, admin: false },
//   { id: 2, admin: false },
//   { id: 3, admin: true }
// ];

// var admin = users.find(user => user.admin)

// admin


//++++++= find the balance with 12
// var accounts = [
//   { balance: -10 },
//   { balance: 12 },
//   { balance: 0 }
// ];

// var account = accounts.find(account => account.balance === 12)

// account


//++++++++++++  "EVERY" uses && = needs to be checked all ++++++++++++++//

// var computers = [
//   {name: 'Apple', ram: 24},
//   {name: 'Dell', ram: 31},
//   {name: 'Chrome', ram: 12}

// ];
// // i want to know that ram is enough atleast 16 ram
// var allCompRunProg = true;
// var someCompRunProg = false;

// for (var i =0; i < computers.length; i++){
//   var computer  = computers[i];
//   if (computer.ram < 16){
//     allCompRunProg = false;
//   } else{
//     someCompRunProg = true;
//   }
// }

// '===='
// console.log(allCompRunProg);
// someCompRunProg;

// var allCompRunProg = computers.every(function(computer){
// return computer.ram > 16;
// })


//output = false, baceus not all of them has a 16+ RAM

//-----one line code----//
// var allCompRunProg = computers.every(computer => computer.ram > 16)

// allCompRunProg


//++++++++++  SOME HELPER "OR ||" if some is true, return true++++++++++//
// it si used for login logout user, if they actually type the right in.

//      var computers = [
//   {name: 'Apple', ram: 24},
//   {name: 'Dell', ram: 31},
//   {name: 'Chrome', ram: 12}

// ];

// let allCompRunProg = computers.some(computer => computer.ram > 16)

// allCompRunProg;
// //console.log(allCompRunProg)
// // out put will be true, why? because it  detects some of the arrays are true.


// var names = [
//   'alexandrai',
//   'MAtthew',
//   'abi',
//   'lj',
//   'cassy'
// ]

// let doesAllName = names.every(name => name.length > 4)

// let notAllName = names.some(name => name.length > 4)


// console.log(doesAllName) //false
// console.log(notAllName) // true


//=====logginging in function=========//

// function Field(value){
//   this.value = value;
// }
// Field.prototype.validate = function(){
//   //if the new field string is more than 0
//   return this.value.length > 0
// }

// var username = new Field('Constantine');
// var password = new Field("my_password")
// var birthdate = new Field("1/10/10")

// // //longer version
// // username.validate() && password.validate()&& birthdate.validate();

// //better version using every helper

// var fields = [username, password, birthdate];

// // //one line arrow function
// // fields.every(field => field.validate());

// // es6
// var formIsValid = fields.every(function(field){
//   return field.validate();
// })

// if(formIsValid){
//   // allow user to submit
// console.log("welcome to our page")
// }else {
//   //show an error
//   console.log("try again")
// }


// //+++++++++++PRACTICE TEST +++++++++//
// //given an array of users, return "true, if every user has submitted a request form."
// var users = [
//   { id: 21, hasSubmitted: true },
//   { id: 62, hasSubmitted: false },
//   { id: 4, hasSubmitted: true }
// ];

// var hasSubmitted = users.every(user => user.hasSubmitted === true);

// console.log(hasSubmitted)


// //+++++++++++PRACTICE TEST 3 every +++++++++//
// given an array of network objects reperesenting network requests, assign the boolean 'true to the variable 'inProgress' if any network request has a "status " of "pending"
// var requests = [
//   { url: '/photos', status: 'complete' },
//   { url: '/albums', status: 'pending' },
//   { url: '/users', status: 'failed' }
// ];

// var inProgress = requests.some(request => request.status === 'pending')

// console.log(inProgress)


//++++++++++ REDUCE HELPER ++++++++++++Condensing down to a single value+++//

// var numbers = [10,20,30]
// var sum = 0;

// //-------classic solution
// for (var i = 0; i < numbers.length; i++){
//  sum += numbers[i];
// }
// //output 60

//----- one line arrow code
//var sumNum = numbers.reduce((sum, number) => (sum + number),0)

//------ es6
// var sumNum = numbers.reduce(function(sum, number){
//   return sum + number
// },0)

// console.log(sumNum)
