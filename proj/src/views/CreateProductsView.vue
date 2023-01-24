<template>
    <div class="centered container-fluid mt-4">
        <h1>Create Product</h1>
        <div class="m-3">
            <OrganismCreateProduct/>
        </div>
        
    </div>
</template>

<script>
import OrganismCreateProduct from '@/components/organisms/OrganismCreateProduct.vue';

export default{
    name:'CreateProductsView',
    components:{
        OrganismCreateProduct,
    },

}


</script>