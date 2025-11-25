// Funções simples de máscara (formatação) — adaptáveis conforme necessidade


export function onlyNumbers(value = '') {
    return value.replace(/\D+/g, '');
}


export function maskCPF(value = '') {
    const v = onlyNumbers(value).slice(0, 11);
    return v
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d{1,2})$/, '$1-$2');
}


export function maskTelefone(value = '') {
    const v = onlyNumbers(value).slice(0, 11);
    if (v.length <= 10) {
        return v.replace(/(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3').replace(/-$/, '');
    }
    return v.replace(/(\d{2})(\d{5})(\d{0,4})/, '($1) $2-$3').replace(/-$/, '');
}


export function maskCEP(value = '') {
    const v = onlyNumbers(value).slice(0, 8);
    return v.replace(/(\d{5})(\d{0,3})/, '$1-$2').replace(/-$/, '');
}


export function applyMask(value = '', type = '') {
    if (!type) return value;
    const t = type.toLowerCase();
    switch (t) {
        case 'cpf':
            return maskCPF(value);
        case 'telefone':
        case 'phone':
            return maskTelefone(value);
        case 'cep':
            return maskCEP(value);
        default:
            return value;
    }
}