import { Injectable } from '@angular/core';
import {HTTP_INTERCEPTORS, HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable, of, throwError} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';
import {Router} from '@angular/router';


@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private router: Router) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req)
      .pipe(
          catchError(err => {
            console.log(err);
            return new Observable<HttpEvent<any>>((observer) => {
                observer.error(err);
            });
          })
        ,
        //   tap(
        //     (incoming: any) => {
        //     console.log('here its ok');
        //     },
        //     (error: HttpErrorResponse) => {
        //       return throwError(error);
        //     }
        // )
      );
  }
}

export const ErrorInterceptorProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: ErrorInterceptor,
  multi: true,
};
