import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpResponse
} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError, delay, map} from 'rxjs/operators';
import {NgxSpinnerService} from 'ngx-spinner';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {

  constructor(
    readonly spinner: NgxSpinnerService
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.spinner.show();
    return next.handle(request).pipe(
      delay(1500),
      map(evento => {
        if (evento instanceof HttpResponse){
          this.spinner.hide();
        }
        return evento;
      }),
      catchError(error => {
        this.spinner.hide();
        return of(error);
      })
    );
  }
}
