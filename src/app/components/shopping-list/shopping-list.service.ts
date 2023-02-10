import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.mode';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  
  ingredientAdded = new EventEmitter<Ingredient>()

  private ingredients: Ingredient[] = [
    new Ingredient('pasta', 1),
    new Ingredient('uova', 2),
    new Ingredient('olio', 3)
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  constructor() { }


}
