<template>
  <div class="container-fluid">
    <div class="row row-cols-12">
      <!-- Área de Texto -->
      <div class="col-6">
        <h1>Qualidade, confiabilidade e <strong>segurança</strong>.</h1>

        <img src="~/assets/five-starts.png" />

        <p>
          "A plataforma é incrivelmente fácil de se utilizar. A plataforma me
          permite visualizar e interagir com as minhas vendas na maioria dos
          aspectos e tudo em um lugar só. Com essa plataforma eu adquiri mais
          controle e consigo trabalhar de maneira eficiente e organizada"
        </p>

        <cite>Lucas A Siliunas | Vendedor Dropshipping</cite>
      </div>

      <!-- Área de Imagem -->
      <div class="col-6"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PresentationMolecule',
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@500&family=Tilt+Warp&display=swap');

.container-fluid {
    padding-top: 25px;
    padding-bottom: 25px;
}

h1 {
  font-family: 'Roboto', sans-serif;
  color: #cacbca;
  font-size: 26px;
  line-height: 23px;
  height: 300;
}

p,
cite {
  color: #c0c1bf;
}

p {
  margin: 20px;
}

</style>
