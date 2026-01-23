/* ===============================
   BASIC OUTPUT & COMMENTS
================================ */

// console.log("aditya");
// console.log("i like pizza");

// window.alert("this is an alert");
// window.alert("i like pizza");

/*
  This is a multi-line comment
*/








/* ===============================
   DOM MANIPULATION
================================ */

// document.getElementById("myH1").textContent = "Hello";
// document.getElementById("myP").textContent  = "I like pizza";








/* ===============================
   VARIABLES
================================ */

// Variable = a container that stores a value
// Declaration: let x;
// Assignment : x = 100;

// let x = 100;
// let y = 100;

// let price = 10.99;
// let gpa   = 3.3;
// let age   = 25;

// console.log(`you are ${age} years old`);
// console.log(`the price is ${price}`);
// console.log(`your gpa is ${gpa}`);









/* ===============================
   STRINGS & TYPES
================================ */

// let firstName = "Aditya";
// let food  = "dahi";
// let email = "aditya@gmail.com";

// console.log(typeof firstName);
// console.log(`your name is ${firstName}`);
// console.log(`you like ${food}`);
// console.log(`your email is ${email}`);









/* ===============================
   BOOLEANS
================================ */

// let online = true;
// let female = false;

// console.log(`you are online: ${online}`);
// console.log(`are you a man: ${online}`);
// console.log(`are you a woman: ${female}`);









/* ===============================
   DOM + VARIABLES
================================ */

// let fullName = "Aditya Kumar";
// let age = 25;
// let isStudent = true;

// document.getElementById("P1").textContent = `Name: ${fullName}`;
// document.getElementById("P2").textContent = `Age: ${age}`;
// document.getElementById("P3").textContent = `Student: ${isStudent}`;









/* ===============================
   ARITHMETIC OPERATORS
================================ */

// let students = 10;

// students += 4;
// students -= 3;
// students *= 2;
// students /= 2;
// students %= 2;
// students **= 2;

// students++;
// students--;

// console.log(students);









/* ===============================
   OPERATOR PRECEDENCE
================================ */

/*
  1. Parentheses ()
  2. Exponents **
  3. Multiplication / Division / Modulo
  4. Addition / Subtraction
*/

// let result1 = 1 + 2 * 3 + 16;
// let result2 = 12 % 5 * 6 + 3;
// let result3 = 6 / 2 ** (2 + 5);

// console.log(result1, result2, result3);









/* ===============================
   USER INPUT
================================ */

// Easy way
// let username = window.prompt("What's your username");
// console.log(username);

// Professional way
// document.getElementById("mySubmit").onclick = function () {
//   const username = document.getElementById("myText").value;
//   document.getElementById("myH1").textContent = `Hello ${username}`;
// };









/* ===============================
   TYPE CONVERSION
================================ */

// let age = Number(window.prompt("How old are you"));
// age += 1;
// console.log(age, typeof age);









/* ===============================
   TYPE CASTING EXAMPLES
================================ */

// let x = "pizza";
// let y = "pizza";
// let z = "pizza";

// x = Number(x);
// y = String(y);
// z = Boolean(z);

// console.log(typeof x, x);
// console.log(typeof y, y);
// console.log(typeof z, z);









/* ===============================
   CONSTANTS
================================ */

// const PI = 3.14159;
// let radius;
// let circumference;

// radius = Number(window.prompt("Enter radius"));
// circumference = 2 * PI * radius;

// console.log(`Circumference: ${circumference}`);









/* ===============================
   CONST + DOM
================================ */

// const PI = 3.14159;

// document.getElementById("myButton").onclick = function () {
//   let radius = Number(document.getElementById("myText").value);
//   let circumference = 2 * PI * radius;

//   document.getElementById("myH3").textContent = `Circumference: ${circumference}`;
// };









/* ===============================
   MATH OBJECT
================================ */

// Math = built-in object that provides mathematical properties & methods

// console.log(Math.PI);

// let x = Math.PI;
// let y = 2;

// let z = Math.round(x);
// let z = Math.floor(x);
// let z = Math.ceil(x);
// let z = Math.pow(x, y);
// let z = Math.sqrt(9);
// let z = Math.log(10);

// let z = Math.sin(45);
// let z = Math.cos(45);
// let z = Math.tan(45);

// let z = Math.abs(-23);

// let maxValue = Math.max(x, y, 20);
// let z = maxValue;

// console.log(z);









/* ===============================
   RANDOM NUMBER GENERATOR
================================ */

// let random = Math.random();

// const min = 50;
// const max = 100;

// let random = Math.floor(Math.random() * (max - min + 1)) + min;
// console.log(random);









/* ===============================
   IF STATEMENTS
================================ */

// let time = 23;

// if (time < 12) {
//   console.log("Good morning!");
// } else if (time < 16) {
//   console.log("Good afternoon");
// } else {
//   console.log("Good night");
// }


