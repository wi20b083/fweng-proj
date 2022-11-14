<template>
  <div class="container-fluid p-3">
    <AtomHeader tag="h1" content="Registration" classname="centered"/>
    <div class="ps-5 pe-5">
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
