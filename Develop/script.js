// Assignment Code
var generateBtn = document.querySelector("#generate");

//if all return no then return
var passLgth = 0;
var lwrLetter = "abcdefghijklmnopqrstuvwxyz";
var upperLetter = lwrLetter.toUpperCase();
var specChar = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
var passNum ="0123456789"


function generatePassword(){

  passLgth = window.prompt("Enter the legth you want your password from 8 to 128")

  if(passLgth < 8){
    window.alert("Please enter in a valid amount")
    return
  }
   if (passLgth > 128){
    window.alert("Please enter in a valid amount")
    return
   }
  

  //need if statment to check if lgth is within paramiter 

  var lwrLetterChoice = window.prompt("Would you like to include lower case letters: Enter Y or N");
  lwrLetterChoice = lwrLetterChoice.toUpperCase();

  var upperLetterChoice = window.prompt("Would you like to include upper case letters: Enter Y or N")
  upperLetterChoice = upperLetterChoice.toUpperCase()

  var specCharChoice = window.prompt("Would you like to include special characters: Enter Y or N")
  specCharChoice = specCharChoice.toUpperCase()

  var passNumChoice = window.prompt('Would you like to include numbers: Enter Y or N')
  passNumChoice = passNumChoice.toUpperCase()

  //need if statment for if all feild are equal to N

  if (
    
  )


// console.log(passLgth)
// console.log(lwrLetterChoice)
// console.log(upperLetterChoice)
// console.log(specCharChoice)
// console.log(passNumChoice)

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);









writePassword()