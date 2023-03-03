import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, throwError} from "rxjs";

interface AuthResponseData {
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
  private readonly SIGNUP_URL = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=';
  private readonly LOGIN_URL = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithCustomToken?key='
  private readonly API_KEY = 'AIzaSyDFTsiN2bKRUm12ZvmPvPyGLg4M0WJjaPQ';

  constructor(private http: HttpClient) {
  }

  /*  signUp(email: string, password: string): Observable<AuthResponseData> {
      const body = {email, password, returnSecureToken: true};
      return this.http.post<AuthResponseData>(this.SIGNUP_URL + this.API_KEY, body)
        .pipe(
          map(response => {
            const {idToken, email, refreshToken, expiresIn, localId} = response;
            return {idToken, email, refreshToken, expiresIn, localId};
          })
        );
    }*/

  signUp(email: string, password: string) {
    return this.http.post<AuthResponseData>(
      this.SIGNUP_URL + this.API_KEY,
      {email: email, password: password, returnSecureToken: true}
    ).pipe(catchError(errorRes => {
      let errorMessage = 'An unknbown error occurred!';
      if (!errorRes.error || !errorRes.error.error) {
        return throwError(errorMessage);
      }
      switch (errorRes.error.error.message) {
        case 'EMAIL_EXISTS':
          errorMessage = 'The email address is already in use by another account.'
      }
      return throwError(errorMessage);
    })
    );
  }

  //carmelino ciccino
  login(email: string, password: string) {
    return this.http.post<AuthResponseData>(
      this.LOGIN_URL + this.API_KEY,
      {email: email, password: password, returnSecureToken:true}
    ).pipe(catchError(errorRes => {
      let errorMessage = 'An unknbown error occurred!';
      if (!errorRes.error || !errorRes.error.error) {
        return throwError(errorMessage);
      }
      return throwError(errorMessage);
    }))
  }
}

