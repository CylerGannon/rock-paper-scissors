function playRound(humanChoice, computerChoice) {
    
    let computerScore = 0;
    let humanScore = 0;


    if(humanChoice == computerChoice) {
        console.log("It's a tie.");
    }

    if(humanChoice == "ROCK" && computerChoice == "PAPER") {
        computerScore++;
        console.log("Paper beats rock, computer wins!");
        console.log("SCORE:\n");
        console.log("Human: " + humanScore + "\n");
        console.log("Computer: " + computerScore + "\n");
    } else {
        if(computerChoice == "ROCK" && humanChoice == "PAPER") {
            humanScore++;
            console.log("Paper beats rock, human wins!");
            console.log("SCORE:\n");
            console.log("Human: " + humanScore + "\n");
            console.log("Computer: " + computerScore + "\n");
        }
    }
    
    if(humanChoice == "PAPER" && computerChoice == "SCISSORS") {
        computerScore++;
        console.log("Scissors beats paper, computer wins!");
        console.log("SCORE:\n");
        console.log("Human: " + humanScore + "\n");
        console.log("Computer: " + computerScore + "\n");
    } else {
        if(computerChoice == "PAPER" && humanChoice == "SCISSORS") {
            humanScore++;
            console.log("Scissors beats paper, human wins!");
            console.log("SCORE:\n");
            console.log("Human: " + humanScore + "\n");
            console.log("Computer: " + computerScore + "\n");
        }
    }

    if(humanChoice == "ROCK" && computerChoice == "SCISSORS") {
        humanScore++;
        console.log("Rock beats scissors, human wins!");
        console.log("SCORE:\n");
        console.log("Human: " + humanScore + "\n");
        console.log("Computer: " + computerScore + "\n");
        
    } else {
        if(computerChoice == "ROCK" && humanChoice == "SCISSORS") {
            computerScore++
            console.log("Rock beats scissors, computer wins!");
            console.log("SCORE:\n");
            console.log("Human: " + humanScore + "\n");
            console.log("Computer: " + computerScore + "\n");
        }
    }
}

const humanSelection = "ROCK";
const computerSelection = "SCISSORS";

playRound(humanSelection, computerSelection);