// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  //Declare the constant variable
  const lowercase = "abcdefghijklmnopqrstuvwxyxz";
  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  const specials = "!@#$%^&*()?/;:~";

  //Determine password length
  const passwordLength = Number(prompt("Enter password length:"));

  if (passwordLength >= 8 && passwordLength <= 128) {
    alert("Please choose a different length?");
  } else {
    return "";
  }

  //Functions to determine what user wants to include
  const isLowerCase = confirm("Do you want to add a lowercase?");
  const isUpperCase = confirm("Do you want to add a uppercase?");
  const isNumbers = confirm("Do you want to add a number?");
  const isSpecials = confirm("Do you want to add a special character?");

  isLowerCase = true;
  isUpperCase = true;
  isNumbers = true;
  isSpecials = true;

  if (!isLowerCase && !isUpperCase && !isNumeric && !isSpecials) {
    alert();
    return;
  }

  // Return value
  const choices = [];

  if (isLowerCase) {
    choices.push(lowercase);
  }
  if (isUpperCase) {
    choices.push(uppercase);
  }
  if (isNumeric) {
    choices.push(numeric);
  }
  if (isSpecials) {
    choices.push(specials);
  }

  //Declare random password
  let 
  for (let i = 0; i < length; i++) {
    randomNumber = Math.floor(Math.random() * characters.length);
    password += characters.substring(randomNumber, randomNumber + 1);
  }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
