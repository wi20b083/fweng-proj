<template>
  <div class="centered container-fluid mt-4">
    <h1>Products</h1>
    <div class="m-3">
      <OrganismTable :products="products" :colnames="colnames" />
    </div>
  </div>
</template>

<script>
import OrganismTable from "../components/organisms/OrganismProductTable.vue";

export default {
  name: "ProductListView",
  data() {
    return {
      products: [
        {
          id: 1,
          name: "Beer",
          imagesource: require("../assets/beer.png"),
          alttext: "Image of beer",
        },
        {
          id: 2,
          name: "Wine",
          imagesource: require("../assets/wine.png"),
          alttext: "image of wine",
        },
      ],
      colnames: ["ID", "Image", "Name", "Amount", "Add"],
    };
  },
  components: {
    OrganismTable,
  },
};
</script>
