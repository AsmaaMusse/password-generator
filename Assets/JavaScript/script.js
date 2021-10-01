// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  //Declare the constant variable
  const lowercase = "abcdefghijklmnopqrstuvwxyxz";
  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  const specials = "!@#$%^&*()?/;:~";

  //Determine password length
  const length = 10;
  const characters = lowercase + uppercase + numbers + specials;
  const charactersLength = characters.length;

  //Functions to determine what user wants to include
  const isLowerCase = confirm("Do you want to add a lowercase?");
  const isUpperCase = confirm("Do you want to add a uppercase?");
  const isNumbers = confirm("Do you want to add a number?");
  const isSpecials = confirm("Do you want to add a special character?");

  isLowerCase = true / false;
  isUpperCase = true / false;
  isNumbers = true / false;
  isSpecials = true / false;

  // Run Validation
  if (!isLowerCase && !isUpperCase && !isNumbers && !isSpecials) {
    alert("Please choose at least 2 of the 4 options");
    return;
  }

  // Return value
  const choices = [""];
  choices = [[lowercase], [uppercase], [numbers], [specials]];

  if (isLowerCase) {
    return choices[0];
  }

  if (isUpperCase) {
    return choices[1];
  }

  if (isNumbers) {
    return choices[2];
  }

  if (isSpecials) {
    return choices[3];
  }

  //Declare random password
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
