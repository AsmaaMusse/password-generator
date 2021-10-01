// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {

 //Declare the constant variable
 const lowercase = 'abcdefghijklmnopqrstuvwxyxz';
 const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
 const numbers = '0123456789';
 const specials = '!@#$%^&*()?/;:~';
 const characters ='abcdefghijklmnopqrstuvwxyxzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()?/;:~'

 //Determine password length
 const characters = 10
 const characters = lowercase + uppercase + numbers + specials;
 const charactersLength = characters.length;


 //Declare variables for each DOM element
 const isLength = determineLength();
 const isLowerCase = determineLowerCase();
 const isUpperCase = determineUpperCase();
 const isNumbers = determineNumbers();
 const isSpecials = determineSpecials();



 //Functions to determine what user wants to include
 const isLowerCase = confirm
 const isUpperCase = confirm
 const isNumbers = confirm 
 const isSpecials = confirm

  // Run Validation

 if (lowercase && uppercase && numbers && specials === 'y') {
   characters = lowercase + uppercase + numbers + specials

  } else if (lowercase && numbers && specials === 'y') {
   characters = lowercase + numbers + specials

  } else if (uppercase && numbers && specials === 'y') {
   characters = uppercase + numbers + specials

  } else if(lowercase && uppercase && specials === 'y') {
   characters = lowercase + uppercase + specials

  } else if(lowercase && uppercase && numbers === 'y') {
    characters = lowercase + upper + numbers

  } else if(numbers && specials === 'y') {
    characters = numbers + specials

  }  else {
    alert ('Please choose at least 2 of the 4 options');
  }

  // Return value

 //Declare a function 'generatePassword'
  function generatePassword() {
   for (var i = 0; i < length; i++) {
    password += characters.charAt(Math.floor(Math.random() * charactersLength));

    return password;
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