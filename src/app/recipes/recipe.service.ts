import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { Recipe } from "./recipe.model";

export class RecipeService {

   recipeSelected = new EventEmitter<Recipe>();
   private recipes: Recipe[] = [
        new Recipe(
            'Test Recipy', 
            'example of description of a recipy', 
            'https://img.delicious.com.au/fVd1u6k7/w1200/del/2022/02/chicken-chickpea-curry-163942-1.jpg',
            [
                new Ingredient('Chicken', 10),
                new Ingredient('Tomato', 3),
            ]
             ),
        new Recipe(
            'Test Recipy 2',
            'example of description of a recipy 2', 'https://cdn.pixabay.com/photo/2014/10/19/20/59/hamburger-494706_1280.jpg',
            [
                new Ingredient('Salad', 2),
                new Ingredient('Cheddar', 4),
            ]
            )
      ]

    getRecipes() {
        return this.recipes.slice();
    }
}