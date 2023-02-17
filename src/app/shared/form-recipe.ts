import { FormArray, FormControl, FormGroup } from "@angular/forms";
import { FormIngredients } from "./form-Ingridients";

export interface FormRecipe { 
    name: FormControl<string | null>; 
    imagePath: FormControl<string | null>; 
    description: FormControl<string | null>; 
    ingredient: FormArray<FormGroup<FormIngredients>>;
}