const inputValues = document.querySelector("pre").innerText;
let letters = inputValues.split("");
let length = 4;
let result = findFirstStartOfPacketMarker(length);

alert(
  `Characters before first start-of-packet marker with ${length} character lenght: ${result}`
);

function findFirstStartOfPacketMarker(length) {
  return letters.reduce((counterResult, letter, i, arr) => {
    for (let l1 = counterResult - length; l1 < counterResult; l1++) {
      for (let l2 = counterResult - length; l2 < counterResult; l2++) {
        if (l1 !== l2) {
          if (letters[l1] === letters[l2]) {
            return ++counterResult;
          }
        }
      }
    }
    arr.splice(1);
    return counterResult;
  }, length);
}
