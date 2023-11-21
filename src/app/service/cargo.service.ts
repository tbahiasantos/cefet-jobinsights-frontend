import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AbstractComponentService } from "../core/crud/service/abstract-component-service.service";
import { Cargo } from "../model/entity/cargo.model";

@Injectable({
    providedIn: 'root'
})
export class CargoService extends AbstractComponentService<Cargo> {

    constructor(private _http: HttpClient) {
        super(_http, 'cargo');
    }

}