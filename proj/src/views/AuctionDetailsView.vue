<template>
    <div class="container-fluid mt-4">
        <h1 class="centered">AuctionDetails</h1>
        <!--Auction Details-->
        
            <div class="row p-3">
                <!--:username="getUserByIdForAuction" instead of static username-->
                <OrganismAuctionDetails  username="llara_rh" :auction="getAuctionById(auctionID)" :isLogin="isLogin" :userID="userID"/>
            </div>
            <div class="row p-3" v-show="isLogin">
                <OrganismCreateBid v-show="createButtonClicked" :items="getItemsForAuction(auctionID)" :auctionID="auctionID" :userID="userID"/>  <!--:userID="userID"-->   
                <OrganismBidTable :bids="bids" :auctionID="auctionID"/>
            </div>
        
    </div>
</template>

<script>
import OrganismAuctionDetails from '@/components/organisms/OrganismAuctionDetails.vue';
import OrganismBidTable from '@/components/organisms/OrganismBidTable.vue';
import {mapActions, mapGetters, mapState } from 'vuex';
import OrganismCreateBid from '@/components/organisms/OrganismCreateBid.vue';
import { useStore } from 'vuex';
import { computed } from '@vue/reactivity';
import { store } from '@/store';

export default{
    name:'AuctionDetailsView.vue',
    components:{
        OrganismAuctionDetails,
        OrganismBidTable,
        OrganismCreateBid
    },
    setup () {
        const store = useStore()
        const auctionID = computed(()=> store.state.auctionModule.auctionDetails)
        console.log(auctionID)
        const bids = computed(()=> store.state.bidModule.bids)
        const userID = computed(()=> store.state.userModule.user?.uid)
        return{
            bids,
            auctionID,
            userID
        }
    },
    beforeMount(){
        //store.dispatch('bidModule/getByAuctionId', auctionID)
        store.dispatch('bidModule/getByAuctionId', this.auctionID)
    },
    computed:{
        ...mapState('auctionModule', {
            createButtonClicked: state => state.createBidButtonClicked
        
        }),
        ...mapState('userModule', {
            isLogin: state => state.isLogin,
        }),
        ...mapGetters('auctionModule',[
            'getAuctionById',
            'getItemsForAuction',
        ]),
    },
    methods:{
        ...mapActions('bidModule',['getByAuctionId'])
    }
    
}
</script>

<style scoped>

.auctionDetails{
    background-color: #42b983;
}

</style>