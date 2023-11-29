import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AppConfig } from "../app.config";
import { AbstractComponentService } from "../core/crud/service/abstract-component-service.service";
import { Vaga, VagaFilterDTO, VagaResponseDTO } from "../model/entity/vaga.model";

@Injectable({
    providedIn: 'root'
})
export class vagaService extends AbstractComponentService<Vaga> {

    constructor(private _http: HttpClient) {
        super(_http, 'vaga');
    }

    buscar(filter: VagaFilterDTO): Observable<VagaResponseDTO[]> {
        const url = this.urlApi + this.path + AppConfig.settings.endpoints.pesquisar;
        return this.http.post<VagaResponseDTO[]>(url, filter);
    }

}