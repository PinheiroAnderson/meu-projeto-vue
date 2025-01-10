export function isName(value:string|number|undefined) {
  return !!value;
}

export function isEmail(value?:string) {
    if (!value) return false;
    const regexEmail = /^[a-z0-9_.=-]+@[a-zA-Z0-9-]+\.([a-zA-Z0-9-.]{3})+$/g;
    return regexEmail.test(value);

}

export function isPhone(value?: string) {
    if (!value) return false;
    const regexPhone = /^\(\d{2}\) \d{5}-\d{4}$/;
    return regexPhone.test(value);
}


export function isPassword(value?:string) {
    if (!value) return;
    const regexPassword = /^[A-Za-z0-9\d@$!%*?&]{8,}$/g;
    return !regexPassword.test(value);
}


