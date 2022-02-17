import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenStorageService } from '../_services/token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor(
    private router: Router,
    private token: TokenStorageService
  ){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const user = this.token.getUser();
      if (user) {
          if (route.data.roles && route.data.roles.indexOf(user.role) === -1) {
              this.router.navigate(['/']);
              return false;
          }
          return true;
      }
      this.router.navigate(['/login']);
      return false;
  }
  
}
