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


//++++++++++ REDUCE HELPER part 2 ++++++++++++Condensing down to a single value+++//

// //---i want to collect each value of each
// var primaryColors = [
//   {color: 'red'},
//   {color: 'yellow'},
//   {color: 'pink'},
//   {color: 'blue'},

// ]

// //---using the MAP HELPER  --------//
// //var allColors = primaryColors.map(allColor => allColor.color)

// // //---USING THE REDUCE HELPER -----//
// // var allColors = primaryColors.reduce(function(prev, primaryColor){
// //   prev.push(primaryColor.color);

// //   return prev;

// // },[])

// //---using one line arrow -------------//
// var allColors = primaryColors.reduce((prev, primaryColor) =>(prev.push(primaryColor.color), prev),[])


// console.log(allColors)


//+++++more sample for  REDUCE ++++++++PRACTICAL WAY+++++//
//So  here is given a string that contains some number of parentheses. Are the expressions correctly balanced so this would be a fantastic use of the reduce.

//We know that we want a function that takes a string and returns a boolean of some kind and is  boolean basically says like is this is this expression balanced or not.

// function balancedParens(string){
//   return !string.split("").reduce(function(prev, char){
//     if (prev < 0) { return prev; }
//     if (char === "(") {return ++ prev;}
//     if (char === ")") {return --prev; }
//   },0);
// }
// balancedParens(')(');


//+++ reduce test -++++++++++++//

// var trips = [{ distance: 34 }, { distance: 12 } , { distance: 1 }];

// var totalDistance = trips.reduce((prev, trip) => prev + trip.distance,0);

// totalDistance

//+++ reduce test 2 -++++++++++++//

// var desks = [
//   { type: 'sitting' },
//   { type: 'standing' },
//   { type: 'sitting' },
//   { type: 'sitting' },
//   { type: 'standing' }
// ];

// // var deskTypes = desks.reduce(function(pre, desk) {
// //     if(desk.type ==='sitting') {
// //         ++pre.sitting;
// //     } else {
// //         ++pre.standing
// //     }
// //     return pre;

// // }, { sitting: 0, standing: 0 });

//  //deskTypes;


// //simple clever solution
// var deskTypes = desks.reduce((tally, { type }) => {
//   ++tally[type];
//   return tally;
// }, { sitting: 0, standing: 0 });

//  deskTypes;

//??++++++Practice test REDUCE AND FIND++++++++++//
// write a function called "unique" that will remove all the duplicate values from an array.


// var numbers = [1, 2, 3, 4, 4];

// function unique(array) {
//   return numbers.reduce(function(previous, number){
//     if (previous.find(element => element === number)) return previous;

//     previous.push(number);
//     return previous;
//   }, []);
// }

// console.log(unique());
//output [1,2,3,4]

// //=========other solutoion -----??

// var unique = array => array.reduce((prev, item) => {
//   return prev.find(el => el === item) ? prev : prev.concat(item)
// }, []);

// //console.log(unique(4))

//+++++++++ CONST AND LET ++++++++++ THE NEW VARIABLE ++++//
//THEY NEVER CHANGE, NOT SUBJECT TO CHANGE

// //classic vanilla
// var name = 'jane';
// var title = 'software engineer';
// var hourlyWage = 40;

// es6
// const  name = 'jane' // never change
// let title = 'software engineer'; // it can be change
// let hourlyWage = 45; //it can be change

// // some time later
// title = 'senior software engineer';

// console.log(title)


//+++++++ TEMPLATE STRINGS =========//

//vanilla
// function getMessage(){
//   const year = new Date().getFullYear();
//   return "first year is " + year;

// }

// getMessage();


//--template strings ---//
// function getMessage(){
//   const year = new Date().getFullYear();
//   return `first year is ${year}`;

// }

// getMessage();

//-------template other solution---//
// function getMessage(){
//   return `first year is ${new Date().getFullYear()}`
// }
// getMessage();

 //++++++++++++++++ ARROW FUNCTION COMPLICATED+++++//

//  const team = {
//    members: ['niko', 'marco', 'pipoy'],
//    teamName: 'Lincoln Boys',

//    teamSummary: function(){
//      return this.members.map(member => {
//        return `${member} belong to ${this.teamName}`
//      })
//    }
//  }

