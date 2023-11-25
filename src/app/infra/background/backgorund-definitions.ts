export interface BackgroundParametros {
    url: string;
    background_name: string;
}

export const BG_LOGIN: BackgroundParametros = {
    url: '/login',
    background_name: 'background_login_register'
};

export const BG_REGISTER: BackgroundParametros = {
    url: '/register',
    background_name: 'background_login_register'
}

export const BG_INDEX: BackgroundParametros = {
    url: '/index',
    background_name: 'background'
}

export const BG_PARA_EMPRESAS: BackgroundParametros = {
    url: '/para-empresas',
    background_name: 'background_para-empresas'
}

export const BG_REGISTRAR_EMPRESAS: BackgroundParametros = {
    url: '/para-empresas/registrar',
    background_name: 'background_para-empresas'
}

export const LIST_BG_PARAMETROS: BackgroundParametros[] = [
    BG_LOGIN,
    BG_REGISTER,
    BG_PARA_EMPRESAS,
    BG_REGISTRAR_EMPRESAS
];