import { Component } from "@angular/core";
import {StorageService} from "../shared/storage.service";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {

  constructor(private httpRequest: StorageService) {}

  onSaveData() {
    this.httpRequest.storeRecipes();
  };
}
