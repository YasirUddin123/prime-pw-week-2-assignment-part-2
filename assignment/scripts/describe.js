// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening.
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// We create a variable called 'name' and we assign it a value called 'Dane'.
// Then we check to see if 'Dane' is exactly equal to 'Mary'.
// If 'Dane' and 'Mary' are exactly equal, then we console log 'Hi, Mary!'.
//Otherwise, we console log 'How do you do?'.

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// We create a variable called 'secret', but 'secret' is undefined.
// We create a variable called 'code' and assign it a value with the number 123.
// We check to see if the value of 'code' is exactly equal to 123. If true, we assign the value 'super' to the variable 'secret'. Then we take the value of 'code', multiply it by 2, and assign this multiplication answer to 'code'.
// We also check to see if the value of 'code' is greater than 250. If this is true, we assign the value 'duper' to the variable 'secret'.
// Then we console log 'secret'.

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// We create a variable called 'isStudent' and assign it the boolean value true.
// We create a variable called 'age' and assign it the number 34.
// We create the variable called 'zip' and assign it the number 55407.
// We check four conditions.
// First, we check if the variable 'isStudent' is true and if the variable 'zip' is greater than 80000. If both of these conditions are true, we console log `You're a student on the West Coast!`.
// Otherwise, we check to see if either the variable 'isStudent' is false or the variable 'age' is less than 30. If either of these conditions is true, we console log 'What are your hobbies?'.
// Otherwise, we check to see if the variable 'isStudent' is true. If this condition is true, then we console log 'Welcome to Prime!'.
// But if none of these conditions are true, then we console log 'How about the weather?'.

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code.
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2.
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment.
// Should be number++.
number--;

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and
// colorTwo is set to 'red', and mix is set to true. We check if mix is true
// -- it is, so we set colorOne and colorTwo to 'purple'

/*

//FIX - colorOne is not set to 'blue'.
//colorOne should be set to 'blue'.
let colorOne = 'red';
//FIX - colorTwo is not set to 'red'.
//colorTwo should be set to 'red'.
let colorTwo = 'blue';
let mix = true;


//FIX - ColorTwo is not included in the if statement's code block and needs to be set to 'purple'.
//insert ColorTwo on line 152 and set to 'purple'.
if (mix === true) {
  colorOne = 'purple';


}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
//FIX - we are setting time as a constant, not a variable.
//We should use the word 'let' instead of 'const' to create the 'time' variable.
const time = 4;
//FIX - we are not using the correct compound conditional.
// We should use && instead of ||.
if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/




//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge
// -- it is, so we console.log 'enter'.

/*
let age = 21;
//FIX - we are setting minAge as a constant, not a variable.
//We should use the word 'let' instead of 'const' to create the 'minAge' variable.
const minAge = 21;

//FIX - this is saying if minAge is less than or equal to age. Though correct, we can be more clear.
//Better to use age >= minAge in our conditional.
if(minAge <= age) {
//FIX - the console log 'no entry' is not the message we want to log.
//Update the console log with 'enter'.
  console.log('no entry');
  //FIX - We don't need the else statement since we made the two recent fixes earlier. Even if we included this else statement, this would be logged if age was less than or equal to minAge. This would be incorrect because this would console log 'enter' following the wrong condition.
  // Delete this else statement
} else {
  console.log('enter');

}
*/
