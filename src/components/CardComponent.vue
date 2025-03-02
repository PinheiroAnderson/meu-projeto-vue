<template>
    <div class="card" v-for="service in services" :key="service.id">
      <RouterLink :to="{ name: 'ServiceView', params: { id: service.id } }">
        <img
            :src="service.fotos"
            alt="Imagem do serviço"
            class="card-img-top"
        />
        <div class="card-body">
            <h5 class="card-title">{{ service.nome }}</h5>
            <p class="card-text">{{ service.descricao }}</p>
        </div>
      </RouterLink>
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
