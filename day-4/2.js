const numberOverlappedAssignment = inputValues
  .split("\n")
  .reduce((countAssignmentPairs, assignmentPair) => {
    const [assignment1, assignment2] = assignmentPair.split(",");
    const [start1, end1, start2, end2] = [
      ...assignment1.split("-"),
      ...assignment2.split("-"),
    ].map((val) => parseInt(val));
    const assignment2Values = Array.from(Array(end2 - start2 + 1)).map(
      (e, i) => i + start2
    );
    for (let i = start1; i <= end1; i++) {
      if (assignment2Values.includes(i)) {
        return ++countAssignmentPairs;
      }
    }
    return countAssignmentPairs;
  }, 0);

alert(`Number of overlapped assignment: ${numberOverlappedAssignment}`);
