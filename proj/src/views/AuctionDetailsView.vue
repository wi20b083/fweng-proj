<template>
    <div class="centered container-fluid mt-4">
        <h1>AuctionDetails</h1>
        <!--Auction Details-->
        
            <div class="row p-3">
                <OrganismAuctionDetails :auction="getAuctionById(auctionID)" :isLogin="isLogin"/>
            </div>
            <div class="row p-3">
                <template v-if="createButtonClicked">
                    <OrganismCreateBid/>
                </template>
                <OrganismBidTable :bids="getBidsByAuctionId(auctionID)"/>
            </div>
        
    </div>
</template>

<script>
import OrganismAuctionDetails from '@/components/organisms/OrganismAuctionDetails.vue';
import OrganismBidTable from '@/components/organisms/OrganismBidTable.vue';
import {mapGetters, mapState, mapActions } from 'vuex';
import OrganismCreateBid from '@/components/organisms/OrganismCreateBid.vue';

export default{
    name:'AuctionDetailsView.vue',
    components:{
    OrganismAuctionDetails,
    OrganismBidTable,
    OrganismCreateBid
},
    computed:{
        ...mapState('auctionModule', {
            auctionID: state => state.auctionDetails,
            createButtonClicked: state => state.createBidButtonClicked
        }),
        
        ...mapGetters('auctionModule',[
            'getAuctionById',
        ]),
        ...mapGetters('bidModule', [
            'getBidsByAuctionId'
        ]),
        ...mapState('userModule', {
            isLogin: state => state.isLogin
        })

    },
    methods:{
        ...mapActions('auctionModule', {getBids : 'getAuctionBids'}),
        getBidsForAuction(id){
            this.getBids(id)
        },

    }
}
</script>

<style scoped>

.auctionDetails{
    background-color: #42b983;
}

</style>