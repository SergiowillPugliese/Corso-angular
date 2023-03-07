import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree} from "@angular/router";
import {map, Observable, take} from "rxjs";
import {AuthService} from "./auth.service";

interface canActivate {
}

//Il decoratore @Injectable con l'opzione providedIn: 'root' assicura che questo servizio sia disponibile come singleton in tutta l'applicazione.
@Injectable({providedIn: "root"})
// La classe AuthGuard implementa l'interfaccia canActivate che viene utilizzata dal Router di Angular per determinare se un utente è autorizzato
//   ad accedere a una particolare rotta.
export class AuthGuard implements canActivate {
  //Lo scopo di questo servizio è verificare se un utente è autenticato prima di consentire l'accesso a determinate rotte della tua applicazione.

  constructor(private authService: AuthService, private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, router: RouterStateSnapshot): boolean | Promise<boolean | UrlTree> | Observable<boolean | UrlTree> | UrlTree {
    return this.authService.user.pipe(take(1), map(user => {
      const isAuth = !!user;
      if (isAuth) {
        return true;
      }
      return this.router.createUrlTree(['/auth']);
    }));
  }

  /*
    Il metodo canActivate prende due argomenti:
    route: un'istanza di ActivatedRouteSnapshot che rappresenta la rotta che viene attivata.
    router: un'istanza di RouterStateSnapshot che rappresenta lo stato del router.
    Il metodo canActivate restituisce un booleano, una promise che si risolve in un booleano o in un UrlTree, o un Observable che emette un
    booleano o un UrlTree. Questo tipo di ritorno consente di eseguire controlli asincroni prima di determinare se l'utente è autorizzato.
    Il metodo canActivate recupera prima l'utente dal AuthService utilizzando l'observable user. L'operatore take(1) assicura che venga preso
    solo il primo valore emesso e quindi ci si disiscrive dall'observable.
    Successivamente, l'operatore map trasforma l'oggetto user emesso in un valore booleano che indica se l'utente è autenticato o meno.
    Se l'utente è autenticato (isAuth è vero), il metodo canActivate restituisce true consentendo l'accesso alla rotta.
    Se l'utente non è autenticato, il metodo canActivate restituisce un UrlTree creato utilizzando il metodo router.createUrlTree.
    Questo UrlTree indirizza l'utente alla rotta /auth, dove può effettuare il login o la registrazione.
  */

}
