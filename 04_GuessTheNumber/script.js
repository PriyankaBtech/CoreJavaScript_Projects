// Guess The Number

//parseInt() parses a string and returns the first integer
const randomNumber = parseInt(Math.random() * 100 + 1)
//console.log(randomNumber)

// form
const userGuess = document.querySelector('#guessField')
const submit = document.querySelector('#subt')


//div(result)
const result = document.querySelector('.result')

const previousGuess = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHigh = document.querySelector('.lowOrHi')

//create
const para = document.createElement('p')


let prevGuess = []
let numGuess = 1

let playGame = true

if(playGame) {
    submit.addEventListener('click', function(e) {
        //safe from backend
        e.preventDefault()
        const guess = parseInt(userGuess.value)
        console.log(guess)
        validateGuess(guess)
    })    
}

function validateGuess(guess) {
    if(isNaN(guess)) {
        alert("Please Enter a valide Number")        
    } else if(guess < 1) {
        alert("Please enter a number more than 1")
    } else if(guess > 100) {
        alert("Please enter the number less than 100")
    } else {
        prevGuess.push(guess)
        if(numGuess === 11) {
            displayGuess(guess)
            displayMessage(`Game Over. Random number was ${randomNumber}`)
            endGame()
        } else {
            displayGuess(guess)
            checkGuess(guess)
        }
    }    
}

function checkGuess(guess) {
    if(guess === randomNumber) {
        displayMessage(`You guess it Right`)
    } else if(guess < randomNumber) {
        displayMessage(`Number is tooo Low`)
    } else if(guess > randomNumber) {
        displayMessage(`Number is tooo High`)
    }
    
}

function displayGuess(guess) {
    
}

function displayMessage(msg) {
    
}

function newGame() {

}

function endGame() {

}

