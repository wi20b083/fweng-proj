<template>
    <div class="centered container-fluid mt-4" v-if="isLogin">
      <h1>Create Auction</h1>
      <div class="m-3">
        <OrganismCreateAuctionForm />
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
        isLogin: state => state.isLogin
      })
    }
}

</script>