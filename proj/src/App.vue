<template>
  <MoleculeNavbar/>
  <router-view/>
  <footer>
    <OrganismFooter/>
  </footer>
</template>

<script>
import MoleculeNavbar from './components/molecules/MoleculeNavbar.vue'
import OrganismFooter from './components/organisms/OrganismFooter.vue'
export default {
  name: 'App', 
  components: {
    MoleculeNavbar,
    OrganismFooter
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

.errorMessage{
  color: red;
  font-size: 85%;
}

.btnColor{
  background-color:  #42b983; 
  color: white;
}

.btnColor:hover{
  background-color:  #1c4f38; 
  color: white;
}


.centered{text-align: center;}

</style>
