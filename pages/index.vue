<template>
  <div class="page-container">
    <HeaderMolecule />
    <PresentationMolecule />
    <PartnersMolecule />
    <FooterMolecule class="mt-auto"/>
  </div>
</template>

<script>
import HeaderMolecule from '~/components/molecules/HeaderMolecule.vue'
import PartnersMolecule from '~/components/molecules/PartnersMolecule.vue'
import FooterMolecule from '~/components/molecules/FooterMolecule.vue'
import PresentationMolecule from '~/components/molecules/PresentationMolecule.vue'

export default {
  name: 'IndexPage',
  components: { HeaderMolecule, FooterMolecule, PartnersMolecule, PresentationMolecule },
}
</script>


<style scoped>
.page-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #ededec;
}

.mt-auto {
  margin-top: auto;
}
</style>