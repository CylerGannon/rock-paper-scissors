function getRandomIntInclusive(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
}

const min = 0;
const max = 2;

const rock = 0;
const paper = 1;
const scissors = 2;

const randomInt = getRandomIntInclusive(0, 2);

if (randomInt == rock) {
    return "rock";
} else {
    if (randomInt == paper) {
        return "paper";
    } else {
        return "scissors";
    }
}