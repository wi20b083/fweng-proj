<template>
  <div class="centered container-fluid mt-4" v-if="isLogin && isAdmin">
    <h1>Products</h1>
    <div class="m-3">
      <OrganismEditProductsTable/>
    </div>
  </div>
  <div class="centered container-fluid mt-4" v-else>
    <h1>You are not authorized to see this Page.</h1>
  </div>
</template>

<script>
import OrganismEditProductsTable from '../components/organisms/OrganismEditProductsTable.vue'
import { mapState } from 'vuex';
export default{
    name:'ProductListView',
    components:{
      OrganismEditProductsTable
    },
    computed:{
      ...mapState('userModule', {
        isLogin: state => state.isLogin,
        isAdmin: state => state.isAdmin
      })
    }
}

</script>