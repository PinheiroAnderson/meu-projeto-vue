<template>
  <div>
    <header>
      <div class="navbox">
        <div class="header-content container">
          <div class="header-title">
            <h1>Sua Loja</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis
              voluptates repudiandae et ipsum nam quae quidem, dolore iure error
              quis?
            </p>
          </div>
          <div class="logo">
            <img src="../../public/img/logo.jpg" alt="imgLogo" />
          </div>
        </div>
      </div>
    </header>

    <section class="bg-black service-container" id="services">
      <h2 class="display-4 text-white text-center mb-4">Nossos Serviços</h2>
      <div class="card-container">
        <CardComponent />
      </div>
    </section>

    <section class="agendamento-container" id="agendar">
      <div class="overlay">
        <div class="texto-agendamento">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <button class="btn-agendamento">Agendar Agora</button>
      </div>
    </section>

    <section class="propaganda-container bg-black">
      <div class="conteudo">
        <h1>Vitrine de Produtos</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </section>

    <section class="comentarios-container bg-black">
      <div class="comentario">
        <div class="img-placeholder">
          <img src="../../public/img/instagram.png" alt="imgInstagram" />
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div class="comentario">
        <div class="img-placeholder">
          <img src="../../public/img/facebook.png" alt="imgFacebook" />
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div class="comentario">
        <div class="img-placeholder">
          <img src="../../public/img/google.png" alt="imgGoogle" />
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </section>

    <section class="bg-black contact-container">
      <div class="contact">
        <div class="contact-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2599.017558622644!2d-43.53026921748262!3d-22.89248973834242!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9be104c0c834f7%3A0xd87b043ae6f698d4!2sCondominio%20Residencial%20Colinas%20De%20Campo%20Grande!5e0!3m2!1spt-BR!2sbr!4v1727395089823!5m2!1spt-BR!2sbr"
            width="98%"
            height="300"
            style="border: 0"
            allowfullscreen="false"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          >
          </iframe>

          <div id="endereco">
            <p>My house , 11806 , Vasconcelos - RJ</p>

            <p>
              <b>Tel: 21 9646-81384</b>
            </p>
          </div>
        </div>

        <div class="contact-form" id="contact">
          <form action="">
            <div class="form-group">
              <input
                type="text"
                id="nome"
                name="nome"
                placeholder="Nome"
                required
              /><br />
            </div>

            <div class="form-group">
              <input
                type="text"
                id="email"
                name="email"
                placeholder="E-mail ou Telefone"
                required
              /><br />
            </div>

            <div class="form-group">
              <select name="assunto" aria-placeholder="Assunto">
                <option disabled selected>Assunto</option>
                <option value="contato">Contato</option>
                <option value="reclame">Reclamação</option>
                <option value="sugest">Sugestão</option>
              </select>
            </div>

            <div class="form-group">
              <textarea
                name="mensagem"
                id="mensagem"
                rows="10"
                placeholder="Mensagem"
                required
              ></textarea>
            </div>
          </form>

          <div class="form-group right">
            <button onclick="enviar()">Enviar</button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import CardComponent from "@/components/CardComponent.vue";
</script>

<style scoped>
@import "@/assets/css/home.css";
</style>
