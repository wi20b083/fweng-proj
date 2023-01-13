<template>
    <div class="centered container-fluid mt-4">
        <AtomHeader tag="h1" content="AuctionDetails"/>
        <!--Auction Details-->
        <div class="m-3 pt-2">
            <div class="sticky-top auctionDetails">
                <OrganismAuctionDetails :auction="getAuctionById(auctionID)"/>
            </div>
            <div class="pt-3">
                <OrganismBidTable :bids="getBidsByAuctionId(auctionID)"/>
            </div>
        </div>
    </div>
</template>

<script>
import AtomHeader from '@/components/atoms/AtomHeader.vue';
import OrganismAuctionDetails from '@/components/organisms/OrganismAuctionDetails.vue';
import OrganismBidTable from '@/components/organisms/OrganismBidTable.vue';
import {mapGetters, mapState, mapActions } from 'vuex';

export default{
    name:'AuctionDetailsView.vue',
    components:{
    AtomHeader,
    OrganismAuctionDetails,
    OrganismBidTable
},
    data(){
        return{
            
        }
    },
    computed:{
        ...mapState('auctionModule', {
            auctionID: state => state.auctionDetails,
        }),
        
        ...mapGetters('auctionModule',[
            'getAuctionById',
        ]),
        ...mapGetters('bidModule', [
            'getBidsByAuctionId'
        ]),
        /*...mapGetters([
            
            'auctionModule/getAuctionById',
            'bidModule/getBidsByAuctionId',
            'itemModule/getItemsById',
            'auctionModule/getAuctionItemsByAuctionId'
        ])*/

    },
    methods:{
        ...mapActions('auctionModule', {getBids : 'getAuctionBids'}),
        getBidsForAuction(id){
            this.getBids(id)
        }
    }
}
</script>

<style scoped>

.auctionDetails{
    background-color: white;
}

</style>