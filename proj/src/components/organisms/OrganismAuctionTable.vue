<template>
    <table class="table">
        <MoleculeTableHead :colnames=colnames />
        <MoleculeAuctionTableBody :auctions=auctions />
    </table>
</template>

<script>
import MoleculeAuctionTableBody from '../molecules/auction-table/MoleculeAuctionTableBody.vue';
import MoleculeTableHead from '../molecules/MoleculeTableHead.vue';

export default {
    name: 'OrganismAuctionTable', 
    props: {
        auctions: {
            type: Array
        }, 
        colnames: {
            type: Array
        }
    },
    components: {
    MoleculeTableHead,
    MoleculeAuctionTableBody
}
}
</script>