// Characters that user can choose from
const randomChars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 
                        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 
                        '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '!', '@', '#', '$', '%', '^', '&', '*', '?', '.']

// DOM elements
const resultEl1 = document.getElementById("first-pass")
const resultEl2 = document.getElementById("second-pass")
const lengthEl = document.getElementById("length")
const generateEl = document.getElementById("generate")
let generatedPassword = "";




//Listens for what variables user selects
generateEl.addEventListener("click", () => {
    const length = +lengthEl.value;
    const hasUpper = uppercaseEl.checked;
    const hasLower = lowercaseEl.checked;
    const hasNumbers = numbersEl.checked;
    const hasSpecial = specialCharsEl.checked;

    resultEl.innerText = generatePassword(length, hasLower, hasNumbers, hasUpper, hasSpecial)
});



// function to generate random lower case chars.

function getRandomChars() {
    let generatedPassword = randomChars[Math.floor(Math.random() * randomChars.length)]
    return generatedPassword
}



