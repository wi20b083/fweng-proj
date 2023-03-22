<template>
  <div class="centered container-fluid mt-4">
    <h1>Home</h1>
    <div class="mt-3">
      <OrganismAuctionTable :auctions="auctions"/>
    </div>
  </div>
</template>
<script>
import OrganismAuctionTable from "@/components/organisms/OrganismAuctionTable.vue";
import { useStore } from 'vuex';
import { computed } from '@vue/reactivity';

export default {
  name: "HomeView",
  components: {
    OrganismAuctionTable
  },
  setup () {
      const store = useStore()
      const auctions = computed(()=> store.state.auctionModule.auctions)
      store.dispatch('auctionModule/getAll')
      store.dispatch('itemsModule/getAll')
      
      return{
          auctions
      }
  },
}
</script>
