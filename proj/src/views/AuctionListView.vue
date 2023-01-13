<template>
  <div class="centered container-fluid mt-4">
    <AtomHeader tag="h1" content="Auctions" />
    <div class="m-3">
      <OrganismAuctionTable /><!--:auctions="auctions" :colnames="colnames" -->
    </div>
  </div>
</template>

<script>
import OrganismAuctionTable from "@/components/organisms/OrganismAuctionTable.vue";
import AtomHeader from "@/components/atoms/AtomHeader.vue";

export default {
  name: "AuctionList",
  components: {
    OrganismAuctionTable,
    AtomHeader,
  },
};
</script>
