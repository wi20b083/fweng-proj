<template>
  <table class="table">
    <MoleculeTableHead :colnames=colnames />
    <MoleculeTableBody :products=products />
  </table>
</template>

<script>
import MoleculeTableHead from "../molecules/product-table/MoleculeTableHead.vue";
import MoleculeTableBody from "../molecules/product-table/MoleculeTableBody.vue";

export default {
  name: "OrganismTable",
  props: {
    products: {
      type: Array
    },
    colnames: {
      type: Array
    }
  },
  components: {
    MoleculeTableHead,
    MoleculeTableBody,
  },
};
</script>
