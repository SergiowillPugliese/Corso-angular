import { Ingredient } from "src/app/shared/ingredient.mode";

export class Recipe {
    public name: string;
    public imagePath: string;
    public description: string;
    public ingredients!: Ingredient[];

    constructor(name: string, imagePath: string, description: string, ingredients: Ingredient[]) {
        this.name = name;
        this.imagePath = imagePath;
        this.description = description;
        this.ingredients = ingredients
    }

     /* 
        constructor(
        public name: string | FormRecipe, 
        public description: string | FormRecipe, 
        public imagePath: string | FormRecipe, 
        public ingredients: string | FormRecipe
        ) {
        this.name = name;
        this.description = description;
        this.imagePath = imagePath;
        this.ingredients = ingredients
    }
    */
}