import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import jwt_decode from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(public router: Router) {

  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const token = localStorage.getItem('token')
    
    if (token == null) {
      this.router.navigateByUrl('/sign-in')
      return false
    }
    else {
      // decode token 
      const decoded: any = jwt_decode(token);
      const isExpiredToken = (Math.floor((new Date).getTime() / 1000)) >= decoded.exp;

      if (isExpiredToken) {
        localStorage.removeItem("token");
        this.router.navigateByUrl('/sign-in');
        return false
      }
      else {
        return true;
      }
    }
  }
}

