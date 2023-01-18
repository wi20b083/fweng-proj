<template>
    <div>
        <div class="row">
            <!--create auction only if logged in user - AUTHORIZATION !!!-->
            <div class="col text-start"><AtomButton type="link" class="btn btnColor" content="Create Auction" @click="loadCreateAuction"/></div>
            <div class="col text-end"><i class="bi bi-funnel" style="color: black; font-size: 130%; font-style: normal;">Filter Auctions</i></div>
            <div class="col-auto text-end">
                <select class="form-select" @change="getAuctionsByCategory"> 
                    <option selected>by category</option>
                    <option value="beverage">Beverage</option>
                    <option value="beer">Beer</option>
                    <option value="wine">Wine</option>
                </select>
            </div>
            <div class="col-auto text-end">
                <select class="form-select" >
                    <option selected>by start date</option>
                    <option value="beverage">Beverage</option>
                    <option value="beer">Beer</option>
                    <option value="wine">Wine</option>
                </select>
            </div>
        </div>
        <table class="table mt-5">
            <MoleculeTableHead :colnames="colnames" />
            <MoleculeAuctionTableBody :auctions="auctions" />
        </table>
    </div>
</template>

<script>
import MoleculeAuctionTableBody from '../molecules/auction-table/MoleculeAuctionTableBody.vue';
import MoleculeTableHead from '../molecules/MoleculeTableHead.vue';
import { mapGetters, mapState } from 'vuex';
import AtomButton from '../atoms/AtomButton.vue';
import router from '@/router';

export default {
    name: 'OrganismAuctionTable', 
    components: {
        MoleculeTableHead,
        MoleculeAuctionTableBody,
        AtomButton
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
            auctions: state => state.auctions
        }),
        ...mapGetters('auctionModule',[
            'getAuctionsByCategory'
        ])

    },
    methods:{
      loadCreateAuction(){
        router.push("createAuction")
      }
    }

}
</script>