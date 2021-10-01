// Assignment Code
var generateBtn = document.querySelector("#generate");

//Declare the constant variable
const password = '';
const lowercase = 'abcdefghijklmnopqrstuvwxyxz';
const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numbers = '0123456789';
const specials = '!@#$%^&*()?/;:~';

const characters = lowercase + uppercase + numbers + specials;
const charactersLength = characters.length;


//Declare variables for each DOM element
const passwordOptions = {};
const isLength = determineLength();
const isLowerCase = determineLowerCase();
const isUpperCase = determineUpperCase();
const isNumbers = determineNumbers();
const isSpecials = determineSpecials();

// Creating function to determine password length
function determineLength() {
  length = prompt (
    'Choose a password length between 8 and 20 characters'
  );

  if (password <8 && >20 ) {
    alert (
      'Please insert a number between 8 to 128'
      );
    return;
  };
}

//Functions to determine what user wants to include
function determineLowerCase() {
  lowercase = confirm (
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
  uppercase = confirm (
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

  if (isNumbers === "y") {
    isNumbers = true;
  } else if (isNumbers === "n") {
    isNumbers = false;
  } else (isNumbers === null); {
    return ('Please choose y/n as a valid answer')
  }
}

function determineSpecials() {
  specials = confirm (
    "Do you want to include a Special character? (y/n)"
  );

  if (isSpecials === "y") {
    isSpecials = true;
  } else if (isSpecials === "n") {
    isSpecials = false;
  } else (isSpecials === null); {
    return ('Please choose y/n as a valid answer')
  }
}

// Run Validation

if (lowercase && uppercase && numbers && specials === 'y') {
   characters = lowercase + uppercase + numbers + specials

} else if (lowercase && numbers && specials === 'y') {
  characters = lowercase + numbers + specials

} else if (uppercase && numbers && specials ) {
  
} else {
  
} {
  
} {
  
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
generateBtn.addEventListener("click", writePassword) ;
