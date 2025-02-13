<template>
  <div class="container bg-body h-100">
    {{ client }}
    <div>
      <img :src="client?.photo" alt="" />
    </div>
    <div>
      <p>
        <b>Nome: </b>
        <br />{{ client?.name }}
      </p>
      <p>
        <b>Email: </b>
        <br />{{ client?.email }}
      </p>
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
