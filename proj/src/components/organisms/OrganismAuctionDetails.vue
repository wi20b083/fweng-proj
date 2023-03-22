<template>
    <div class="border rounded p-4 background-light">
        <div class="row">
            <div class="col">
                <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner"> <!--v-for für images, alles dynamisch machen !-->
                        <div class="carousel-item active"> <!--fix image display !!!-->
                        <img src="../../assets/dummyImg.png" class="d-block w-100" alt="...">
                        </div>
                        <!--
                        <div class="carousel-item">
                        <img src="../../assets/dummyImg.png" class="d-block w-100" alt="...">
                        </div>
                        <div class="carousel-item">
                        <img src="../../assets/dummyImg.png" class="d-block w-100" alt="...">
                        </div>
                        -->
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
                <div class="row">
                        <h2>{{ auction.title }}</h2>
                        {{ auction.description }}
                </div>
                <div class="row">
                    <div class="col-2">
                        User: 
                    </div>
                    <div class="col text-start">
                        {{ auction.uname }}
                    </div>
                </div>
                <div class="row">
                    <div class="col-2">
                        Start:
                    </div>
                    <div class="col text-start">
                        {{ auction.startDate }}
                    </div>
                </div>
                <div class="row">
                    <div class="col-2">
                        End:
                    </div>
                    <div class="col text-start">
                        {{ auction.endDate }}
                    </div>
                </div>
                <div class="row">
                    <div class="col-2">
                        Status:
                    </div>
                    <div class="col text-start">
                        {{ auction.closed }}
                    </div>
                </div>
                <div style="color: red" class="row" v-show="auction.locked">
                    Auction is locked
                </div>
            </div>
        </div>
        <div class="p-4">
            <div class="row fw-bold">
                <div class="col">Picture</div>
                <div class="col text-end">Name</div>
                <div class="col text-end">Description</div>
                <div class="col text-end">Amount</div>
                <div class="col text-end">Price per Unit</div>
                <hr>
            </div>
            <div class="row" v-for="item in auction.items" v-bind:key="item.pid">
                <div class="col"><img :src="item.imgLink" /></div>
                <div class="col text-end">{{ item.name }}</div>
                <div class="col text-end">{{ item.description }}</div>
                <div class="col text-end">{{ item.qty }}</div>
                <div class="col text-end">{{item.price.toFixed(2)}}</div>
            </div>
            <div class="row mt-1">
                <hr>
                <div class="col">
                    <b>Total</b>
                </div>
                <div class="col text-end">
                    <b>{{ calculateTotal(auction.items) }} €</b>
                </div>
            </div>
        </div>
        <div v-show="!auction.closed && !auction.locked">
            <div v-show="!closeButtonClicked && isLogin === true && userID === auction.uid" class="row mt-1">
                <AtomButton type="button" content="Close Auction" class="btn btn-primary" @click="closeAuction"/>
            </div>
            <div v-show="!createButtonClicked && !closeButtonClicked" class="row mt-1" v-if="isLogin === true">
                <AtomButton type="button" content="Bid on Auction" class="btn btnColor" @click="loadOrganismCreateBid"/>
            </div>
        </div>
    </div>
    
    
</template>

<script>
import AtomButton from '../atoms/AtomButton.vue';
import { mapActions, mapState } from 'vuex';

export default{
    name:'OrganismAuctionDetails',
    components:{
        AtomButton
    },
  
    props:['auction', 'isLogin', 'items', 'userID'],
    methods:{
        ...mapActions('auctionModule', [
            'buttonClicked',
            'closeAuctionClicked'
        ]),
        loadOrganismCreateBid(){
            this.buttonClicked(true)
        },
        calculateTotal(items){
            let total = 0
            items.forEach(item =>{
                total += item.price * item.qty
            })
            return total.toFixed(2)
        },
        closeAuction(){
            this.closeAuctionClicked(true)
        }
    },
    computed:{
        ...mapState('auctionModule',{
            createButtonClicked: state => state.createBidButtonClicked,
            closeButtonClicked: state => state.auctionCloseButtonClicked
        })
    }
}
</script>
<style scoped>
.carousel-item {
    height: 300px;
    overflow: hidden;
    width: 100%;
}
.carousel-item img {
    width: 100%;
}
</style>