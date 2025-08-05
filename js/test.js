function getHumanChoice() {
  let choice = prompt("Please type rock, paper, or scissors");
  choice = choice.toUpperCase();
  return choice;
}

getHumanChoice();