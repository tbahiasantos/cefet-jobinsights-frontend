export interface SenhaValidator {
    label: string;
    valid: (senha: string) => boolean;
    validar: (senha: string) => string;
}

export const VALIDAR_UPPER: SenhaValidator = {
    label: 'Pelo menos uma letra maiúscula',
    validar: (senha: string) => {
        if (senha.match(/[A-Z]/)) {
            return "green";
        } else {
            return "red";
        }
    },
    valid: (senha: string) => {
        return VALIDAR_UPPER.validar(senha) === "green";
    }
}

export const VALIDAR_LOWER: SenhaValidator = {
    label: 'Pelo menos uma letra minúscula',
    validar: (senha: string) => {
        if (senha.match(/[a-z]/)) {
            return "green";
        } else {
            return "red";
        }
    },
    valid: (senha: string) => {
        return VALIDAR_LOWER.validar(senha) === "green";
    }
}

export const VALIDAR_NUMERO: SenhaValidator = {
    label: 'Pelo menos um número',
    validar: (senha: string) => {
        if (senha.match(/\d/)) {
            return "green";
        } else {
            return "red";
        }
    },
    valid: (senha: string) => {
        return VALIDAR_NUMERO.validar(senha) === "green";
    }
}

export const VALIDAR_ESPECIAL: SenhaValidator = {
    label: 'Pelo menos um caracter especial',
    validar: (senha: string) => {
        if (senha.match(/[!@#$%^&*(),.?":{}|<>]/)) {
            return "green";
        } else {
            return "red";
        }
    },
    valid: (senha: string) => {
        return VALIDAR_ESPECIAL.validar(senha) === "green";
    }
}

export const VALIDAR_TAMANHO: SenhaValidator = {
    label: 'Minimo de 8 caracteres',
    validar: (senha: string) => {
        if (senha.length >= 8) {
            return "green";
        } else {
            return "red";
        }
    },
    valid: (senha: string) => {
        return VALIDAR_TAMANHO.validar(senha) === "green";
    }
}
