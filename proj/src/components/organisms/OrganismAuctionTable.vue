<template>
    <div>
        <div class="row p-2">
            <div class="col text-start" v-show="isLogin && isAdmin"><AtomButton type="link" class="btn btnColor" content="Create Auction" @click="loadCreateAuction"/></div>
        </div>
        <div class="row p-2 ms-2 me-2 border-bottom border-dark">
            <div class="col-auto text-end">
                <button class="btn" @click="clearCategory"><i class="bi bi-x-square" style="color: red;"></i></button>
                <AtomLabel for="categoryFilter" content="Filter by Category"/>
                <select id="categoryFilter" class="form-select" @change="filterCategory" v-model="this.filter.category">
                    <option value="all" selected>All Auctions</option>
                    <option value="beverage">Beverage</option>
                    <option value="beer">Beer</option>
                    <option value="wine">Wine</option>
                </select>
            </div>
            <div class="col-auto text-end">
                <button class="btn" @click="clearDate"><i class="bi bi-x-square" style="color: red;"></i></button>
                <AtomLabel for="dateFilter" content="Filter by Start Date"/>
                <AtomInput id="dateFilter" type="date" min="" @change="filterDate" v-model="this.filter.date"/>
            </div>
        </div>
        <div class="row p-2 ms-2 me-2 fw-bold centered border-bottom border-dark">
            <div class="col">Auction ID</div>
            <div class="col">Image</div>
            <div class="col">User</div>
            <div class="col">Categories</div>
            <div class="col">Start<br>-<br>End</div>
            <div class="col">Status</div>
        </div>
        <div class="p-2 m-2 rounded background-light centered" v-for="auction in auctions" v-bind:key="auction.aid">
            <div class="row">
                <div class="col">
                    {{ auction.aid }}
                </div>
                <div class="col">
                    <AtomThumbnail :src="auction.img[0].imgLink"/>
                </div>
                <div class="col">
                    {{ auction.uname }}
                </div>
                <div class="col">
                    {{ auction.categories.join() }}
                </div>
                <div class="col">
                    {{ formatTimestamp(auction.startDate) }}<br>-<br>{{ formatTimestamp(auction.endDate) }}
                </div>
                <div class="col">
                    {{ auction.locked ? 'locked' : (auction.closed ? 'closed' : 'open') }}
                </div>
            </div>
            <div class="row m-1">
                <AtomButton content="Details" type="button" classname="btn btn-sm btnColor" @click="loadDetailsPage(auction.aid)"/>
            </div>
            <div class="row m-1" v-if=" isLogin && !isAdmin && userID === auction.uid ">
                <AtomButton content="Edit" type="button" classname="btn btn-sm btn-secondary" @click="loadEditAuction(auction.aid)"/>
            </div>
            <!--
            <div class="row m-1" v-if=" isLogin && !isAdmin && userID === auction.uid">
                <AtomButton content="Delete" type="button" classname="btn btn-sm btn-danger" @click="deleteAuction(auction.aid)"/>
            </div>-->
            <!-- IMPL on-click functions-->
            <div class="row m-1" v-show="!auction.locked && isLogin && isAdmin && !auction.closed">
                <AtomButton content="Lock" type="button" classname="btn btn-sm btn-danger" @click="changeState(auction.aid)"/>
            </div>
            <div class="row m-1" v-show="auction.locked && isLogin && isAdmin && !auction.closed">
                <AtomButton content="Unlock" type="button" classname="btn btn-sm btn-primary" @click="changeState(auction.aid)"/>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex';
import AtomButton from '../atoms/AtomButton.vue';
import router from '@/router';
import AtomInput from '../atoms/AtomInput.vue';
import AtomLabel from '../atoms/AtomLabel.vue';
import AtomThumbnail from '../atoms/AtomThumbnail.vue';

export default {
    name: 'OrganismAuctionTable', 
    components: {
        AtomButton,
        AtomInput,
        AtomLabel,
        AtomThumbnail
    },
    emits:['filterCategory'],
    data(){
        return{
            filter:{
                category: 'all',
                date: 'all'
            }
        }
    },
    props:['auctions'],
    computed:{        
        ...mapGetters('auctionModule',[
            'getAuctionsByCategory',
            'getAuctionsByStartDate',
            'getAuctionsByCategoryAndDate',
        ]),
        ...mapState('userModule',{
            isLogin: state => state.isLogin,
            isAdmin: state => state.isAdmin,
            userID: state => state.user.uid
        })
    },
    methods:{
        ...mapActions('auctionModule', {
            clearCategory: 'clearAuctionFilterCategory',
            clearDate: 'clearAuctionFilterDate',
            showDetails : 'showDetails',
            //delete: 'delete',
            changeAuctionState:'changeState'
        }),
        loadCreateAuction(){
            router.push("createAuction")
        },
        filterCategory(){
            this.getAuctionsByCategory(this.filter.category)
        },
        filterDate(){
            //this.auctions = this.getAuctionsByStartDate(this.filter.date)

        },
        loadDetailsPage(id){
            console.log('id from auction row:' +id)
            this.showDetails(id)
            router.push("auctionDetails")
        },
        loadEditAuction(id){
            this.showDetails(id)
            router.push('editAuction')
        },
        deleteAuction(id){
            this.delete(id)
            .then(res => {
                res.error ? this.$toast.error(res.msg) : this.$toast.success(res.msg)
            })
        },
        changeState(aid){
            this.changeAuctionState(aid)
            .then(res => {
                res.error ? this.$toast.error(res.msg) : this.$toast.success(res.msg)
            })
        },
        formatTimestamp(timestamp){
            const dateObject = new Date(timestamp)
            const humanDateFormat = dateObject.toLocaleDateString() 
            return humanDateFormat
        }
        // set category for filter in store
        /*
        clearCategory(){
            this.clearCategory()
            //set text in select field to default 
        },
        clearDate(){
            this.clearDate()
        },
        */
    }

}
</script>

