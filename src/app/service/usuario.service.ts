import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AppConfig } from "../app.config";
import { AbstractComponentService } from "../core/crud/service/abstract-component-service.service";
import { Cargo } from "../model/entity/cargo.model";
import { Curso } from "../model/entity/curso.model";
import { Aluno, Usuario } from "../model/entity/usuario.model";

@Injectable({
    providedIn: 'root'
})
export class UsuarioService extends AbstractComponentService<Usuario> {

    constructor(private _http: HttpClient) {
        super(_http, 'usuario');
    }

    salvarAluno(entity: Aluno): Observable<Aluno> {
        const url = this.urlApi + this.path + AppConfig.settings.endpoints.salvar + "/aluno";
        return this.http.post<Aluno>(url, entity);
    }

}