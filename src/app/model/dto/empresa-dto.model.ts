import { AbstractFilterDTO } from "./abstract-filter-dto.model";

export class EmpresaFilter extends AbstractFilterDTO {
    nome: string = "";
    setor: string = "";
    tamanho: number = 0;
    nota: number = 0;
}

export class EmpresaResponse {
    id: number = 0;
    nome: string = "";
    nota: number = 0;
    avaliacoes: number = 0;
    salarios: number = 0;
    vagas: number = 0;
    setor: number = 0;
    tamanho: number = 0;
    tamanhoStr: string = "";
}