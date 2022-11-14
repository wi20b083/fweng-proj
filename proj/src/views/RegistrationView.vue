<template>
  <div class="centered container-fluid mt-3">
    <AtomHeader tag="h1" content="Registration"/>
    <div class="ms-5 me-5">
      <OrganismFormUserData />
    </div>
  </div>
</template>

<script>
import AtomHeader from "../components/atoms/AtomHeader.vue";
import OrganismFormUserData from "../components/organisms/OrganismFormUserData.vue";

export default {
  name: "RegistrationView",
  components: {
    OrganismFormUserData,
    AtomHeader
},
};
</script>
