import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {BehaviorSubject, catchError, Subject, tap, throwError} from "rxjs";
import {User} from "./user.model";
import {Router} from "@angular/router";

export interface AuthResponseData {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;

}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  //test per provare i branch
  user = new BehaviorSubject<User | null>(null);
  private tokenExpirationtimer: any;


  private readonly SIGNUP_URL = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=';
  private readonly LOGIN_URL = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key='
  private readonly API_KEY = 'AIzaSyDFTsiN2bKRUm12ZvmPvPyGLg4M0WJjaPQ';

  constructor(private http: HttpClient, private router: Router) {
  }

  signUp(email: string, password: string) {
    return this.http.post<AuthResponseData>(this.SIGNUP_URL + this.API_KEY, {
      email: email,
      password: password,
      returnSecureToken: true
    }).pipe(catchError(this.handlerError), tap(resData => {
      this.handleAuth(resData.email, resData.localId, resData.idToken, +resData.idToken)
    }));
  }

  logouth() {
    this.user.next(null);
    this.router.navigate(['./auth']);
    localStorage.removeItem('userData');
    if (this.tokenExpirationtimer) {
      clearTimeout(this.tokenExpirationtimer);
    }
    this.tokenExpirationtimer = null;
  }

  autoLogout(expirationDuration: number) {
    console.log(expirationDuration)
    this.tokenExpirationtimer = setTimeout(() => {
      this.logouth();
    }, expirationDuration);
  }

  autoLogin() {
    const userData: any | {
      email: string,
      id: string,
      _token: string,
      _tokenExpirationDate: Date
    } = localStorage.getItem('userData');
    if (!userData) {
      return;
    }

    const loaderUser = new User(userData.email, userData.id, userData._token, new Date(userData._tokenExpirationDate));

    if (loaderUser.token) {
      this.user.next(loaderUser);
      const expirationDuration = new Date(userData._tokenExpirationDate).getTime() - new Date().getTime()
      this.autoLogout(expirationDuration)
    }
  }

  login(email: string, password: string) {
    return this.http.post<AuthResponseData>(this.LOGIN_URL + this.API_KEY, {
      email: email,
      password: password,
      returnSecureToken: true
    }).pipe(catchError(this.handlerError), tap(resData => {
      this.handleAuth(resData.email, resData.localId, resData.idToken, +resData.expiresIn)
    }));
  }

  private handleAuth(email: string, userId: string, token: string, expiresIn: number) {
    const expDade = new Date(new Date().getTime() + expiresIn * 1000)
    const user = new User(email, userId, token, expDade);
    this.user.next(user);
    this.autoLogout(expiresIn * 1000);
    localStorage.setItem('userData', JSON.stringify(user))
  }

  private handlerError(errorRes: HttpErrorResponse) {
    let errorMessage = 'An unknbown error occurred!';
    if (!errorRes.error || !errorRes.error.error) {
      return throwError(errorMessage);
    }
    switch (errorRes.error.error.message) {
      case 'EMAIL_EXISTS':
        errorMessage = 'The email address is already in use by another account.';
        break;
      case 'EMAIL_NOT_FOUND':
        errorMessage = 'There is no user record corresponding to this identifier. The user may have been deleted.';
        break;
      case 'INVALID_PASSWORD' :
        errorMessage = 'The password is invalid or the user does not have a password.';
        break;
    }
    return throwError(errorMessage);
  }
}

