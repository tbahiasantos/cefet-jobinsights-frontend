import { MenuItem } from "primeng/api";

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
    },
    {
        label: 'Sair',
        icon: 'pi pi-sign-out',
        command(event) {

        },

    },
];