// let isStudent = false;

// if (isStudent) {
//   console.log("You are a student");
// } else {
//   console.log("You are not a student");
// }


// let age = 23;
// let hasLicense = true;

// if (age >= 18) {
//   console.log("You are allowed to have a license");

//   if (hasLicense) {
//     console.log("Approved");
//   } else {
//     console.log("Not approved");
//   }

// } else {
//   console.log("You must be above 18 to get a license");
// }









/* ===============================
   AGE VALIDATION (DOM)
================================ */

// const myText = document.getElementById("myText");
// const mySubmit = document.getElementById("mySubmit");
// const resultElement = document.getElementById("resultEle");

// mySubmit.onclick = function () {
//   let age = Number(myText.value);

//   if (age >= 100) {
//     resultElement.textContent = "You are too OLD to enter this site!";
//   } else if (age === 0) {
//     resultElement.textContent = "You were just born!";
//   } else if (age < 0) {
//     resultElement.textContent = "Age cannot be negative!";
//   } else if (age >= 18) {
//     resultElement.textContent = "You are old enough to enter!";
//   } else {
//     resultElement.textContent = "You must be above 18 to enter this site";
//   }
// };









/* ===============================
   CHECKBOX & RADIO BUTTONS
================================ */

// const myCheckbox = document.getElementById("myCheckbox");
// const visaBtn = document.getElementById("visaBtn");
// const masterCard = document.getElementById("masterCard");
// const paypalBtn = document.getElementById("paypalBtn");
// const mySubmit = document.getElementById("mySubmit");

// const subResult = document.getElementById("subResult");
// const paymentResult = document.getElementById("paymentResult");

// mySubmit.onclick = function () {

//   subResult.textContent = myCheckbox.checked
//     ? "You are subscribed"
//     : "You are not subscribed";

//   if (visaBtn.checked) {
//     paymentResult.textContent = "You are paying with VISA";
//   } else if (masterCard.checked) {
//     paymentResult.textContent = "You are paying with MASTER CARD";
//   } else if (paypalBtn.checked) {
//     paymentResult.textContent = "You are paying with PAYPAL";
//   } else {
//     paymentResult.textContent = "Please select a payment option";
//   }
// };









/* ===============================
   TERNARY OPERATOR
================================ */

// condition ? codeIfTrue : codeIfFalse

// let age = 23;
// let message = age >= 18
//   ? "You are an adult"
//   : "You are not an adult";

// console.log(message);


// let isStudent = false;
// let status = isStudent ? "Student" : "Not a student";
// console.log(status);









/* ===============================
   SWITCH STATEMENT
================================ */

// SWITCH = efficient replacement for multiple else-if statements

// let day = 7;

// switch (day) {
//   case 1:
//     console.log("It is Monday");
//     break;

//   case 2:
//     console.log("It is Tuesday");
//     break;

//   case 3:
//     console.log("It is Wednesday");
//     break;

//   case 4:
//     console.log("It is Thursday");
//     break;

//   case 5:
//     console.log("It is Friday");
//     break;

//   case 6:
//     console.log("It is Saturday");
//     break;

//   case 7:
//     console.log("It is Sunday");
//     break;

//   default:
//     console.log("Enter a valid number");
//     break;
// }









/* ===============================
   SWITCH WITH CONDITIONS
================================ */

// let testScore = 92;
// let letterGrade;

// switch (true) {
//   case testScore >= 90:
//     letterGrade = "A";
//     break;

//   case testScore >= 70:
//     letterGrade = "B";
//     break;

//   case testScore >= 60:
//     letterGrade = "C";
//     break;

//   case testScore >= 50:
//     letterGrade = "D";
//     break;

//   case testScore >= 30:
//     letterGrade = "E";
//     break;

//   default:
//     letterGrade = "F";
//     break;
// }

// console.log(letterGrade);









/* ===============================
   STRING METHODS
================================ */

// STRING METHODS = allow you to manipulate and work with text

// let userName = "    aditya   ";

// console.log(userName.charAt(0));        // character at index
// console.log(userName.indexOf("t"));     // first occurrence
// console.log(userName.lastIndexOf("a")); // last occurrence
// console.log(userName.length);           // length (includes spaces)

// console.log(userName.trim());           // remove spaces (both ends)
// console.log(userName.trimStart());      // remove start spaces
// console.log(userName.trimEnd());        // remove end spaces

// console.log(userName.toLowerCase());    // lowercase
// console.log(userName.toUpperCase());    // uppercase
// console.log(userName.repeat(4));        // repeat string









/* ===============================
   STRING CHECKS
================================ */

// let startsWithSpace = userName.startsWith("  ");

// if (startsWithSpace) {
//   console.log("Username cannot begin with spaces");
// }

// let hasLetter = userName.includes("d");

// if (hasLetter) {
//   console.log("Yes");
// } else {
//   console.log("No");
// }









