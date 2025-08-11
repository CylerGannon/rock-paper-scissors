function getRandomIntInclusive(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
}

function getComputerChoice () {
    const min = 0;
    const max = 2;

    const rock = 0;
    const paper = 1;
    const scissors = 2;

    const randomInt = getRandomIntInclusive(0, 2);

    if (randomInt == rock) {
        return "ROCK";
    } else {
        if (randomInt == paper) {
            return "PAPER";
        } else {
            return "SCISSORS";
        }
    }
}

let computerScore = 0;
let humanScore = 0;

const container = document.querySelector("#container");
const humanPlay = document.querySelector("#humanPlay");
const computerPlay = document.querySelector("#computerPlay");
const computerScoreH1 = document.querySelector("#computerScore");
const humanScoreH1 = document.querySelector("#humanScore");

function playRound(humanChoice, computerChoice) {

    humanPlay.textContent = humanChoice;
    computerPlay.textContent = computerChoice;

    if(humanChoice == computerChoice) {
        console.log("It's a tie.");
    }

    if(humanChoice == "ROCK" && computerChoice == "PAPER") {
        computerScore++;
        computerScoreH1.textContent = computerScore;
        console.log("Paper beats rock, computer wins!");
    } else {
        if(computerChoice == "ROCK" && humanChoice == "PAPER") {
            humanScore++;
            humanScoreH1.textContent = humanScore;
            console.log("Paper beats rock, human wins!");
        }
    }
    
    if(humanChoice == "PAPER" && computerChoice == "SCISSORS") {
        computerScore++;
        computerScoreH1.textContent = computerScore;
        console.log("Scissors beats paper, computer wins!");
    } else {
        if(computerChoice == "PAPER" && humanChoice == "SCISSORS") {
            humanScore++;
            humanScoreH1.textContent = humanScore;
            console.log("Scissors beats paper, human wins!");
        }
    }

    if(humanChoice == "ROCK" && computerChoice == "SCISSORS") {
        humanScore++;
        humanScoreH1.textContent = humanScore;
        console.log("Rock beats scissors, human wins!");
    } else {
        if(computerChoice == "ROCK" && humanChoice == "SCISSORS") {
            computerScore++
            computerScoreH1.textContent = computerScore;
            console.log("Rock beats scissors, computer wins!");
        }
    }
}



/* 
function getHumanChoice() {
  let choice = prompt("Please type rock, paper, or scissors");
  choice = choice.toUpperCase();
  return choice;
}

function playGame() {
    let computerScore = 0;
    let humanScore = 0;

    const container = document.querySelector("#container");

    function playRound(humanChoice, computerChoice) {
        if(humanChoice == computerChoice) {
            console.log("It's a tie.");

            let content = document.createElement("p");
            content.classList.add("content");
            content.textContent = "It's a tie";
            container.appendChild(content);

        }

        if(humanChoice == "ROCK" && computerChoice == "PAPER") {
            computerScore++;
            console.log("Paper beats rock, computer wins!");
            console.log("SCORE:\n");
            console.log("Human: " + humanScore + "\n");
            console.log("Computer: " + computerScore + "\n");

            let content = document.createElement("p");
            content.classList.add("content");
            content.textContent = "Paper beats rock, computer wins!";
            container.appendChild(content);

        } else {
            if(computerChoice == "ROCK" && humanChoice == "PAPER") {
                humanScore++;
                console.log("Paper beats rock, human wins!");
                console.log("SCORE:\n");
                console.log("Human: " + humanScore + "\n");
                console.log("Computer: " + computerScore + "\n");

                let content = document.createElement("p");
                content.classList.add("content");
                content.textContent = "Paper beats rock, human wins!!";
                container.appendChild(content);
            }
        }
        
        if(humanChoice == "PAPER" && computerChoice == "SCISSORS") {
            computerScore++;
            console.log("Scissors beats paper, computer wins!");
            console.log("SCORE:\n");
            console.log("Human: " + humanScore + "\n");
            console.log("Computer: " + computerScore + "\n");

            let content = document.createElement("p");
            content.classList.add("content");
            content.textContent = "Scissors beats paper, computer wins!";
            container.appendChild(content);

        } else {
            if(computerChoice == "PAPER" && humanChoice == "SCISSORS") {
                humanScore++;
                console.log("Scissors beats paper, human wins!");
                console.log("SCORE:\n");
                console.log("Human: " + humanScore + "\n");
                console.log("Computer: " + computerScore + "\n");

                let content = document.createElement("p");
                content.classList.add("content");
                content.textContent = "Scissors beats paper, human wins!";
                container.appendChild(content);
            }
        }

        if(humanChoice == "ROCK" && computerChoice == "SCISSORS") {
            humanScore++;
            console.log("Rock beats scissors, human wins!");
            console.log("SCORE:\n");
            console.log("Human: " + humanScore + "\n");
            console.log("Computer: " + computerScore + "\n");

            let content = document.createElement("p");
            content.classList.add("content");
            content.textContent = "Rock beats scissors, human wins!";
            container.appendChild(content);
            
        } else {
            if(computerChoice == "ROCK" && humanChoice == "SCISSORS") {
                computerScore++
                console.log("Rock beats scissors, computer wins!");
                console.log("SCORE:\n");
                console.log("Human: " + humanScore + "\n");
                console.log("Computer: " + computerScore + "\n");

                let content = document.createElement("p");
                content.classList.add("content");
                content.textContent = "Rock beats scissors, computer wins!";
                container.appendChild(content);
            }
        }
    }

    for (let i =0; i < 1; i++) {
        let humanSelection = getHumanChoice();
        console.log("humanSelection: " + humanSelection);
        let computerSelection = getComputerChoice();
        console.log("computerSelection: " + computerSelection); 
        playRound(humanSelection, computerSelection);
    }
}
*/

