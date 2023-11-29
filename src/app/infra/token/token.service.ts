import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { StorageService } from '../storage/storage.service';
import { TokenDTO } from './token.model';

@Injectable({
    providedIn: 'root'
})
export class TokenService {

    constructor(private readonly jwtService: JwtHelperService) {

    }

    public isLoggin(): boolean {
        let token = StorageService.getToken();
        if (token) {
            if (this.jwtService.isTokenExpired(token)) {
                StorageService.removeToken();
            }
            return !this.jwtService.isTokenExpired(token);
        }
        return false;
    }

    public getTokenDTO(): TokenDTO {
        let token = StorageService.getToken();
        if (token) {
            return (this.jwtService.decodeToken(token) as TokenDTO);
        }
        return new TokenDTO();
    }

    public getToken(): string {
        let token = StorageService.getToken();
        if (token) {
            return token;
        }
        return "";
    }

    public getUsername(): string {
        return this.getTokenDTO().username;
    }

    public logout() {
        StorageService.removeToken();
        window.location.reload();
    }

}