<template>
    <div class="centered container-fluid mt-4">
        <AtomHeader tag="h1" content="AuctionDetails"/>
        {{ getAuctionById(auctionID) }}
        <!--Auction Details-->
        <div class="m-3">
            <div class="sticky-top">
                <OrganismAuctionDetails/>
            </div>

            <!--Bids table-->
            {{ getBidsByAuctionId(auctionID) }}
        </div>
    </div>
</template>

<script>
import AtomHeader from '@/components/atoms/AtomHeader.vue';
import OrganismAuctionDetails from '@/components/organisms/OrganismAuctionDetails.vue';
import {mapGetters, mapState, mapActions } from 'vuex';

export default{
    name:'AuctionDetailsView.vue',
    components:{
    AtomHeader,
    OrganismAuctionDetails
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

/*
How to load bids into auction

*/

</script>