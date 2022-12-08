let maxScenicScore = 0;

// For each rows
for (let r = 0; r < rows.length; r++) {
  const columns = rows[r].split("");
  // For each column of this row
  for (let c = 0; c < columns.length; c++) {
    const eastList = createSingleList("east", rows[r], r, c);
    const westList = createSingleList("west", rows[r], r, c).reverse();
    const northList = createSingleList("north", rows, r, c).reverse();
    const southList = createSingleList("south", rows, r, c);
    const treeHeight = columns[c];
    const scenicScore =
      calculateTreeScore(treeHeight, eastList) *
      calculateTreeScore(treeHeight, westList) *
      calculateTreeScore(treeHeight, northList) *
      calculateTreeScore(treeHeight, southList);
    if (scenicScore > maxScenicScore) {
      maxScenicScore = scenicScore;
    }
  }
}

alert(maxScenicScore);

function calculateTreeScore(thisTree, listTrees) {
  let score = 0;
  for (let listTree of listTrees) {
    score++;
    if (parseInt(listTree) >= parseInt(thisTree)) {
      break;
    }
  }
  return score;
}
