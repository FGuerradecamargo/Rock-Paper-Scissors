// Wait for the DOM to finish lading before runnin the game
// Get the button elements and event listeners to them


/**
  * Gets computer option
  */
function computerOption() {
    let options = ["Rock", "Paper", "Scissors"]
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

    if (userOption === "Rock" && computerSelection === "Scissors"){
        alert(`You chose ${userOption}, Computer chose ${computerSelection}. You won :D`)
        incrementWin()
    } else if (userOption === "Rock" && computerSelection === "Paper"){
        alert(alert(`You chose ${userOption}, Computer chose ${computerSelection}. You lose :C`))
        incrementLost()
    } else if (userOption === "Rock" && computerSelection === "Rock"){
        alert(`You chose ${userOption}, Computer chose ${computerSelection}. Draw!`)
    } else if (userOption === "Paper" && computerSelection === "Scissors"){
        alert(`You chose ${userOption}, Computer chose ${computerSelection}. You lose :C`)
        incrementLost()
    } else if (userOption === "Paper" && computerSelection === "Rock"){
        alert(`You chose ${userOption}, Computer chose ${computerSelection}. You won :D`)
        incrementWin()
    } else if (userOption === "Paper" && computerSelection === "Paper"){
        alert(`You chose ${userOption}, Computer chose ${computerSelection}. Draw!`)
    } else if (userOption === "Scissors" && computerSelection === "paper"){
        alert(`You chose ${userOption}, Computer chose ${computerSelection}. You won :D`)
        incrementWin()
    } else if (userOption === "Scissors" && computerSelection === "Rock"){
        alert(`You chose ${userOption}, Computer chose ${computerSelection}. You lose :C`)
        incrementLost()
    } else if (userOption === "Scissors" && computerSelection === "Scissors"){
        alert(`You chose ${userOption}, Computer chose ${computerSelection}. Draw!`)
    } 

}

function runGame() {
    Options()
    
}

document.addEventListener("DOMContentLoaded", runGame())
