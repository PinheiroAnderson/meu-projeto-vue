<template>
  <nav class="navbar navbar-expand-lg fixed-top">
    <div class="container">
      <img src="../../public/img/logo.jpg" height="40" alt="imgLogo" />
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav me-auto">
          <li class="nav-item">
            <RouterLink class="nav-link" aria-current="page" to="/home"
              >Inicio</RouterLink
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/home#services">Serviços</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/home#contact">Contato</a>
          </li>
        </ul>
        <ul class="navbar-nav me-1">
          <li class="nav-item">
            <RouterLink class="nav-link" to="/login">Login</RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts"></script>

<style scoped>
@import "@/assets/css/navbar.css";
</style>
