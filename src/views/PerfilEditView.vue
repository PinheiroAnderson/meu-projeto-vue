<template>
    <div class="container-profile">
        <div class="tela profile">
            <div class="text-center">
                <img :src="photoPreview || client.photo" alt="Foto de perfil" class="profile-img" />
                <input type="file" @change="handleFileUpload" accept="image/*" />
            </div>
            <div class="tela-body">
                <label for="name">Nome:</label>
                <input v-model="client.name" id="name" type="text" class="form-control" />

                <label for="telephone">Telefone:</label>
                <input v-model="client.telephone" id="telephone" type="text" class="form-control" />

                <div class="row">
                  <div class="col-5 btn btn-success" type="button" @click="saveProfile" >Salvar</div>
                  <div class="col-5 btn btn-secondary" type="button" @click="$router.push(`/profile/${client.id}`)">Cancelar</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { cadastroService } from "@/core/service/cadastro.service";

const route = useRoute();
const router = useRouter();
const client = ref({ id: "", name: "", telephone: "", photo: "" });
const photoPreview = ref<string | null>(null);
const selectedFile = ref<File | null>(null);

onMounted(async () => {
    const idRouter = route.params.id?.toString();
    if (!idRouter) {
        console.error("ID não encontrado.");
        return;
    }

    try {
        const res = await cadastroService.get(idRouter);
        if (res) {
            client.value = {
                id: res.id,
                name: res.name,
                telephone: res.telephone,
                // Verifique se res.photo é uma URL ou File
                photo: typeof res.photo === 'string' ? res.photo : "",
            };
        }
    } catch (error) {
        console.error("Erro ao buscar dados:", error);
    }
});


const handleFileUpload = (event: Event) => {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
        selectedFile.value = file;
        photoPreview.value = URL.createObjectURL(file);
    }
};

const saveProfile = async () => {
    try {
        const formData = new FormData();
        formData.append("name", client.value.name);
        formData.append("telephone", client.value.telephone);
        if (selectedFile.value) {
            formData.append("photo", selectedFile.value);
        }

        // Agora usamos a função update em vez de saveChanges
        await cadastroService.update(client.value);

        router.push(`/profile/${client.value.id}`);
    } catch (error) {
        console.error("Erro ao salvar perfil:", error);
    }
};

</script>

<style scoped>
@import "@/assets/css/perfil.css";
</style>
