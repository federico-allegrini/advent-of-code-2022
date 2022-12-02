const inputValues = document.querySelector("pre").innerText;

const choicePoints = {
  rock: 1,
  paper: 2,
  scissors: 3,
};

const roundOutcomePoints = {
  lost: 0,
  draw: 3,
  won: 6,
};

function convertLetterInChoice(letter) {
  switch (letter.toUpperCase()) {
    case "A":
    case "X":
      return "rock";
    case "B":
    case "Y":
      return "paper";
    case "C":
    case "Z":
      return "scissors";
    default:
      return letter;
  }
}

function calculateRoundScore(opponentChoice, myChoice, roundScore = 0) {
  opponentChoice = convertLetterInChoice(opponentChoice);
  myChoice = convertLetterInChoice(myChoice);
  switch (opponentChoice) {
    case "rock":
      switch (myChoice) {
        case "rock":
          roundScore = roundOutcomePoints.draw;
          break;
        case "paper":
          roundScore = roundOutcomePoints.won;
          break;
        case "scissors":
          roundScore = roundOutcomePoints.lost;
          break;
      }
      break;
    case "paper":
      switch (myChoice) {
        case "rock":
          roundScore = roundOutcomePoints.lost;
          break;
        case "paper":
          roundScore = roundOutcomePoints.draw;
          break;
        case "scissors":
          roundScore = roundOutcomePoints.won;
          break;
      }
      break;
    case "scissors":
      switch (myChoice) {
        case "rock":
          roundScore = roundOutcomePoints.won;
          break;
        case "paper":
          roundScore = roundOutcomePoints.lost;
          break;
        case "scissors":
          roundScore = roundOutcomePoints.draw;
          break;
      }
      break;
  }
  return roundScore + choicePoints[myChoice];
}

const totalScore = inputValues
  .split("\n")
  .reduce((myTotalScore, strategyValues) => {
    const [opponentChoiche, myChoice] = strategyValues.split(" ");
    return myTotalScore + calculateRoundScore(opponentChoiche, myChoice);
  }, 0);

alert(`Total score: ${totalScore}`);
