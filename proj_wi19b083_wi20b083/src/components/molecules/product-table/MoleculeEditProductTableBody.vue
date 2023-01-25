<template>
    <tbody>
        <MoleculeEditProductRow
            v-for="product in products"
            v-bind:key="product.id"
            :id = product.id
            :productname = product.name
            :imagesource = product.imagesource
            :alttext = product.alttext
            :product="product"
        />
    </tbody>
</template>

<script>
import MoleculeEditProductRow from './MoleculeEditProductRow.vue';

export default {
    name: "MoleculeProductTableBody",
    props: {
        products: {
            type: Array
        }
    },
    components: {
        MoleculeEditProductRow,
    },
};
</script>
  