import { FormControl } from "@angular/forms";

export interface FormIngredients { 
    name: FormControl<string | null>; 
    amount: FormControl<number | null> 
}
