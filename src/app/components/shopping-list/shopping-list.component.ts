import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.mode';
import { ShoppingListService } from 'src/app/components/shopping-list/shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  providers: [ShoppingListService]
})
export class ShoppingListComponent implements OnInit {
  addIngredients!: Ingredient;
  ingredients!: Ingredient[];

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit(): void {
      this.ingredients = this.shoppingListService.getIngredients();
      this.shoppingListService.ingredientAdded
      .subscribe(
        (ingredient: Ingredient)=> {
          this.ingredients.push(ingredient)
        }
      )
  }

}
