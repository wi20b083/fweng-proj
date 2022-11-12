<template>
  <MoleculeNavbar/>
  <router-view/>
</template>

<script>
//import OrganismFormEmailPassword from './components/organisms/OrganismFormEmailPassword.vue';
import MoleculeNavbar from './components/molecules/MoleculeNavbar.vue'

export default {
  name: 'App', 
  components: {
    MoleculeNavbar
}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica
  

  , Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.centered{text-align: center;}

</style>
