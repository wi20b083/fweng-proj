<template>
    <div class="m-5">
        <form @submit.prevent="updateProduct" class="backgroundAuction border rounded p-2">
            <div class="row m-3">
                <div class="col">
                    <AtomLabel content="Name" for="name"/>
                    <input class="form-control" id="name" type="text" v-model="form.name"/>
                </div>
                <div class="col">
                    <AtomLabel content="Description" for="description"/>
                    <input class="form-control" id="description" type="text" v-model="form.description"/>
                </div>
            </div>
            <div class="row m-3">
                <div class="col">
                    <AtomLabel content="Upload Product Image" for="productImage"/>
                    <input class="form-control" type="file" accept="image/*" id="productImage" />
                </div>
            </div>
            <AtomButton type="sumbit" class="btn btnColor" content="Submit"/>          
        </form>
    </div>
</template>

<script>
import AtomLabel from '../atoms/AtomLabel.vue';
import AtomButton from '../atoms/AtomButton.vue';
import { mapActions } from 'vuex';
import router from '@/router';
import * as Yup from "yup";

const updatedProductSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    description: Yup.string().required("Description is required"),
})

export default{
    name:'OrganismEditProduct',
    props:['product'],
    components:{
        AtomLabel,
        AtomButton,
    },
    data(){
        return{
            form:{
                name: this.product.name,
                description: this.product.description
            },
            errors: {
                name: '',
                description: ''
            }
        }
    },
    methods:{
        ...mapActions('itemsModule', {
            update : 'update'
        }),
        updateProduct(){
            updatedProductSchema
            .validate(this.form, { abortEarly: false })
            .then(() => {
                console.log("no validation errors");                
                const item = {
                    pid: this.product.pid,
                    name: this.form.name,
                    description: this.form.description,
                    imgLink: 'dummy.png',
                    category: this.product.category
                };
                this.update(item)
                .then(res => {
                    res.error ? this.$toast.error(res.msg) : this.$toast.success(res.msg) && router.push('products')
                })            
            })
            .catch((err) => {
                err.inner.forEach((error) => {
                    this.errors = { ...this.errors, [error.path]: error.message };
                });
            });
        }
    },
    validate(field) {
        updatedProductSchema
            .validateAt(field, this.form)
            .then(() => {
            this.errors[field] = null;
            })
            .catch((error) => {
            console.log(error);
            this.errors[field] = error.message;
            });
    }, 
}

</script>

<style scoped>

.backgroundAuction{
    background-color: #292b2c;
    color: white;
}


</style>