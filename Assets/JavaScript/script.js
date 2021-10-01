// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {

 //Declare the constant variable
 const lowercase = 'abcdefghijklmnopqrstuvwxyxz';
 const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
 const numbers = '0123456789';
 const specials = '!@#$%^&*()?/;:~';
 const characters ='abcdefghijklmnopqrstuvwxyxzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()?/;:~';

 //Determine password length
 const characters = 10;
 const characters = lowercase + uppercase + numbers + specials;
 const charactersLength = characters.length;


 //Declare variables for each DOM element
 const isLength = determineLength();
 const isLowerCase = determineLowerCase();
 const isUpperCase = determineUpperCase();
 const isNumbers = determineNumbers();
 const isSpecials = determineSpecials();



 //Functions to determine what user wants to include
 const isLowerCase = confirm ('Do you want to add a lowercase?');
 const isUpperCase = confirm ('Do you want to add a uppercase?');
 const isNumbers = confirm ('Do you want to add a number?');
 const isSpecials = confirm ('Do you want to add a special character?');


 const isLowerCase = true;
 const isUpperCase = true;
 const isNumbers = true;
 const isSpecials = true;

  // Run Validation

 if (!isLowerCase && isUpperCase && isNumbers && !isSpecials) {
    alert ('Please choose at least 2 of the 4 options');
    return; 
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