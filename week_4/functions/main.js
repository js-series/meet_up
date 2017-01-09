/*
=======================================================

** Week 3 - Project 1 **
*** Function Exercises ***

Below are a number of problems for you to solve
using JS. The JS code can be written below each
problem and the result can be displayed in the HTML page.

BASIC TRACK: 1-10
ADVANCED TRACK: 11-15
=======================================================
*/

// 0. Change element with id of q0 to say 'connected properly' and have class
//    'status-good'.
var qZero = document.getElementById('q0');

qZero.innerHTML = 'connected properly';
qZero.classList.add('status-good');

// 1. Create a function that simply returns a string that says something funny
//    when it is called and then displayed into the HTML page.
function funnyText() {
  document.getElementById('q1').innerHTML = '7 ate 9';
}

funnyText();


// 2. Define a function called "divideByTwo".
//    It should accept one parameter within a text field called "number" and
//    submitted when a button is clicked.
//    The function should divide the number by two and
//    then displayed into the HTML page.
var divideBtn = document.getElementById('divideBtn');
var number    = document.getElementById('number');
var q2        = document.getElementById('q2');

function divideByTwo(num) {
  var half = num / 2;
  q2.innerHTML = ['Half of', num, 'is', half].join(' ');
}

divideBtn.addEventListener('click', function () {
  // Explicitly convert to Base 10 number value.
  var num  = Number(number.value, 10);
  divideByTwo(num);
});


// 3. Define a function called "greeting".
//    It should accept two parameters within input fields, which will both be first names.
//    The function should display to the HTML page a greeting to both people.
var nameOne = document.getElementById('name-1');
var nameTwo = document.getElementById('name-2');
var greet   = document.getElementById('greet');
var q3      = document.getElementById('q3');

function greeting(name, otherName) {
  q3.innerHTML = ['Hello', name, 'and', otherName].join(' ');
}

greet.addEventListener('click', function () {
  greeting(nameOne.value, nameTwo.value);
});


// 4. Create a function that finds the average of 6 numbers passed in when called
//    and returns the value and is then displayed in the HTML page.
var q4 = document.getElementById('q4');
var numbers = [1,45, 32, 12, 99, 73];

function average(numbers) {
  var sum = 0;

  for (var i = 0; i < 6; i++) {
    sum += numbers[i]
  }

  q4.innerHTML += ['The average of', numbers.join(','), 'is', sum/6].join(' ');
}

average(numbers)



// 5. You use Amazon Subscribe & Save to have six cans of cashews automatically sent to you each month.
//    Write a function that takes the price per unit and calculates the total for you each month.
//    Since the price of the cashews can change anytime, pass that amount into the function to get your total price.
var pricePerUnit = 16.33;

function totalPrice(amount) {
  var total = Math.round(amount * 6 * 100) / 100;

  document.getElementById('q5').innerHTML = ['Six cans of cashewes for', amount, 'per can', 'costs', total].join(' ');
}

totalPrice(pricePerUnit);

// 6. Define functions called "area" and "perimeter". They should both accept two parameters and calculate the area and perimeter of a rectangle.

var q6 = document.getElementById('q6');

function area(base, height) {
  var value = base * height;
  q6.innerHTML += ['The area of a', base, 'by', height, 'rectangle is', value, '<br/>'].join(' ');
}

function perimeter(base, height) {
  var value = 2 * (base + height);
  q6.innerHTML += ['The perimeter of a', base, 'by', height, 'rectangle is', value, '<br/>'].join(' ');
}

area(12, 15);
perimeter(12, 15);



// 7. Define a function called "quarter". It accepts one parameter called "number".
//    The function will return a value which is one quarter of the number provided.

var q7 = document.getElementById('q7');

function quarter(value) {
  q7.innerHTML = ['A quarter of', value, 'is', value / 4].join(' ');
}

quarter(89);


