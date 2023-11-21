import { Router } from "@angular/router";

export interface MenuUsuario {
    itens: ItemMenuUsuario[];
};

export interface ItemMenuUsuario {
    icon?: string;
    isNavegate: boolean;
    label: string;
    showIcon: boolean;
    onClick?: (object?: any) => void;
    navegate?: (router: Router) => void;
};

export const teste = () => {

}

export const ITEM_LOGIN: ItemMenuUsuario = {
    icon: 'pi pi-sign-in',
    isNavegate: true,
    label: 'Logar',
    showIcon: true,
    navegate: (router: Router) => {
        router.navigateByUrl("/login");
    }
};

export const ITEM_REGISTRAR: ItemMenuUsuario = {
    icon: 'pi pi-user-plus',
    isNavegate: true,
    label: 'Criar conta',
    showIcon: true,
    navegate: (router: Router) => {
        router.navigateByUrl("/register");
    }
};

export const ITEM_LOGOUT: ItemMenuUsuario = {
    icon: 'pi pi-sign-out',
    isNavegate: false,
    label: 'Sair',
    showIcon: true
};

export const MENU_USUARIO_LOGADO: MenuUsuario = {
    itens: [
        ITEM_LOGOUT
    ]
};

export const MENU_USUARIO_DESLOGADO: MenuUsuario = {
    itens: [
        ITEM_LOGIN, ITEM_REGISTRAR
    ]
};