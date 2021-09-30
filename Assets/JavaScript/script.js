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
function determineLowerCase() {
  lowerCaseCheck = confirm;
  ("Do you want to include Lowercase Characters? (y/n)");
}

function determineUpperCase() {
  upperCaseCheck = confirm;
  ("Do you want to include Uppercase Characters? (y/n)");
}

function determineNumbers() {
  numberCheck;
}

// Run Validation

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
