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
  const length = document.getElementById("length");
  const isLowerCase = document.getElementById("lowerCase");
  const isUpperCase = document.getElementById("upperCase");
  const isNumbers = document.getElementById("numbers");
  const isSpecials = document.getElementById("specials");
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
