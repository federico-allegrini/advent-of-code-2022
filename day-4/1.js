const inputValues = document.querySelector("pre").innerText;

const numberFullyContainAssignment = inputValues
  .split("\n")
  .reduce((countAssignmentPairs, assignmentPair) => {
    const [assignment1, assignment2] = assignmentPair.split(",");
    const [start1, end1, start2, end2] = [
      ...assignment1.split("-"),
      ...assignment2.split("-"),
    ].map((val) => parseInt(val));
    if (
      (start1 <= start2 && end1 >= end2) ||
      (start2 <= start1 && end2 >= end1)
    ) {
      return ++countAssignmentPairs;
    }
    return countAssignmentPairs;
  }, 0);

alert(`Number of fully contain assignment: ${numberFullyContainAssignment}`);
