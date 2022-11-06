<template>
  <div id="app">
    {{ message }}
    <MolLabelledInputVue></MolLabelledInputVue>
  </div>
</template>

<script>
import MolLabelledInputVue from './components/molecules/MolLabelledInput.vue';
  export default {
    name: 'App',
    data () {
      return {
        message: 'Hello, Vue!'
      }
    }, 
    components: {MolLabelledInputVue}
};
</script>
