<template>
  <table class="table">
    <!--<MoleculeTableHead :colnames=colnames />-->
    <MoleculeProductTableBody :products=products />
  </table>
</template>

<script>
//import MoleculeTableHead from "../molecules/MoleculeTableHead.vue";
import MoleculeProductTableBody from "../molecules/product-table/MoleculeProductTableBody.vue";

export default {
  name: "OrganismProductTable",
  props:['products'],
  components: {
    MoleculeProductTableBody,
  },
  

};
</script>
