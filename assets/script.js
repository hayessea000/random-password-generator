var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowerCase = upperCase.map(upperCase => upperCase.toLowerCase())
var symbol = [" ","!",`"`,"]","#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[", "\\","]","^","_","`","{","|","}","~"]
var all 
var numberPrompt
var upperCasePrompt
var lowerCasePrompt
var symbolPrompt
var passLength
var generated

var popup = function(){
  numberPrompt = confirm("Do you want to include NUMBERS in you password?\nClick OK for yes or Cancel for no.")
  upperCasePrompt = confirm("Do you want to include UPPERCASE LETTERS in you password?\nClick OK for yes or Cancel for no.")
  lowerCasePrompt = confirm("Do you want to include LOWERCASE LETTERS in you password?\nClick OK for yes or Cancel for no.")
  symbolPrompt = confirm("Do you want to include SPECIAL CHARACTERS in you password?\nClick OK for yes or Cancel for no.")
  passLength = prompt("How long do you want your password to be?\nMust be between 8 and 128.")
}

var make =function(){
  generated=[]
  all =[]
  if (numberPrompt==true){
    all = all.concat(number)
    alert("NUMBERS can be used in password.")
  }if (upperCasePrompt==true){
    all= all.concat(upperCase)
    alert("UPPERCASE LETTERS can be used in password.")
  }if (lowerCasePrompt==true){
    all= all.concat(lowerCase)
    alert("LOWERCASE LETTERS can be used in password.")
  }if (symbolPrompt==true){
    all= all.concat(symbol)
    alert("SPECIAL CHARACTERS can be used in password.")
  }if (numberPrompt != true && upperCasePrompt != true && lowerCasePrompt != true && symbolPrompt != true){
    alert("You MUST use at least 1 kind of character. Try again.")
  }
}

var random =function(){
  if (passLength >= 8 && passLength <= 128){
    for( i = 0; i< passLength; i++){
    var randomNumber = Math.floor(Math.random() *  all.length);
    generated.push(all[randomNumber])
    }
  }else {
    alert("The length Must be between 8 and 128 . Try again.")
  }
  return generated;
}

var generatePassword = function(){
  popup()
  make()
  random()
  return generated.join("")
}

var generateBtn = document.querySelector("#generate");

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);



