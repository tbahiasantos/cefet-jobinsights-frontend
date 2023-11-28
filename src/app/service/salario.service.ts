import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AppConfig } from "../app.config";
import { AbstractComponentService } from "../core/crud/service/abstract-component-service.service";
import { Salario, SalarioFilter, SalarioResponse } from "../model/entity/salario.model";

@Injectable({
    providedIn: 'root'
})
export class SalarioService extends AbstractComponentService<Salario> {

    constructor(private _http: HttpClient) {
        super(_http, 'salario');
    }
    buscar(filter: SalarioFilter): Observable<SalarioResponse[]> {
        const url = this.urlApi + this.path + AppConfig.settings.endpoints.pesquisar;
        return this.http.post<SalarioResponse[]>(url, filter);
    }

}