import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.mode';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  
  ingredientAdded = new EventEmitter<Ingredient[]>()

  private ingredients: Ingredient[] = [
    new Ingredient('pasta', 1),
    new Ingredient('uova', 2),
    new Ingredient('olio', 3)
  ];

  constructor() { }

  getIngredients() {
    return this.ingredients.slice();
  };

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    //slice per creare un nuovo array copia
    this.ingredientAdded.emit(this.ingredients.slice());
  };

  addIngredients(ingredients: Ingredient[]) {
    /* ingredients.map((ingredient) => this.addIngredient(ingredient)) */
    this.ingredients.push(...ingredients);
    this.ingredientAdded.emit(this.ingredients.slice())
  }

}
