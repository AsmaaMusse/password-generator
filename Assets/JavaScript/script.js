// Assignment Code
var generateBtn = document.querySelector("#generate");

//Declare a function 'generatePassword'
function generatePassword() {
  //Declare the constant variables
  const lowerCase = "abcdefghijklmnopqrstuvwxyz";
  const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  const specials = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";

  //create const for password length
  const passwordLength = 10;

  //Declare variables for each DOM element
  const passwordOptions = {};
  const length = determineLength();
  const isLowerCase = determineLowerCase();
  const isUpperCase = determineUpperCase();
  const isNumbers = determineNumbers();
  const isSpecials = determineSpecials();
}

function determineLength() {
  length = prompt
  
  if (length = 10) {
    length = 10
  } else  ...  
}

//Functions to determine what user wants to include
function determineLowerCase() {
  lowerCaseCheck = confirm (
    "Do you want to include a Lowercase Characters? (y/n)"
  );

  if (lowerCaseCheck === "y") {
    lowerCaseCheck = true;
  } else if (lowerCaseCheck === "n") {
    lowerCaseCheck = false;
  } else (lowerCaseCheck === null); {
    return ('Please choose y/n as a valid answer')
}

function determineUpperCase() {
  upperCaseCheck = confirm (
    "Do you want to include a Uppercase Characters? (y/n)"
  );

  if (upperCaseCheck === "y") {
    upperCaseCheck = true;
  } else if (upperCaseCheck === "n") {
    upperCaseCheck = false;
  } else (upperCaseCheck === null); {
    return ('Please choose y/n as a valid answer')
}

function determineNumbers() {
  numberCheck = confirm (
    "Do you want to include a Number? (y/n)"
  );

  if (numberCheck === "y") {
    numberCheck = true;
  } else if (upperCaseCheck === "n") {
    numberCheck = false;
  } else (numberCheck === null); {
    return ('Please choose y/n as a valid answer')
}

function determineSpecials() {
  specialCheck = confirm (
    "Do you want to include a Special character? (y/n)"
  );

  if (specialCheck === "y") {
    specialCheck = true;
  } else if (specialCheck === "n") {
    specialCheck = false;
  } else (specialCheck === null); {
    return ('Please choose y/n as a valid answer')
}

// Run Validation

//   //return value
//   var retVal = "";
//   for (var i = 0; i < length; i++) {
//     //picks a character within charSet at index of random number
//     retVal += charSet.charAt(Math.floor(Math.random() * charSet.length));
//   }
//   // return retVal;
// }
// alert(generatePassword());


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); 
