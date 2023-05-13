<template>
  <div class="footer-dark">
    <footer>
      <div class="container">
        <div class="row">
          <div class="col-sm-6 col-md-3 item">
            <h3>Contato</h3>
            <ul>
              <li>
                <a href="#">Telefone: <strong>(54) 2141-4863</strong></a>
              </li>
              <li>
                <a href="#">WhatsApp: <strong>(54) 99143-0063</strong></a>
              </li>
              <li>
                <a href="#"
                  >E-mail: <strong>atendimento@tokshop.com.br</strong></a
                >
              </li>
            </ul>
          </div>
          <div class="col-sm-6 col-md-3 item">
            <h3>Informação Rápida</h3>
            <ul>
              <li><a href="#">Sobre</a></li>
              <li><a href="#">Time</a></li>
              <li><a href="#">Vagas</a></li>
              <li><a href="#">Cadastro</a></li>
              <li><a href="#">Funcionamento</a></li>
            </ul>
          </div>
          <div class="col-md-6 item text">
            <h3>TokShop</h3>
            <p>
              Sinônimo de tradição com anos de experiência, a marca TOKSHOP
              destaca-se pela qualidade, variedade, melhor preço e bom gosto de
              seus produtos.
            </p>
            <p>
              Todos os nossos produtos estão disponíveis à pronta entrega e
              envio imediato após a confirmação do pagamento.
            </p>
          </div>
          <div class="col item social">
            <a href="#"><i class="bi bi-facebook"></i></a
            ><a href="#"><i class="bi bi-instagram"></i></a
            ><a href="#"><i class="bi bi-twitter"></i></a>
          </div>
        </div>
        <p class="copyright">
          Todos os Direitos Reservados a TOKSHOP COMERCIO DE ARTIGOS DE VIAGEM
          LTDA © 2023
        </p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'FooterMolecule',
}
</script>

<style scoped>
.footer-dark {
  padding: 15px 0;
  color: #f0f9ff;
  background-color: #282d32;
}

.footer-dark h3 {
  margin-top: 0;
  margin-bottom: 12px;
  font-weight: bold;
  font-size: 16px;
}

.footer-dark ul {
  padding: 0;
  list-style: none;
  line-height: 1.6;
  font-size: 14px;
  margin-bottom: 0;
}

.footer-dark ul a {
  color: inherit;
  text-decoration: none;
  opacity: 0.6;
}

.footer-dark ul a:hover {
  opacity: 0.8;
}

@media (max-width: 767px) {
  .footer-dark .item:not(.social) {
    text-align: center;
    padding-bottom: 20px;
  }
}

.footer-dark .item.text {
  margin-bottom: 36px;
}

@media (max-width: 767px) {
  .footer-dark .item.text {
    margin-bottom: 0;
  }
}

.footer-dark .item.text p {
  opacity: 0.6;
  margin-bottom: 0;
}

.footer-dark .item.social {
  text-align: center;
}

@media (max-width: 991px) {
  .footer-dark .item.social {
    text-align: center;
    margin-top: 20px;
  }
}

.footer-dark .item.social > a {
  font-size: 20px;
  width: 36px;
  height: 36px;
  line-height: 30px;
  display: inline-block;
  text-align: center;
  border-radius: 50%;
  box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.4);
  margin: 0 8px;
  color: #fff;
  opacity: 0.75;
}

.footer-dark .item.social > a:hover {
  opacity: 0.9;
}

.footer-dark .copyright {
  text-align: center;
  padding-top: 24px;
  opacity: 0.3;
  font-size: 13px;
  margin-bottom: 0;
}
</style>
