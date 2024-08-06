document.write(`<center><h1 style = "color: #016764; font-size: 60px; text-decoration: underline #016764"; > Assignment: 21-25 </h1></center>`)

//1. Write a program that takes two user inputs for first and
// last name using prompt and merge them in a new variable
// titled fullName. Greet the user using his full name.

var firstName = prompt("write your first name:");
var secondName = prompt("write your second name:");
var fulllName = `${firstName} ${secondName}`
alert(fulllName);

// 2. Write a program to take a user input about his favorite
// mobile phone model. Find and display the length of user
// input in your browser

var favoritePhoneModel = prompt("write your favourite phone model:");
var display = favoritePhoneModel.length;
document.write(`<h1 style = "color: gold;  font-size: 50px;  margin: 26px;">Q2:</h1>`)
document.write(`<h2 style = "color: blue; margin: 26px;"> Favourite Phone Model: ${favoritePhoneModel}</h2>`)
document.write(`<h2 style = "color: brown; margin: 26px;"> Lenght of String: ${display} </h2>`);

// 3. Write a program to find the index of letter “n” in the word
// “Pakistani” and display the result in your browser .

var letter = "Pakistani";
var result1 = letter.indexOf("n")
document.write(`<h1 style = "color: gold;  font-size: 50px ; margin: 26px; "> Q3: </h1>`)
document.write(`<h2 style = "color: blue; margin: 26px;"> String: ${letter}`)
document.write(`<h2 style = "color: brown; margin: 26px;"> The index of "n": ${result1}`)

// 4. Write a program to find the last index of letter “l” in the
// word “Hello World” and display the result in your browser.

var word = "Hello World";
var result2 = word.lastIndexOf("l")
document.write(`<h1 style = "color: gold;  font-size: 50px;  margin: 26px;"> Q4: </h1>`)
document.write(`<h2 style = "color: blue; margin: 26px;"> String: ${word}`)
document.write(`<h2 style = "color: brown; margin: 26px;"> The index of "l": ${result2}`)

// 5. Write a program to find the character at 3rd index in the
// word “Pakistani” and display the result in your browser.

var character = "Pakistani";
var result3 = character.charAt(3);
document.write(`<h1 style = "color: gold;  font-size: 50px;  margin: 26px;"> Q5: </h1>`)
document.write(`<h2 style = "color: blue; margin: 26px;"> String: ${character}`)
document.write(`<h2 style = "color: brown; margin: 26px;"> Character of index 3 : ${result3}`);

// 6. Repeat Q1 using string concat() method.

 var firstNames = prompt("write your first name:");
var secondNames = prompt("write your second name:");
var fulllNames = "Name:".concat(firstNames + " " + secondNames)
alert(fulllNames);

// 7. Write a program to replace the “Hyder” to “Islam” in the
// word “Hyderabad” and display the result in your browser.
document.write(`<h1 style = "color: gold;  font-size: 50px; margin: 26px;"> Q7: </h1>`)

var orgWord = "Hyderabad";
var replaceWord = orgWord.replace("Hyder","Islam");
document.write(`<h2 style = "color: blue; margin: 26px;"> City: ${orgWord} </h2>`);
document.write(`<h2 style = "color: brown; margin: 26px;"> After Replacement: ${replaceWord}</h2>`);

// 8. Write a program to replace all occurrences of “and” in the
// string with “&” and display the result in your browser.
// var message = “Ali and Sami are best friends. They play cricket and
// football together.”;
 document.write(`<h1 style = "color: gold;  font-size: 50px; margin: 26px; "> Q8: </h1>`)
var message = "Ali and Sami are best friends.They play cricket and football together"
var replaceMessage = message.replace(/and/g ,"&");
document.write(`<h2 style = "color: blue; margin: 26px;"> City: ${message} </h2>`);
 document.write(`<h2 style = "color: brown; margin: 26px;"> After Replacement: ${replaceMessage}</h2>`);


// 9. Write a program that converts a string “472” to a number
// 472. Display the values & types in your browser.

var stringNumber = "472";
var inNumber = parseInt(stringNumber);
 document.write(`<h1 style = "color: gold;  font-size: 50px; margin: 26px;"> Q9: </h1>`);
 document.write(`<h2 style = "color: brown; margin: 26px;">Value: ${stringNumber} </h2>`);
document.write(`<h2 style = "color: blue; margin: 26px;">Type: ${typeof(stringNumber)}</h2>`);
document.write(`<h2 style = "color: brown; margin: 26px;">Value: ${stringNumber}</h2>`);
document.write(`<h2 style = "color: blue; margin: 26px;">Type: ${typeof(inNumber)}</h2>`);

// 10. Write a program that takes user input. Convert and
// show the input in capital letters.

var userInput = prompt("Write something we convert in Capital:Must contain letters not numbers");
var conversion = userInput.toLocaleUpperCase();
var numbers = false 
for(var i = 0; i < userInput.length; i++){
    if( !isNaN(userInput[i]) && userInput[i]!== ""){
        numbers = true
        alert("please input letters only")
    }

  break;
}
document.write(`<h1  style = "color: gold;  font-size: 50px; margin: 26px;  "> Q10: </h1>`)
document.write(`<h2 style = "color: blue; margin: 26px;">UserInput: ${userInput}</h2>`);
document.write(`<h2 style = "color: brown; margin: 26px;"> Upper Case: ${conversion}</h2>`)

// 11. Write a program that takes user input. Convert and
// show the input in title case.

