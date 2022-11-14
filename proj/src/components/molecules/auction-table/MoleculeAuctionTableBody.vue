<template>
  <tbody>
    <MoleculeAuctionRow
      v-for="auction in auctions"
      v-bind:key="auction.id"
      :id=auction.id
      :imagesource=auction.imagesource
      :alttext=auction.alttext
      :title=auction.title
      :user=auction.user
      :start=auction.start
      :categories=auction.categories
    />
  </tbody>
</template>

<script>
import MoleculeAuctionRow from "./MoleculeAuctionRow.vue";

export default {
  name: "MoleculeAuctionTableBody",
  props: {
    auctions: {
        type: Array
    }
  },
  components: {
    MoleculeAuctionRow
}
};
</script>
