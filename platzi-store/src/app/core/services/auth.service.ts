import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

import {environment} from '../../../environments/environment';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private af: AngularFireAuth,
    private httpClient: HttpClient,
    private tokenService: TokenService
  ) { }

  createUser(email: string, password: string) {
    return this.af.createUserWithEmailAndPassword(email, password);
  }

  login(email: string, password: string) {
    return this.af.signInWithEmailAndPassword(email, password);
  }

  logout() {
    return this.af.signOut();
  }

  hasUser() {
    return this.af.authState;
  }

  loginRestApi(email: string, password: string) {
    return this.httpClient.post(`${environment.url_api}/auth`, {
      email,
      password
    })
    .pipe(
      // tap Nos permite ejecutar una tarea antes de devolverla
      tap((data: {token: string}) => {
        const { token } = data;
        this.tokenService.saveToken(token);
      })
    );
  }
}
