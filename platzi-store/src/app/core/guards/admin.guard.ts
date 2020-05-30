import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Router } from '@angular/router';

import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router
  ) {

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      // Aqui se debe validar el acceso
    return this.authService.hasUser()
      .pipe(
        // Permite generar una intercepcion en un flujo de datos
        // tap(user => console.log(user)),
        map(user => user !== null),
        tap(hasUser => {
          if (!hasUser) {
            this.router.navigate(['/auth/login']);
          }
        })
      );
  }
}
