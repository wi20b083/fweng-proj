<template>
    <div class="centered container-fluid mt-4" v-if="isLogin === true">
      <h1>Create Auction</h1>
      <div class="mb-3">
        <OrganismCreateAuctionForm :userID="userID" :products="products"/>
      </div>
    </div>
    <div class="centered container-fluid mt-4" v-else>
      <h1>You are not authorized to see this Page.</h1>
    </div>
</template>

<script>
import OrganismCreateAuctionForm from '@/components/organisms/OrganismCreateAuctionForm.vue';
import { mapState } from 'vuex';
export default{
    name:'CreateAuctionView',
    components:{
        OrganismCreateAuctionForm
    },
    computed:{
      ...mapState('userModule', {
        isLogin: state => state.isLogin,
        userID: state => state.user.id
      }),
      ...mapState('itemsModule', {
        products: state => state.items
      })
    }
}

</script>