import { Inject, Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpEvent,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_URL } from '../tokens';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {
  constructor(@Inject(API_URL) private apiUrl: string) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    console.log(req);

    req = req.clone({
      url: this.buildUrl(req.url),
    });

    return next.handle(req);
  }

  private buildUrl(url: string) {
    return `${this.apiUrl}${url}`;
  }
}
