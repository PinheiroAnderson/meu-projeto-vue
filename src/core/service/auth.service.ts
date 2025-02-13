import {
    auth,
    postLoginEmail,
    getLogOff as logOffAuth,
    loginGoogle as googleLogin,
} from "@/core/infra/auth.repository";
import { Client } from "../domain/Client";
import router from "@/router";

export const authService = {
    loginEmail,
    loginGoogle,
    logOff,
    getAuthUser,
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

function getAuthUser() {
    const user = auth.currentUser;
    if (!user) return;
    return <Client><unknown>{
      id: user.uid,
      email: user?.email,
      name: user?.displayName,
      photo: user?.photoURL,
    };
}


