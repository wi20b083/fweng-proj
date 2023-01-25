<template>
    <div class="m-5">
        <form @submit.prevent="createProduct" class="backgroundAuction border rounded p-2">
            <div class="row m-3">
                <div class="col">
                    <AtomLabel content="Name" for="name"/>
                    <input id="name" type="text"/>
                </div>
                <div class="col">
                    <AtomLabel content="Upload Product Image" for="productImage"/>
                    <input type="file" accept="image/*" id="productImage"/>
                </div>
            </div>
            <p v-if="!!error" class="errorMessage">{{error}}</p>

            <AtomButton type="sumbit" class="btn btnColor" content="Submit"/>
            
        </form>
    </div>
</template>

<script>
import AtomLabel from '../atoms/AtomLabel.vue';
import AtomButton from '../atoms/AtomButton.vue';
import { mapActions } from 'vuex';

export default{
    name:'OrganismEditProduct',
    props:['product'],
    components:{
        AtomLabel,
        AtomButton,
    },
    data(){
        return{
            error: ''
        }
    },
    methods:{
        ...mapActions('itemsModule', {
            create : 'create'
        }),
        createProduct(){
            this.error = ''

            var productName = document.getElementById('name').value
            var image = document.getElementById('productImage').value

            if(productName != '' && image != ''){
                console.log(productName + image)
                this.create({productName, image})
            }else{
                this.error = 'Please fill out the whole form'
            }

        }
    }
}

</script>

<style scoped>

.backgroundAuction{
    background-color: #292b2c;
    color: white;
}

</style>