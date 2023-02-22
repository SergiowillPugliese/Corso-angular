import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {RecipeService} from "../components/recipes/recipe.service";
import {Recipe} from "../components/recipes/recipe-list/recipe.model";
import {ShoppingListService} from "../components/shopping-list/shopping-list.service";
import {map, tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(
    private httpRequest: HttpClient,
    private recipeService: RecipeService,
    private shoppingListService: ShoppingListService
  ) {
  }

  storeRecipes() {
    const recipes = this.recipeService.getRecipes();
    return this.httpRequest.put(
      'https://ng-recipe-book-458ba-default-rtdb.europe-west1.firebasedatabase.app/recipes.json',
      recipes
    ).subscribe(
      (response) => {
        console.log(response);
      }
    );
  }

  fetchRecipe() {
    return this.httpRequest.get<Recipe[]>('https://ng-recipe-book-458ba-default-rtdb.europe-west1.firebasedatabase.app/recipes.json')
      .pipe(map(recipe => {
          return recipe.map(recipe => {
            return {...recipe, ingredients: recipe.ingredients ? recipe.ingredients : []};
          })
        }),
        tap(recipes => {
          this.recipeService.setRecipes(recipes);
        })
      )
  }
}
