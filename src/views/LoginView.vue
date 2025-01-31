<template>
    <section class="form-acess">
        <div class="container">
            <div class="row justify-content-center align-items-center">
                <ErrorMessage :message="formError" />
                <form
                    id="login-form"
                    class="col-md-4 bg-dark text-white p-4 rounded shadow"
                    @submit.prevent="sendLoginEmail"
                >
                    <h2 class="text-center mb-4">Login</h2>

                    <InputValue
                        v-model="email"
                        message="E-mail inválido"
                        label="E-mail"
                        type="email"
                        placeholder="email@example.com"
                        :error="emailError"
                        required
                        autofocus
                    />

                    <InputValue
                        v-model="senha"
                        message="Senha inválida"
                        label="Senha"
                        type="password"
                        placeholder="Password"
                        :error="senhaError"
                        required
                    />

                    <div class="form-check form-switch mb-3">
                        <input
                            class="form-check-input"
                            type="checkbox"
                            role="switch"
                            id="flexSwitchCheckDefault"
                            v-model="rememberMe"
                        />
                        <label
                            class="form-check-label"
                            for="flexSwitchCheckDefault"
                        >
                            Lembrar-me
                        </label>
                    </div>

                    <button
                        type="submit"
                        id="login-button"
                        class="btn btn-warning w-100"
                        :disabled="loading"
                    >
                        <span v-if="loading">Carregando...</span>
                        <span v-else>Entrar</span>
                    </button>

                    <button
                        type="button"
                        class="btn btn-danger w-100 mt-3"
                        @click="sendLoginGoogle"
                        :disabled="loading"
                    >
                        <span v-if="loading">Carregando...</span>
                        <span v-else>Entrar com Google</span>
                    </button>

                    <p class="mt-3">
                        Novato por aqui?
                        <RouterLink to="/cadastro" class="text-warning"
                            >Cadastre-se</RouterLink
                        >
                    </p>
                    <p>
                        <RouterLink to="/recuperar-senha" class="text-warning"
                            >Esqueceu a senha?</RouterLink
                        >
                    </p>
                </form>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import InputValue from "@/components/InputValue.vue";
import { authService } from "@/core/service/auth.service";
import router from "@/router";
import ErrorMessage from "@/components/ErrorMessage.vue";

const email = ref("");
const senha = ref("");
const formError = ref("");
const emailError = ref("");
const senhaError = ref("");
const rememberMe = ref(false);
const loading = ref(false);

function logOut() {
    authService
        .logOff()
        .then(() => {
            router.push("/login");
        })
        .catch(error => {
            formError.value = pegarError(error);
        });
}

function validateFields() {
    emailError.value = "";
    senhaError.value = "";
    let isValid = true;

    if (!email.value || !/\S+@\S+\.\S+/.test(email.value)) {
        emailError.value = "E-mail inválido!";
        isValid = false;
    }
    if (!senha.value || senha.value.length < 6) {
        senhaError.value = "A senha deve ter no mínimo 6 caracteres!";
        isValid = false;
    }

    return isValid;
}

function pegarError(error: unknown): string {
    if (error instanceof Error) {
        return error.message;
    }
    return "Erro desconhecido.";
}

async function sendLoginEmail() {
    formError.value = "";

    if (!validateFields()) return;

    loading.value = true;
    try {
        await authService.loginEmail(email.value, senha.value);
        router.push("/home");
    } catch (error) {
        formError.value = pegarError(error);
    } finally {
        loading.value = false;
    }
}

async function sendLoginGoogle() {
    formError.value = "";
    loading.value = true;

    try {
        const user = await authService.loginGoogle();
        if (user) {
            router.push("/home");
        }
    } catch (error) {
        formError.value = pegarError(error);
    } finally {
        loading.value = false;
    }
}
</script>

<style scoped>
@import "@/assets/css/home.css";
@import "@/assets/css/login.css";
@import "../assets/css/error.css";
</style>
