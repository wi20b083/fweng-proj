<template>
  <div class="centered container-fluid mt-4" v-if="isLogin === false">
    <h1>Registration</h1>
    <div class="ms-5 me-5">
      <OrganismRegistrationForm />
    </div>
  </div>
  <div class="centered container-fluid mt-4" v-else>
    <h1>You are already registered.</h1>
  </div>

</template>

<script>
import OrganismRegistrationForm from "../components/organisms/OrganismRegistrationForm.vue";
import { mapState } from "vuex";
export default {
  name: "RegistrationView",
  components: {
    OrganismRegistrationForm,

  },
  computed:{
    ...mapState('userModule', {
      isLogin: state => state.isLogin
    })
  }
};
</script>
