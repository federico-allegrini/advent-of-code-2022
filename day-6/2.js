letters = inputValues.split("");
length = 14;
result = findFirstStartOfPacketMarker(length);

alert(
  `Characters before first start-of-packet marker with ${length} character lenght: ${result}`
);
