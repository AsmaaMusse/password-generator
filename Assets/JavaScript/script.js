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
  } else if (passwordLength >= 8 || passwordLength <= 128) {
  }

  //Functions to determine what user wants to include
  const isLowerCase = confirm("Do you want to add a lowercase?");
  const isUpperCase = confirm("Do you want to add a uppercase?");
  const isNumbers = confirm("Do you want to add a number?");
  const isSpecials = confirm("Do you want to add a special character?");

  if (!isLowerCase && !isUpperCase && !isNumbers && !isSpecials) {
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
  if (isNumbers) {
    choices.push(numbers);
  }
  if (isSpecials) {
    choices.push(specials);
  }

  //   const randomChoiceIndex = Math.floor(Math.random() * choices.length);

  //   //Random Characters
  //   const randomCharacters = choices[randomChoiceIndex];

  //   password += randomCharacters.charAt(
  //     Math.floor(Math.random() * randomCharacters.length)
  //   );

  const character = lowercase || uppercase || numbers || specials;

  //Declare random password
  let password = "";

  for (let i = 1; i <= passwordLength; i++) {
    password += character.charAt(
      Math.floor(Math.random() * character.length + 1)
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
