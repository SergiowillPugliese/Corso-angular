import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {RecipeService} from "../components/recipes/recipe.service";

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(private httpRequest: HttpClient, private recipeService: RecipeService) {}

  storeRecipes() {
    const recipes = this.recipeService.getRecipes();
    this.httpRequest.put(
      'https://ng-recipe-book-458ba-default-rtdb.europe-west1.firebasedatabase.app/recipes.json',
      recipes
    ).subscribe(
      (response) => {
        console.log(response);
      }
    );
  }

}
