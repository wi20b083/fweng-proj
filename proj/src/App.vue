<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view/>

  <OrganismFormEmailPassword/>

  <section>
    <OrganismErrorModal/>
    <AtomButton type="button" classname="btn btn-primary" data-bs-toggle="modal" data-bs-target="#errorModal" content="Toggle Modal"/>
  </section>

</template>

<script>
import OrganismFormEmailPassword from './components/organisms/OrganismFormEmailPassword.vue';
import OrganismErrorModal from './components/organisms/OrganismErrorModal.vue';
import AtomButton from './components/atoms/AtomButton.vue';

export default {
  name: 'App', 
  components: {
    OrganismFormEmailPassword, 
    OrganismErrorModal, 
    AtomButton
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica
  

  , Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;



}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
