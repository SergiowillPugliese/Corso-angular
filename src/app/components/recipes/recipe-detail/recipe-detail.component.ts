import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Recipe } from '../recipe-list/recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe!: Recipe;
  id!: number;

  constructor(private recipeService: RecipeService,
    private route: ActivatedRoute,
    private router: Router) {}

  ngOnInit(): void {
      this.route.params.subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.recipe = this.recipeService.getRecipe(this.id)

        }
      )
  }

  //aggiunge gli igredienti della ricetta alla shopping list 
  onAddIngredientsToSL() {
    this.recipeService.addIngredientsTSL(this.recipe.ingredients);
  }

  //in relazione alla rout esistente, naviga alla path /edit
  onEditMode() {
    this.router.navigate(['edit'], {relativeTo: this.route})
  }

}
