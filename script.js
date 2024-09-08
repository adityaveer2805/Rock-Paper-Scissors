let choices = document.querySelectorAll(".image");
let uScore = document.querySelector(".uScore");
let cScore = document.querySelector(".cScore");
let information = document.querySelector(".info");
let reset = document.querySelector(".rst-btn");


let userScore = 0;
let compScore = 0;

information.classList.remove("win");
information.classList.remove("lose");

const resetGame = () => {
    userScore = 0;
    compScore = 0;
    uScore.innerText = userScore;
    cScore.innerText = compScore;
    information.innerText = "Rules: First to score 10 pts wins the game. New Game has started.";
    information.classList.remove("win");
    information.classList.remove("lose");
    choices.forEach((choice) => {
        choice.disabled = false;
        choice.hover.style.border = "5px solid black";
    })
}

const win = () => {
    if (userScore === 10) {
        information.innerText = "Congratulations, User WON !!";
        information.classList.add("win");
        choices.forEach((choice) => {
            choice.disabled = true;
            choice.style.border = "0px";
        })
    }
    else if (compScore === 10) {
        information.innerText = "Computer WON !!";
        information.classList.add("lose");
        choices.forEach((choice) => {
            choice.disabled = true;
            choice.style.border = "0px";
        })
    }

}

const compChoice = () => {
    let elements = ["rock", "paper", "scissor"];
    let idx = Math.floor(Math.random() * 3);
    return elements[idx];
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.innerText;
        playGame(userChoice);
    })
})

playGame = (userChoice) => {
    const computerChoice = compChoice();
    if (userChoice === computerChoice) {
        console.log("draw");
    }
    if (userChoice === "rock") {
        if (computerChoice === "scissor") {
            information.innerText = "User Win! Your Rock beats Scissor";
            userScore++;
        }
        else {
            information.innerText = "Computer Win! Paper beats Your Rock";
            compScore++;
        }
    }
    if (userChoice === "paper") {
        if (computerChoice === "rock") {
            information.innerText = "User Win! Your Paper beats Rock";
            userScore++;
        }
        else {
            information.innerText = "Computer Win! Scissor beats Your Paper";
            compScore++;
        }
    }
    if (userChoice === "scissor") {
        if (computerChoice === "paper") {
            information.innerText = "User Win! Your Scissor beats Paper";
            userScore++;
        }
        else {
            information.innerText = "Computer Win! Rock beats Your Scissor";
            compScore++;
        }
    }
    uScore.innerText = userScore;
    cScore.innerText = compScore;
    win();
}

reset.addEventListener("click", resetGame);
