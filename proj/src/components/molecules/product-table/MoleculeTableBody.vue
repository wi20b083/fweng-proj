<template>
  <tbody>
    <MoleculeProductRow
      v-for="product in products"
      v-bind:key="product.id"
      :id = product.id
      :productname = product.name
      :imagesource = product.imagesource
      :alttext = product.alttext
    />
  </tbody>
</template>

<script>
import MoleculeProductRow from "../product-table/MoleculeProductRow.vue";

export default {
  name: "MoleculeTableBody",
  props: {
    products: {
        type: Array
    }
  },
  components: {
    MoleculeProductRow,
  },
};
</script>
