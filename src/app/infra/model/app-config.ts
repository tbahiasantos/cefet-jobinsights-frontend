export interface IAppConfig {
    urlApi: string;
    regGridPorPagina: number;
    endpoints: Endpoints;
    encryptKey: string;
}
export interface Endpoints {
    salvar: string;
    editar: string;
    detalhar: string;
    listar: string;
    excluir: string;
    pesquisar: string;
}
