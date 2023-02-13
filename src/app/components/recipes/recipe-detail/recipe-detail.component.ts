import { Component, Input } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.mode';
import { Recipe } from '../recipe-list/recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent {
  @Input() recipe!: Recipe;
  test!: Ingredient;

  constructor(private recipeService: RecipeService) {}

  onAddIngredientsToSL() {
    this.recipeService.addIngredientsTSL(this.recipe.ingredients);
  }

}
