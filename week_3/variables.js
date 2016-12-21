/*
=======================================================
** Week 1 - Project 2 **

Below are a number of problems for you to solve
using JS. The JS code can be written below each
problem.

=======================================================
*/


// 1. Connect the main.js document to the HTML page.
//    Then Update the Text to Green by adding the .status-good class.



// When the JS is connected properly, the following code will update the status message.
document.getElementById("q1").innerHTML = "JS Page Connected Properly!";
document.getElementById("q1").classList.add("status-good");



// 2. Declare a new variable called 'feelings',
//    Then store a string with a word that describes
//    how well you feel about this course material.
//    Then display that string within the HTML page.

var feelings = 'happy';
document.getElementById('q2').innerHTML = feelings;



// 3. Declare a new variable called 'name',
//    store your name within it, and then
//    create a 'message' variable with a greeting,
//    concat the message and name variables
//    and then display it within the HTML page.

var name    = 'delmer';
var message = 'hello';

document.getElementById('q3').innerHTML = message + ' ' + name;
// Alternatively you could have said:
//  document.getElementById('q3').innerHTML = message.concat(' ').concat(name);
// But who would want to write out all that?




// 4. Declare two variables with number values.
//    Add, subtract, multiply and divide them.
//    Display the values of each within the HTML page.
//    Then label these values the best you can.

var numOne = 12;
var numTwo = 3;

var results = '';

document.getElementById('q4a').innerHTML = numOne + ' plus ' + numTwo + ' is ' + (numOne + numTwo) + '<br/>';
document.getElementById('q4b').innerHTML = numOne + ' subtract ' + numTwo + ' is ' + (numOne - numTwo) + '<br/>';
document.getElementById('q4c').innerHTML = numOne + ' times ' + numTwo + ' is ' + (numOne * numTwo) + '<br/>';
document.getElementById('q4d').innerHTML = numOne + ' divided by ' + numTwo + ' is ' + (numOne / numTwo) + '<br/>';




// 5. Declare two variables with string values.
//    Create a third variable that concatenates the two strings
//    that also places the appropriate space between the strings.
//    Display the value of the third variable within the HTML page.
var greeting = 'Hello';
var name     = 'Taylor Doe';
var greetTaylor  = greeting + ' ' + name;

document.getElementById('q5').innerHTML = greetTaylor;






// 6. Add, subract, multiply and divide the strings '5' and '3'.
//    Observe the results and brieftly explain the results within the HTML page.

var five = '5';
var three = '3';

document.getElementById('q6a').innerHTML = five + ' plus ' + three + ' is ' + (five + three) + '<br/>';
document.getElementById('q6b').innerHTML = five + ' subtract ' + three + ' is ' + (five - three) + '<br/>';
document.getElementById('q6c').innerHTML = five + ' times ' + three + ' is ' + (five * three) + '<br/>';
document.getElementById('q6d').innerHTML = five + ' divided by ' + three + ' is ' + (five / three) + '<br/>';
document.getElementById('q6note').innerHTML = 'When added we get conncatentation otherwise the operations only makes sense for Numbers so the strings are coerced to Numbers and then evaluated.';








// 7. When a button is clicked, add content into the ID "q7".
document.getElementById('callAlert').addEventListener('click', function () {
  document.getElementById('q7').innerHTML = 'I was clicked!';
});





// 8. Collect a number value from the user and when a button is clicked,
//    then double user's answer and display that value into the HTML page.

document.getElementById('callDoubleNum').addEventListener('click', function () {
  var number = document.getElementById('doubleNum').value;
  document.getElementById('q8').innerHTML = number * 2;

  // What if i did the following?
  // var number = document.getElementById('doubleNum').value;
  // document.getElementById('q8').innerHTML = number + number;
  //
  // How could I could I make that work?
  //
  // Answer: The problem is that number is actually a string. So we need to coerce it into a number.
  //
  // var numberString = document.getElementById('doubleNum').value;
  // var number       = Number(numberString, 10);
});




// 9. Set the variable 'num1' to 5.
//    Set the variable 'num2' to 10.
//    Test to see if num1 is greater than num2.
//    If so, output to the HTML page: Yes, the value of num1 is greater than num2
//    If not, output to the HTML page: No, the value of num1 is not greater than num2

var num1 = 5;
var num2 = 10;

if (num1 > num2) {
  document.getElementById('q9').innerHTML = 'Yes, the value of num1 is greater than num2';
} else {
  document.getElementById('q9').innerHTML = 'No, the value of num1 is not greater than num2';
}




