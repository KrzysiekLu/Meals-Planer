export class Meal {
  constructor() {
    //main ingredients array
    this.ingredients = [];

    // ingredients data inputs
    this.ingredientName = document.querySelector(".ingredient-name_input");
    this.ingredietntAmount = document.querySelector(".ingredient-amount_input");
    this.ingredientUnit = document.querySelector(".ingredient-unit_input");

    // ingredients output view
    this.ingredientOutput = document.querySelector(".create-new-meal_output");

    document
      .querySelector(".add-ingredient")
      .addEventListener("click", () => meal.addIngredient());
  }
  renderingredients() {
    //clearing all output before rendering
    this.ingredientOutput.textContent = "";

    //creating ingredients outputs from main array
    this.ingredients.forEach((ing, i) => {
      let ingredientBox = document.createElement("div");
      ingredientBox.classList.add("create-new-meal_output_ingredient");
      ingredientBox.textContent = `${ing.name}-${ing.amount}-${ing.unit}`;
      this.ingredientOutput.appendChild(ingredientBox);
      this.btnindex = i;

      //Creating delete button for ingredients
      let deleteBtn = document.createElement("button");
      deleteBtn.textContent = `${i}`;
      deleteBtn.dataset.index = this.btnindex;

      ingredientBox.insertAdjacentElement("beforeend", deleteBtn);

      deleteBtn.addEventListener("click", (e) => this.removeIng(e));
    });
  }

  removeIng(e) {
    e.target.parentNode.remove();
    meal.ingredients.splice(e.target.dataset.index, 1);
    console.log(e.target.dataset.index);
    console.log(meal.ingredients);
    this.renderingredients();
  }

  clearInputs() {
    this.ingredientName.value = "";
    this.ingredietntAmount.value = "";
    this.ingredientUnit.value = "";
  }
  addIngredient() {
    this.ingredients.push({
      name: this.ingredientName.value,
      amount: this.ingredietntAmount.value,
      unit: this.ingredientUnit.value,
    });
    this.clearInputs();
    this.renderingredients();
    console.log(this.ingredients);
  }
}
const meal = new Meal();
