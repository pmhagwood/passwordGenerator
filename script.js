// Assignment Code
var generateBtn = document.querySelector("#generate");

// Arrays with all the possible character variations
var lowCaseAlphabet = [
  "a", 
  "b", 
  "c", 
  "d", 
  "e", 
  "f", 
  "g", 
  "h", 
  "i", 
  "j", 
  "k", 
  "l", 
  "m", 
  "n", 
  "o", 
  "p", 
  "q", 
  "r", 
  "s", 
  "t", 
  "u", 
  "v", 
  "w", 
  "x", 
  "y", 
  "z"
];
var upperCaseAlphabet = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];
var numberValue = [
  0, 
  1, 
  2, 
  3, 
  4, 
  5, 
  6, 
  7, 
  8, 
  9
];
var specialCharacters = [
  "@", 
  "%", 
  "+", 
  "/", 
  "'", 
  "!", 
  "#", 
  "$", 
  "^", 
  "?", 
  ":", 
  ",", 
  "(", 
  ")", 
  "{", 
  "}", 
  "[", 
  "]", 
  "~", 
  "`",
  "_", 
  "."
]


// generate the password based on user selections
function generatePassword() {
  // promts the user to select a number between 8 and 128
  var passLength = parseInt(
    prompt("How many characters would you like? Password must include at least 8 characters.")
  );
  //console.log(passLength);

  // Check for proper lenght based on user selection
  if (passLength < 8 || passLength > 128){
    alert('password needs to be between 8 and 128, please try again.')
    return password = "Try Again";
  } else if (isNaN(passLength)){
    // checks to see if they typed in a non-number
    alert('password needs to be a number between 8 and 128, please try again.')
    return password = "Try Again";
  } else {
    // Asks remaining questions to create password
    var useUpperCase = confirm (
      'Would you like password to include upper case letters?'
    );
    var useLowerCase = confirm (
      'Would you like password to include lower case letters?'
    );
    var useNumbers = confirm (
      'Would you like password to include numbers?'
    );
    var useSpecialCharacters = confirm (
      'Would you like password to include special characters?'
    );
    // checks to see if they chose no characters at all
      if (
        useUpperCase === false &&
        useLowerCase === false &&
        useNumbers === false &&
        useSpecialCharacters === false
      ) {
        alert('password must include at least one type of character, please try again.')
        return password = "Try Again";
      }
    
    // Array to store possible options
    var possibleOptions = [];
    // Array to store useable options
    var useOptions = [];

    // If statements to store all the possible options into one array
    if (useLowerCase){
      possibleOptions = possibleOptions.concat(lowCaseAlphabet);
    }
    if(useUpperCase){
      possibleOptions = possibleOptions.concat(upperCaseAlphabet);
    }
    if(useNumbers){
      possibleOptions = possibleOptions.concat(numberValue);
    }
    if(useSpecialCharacters){
      possibleOptions = possibleOptions.concat(specialCharacters);
    }
    // console.log(possibleOptions);
    // loop to store all the useable characters
    for (var i = 0; i <= (passLength -1); i++) {
      var getRandom = Math.floor (Math.random ()* possibleOptions.length);
      useOptions.push(possibleOptions[getRandom]);
      //console.log(useOptions);
    }
    //console.log('useOptions is ' + useOptions);
    // set the password for print to screen and print
    password = useOptions.join('');
    //console.log('password is ' + password);
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
