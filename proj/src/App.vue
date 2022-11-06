<template>
  <div id="app">
    <LoginFormVue/>
  </div>
</template>

<script>
import LoginFormVue from './components/organisms/LoginForm.vue';
  export default {
    name: 'App',
    data () {
      return {
        message: 'Hello, Vue!'
      }
    }, 
    components: {LoginFormVue}
};
</script>
