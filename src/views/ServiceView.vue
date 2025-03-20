<template>
  <div class="main-content">
    <div class="service" v-if="service">
      <h1>{{ service.nome }}</h1>
      <p>{{ service.descricaoCompleta }}</p>
      <p>{{ service.valor }}</p>
      <img :src="service.fotos" alt="Imagem do Serviço" />
      <p>Duração: {{ service.duracao }}</p>
      <a href="#agendar" class="btn-card">Agendar hora</a>
    </div>
    <div v-else>
      <p>Carregando...</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { getService } from "@/core/infra/service.repository";
import { useRoute } from "vue-router";
import { Service } from "@/core/domain/Service";

const route = useRoute();
const service = ref<Service | null>(null);

onMounted(() => {
  const serviceId = route.params.id as string;
  service.value = getService(serviceId) || null;
});
</script>

<style scoped>
@import "/src/assets/css/service.css";

</style>
