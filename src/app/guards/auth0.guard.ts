import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { Auth } from '../services'

@Injectable()
export class Auth0Guard implements CanActivate {
    constructor(private router:Router,
                private auth:Auth) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){

        if(this.auth.authenticated()){
            console.log("AUTH GUARD PASSED");
            return true;
        }
        else{
            console.log("BLOCKED BY AUTH GUARD");
            this.router.navigate(['/']); 
            //this.router.navigate(['/login'], {queryParams:{ returnUrl: state.url }}); 
        }    
    }
}