<template>
    <div class="row">
        <div class="col-auto">
            <AtomThumbnail  :alt="auction.alttext"/>
        </div>
        <div class="col">
            <!--Details-->
            <table></table>
            <div class="row">
                <div class="col">
                    User: 
                </div>
                <div class="col">
                    {{ auction.user }}
                </div>
            </div>
            <div class="row">
                <div class="col">
                    Start:
                </div>
                <div class="col">
                    {{ auction.start }}
                </div>
            </div>
            <div class="row">
                <div class="col">
                    End:
                </div>
                <div class="col">
                    {{ auction.end }}
                </div>
            </div>
        </div>
        <div class="col">
            <div class="row" v-for="item in auction.details.auctionItems" v-bind:key="item.id">{{ item.name }}</div>
        </div>
    </div>
    <div class="row mt-3">
        <AtomButton type="link" content="Bid on Auction" class="btn btnColor" @click="loadOrganismCreateBid"/>
    </div>
    
</template>

<script>
import AtomThumbnail from '../atoms/AtomThumbnail.vue';
import AtomButton from '../atoms/AtomButton.vue';
import { mapActions } from 'vuex';

export default{
    name:'OrganismAuctionDetails',
    components:{
        AtomThumbnail,
        AtomButton
    },
    props:['auction'],
    methods:{
        ...mapActions('auctionModule', {buttonClicked: 'buttonClicked'}),
        loadOrganismCreateBid(){
            this.buttonClicked(true)
        }
    }
}

</script>