<template>
  <header class="header">
    <nav class="navbar navbar-expand-lg">
      <div class="container-fluid">
        <LogoAtom />
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
        <div
          class="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul class="navbar-nav">
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle settings-icon"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i class="bi bi-gear"></i>
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a class="dropdown-item" href="#">Configuração 1</a></li>
                <li><a class="dropdown-item" href="#">Configuração 2</a></li>
                <li><hr class="dropdown-divider" /></li>
                <li><a class="dropdown-item" href="#">Sair</a></li>
              </ul>
            </li>
            <li class="nav-item">
              <LoginButton />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import LoginButton from '~/components/atoms/LoginButton.vue'
import LogoAtom from '~/components/atoms/LogoAtom.vue'

export default {
  name: 'HeaderMolecule',
  components: {
    LoginButton,
    LogoAtom,
  },
}
</script>

<style scoped>
nav {
  margin: 0;
  padding: 0;
}

.container-fluid {
  background-color: #e5e5e5 !important;
}
</style>
