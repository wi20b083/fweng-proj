<template>
    <div class="row">
        <div class="col-auto">
            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                    <img :src="auction.imagesource" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                    <img :src="auction.imagesource" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                    <img :src="auction.imagesource" class="d-block w-100" alt="...">
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
        <div class="col">
            <!--Details-->
            <table></table>
            <div class="row">
                <div class="col">
                    User: 
                </div>
                <div class="col">
                    {{ auction.user.username }}
                </div>
            </div>
            <div class="row">
                <div class="col">
                    Start:
                </div>
                <div class="col">
                    {{ auction.startDate }}
                </div>
            </div>
            <div class="row">
                <div class="col">
                    End:
                </div>
                <div class="col">
                    {{ auction.endDate }}
                </div>
            </div>
        </div>
        <div class="col">
            <div class="row" v-for="item in auction.auctionitems" v-bind:key="item.id">{{ item.name }}</div>
        </div>
    </div>
    <div class="row mt-3" v-if="isLogin === true">
        <AtomButton type="link" content="Bid on Auction" class="btn btnColor" @click="loadOrganismCreateBid"/>
    </div>
    
</template>

<script>
//import AtomThumbnail from '../atoms/AtomThumbnail.vue';
import AtomButton from '../atoms/AtomButton.vue';
import { mapActions } from 'vuex';

export default{
    name:'OrganismAuctionDetails',
    components:{
        //AtomThumbnail,
        AtomButton
    },
    props:['auction', 'isLogin'],
    methods:{
        ...mapActions('auctionModule', {buttonClicked: 'buttonClicked'}),
        loadOrganismCreateBid(){
            this.buttonClicked(true)
        }

    },
}

</script>