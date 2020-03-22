import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, router: RouterStateSnapshot):
  boolean |
  UrlTree |
  Promise<boolean | UrlTree> |
  Observable<boolean | UrlTree> {
      return this.authService.getToken() ? true : this.router.createUrlTree(['/auth']);
  }
}
