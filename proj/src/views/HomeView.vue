<template>
  <div class="centered container-fluid mt-4">
    <h1>Home</h1>
    <div class="mt-3">
      <OrganismAuctionTable /><!--:isLogin="isLogin"-->
    </div>
  </div>
</template>
<script>
import OrganismAuctionTable from "@/components/organisms/OrganismAuctionTable.vue";
//import { mapActions } from "vuex";
export default {
  name: "HomeView",
  components: {
    OrganismAuctionTable
  },
  setup(){
    //this.getAllAuctions
  },
  methods:{
    /*
    ...mapActions('auctionModule', {
      getAllAuctions: 'getAll'
    })*/
  }
};
</script>