//  team.teamSummary()

//OR OTHE SOLUTION

// teamSummary: function(){
//    return this.members.map(member =>
//       `${member} belong to ${this.teamName}`
//     )
//   }
//  }

//  team.teamSummary()


//+++++++++++++ FIBBONACCI ARROW FUNCTIONS ++++//

// const fibonacci = (n) => {
//   if (n < 3) return 1;
//   return fibonacci(n - 1) + fibonacci(n - 2);
// };

// fibonacci()




// const profile = {
//     name: 'Alex',
//     getName: () => profile.name
//     };

// profile.getName()

//++++++++++++++ DESTRUCTURING  ARRAYS++++++++++++++//

// const companies = [
//   'google',
//   'facebook',
//   'uber',
//   'microsoft'
// ]
// const [names] = companies;
// const firstCompanies = companies[0]

//companies
//console.log(firstCompanies)

//or

//const [names, ...rest]  = companies


//++++++++++++++ DESTRUCTURING  ARRAYS part 2 ++++++++++++++//

// const companies = [
//   {name: 'Google', locaton: 'Mountain View'},
//   {name: 'Facebook', locaton: 'Menlo Park'},
//   {name: 'Uber', locaton: 'San Fransico'}
// ];
// //---- pulling all the companies
// //console.log(companies)

// //--- pulling google location, standard
// //console.log(companies[0].locaton)

// //---- destructuring --- pulling all location
// const [{locaton}] = companies

// locaton

//++++++++++++++ DESTRUCTURING  ARRAYS part 3 ++++++++++++++//

// const Google = {
//   locations: ['mountain view', 'new york', 'london']
// }

// // const {locations} = Google;

// //-----chaleenging and complicated
// const {locations: [locations]} = Google

//  console.log(locations);


//++++++++++++++ DESTRUCTURING  ARRAYS PRACTICAL EXAMPLE++++++++++++++//


// So here's the example I want to say that I want to write a function that is going to take a username

// and password and I want to save it to a database or something like that.

// So we'll call this function sign up.

// So you'd like signing up the user.


/* ----bad example
function signup(username, password, email, dateOfBirth, City){
  //create new user
}

signup('DOnato', 'mypassword', 'myemail@example', '1/1/1990', 'New York');

signup(username, password, email, dateOfBirth, City)
*/


//-----the better way

// function signup(){
//   //create new user
// }
// const user = {
//   username: 'DOnato',
//   password: 'my_password',
//   email: 'myemail@gmail.com',
//   dateOfBirth: '1/1/90',
//   city: 'New York'
// }

// signup(user)


//++++++++++++++ DESTRUCTURING  ARRAYS PRACTICAL EXAMPLE++++++++++++++//

// const points = [
//   [4,5],
//   [9,0],
//   [11,3]
// ]

// points.map(([x,y]) => {
//   return {x,y}
// })


//++++++++++++++ DESTRUCTURING  ARRAYS PRACTICAL EXAMPLE++++++++++++++//


// const profile = {
//   title: 'Engineer',
//   department: 'Engineering'
// };

// function isEngineer(profile) {
//   var title = profile.title;
//   var department = profile.department;
//   return title === 'Engineer' && department === 'Engineering';
// }

// const isEngineer = ({title, department}) => title === 'Engineer' && department === 'Engineering';

//++++++++++++ Array destructuring in practice ++++++//
// const classes = [
//   [ 'Chemistry', '9AM', 'Mr. Darnick' ],
//   [ 'Physics', '10:15AM', 'Mrs. Lithun'],
//   [ 'Math', '11:30AM', 'Mrs. Vitalis' ]
// ];

// //const classesAsObject;

// const classesAsObject = classes.map(([subject, time, teacher])=>{
//     return {
//         subject,
//         time,
//         teacher
//     };
// });

//+++++++++++++++++++++++++++ applying all ++++++//
 /*
 use array destructuring, recursion and the rest/spread operators to create a function 'double' that will return a new array with all values inside of it multiplied by two. don not use an array helpers!. sure, the map, forEach, or reduce helpers would make this extremely easy but give it a shot the hard ways anyways.
 */


//  const numbers = [1, 2, 3];

