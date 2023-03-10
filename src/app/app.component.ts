import {Component, OnInit} from '@angular/core';
import {AuthService} from "./components/auth/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'prj-recipeBook';

  constructor(private authService: AuthService) {
  }

  //in culo a 'mammt
  ngOnInit() {
    this.authService.autoLogin();
  }
}


