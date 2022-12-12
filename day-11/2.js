// 10000 round
const monkeys10000 = getMonkeys(inputMonkeys);
const after10000RoundMonkeys = runTheRounds(monkeys10000, 10000, false);

after10000RoundMonkeys.sort((a, b) => b.itemsCounter - a.itemsCounter);
result =
  after10000RoundMonkeys[0].itemsCounter *
  after10000RoundMonkeys[1].itemsCounter;
alert(result);
