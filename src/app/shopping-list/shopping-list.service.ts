import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService {
       
  private ingredients: Ingredient[] = [
    new Ingredient('Apple', 26 ),
    new Ingredient('Pineapple', 36 ),
  ]

  getIngredients() {
    return this.ingredients
  }

  addingredient( ingredient: Ingredient) {
    this.ingredients.push(ingredient)
  }
}