var userInput1 = prompt("Write your name we convert in title case");
var convers = userInput1.toLocaleLowerCase().split(' ');
var titleCaseString = convers.map(conver => conver[0].toUpperCase() + conver.slice(1)).join(' ');
document.write(`<h1  style = "color: gold;  font-size: 50px; margin: 26px;  "> Q11: </h1>`)
document.write(`<h2 style = "color: blue; margin: 26px;">UserInput: ${userInput1}</h2>`);
document.write(`<h2 style = "color: brown; margin: 26px;"> Title Case: ${titleCaseString}</h2>`)

// 12. Write a program that converts the variable num to
// string.
// var num = 35.36 ;
// Remove the dot to display “3536” display in your browser.

var num = 35.36;
var roundConversion = num.toString().replace(".","")
 document.write(`<h1  style = "color: gold;  font-size: 50px; margin: 26px;  "> Q12: </h1>`)
 document.write(`<h2 style = "color: blue; margin: 26px;">Number: ${num}</h2>`);
 document.write(`<h2 style = "color: brown; margin: 26px;">Result: ${roundConversion}</h2>`);  

// 13. Write a program to take user input and store username
// in a variable. If the username contains any special symbol
// among [@ . , !], prompt the user to enter a valid username.
// For character codes of [@ .

// Note:
// ASCII code of ! is 33
// ASCII code of , is 44
// ASCII code of . is 46
// ASCII code of @ is 64


var userInput2 = prompt(`write username`);
var chars = ['!', '@', '.', ','];
document.write(`<h2 style = "color: brown; margin: 26px;"> Upper Case: <a href='mailto:${userInput2}'></a></h2>`)
var hasSpecialChar = false; 

for (var i = 0; i < chars.length; i++) {
    if (userInput2.includes(chars[i])) {
        hasSpecialChar = true;
        alert("wrong Username")
        break; 
    }
}

// 14. You have an array
// A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array. After searching, prompt the user whether the given
// item is found in the list or not.
// Note: Perform case insensitive search. Whether the user
// enters cookie, Cookie, COOKIE or coOkIE, program
// should inform about its availability. Example:

// var bakeryItems = ["cake", "apple pie", "cookie"," chips", "patties"];
// var searchUser = prompt("Welcome to kababjees bakery. What you want to order Sir/Maam.");


let bakeryItems = ["cake", "apple pie", "cookie", "chips", "patties"];
let userSearch = prompt("Enter an item to search:");
let searchItem = userSearch.toLowerCase();
let foundItems = bakeryItems.some(item => item.toLowerCase() === searchItem);
var food = false
for(var a = 0; a <= userSearch.length; a++){
    if(bakeryItems[a] === userSearch){
        food = true
        break;
    }
     
}

if(food){
    alert(`${bakeryItems[a]} is available at index ${a} in our bakery`)
}else {
    alert(`Sorry ${userSearch} is not available in our bakery`)
 }

// 15. Write a program to take password as an input from
// user. The password must qualify these requirements:
// a. It should contain alphabets and numbers
// b. It should not start with a number
// c. It must at least 6 characters long
// If the password does not meet above requirements,
// prompt the user to enter a valid password.
// For character codes of a-z, A-Z & 0-9, refer to ASCII
// table at the end of this document.

let password = prompt("Enter your password:");

while (true) {
    let hasAlphabet = false;
    let hasNumber = false;

  
    for (let i = 0; i < password.length; i++) {
        let charCode = password.charCodeAt(i);
        if ((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)) {
            hasAlphabet = true;
        }
        if (charCode >= 48 && charCode <= 57) {
            hasNumber = true;
        }
    }

   
    if (password.length >= 6 && hasAlphabet && hasNumber && isNaN(password[0])) {
        alert("Password is valid.");
        break;
    } else {
        password = prompt("Invalid password. Please enter a valid password:");
    }
}



// 16. Write a program to convert the following string to an
// array using string split method.
// var university = “University of Karachi”;
// Display the elements of array in your browser.


var university = "University of Karachi";
var universityArray = university.split(""); 
document.write(`<h1  style = "color: gold;  font-size: 50px; margin: 26px;  "> Q16: </h1>`)
document.write(`<h2 style = "color: blue; margin: 26px;">Array Elements:</h2>`);
for(var i = 0; i < universityArray.length; i++) {
    document.write(`<h2 style = "color: blue; margin: 26px;"> ${i} = ${universityArray[i]}</h2>`);
}
    
//Q17 Write a program to display the last character of a user
 // input.


var userInput = prompt("Please enter a string:");
document.write(`<h1  style = "color: gold;  font-size: 50px; margin: 26px;  "> Q17: </h1>`)
if (userInput && userInput.length > 0) {
    var lastCharacter = userInput.charAt(userInput.length - 1);
    document.write(`<h2  style = "color: blue;  margin: 26px;  ">User Input: ${userInput} </h2>`);
   document.write(`<h2  style = "color: brown;  margin: 26px;  ">Last Character of Input: ${lastCharacter} </h2>`);
} else {
    document.write(`<h2  style = "color: blue;  margin: 26px;  ">No output: Provided</h2>`);
}

// 18. You have a string “The quick brown fox jumps over the
// lazy dog”. Write a program to count number of
// occurrences of word “the” in given string.


var sentence = "The quick brown fox jumps over the lazy dog"
var text = sentence.toLowerCase()
var count = text.split("the").length - 1;

document.write(`<h1  style = "color: gold;  font-size: 50px; margin: 26px;  "> Q18: </h1>`);
   document.write(`<h2  style = "color: brown;  margin: 26px;  ">Text: ${sentence} `)
    document.write(`<h2  style = "color: blue;  margin: 26px;  ">There are ${count} occurence(s) of 'the'`);
