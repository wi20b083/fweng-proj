<template>
    <div>
        <div class="row mb-4">
            <div class="col text-start" v-if="isLogin === true && isAdmin === false"><AtomButton type="link" class="btn btnColor" content="Create Auction" @click="loadCreateAuction"/></div>
        </div>
        <div class="row mb-4">
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
        <!--
        <table class="table mt-5">
            <MoleculeTableHead :colnames="colnames" />
                <MoleculeAuctionTableBody :auctions="auctions"/>

                <MoleculeAuctionTableBody :auctions="getAuctionsByCategory(filterCategory)" />

                <template v-if="filterDate != '' && filterCategory == ''"><MoleculeAuctionTableBody :auctions="getAuctionsByStartDate(filterDate)" /></template>
                <template v-if="filterDate != '' && filterCategory != ''"><MoleculeAuctionTableBody :auctions="getAuctionsByCategoryAndDate({filterDate, filterCategory})" /></template>
                <template v-else><MoleculeAuctionTableBody :auctions="auctions"/></template>
        </table> -->
        <div class="row mb-4 border-bottom">
            <div class="col">ID</div>
            <div class="col">Images</div>
            <div class="col">User</div>
            <div class="col">Categories</div>
            <div class="col">Start-Date /<br>End-Date</div>
            <div class="col">Details</div>
            <div class="col" v-if=" (isLogin ===true && isAdmin === true) ">Edit</div><!-- Nur admin oder user dem die Auction gehört können auction löschen ->  || (isLogin === true && userID === auction.user.userID)-->
            <div class="col" v-if=" isLogin ===true && isAdmin === true">Delete</div> 
            <div class="col" v-if=" isLogin ===true && isAdmin === false ">Close</div>
        </div>
        <div class="row" v-for="auction in auctions" v-bind:key="auction.id">
            <div class="col">
                {{ auction.id }}
            </div>
            <div class="col">
                <!-- CAROUSEL FOR MORE IMAGES !!! only in auction details ?-->
                <AtomThumbnail :src="auction.imagesource"/>
            </div>
            <div class="col">
                {{ auction.user.username }}
            </div>
            <div class="col">
                {{ auction.categories.join() }}
            </div>
            <div class="col">
                {{ auction.startDate }} /<br>{{ auction.endDate }}
            </div>
            <div class="col">
                <AtomButton content="Details" type="button" classname="btn btnColor" @click="loadDetailsPage(auction.id)"/>
            </div>
            <div class="col" v-if=" (isLogin ===true && isAdmin === true) || (isLogin === true && userID === auction.user.id)"> <!-- Nur admin oder user dem die Auction gehört können auction löschen ->  || (isLogin === true && userID === auction.user.userID)-->
                <AtomButton content="Edit" type="button" classname="btn btn-secondary" @click="loadEditAuction(auction.id)"/>
            </div>
            <div class="col" v-if=" isLogin ===true && isAdmin === true">
                <AtomButton content="Delete" type="button" classname="btn btn-danger" @click="deleteAuction(auction.id)"/>
            </div>
            <div class="col" v-if=" isLogin ===true && isAdmin === false && userID === auctionUserID"> <!---->
                <AtomButton content="Close" type="button" classname="btn btn-danger" @click="deleteAuction(auction.id)"/>
            </div>
        </div>
    </div>
</template>

<script>
//import MoleculeAuctionTableBody from '../molecules/auction-table/MoleculeAuctionTableBody.vue';
//import MoleculeTableHead from '../molecules/MoleculeTableHead.vue';
import { mapActions, mapGetters, mapState } from 'vuex';
import AtomButton from '../atoms/AtomButton.vue';
import router from '@/router';
import AtomInput from '../atoms/AtomInput.vue';
import AtomLabel from '../atoms/AtomLabel.vue';
import AtomThumbnail from '../atoms/AtomThumbnail.vue';

export default {
    name: 'OrganismAuctionTable', 
    components: {
    //MoleculeTableHead,
    //MoleculeAuctionTableBody,
    AtomButton,
    AtomInput,
    AtomLabel,
    AtomThumbnail
},
    data(){
        return{
            /*
            colnames: [
                "ID",
                "Image",
                "Title",
                "User",
                "Start-Date",
                "Categories",
                "Details",
            ],*/
            filter:{
                category: 'all',
                date: 'all'
            }
        }
    },
    computed:{
        ...mapState('auctionModule',{
            auctions: state => state.auctions,
            //filterCategory: state => state.filterAuctionsByCategory,
            //filterDate: state => state.filterAuctionsByStartDate
        }),
        
        ...mapGetters('auctionModule',[
            'getAuctionsByCategory',
            'getAuctionsByStartDate',
            'getAuctionsByCategoryAndDate'
        ]),
        ...mapState('userModule',{
            isLogin: state => state.isLogin,
            isAdmin: state => state.isAdmin,
            userID: state => state.user.id
        })
    },
    methods:{
        ...mapActions('auctionModule', {
            clearCategory: 'clearAuctionFilterCategory',
            clearDate: 'clearAuctionFilterDate',
            showDetails : 'showDetails',
            delete: 'delete'
        }),
        loadCreateAuction(){
            router.push("createAuction")
        },
        filterCategory(){
            //this.auctions = this.getAuctionsByCategory(this.filter.category)
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

