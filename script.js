// Assignment Code
var generateBtn = document.querySelector("#generate");
var passLeng = 0;

var passArray = [];
var numArray = ['1','2','3','4','5','6','7','8','9','0'];
var specArray = ['!','"','#','$','%','&','*','(',')','+',',','.','-','/','<','>','=','?','@','[',']','^','_','`','{','}','~','|'];
var lowerArray = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperArray = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

/*
  1. Prompt the user for password
    a. Pass length 8<x<128
    b. Lowercase, uppercase, numbers, special
  2. Validate input
  3. Generate password
  4. Display password
*/

function promptForPass() {
  passArray = [];

  passLeng = parseInt(prompt("How many characters do you want your password to contain?"));
  //if length is within bounds
  if (passLeng < 8 || passLeng > 128) {
    //error message
    alert("Password length must be a number within 8 to 128");
    //stop
    return false;
  }

  //if yes
  if (confirm("Click to confirm including numeric characters")) {
    //concat numbers to final array
    passArray = passArray.concat(numArray);
  }

  //if yes
  if (confirm("Click to confirm including special characters")) {
    //concat specials to final array
    passArray = passArray.concat(specArray);
  }

  //if yes
  if (confirm("Click to confirm including lowercase letters")) {
    //concat lowercase to final array
    passArray = passArray.concat(lowerArray);
  }

  //if yes
  if (confirm("Click to confirm including uppercase letters")) {
    //concat uppercase to final array
    passArray = passArray.concat(upperArray);
  }
  return true;

}

//make random pass
function generatePassword() {

  //empty password
  var passReturn = "";

  //loop scramble password
  for(var i = 0; i < passLeng; i++) {
    var scrambleIndex = Math.floor(Math.random() * passArray.length);
    //place array elements into password
    passReturn = passReturn + passArray[scrambleIndex];
    console.log(scrambleIndex);
  }
  //return value
  return passReturn;
}

// Write password to the #password input
function writePassword() {
  //if prompts are valid
  var isValidPass = promptForPass();

  var passwordText = document.querySelector("#password");

  if (isValidPass) {
    //call to make password
    var password = generatePassword();
  
    passwordText.value = password;
  } else {
    passwordText.value = "";
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);