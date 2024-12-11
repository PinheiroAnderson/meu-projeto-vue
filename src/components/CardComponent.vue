<template>
  <div class="card-container">
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
  </div>
</template>

<script lang="ts">
// import serviceData from "@/core/mocks/service.json";
// import { ref } from "vue";

// const service = ref (serviceData)
export default {
  name: "CardComponent",
  data() {
    return {
      services: [], // A lista de serviços será armazenada aqui
    };
  },
  async created() {
    // Quando o componente for criado, vamos carregar os serviços
    this.services = await this.getServices();
  },
  methods: {
    async getServices() {
      try {
        const response = await fetch("/service.json");
        const data = await response.json();
        return data;
      } catch (error) {
        console.error("Erro ao carregar os serviços:", error);
        return [];
      }
    },
  },
};
</script>

<style scoped>
@import "@/assets/css/cards.css";
</style>
