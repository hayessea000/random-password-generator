var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

var lowerCase = upperCase.map(upperCase => upperCase.toLowerCase())

var symbol = [" ","!",`"`,"]","#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[", "\\","]","^","_","`","{","|","}","~"]

var all =3
var num=true
var up=true
var low=true
var sy=true
var item
var er
// need popups"number[0]+symbol[2]"


var generatePassword = function(){
  var random =function(){
  er = Math.floor(Math.random() * number.length);

  // get random item
  console.log(all)
  item = number[er]
  return item;
}
console.log(number)
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
