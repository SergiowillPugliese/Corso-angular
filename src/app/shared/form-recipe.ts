import { FormArray, FormControl, FormGroup } from "@angular/forms";
import { FormIngredients } from "./form-Ingridients";

export interface FormRecipe { 
    name:string | FormControl<string | null>; 
    imagePath:string | FormControl<string | null>; 
    description:string | FormControl<string | null>; 
    ingredients:string | FormArray<FormGroup<FormIngredients>>;
}