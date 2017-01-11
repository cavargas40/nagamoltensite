import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AlertService } from '../services';

// @Injectable()
// export class AuthGuard implements CanActivate {
//     constructor(private router:Router,
//                 private alertService:AlertService) { }

//     canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
//         // if (localStorage.getItem('currentUser')) {
//         //     //esta logueado, retorna true
//         //     return true;            
//         // }

//         // //no esta logueado retorna a la pagina de login con la url de retorno
//         // this.alertService.error("Debes estar logueado para ver esta pagina!", true);
//         // this.router.navigate(['/login'], {queryParams:{ returnUrl: state.url }}); 
//     }
// }