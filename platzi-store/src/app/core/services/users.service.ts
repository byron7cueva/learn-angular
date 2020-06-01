import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { User } from '../models/user.model';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor (
    private httpClient: HttpClient
  ) {}

  getRandomUsers(): Observable<User[]> {
    // return this.httpClient.get('https://randomuser.me/api/?results=2')
    // Generando error para probaar el catch
    return this.httpClient.get('https://randomuserS.me/api/?results=2')
    .pipe(
      // El catch se lo debe resolver antes del error
      // El error formaria parte del flujo de datos constante
      /* catchError(error => {
        // Desde aca se captura el error y se lo puede manejar a nuestra manera
        return throwError('ups algo paso mal');
      }), */
      catchError(this.handleError),
      // Haciendo un cast del resultado puro de datos a un array de tipo usuarios
      map((response: any) => response.results as User[])
    );
  }

  private handleError(error: HttpErrorResponse) {
    console.error(error);
    return throwError('ups algo paso mal');
  }
}
