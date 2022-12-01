const sumFirstThreeMaxCalories = inputValues
  .split("\n\n")
  .map((calorieValues) =>
    calorieValues
      .split("\n")
      .reduce((sum, calorie) => sum + parseInt(calorie), 0)
  )
  .sort((v1, v2) => v2 - v1)
  .slice(0, 3)
  .reduce((sum, maxCalorie) => sum + parseInt(maxCalorie));

alert(`Sum of the first three max calorie values: ${sumFirstThreeMaxCalories}`);
