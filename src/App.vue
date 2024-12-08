<template>
  <nav-bar />
  <router-view />
  <CardComponent />
  <PageFooter />
</template>

<script setup lang="ts">
import NavBar from "@/components/NavBar.vue";
import CardComponent from "@/components/CardComponent.vue";
import PageFooter from "@/components/PageFooter.vue";
</script>

<style>
@import "@/assets/css/main.css";
</style>
