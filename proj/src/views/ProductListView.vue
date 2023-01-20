<template>
<div class="centered container-fluid mt-4">
    <h1>Products</h1>
    <div class="m-3">
      <OrganismEditProductsTable/>
    </div>
  </div>
</template>

<script>
import OrganismEditProductsTable from '../components/organisms/OrganismEditProductsTable.vue'

export default{
    name:'ProductListView',
    components:{
      OrganismEditProductsTable
    }
}

</script>