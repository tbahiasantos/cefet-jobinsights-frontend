import { AbstractEntity } from "src/app/core/crud/model/abstract-model.model";

export class Avaliacao extends AbstractEntity {

    idAluno: number = 0;
    idEmpresa: number = 0;
    nota: number = 0;
    titulo: string = "";
    pros: string = "";
    contra: string = "";
    dataAvaliacao: Date = new Date();
}