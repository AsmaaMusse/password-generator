// Assignment Code
var generateBtn = document.querySelector("#generate");

//Declare a function 'generatePassword'
function generatePassword() {
  //Declare the constant variable arrays
  const lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  const uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  const numbers = ['0', '1', '2','3', '4', '5', '6', '7', '8', '9'];
  const specials = ["+", "-", "&&", "||", "!", "(", ")", "{", "}", "[", "]", "^","~", "*", "?", ":","\"","\\"];

  //Declare variables for each DOM element
  const passwordOptions = {};
  const isLength = determineLength();
  const isLowerCase = determineLowerCase();
  const isUpperCase = determineUpperCase();
  const isNumbers = determineNumbers();
  const isSpecials = determineSpecials();
}
s
//create const for password length
function determineLength() {
  length = prompt (
    'Choose a password length between 8 and 20 characters'
  );

  if (passwordOptions >= 8 || <= 20) {
   isLength true; 
   } else (password <=8 || >=20) {
   isLength false; 
   }return ('Please choose a number between 8 and 20' )
   }
  }
}

//Functions to determine what user wants to include
function determineLowerCase() {
  lowerCase = confirm (
    "Do you want to include a Lowercase Characters? (y/n)"
  );

  if (isLowerCase === "y") {
    isLowerCase = true;
  } else if (isLowerCase === "n") {
    isLowerCase = false;
  } else (isLowerCase === null); {
    return ('Please choose y/n as a valid answer')
  }
}

function determineUpperCase() {
  upperCase = confirm (
    "Do you want to include a Uppercase Characters? (y/n)"
  );

  if (isUpperCase === "y") {
    isUpperCase = true;
  } else if (isUpperCase === "n") {
    isUpperCase = false;
  } else (isUpperCase === null); {
    return ('Please choose y/n as a valid answer')
  }
}

function determineNumbers() {
  number = confirm (
    "Do you want to include a Number? (y/n)"
  );

  if (isNumber === "y") {
    isNumber = true;
  } else if (isNumber === "n") {
    isNumber = false;
  } else (isNumber === null); {
    return ('Please choose y/n as a valid answer')
  }
}

function determineSpecials() {
  special = confirm (
    "Do you want to include a Special character? (y/n)"
  );

  if (isSpecial === "y") {
    isSpecial = true;
  } else if (isSpecial === "n") {
    isSpecial = false;
  } else (isSpecial === null); {
    return ('Please choose y/n as a valid answer')
  }
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
generateBtn.addEventListener("click", writePassword) ;
