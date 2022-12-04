const inputValues = document.querySelector("pre").innerText;

const alphabetUpperLetters = Array.from(Array(26)).map((e, i) =>
  String.fromCharCode(i + 65)
);

const alphabetValues = Object.fromEntries(
  [
    ...alphabetUpperLetters.map((a) => a.toLowerCase()),
    ...alphabetUpperLetters,
  ].map((letter, i) => [letter, i + 1])
);

const sumOfPriorities = inputValues.split("\n").reduce((sum, bagValues) => {
  const [compartment1, compartment2] = [
    bagValues.slice(0, bagValues.length / 2).split(""),
    bagValues.slice(bagValues.length / 2, bagValues.length).split(""),
  ];
  for (const element1 of compartment1) {
    if (compartment2.includes(element1)) {
      return sum + alphabetValues[element1];
    }
  }
}, 0);

alert(`Sum of priorities: ${sumOfPriorities}`);
