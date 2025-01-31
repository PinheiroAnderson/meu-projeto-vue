export function isName(value?: string | number): boolean {
    return !!value;
}

export function isEmail(value?: string): boolean {
    if (!value) return false;
    const regexEmail = /^[a-z0-9_.=-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/g;
    return regexEmail.test(value);
}

export function isPhone(value?: string): boolean {
    if (!value) return false;
    const regexPhone = /^\(\d{2}\) \d{5}-\d{4}$/;
    return regexPhone.test(value);
}

export function isPassword(value?: string): boolean {
    if (!value) return false;
    const regexPassword = /^[A-Za-z0-9@$!%*?&]{8,}$/;
    return regexPassword.test(value);
}

export function isConfPasswords(password?: string, confirmPassword?: string): boolean {
    if (!password || !confirmPassword) return false;
    return password === confirmPassword;
}
