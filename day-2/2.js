function convertLetterInResult(letter) {
  switch (letter.toUpperCase()) {
    case "X":
      return "lost";
    case "Y":
      return "draw";
    case "Z":
      return "won";
  }
}

function calculateRoundScoreWithResult(opponentChoice, result, roundScore = 0) {
  const opponentChoiceString = convertLetterInChoice(opponentChoice);
  result = convertLetterInResult(result);
  switch (opponentChoiceString) {
    case "rock":
      switch (result) {
        case "lost":
          myCalculatedChoice = "scissors";
          break;
        case "draw":
          myCalculatedChoice = "rock";
          break;
        case "won":
          myCalculatedChoice = "paper";
          break;
      }
      break;
    case "paper":
      switch (result) {
        case "lost":
          myCalculatedChoice = "rock";
          break;
        case "draw":
          myCalculatedChoice = "paper";
          break;
        case "won":
          myCalculatedChoice = "scissors";
          break;
      }
      break;
    case "scissors":
      switch (result) {
        case "lost":
          myCalculatedChoice = "paper";
          break;
        case "draw":
          myCalculatedChoice = "scissors";
          break;
        case "won":
          myCalculatedChoice = "rock";
          break;
      }
      break;
  }
  return calculateRoundScore(opponentChoice, myCalculatedChoice);
}

const totalScorResult = inputValues
  .split("\n")
  .reduce((myTotalScore, strategyValues) => {
    const [opponentChoiche, myChoice] = strategyValues.split(" ");
    return (
      myTotalScore + calculateRoundScoreWithResult(opponentChoiche, myChoice)
    );
  }, 0);

alert(`Total score with result: ${totalScorResult}`);
