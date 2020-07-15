import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ArsServicesService } from './ars-services.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private admin: ArsServicesService) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    let expectedRoleArray = next.data.expectedRole;
    let userDetails = JSON.parse(localStorage.getItem('user'));
    let expectedRole = '';
    console.log(userDetails.role);
    for (const index in expectedRoleArray) {
      if (userDetails && expectedRoleArray[index] === userDetails.role) {
        console.log(userDetails);
        expectedRole = expectedRoleArray[index];
        console.log(expectedRole);
      }
    }

    if(this.admin.isLoggedIn && userDetails && expectedRole === userDetails.role) {
      console.log('user athenticated');
      return true;
    } else {
      console.log(expectedRole);
      console.log('user not athenticated');
      return false;
    }
  }

}
