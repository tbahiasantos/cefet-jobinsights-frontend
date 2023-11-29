import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenService } from '../token/token.service';

@Injectable({
    providedIn: 'root'
})
export class AlunoGuard {
    constructor(private router: Router, private tokenService: TokenService) { }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        if (this.tokenService.isLoggin() && this.tokenService.getTokenDTO().role === "ALUNO_ROLE") {
            return true;
        } else {
            this.router.navigate(['/login']);
            return false;
        }
    }
}