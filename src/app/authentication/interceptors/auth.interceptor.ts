import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpParams
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthentificationService } from '../services/authentification.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthentificationService) {
    console.log('IN HTTP INTERCEPTOR');

  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // Si on est authentifié
    if (this.authService.isAuthenticated() && request.method != 'GET'){
      // ajouter le token à Requete
      const params = new HttpParams().set(
        'access_token',
        localStorage.getItem('token') ?? ''
      );
      const newReq = request.clone({ params });
      return next.handle(newReq);
    }
    //sinon
    return next.handle(request);
  }
}