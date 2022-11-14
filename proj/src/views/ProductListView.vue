<template>
    <OrganismTable/>
</template>

<script>
import OrganismTable from '../components/organisms/OrganismTable.vue'


export default {
    name: 'ProductListView',
    data() {
        return {
            products:[
                {id: 1, name: 'beer'},
                {id: 2, name: 'vine'},
                {id: 3, name: 'soda'},
                {id: 4, name: 'cola'},
            ]
        }
    },
    components:{
        OrganismTable,
        
    }
}

</script>
