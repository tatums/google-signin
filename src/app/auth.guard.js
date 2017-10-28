import { Injectable } from '@angular/core'
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router'
import { Observable } from 'rxjs/Observable'
import { UserService } from './services/user.service'

@Injectable()

export class AuthGuard {

  constructor(router: Router,
              userService: UserService) {
    this.router = router
    this.userService = userService
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    this.userService.isAuthenticated.subscribe(is => {
      this.is = is
    })

    if (this.is) {
      return true;
    } else {
      this.router.navigateByUrl('login');
      return false;
    }
  }
}
