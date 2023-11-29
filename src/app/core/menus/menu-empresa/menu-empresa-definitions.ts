import { MenuItem } from "primeng/api";
import { StorageService } from "src/app/infra/storage/storage.service";

export const ITEMS_MENU_EMPRESA: MenuItem[] = [
    {
        label: 'Perfil',
        routerLink: '/gerenciar-empresa/perfil'
    },
    {
        label: 'Avaliações',
        routerLink: '/gerenciar-empresa/avaliacoes'
    },
    {
        label: 'Vagas',
        routerLink: '/gerenciar-empresa/vagas'
    }
];
