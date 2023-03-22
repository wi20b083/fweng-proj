<template>
    <div class="row m-1 border-bottom border-dark centered">
        <div class="col">User</div>
        <div class="col">Delivery Date</div>
        <div class="col">Total</div>
        <div class="col">Status</div>
        <div class="col" v-show="closeButtonClicked">Select winning bid</div>
    </div>
    <div class="row m-1 pb-1 pt-1 border-bottom centered" v-for="bid in bids" v-bind:key="bid.bid">
        <div class="col">{{ bid.uname }}</div>
        <div class="col">{{ formatTimestamp(bid.deliveryDate) }}</div>
        <div class="col">{{ calculateTotal(bid.items) }} €</div>
        <div class="col colorOpen" v-show="bid.status === 'PENDING'">{{ bid.status }}</div>
        <div class="col colorAcc" v-show="bid.status === 'ACCEPTED'">{{ bid.status }}</div>
        <div class="col colorDecl" v-show="bid.status === 'REJECTED'">{{ bid.status }}</div>
        <div class="col" v-show="closeButtonClicked"><AtomButton content="Choose bid" type="button" classname="btn btn-sm btnColor" @click="closeAuctionSetWinningBid(bid.aid, bid.bid)"/></div>
    </div>
    <div class="row m-1" v-show="closeButtonClicked">
        <AtomButton content="Reject all" type="button" classname="btn btn-danger" @click="closeAuctionRejectAll(auctionID)"/>
    </div>
    <div class="row m-1" v-show="closeButtonClicked">
        <AtomButton content="Cancel" type="button" classname="btn btn-secondary" @click="cancelCloseAuction"/>
    </div>

</template>

<script>
import { mapActions, mapState } from 'vuex'
import AtomButton from '../atoms/AtomButton.vue'
export default{
    name:'OrganismBidTable',
    components:{
        AtomButton
    },
    props:['bids', 'auctionID'],
    methods:{
        ...mapActions('auctionModule',[
            'closeAuctionClicked',
            'closeAuction',
        ]),
        ...mapActions('bidModule',[
            'chooseWinningBid',
            'rejectAll'
        ]),
        calculateTotal(items){
            let total = 0
            items.forEach(item =>{
                total += item.price * item.qty
            })
            return total.toFixed(2)
        },
        cancelCloseAuction(){
            this.closeAuctionClicked(false)
        },
        closeAuctionSetWinningBid(aid, bid){
            this.closeAuction(aid)
            .then(res => {
                res.error ? this.$toast.error(res.msg) : this.$toast.success(res.msg)
                this.chooseWinningBid(bid)
                .then(res => {
                    this.closeAuctionClicked(false)
                    res.error ? this.$toast.error(res.msg) : this.$toast.success(res.msg)
                })
            })
            
        },
        closeAuctionRejectAll(aid){
            console.log(aid)
            this.closeAuction(aid)
            .then(res => {
                res.error ? this.$toast.error(res.msg) : this.$toast.success(res.msg)
                this.rejectAll(aid)
                .then(res => {
                    this.closeAuctionClicked(false)
                    res.error ? this.$toast.error(res.msg) : this.$toast.success(res.msg)
                })
            })
            
        },
        formatTimestamp(timestamp){
            const dateObject = new Date(timestamp)
            const humanDateFormat = dateObject.toLocaleDateString() 
            return humanDateFormat
        }
    },
    computed:{
        ...mapState('auctionModule',{
            closeButtonClicked: state => state.auctionCloseButtonClicked
        })
    }
}
</script>

<style scoped>
.colorOpen{
    color: #0303a6
}

.colorAcc{
    color: #42b983;
}

.colorDecl{
    color: #d70000;
}

</style>