/* ===============================
   STRING PADDING & REPLACE
================================ */

// let phoneNumber = "3432-232-232";

// phoneNumber = phoneNumber.replaceAll("-", ""); // remove dashes
// phoneNumber = phoneNumber.padStart(15, "0");   // pad start
// phoneNumber = phoneNumber.padEnd(20, "0");     // pad end

// console.log(phoneNumber);









/* ===============================
   STRING SLICING
================================ */

// STRING SLICING = creating a substring from a string
// syntax: string.slice(start, end)

// const fullName = "aditya kumar";

// let firstName = fullName.slice(0, 6);
// let lastName  = fullName.slice(7);

// console.log(firstName);
// console.log(lastName);

// let firstChar = fullName.slice(0, 1);
// let lastChar  = fullName.slice(-1); // negative index starts from end

// console.log(firstChar);
// console.log(lastChar);

// let firstName = fullName.slice(0, fullName.indexOf(" "));
// let lastName  = fullName.slice(fullName.indexOf(" ") + 1);

// console.log(firstName);
// console.log(lastName);









/* ===============================
   EMAIL SLICING
================================ */

// const email = "adity122@gmail.com";

// let userName  = email.slice(0, email.indexOf("@"));
// let extension = email.slice(email.indexOf("@") + 1);

// console.log(userName);
// console.log(extension);









/* ===============================
   METHOD CHAINING
================================ */

// METHOD CHAINING = calling multiple methods in one line

// let username = window.prompt("Enter your username");

// Without method chaining
// username = username.trim();
// let firstLetter = username.charAt(0).toUpperCase();
// let remaining  = username.slice(1).toLowerCase();
// username = firstLetter + remaining;

// With method chaining
// username =
//   username.trim().charAt(0).toUpperCase() +
//   username.trim().slice(1).toLowerCase();

// console.log(username);









/* ===============================
   LOGICAL OPERATORS
================================ */

// AND  (&&)
// OR   (||)
// NOT  (!)

// const temp = -28;

// if (temp > 0 && temp <= 30) {
//   console.log("Weather is good");
// } else {
//   console.log("Weather is not good");
// }

// const isSunny = false;

// if (!isSunny) {
//   console.log("It is cloudy");
// } else {
//   console.log("It is sunny");
// }









/* ===============================
   COMPARISON OPERATORS
================================ */

// =   assignment
// ==  loose equality
// === strict equality
// !=  inequality
// !== strict inequality

// const PI = "3.14";

// if (PI === "3.14") {
//   console.log("This is PI");
// } else {
//   console.log("This is not PI");
// }









/* ===============================
   WHILE LOOP
================================ */

// let username = "";

// while (username === "") {
//   console.log("Hello!");
//   break;
// }

// console.log("Aditya");


// Login example
// let loggedIn = false;
// let username;
// let password;

// while (!loggedIn) {
//   username = window.prompt("Enter username");
//   password = window.prompt("Enter password");

//   if (username === "aditya" && password === "123") {
//     loggedIn = true;
//     console.log("You are logged in!");
//   } else {
//     console.log("Invalid entry!");
//   }
// }









/* ===============================
   FOR LOOP
================================ */

// for (let i = 1; i <= 10; i += 2) {
//   console.log("aditya " + i);
// }

// for (let j = 11; j >= 1; j -= 2) {
//   console.log("aditya " + j);
// }

// for (let i = 1; i <= 20; i++) {
//   if (i === 13) continue;
//   if (i === 15) break;
//   console.log(i);
// }









/* ===============================
   NUMBER GUESSING GAME
================================ */

// const minNum = 1;
// const maxNum = 100;

// const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

// let attempts = 0;
// let guess;
// let running = true;

// while (running) {
//   guess = Number(window.prompt(`Guess a number between ${minNum} and ${maxNum}`));

//   if (isNaN(guess)) {
//     window.alert("Please enter a valid number");
//   } else if (guess < minNum || guess > maxNum) {
//     window.alert("Number out of range");
//   } else {
//     attempts++;

//     if (guess < answer) {
//       window.alert("Too low! Try again");
//     } else if (guess > answer) {
//       window.alert("Too high! Try again");
//     } else {
//       window.alert(`Correct! Answer was ${answer}. Attempts: ${attempts}`);
//       running = false;
//     }
//   }
// }









/* ===============================
   FUNCTIONS
================================ */

// FUNCTION = a reusable block of code
// Declare once, use whenever needed

// function happyBirthday(username, age) {
//   console.log("Happy birthday to you");
//   console.log("Happy birthday to you");
//   console.log(`Happy birthday dear ${username}`);
//   console.log(`You are ${age} years old`);
//   console.log("Happy birthday to you");
// }

// happyBirthday("Aditya", 25);
// happyBirthday("Spongebob", 35);
// happyBirthday("Patrick", 45);









/* ===============================
   BASIC MATH FUNCTIONS
================================ */

