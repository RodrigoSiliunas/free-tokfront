<template>
  <div class="partners-bar">
    <img src="~/assets/mercado-livre-logo.png" class="logo" />
    <img src="~/assets/bling-logo.png" class="logo" />
    <img src="~/assets/shopee-logo.png" class="logo" />
  </div>
</template>

<script>
export default {
  name: 'PartnersMolecule',
}
</script>

<style>
.partners-bar {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
  background-color: #e5e5e5;
}

.logo {
  max-width: 100px;
  margin: 0 20px;
}
</style>
