<template>
  <div class="container-profile">
    <div class="registration-section col-md-5 col-lg-4 mx-auto bg-dark text-white">
      <h2>Cadastrar</h2>

      <div v-if="formError" class="alert alert-danger" role="alert">
        {{ formError }}
      </div>

      <div v-if="currentStep === 1">
        <inputValue v-model="client.name" label="Nome" type="text" message="Nome inválido" :required="true"
          :validator="isName" />
        <inputValue v-model="client.telephone" label="Telefone" message="Telefone inválido" :required="true"
          :validator="isPhone" type="tel" />
        <inputValue v-model="client.email" label="Email" message="Email inválido" :required="true" :validator="isEmail"
          type="email" />

        <div class="d-grid gap-2 col-6 mx-auto">
          <button type="button" class="btn btn-warning" @click="nextStep">
            Avançar
          </button>
        </div>
      </div>

      <div v-else-if="currentStep === 2">
        <inputValue v-model="client.password" label="Senha" message="Senha inválida" :required="true"
          :validator="isPassword" type="password" />
        <inputValue v-model="confPass" label="Confirme sua senha" message="As senhas não coincidem" :required="true"
          :validator="() => client.password === confPass" type="password" />

        <div class="mb-3">
          <label class="form-label">Foto de Perfil (opcional)</label>
          <input class="form-control" type="file" accept="image/*" @change="onFileChange" />
        </div>

        <div v-if="previewImage" class="mb-3">
          <img :src="previewImage || client.photo" alt="Preview" class="img-thumbnail" width="150" />
        </div>

        <div class="d-grid gap-2 col-6 mx-auto">
          <button type="reset" class="btn btn-secondary" @click="prevStep">
            Voltar
          </button>
          <button type="submit" class="btn btn-warning" @click="submitForm">
            Cadastrar
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import router from "@/router";
import { Client } from "@/core/domain/Client";
import { cadastroService } from "@/core/service/cadastro.service";
import {
    isConfPasswords,
    isEmail,
    isName,
    isPassword,
    isPhone,
} from "@/core/helpers/validator";
import InputValue from "@/components/InputValue.vue";

const client = ref<Client>(new Client());
const confPass = ref<string>("");
const currentStep = ref<number>(1);
const formError = ref<string | null>(null);
const previewImage = ref<string>(DEFAULT_PHOTO);
const DEFAULT_PHOTO = "/img/photoProfile.png";

client.value.photo = DEFAULT_PHOTO;

function nextStep() {
    if (validateStep1()) {
        currentStep.value = 2;
        formError.value = null;
    } else {
        formError.value =
            "Preencha todos os campos corretamente antes de avançar.";
    }
}

function prevStep() {
    currentStep.value = 1;
    formError.value = null;
}

async function submitForm() {
    if (validateStep2()) {
        try {
            await cadastroService.add(client.value);
            alert("Cadastro realizado com sucesso!");
            resetForm();
        } catch (error) {
            console.error("Erro no cadastro:", error);
            formError.value = "Erro ao cadastrar. Verifique os dados.";
        }
    } else {
        formError.value = "Por favor, corrija os erros antes de cadastrar.";
    }
}


function validateStep1() {
    return (
        isName(client.value.name) &&
        isPhone(client.value.telephone) &&
        isEmail(client.value.email)
    );
}

function validateStep2() {
    return (
        isPassword(client.value.password) &&
        client.value.password === confPass.value
    );
}

function resetForm() {
    client.value = new Client();
    client.value.photo = DEFAULT_PHOTO;
    confPass.value = "";
    previewImage.value = DEFAULT_PHOTO;
    currentStep.value = 1;
    formError.value = null;
}

onMounted(() => {
    const idRouter = router.currentRoute.value.params.id?.toString();
    cadastroService.get(idRouter).then(res => {
        if (res) {
            client.value = {
                ...client.value,
                ...res,
          };
          previewImage.value = client.value.photo || DEFAULT_PHOTO;
        } else {
          client.value.photo = DEFAULT_PHOTO;
          previewImage.value = DEFAULT_PHOTO;
        }
    });
});

function sendData() {
    if (client.value?.id) {
        cadastroService.edit(client.value);
    } else {
        cadastroService.add(client.value);
    }
}

function add() {
    cadastroService.add(client.value);
}

function onFileChange(event: Event) {
  const target = event.target as HTMLInputElement;
  const file = target.files?.[0];

  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      const result = e.target?.result;
      if (typeof result === "string") {
        previewImage.value = result;
        client.value.photo = result;
      }
    };
    reader.readAsDataURL(file);
  }
}
</script>

<style scoped>
@import "@/assets/css/edit.css";
@import "../assets/css/error.css";
</style>
