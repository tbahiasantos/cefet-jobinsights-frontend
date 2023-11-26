import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AbstractComponentService } from "../core/crud/service/abstract-component-service.service";
import { EmpresaFilter, EmpresaResponse } from "../model/dto/empresa-dto.model";
import { Observable } from "rxjs";
import { Empresa } from "../model/entity/empresa.model";
import { AppConfig } from "../app.config";

@Injectable({
    providedIn: 'root'
})
export class EmpresaService extends AbstractComponentService<Empresa> {

    constructor(private _http: HttpClient) {
        super(_http, 'empresa');
    }

    pesquiar(filter: EmpresaFilter): Observable<EmpresaResponse[]> {
        const url = this.urlApi + this.path + AppConfig.settings.endpoints.pesquisar;
        return this.http.post<EmpresaResponse[]>(url, filter);
    }

}