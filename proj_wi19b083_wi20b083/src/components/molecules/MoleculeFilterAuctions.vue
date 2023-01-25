<template>
    
        <!--create auction only if logged in user - AUTHORIZATION !!!-->
        <div class="col-auto text-end">
            <button class="btn" @click="clearCategory"><i class="bi bi-x-square" style="color: red;"></i></button>
            <AtomLabel for="categoryFilter" content="Filter by Category"/>
            <select id="categoryFilter" class="form-select" @change="setFilterCategory">
                <option value="all" selected>All Auctions</option>
                <option value="beverage">Beverage</option>
                <option value="beer">Beer</option>
                <option value="wine">Wine</option>
            </select>
        </div>
        <div class="col-auto text-end">
            <button class="btn" @click="clearDate"><i class="bi bi-x-square" style="color: red;"></i></button>
            <AtomLabel for="dateFilter" content="Filter by Start Date"/>
            <AtomInput id="dateFilter" type="date" min="" @change="setFilterDate"/>
        </div>
    
</template>

<script>
import AtomLabel from '../atoms/AtomLabel.vue';
import AtomInput from '../atoms/AtomInput.vue';
import { mapActions } from 'vuex';


export default{
    emits:['setCategoryFilter', 'setDateFilter'],
    name:'MoleculeFilterAuctions',
    components:{
        AtomLabel,
        AtomInput
    },
    methods:{
        ...mapActions('auctionModule', {
            setCategoryFilter: 'filterAuctionsByCategory', 
            setDateFilter: 'filterAuctionsByStartDate', 
        }),
        setFilterCategory(){
            const category = document.getElementById('categoryFilter').value
            this.setCategoryFilter(category)
        },
        setFilterDate(){
            const date = document.getElementById('dateFilter').value
            this.setDateFilter(date)
        }
    }
}

</script>