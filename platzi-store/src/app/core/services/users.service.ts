import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../models/user.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor (
    private httpClient: HttpClient
  ) {}

  getRandomUsers(): Observable<User[]> {
    return this.httpClient.get('https://randomuser.me/api/?results=2')
    .pipe(
      // Haciendo un cast del resultado puro de datos a un array de tipo usuarios
      map((response: any) => response.results as User[])
    );
  }
}
