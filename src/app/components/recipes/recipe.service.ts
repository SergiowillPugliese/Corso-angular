import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { Ingredient } from 'src/app/shared/ingredient.mode';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe-list/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

  //recipeAdded = new Subject<any>()

  private recipes: Recipe[] = [
   /* new Recipe(
      'Zuppa disagio',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwdnmHWH5UaAfu-7TJJr0A_3WIP3tykBJkgw&usqp=CAU',
      'Per quelli che davvero sanno! "Università della vita!"',
      [
        new Ingredient('Freddure', 12),
        new Ingredient('Comblotti', 10)
      ]
    ),
    new Recipe(
      'Cattiveria in brodo',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwdnmHWH5UaAfu-7TJJr0A_3WIP3tykBJkgw&usqp=CAU',
      'Da gustare odiando se stessi e gli altri',
      [
        new Ingredient('Derisione', 15),
        new Ingredient('Tuo padre era un maiale! (Piton docet)', 20)
      ]
    ),
    new Recipe(
      'Zuppa di lacrime',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwdnmHWH5UaAfu-7TJJr0A_3WIP3tykBJkgw&usqp=CAU',
      'Al gusto di fallimento e sconfitta',
      [
        new Ingredient('Pezzi di cuore spezzati', 9),
        new Ingredient('Disprezzo per se stessi', 15),

      ]
    )*/
  ];

  constructor(private shoppingListService: ShoppingListService) { }

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsTSL(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
