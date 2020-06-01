import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

import { TokenService } from '../services/token.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(
    private tokenService: TokenService
  ) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    request = this.addToken(request);
    return next.handle(request);
  }

  /**
   * Agrega el token en la cabecera
   */
  private addToken(request: HttpRequest<any>) {
    const token = this.tokenService.getToke();
    if (token) {
      request = request.clone({
        setHeaders: {
          token
        }
      }); // Al clonarle le decimos que variables queremos que cambie
    }

    return request;
  }
}
