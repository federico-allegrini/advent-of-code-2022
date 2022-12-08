const inputValues = document.querySelector("pre").innerText;

const rows = inputValues.split("\n");

let visibleTrees = 0;

// Count external trees
// Horizontal first and last row
visibleTrees += rows[0].length * 2;
// Vertical first and last row, minus the trees of first and last horizontal rows
visibleTrees += (rows.length - 2) * 2;

// For each rows, not first and last
for (let r = 1; r < rows.length - 1; r++) {
  const columns = rows[r].split("");
  // For each column of this row, not first and last
  for (let c = 1; c < columns.length - 1; c++) {
    const eastList = createSingleList("east", rows[r], r, c);
    const westList = createSingleList("west", rows[r], r, c);
    const northList = createSingleList("north", rows, r, c);
    const southList = createSingleList("south", rows, r, c);
    const treeHeight = columns[c];
    if (
      isThisTreeHigher(treeHeight, eastList) ||
      isThisTreeHigher(treeHeight, westList) ||
      isThisTreeHigher(treeHeight, northList) ||
      isThisTreeHigher(treeHeight, southList)
    ) {
      visibleTrees++;
    }
  }
}

alert(visibleTrees);

function createSingleList(
  direction,
  rows,
  currentPositionRow,
  currentPositionColumn
) {
  switch (direction) {
    case "east":
      return rows.slice(currentPositionColumn + 1, rows.length).split("");
    case "west":
      return rows.slice(0, currentPositionColumn).split("");
    case "north":
      const northColumn = [];
      for (let cr = 0; cr < currentPositionRow; cr++) {
        const columns = rows[cr].split("");
        northColumn.push(columns[currentPositionColumn]);
      }
      return northColumn;
    case "south":
      const southColumn = [];
      for (let cr = currentPositionRow + 1; cr < rows.length; cr++) {
        const columns = rows[cr].split("");
        southColumn.push(columns[currentPositionColumn]);
      }
      return southColumn;
  }
}

function isThisTreeHigher(thisTree, listTrees) {
  for (let listTree of listTrees) {
    if (parseInt(listTree) >= parseInt(thisTree)) {
      return false;
    }
  }
  return true;
}
