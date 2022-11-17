
// Characters that user can choose from
const lowerCaseChars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
const upperCaseChars = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
const numberChars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
const specialChars = ['!', '@', '#', '$', '%', '^', '&', '*', '?', '.']

// function to generate random lower case chars.

function randomLowerCaseChars() {
    let randomLowerCase = lowerCaseChars[Math.floor(Math.random() * lowerCaseChars.length)]
    return randomLowerCase
}

// function to generate random upper case chars.

function randomUpperCaseChars() {
    let randomUpperCase = upperCaseChars[Math.floor(Math.random() * upperCaseChars.length)]
    return randomUpperCase
}

// function to generate random number

function randomNumberChars() {
    let randomNumber = numberChars[Math.floor(Math.random() * numberChars.length)]
    return randomNumber
}

// function to generate random special chars.

function randomSpecialChars() {
    let randomSpecial = specialChars[Math.floor(Math.random() * specialChars.length)]
    return randomSpecial
}

