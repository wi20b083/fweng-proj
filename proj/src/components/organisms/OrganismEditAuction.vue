<template>
    <div class="m-5 text-start">
        <form @submit.prevent="updateAuction">
            <div class="backgroundAuction border rounded p-2">
                <div class="row m-3" >
                    <div class="col">
                        <AtomLabel for="title" content="Title"/><br>
                        <input class="form-control" type="text" id="title" v-model="form.title" />
                        <p v-if="!!errors.title" class="errorMessage">{{errors.title}}</p>
                    </div>
                    <div class="col">
                        <AtomLabel for="description" content="Description"/><br>
                        <input class="form-control" inputType="text" id="description" v-model="form.description" />
                        <p v-if="!!errors.description" class="errorMessage">{{errors.description}}</p>
                    </div>
                </div>
                <div class="row m-3" >
                    <div class="col">
                        <AtomLabel for="startDate" content="Start Date"/><br>
                        <input class="form-control" type="date" id="startDate" v-model="form.startDate" />
                        <p v-if="!!errors.startDate" class="errorMessage">{{errors.startDate}}</p>
                    </div>
                    <div class="col">
                        <AtomLabel for="endDate" content="End Date"/><br>
                        <input class="form-control" type="date" id="endDate" v-model="form.endDate" />
                        <p v-if="!!errors.endDate" class="errorMessage">{{errors.endDate}}</p>
                    </div>
                </div>
                <div class="row m-3">
                    <div class="col">
                        <AtomLabel for="deliveryDate" content="Delivery Date"/><br>
                        <input class="form-control" type="date" id="deliveryDate" v-model="form.deliveryDate" />
                        <p v-if="!!errors.deliveryDate" class="errorMessage">{{errors.deliveryDate}}</p>
                    </div>
                    <div class="col">
                        <AtomLabel for="auctionPic" content="Select one or more images"/>
                        <input class="form-control" id="auctionPic" type="file" accept="image/*" content="Upload one or more images" multiple @change="validateImages"/>
                    </div>
                </div>
            </div>
            <div class="row m-5">
                <div class="row m-5">
                <h2 class="border-bottom border-2 border-dark">Edit Products</h2>
                <table>
                    <tbody>
                        <MoleculeEditProductRow
                            v-for="product in form.items"
                            v-bind:key="product.pid"
                            :pid="product.pid"
                            :name="product.name"
                            :imgLink="product.imgLink"
                            :alttext="product.alttext"
                            :qty="product.qty"
                            :price="product.price"
                        />
                    </tbody>
                </table>
                <p v-if="!!errors.product" class="errorMessage">{{errors.product}}</p>
            </div>
            </div>
            <p v-if="!!errors.general" class="errorMessage">{{errors.general}}</p>
            <div class="row m-3">
                <AtomButton content="Submit" type="submit" classname="btn btnColor"/>
                <AtomButton type="link" classname="btn btn-secondary m-1" content="Cancel" @click="cancelEdit"/>
            </div>
        </form>
    </div>
</template>

<script>
import AtomLabel from '../atoms/AtomLabel.vue';
import AtomButton from '../atoms/AtomButton.vue';
import * as Yup from "yup"
import { mapActions } from 'vuex';
import MoleculeEditProductRow from '../molecules/product-table/MoleculeEditProductRow.vue';
import router from '@/router';


const auctionFormSchema = Yup.object().shape({
    title: Yup.string().required('Title is required').typeError('Please enter a valid title'),
    //startDate: Yup.date().required('Start Date is required').typeError('Please enter a valid date').min(new Date(), 'Date is already over'),
    //endDate: Yup.date().required('End Date is required').typeError('Please enter a valid date').min(Yup.ref('start'), "End date can't be before start date"),
    //deliveryDate: Yup.date().required('Delivery Date is required').typeError('Please enter a valid date').min(Yup.ref('start'), "Delivery date can't be before start date").min(Yup.ref('end'), "Delivery date can't be before end date"),
    description: Yup.string().required('Description is required').typeError('Please enter a valid description')
})

export default{
    name:'OrganismEditAuction',
    props:['auction'],
    components:{
        AtomLabel,
        AtomButton,
        MoleculeEditProductRow
    },
    data(){
        return{
            form:{
                title: this.auction.title,
                description: this.auction.description,
                startDate: '',
                endDate: '',
                deliveryDate: '',
                items: this.auction.items
            },
            productError: {
                hasError: false,
                errorMsg: ''
            },
            errors:{
                title: '',
                description: '',
                startDate: '',
                endDate: '',
                deliveryDate: '',
                product: ''          
            }
        }
    },
    methods:{
        ...mapActions('auctionModule', {update: 'update'}),
        cancelEdit(){
            router.push('/')
        },
        updateAuction(){
            auctionFormSchema.validate(this.auction, {abortEarly: false})
            .then(()=>{
                if(!this.productError.hasError){
                    console.log('no validation errors')

                    let _this = this
                    const auction = {
                        aid: this.auction.aid,
                        uid: this.auction.uid,
                        title: this.form.title,
                        description: this.form.description,
                        startDate: this.form.startDate != 0 ? this.form.startDate : this.auction.startDate,
                        endDate: this.form.endDate != 0 ? this.form.endDate : this.auction.endDate,
                        deliveryDate: this.form.deliveryDate != 0 ? this.form.deliveryDate : this.auction.deliveryDate,
                        locked: this.auction.locked,
                        closed: this.auction.closed,
                        uname: this.auction.uname,
                        items: (function (){
                            let productsNew = []
                            _this.form.items.forEach(product => {
                                productsNew.push(product)
                            })
                            return productsNew
                        })(),
                        img: ['dummy.png']
                    }
                    this.update(auction)
                    .then(res => {
                        res.error ? this.$toast.error(res.msg) : this.$toast.success(res.msg) && router.push('/')
                    })
                }
            }).catch((err)=>{
                err.inner.forEach((error) =>{
                    this.errors = {...this.errors, [error.path]: error.message}
                })
            }) 
        },
        validate(field){
            auctionFormSchema
            .validateAt(field, this.auction)
            .then(()=>{
                this.errors[field] = ''
            })
            .catch((error)=>{
                console.log(error)
                this.errors[field] = error.message
            })
        },
        validateImages(){
            // do something with uploaded files !?!
            const fileInput = document.getElementById('auctionPic')
            const uploadedFiles = []
            for( var i = 0; i < fileInput.files.length; i++){
                uploadedFiles.push(fileInput.files[i])
            }
            console.log(uploadedFiles)
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