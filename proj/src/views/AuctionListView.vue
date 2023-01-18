<template>
  <div class="centered container-fluid mt-4">
    <h1>Auctions</h1>
    <div class="m-3">
      <OrganismAuctionTable /><!--:auctions="auctions" :colnames="colnames" -->
    </div>
  </div>
</template>

<script>
import OrganismAuctionTable from "@/components/organisms/OrganismAuctionTable.vue";

export default {
  name: "AuctionList",
  components: {
    OrganismAuctionTable,
  },
};
</script>
