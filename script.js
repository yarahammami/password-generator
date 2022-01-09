function generate() {
  const passwordLength = document.getElementById("length").value;

  if (passwordLength < 8 || passwordLength > 25 || isNaN(passwordLength)) {
    document.getElementById("errorText").innerText =
      "Error. Please enter a valid number.";
  }

  let allCharacters = [];
  let upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
  let numbers = "1234567890";
  let characters = "-*&^%$#@!?><{}";

  if (document.getElementById("upper").checked) {
    for (let i = 0; i < upperCaseLetters.length; i++)
      allCharacters.push(upperCaseLetters[i]);
  }

  if (document.getElementById("lower").checked) {
    for (let i = 0; i < lowerCaseLetters.length; i++)
      allCharacters.push(lowerCaseLetters[i]);
  }

  if (document.getElementById("numbers").checked) {
    for (let i = 0; i < numbers.length; i++) {
      allCharacters.push(numbers[i]);
    }
  }

  if (document.getElementById("symbols").checked) {
    for (let i = 0; i < characters.length; i++) {
      allCharacters.push(characters[i]);
    }
  }

  let randomPassword = "";
  for (let i = 0; i < passwordLength; i++) {
    randomPassword +=
      allCharacters[Math.floor(Math.random() * allCharacters.length)];
  }

  document.getElementById("generated_password").innerText = randomPassword;
  copy(randomPassword);
}
function copy(str) {
  var element = document.createElement("textarea");
  element.value = str;
  element.setAttribute("readonly", "");
  element.select();
  document.execCommand("copy");
  document.body.removeChild(element);
}
