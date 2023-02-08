import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
@Output() recipeWasSelected = new EventEmitter<Recipe>()
recipes: Recipe[] = [
  new Recipe('Zuppa di mock', 'Sembra buona. Ho fame!', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwdnmHWH5UaAfu-7TJJr0A_3WIP3tykBJkgw&usqp=CAU'),
  new Recipe('Zuppa di array', 'Sembra buona. Ho fame!', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwdnmHWH5UaAfu-7TJJr0A_3WIP3tykBJkgw&usqp=CAU'),
  new Recipe('Zuppa di lacrime', 'Sembra buona. Ho fame!', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwdnmHWH5UaAfu-7TJJr0A_3WIP3tykBJkgw&usqp=CAU')

];

  constructor(){

  }

  ngOnInit() {
      
  }

  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);
  }

}
