import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AutenticacaoService } from '../autenticacao/autenticacao.service';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuardRouterService implements CanActivate {
    constructor(private auth: AutenticacaoService, private router: Router) { }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {
        if (this.auth.isAuthorized()) {
            return true;
        }

        this.router.navigate(['autenticacao'], { queryParams: { returnUrl: state.url } });
        return false;
    }
}