// 10. Set the variable 'score' to a number between 1-100.
//    Create the following conditions:
//    If the score is above 90, output to the HTML page "Great job".
//    If the score is between 60 and 89, output to the HTML page "Nice work, keep practicing".
//    If the score is below 59, output to the HTML page "Very bad: study more and retake the test".
//    Test to make sure each condition is met properly.
var score = Math.floor(Math.random() * 100) + 1;

document.getElementById('q10').innerHTML = 'Your score is ' + score + '<br/>';

if (score > 89) {
  document.getElementById('q10').innerHTML += 'Great job';
} else if ( score > 59) {
  document.getElementById('q10').innerHTML += 'Nice work, keep practicing';
} else {
  document.getElementById('q10').innerHTML += 'Very bad: study more and retake the test';
}





// ADVANCED TRACK

// A. Ask for a user's name, age and city using input fields.
//    In a single command, take the user's answers and display into the HTML page the sentence:
//   "My name is __. I'm __ years old, and I live in __."

var userName = document.createElement('input');
userName.placeholder = 'Enter your name';

var userAge = document.createElement('input');
userAge.placeholder = 'Enter your age';

var userCity = document.createElement('input');
userCity.placeholder = 'Enter your city';

var result = document.createElement('p')
result.innerHTML = "My name is __. I'm __ years old, and I live in __.";

var questionA = document.getElementById('qa');

questionA.append(userName, userAge, userCity, result);

questionA.addEventListener('keyup', function () {
  // set the default value for each to be '__'
  var name = userName.value || '__';
  var age  = userAge.value || '__';
  var city = userCity.value || '__';

  result.innerHTML = "My name is " + name + ". I'm " + age + " years old, and I live in " + city + "."
});



// B. Create the formula to determine the area of a rectangle.
//     The rectangle is: 2 inches by 3 inches
//     Display the result in the HTML page.

var width  = 2;
var height = 3;
var area   = width * height;

document.getElementById('qb').innerHTML = area + ' square inches'

// C. Collect the user's length and width input to determine the area of a rectangle and display within the HTML page the result.

var rectangleHeight = document.createElement('input');
rectangleHeight.placeholder = 'Enter the height (inches)';

var rectangleWidth = document.createElement('input');
rectangleWidth.placeholder = 'Enter the width (inches)';

var areaResult = document.createElement('p')
areaResult.innerHTML = "The area is __ square inches";

var questionC = document.getElementById('qc');

questionC.append(rectangleHeight, rectangleWidth, areaResult);

questionC.addEventListener('keyup', function () {
  // set the default value for each to be '__'
  var width  = rectangleWidth.value;
  var height = rectangleHeight.value;
  var area;

  if (width === '' || height === '') {
    area = '__'
  } else {
    area = width * height;
  }

  areaResult.innerHTML = "The area is " + area + " square inches";
});

// Alternatively we could written
/*
questionC.addEventListener('keyup', function () {
  // set the default value for each to be '__'
  var width  = rectangleWidth.value,
      height = rectangleHeight.value,
      area;

  area = !(width === '' || height === '') ? width * height : '__';

  areaResult.innerHTML = "The area is " + area + " square inches";
});
*/





// D. Have the user enter their name into a textfield. When they click a button, find the length (number of characters) of their name and display the result in the HTML page.

var nameLengthInput = document.createElement('input')
nameLengthInput.placeholder = 'Enter your name';

var nameLengthResult = document.createElement('p')
nameLengthResult.innerHTML = 'Your name is __ character(s) long';

document.getElementById('qd').append(nameLengthInput, nameLengthResult);

nameLengthInput.addEventListener('change', function () {
  var nameLength = nameLengthInput.value.length || '__';

  nameLengthResult.innerHTML = 'Your name is ' + nameLength + ' character(s) long';
});



// E. Create a textfield to request a test score between 0-100 from the user.
//    If the score is above 90, display in the HTML a message to tell the user "Great job!".
//    If the score is between 60 and 89, display a message of "Nice work, keep practicing.".
//    If the score is below 59, display a message of "Very bad: study more and retake the test.".
//    You can get fancy by adding CSS styles to each of these displays to change the color, too - Green=Good, Orange=OK, Red=Bad

// Answer: Use question10 and the pattern of listening for a change or key event.



/* SANDBOX TRACK

Solving all of these problems is a great step in the right direction,
but the next step is coming up with your own arrangements to solve
new problems. Practice creating your own problems to solve and their solutions -
you can even challenge your classmates!

Also, consider how you can add/remove CSS styles to create added presentation with the results.

*/
