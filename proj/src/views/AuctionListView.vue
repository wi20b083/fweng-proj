<template>
  <div class="centered container-fluid mt-4">
    <h1>Auctions</h1>
    <div class="m-3">
      <OrganismAuctionTable :isLogin="isLogin"/><!--:auctions="auctions" :colnames="colnames" -->
    </div>
  </div>
</template>

<script>
import OrganismAuctionTable from "@/components/organisms/OrganismAuctionTable.vue";
import { mapState } from "vuex";

export default {
  name: "AuctionList",
  components: {
    OrganismAuctionTable,
  },
  computed:{
    ...mapState('userModule', {
      isLogin: state => state.isLogin
    })
  }
};
</script>
