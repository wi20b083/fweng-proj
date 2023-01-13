<template>
  <div class="centered container-fluid mt-4">
    <AtomHeader tag="h1" content="Registration"/>
    <div class="ms-5 me-5">
      <OrganismRegistrationForm />
    </div>
  </div>
</template>

<script>
import AtomHeader from "../components/atoms/AtomHeader.vue";
import OrganismRegistrationForm from "../components/organisms/OrganismRegistrationForm.vue";

export default {
  name: "RegistrationView",
  components: {
    OrganismRegistrationForm,
    AtomHeader
  },
};
</script>
