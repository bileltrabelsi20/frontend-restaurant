import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent,HttpInterceptor} from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  
  providedIn: 'root'
})
export class TokenInterseptorService implements HttpInterceptor{

  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let token = localStorage.getItem('token')
    if(token==null){
      // if token not exist
      return next.handle(request);
    }
    else {
      // if token exist
      // copier la requette
      let newRequest = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
      // ajout autorisation 
      // sen the new request
      return next.handle(newRequest);
    }
  }
}
