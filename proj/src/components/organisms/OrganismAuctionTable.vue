<template>
    <div>
        <div class="row">
            <!--create auction only if logged in user - AUTHORIZATION !!!-->
            <div class="col text-start"><AtomButton type="link" class="btn btnColor" content="Create Auction" @click="loadCreateAuction"/></div>
            <div class="col text-end"><i class="bi bi-funnel" style="color: black; font-size: 130%; font-style: normal;">Filter Auctions by</i></div>
            <div class="col-auto text-end">
                <AtomLabel for="categoryFilter" content="Category"/>
                <select id="categoryFilter" class="form-select" @change="filterAuctionsCategory">
                    <option value="all" selected>All Auctions</option>
                    <option value="beverage">Beverage</option>
                    <option value="beer">Beer</option>
                    <option value="wine">Wine</option>
                </select>
            </div>
            <div class="col-auto text-end">
                <AtomLabel for="dateFilter" content="Start Date"/>
                <AtomInput id="dateFilter" type="date" min="" @change="filterAuctionsDate"/>
            </div>
            <div class="col-auto text-end">
                <AtomButton type="button" class="btn btn-danger" content="Clear" @click="clearFilters"/>
            </div>
        </div>
        <table class="table mt-5">
            <MoleculeTableHead :colnames="colnames" />
                <!-- Getter mit Param: vue schreit, dass getAuctionsBy... keine function ist !?!-->
                <MoleculeAuctionTableBody :auctions="getAuctionsByCategory(filterCategory)" v-if="filterCategory != ''"/>
                <MoleculeAuctionTableBody :auctions="getAuctionsByStartDate(filterDate)" v-if="filterDate != ''"/>
                <MoleculeAuctionTableBody :auctions="auctions" v-else/>
        </table>
    </div>
</template>

<script>
import MoleculeAuctionTableBody from '../molecules/auction-table/MoleculeAuctionTableBody.vue';
import MoleculeTableHead from '../molecules/MoleculeTableHead.vue';
import { mapActions, mapGetters, mapState } from 'vuex';
import AtomButton from '../atoms/AtomButton.vue';
import router from '@/router';
import AtomLabel from '../atoms/AtomLabel.vue';
import AtomInput from '../atoms/AtomInput.vue';

export default {
    name: 'OrganismAuctionTable', 
    components: {
        MoleculeTableHead,
        MoleculeAuctionTableBody,
        AtomButton,
        AtomLabel,
        AtomInput
    },
    data(){
        return{
            colnames: [
                "ID",
                "Image",
                "Title",
                "User",
                "Start-Date",
                "Categories",
                "Details",
            ],
        }
    },
    computed:{
        ...mapState('auctionModule',{
            auctions: state => state.auctions,
            filterCategory: state => state.filterAuctionsByCategory,
            filterDate: state => state.filterAuctionsByStartDate,
        }),
        ...mapGetters('auctionModule',[
            'getAuctionsByCategory',
            'getAuctionsByStartDate'
        ])

    },
    methods:{
        ...mapActions('auctionModule', {filterByCategory: 'filterAuctionsByCategory', filterByStartDate: 'filterAuctionsByStartDate', clearAuctionFilter: 'clearAuctionFilter'}),
      loadCreateAuction(){
        router.push("createAuction")
      },
      filterAuctionsCategory(){
        const category = document.getElementById('categoryFilter').value
        console.log(category)
        this.filterByCategory(category)
      },
      filterAuctionsDate(){
        const date = document.getElementById('dateFilter').value
        this.filterByStartDate(date)
      },
      clearFilters(){
        this.clearAuctionFilter()
        //set text in select field to default 
      }
    }

}
</script>

