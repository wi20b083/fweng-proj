<template>
  <div class="centered container-fluid mt-3">
    <AtomHeader tag="h1" content="Home" />
    <div class="mt-3">
      <OrganismErrorModal />
      <AtomButton
        type="button"
        classname="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#errorModal"
        content="Launch dummy error modal"
      />
    </div>
  </div>
</template>
<script>
import AtomButton from "@/components/atoms/AtomButton.vue";
import AtomHeader from "@/components/atoms/AtomHeader.vue";
import OrganismErrorModal from "@/components/organisms/OrganismErrorModal.vue";
export default {
  name: "HomeView",
  components: {
    AtomHeader,
    OrganismErrorModal,
    AtomButton,
  },
};
</script>
