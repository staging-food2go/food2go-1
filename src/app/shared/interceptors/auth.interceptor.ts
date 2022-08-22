import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  token: string | null = '';

  constructor(
    private router: Router,
  ) {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.token = localStorage.getItem('token');

    if (this.token) {
      
      const newRequest = request.clone({
        setHeaders: {
          Authorization: "Bearer " + this.token
        }
      })

      return next.handle(newRequest);
    }

    return next.handle(request);
  }
}