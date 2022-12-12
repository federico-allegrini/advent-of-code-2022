const inputValues = document.querySelector("pre").innerText;

const inputMonkeys = inputValues.split("\n\n");

const monkeyAttruibutes = {
  items: [],
  operationSymbol: "",
  operationValue: 0,
  operationItself: false,
  testDivisibleBy: 1,
  thorwMonkeyTestTrue: 0,
  thorwMonkeyTestFalse: 0,
  itemsCounter: 0,
};

function getMonkeys(inputMonkeys) {
  const monkeys = [];
  inputMonkeys.forEach((monkey) => {
    monkey = monkey.split("\n");
    monkey.forEach((attribute) => {
      const [attributeName, attributeValue] = attribute.split(":");
      switch (attributeName.trim()) {
        case "Starting items":
          monkeyAttruibutes.items = attributeValue
            .split(",")
            .map((item) => parseInt(item.trim()));
          break;
        case "Operation":
          monkeyAttruibutes.operationSymbol = attributeValue.split(" ")[4];
          monkeyAttruibutes.operationValue = attributeValue.split(" ")[5];
          if (monkeyAttruibutes.operationValue === "old") {
            monkeyAttruibutes.operationItself = true;
            monkeyAttruibutes.operationValue = 0;
          } else {
            monkeyAttruibutes.operationItself = false;
            monkeyAttruibutes.operationValue = parseInt(
              monkeyAttruibutes.operationValue
            );
          }
          break;
        case "Test":
          monkeyAttruibutes.testDivisibleBy = parseInt(
            attributeValue.split(" ")[3]
          );
          break;
        case "If true":
          monkeyAttruibutes.thorwMonkeyTestTrue = parseInt(
            attributeValue.split(" ")[4]
          );
          break;
        case "If false":
          monkeyAttruibutes.thorwMonkeyTestFalse = parseInt(
            attributeValue.split(" ")[4]
          );
          break;
      }
    });
    monkeys.push({ ...monkeyAttruibutes });
  });
  return monkeys;
}

function runTheRounds(monkeys, roundsNumber, divideByThree) {
  const divider = monkeys
    .map((m) => m.testDivisibleBy)
    .reduce((a, b) => a * b, 1);
  for (let r = 0; r < roundsNumber; r++) {
    for (let m = 0; m < monkeys.length; m++) {
      let monkey = monkeys[m];
      for (let i = 0; i < monkey.items.length; i++) {
        monkey.itemsCounter++;
        let item = monkey.items[i];
        let value = monkey.operationItself ? item : monkey.operationValue;
        switch (monkey.operationSymbol) {
          case "+":
            item = item + value;
            break;
          case "-":
            item = item - value;
            break;
          case "*":
            item = item * value;
            break;
          case "/":
            item = item / value;
            break;
        }
        if (divideByThree) {
          item = Math.floor(item / 3);
        } else {
          item = item % divider;
        }
        if (item % monkey.testDivisibleBy === 0) {
          monkeys[monkey.thorwMonkeyTestTrue].items.push(item);
        } else {
          monkeys[monkey.thorwMonkeyTestFalse].items.push(item);
        }
        monkeys[m].items.shift();
        if (monkeys[m].items.length !== 0) {
          i--;
        }
      }
    }
  }
  return monkeys;
}

// 20 round
const monkeys20 = getMonkeys(inputMonkeys);

const after20RoundMonkeys = runTheRounds(monkeys20, 20, true);

after20RoundMonkeys.sort((a, b) => b.itemsCounter - a.itemsCounter);
let result =
  after20RoundMonkeys[0].itemsCounter * after20RoundMonkeys[1].itemsCounter;
alert(result);
