// Assignment Code
var generateBtn = document.querySelector("#generate");

//if all return no then return
var passLgth = 0;
var lwrLetter = "abcdefghijklmnopqrstuvwxyz";
var upperLetter = lwrLetter.toUpperCase();
var specChar = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
var passNum ="0123456789"
var passChar = ""


function generatePassword(){

          passLgth = window.prompt("Enter the legth you want your password from 8 to 128")

          if(passLgth < 8 || passLgth > 128 ){
            window.alert("Please enter in a valid amount")
            return
          }

          
          var lwrLetterChoice = window.prompt("Would you like to include lower case letters: Enter Y or N");
          lwrLetterChoice = lwrLetterChoice.toUpperCase();

          if(lwrLetterChoice !== "Y" && lwrLetterChoice !== "N"){
            window.alert("Please enter a valid entry")
            return
          }

          var upperLetterChoice = window.prompt("Would you like to include upper case letters: Enter Y or N")
          upperLetterChoice = upperLetterChoice.toUpperCase()

          if(upperLetterChoice !== "Y" && upperLetterChoice !== "N"){
            window.alert("Please enter a valid entry")
            return
          }

          var specCharChoice = window.prompt("Would you like to include special characters: Enter Y or N")
          specCharChoice = specCharChoice.toUpperCase()

          if(specCharChoice !== "Y" && specCharChoice  !== "N"){
            window.alert("Please enter a valid entry")
            return
          }

          var passNumChoice = window.prompt('Would you like to include numbers: Enter Y or N')
          passNumChoice = passNumChoice.toUpperCase()

          if(passNumChoice !== "Y" && passNumChoice  !== "N"){
            window.alert("Please enter a valid entry")
            return
          }

          

          


          if (
            lwrLetterChoice === "N" &&
            upperLetterChoice === "N" &&
            specCharChoice === "N" &&
            passNumChoice === "N"){
              window.alert("atleast one field must be Y")
              return;
            }

            

            if (lwrLetterChoice === "Y"){
              passChar = passChar + lwrLetter
            }
            if (upperLetterChoice === "Y"){
              passChar = passChar + upperLetter
            }
            if(specCharChoice === "Y"){
              passChar = passChar + specChar
            }
            if (passNumChoice === "Y"){
              passChar = passChar + passNum
            }


            var randomPassChar = passChar.split("")
            var finalpass = ""
            
           

            for (var i = 0; i < passLgth; i++){
              var index = Math.floor(Math.random() * randomPassChar.length)
              finalpass = finalpass + randomPassChar[index]
              }

          

       


        password = finalpass
        passChar = ""
      
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









writePassword()