import { Meal } from "./Meal.js";

class App {
  constructor() {
    this.meals = [];
    this.btnSaveMeal = document.querySelector(".save-meal");
    this.btnSaveMeal.addEventListener("click", () => this.addMeal());
  }
  addMeal() {
    this.meals.mealName = document.querySelector(".meal-name").value;
    this.meals.ingredients = meal.ingredients;
    console.log(this.meals);
  }
}

const app = new App();
