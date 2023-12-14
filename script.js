const generateBtn = document.getElementById("generate");
generateBtn.addEventListener("click", showprompt);

function showprompt() {
    var length = parseInt(prompt("Enter the desired length of the password (between 8 and 128 characters):"));
    if (length < 8 || length > 128) {
      alert("Invalid password length. Please enter a number between 8 and 128.");
      return;
    } else {
  }
  var includeLowercase = confirm("Would you like to include lowercase letters?");
  var includeUppercase = confirm("Would you like to include uppercase letters?");
  var includeNumbers = confirm("Would you like to include numbers?");
  var includeSpecialChars = confirm("Would you like to include special characters?");


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

  // alert("Your generated password is: " + password);
  document.querySelector("#password").textContent = password;
}