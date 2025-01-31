<template>
  <div v-if="message" class="alert alert-danger" role="alert">
    {{ message }}
  </div>
</template>

<script setup lang="ts">
defineProps({
  message: {
    type: String,
    required: false,
  },
});
</script>

<style scoped>
@import "@/assets/css/error.css";
</style>
