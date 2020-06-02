import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { Observable } from 'rxjs';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PreloadService implements PreloadingStrategy {

  constructor() { }

  preload(route: Route, load: () => Observable<any>): Observable<any> {
    // Ya que el objeto data no esta tipado se accede al valor como array
    if (route.data && route.data['preload']) {
      return load();
    } else {
      // Retornando un obsarvable vacio
      return of();
    }
  }
}
