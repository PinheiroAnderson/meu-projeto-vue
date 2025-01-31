<template>
    <section
        class="registration-section col-md-5 col-lg-4 mx-auto bg-dark text-white"
    >
        <h2>Cadastrar</h2>

        <div v-if="formError" class="alert alert-danger" role="alert">
            {{ formError }}
        </div>

        <div v-if="currentStep === 1">
            <inputValue
                v-model="client.name"
                label="Nome"
                type="text"
                message="Nome inválido"
                :required="true"
                :validator="isName"
            />
            <inputValue
                v-model="client.telephone"
                label="Telefone"
                message="Telefone inválido"
                :required="true"
                :validator="isPhone"
                type="tel"
            />
            <inputValue
                v-model="client.email"
                label="Email"
                message="Email inválido"
                :required="true"
                :validator="isEmail"
                type="email"
            />

            <div class="d-grid gap-2 col-6 mx-auto">
                <button type="button" class="btn btn-warning" @click="nextStep">
                    Avançar
                </button>
            </div>
        </div>

        <div v-else-if="currentStep === 2">
            <inputValue
                v-model="client.password"
                label="Senha"
                message="Senha inválida"
                :required="true"
                :validator="isPassword"
                type="password"
            />
            <inputValue
                v-model="confPass"
                label="Confirme sua senha"
                message="As senhas não coincidem"
                :required="true"
                :validator="() => client.password === confPass"
                type="password"
            />

            <div class="d-grid gap-2 col-6 mx-auto">
                <button
                    type="reset"
                    class="btn btn-secondary"
                    @click="prevStep"
                >
                    Voltar
                </button>
                <button
                    type="submit"
                    class="btn btn-warning"
                    @click="submitForm"
                >
                    Cadastrar
                </button>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
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
import ErrorMessage from "@/components/ErrorMessage.vue";

const client = ref<Client>(new Client());
const confPass = ref<string>("");
const currentStep = ref<number>(1);
const formError = ref<string | null>(null);

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

function submitForm() {
    if (validateStep2()) {
        cadastroService.add(client.value);
        alert("Cadastro realizado com sucesso!");
        resetForm();
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
    confPass.value = "";
    currentStep.value = 1;
    formError.value = null;
}
</script>

<style scoped>
@import "@/assets/css/cadastro.css";
@import "../assets/css/error.css";
</style>
