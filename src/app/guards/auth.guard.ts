import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import { LocalStorage } from '@ngx-pwa/local-storage';

@Injectable()

export class AuthGuard implements CanActivate {
    constructor( private router: Router, private localStorage: LocalStorage){
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
        if (this.localStorage.getItem('currentUser')){
            return true;
        }

        this.router.navigate(['/user/login'], { queryParams: {returnUrl:state.url}});
        return false;
    }
}