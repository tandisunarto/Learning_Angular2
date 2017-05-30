import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe, RecipeService } from 'app/recipes';

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html',
  styles: []
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] ;

  @Output() recipeSelected = new EventEmitter<Recipe>();

  constructor( private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }

  onSelected(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }

}