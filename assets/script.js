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
var item
var er

var popup = function(){
  num = confirm("Do you want to include NUMBERS in you password? Click OK for yes or Cancel for no.")
  up = confirm("Do you want to include UPPERCASE LETTERS in you password? Click OK for yes or Cancel for no.")
  low = confirm("Do you want to include LOWERCASE LETTERS in you password? Click OK for yes or Cancel for no.")
  sy = confirm("Do you want to include SPECIAL CHARACTERS in you password? Click OK for yes or Cancel for no.")
  make()
  long = prompt("How long do you want your password to be?\nMust be between 8 and 128.")
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
  }if (num != true && up != true && low != true && sy != true){ 
    console.log ("you need something")
  }
}

var error = function(){
  if (num != true && up != true && low != true && sy != true){
    alert("You MUST use at least 1 kind of character. Try again.")
  }if (8<= long <= 128){
    alert("The length Must be between 8 and 128 . Try again.")
  }
}

var random =function(){
  er = Math.floor(Math.random() * /* change to all*/ number.length);

  console.log(all) /* remove log*/
  item = /* change to all*/number[er]
  return item;
}


var generatePassword = function(){
  console.log(number)
  popup()
  random()
return item
}
// if (num==true && up==true && low==true && sy==true){
//     all = number.concat(upperCase,lowerCase,symbol)
//     console.log (all)
//     10
// }else if (num==true && up==true && low==true && sy==false){
//     all = number.concat(upperCase,lowerCase)
//     console.log (all)
// }else if (num==true && up==true && low==false && sy==true){
//     all = number.concat(upperCase,symbol)
//     console.log (all)
// }else if (num==true && up==false && low==true && sy==true){
//     all = number.concat(symbol,lowerCase)
//     console.log (all)
// }else if (num==false && up==true && low==true && sy==true){
//     all = symbol.concat(upperCase,lowerCase)
//     console.log (all)
// }else if (num==true && up==true && low==false && sy==false){
//     all = number.concat(upperCase)
//     console.log (all)
// }else if (num==true && up==false && low==true && sy==false){
//     all = number.concat(lowerCase)
//     console.log (all)
// }else if (num==false && up==true && low==true && sy==false){
//     all = upperCase.concat(lowerCase)
//     console.log (all)
// }else if (num==true && up==false && low==false && sy==true){
//     all = number.concat(symbol)
//     console.log (all)
// }else if (num==false && up==true && low==false && sy==true){
//     all = symbol.concat(upperCase)
//     console.log (all)
// }else if (num==false && up==false && low==true && sy==true){
//     all = symbol.concat(lowerCase)
//     console.log (all)
// }else if (num==false && up==false && low==false && sy==true){
//     all = symbol
//     console.log (all)
// }else if (num==false && up==false && low==true && sy==false){
//     all = lowerCase
//     console.log (all)
// }else if (num==false && up==true && low==false && sy==false){
//     all = upperCase
//     console.log (all)
// }else if (num==true && up==false && low==false && sy==false){
//     all = number
//     console.log (all)
// }else if (num==false && up==false && low==false && sy==false){
//     console.log ("you need something")
// }else{
//     console.log("error")
// }


// }
// need create 


// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  console.log(password)
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
