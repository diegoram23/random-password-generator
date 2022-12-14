// Characters that user can choose from
const characters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
    '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '!', '@', '#', '$', '%', '^', '&', '*', '?', '.', '<', '>']

// DOM elements
const toggle = document.getElementById("toggleDark")
const body = document.querySelector("body")
const resultEl1 = document.getElementById("first-pass")
const resultEl2 = document.getElementById("second-pass")
let passwordLength = document.getElementById("slider")



// function to generate random a random character.
function getRandomChar() {
    let randomChar = characters[Math.floor(Math.random() * characters.length)]
    return randomChar
}


// function that generates random string
function generateRandomPassword() {
    let generatedPassword = ""
    for (let i = 0; i < passwordLength.value; i++) {
        generatedPassword += getRandomChar();
    }
    return generatedPassword
    
}
// Function to display passwords on screen
generate.addEventListener("click", function() {
    resultEl1.textContent = generateRandomPassword()
    resultEl2.textContent = generateRandomPassword()
})


// function to change display colors (light/dark mode)
toggle.addEventListener("click", function() {
    this.classList.toggle("bi-brightness-high-fill")
    if (this.classList.toggle("bi-moon")) {
        body.style.backgroundColor = "#EEEEEE"
        body.style.color = "#273549"
        body.style.transition = "2s"
        this.style.color = 'black'
    } else {
        body.style.background = "#1f2937"
        this.style.color = 'white'
        body.style.color = 'white'
    }
})