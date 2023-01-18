<template>
  <div class="centered container-fluid mt-4">
    <h1>Registration</h1>
    <div class="ms-5 me-5">
      <OrganismRegistrationForm />
    </div>
  </div>
</template>

<script>
import OrganismRegistrationForm from "../components/organisms/OrganismRegistrationForm.vue";

export default {
  name: "RegistrationView",
  components: {
    OrganismRegistrationForm,

  },
};
</script>
