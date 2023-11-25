import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AbstractComponentService } from "../core/crud/service/abstract-component-service.service";
import { Setor } from "../model/entity/setor.model";

@Injectable({
    providedIn: 'root'
})
export class SetorService extends AbstractComponentService<Setor> {

    constructor(private _http: HttpClient) {
        super(_http, 'setor');
    }

}