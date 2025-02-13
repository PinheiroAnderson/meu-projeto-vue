<template>
    <nav class="navbar navbar-expand-lg fixed-top">
        <div class="container">
            <img src="../../public/img/logo.jpg" height="40" alt="imgLogo" />
            <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav me-auto">
                    <li class="nav-item">
                        <RouterLink
                            class="nav-link"
                            aria-current="page"
                            to="/home"
                            >Inicio</RouterLink
                        >
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/home#services">Serviços</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/home#contact">Contato</a>
                    </li>
                </ul>
                <ul v-if="client" class="navbar-nav">
                    <li class="nav-item">
                        <RouterLink
                            class="nav-link"
                            :to="`/profile/${client?.id}`"
                        >
                            {{ client?.name ?? client?.email }}
                        </RouterLink>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" @click="logOut()"> Sair </a>
                    </li>
                </ul>

                <ul v-else class="navbar-nav">
                    <li class="nav-item">
                        <RouterLink class="nav-link" to="/login">
                            Entrar
                        </RouterLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script setup lang="ts">
import { ref } from "vue";
import router from "@/router";
import { authService } from "../core/service/auth.service";
import { Client } from "@/core/domain/Client";

const client = ref<Client | undefined>();
const formError = ref("");
let times = 0;

function updateDataAuth() {
    clearTimeout(times);
    times = setTimeout(() => {
        client.value = authService.getAuthUser();
    }, 500);
}

function logOut() {
    authService
        .logOff()
        .then(() => {
            updateDataAuth();
            router.push("/");
        })
        .catch(() => {
            alert("Não foi possível sair!");
        });
}

router.beforeEach(() => {
    updateDataAuth();
});

function pegarError(error: unknown): string {
    if (error instanceof Error) {
        return error.message;
    }
    return "Erro desconhecido.";
}
</script>

<style scoped>
@import "@/assets/css/navbar.css";
</style>
