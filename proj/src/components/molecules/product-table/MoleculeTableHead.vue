<template>
  <thead>
    <tr>
      <th v-for="col in colnames" v-bind:key="col" scope="col">{{col}}</th>
    </tr>
  </thead>
</template>

<script>
export default {
  name: "MoleculeTableHead",
  props: {
    colnames: {
      type: Array
    },
  },
};
</script>
