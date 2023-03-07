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

/*Questa è un'implementazione di un servizio Angular Resolve chiamato RecipesResolveServiceService. Lo scopo di questo
servizio è di risolvere i dati necessari per un componente prima che venga caricato.

Il decoratore @Injectable con l'opzione providedIn: 'root' garantisce che il servizio sia disponibile come singleton in
tutta l'applicazione.

La classe RecipesResolveServiceService implementa l'interfaccia Resolve con il tipo generico Recipe[]. Questo significa
che il servizio restituirà un array di oggetti Recipe.

Il metodo resolve prende due argomenti:

route: un'istanza di ActivatedRouteSnapshot che rappresenta la rotta che sta per essere attivata.
state: un'istanza di RouterStateSnapshot che rappresenta lo stato del router.
Il metodo resolve restituisce un Observable, un Promise o semplicemente i dati richiesti. Questo metodo viene eseguito
in modo asincrono e risolve i dati richiesti prima di caricare il componente.

Il metodo resolve recupera prima le ricette dal servizio RecipeService utilizzando il metodo getRecipes(). Se l'array di
ricette ha una lunghezza di 0, significa che non sono ancora state caricate e il metodo restituisce l'observable
restituito dal metodo fetchRecipe() del servizio StorageService. Questo metodo recupera le ricette dal database e le
memorizza nel servizio RecipeService utilizzando il metodo setRecipes(). Se invece le ricette sono già state caricate,
il metodo resolve restituisce semplicemente l'array di ricette dal servizio RecipeService.

In questo modo, il servizio RecipesResolveServiceService assicura che le ricette richieste siano disponibili prima che
il componente venga caricato, migliorando l'esperienza dell'utente e prevenendo potenziali errori.*/
