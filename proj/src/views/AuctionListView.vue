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
import { mapActions, mapState } from "vuex";

export default {
  name: "AuctionList",
  components: {
    OrganismAuctionTable,
  },
  
  setup(){
    this.getAll()
  },
  computed:{
    ...mapState('userModule', {
      isLogin: state => state.isLogin
    })
  },
  
  ...mapActions('auctionModule', {
    getAll: 'getAll'
  })

};
</script>
