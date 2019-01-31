import {HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {LoginService} from '../login.service';

@Injectable()
export class AuthentificationInterceptor implements HttpInterceptor {
  constructor (private loginService: LoginService) {}
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.loginService.getToken();
    console.log('intercept');
    if (token)  {
      const newReq = req.clone({
        headers: new HttpHeaders().append('Authorization', `Bearer ${token}`)
          .append('as', 'test1')
          .append('as2', 'test2')
      });
    return next.handle(newReq);
    }
    return next.handle(req);
  }
}

export const AuthentificationInterceptorProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: AuthentificationInterceptor,
  multi: true,
};
