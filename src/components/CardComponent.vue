<template>
    <div class="card" v-for="(service, index) in services" :key="index">
        <img
            :src="service.imageUrl"
            alt="Imagem do serviço"
            class="card-img-top"
        />
        <div class="card-body">
            <h5 class="card-title">{{ service.title }}</h5>
            <p class="card-text">{{ service.description }}</p>
            <a href="#agendar" class="btn-card">Agendar hora</a>
        </div>
    </div>
</template>

<script setup lang="ts">
import serviceData from "@/core/mocks/service.json";
import { ref } from "vue";

const services = ref(serviceData);
</script>

<style scoped>
@import "@/assets/css/cards.css";
</style>
