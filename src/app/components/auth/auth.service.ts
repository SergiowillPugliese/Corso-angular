import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";

interface AuthResponseData {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly SIGNUP_URL = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=';
  private readonly API_KEY = 'pFzgdXkdAXdteHWSQypSlBwF2iU2';

  constructor(private http: HttpClient) { }

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

    signUp(email: string, password: string){
    return this.http.post<AuthResponseData>(
      this.SIGNUP_URL + this.API_KEY,
      {email: email, password: password, returnSecureToken: true}
      );
  }

}

