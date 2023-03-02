import { Injectable } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.mode';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  ingredientAdded = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();

  private ingredients: Ingredient[] = [
    new Ingredient('pasta', 1),
    new Ingredient('uova', 2),
    new Ingredient('olio', 3)
  ];

  constructor() { }

  getIngredients() {
    return this.ingredients.slice();
  };

  getIngredient(index: number){
    return this.ingredients[index];
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    //slice per creare un nuovo array copia
    this.ingredientAdded.next(this.ingredients.slice());
  };

  addIngredients(ingredients: Ingredient[]) {
    /* ingredients.map((ingredient) => this.addIngredient(ingredient)) */
    this.ingredients.push(...ingredients);
    this.ingredientAdded.next(this.ingredients.slice())
  }

  updateIngredient(index: number, newIngredient: Ingredient){
    this.ingredients[index] = newIngredient;
    this.ingredientAdded.next(this.ingredients.slice())
  }

  deleteItem(index: number) {
    this.ingredients.splice(index, 1);
    this.ingredientAdded.next(this.ingredients.slice());
  }

}
