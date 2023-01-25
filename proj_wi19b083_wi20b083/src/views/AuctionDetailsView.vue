<template>
    <div class="centered container-fluid mt-4">
        <h1>AuctionDetails</h1>
        <!--Auction Details-->
        
            <div class="row p-3">
                <OrganismAuctionDetails :auction="getAuctionById(auctionID)" :isLogin="isLogin"/>
            </div>
            <div class="row p-3">
                <OrganismCreateBid v-show="createButtonClicked" :items="getItemsForAuction(auctionID)" :auctionID="auctionID" :userID="userID"/>     
                <OrganismBidTable :bids="getBidsByAuctionId(auctionID)"/>
            </div>
        
    </div>
</template>

<script>
import OrganismAuctionDetails from '@/components/organisms/OrganismAuctionDetails.vue';
import OrganismBidTable from '@/components/organisms/OrganismBidTable.vue';
import {mapGetters, mapState } from 'vuex';
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
        ...mapState('userModule', {
            isLogin: state => state.isLogin,
            userID: state => state.user.id
        }),
        ...mapGetters('auctionModule',[
            'getAuctionById',
            'getItemsForAuction'
        ]),
        ...mapGetters('bidModule', [
            'getBidsByAuctionId'
        ]),
       

    },
}
</script>

<style scoped>

.auctionDetails{
    background-color: #42b983;
}

</style>