const inputValues = document.querySelector("pre").innerText;

const movements = inputValues.split("\n");

let direction;
let numberOfMovement;

let distance = 0;

let tail1Positions = [];
let tail9Positions = [];

let head = { x: 0, y: 0 };
let tail1 = { x: 0, y: 0 };
let tail9 = new Array(9).fill(0).map((_) => ({ x: 0, y: 0 }));

for (let movement of movements) {
  [direction, numberOfMovement] = movement.split(" ");
  numberOfMovement = parseInt(numberOfMovement);
  if (numberOfMovement === 13) {
    const x = 0;
  }
  for (let m = 0; m < numberOfMovement; m++) {
    // Head movement
    switch (direction) {
      case "R":
        head.x = head.x + 1;
        break;
      case "L":
        head.x = head.x - 1;
        break;
      case "U":
        head.y = head.y - 1;
        break;
      case "D":
        head.y = head.y + 1;
        break;
    }

    // Part 1
    // 1 tail movement
    tail1 = moveTail1(tail1, head);
    if (
      !tail1Positions.find(
        (position) => position.x === tail1.x && position.y === tail1.y
      )
    ) {
      tail1Positions.push({ x: tail1.x, y: tail1.y });
    }

    // Part 2
    // 9 tails movement
    for (let t = 0; t < tail9.length; t++) {
      if (t === 0) {
        distance = Math.max(
          Math.abs(tail9[t].x - head.x),
          Math.abs(tail9[t].y - head.y)
        );
        tail9[t] = moveTail9(tail9[t], head, distance);
      } else {
        distance = Math.max(
          Math.abs(tail9[t].x - tail9[t - 1].x),
          Math.abs(tail9[t].y - tail9[t - 1].y)
        );
        tail9[t] = moveTail9(tail9[t], tail9[t - 1], distance);
      }
    }
    const lastTail = tail9[tail9.length - 1];
    if (
      !tail9Positions.find(
        (position) => position.x === lastTail.x && position.y === lastTail.y
      )
    ) {
      tail9Positions.push({ x: lastTail.x, y: lastTail.y });
    }
  }
}

// Part 1
function moveTail1(tail, head) {
  // Horizontal
  if (tail.x + 2 === head.x && tail.y === head.y) {
    tail.x++;
  } else if (tail.x - 2 === head.x && tail.y === head.y) {
    tail.x--;
  } else if (tail.y - 2 === head.y && tail.x === head.x) {
    tail.y--;
  } else if (tail.y + 2 === head.y && tail.x === head.x) {
    tail.y++;
  }
  // Diagonal
  else if (tail.x + 2 === head.x && tail.y - 1 === head.y) {
    tail.x++;
    tail.y--;
  } else if (tail.x + 2 === head.x && tail.y + 1 === head.y) {
    tail.x++;
    tail.y++;
  } else if (tail.x - 2 === head.x && tail.y - 1 === head.y) {
    tail.x--;
    tail.y--;
  } else if (tail.x - 2 === head.x && tail.y + 1 === head.y) {
    tail.x--;
    tail.y++;
  } else if (tail.x + 1 === head.x && tail.y - 2 === head.y) {
    tail.x++;
    tail.y--;
  } else if (tail.x + 1 === head.x && tail.y + 2 === head.y) {
    tail.x++;
    tail.y++;
  } else if (tail.x - 1 === head.x && tail.y - 2 === head.y) {
    tail.x--;
    tail.y--;
  } else if (tail.x - 1 === head.x && tail.y + 2 === head.y) {
    tail.x--;
    tail.y++;
  }
  return tail;
}

// Part 2
function moveTail9(tail, head, distance) {
  if (distance > 1) {
    // 0 => do nothing
    // 1 or 2 => tail.x++;
    // -1 or -2 => tail.x--;
    const directionX = head.x - tail.x;
    tail.x += Math.abs(directionX) === 2 ? directionX / 2 : directionX;
    const directionY = head.y - tail.y;
    tail.y += Math.abs(directionY) === 2 ? directionY / 2 : directionY;
  }
  return tail;
}

// Part 1
alert("One tail: " + tail1Positions.length);

// Part 2
alert("Nine tail: " + tail9Positions.length);
