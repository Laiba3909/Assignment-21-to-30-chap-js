document.write(`<center><h1 style = "color: #016764; font-size: 60px; text-decoration: underline #016764"; > Assignment: 26-30 </h1></center>`)
// 1. Write a program that takes a positive integer from user &
// display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

var userInput = prompt("write positive integers");
var roundOff = Math.round(userInput);
var floorOff = Math.floor(userInput);
var ceilOff = Math.ceil(userInput)
 
  document.write(`<h1  style = "color: gold;  font-size: 50px; margin: 26px;  "> Q1: </h1>`)
document.write(`<h2 style = "color: brown; margin: 26px;">Number: ${userInput}</h2>`);
  document.write(`<h2 style = "color: blue; margin: 26px;">Round value: ${roundOff}</h2>`);
  document.write(`<h2 style = "color: brown; margin: 26px;">Floor value: ${floorOff}</h2>`);
  document.write(`<h2 style = "color: blue; margin: 26px;">Ceil value: ${ceilOff}</h2>`);

// 2. Write a program that takes a negative floating point
// number from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

var userInput1 = prompt("write negative integers");
var roundOff1 = Math.round(userInput1);
var floorOff1 = Math.floor(userInput1);
var ceilOff1 = Math.ceil(userInput1)
 
  document.write(`<h1  style = "color: gold;  font-size: 50px; margin: 26px;  "> Q2: </h1>`)
document.write(`<h2 style = "color: brown; margin: 26px;">Number: ${userInput1}</h2>`);
  document.write(`<h2 style = "color: blue; margin: 26px;">Round value: ${roundOff1}</h2>`);
  document.write(`<h2 style = "color: brown; margin: 26px;">Floor value: ${floorOff1}</h2>`);
  document.write(`<h2 style = "color: blue; margin: 26px;">Ceil value: ${ceilOff1}</h2>`);

// 3. Write a program that displays the absolute value of a
// number.
// E.g. absolute value of -4 is 4 & absolute value of 5 is 5

var value = parseFloat(prompt("Enter a number:"))
var result = Math.abs(value)
  document.write(`<h1  style = "color: gold;  font-size: 50px; margin: 26px;  "> Q3: </h1>`)
document.write(`<h2 style = "color: blue; margin: 26px;">The absolute value of:${value} is = ${result}</h2>`);

// 4. Write a program that simulates a dice using random()
// method of JS Math class. Display the value of dice in your
// browser.:


var diceValue = Math.floor(Math.random() * 100) + 1;
var diceValue1 = Math.floor(Math.random() * 50) + 1;
document.write(`<h1  style = "color: gold;  font-size: 50px; margin: 26px;  "> Q4: </h1>`)
document.write(`<h2 style = "color: blue; margin: 26px;">Random dice value: ${diceValue}</h2>`);
document.write(`<h2 style = "color: brown; margin: 26px;">Random dice value: ${diceValue1}</h2>`);

// 5. Write a program that simulates a coin toss using random()
// method of JS Math class. Display the value of coin in your
// browser

var dice = Math.floor(Math.random() * 10) + 1;
var dice1 = Math.floor(Math.random() * 20) + 1;
document.write(`<h1  style = "color: gold;  font-size: 50px; margin: 26px;  "> Q5: </h1>`)
document.write(`<h2 style = "color: blue; margin: 26px;"> ${dice}</h2> <h2 style = "color: brown; margin: 26px;"> Random coin value:Heads</h2>`);
document.write(`<h2 style = "color: brown; margin: 26px;"> ${dice1}</h2><h2 style = "color: blue; margin: 26px;"> Random coin value:Tails</h2>`);


// 6. Write a program that shows a random number between 1
// and 100 in your browser.

var randomNumber = Math.floor(Math.random() *100) +1
document.write(`<h1  style = "color: gold;  font-size: 50px; margin: 26px;  "> Q6: </h1>`)
document.write(`<h2 style = "color: blue; margin: 26px;">Random number between 1-100 = ${randomNumber}</h2>`);


// 7. Write a program that asks the user about his weight. Parse
// the user input and display his weight in your browser.
// Possible user inputs can be:
// a. 50
// b. 50kgs
// c. 50.2kgs
// d. 50.2kilograms

var  userWeight = prompt("Enter your body weight in kilograms")
var weight = parseFloat(userWeight)
document.write(`<h1  style = "color: gold;  font-size: 50px; margin: 26px;  "> Q7: </h1>`)
document.write(`<h2 style = "color: blue; margin: 26px;">The weight of user is:${weight} kilograms</h2>`);

// 8. Write a program that stores a random secret number from
// 1 to 10 in a variable. Ask the user to input a number
// between 1 and 10. If the user input equals the secret
// number, congratulate the user.

var randomaNumber = prompt("Enter a number between 1-10");
var results = Math.floor(Math.random() *10) + 1

if (results == randomaNumber){
    alert(`Congrats you win`)
} else {
    alert("Sorry, You lose: try again ")
}