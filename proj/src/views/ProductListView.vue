<template>
  <div class="centered container-fluid mt-4" v-if="isLogin === true && isAdmin === true">
    <h1>Products</h1>
    <AtomButton content="Create Product" type="link" class="btn btnColor" @click="loadCreateProduct"/>
    <div class="m-3">
      <OrganismEditProductsTable :products="products"/>
    </div>
  </div>
  <div class="centered container-fluid mt-4" v-else>
    <h1>You are not authorized to see this Page.</h1>
  </div>
</template>

<script>
import AtomButton from '@/components/atoms/AtomButton.vue';
import {mapState } from 'vuex';
import router from '@/router';
import { useStore } from 'vuex';
import { computed } from '@vue/reactivity';
import OrganismEditProductsTable from '@/components/organisms/OrganismEditProductsTable.vue';
export default{
    name:'ProductListView',
    components:{
      AtomButton,
      OrganismEditProductsTable
    },
    setup () {
        const store = useStore()
        const products = computed(()=> store.state.itemsModule.items)
        store.dispatch('itemsModule/getAll')
        return{
            products
        }
    },
    computed:{
      ...mapState('userModule', {
        isLogin: state => state.isLogin,
        isAdmin: state => state.isAdmin
      })
    },
    methods:{
      loadCreateProduct(){
        router.push('createProduct')
      }
    }
}

</script>