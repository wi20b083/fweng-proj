<template>
  <table class="table">
    <MoleculeProductTableBody :products="products" :addProduct="addProduct"/>
  </table>
</template>

<script>
//import MoleculeTableHead from "../molecules/MoleculeTableHead.vue";
import MoleculeProductTableBody from "../molecules/product-table/MoleculeProductTableBody.vue";

export default {
  name: "OrganismProductTable",
  props:['products', 'addProduct'],
  components: {
    MoleculeProductTableBody,
  },
  

};
</script>
