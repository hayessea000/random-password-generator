var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowerCase = upperCase.map(upperCase => upperCase.toLowerCase())
var symbol = [" ","!",`"`,"]","#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[", "\\","]","^","_","`","{","|","}","~"]

var all =[]
var num
var up
var low
var sy
var long
var item=[]

var popup = function(){
  num = confirm("Do you want to include NUMBERS in you password? Click OK for yes or Cancel for no.")
  up = confirm("Do you want to include UPPERCASE LETTERS in you password? Click OK for yes or Cancel for no.")
  low = confirm("Do you want to include LOWERCASE LETTERS in you password? Click OK for yes or Cancel for no.")
  sy = confirm("Do you want to include SPECIAL CHARACTERS in you password? Click OK for yes or Cancel for no.")
  long = prompt("How long do you want your password to be?\nMust be between 8 and 128.")
  item=[]
  all =[]
}

var make =function(){
  if (num==true){
    all = all.concat(number)
    alert("NUMBERS will be used in password.")
  }if (up==true){
    all= all.concat(upperCase)
    alert("UPPERCASE LETTERS will be used in password.")
  }if (low==true){
    all= all.concat(lowerCase)
    alert("LOWERCASE LETTERS will be used in password.")
  }if (sy==true){
    all= all.concat(symbol)
    alert("SPECIAL CHARACTERS will be used in password.")
  }
}

var error = function(){
  if (num != true && up != true && low != true && sy != true){
    alert("You MUST use at least 1 kind of character. Try again.")
  }
}

var random =function(){
  if (long >= 8 && long <= 128){
    for( i = 0; i< long; i++){
    var randomNumber = Math.floor(Math.random() *  all.length);
    item.push(all[randomNumber])
    }
  }else {alert("The length Must be between 8 and 128 . Try again.")
  }
  return item;
}

var generatePassword = function(){
  popup()
  make()
  random()
  error()
  console.log(item)
  console.log(all)
  return item.join("")
}

var generateBtn = document.querySelector("#generate");

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);



