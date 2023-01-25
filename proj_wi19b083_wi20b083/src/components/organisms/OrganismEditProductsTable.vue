<template>
    <table class="table">
        <MoleculeTableHead :colnames=colnames />
        <MoleculeEditProductTableBody :products=products />
    </table>
</template>


<script>
import { mapState } from "vuex";
import MoleculeTableHead from "../molecules/MoleculeTableHead.vue";
import MoleculeEditProductTableBody from "../molecules/product-table/MoleculeEditProductTableBody.vue";

export default {
  name: "OrganismProductTable",
  data() {
    return {
      colnames: ["ID", "Image", "Name", "Edit"],
    }
  },
  components: {
    MoleculeTableHead,
    MoleculeEditProductTableBody,
  },
  computed:{
    ...mapState('itemsModule', {
      products: state => state.items
    }),
  }
};



</script>