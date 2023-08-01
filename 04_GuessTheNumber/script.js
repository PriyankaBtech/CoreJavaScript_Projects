// Guess The Number

//parseInt() parses a string and returns the first integer
let randomNumber = parseInt(Math.random() * 100 + 1)
//console.log(randomNumber)

// form | input
const userGuess = document.querySelector('#guessField')
const submit = document.querySelector('#subt')


//div(result)
const startOver = document.querySelector('.result')

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

// cleanup method
function displayGuess(guess) {
    userGuess.value = ''
    previousGuess.innerHTML += `${guess},  `
    numGuess ++
    remaining.innerHTML = `${11 - numGuess}`    
}

function displayMessage(msg) {
    lowOrHigh.innerHTML = `<h1>${msg}</h1>`
    
}

function newGame() {
    userGuess.value = ''
    userGuess.setAttribute('disabled', '')
    para.classList.add('button')
    para.innerHTML = `<h2 id="newGame">Start New Game<h2/>`
    startOver.appendChild(para)
    playGame = false

    newGame()
}

function endGame() {
    const newGameStart = document.querySelector('#newGame')
    newGameStart.addEventListener('click', function(e) {
        randomNumber = parseInt(Math.random() * 100 + 1)
        prevGuess = []
        numGuess = 1
        previousGuess.innerHTML = ''
        remaining.innerHTML = `${11 - numGuess}`
        userGuess.removeAttribute('disabled')
        startOver.removeChild(para)               
        playGame = true
    })
}



