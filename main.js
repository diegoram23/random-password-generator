// Characters that user can choose from
const characters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
    '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '!', '@', '#', '$', '%', '^', '&', '*', '?', '.']

// DOM elements
const resultEl1 = document.getElementById("first-pass")
const resultEl2 = document.getElementById("second-pass")
const generateEl = document.getElementById("generate")
let passwordLength = 12;
let generatedPassword = "";




// function to generate random a random character.
function getRandomChar() {
    let randomChar = characters[Math.floor(Math.random() * characters.length)]
    return randomChar
}

// function that returns entire random password length
function generateRandomPassword() {
    for (let i = 0; i < passwordLength; i++) {
        generatedPassword += getRandomChar();
        resultEl1.textContent = generatedPassword
        resultEl2.textContent = generatedPassword
    }
    generatedPassword = " "
}