// function add(x, y) {
//   return x + y;
// }

// function sub(x, y) {
//   return x - y;
// }

// function div(x, y) {
//   return x / y;
// }

// function mul(x, y) {
//   return x * y;
// }

// console.log(add(2, 3));
// console.log(sub(3, 5));
// console.log(div(3, 5));
// console.log(mul(3, 5));









/* ===============================
   EVEN / ODD CHECK
================================ */

// function isEven(number) {
//   return number % 2 === 0;
// }

// console.log(isEven(4));









/* ===============================
   EMAIL VALIDATION
================================ */

// function isValidEmail(email) {
//   return email.includes("@");
// }

// console.log(isValidEmail("brogmail.com"));
// console.log(isValidEmail("emailmusk@gmail.com"));
// console.log(isValidEmail("brog@mail.com"));









/* ===============================
   VARIABLE SCOPE
================================ */

// VARIABLE SCOPE = where a variable is accessible

// function fun1() {
//   let x = 34;
//   console.log(x);
// }

// function fun2() {
//   let x = 33424;
//   console.log(x);
// }

// fun1();
// fun2();









/* ===============================
   ARRAYS
================================ */

// ARRAY = stores multiple values in a single variable

// let fruits = ["apple", "orange", "banana"];

// fruits[0] = "coconut";

// fruits.push("pineapple");
// fruits.push("coconut");
// fruits.pop();

// fruits.unshift("mango");
// fruits.shift();

// console.log(fruits);

// console.log(fruits.length);

// let index = fruits.indexOf("orange");
// console.log(index); // -1 means element not found









/* ===============================
   ARRAY ITERATION
================================ */

// fruits.sort().reverse();

// for (let fruit of fruits) {
//   console.log(fruit);
// }







/* ===============================
   SPREAD OPERATOR
================================ */

// SPREAD (...) expands an iterable into individual elements

// let numbers = [1, 2, 3, 4];

// let max = Math.max(...numbers);
// let min = Math.min(...numbers);

// console.log(max);
// console.log(min);
// console.log(numbers);


// Spread with strings
// let username = "aditya";
// console.log(...username);

// let letters = [...username].join("-");
// console.log(letters);


// Spread with arrays
// let fruits = ["apple", "orange", "banana"];
// let vegetables = ["cauliflower", "potato", "eggplant"];

// let food = [...fruits, ...vegetables, "egg", "milk"];
// console.log(food);










/* ===============================
   REST PARAMETERS
================================ */

// REST (...) bundles arguments into an array

// function openFridge(...foods) {
//   console.log(foods);
//   console.log(...foods);
// }

// function getFood(...foods) {
//   return foods;
// }

// const food1 = "pizza";
// const food2 = "hamburger";
// const food3 = "cake";
// const food4 = "donut";
// const food5 = "maggi";
// const food6 = "eggroll";

// openFridge(food1, food2, food3, food4, food5, food6);

// const foods = getFood(food1, food2, food3, food4, food5, food6);
// console.log(foods);










/* ===============================
   REST WITH NUMBERS
================================ */

// function sum(...numbers) {
//   let result = 0;
//   for (let number of numbers) {
//     result += number;
//   }
//   return result;
// }

// console.log(sum(2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 2));

// function average(...numbers) {
//   let total = 0;
//   for (let number of numbers) {
//     total += number;
//   }
//   return total / numbers.length;
// }

// console.log(average(10, 10, 10, 10));










/* ===============================
   REST WITH STRINGS
================================ */

// function combineStrings(...words) {
//   return words.join(" ");
// }

// const fullName = combineStrings("Mr.", "Aditya", "Kumar");
// console.log(fullName);










/* ===============================
   CALLBACK FUNCTIONS
================================ */

// CALLBACK = a function passed as an argument to another function
// Common in async operations (files, network, databases)

// hello(wait);

// function hello(callback) {
//   console.log("Hello");
//   callback();
// }

// function wait() {
//   console.log("Wait!");
// }

// function leave() {
//   console.log("Leave!");
// }

// function goodbye() {
//   console.log("Goodbye!");
// }










/* ===============================
   CALLBACK WITH DATA
================================ */

// sum(displayPage, 4, 5);

// function sum(callback, x, y) {
//   const result = x + y;
//   callback(result);
// }

// function displayConsole(result) {
//   console.log(result);
// }

// function displayPage(result) {
//   document.getElementById("myH1").textContent = result;
// }









/* ===============================
   forEach()
================================ */

// forEach() = iterates over array elements
// callback receives: element, index, array

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// numbers.forEach(cube);
// numbers.forEach(display);

// function double(element, index, array) {
//   array[index] = element * 2;
// }

// function triple(element, index, array) {
//   array[index] = element * 3;
// }

// function square(element, index, array) {
//   array[index] = Math.pow(element, 2);
// }

// function cube(element, index, array) {
//   array[index] = Math.pow(element, 3);
// }

