// Assignment Code
var passwordText = document.querySelector("#password");
var generateBtn = document.querySelector("#generate");
var toLowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var toUpperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var number = ["1", "2", "3", "4", "5", "7", "8", "9", "10"];
var specialChar = ["!", "$", "&", "#", "@", "%"];

// Write password to the #password input
generateBtn.addEventListener("click", function () {
  var prePassword = [];
  var postPassword = "";

  var passwordLength = prompt("How many characters would you like your password to be?\n8-128")

  if (passwordLength < 8 || passwordLength > 128) {
    alert("Your password needs to be between 8 and 128 charcters long. Please Restart.")
  } else {
    if (confirm("Do you want uppercase letters in your password?")) {
      Array.prototype.push.apply(prePassword, toUpperCase)
    }
    if (confirm("Do you want lowercase letters in your password?")) {
      Array.prototype.push.apply(prePassword, toLowerCase)
    }
    if (confirm("Do you want numbers in your password?")) {
      Array.prototype.push.apply(prePassword, number)
    }
    if (confirm("Do you want special characters in your password?")) {
      Array.prototype.push.apply(prePassword, specialChar)
    }
    if (prePassword.length === 0) {
      alert("You must choose atleast one type of charcter for your password. Please Restart.")
    }
    else {
      for (let i = 0; i < passwordLength; i++) {
        var random = Math.floor(Math.random() * prePassword.length)
        postPassword += prePassword[random]
      }
    }
  }
  passwordText.innerHTML = postPassword
})
