<template>
    <div class="row">
        <div class="col">
            <AtomThumbnail :src="auction.imagesource" :alt="auction.alttext"/>
        </div>
        <div class="col">
            <!--Details-->
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
            <div class="row">
                <div class="col">
                    Total:
                </div>
                <div class="col">
                    {{ auction.details.total }}
                </div>
            </div>
        </div>
        <div class="col ps-5">
            <!--Items-->
            <div class="row" v-for="item in auction.details.auctionItems" v-bind:key="item.id">{{ item.name }}</div>
        </div>
    </div>
    <div class="row mt-3">
        <AtomButton type="link" content="Bid on Auction" class="btn btn-dark"/>
    </div>
</template>

<script>
import AtomThumbnail from '../atoms/AtomThumbnail.vue';
import AtomButton from '../atoms/AtomButton.vue';

export default{
    name:'OrganismAuctionDetails',
    components:{
        AtomThumbnail,
        AtomButton
    },
    props:['auction'],
    
}

</script>