// function display(element) {
//   console.log(element);
// }









/* ===============================
   map()
================================ */

// map() = applies a function to each element
// returns a NEW array

// const numbers = [1, 2, 3, 4, 5];

// const squares = numbers.map(square);
// console.log(squares);

// function square(element) {
//   return Math.pow(element, 2);
// }

// const cubes = numbers.map(cube);
// console.log(cubes);

// function cube(element) {
//   return Math.pow(element, 3);
// }


// Date formatting example
// const dates = ["2026-1-10", "2023-1-11", "2022-1-12"];

// const formattedDates = dates.map(formatDate);
// console.log(formattedDates);

// function formatDate(date) {
//   const parts = date.split("-");
//   return `${parts[1]}/${parts[2]}/${parts[0]}`;
// }









/* ===============================
   filter()
================================ */

// filter() = creates a new array
// with elements that pass a condition

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

// function isEven(num) {
//   return num % 2 === 0;
// }

// function isOdd(num) {
//   return num % 2 !== 0;
// }

// const evenArray = numbers.filter(isEven);
// const oddArray  = numbers.filter(isOdd);

// console.log(evenArray);
// console.log(oddArray);


// Age example
// const ages = [12, 34, 13, 54, 24, 33, 13, 12, 53, 73];

// const adults = ages.filter(age => age >= 18);
// const children = ages.filter(age => age < 18);

// console.log(adults);
// console.log(children);


// Word length example
// const words = ["apple", "orange", "banana", "kiwi", "pomegranate", "coconut"];

// const shortWords = words.filter(word => word.length <= 6);
// const longWords  = words.filter(word => word.length > 6);

// console.log(shortWords);
// console.log(longWords);









/* ===============================
   reduce()
================================ */

// reduce() = reduces array to a single value

// const prices = [3, 4, 5, 67, 23, 6, 2];

// const totalPrice = prices.reduce((acc, value) => acc + value, 0);
// console.log(totalPrice);


// Min / Max example
// const grades = [3, 45, 67, 67, 98, 88, 100, 78, 22];

// const minGrade = grades.reduce((min, val) => Math.min(min, val));
// const maxGrade = grades.reduce((max, val) => Math.max(max, val));

// console.log(`${minGrade} AND ${maxGrade}`);










/* ===============================
   FUNCTION DECLARATION vs EXPRESSION
================================ */

// Function Declaration
// Defines a reusable block of code

// Function Expression
// Functions stored in variables


// setTimeout(function () {
//   console.log("hello");
// }, 3000);











/* ===============================
   FUNCTION EXPRESSIONS
================================ */

// const numbers = [1, 2, 3, 4, 5, 6, 7];

// const squares = numbers.map(function (element) {
//   return Math.pow(element, 2);
// });

// console.log(squares);

// const cubes = numbers.map(function (element) {
//   return Math.pow(element, 3);
// });

// console.log(cubes);

// const evenNums = numbers.filter(function (element) {
//   return element % 2 === 0;
// });

// console.log(evenNums);

// const oddNums = numbers.filter(function (element) {
//   return element % 2 !== 0;
// });

// console.log(oddNums);

// const total = numbers.reduce(function (acc, element) {
//   return acc + element;
// });

// console.log(total);











/* ===============================
   ARROW FUNCTIONS
================================ */

// Arrow functions = concise function expressions

// function hello() {
//   console.log("hello");
// }
// hello();

// const hello = function () {
//   console.log("hello world");
// };
// hello();

// const hello = (name) => console.log(`hello ${name}`);
// hello("aditya");

// const hello = (name, age) => {
//   console.log(`hello ${name}`);
//   console.log(`your age is ${age}`);
// };
// hello("aditya", 23);


// const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

// const squares = numbers.map(element => Math.pow(element, 2));
// console.log(squares);

// const cubes = numbers.map(element => Math.pow(element, 3));
// console.log(cubes);

// const evenNums = numbers.filter(element => element % 2 === 0);
// console.log(evenNums);

// const oddNums = numbers.filter(element => element % 2 !== 0);
// console.log(oddNums);

// const total = numbers.reduce((acc, ele) => acc + ele);
// console.log(total);











/* ===============================
   OBJECTS
================================ */

// Objects = collection of related properties & methods

// const person1 = {
//   firstName: "Spongebob",
//   lastName: "Squarepants",
//   age: 30,
//   isEmployed: true,

//   sayHello: function () {
//     console.log("Hi! I am Spongebob Squarepants");
//   },

//   eat: () => {
//     console.log("I am eating Krabby Patty");
//   }
// };

// console.log(person1.firstName);
// console.log(person1.lastName);
// console.log(person1.age);
// console.log(person1.isEmployed);
// person1.sayHello();
// person1.eat();


// const person2 = {
//   firstName: "Patrick",
//   lastName: "Star",
//   age: 42,
//   isEmployed: false,

