import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>()
  recipes: Recipe[] = [
    new Recipe('Test Recipy', 'example of description of a recipy', 'https://img.delicious.com.au/fVd1u6k7/w1200/del/2022/02/chicken-chickpea-curry-163942-1.jpg' ),
    new Recipe('Test Recipy 2', 'example of description of a recipy 2', 'https://cdn.pixabay.com/photo/2014/10/19/20/59/hamburger-494706_1280.jpg' )
  ]

  constructor() { }

  ngOnInit(): void {
  } 
  onRecipeSelected( recipe: Recipe) {
    this.recipeWasSelected.emit(recipe)
  }

}
