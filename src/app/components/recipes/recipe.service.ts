import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.mode';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe-list/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Zuppa disagio',
      'Sapore di inadeguatezza e imbarazzo',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwdnmHWH5UaAfu-7TJJr0A_3WIP3tykBJkgw&usqp=CAU',
      [
        new Ingredient('Freddure', 12),
        new Ingredient('Non cielo dicono', 10)
      ]
    ),
    new Recipe(
      'Cattiveria in brodo',
      'Da gustare odiando se stessi e gli altri',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwdnmHWH5UaAfu-7TJJr0A_3WIP3tykBJkgw&usqp=CAU',
      [
        new Ingredient('Derisione', 15)
      ]
    ),
    new Recipe(
      'Zuppa di lacrime',
      'Sa di amarezza',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwdnmHWH5UaAfu-7TJJr0A_3WIP3tykBJkgw&usqp=CAU',
      [
        new Ingredient('Pezzi di cuore spezzati', 9)
      ]
    )
  ];

  constructor(private shoppingListService: ShoppingListService) { }

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsTSL(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

}
