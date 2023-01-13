<template>
    <div class="row">
        <div class="col">
            <AtomThumbnail :src="require('../../assets/dummyImg.png')" alt="imgAlt"/>
        </div>
        <div class="col">
            <!--Details-->
            <div class="row">Auction Titel</div>
            <div class="row">startDate</div>
            <div class="row">endDate</div>
            <div class="row">user</div>
            <div class="row">Total €€€</div>
        </div>
        <div class="col">
            <!--Items-->
            <div class="row" v-for="item in items" v-bind:key="item.id">{{ item.name }}</div>
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
    props:['imgAlt, imgSrc'],
    data(){
        return{
            items:[
                {
                    id: 1,
                    name: "Beer",
                    imagesource: require("../../assets/beer.png"),
                    alttext: "Image of beer",
                },
                {
                    id: 2,
                    name: "Wine",
                    imagesource: require("../../assets/wine.png"),
                    alttext: "image of wine",
                },   
                {
                    id: 3,
                    name: "Berliner Luft",
                    imagesource: require("../../assets/dummyImg.png"),
                    alttext: "image of wine",
                },           
            ]
        }
    }
}

</script>