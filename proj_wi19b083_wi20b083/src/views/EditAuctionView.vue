<template>
    <div class="centered container-fluid mt-4" v-if="isLogin === true">
        <h1>Edit Auction</h1>
        <div class="mb-3">
            <OrganismEditAuction :auction="getAuctionById(auctionID)"/>
        </div>
    </div>
    <div class="centered container-fluid mt-4" v-else>
        <h1>You are not authorized to see this Page.</h1>
    </div>
</template>

<script>
import OrganismEditAuction from '../components/organisms/OrganismEditAuction.vue'
import { mapGetters, mapState } from 'vuex';

export default{
    name:'EditAuctionView',
    components:{
        OrganismEditAuction
    },
    computed:{
        ...mapState('userModule', {
            isLogin: state => state.isLogin
        }),
        ...mapState('auctionModule', {
            auctionID: state => state.auctionDetails
        }),
        ...mapGetters('auctionModule',[
            'getAuctionById'
        ])
    }
}

</script>