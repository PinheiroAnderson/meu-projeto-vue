<template>
    <div class="container-profile">
        <div class="tela profile">
            <div class="text-center">
                <img :src="photoUrl" alt="Foto de perfil" class="profile-img" />
            </div>
            <div class="tela-body">
                <p class="tela-title">
                    <b>Nome:</b>
                    <br />{{ client?.name }}
                </p>
                <p class="tela-text">
                    <b>Telefone:</b>
                    <br />{{ client?.telephone }}
                </p>
                <div class="text-center">
                    <button type="button" class="btn btn-primary" @click="openFormEdit">
                        Editar
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useRoute, useRouter } from 'vue-router';
import { cadastroService } from "@/core/service/cadastro.service";
import { Client } from "@/core/domain/Client";

const client = ref<Client | undefined>();
const photoUrl = ref<string>("");

const route = useRoute();
const router = useRouter();

onMounted(async () => {
    const idRouter = route.params.id?.toString();

    if (!idRouter) {
        console.error("ID não encontrado.");
        return;
    }

    try {
        const res = await cadastroService.get(idRouter);
        if (res) {
            client.value = res;
            console.log("Dados do cliente:", client.value);
            if (typeof client.value?.photo === "string") {
                photoUrl.value = client.value.photo;
            } else if (client.value?.photo instanceof File) {
                photoUrl.value = URL.createObjectURL(client.value.photo);
            } else {
                photoUrl.value = "";
            }
        }
    } catch (error) {
        console.error("Erro ao buscar dados:", error);
    }
});


function openFormEdit() {
    if (!client.value || !client.value.id) {
        console.error("ID do cliente não encontrado.");
        return;
    }

    console.log("Navegando para editar o cliente com ID:", client.value.id);
    router.push(`/client-edit/${client.value.id}`);
}



</script>

<style scoped>
@import "@/assets/css/perfil.css";
</style>
