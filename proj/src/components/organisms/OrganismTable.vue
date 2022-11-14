<template>
    <table class="table">
        <MoleculeTableHead/>
        <MoleculeTableBody/>
    </table>
</template>

<script>
import MoleculeTableHead from '../molecules/table/MoleculeTableHead.vue'
import MoleculeTableBody from '../molecules/table/MoleculeTableBody.vue'

export default {
   name:'OrganismTable',
   components:{
        MoleculeTableHead,
        MoleculeTableBody
   }
}
</script>
