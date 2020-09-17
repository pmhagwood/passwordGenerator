// Assignment Code
var generateBtn = document.querySelector("#generate");
// set an object passValues with all the variables needed for the password
var passValues = {
  alphabet: [
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
  ],
  number: [ 
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9
  ],
  specialChar: [
    "@", "%", "+", "/", "'", "!", "#", "$", "^", "?", ":", ",", "(", ")", "{", "}", "[", "]", "~", "`","_", "."
  ]
}

// generate the password based on user selections
function generatePassword() {
  var password = [];
  // promts the user to select a number between 8 and 128
  passLength = prompt("How many characters would you like? Password must include at least 8 characters.");
  // if the user picks a number between 8 and 128 then start password generator
  if (passLength >= 8 && passLength <= 128){
    // loops through the number of times the user picked
    for (var i = 0; i <= (passLength - 1); i++) {
      var valueNum = Math.floor (Math.random()*4);
      //console.log("valueNum is " + valueNum);
      if (valueNum === 0){
        var alphNum = Math.floor (Math.random()* passValues.alphabet.length);
        //console.log('alphNum is ' + alphNum);
        passCharacter = passValues.alphabet[alphNum];
        password.push([passCharacter]);
        console.log(passCharacter);
      } else if (valueNum === 1){
        var alphNum = Math.floor (Math.random()* passValues.alphabet.length);
        //console.log('alphNum is ' + alphNum);
        passCharacter = passValues.alphabet[alphNum].toUpperCase();
        password.push([passCharacter]);
        console.log(passCharacter);
      } else if (valueNum === 2){
        var numbNum = Math.floor (Math.random()* passValues.number.length);
        //console.log('Number is ' + numbNum);
        passCharacter = passValues.number[numbNum];
        password.push([passCharacter]);
        console.log(passCharacter);
      } else {
        var specNum = Math.floor (Math.random()* passValues.specialChar.length);
        //console.log('Number is ' + specNum);
        passCharacter = passValues.specialChar[specNum];
        password.push([passCharacter]);
        console.log(passCharacter);
      }
      console.log("password is " + password);
    }
  } else {
    // if the user didn't pick a number between 8 and 128 then ask again
    alert("Password must be between 8 and 128 characters.")
    writePassword();
  }
  return password
}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
