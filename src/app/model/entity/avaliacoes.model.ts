import { AbstractEntity, AbstractFilter } from "src/app/core/crud/model/abstract-model.model";
import { AbstractFilterDTO } from "../dto/abstract-filter-dto.model";

export class Avaliacao extends AbstractEntity {

    idAluno: number = 0;
    idEmpresa: number = 0;
    nota: number = 0;
    titulo: string = "";
    pros: string = "";
    contra: string = "";
    dataAvaliacao: Date = new Date();
    cargoAluno: string = "";
}

export class AvaliacaoFilter extends AbstractFilterDTO {
    nota: number = 0;
    cargo: string = "";
    dataAvaliacao: Date = new Date;
    idEmpresa: number = 0;
}