// // function double() {
// //     return numbers * 2
// // }

// function double([num, ...rest]) {

//   return !!num ? [num*2, ...double(rest)] : []
// }


// //--one line clver answer
// // const double = ([number, ...rest]) =>
// // number !== undefined ? [ number * 2, ...double(rest) ] : [];


//  const numbers = [1, 2, 3];

// const double = numbers.map((num)=> {
//   return num.numbers * 2
// })


//++++++++++++++++ CLASSES ++++++++++++++++//

// class Monster {
//   constructor(options){
//     this.name = options.name;
//     this.health = 100;

//   }
// }
// class Snake extends Monster{
//   constructor(options){
//     super(options)
//   }
//   bite(other){
//     other.health -= 10
//   }
// }


// // const godzilla = new Monster({name: 'GOdzilla'});

// // godzilla;

// const Python = new Snake ({name:'Python' });

// Python;


//++++++++++++++++ ES6 FOR OF LOOPS  ++++++++++++++++//

// const numbers = [1,2,3,4];
// let total = 0;

// for (let number of numbers){
//   total += number
// }

// console.log(numbers)
// console.log(total)

//++++++++++++++++ GENERATOR HARD TOPIC  ++++++++++++++++//
// WHAT IS A GENERATOR = generator is a function that can be entered and exited

// multiple times.
// 1.
// function clickme(){
//   var j =0;
//   for(var i=0; i<=4; i++){
//     j +=i;
//     alert('j is now:' + j);
//   }
//   alert('i'+i)
// }

// clickme

//2.

// function valueChecker(x){
//   if(isNaN(x)) return;
//   if(x < 10){
//     console.log('thekhkvcxfn');
//   }
//   else{
//     console.log('second')
//   }
// }
// valueChecker

// 3.
// function welcome(user_name){
//   alert("well, hello" + user_name)
// }

// welcome('foobar')



// function counter(x){
//   if(isNaN(x)){
//     return false;
//   }
//   y += x;
//   alert(y);
//   return true;
// }
// counter()

// function starter(){
//   var x,y;
//   x=9;
//   y=multiplier(x);
//   x=ender(y);
//   alert(x);
//   return true;
// }

// function multiplier(y){
//   var x,z;
//   x= 10;
//   z= y *x;

//   return z;
// }
// function ender(z){
//   var x,y;
//   x =5;
//   y= multiplier(z+x);
//   return y;
// }

// starter()

// function email_checker(addr){
//   var reg = new RegExp("^[A-Z0-9._%+-]+@[A-Z0-9.-}+\.[A-Z]{2,4}$")
//   return reg.test(addr)
// }

// email_checker("dontamayo@gmail.com")


//---------------------------GENERATOR--------------//
// generaor can be used in iterator

// function* colors(){
//  yield 'red';
//  yield 'blue';
//  yield 'green';

// }

// const myColors = [];
// for( let color of colors()) {
//   myColors.push(color)
// }

// myColors;


//================= creating PROMISES===============//
//.. uses for ajax request, http request

// then == resolve
//rejected == catch

// promise = new Promise((resolve, reject)=> {
//   setTimeout(()=>{
//     resolve();
//   }, 3000)
//   //resolve();
//   //reject();

// });

// promise
// .then(()=> {console.log('finally finsiehd')})
// .then(()=>{console.log('im almost done with javascript')})
// .catch(()=>{console.log('oh oh rejected')})



//========= or from AJAX request=======================//

// promise = new Promise((resolve, reject)=> {
//   var request = newXHTMLRequest()
//   //make request
//   request.onload = ()=> {
//     resolve();
//   }
// });

// promise
// .then(()=> {console.log('finally finsiehd')})
// .then(()=>{console.log('im almost done with javascript')})
// .catch(()=>{console.log('oh oh rejected')})




//=========  AJAX request WITH FETCH es6 =======================//


// This is something where we have to reach out to the Internet wait for something to happen and then only

// after we get a response back if it is successful the promise is going to enter the results state and

// then we could register a dot van helper to get access to the data.

//url = "https://jsonplaceholder.typicode.com/posts";

//------messing it with the url to get 400 + bad errors
url = "https://jsonplaceholder.typicode123.com/posts";




fetch(url)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.log('BAD',error))
