import { FormControl } from "@angular/forms";
import { AbstractEntity } from "src/app/core/crud/model/abstract-model.model";
import { AbstractFilterDTO } from "../dto/abstract-filter-dto.model";
import { Cargo } from "./cargo.model";

export class Vaga extends AbstractEntity {

    descricao: string = "";
    salario?: number;
    tipoVaga: any;
    idCargo: number = 0;
    idEmpresa: number = 0;
    dataVaga: Date = new Date;
    vagaAtiva: boolean = false;
    cargo: Cargo = new Cargo;
    nomeEmpresa: string = "";
}

export class VagaResponseDTO {
    id: number = 0;
    cargo: string = "";
    nomeEmpresa: string = "";
    salario: number = 0;
    tipoVaga: string = "";
    tipoVagaStr: string = "";
    dataVaga: Date = new Date;
}

export class VagaFilterDTO extends AbstractFilterDTO {
    idEmpresa?: number;
    cargo: string = "";
    empresa: string = "";
    salario?: number;
    notaEmpresa?: number;
    rangeDate?: number;
    tipoVaga?: any;
}