import { Setor } from "./setor.model";
import { Usuario } from "./usuario.model";

export class Empresa extends Usuario {

    idSetor: number = 0;
    setor: Setor = new Setor();
    tamanho: number = 0;
    descricao: string = "";

}