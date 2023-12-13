// // Assignment code here


// // Get references to the #generate element
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

const generateBtn = document.getElementById("generate");
generateBtn.addEventListener("click", showprompt);

function showprompt() {
    var length = parseInt(prompt("Enter the desired length of the password (between 8 and 128 characters):"));
    if (isNaN(length) || length < 8 || length > 128) {
      alert("Invalid password length. Please enter a number between 8 and 128.");
    } else {
}
}

var length = parseInt(prompt("Enter the desired length of the password (between 8 and 128 characters):"));
if (isNaN(length) || length < 8 || length > 128) {
  alert("Invalid password length. Please enter a number between 8 and 128.");
} else {
 
  var includeLowercase = confirm("Include lowercase letters?");
  var includeUppercase = confirm("Include uppercase letters?");
  var includeNumbers = confirm("Include numbers?");
  var includeSpecialChars = confirm("Include special characters?");


  var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numberChars = "0123456789";
  var specialChars = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

  var charSet = "";
  if (includeLowercase) {
    charSet += lowercaseChars;
  }
  if (includeUppercase) {
    charSet += uppercaseChars;
  }
  if (includeNumbers) {
    charSet += numberChars;
  }
  if (includeSpecialChars) {
    charSet += specialChars;
  }

  var password = "";
  for (var i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * charSet.length);
    password += charSet[randomIndex];
  }

  alert("Your generated password is: " + password);
}