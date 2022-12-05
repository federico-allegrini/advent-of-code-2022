boxes = {
  1: ["D", "H", "N", "Q", "T", "W", "V", "B"],
  2: ["D", "W", "B"],
  3: ["T", "S", "Q", "W", "J", "C"],
  4: ["F", "J", "R", "N", "Z", "T", "P"],
  5: ["G", "P", "V", "J", "M", "S", "T"],
  6: ["B", "W", "F", "T", "N"],
  7: ["B", "L", "D", "Q", "F", "H", "V", "N"],
  8: ["H", "P", "F", "R"],
  9: ["Z", "S", "M", "B", "L", "N", "P", "H"],
};

inputValues.split("\n").map((command) => {
  commands.move = parseInt(command.split("from")[0].replace("move", "").trim());
  commands.from = parseInt(command.split("from")[1].split("to")[0].trim());
  commands.to = parseInt(command.split("to")[1].trim());
  if (commands.move === 1) {
    boxes[commands.to].push(
      boxes[commands.from][boxes[commands.from].length - 1]
    );
  } else {
    boxes[commands.to] = [
      ...boxes[commands.to],
      ...boxes[commands.from].slice(-commands.move),
    ];
  }
  for (let m = 0; m < commands.move; m++) {
    boxes[commands.from].pop();
  }
});

result = [];
Object.values(boxes).forEach((box) => {
  result.push(box[box.length - 1]);
});

alert(`[9001] Last boxes sequence: ${result.join("")}`);
