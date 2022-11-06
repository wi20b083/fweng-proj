<template>
  <div id="app">
    <OrganismFormEmailPassword/>
  </div>
</template>

<script>
import OrganismFormEmailPassword from './components/organisms/OrganismFormEmailPassword.vue';
  export default {
    name: 'App',
    data () {
      return {
        message: 'Hello, Vue!'
      }
    }, 
    components: {OrganismFormEmailPassword}
};
</script>
