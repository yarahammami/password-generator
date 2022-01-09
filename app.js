function generate(){

const passLength = document.getElementById("length").value;


if(passLength < 8 || passLength > 100 || isNaN(passLength)){
    document.write("Error. Please enter a valid number.");
}

let allCharacters = [];
let upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split();
let lowerCaseLetters =  "abcdefghijklmnopqrstuvwxyz".split();
let numbers = "1234567890".split();
let characters = "-*&^%$#@!?><{}".split();

if(document.getElementById("upper").checked){
    for(let i = 0; i < upperCaseLetters.length; i++)
    allCharacters.push(upperCaseLetters[i]);
}

if(document.getElementById("lower").checked){
    for(let i = 0; i <lowerCaseLetters.length; i++)
    allCharacters.push(lowerCaseLetters[i]);
}

if(document.getElementById("num").checked){
    for(let i = 0; i < numbers.length; i++)
    allCharacters.push(numbers[i]);
}

if(document.getElementById("char").checked){
    for(let i = 0; i < characters.length; i++)
    allCharacters.push(characters[i]);
}

let randomPass = "";

for(let i = 0; i < passLength; i++){
    allCharacters[Math.floor(Math.random()*allCharacters.length)];
    randomPass +=  allCharacters[Math.floor(Math.random()*allCharacters.length)];
}

document.querySelector("input").value = randomPass;


}

function copy(){

}