//   sayHello: function () {
//     console.log(`Hi! I am ${this.firstName} ${this.lastName}`);
//   },

//   eat: () => {
//     console.log("I am eating Chicken and Pizza");
//   }
// };

// console.log(person2.firstName);
// console.log(person2.lastName);
// console.log(person2.age);
// console.log(person2.isEmployed);
// person2.sayHello();
// person2.eat();


/* ===============================
   this KEYWORD
================================ */

// const person = {
//   firstName: "Spongebob",
//   lastName: "Squarepants",
//   favFood: "hamburgers",
//   age: 30,
//   isEmployed: true,

//   sayHello: function () {
//     console.log(`Hi! I am ${this.firstName} ${this.lastName}`);
//   },

//   eat: function () {
//     console.log(`I love ${this.favFood}`);
//   }
// };

// person.sayHello();
// person.eat();


/* ===============================
   CONSTRUCTOR FUNCTION
================================ */

// function Car(make, model, year, color) {
//   this.make = make;
//   this.model = model;
//   this.year = year;
//   this.color = color;

//   this.drive = function () {
//     console.log(`You drive the ${this.model}`);
//   };
// }

// const car1 = new Car("Ford", "Mustang", 2024, "Black");
// const car2 = new Car("Chevrolet", "Camaro", 1978, "Red");

// console.log(car1);
// console.log(car2);

// car1.drive();
// car2.drive();











/* ===============================
   CLASSES (ES6)
================================ */

// class Product {
//   constructor(name, price) {
//     this.name = name;
//     this.price = price;
//   }

//   displayProduct() {
//     console.log(`Product: ${this.name}`);
//     console.log(`Price: $${this.price.toFixed(2)}`);
//   }

//   calculateTotal(salesTax) {
//     return this.price + this.price * salesTax;
//   }
// }

// const product1 = new Product("Shirt", 20.99);
// const product2 = new Product("Jacket", 200.0);
// const product3 = new Product("Cap", 50.55);

// product2.name = "Underwear";
// product3.price = 30.2;

// product1.displayProduct();
// product2.displayProduct();
// product3.displayProduct();

// const salesTax = 0.05;

// console.log(product1.calculateTotal(salesTax).toFixed(2));
// console.log(product2.calculateTotal(salesTax).toFixed(2));
// console.log(product3.calculateTotal(salesTax).toFixed(2));










/* ===============================
   STATIC KEYWORD
================================ */

// static = properties/methods belong to the class itself
// Accessed using ClassName, not object instances

// class User {
//   static userCount = 0;

//   constructor(username) {
//     this.username = username;
//     User.userCount++;
//   }

//   static getUserCount() {
//     console.log(`There are ${User.userCount} users online`);
//   }

//   sayHello() {
//     console.log(`Hello, my username is ${this.username}`);
//   }
// }

// const user1 = new User("aditya");
// const user2 = new User("meenakshi");
// const user3 = new User("ayush");
// const user4 = new User("rohit");

// user1.sayHello();
// user2.sayHello();
// user3.sayHello();
// user4.sayHello();

// User.getUserCount();











/* ===============================
   INHERITANCE
================================ */

// inheritance = child class inherits from parent class

// class Animal {
//   alive = true;

//   eat() {
//     console.log(`This ${this.name} is eating`);
//   }

//   sleep() {
//     console.log(`This ${this.name} is sleeping`);
//   }
// }

// class Rabbit extends Animal {
//   name = "rabbit";

//   run() {
//     console.log(`This ${this.name} is running`);
//   }
// }

// class Fish extends Animal {
//   name = "fish";

//   swim() {
//     console.log(`This ${this.name} is swimming`);
//   }
// }

// class Hawk extends Animal {
//   name = "hawk";

//   fly() {
//     console.log(`This ${this.name} is flying`);
//   }
// }

// const rabbit = new Rabbit();
// const fish = new Fish();
// const hawk = new Hawk();

// rabbit.eat();
// rabbit.sleep();
// rabbit.run();

// fish.eat();
// fish.sleep();
// fish.swim();

// hawk.eat();
// hawk.sleep();
// hawk.fly();











/* ===============================
   super KEYWORD
================================ */

// super = refers to parent class constructor/methods

// class Animal {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   giveIntro() {
//     console.log(`Hi, I am ${this.name} and I am ${this.age} years old`);
//   }

//   move(speed) {
//     console.log(`${this.name} moves at ${speed} km/h`);
//   }
// }

// class Rabbit extends Animal {
//   constructor(name, age, runSpeed) {
//     super(name, age);
//     this.runSpeed = runSpeed;
//   }

//   run() {
//     console.log(`${this.name} can run`);
//     super.move(this.runSpeed);
//     super.giveIntro();
//   }
// }

// class Fish extends Animal {
//   constructor(name, age, swimSpeed) {
//     super(name, age);
//     this.swimSpeed = swimSpeed;
//   }

