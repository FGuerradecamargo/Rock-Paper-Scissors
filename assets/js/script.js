// Wait for the DOM to finish lading before runnin the game
// Get the button elements and event listeners to them

function computerOption() {
    let options = ["Stone", "Paper", "Scissors"]
    const randomElement = options[Math.floor(Math.random() * options.length)];

    let ComputerChoice = document.getElementById("computer-choice")
    ComputerChoice.innerText = randomElement
}

document.addEventListener("DOMContentLoaded", runGame())

function runGame() {

    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            let userOption = button.innerText;

            let userChoice = document.getElementById("user-choice")
            userChoice.innerText = userOption

            computerOption()
        })
    }

}

