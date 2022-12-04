const bags = inputValues.split("\n");

const bagGroups = [];

for (let i = 0; i < bags.length; i += 3) {
  bagGroups.push([bags[i], bags[i + 1], bags[i + 2]]);
}

const sumOfGrupPriorities = bagGroups.reduce((sum, bagGroups) => {
  const [bag1, bag2, bag3] = bagGroups;
  for (const element1 of bag1.split("")) {
    if (bag2.includes(element1)) {
      if (bag3.includes(element1)) {
        return sum + alphabetValues[element1];
      }
    }
  }
}, 0);

alert(`Sum of grup priorities: ${sumOfGrupPriorities}`);
