import {
    auth,
    postLoginEmail,
    getLogOff as logOffAuth,
    loginGoogle as googleLogin,
    getInfoUser,
} from "@/core/infra/auth.repository";
import { Client } from "../domain/Client";

export const authService = {
    loginEmail,
    loginGoogle,
    logOff,
    userInfo,
};

async function loginEmail(email: string, password: string) {
    return await postLoginEmail(email, password)
        .then(res => {
            const user = res.user;
            return <Client>{
                email: user.email,
                name: user.displayName,
                photo: user.photoURL,
            };
        })
        .catch(() => {
            throw new Error("Email ou senha inválidos!");
        });
}

async function loginGoogle(): Promise<Client> {
    try {
        const { user } = await googleLogin();
        return <Client>{
            email: user.email,
            name: user.displayName || "Usuário Google",
            photo: user.photoURL || "URL padrão da foto",
        };
    } catch (error) {
        throw new Error("Não foi possível realizar o login com o Google!");
    }
}

function logOff() {
    return logOffAuth();
}

function userInfo() {
    return getInfoUser();
}
