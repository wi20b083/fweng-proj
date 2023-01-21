<template>
    <div class="centered container-fluid mt-4" v-if="isLogin && isAdmin">
        <h1>Edit Product</h1>
        <div class="ps-5 pe-5">
            <OrganismEditProduct :product="getItemById(productID)"/>
        </div>
    </div>
    <div class="centered container-fluid mt-4" v-else>
      <h1>You are not authorized to see this Page.</h1>
    </div>
</template>

<script>
import OrganismEditProduct from '@/components/organisms/OrganismEditProduct.vue';
import { mapState, mapGetters } from 'vuex';

export default{
    name:'EditProductView',
    components:{
        OrganismEditProduct
    },
    computed:{
        //if normal user is logged in or admin wants to edit user we get state.user 
        ...mapState('itemsModule', {
            productID: state => state.productToEdit
        }),
        ...mapGetters('itemsModule', [
            'getItemById'
        ]),
        ...mapState('userModule', {
            isLogin: state => state.isLogin,
            isAdmin: state => state.isAdmin
      })
    },
}

</script>