// Wait for the DOM to finish lading before runnin the game
// Get the button elements and event listeners to them

document.addEventListener("DOMContentLoaded", runGame())

function runGame() {

    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            let userOption = button.innerText;

            let userChoice = document.getElementById("user-choice")
            userChoice.innerText = userOption
        })
    }
}
