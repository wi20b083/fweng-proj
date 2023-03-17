<template>
  <tbody>
    <MoleculeProductRow
      v-for="product in products"
      v-bind:key="product.id"
      :id = "product.id"
      :productname = "product.name"
      :imagesource = "product.imagesource"
      :alttext = "product.alttext"
      :price = "product.price"
      :amount = "product.amount"
      @addProduct="addProduct(product.id, $event)"
    />
  </tbody>
</template>

<script>
import MoleculeProductRow from "./MoleculeProductRow.vue";

export default {
  name: "MoleculeProductTableBody",
  props: [
    "products"
  ],
  components: {
    MoleculeProductRow,
  },
};
</script>
