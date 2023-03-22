<template>
    <div class="m-5">
        <form @submit.prevent="createProduct" class="backgroundAuction border rounded p-2">
            <div class="row m-3">
                <div class="col">
                    <AtomLabel content="Name" for="name"/>
                    <input class="form-control" id="name" type="text" v-model="item.name" @blur="validate('name')" @keypress="validate('name')">
                    <p v-if="!!errors.name" class="errorMessage">{{errors.name}}</p>
                </div>
                <div class="col">
                    <AtomLabel content="Description" for="description"/>
                    <textarea  class="form-control" placeholder="Add a short description for the item" id="description" v-model="item.description" @blur="validate('description')" @keypress="validate('description')"></textarea>
                    <p v-if="!!errors.description" class="errorMessage">{{errors.description}}</p>
                </div>
            </div>
            <div class="row m-3">
                <div class="col">
                    <AtomLabel for="category" content="Item Category"/>
                    <select id="category" class="form-select" @change="addCategory">
                        <option value="beverage">Spirits</option>
                        <option value="beer">Beer</option>
                        <option value="wine">Wine</option>
                    </select>
                </div>
                <div class="col">
                    <AtomLabel content="Upload Product Image" for="productImage"/>
                    <input type="file" class="form-control" accept="image/*" id="productImage"/>
                </div>
            </div>

            <!--<p v-if="!!error" class="errorMessage">{{error}}</p>-->
            <AtomButton type="link" class="btn btn-secondary m-1" content="Cancel" @click="cancelCreate"/>
            <AtomButton type="sumbit" class="btn btnColor m-1" content="Submit"/>
            
        </form>
    </div>
</template>

<script>
import AtomLabel from '../atoms/AtomLabel.vue';
import AtomButton from '../atoms/AtomButton.vue';
import { mapActions } from 'vuex';
import router from '@/router';
import * as Yup from "yup"

const productFormSchema = Yup.object().shape({
    name: Yup.string().required('Name is required').typeError('Please enter a valid name'),
    description: Yup.string().required('Description is required').typeError('Please enter a valid description')
})
export default{
    name:'OrganismEditProduct',
    components:{
        AtomLabel,
        AtomButton,
    },
    data(){
        return{
            item:{
                name: '',
                description: '',

            },
            errors:{
                name: '',
                description: ''
            }
        }
    },
    methods:{
        ...mapActions('itemsModule', {
            create : 'create'
        }),
        createProduct(){
            /*
            console.log('hello?')
            productFormSchema.validate(this.item, {abortEarly: false})
            .then(()=>{
                    console.log('bist du da')
                    const item = {
                        name: this.item.name,
                        description: this.item.description,
                        imgLink: ['dummy.png'],
                        category: 'wine'
                    }
                    this.create(item)
                        .then(res => {
                            res.error ? this.$toast.error(res.msg) : this.$toast.success(res.msg) && router.push('products')
                        })
                
            }).catch((err)=>{
                err.inner.forEach((error) =>{
                    this.errors = {...this.errors, [error.path]: error.message}
                })
            }) */
            const item = {
                        name: this.item.name,
                        description: this.item.description,
                        imgLink: 'dummy.png',
                        category: 'wine'
                    }
                    this.create(item)
                        .then(res => {
                            res.error ? this.$toast.error(res.msg) : this.$toast.success(res.msg) && router.push('products')
                        })
           

        },
        cancelCreate(){
            router.push('products')
        },
        validate(field){
            productFormSchema
            .validateAt(field, this.item)
            .then(()=>{
                this.errors[field] = ''
            })
            .catch((error)=>{
                //console.log(error)
                this.errors[field] = error.message
            })
        },
    }
}

</script>

<style scoped>

.backgroundAuction{
    background-color: #292b2c;
    color: white;
}

</style>