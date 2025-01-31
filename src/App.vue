<template>
    <nav-bar />
    <router-view />
    <PageFooter />
</template>

<script setup lang="ts">
import NavBar from "@/components/NavBar.vue";
import PageFooter from "@/components/PageFooter.vue";
</script>

<style>
@import "@/assets/css/main.css";
</style>
