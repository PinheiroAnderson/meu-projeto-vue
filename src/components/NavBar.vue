<template>
  <nav class="navbar navbar-expand-lg fixed-top">
    <div class="container">
      <!-- <a class="navbar-brand" href="#">Navbar</a> logo da loja -->
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
            <a class="nav-link" aria-current="page" href="index.html">Inicio</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="index.html#services">Serviços</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="index.html#contact">Contato</a>
          </li>
        </ul>
        <ul class="navbar-nav me-1">
          <li class="nav-item">
            <a class="nav-link" href="login.html">Login</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts"></script>

<style scoped>
@import "@/assets/css/color.css";

.navbar-toggler {
  background-color: var(--yellow);
}

.navbar {
  width: 100%;
  background-color: var(--shadow);
  backdrop-filter: blur(10px);
}

.navbar .nav-link {
  text-decoration: none;
  color: var(--white);
  font-size: 1.5rem;
  padding: 5px 15px;
  transition: 0.3s ease;
  border-bottom: solid 2px transparent;
}

.navbar .nav-link:hover,
.navbar .nav-link:active {
  color: var(--yellow);
  border-bottom: solid 2px var(--yellow);
  transition: 0.3s ease;
}
</style>
