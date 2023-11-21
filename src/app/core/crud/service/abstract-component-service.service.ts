import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AppConfig } from "src/app/app.config";
import { AbstractEntity } from "../model/abstract-model.model";

@Injectable({
    providedIn: 'root'
})
export abstract class AbstractComponentService<Entity extends AbstractEntity> {

    readonly http: HttpClient;
    readonly path: string
    readonly urlApi: string;

    constructor(http: HttpClient, path: string) {
        this.http = http;
        this.path = path;
        this.urlApi = AppConfig.settings.urlApi;
    }

    listarTodos(): Observable<Entity[]> {
        const url = this.urlApi + this.path + AppConfig.settings.endpoints.listar;
        return this.http.get<Entity[]>(url);
    }

    salvar(entity: Entity): Observable<Entity> {
        const url = this.urlApi + this.path + AppConfig.settings.endpoints.salvar;
        return this.http.post<Entity>(url, entity);
    }




}