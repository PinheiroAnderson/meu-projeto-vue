<template>
  <section class="form-acess">
    <div class="container">
      <div
        class="row justify-content-center align-items-center"
        style="min-height: 100vh"
      >
        <form
          id="login-form"
          class="col-md-4 bg-dark text-white p-4 rounded shadow"
        >
          <h2 class="text-center mb-4">Login</h2>
          <div class="mb-3">
            <label for="email" class="form-label">E-mail</label>
            <input
              type="email"
              id="email"
              class="form-control"
              name="nome"
              placeholder="email@example.com"
              required
              autofocus
            />
          </div>
          <div class="mb-3">
            <label for="password" class="form-label">Senha</label>
            <input
              type="password"
              id="password"
              class="form-control"
              name="senha"
              placeholder="Password"
              required
            />
          </div>
          <div class="form-check form-switch mb-3">
            <input
              class="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
            />
            <label class="form-check-label" for="flexSwitchCheckDefault"
              >Lembrar-me</label
            >
          </div>
          <button type="button" id="login-button" class="btn btn-warning w-100">
            Entrar
          </button>
          <p class="mt-3">
            Novato por aqui?
            <a href="/cadastro" class="text-warning">Cadastre-se</a>
          </p>
          <p><a href="" class="text-warning">Esqueceu a senha?</a></p>
          <p id="login-error" class="text-danger" style="display: none">
            E-mail ou senha incorretos!
          </p>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped>
@import "@/assets/css/home.css";
@import "@/assets/css/login.css";
</style>