// 8. Write a function called "sleepings", it should accept one parameter, an integer called "hours".
//    Write a conditional statement inside of the function. If the number of hours is more than 8, display a statement to the HTML page about getting enough rest.
//    If the number of hours is less than 8, print a statement recommending the user get more shut eye.

var q8 = document.getElementById('q8');

function sleepings(hours) {
  var message;

  if (hours < 8) {
    message = 'hours is not enough sleep. You need lots of coffee.';
  } else {
    message = 'hours is plenty! Sleep plus coffee is like double coffee.';
  }

  q8.innerHTML += [hours, message, '<br/>'].join(' ');
}

sleepings(9);
sleepings(6);


// 9. Develop a function that determines a person's age by asking them for their birth year.
var birthYear = document.getElementById('birthYear');
var q9        = document.getElementById('q9');

function displayAge(year) {
  var currentYear = (new Date).getFullYear();
  q9.innerHTML = ['You are about', currentYear - year, 'year(s) old'].join(' ');
}

birthYear.addEventListener('change', function () {
  var year = Number(birthYear.value, 10);

  displayAge(year);
});



// 10. Write a function that accepts the following array and separates the people into two teams. Display each team within the HTML page.
//    No names next to each other in the array should be on the same team.

var teammates = [
    "Harold",
    "Bob",
    "Sue",
    "Grady",
    "Notorious B.I.G.",
    "JavaCrypt",
    "Weird guy in the back",
    "Gary",
    "Carol",
    "Hipster Tim",
    "Janet"
]

var q10 = document.getElementById('q10');

function displayTeam(team) {
  var teamOne = [], teamTwo = [];

  for (var i = 0; i < team.length; i++) {
    if (i % 2 === 0) {
      teamOne.push(team[i]);
    } else {
      teamTwo.push(team[i])
    }
  }

  q10.innerHTML += '<h3>Team One</h3>';
  q10.innerHTML += teamOne.join('<br/>');
  q10.innerHTML += '<h3>Team Two</h3>';
  q10.innerHTML += teamTwo.join('<br/>');
}

displayTeam(teammates);

// 11. Allow a user to enter a three digit number.
//     Write a function that adds the numbers
//     Hint #1: You need to turn a string into an integer.
//     Hint #2: Strings can be treated as arrays too.
var numberInput = document.getElementById('numberInput');
var q11Result   = document.getElementById('q11-result');

function addDigits(numString) {
  if (numString.length !== 3) {
    q11Result.innerHTML = 'Error: Enter exactly three digits.';
    throw new Error('Three digits must be provided to addDigits');
  }

  var result = 0;

  for (var i = 0; i < numString.length; i++) {
    result +=  Number(numString[i]);
  }

  q11Result.innerHTML = result;
}

numberInput.addEventListener('change', function () {
  addDigits(numberInput.value);
});

// 12. You've finally gotten around to counting the change in your piggy bank.
//     Write a function that accepts four parameters from a user (quarters, dimes, nickels, and pennies).
//     The function should take each number of coins and multiply it times each coin's value.
//     Finally, it should return the total amount of change you have in the following format: "$32.77"
//     HINT: Understanding the toFixed method will help you with the format.

var q12 = document.getElementById('q12');

function countChange(quarters, dimes, nickels, pennies) {
  var total = 0;

  total += quarters * 0.25;
  total += dimes * 0.10;
  total += nickels * 0.05;
  total += pennies * 0.01;

  q12.innerHTML = '$' + total.toFixed(2);
}

countChange(898, 123, 33, 3);










// ADVANCED TRACK



// A. Develop a function that cleans up a phone number entered by a user.
//     The rules are as follows:
//        If the phone number is less than 10 digits or more than 11 digits, assume that it is bad number
//        If the phone number is 10 digits assume that it is good
//        If the phone number is 11 digits and the first number is 1, trim the 1 and use the last 10 digits
//        If the phone number is 11 digits and the first number is not 1, then it is a bad number.
//        HINT: You may need to use the charAt method.

