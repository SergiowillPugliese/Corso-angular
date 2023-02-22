import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Recipe} from "./recipe-list/recipe.model";
import {StorageService} from "../../shared/storage.service";
import {RecipeService} from "./recipe.service";

@Injectable({
  providedIn: 'root'
})
export class RecipesResolveServiceService implements Resolve<Recipe[]> {
  constructor(private dataStorage: StorageService, private recipeService: RecipeService) {
  }

  // @ts-ignore
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const recipes = this.recipeService.getRecipes();
    if (recipes.length === 0) {
      return this.dataStorage.fetchRecipe();
    } else {
      return recipes;
    }
  }
}
