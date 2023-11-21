import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AbstractComponentService } from "../core/crud/service/abstract-component-service.service";
import { Cargo } from "../model/entity/cargo.model";
import { Curso } from "../model/entity/curso.model";

@Injectable({
    providedIn: 'root'
})
export class CursoService extends AbstractComponentService<Curso> {

    constructor(private _http: HttpClient) {
        super(_http, 'curso');
    }

}