var phoneNumber = document.getElementById('phoneNumber');
var q13         = document.getElementById('q13');

function cleanNumber(phone) {
  // Guard case against improper phone length
  if (phone.length < 10 || phone.length > 11) {
    return false;
  }

  // Check phone has all digits.
  for (var i = 0; i < phone.length; i++) {
    var charCode = phone.charCodeAt(i);

    if (charCode < 48 || charCode > 57) {
      return false;
    }
  }

  // Return or trim phone.
  if (phone.length === 10) {
    return phone;
  } else if (phone.charAt(0) === '1') {
    return phone.slice(1);
  } else {
    return false;
  }
}

phoneNumber.addEventListener('change', function () {
  var cleanedPhone = cleanNumber(phoneNumber.value);

  if (cleanedPhone) {
    q13.innerHTML = cleanedPhone
  } else {
    q13.innerHTML = 'Bad Phone Number';
  }
});


// B. Create a function that determines whether a parameter is a number or not.
//     Iterate over the elements in the following array to determine if each is a number.
//     HINT: You may need to use the isNaN method.
var q14 = document.getElementById('q14');

var arrayOfAllTheThings = [
    "one",
     23,
     {thingsWhalesLove: "beaches"},
     "six hundred",
     33,
     6834,
     "5,435"
  ]

function isNumber(num) {
  if (isNaN(Number(num))) {
    return false
  }

  return true;
}

function checkNums(numbers) {
  var checks = [];

  for (var i = 0; i < numbers.length; i++) {
    checks.push(isNumber(numbers[i]));
  }

  q14.innerHTML = checks.join(', ');
}

checkNums(arrayOfAllTheThings);

// C. Create a die rolling function that accepts no parameters.
//     It rolls two six-sided-dice, adds the two numbers together, and returns a roll value.
//     Display the result in the HTML page.
//     To get the random number rolled by each die, use Math.random and Math.floor.


function rollDie() {
  return Math.floor(Math.random() * 6) + 1;
}

function rollDice() {
  return rollDie() + rollDie();
}

var q15            = document.getElementById('q15');
var diceRollButton = document.getElementById('rollDice');

diceRollButton.addEventListener('click', function () {
  q15.innerHTML = rollDice();
});

// D. Using your die roll function above, figure out how many times it would take a user
//     to get around a Monopoly board once. A monopoly board has 40 spaces total.
var travelMonopoly = document.getElementById('travelMonopoly');

function countMoves() {
  var spaces = 0;
  var moves  = 0;

  for (var spaces = 0; spaces < 40; spaces += rollDie()) {
    moves += 1;
  }

  return moves;
}

var q16 = document.getElementById('q16');

travelMonopoly.addEventListener('click', function () {
  q16.innerHTML = countMoves();
});

// E. Write a function that takes a year from a user
//    and reports whether or not it is a leap year.
//    Display the result in the HTML page.
//    Remember, a leap year occurs:
//        On every year that is evenly divisible by 4
//        Except every year that is evenly divisible by 100
//        Unless the year is also evenly divisible by 400
//        For example, 1997 is not a leap year, but 1996 is. 1900 is not a leapyear, but 2000 is.

var q17      = document.getElementById('q17');
var leapYear = document.getElementById('leapYear');

function isLeapYear(year) {
  var divisibleByFour  = (year % 4 === 0);
  var hundredthYear    = (year % 100 === 0);
  var fourHundrethYear = (year % 400 === 0);

  if (divisibleByFour && !hundredthYear) {
    return true;
  } else if (fourHundrethYear) {
    return true;
  } else {
    return false;
  }
}

leapYear.addEventListener('change', function () {
  var year = Number(leapYear.value);

  if (isLeapYear(year)) {
    q17.innerHTML = 'Leap Year';
  } else {
    q17.innerHTML = 'Not a leap year';
  }
});