//   swim() {
//     console.log(`${this.name} can swim`);
//     super.move(this.swimSpeed);
//     super.giveIntro();
//   }
// }

// class Hawk extends Animal {
//   constructor(name, age, flySpeed) {
//     super(name, age);
//     this.flySpeed = flySpeed;
//   }

//   fly() {
//     console.log(`${this.name} can fly`);
//     super.move(this.flySpeed);
//     super.giveIntro();
//   }
// }

// const rabbit = new Rabbit("Bunny", 2, 25);
// const fish = new Fish("Nemo", 1, 40);
// const hawk = new Hawk("Baaz", 6, 60);

// rabbit.run();
// fish.swim();
// hawk.fly();











/* ===============================
   GETTERS & SETTERS
================================ */

// Getters = read properties
// Setters = validate/write properties

// class Rectangle {
//   constructor(width, height) {
//     this.width = width;
//     this.height = height;
//   }

//   set width(value) {
//     if (value > 0) this._width = value;
//     else console.error("Width must be positive");
//   }

//   set height(value) {
//     if (value > 0) this._height = value;
//     else console.error("Height must be positive");
//   }

//   get width() {
//     return `${this._width.toFixed(2)} cm`;
//   }

//   get height() {
//     return `${this._height.toFixed(2)} cm`;
//   }

//   get area() {
//     return `${(this._width * this._height).toFixed(2)} cm²`;
//   }
// }

// const rectangle = new Rectangle(4.4, 2.3);
// rectangle.width = -10;        // invalid
// rectangle.height = "pizza";  // invalid

// console.log(rectangle.width);
// console.log(rectangle.height);
// console.log(rectangle.area);











/* ===============================
   PERSON CLASS (GETTERS/SETTERS)
================================ */

// class Person {
//   constructor(firstName, lastName, age) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//   }

//   set firstName(value) {
//     if (typeof value === "string" && value.length > 0)
//       this._firstName = value;
//     else console.log("Invalid first name");
//   }

//   set lastName(value) {
//     if (typeof value === "string" && value.length > 0)
//       this._lastName = value;
//     else console.log("Invalid last name");
//   }

//   set age(value) {
//     if (typeof value === "number" && value > 0)
//       this._age = value;
//     else console.log("Invalid age");
//   }

//   get firstName() {
//     return this._firstName;
//   }

//   get lastName() {
//     return this._lastName;
//   }

//   get fullName() {
//     return `${this._firstName} ${this._lastName}`;
//   }

//   get age() {
//     return this._age;
//   }
// }

// const person1 = new Person("Aditya", "Kumar", 24);
// console.log(person1.age);
// console.log(person1.fullName);











/* ===============================
   DESTRUCTURING
================================ */

// Destructuring = extract values from arrays/objects
// [] → array destructuring
// {} → object destructuring


/* ---------- Example 1: Swap values ---------- */

// let a = 1;
// let b = 3;

// [a, b] = [b, a];
// console.log(a);
// console.log(b);


/* ---------- Example 2: Swap array elements ---------- */

// const colors = ["red", "pink", "purple", "black", "white"];

// [colors[0], colors[4]] = [colors[4], colors[0]];
// console.log(colors);


/* ---------- Example 3: Assign array elements ---------- */

// const colors = ["red", "pink", "purple", "black", "white"];

// const [firstColor, secondColor, thirdColor, ...extraColors] = colors;

// console.log(firstColor);
// console.log(secondColor);
// console.log(thirdColor);
// console.log(extraColors);


/* ---------- Example 4: Object destructuring ---------- */

// const person1 = {
//   firstName: "aditya",
//   lastName: "kumar",
//   age: 26,
//   job: "cyberSecurity expert"
// };

// const person2 = {
//   firstName: "meenakshi",
//   lastName: "sharma",
//   age: 26
// };

// const { firstName, lastName, age, job = "unknown" } = person2;

// console.log(firstName);
// console.log(lastName);
// console.log(age);
// console.log(job);


/* ---------- Example 5: Destructuring in function params ---------- */

// function displayPerson({ firstName, lastName, age, job = "unemployed" }) {
//   console.log(`Name: ${firstName} ${lastName}`);
//   console.log(`Age: ${age}`);
//   console.log(`Job: ${job}`);
// }

// const person1 = {
//   firstName: "Spongebob",
//   lastName: "Squarepants",
//   age: 30,
//   job: "Fry Cook"
// };

// const person2 = {
//   firstName: "Patrick",
//   lastName: "Star",
//   age: 34
// };

// displayPerson(person1);
// console.log("\n");
// displayPerson(person2);












/* ===============================
   NESTED OBJECTS
================================ */

// const person = {
//   fullName: "aditya kumar",
//   age: 24,
//   isStudent: true,
//   hobbies: ["coding", "reading", "music", "baking"],

