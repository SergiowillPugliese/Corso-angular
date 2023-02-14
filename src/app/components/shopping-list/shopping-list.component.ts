import { Component, OnDestroy, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.mode';
import { ShoppingListService } from 'src/app/components/shopping-list/shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {

  ingredients!: Ingredient[];
  private changeSub!: Subscription;

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit(): void {
      this.ingredients = this.shoppingListService.getIngredients();
      this.changeSub = this.shoppingListService.ingredientAdded
      .subscribe(
        (ingredient: Ingredient[])=> {
          this.ingredients = ingredient;
        }
      )
  }

  ngOnDestroy(): void {
      this.changeSub.unsubscribe();
  }

}
