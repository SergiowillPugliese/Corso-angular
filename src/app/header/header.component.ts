import {Component, OnDestroy, OnInit} from "@angular/core";
import {StorageService} from "../shared/storage.service";
import {AuthService} from "../components/auth/auth.service";
import {Subscription} from "rxjs";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styles: [`
        a {
          cursor: pointer;
        }
    `]
})
export class HeaderComponent implements OnInit, OnDestroy{
  isAuthenticated = false;
  private userSub!: Subscription;

  constructor(private httpRequest: StorageService, private auth: AuthService) {}

  ngOnInit() {
    this.auth.user.subscribe(user => {
      this.isAuthenticated = !user ? false : true;

    });
  }

  onSaveData() {
    this.httpRequest.storeRecipes();
  };

  onFetchData() {
    this.httpRequest.fetchRecipe().subscribe();
  }

  onLogout() {
    this.auth.logouth();
  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }
}
