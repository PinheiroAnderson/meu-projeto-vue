<template>
  <nav-bar />
  <router-view />
  <PageFooter />

  <div>
    <section class="form-acess">
      <div class="container">
        <div
          class="row justify-content-center align-items-center"
          style="min-height: 100vh"
        >
          <form
            class="col-md-4 bg-dark text-white p-4 rounded shadow"
            @submit.prevent="handleLogin"
          >
            <h2 class="text-center mb-4">Login</h2>
            <div class="mb-3">
              <label for="email" class="form-label">E-mail</label>
              <input
                type="email"
                id="email"
                v-model="email"
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
                v-model="password"
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
                v-model="rememberMe"
              />
              <label class="form-check-label" for="flexSwitchCheckDefault"
                >Lembrar-me</label
              >
            </div>
            <button type="submit" class="btn btn-warning w-100">Entrar</button>
            <p class="mt-3">
              Novato por aqui?
              <a href="cadastro.html" class="text-warning">Cadastre-se</a>
            </p>
            <p><a href="" class="text-warning">Esqueceu a senha?</a></p>
            <p v-if="loginError" class="text-danger">
              E-mail ou senha incorretos!
            </p>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import NavBar from "@/components/NavBar.vue";
import PageFooter from "@/components/PageFooter.vue";

export default {
  data() {
    return {
      email: "",
      password: "",
      rememberMe: false,
      loginError: false,
    };
  },
  methods: {
    handleLogin() {
      // Simulando uma validação de login
      const validEmail = "email@example.com";
      const validPassword = "password123";

      // Verificar se o e-mail e a senha são válidos
      if (this.email === validEmail && this.password === validPassword) {
        this.loginError = false;
        // Redirecionar ou fazer qualquer outra ação de login aqui
        alert("Login realizado com sucesso!");
      } else {
        this.loginError = true;
      }
    },
  },
};
</script>

<style scoped>
@import "@/assets/css/home.css";
@import "@/assets/css/login.css";
</style>
