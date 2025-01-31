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
                <ul class="navbar-nav me-1">
                    <li class="nav-item" v-if="!user">
                        <RouterLink class="nav-link" to="/login"
                            >Login</RouterLink
                        >
                    </li>
                    <li class="nav-item dropdown" v-else>
                        <a
                            class="nav-link dropdown-toggle"
                            href="#"
                            role="button"
                            data-bs-toggle="dropdown"
                        >
                            {{ user?.displayName || user?.email }}
                        </a>
                        <ul class="dropdown-menu">
                            <li>
                                <RouterLink class="dropdown-item" to="/perfil">Perfil</RouterLink>
                            </li>
                            <li>
                                <button class="dropdown-item nav-link:hover" @click="logOut">
                                    Sair
                                </button>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { authService } from "../core/service/auth.service";
import { getAuth, onAuthStateChanged, User } from "firebase/auth";

const user = ref<User | null>(null);
const formError = ref("");

onMounted(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, currentUser => {
        user.value = currentUser;
    });
});

const logOut = async () => {
    try {
        await authService.logOff();
        user.value = null;
    } catch (error) {
        formError.value = pegarError(error);
    }
};

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