//   address: {
//     street: "zakir b, chandigarh university",
//     city: "mohali",
//     state: "punjab",
//     country: "india"
//   }
// };

// console.log(person.fullName);
// console.log(person.age);
// console.log(person.isStudent);
// console.log(person.hobbies[3] + " and " + person.hobbies[0]);

// console.log(person.address.city);
// console.log(person.address.country);

// for (const key in person.address) {
//   console.log(person.address[key]);
// }


/* ---------- Nested objects with classes ---------- */

// class Person {
//   constructor(name, age, ...address) {
//     this.name = name;
//     this.age = age;
//     this.address = new Address(...address);
//   }
// }

// class Address {
//   constructor(street, city, country) {
//     this.street = street;
//     this.city = city;
//     this.country = country;
//   }
// }

// const person1 = new Person("Spongebob", 30, "123 conc st", "Bikini Bottom", "Mariana Trench");
// const person2 = new Person("Patrick", 34, "456 conc st", "Bikini Bottom", "Mariana Trench");
// const person3 = new Person("Squidward", 45, "789 conc st", "Bikini Bottom", "Mariana Trench");

// console.log(person1);
// console.log(person2);
// console.log(person3);

// console.log(person1.address.country);
// console.log(person3.address.city);
// console.log(person2.address.street);












/* ===============================
   ARRAY OF OBJECTS
================================ */

// const fruits = [
//   { name: "apple", color: "red", calories: 95 },
//   { name: "orange", color: "orange", calories: 45 },
//   { name: "banana", color: "yellow", calories: 105 },
//   { name: "coconut", color: "white", calories: 166 },
//   { name: "pineapple", color: "yellow", calories: 200 }
// ];

// fruits.push({ name: "grapes", color: "purple", calories: 95 });

// fruits.forEach(fruit => console.log(fruit.name));

// const fruitNames = fruits.map(fruit => fruit.name);
// const yellowFruits = fruits.filter(fruit => fruit.color === "yellow");

// const totalCalories = fruits.reduce(
//   (total, fruit) => total + fruit.calories,
//   0
// );

// console.log(fruitNames);
// console.log(yellowFruits);
// console.log(totalCalories);

// const maxCalorieFruit = fruits.reduce((max, fruit) =>
//   fruit.calories > max.calories ? fruit : max
// );

// const minCalorieFruit = fruits.reduce((min, fruit) =>
//   fruit.calories < min.calories ? fruit : min
// );

// console.log(maxCalorieFruit);
// console.log(minCalorieFruit);












/* ===============================
   sort()
================================ */

// let numbers = [1, 5, 2, 6, 3, 445, 23, 56, 7];

// numbers.sort((a, b) => a - b);
// console.log(numbers);

// const people = [
//   { name: "aditya", age: 24, gpa: 7.5 },
//   { name: "keshav", age: 22, gpa: 6.5 },
//   { name: "somya", age: 23, gpa: 8.5 },
//   { name: "eva", age: 23, gpa: 7.0 }
// ];

// people.sort((a, b) => a.name.localeCompare(b.name));
// console.log(people);












/* ===============================
   SHUFFLE (Fisher–Yates)
================================ */

// const cards = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];

// shuffle(cards);
// console.log(cards);

// function shuffle(arr) {
//   for (let i = arr.length - 1; i > 0; i--) {
//     const randomIndex = Math.floor(Math.random() * (i + 1));
//     [arr[i], arr[randomIndex]] = [arr[randomIndex], arr[i]];
//   }
// }












/* ===============================
   DATE OBJECT
================================ */

// const date = new Date();

// console.log(date.getFullYear());
// console.log(date.getMonth());
// console.log(date.getDate());
// console.log(date.getHours());
// console.log(date.getMinutes());
// console.log(date.getSeconds());
// console.log(date.getMilliseconds());
// console.log(date.getDay());

// console.log(date.toDateString());












/* ===============================
   CLOSURE
================================ */

// function createCounter() {
//   let count = 0;

//   return {
//     increment() {
//       count++;
//       console.log(`Count: ${count}`);
//     },
//     getCount() {
//       return count;
//     }
//   };
// }

// const counter = createCounter();
// counter.increment();
// counter.increment();
// console.log(counter.getCount());


// function createGame() {
//   let score = 0;

//   return {
//     increase(points) {
//       score += points;
//       console.log(`+${points} pts`);
//     },
//     decrease(points) {
//       score -= points;
//       console.log(`-${points} pts`);
//     },
//     getScore() {
//       return score;
//     }
//   };
// }

// const game = createGame();
// game.increase(5);
// game.decrease(2);
// console.log(`Final score: ${game.getScore()} pts`);












/* ===============================
   setTimeout()
================================ */

// function sayHello() {
//   console.log("hello");
// }

// setTimeout(sayHello, 3000);

// const timeoutId = setTimeout(() => console.log("hello again"), 1000);
// clearTimeout(timeoutId);
