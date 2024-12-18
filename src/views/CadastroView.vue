<template>
  <section
    class="registration-section col-md-5 col-lg-4 mx-auto bg-dark text-white"
  >
    <h2>Cadastrar</h2>
    <form id="registrationForm" enctype="multipart/form-data">
      <div class="form-group mb-3">
        <label for="nomeInput">Nome</label>
        <input
          type="text"
          id="nomeInput"
          name="nome"
          class="form-control"
          placeholder="Seu nome completo"
          required
          autofocus
          v-model="client.name"
        />
        <div id="nomeHelp" class="form-text"></div>
      </div>

      <div class="form-group mb-3">
        <label for="telefoneInput">Telefone</label>
        <input
          type="tel"
          id="telefoneInput"
          data-mask="telefone"
          name="telefone"
          class="form-control"
          placeholder="(XX) XXXXX-XXXX"
          required
          v-model="client.telephone"
        />
        <div id="telHelp" class="form-text"></div>
      </div>

      <div class="form-group mb-3">
        <label for="emailInput">Email</label>
        <input
          type="email"
          id="emailInput"
          name="email"
          class="form-control"
          placeholder="exemplo@email.com"
          required
          v-model="client.email"
        />
        <div id="emailHelp" class="form-text"></div>
      </div>

      <div class="form-group mb-3">
        <label for="senhaInput">Senha</label>
        <input
          type="password"
          id="senhaInput"
          name="senha"
          class="form-control"
          placeholder="Crie uma senha"
          required
          v-model="client.password"
        />
        <div id="senhaHelp" class="form-text"></div>
      </div>

      <div class="form-group mb-3">
        <label for="confirmasenhaInput">Confirme sua senha</label>
        <input
          type="password"
          id="confirmasenhaInput"
          name="confirmasenha"
          class="form-control"
          placeholder="Confirme sua senha"
          required
          v-model="confPass"
        />
        <div id="confirmaHelp" class="form-text"></div>
      </div>

      <div class="form-group mb-3">
        <label for="foto">Foto</label>
        <input
          type="file"
          id="foto"
          name="foto"
          class="form-control"
          accept="image/*"
        />
      </div>

      <div class="form-group mb-3">
        <label for="tipoPessoa">Tipo de pessoa</label> <br />
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="radio"
            name="tipoPessoa"
            id="tipoFisica"
            value="fisica"
            v-model="client.typePerson"
          />
          <label class="form-check-label" for="tipoFisica">Física</label>
        </div>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="radio"
            name="tipoPessoa"
            id="tipoJuridica"
            value="juridica"
            v-model="client.typePerson"
          />
          <label class="form-check-label" for="tipoJuridica">Jurídica</label>
        </div>
        <div id="tipoHelp" class="form-text"></div>
      </div>

      <div class="form-group mb-3">
        <label for="genero">Gênero</label>
        <select
          id="genero"
          name="genero"
          class="form-select"
          required
          v-model="client.gender"
        >
          <option value="" disabled selected>Selecione</option>
          <option value="masculino">Masculino</option>
          <option value="feminino">Feminino</option>
          <option value="outro">Outro</option>
        </select>
        <div id="generoHelp" class="form-text"></div>
      </div>

      <div class="form-group mb-3">
        <label for="tipoDocumento">Tipo de documento</label> <br />
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="radio"
            name="tipoDocumento"
            id="tipoCpf"
            value="cpf"
            v-model="client.document"
          />
          <label class="form-check-label" for="tipoCpf">CPF</label>
        </div>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="radio"
            name="tipoDocumento"
            id="tipoCnpj"
            value="cnpj"
            v-model="client.document"
          />
          <label class="form-check-label" for="tipoCnpj">CNPJ</label>
        </div>
        <br /><label for="documentoInput">Documento</label>
        <input
          type="text"
          id="documentoInput"
          name="documento"
          class="form-control"
          placeholder="Documento de identificação"
          required
          v-model="client.document"
        />
        <div id="documentHelp" class="form-text"></div>
      </div>

      <div class="d-grid gap-2 col-6 mx-auto">
        <button type="reset" id="reset" class="btn btn-warning">
          Cancelar
        </button>
        <button type="button" id="registerButton" class="btn btn-warning">
          Cadastrar
        </button>
      </div>
    </form>

    <div
      id="message-area"
      class="alert alert-success"
      role="alert"
      style="display: none"
    >
      Cadastro realizado com sucesso!
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Client } from "@/core/domain/Client";

const confPass = ref("");
const client = ref(new Client());
</script>

<style scoped>
@import "@/assets/css/cadastro.css";
</style>
