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

<script>
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
.card-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.card {
  background-color: #222;
  color: #fff;
  padding: 20px;
  border: 1px solid #444;
  border-radius: 8px;
  width: 250px;
  text-align: center;
  margin: 10px;
  transition: all 0.3s ease;
  border: solid 2px var(--yellow);
}

.card h5 {
  font-size: 1.5rem;
  margin-bottom: 10px;
}

.card p {
  font-size: 1rem;
  margin-bottom: 10px;
}

.card img {
  width: 100%;
  height: auto;
  border-radius: 8px;
}

.btn-card {
  background-color: blue;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
}

.btn-card:hover {
  background-color: var(--yellow);
}

.card:hover {
  background-color: #333;
  transform: scale(1.05);
}
</style>
