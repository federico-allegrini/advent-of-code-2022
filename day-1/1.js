const inputValues = document.querySelector("pre").innerText;

const maxCalories = inputValues
  .split("\n\n")
  .reduce((maxCalories, calorieValues) => {
    const calorieSum = calorieValues
      .split("\n")
      .reduce((sum, calorie) => sum + parseInt(calorie), 0);
    return calorieSum > maxCalories ? calorieSum : maxCalories;
  }, 0);

alert(`Max calories: ${maxCalories}`);
