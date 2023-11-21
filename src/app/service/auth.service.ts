import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AppConfig } from "../app.config";
import { LoginDTO } from "../model/dto/login.model";

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    private readonly urlApi: string;

    constructor(private http: HttpClient) {
        this.urlApi = AppConfig.settings.urlApi;
    }

    logar(loginDTO: LoginDTO): Observable<any> {
        const url = this.urlApi + "auth/logar";
        return this.http.post<any>(url, loginDTO);
    }

}