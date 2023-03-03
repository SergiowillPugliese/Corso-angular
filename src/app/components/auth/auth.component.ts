import {Component} from "@angular/core";
import {NgForm} from "@angular/forms";
import {AuthService} from "./auth.service";

@Component({
  selector: 'app-auth', templateUrl: 'auth.component.html'
})
export class AuthComponent {
  isLoginMode = true;
  isLoading = false;
  error: string | null = null;


  constructor(private auth: AuthService) {
  }

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  //metodo per il submit
  onSubmit(form: NgForm) {
    //se il form non è valido si ferma
    if (!form.valid) {
      return;
    }
    //variabili contenenti dati del form inseriti da utente
    const email = form.value.email;
    const password = form.value.password;

    //settata a true per far comparire l'animazione del caricamento
    this.isLoading = true;

    //controlla se in login mode o in sign up mode
    if (this.isLoginMode) {
      this.auth.login(email, password)
        .subscribe(resData => {
            //setta la variabile a false per togliere l'animazione del caricamento
            this.isLoading = false;
          }, //gestione degli errori
          errorMessage => {
            //valorizza this.error con il messaggio inviato dal service
            this.error = errorMessage;
            //come sopra
            this.isLoading = false;
        })
    } else {
      //chiama il metodo nel service auth che aggiunge un nuovo utente a firebase e fa la subscribe
      this.auth.signUp(email, password)
        .subscribe(resData => {
          //setta la variabile a false per togliere l'animazione del caricamento
          this.isLoading = false;
        }, //gestione degli errori
            errorMessage => {
          //valorizza this.error con il messaggio inviato dal service
          this.error = errorMessage;
          //come sopra
          this.isLoading = false;
        });
      //resetta il campo del form
      form.reset();
    }
  }
}
