import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AppConfig } from "../app.config";
import { AbstractComponentService } from "../core/crud/service/abstract-component-service.service";
import { Avaliacao, AvaliacaoFilter } from "../model/entity/avaliacoes.model";

@Injectable({
    providedIn: 'root'
})
export class AvaliacaoService extends AbstractComponentService<Avaliacao> {

    constructor(private _http: HttpClient) {
        super(_http, 'avaliacao');
    }
    buscar(filter: AvaliacaoFilter): Observable<Avaliacao[]> {
        const url = this.urlApi + this.path + AppConfig.settings.endpoints.pesquisar;
        return this.http.post<Avaliacao[]>(url, filter);
    }

}