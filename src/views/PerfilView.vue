<template>
    <div class="container-profile">
        <div class="tela profile">
            <div class="text-center">
                <img :src="client?.photo" alt="Foto de perfil" class="profile-img" />
            </div>
            <div class="tela-body">
                <p class="tela-title">
                    <b>Nome:</b>
                    <br />{{ client?.name }}
                </p>
                <p class="tela-text">
                    <b>Email:</b>
                    <br />{{ client?.email }}
                </p>
                <div class="text-center">
                    <button
                        type="button"
                        class="btn btn-primary"
                        @click="$router.push(`/client-edit/${client?.id}`)"
                    >
                        Editar
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import router from "@/router";
import { cadastroService } from "@/core/service/cadastro.service";
import { Client } from "@/core/domain/Client";

const client = ref<Client | undefined>();
onMounted(() => {
    const idRouter = router.currentRoute.value.params.id.toString();
    cadastroService.get(idRouter).then(res => {
        if (res) {
            client.value = res;
        }
    });
});
</script>

<style scoped>
@import "@/assets/css/perfil.css";
</style>
