import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AppConfig } from "../app.config";
import { LoginDTO } from "../model/dto/login.model";
import { Usuario } from "../model/entity/usuario.model";

@Injectable({
    providedIn: 'root'
})
export class ConfirmationService {

    private readonly urlApi: string;

    constructor(private http: HttpClient) {
        this.urlApi = AppConfig.settings.urlApi;
    }

    logar(loginEncode: string): Observable<Usuario> {
        const url = this.urlApi + "confirmation/confirmar";
        return this.http.get<Usuario>(`${url}/${loginEncode}`);
    }

}