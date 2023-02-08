// Wait for the DOM to finish lading before runnin the game
// Get the button elements and event listeners to them


/**
  * Gets computer
  */
function computerOption() {
    let options = ["ROCK", "PAPER", "SCISSORS"]
    const randomElement = options[Math.floor(Math.random() * options.length)]

    let computerChoice = document.getElementById("computer-choice")
    computerChoice.innerText = randomElement
    return computerChoice
}

function Options() {

    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            let userOption = button.innerText

            let userChoice = document.getElementById("user-choice")
            userChoice.innerText = userOption

            computerOption()
            playRound()
        })

        
    }

}

 /**
  * Gets the current score from the DOM and increment it by 1
  */
function incrementWin() {  
    let oldScore = parseInt(document.getElementById("win").innerText)
    document.getElementById("win").innerText = ++oldScore
}

 /**
  * Gets the current score from the DOM and increment it by 1
  */
function incrementLost() {  
    let oldScore = parseInt(document.getElementById("lost").innerText)
    document.getElementById("lost").innerText = ++oldScore
}

/**
 * Check user option against computer option
 */
function playRound() {
    let userOption = document.getElementById("user-choice").innerText
    let computerSelection = document.getElementById("computer-choice").innerText

    console.log(userOption, computerSelection)

    if (userOption === "ROCK" && computerSelection === "SCISSORS"){
        alert(`You chose ${userOption}, Computer chose ${computerSelection}. You won :D`)
        incrementWin()
    } else if (userOption === "ROCK" && computerSelection === "PAPER"){
        alert(alert(`You chose ${userOption}, Computer chose ${computerSelection}. You lose :C`))
        incrementLost()
    } else if (userOption === "ROCK" && computerSelection === "ROCK"){
        alert(`You chose ${userOption}, Computer chose ${computerSelection}. Draw!`)
    } else if (userOption === "PAPER" && computerSelection === "SCISSORS"){
        alert(`You chose ${userOption}, Computer chose ${computerSelection}. You lose :C`)
        incrementLost()
    } else if (userOption === "PAPER" && computerSelection === "ROCK"){
        alert(`You chose ${userOption}, Computer chose ${computerSelection}. You won :D`)
        incrementWin()
    } else if (userOption === "PAPER" && computerSelection === "PAPER"){
        alert(`You chose ${userOption}, Computer chose ${computerSelection}. Draw!`)
    } else if (userOption === "SCISSORS" && computerSelection === "PAPER"){
        alert(`You chose ${userOption}, Computer chose ${computerSelection}. You won :D`)
        incrementWin()
    } else if (userOption === "SCISSORS" && computerSelection === "ROCK"){
        alert(`You chose ${userOption}, Computer chose ${computerSelection}. You lose :C`)
        incrementLost()
    } else if (userOption === "SCISSORS" && computerSelection === "SCISSORS"){
        alert(`You chose ${userOption}, Computer chose ${computerSelection}. Draw!`)
    } 

}

function runGame() {
    Options()
    
}

document.addEventListener("DOMContentLoaded", runGame())
