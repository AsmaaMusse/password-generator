// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  //Declare the constant variable
  const lowercase = "abcdefghijklmnopqrstuvwxyxz";
  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  const specials = "!@#$%^&*()?/;:~";

  //Determine password length
  const passwordLength = Number(prompt("Enter password length (8-128):"));

  if (passwordLength < 8 || passwordLength > 128) {
    alert("Please choose a different length?");
    return passwordLength;
  } else (passwordLength >= 8 || passwordLength <= 128) {
  }

  //Functions to determine what user wants to include
  const isLowerCase = confirm("Do you want to add a lowercase?");
  const isUpperCase = confirm("Do you want to add a uppercase?");
  const isNumbers = confirm("Do you want to add a number?");
  const isSpecials = confirm("Do you want to add a special character?");

  if (!isLowerCase && !isUpperCase && !isNumbers && !isSpecials) {
    alert("please choose at least one option");
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
  if (isNumbers) {
    choices.push(numbers);
  }
  if (isSpecials) {
    choices.push(specials);
  }

  let password = "";
  // generate random password
  for (let i = 0; i < 10; i++) {
    // get random choice index
    const randomChoiceIndex = Math.floor(Math.random() * choices.length);
    // get random characters
    const randomCharacters = choices[randomChoiceIndex];
    password += randomCharacters.charAt(
      Math.floor(Math.random() * randomCharacters.length)
    );
  }
  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
