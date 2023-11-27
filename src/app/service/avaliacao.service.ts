import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AbstractComponentService } from "../core/crud/service/abstract-component-service.service";
import { Avaliacao } from "../model/entity/avaliacoes.model";

@Injectable({
    providedIn: 'root'
})
export class AvaliacaoService extends AbstractComponentService<Avaliacao> {

    constructor(private _http: HttpClient) {
        super(_http, 'avaliacao');
    }

}