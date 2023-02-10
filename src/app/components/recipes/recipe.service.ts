import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe-list/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('Zuppa di mock', 'Sembra buona. Ho fame!', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwdnmHWH5UaAfu-7TJJr0A_3WIP3tykBJkgw&usqp=CAU'),
    new Recipe('Zuppa di array', 'Sembra buona. Ho fame!', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwdnmHWH5UaAfu-7TJJr0A_3WIP3tykBJkgw&usqp=CAU'),
    new Recipe('Zuppa di lacrime', 'Lacrime, disagio, disperazione, pezzi di cuore spezzati', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwdnmHWH5UaAfu-7TJJr0A_3WIP3tykBJkgw&usqp=CAU')
  ];

  getRecipes(){
    return this.recipes.slice();
  }

  constructor() { }
}
