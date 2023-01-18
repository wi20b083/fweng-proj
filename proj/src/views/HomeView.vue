<template>
  <div class="centered container-fluid mt-4">
    <h1>Home</h1>
    <div class="mt-3">
      <OrganismErrorModal />
      <AtomButton
        type="button"
        classname="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#errorModal"
        content="Launch dummy error modal"
      />
      <OrganismAuctionTable/>
    </div>
  </div>
</template>
<script>
import AtomButton from "@/components/atoms/AtomButton.vue";
import OrganismAuctionTable from "@/components/organisms/OrganismAuctionTable.vue";
import OrganismErrorModal from "@/components/organisms/OrganismErrorModal.vue";
export default {
  name: "HomeView",
  components: {
    OrganismErrorModal,
    AtomButton,
    OrganismAuctionTable
},
};
</script>
