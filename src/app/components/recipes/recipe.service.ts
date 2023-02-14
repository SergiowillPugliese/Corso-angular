import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from 'src/app/shared/ingredient.mode';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe-list/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  recipeSelected = new Subject<Recipe>();

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
      'Zuppa di lacrime (20 Marzo)',
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

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsTSL(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

}
