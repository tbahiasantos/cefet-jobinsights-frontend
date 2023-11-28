import { AbstractEntity } from "src/app/core/crud/model/abstract-model.model";
import { AbstractFilterDTO } from "../dto/abstract-filter-dto.model";
import { Cargo } from "./cargo.model";

export class Salario extends AbstractEntity {
    idAluno: number = 0;
    idEmpresa: number = 0;
    value: number = 0;
    idCargo: number = 0;
    cargo: Cargo = new Cargo;
}

export class SalarioFilter extends AbstractFilterDTO {
    cargo: string = "";
    idEmpresa: number = 0;

}

export class SalarioResponse {
    cargo: string = "";
    maior: number = 0;
    menor: number = 0;
    total: number = 0;
}