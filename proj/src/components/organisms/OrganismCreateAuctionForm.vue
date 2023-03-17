<template>
    <div class="m-5 text-start">
        <form @submit.prevent="createAuction">
            <div class="backgroundAuction border rounded p-2">
                <div class="row m-3" >
                    <div class="col">
                        <AtomLabel for="title" content="Title"/>
                        <AtomInput  id="title" inputType="text" v-model="auction.title" @blur="validate('title')"/>
                        <p v-if="!!errors.title" class="errorMessage">{{errors.title}}</p>
                    </div>
                    <div class="col">
                        <AtomLabel for="deliveryDate" content="Delivery Date"/><br>
                        <AtomInput inputType="date" id="deliveryDate" v-model="auction.deliveryDate" @blur="validate('deliveryDate')"/>
                        <p v-if="!!errors.deliveryDate" class="errorMessage">{{errors.deliveryDate}}</p>
                    </div>
                </div>
                <div class="row m-3" >
                    <div class="col">
                        <AtomLabel for="description" content="Description"/><br>
                        <textarea  class="form-control" placeholder="Add a short description for the auction" id="description" v-model="auction.description" @blur="validate('description')"></textarea>
                        <p v-if="!!errors.description" class="errorMessage">{{errors.description}}</p>
                    </div>
                </div>
                <div class="row m-3" >
                    <div class="col">
                        <AtomLabel for="auctionPic" content="Select one or more images"/>
                        <AtomInput  id="auctionPic" type="file" accept="image/*" content="Upload one or more images" multiple @change="validateImages"/>
                    </div>
                </div>
                <div class="row m-3" >
                    <div class="col">
                        <AtomLabel for="start" content="Start Date"/><br>
                        <AtomInput inputType="date" id="start" v-model="auction.start" @blur="validate('start')"/>
                        <p v-if="!!errors.start" class="errorMessage">{{errors.start}}</p>
                    </div>
                    <div class="col">
                        <AtomLabel for="end" content="End Date"/><br>
                        <AtomInput inputType="date" id="end" v-model="auction.end" @blur="validate('end')"/><!--@blur="validate('end')"-->
                        <p v-if="!!errors.end" class="errorMessage">{{errors.end}}</p>
                    </div>
                </div>
            </div>
            <div class="row m-5">
                <h2 class="border-bottom border-2 border-dark">Add Products to Auction</h2>
                <table>
                    <tbody>
                        <MoleculeProductRow
                            v-for="product in products"
                            v-bind:key="product.id"
                            :id = "product.id"
                            :productname = "product.name"
                            :imagesource = "product.imagesource"
                            :alttext = "product.alttext"
                            @addProduct="addProduct"
                        />
                    </tbody>
                </table>
                <p v-if="!!errors.product" class="errorMessage">{{errors.product}}</p>
            </div>
            <p v-if="!!errorsFinal" class="border rounded p-2 bg-danger text-white centered">{{errorsFinal}}</p>
            <div class="row m-3">
                <AtomButton content="Create Auction" type="submit" classname="btn btnColor"/>
            </div>
        </form>
    </div>
</template>

<script>
import AtomInput from '../atoms/AtomInput.vue';
import AtomLabel from '../atoms/AtomLabel.vue';
import AtomButton from '../atoms/AtomButton.vue';
import * as Yup from "yup"
import { mapActions } from 'vuex';
import MoleculeProductRow from '../molecules/product-table/MoleculeProductRow.vue';


const auctionFormSchema = Yup.object().shape({
    title: Yup.string().required('Title is required').typeError('Please enter a valid title'),
    start: Yup.date().required('Start Date is required').typeError('Please enter a valid date').min(new Date(), 'Date is already over'),
    end: Yup.date().required('End Date is required').typeError('Please enter a valid date'), //.min(Yup.ref('start'), "End date can't be before start date"),
    deliveryDate: Yup.date().required('Delivery Date is required').typeError('Please enter a valid date').min(Yup.ref('start'), "Delivery date can't be before start date").min(Yup.ref('end'), "Delivery date can't be before end date"),
    description: Yup.string().required('Description is required').typeError('Please enter a valid description')
})

export default{
    name:'OrganismCreateAuctionForm',
    components:{
        AtomInput,
        AtomLabel,
        AtomButton,
        MoleculeProductRow

    },
    props:[
        'userID',
        'products'
    ],
    data(){
        return{
            auction:{
                title: '',
                description: '',
                start: '',
                end: '',
                deliveryDate: '',
                products:[]
            },
            errors:{
                title: '',
                description: '',
                start: '',
                end: '',
                deliveryDate: '',
                product: ''
            },
            errorsFinal:''
        }
    },
    methods:{
        ...mapActions('auctionModule', {create: 'create'}),
        addProduct(id, amount, price, isAdded){
            //add or remove object if addProduct is clicked
            if(isAdded){
                console.log('Amount of product added: '+amount)
                this.auction.products.push({id, amount, price})
            }else{
                this.auction.products.splice(this.auction.products.findIndex(product => product.id == id), 1)
            }
        },
        createAuction(){
            let _this = this
            let hasErrors = false
            const auction = {
                title: this.auction.title,
                description: this.auction.description,
                start: this.auction.start,
                end: this.auction.end,
                deliveryDate: this.auction.deliveryDate,
                products: (function (){
                    let productsNew = []
                    _this.auction.products.forEach(product => {
                        productsNew.push(product)
                    })
                    return productsNew
                })()
            }

            //validate input one last time bevore sending it, except products
            Object.keys(auction).forEach(key =>{
                if(key != 'products'){
                    this.validate(key)
                }
            })

            //check if there are any products added, if so validate if products amounts and prices are set
            if(auction.products.length > 0){
                Object.values(auction.products).forEach(product =>{
                    if(typeof product.amount == 'undefined' || typeof product.price == 'undefined'){
                        this.errors.product = 'Product wont be added if amount and price are not set'
                        hasErrors = true
                    }
                })
            }else{
                this.errors.product = 'Please add at least one product to your auction'
                hasErrors = true
            }
            
            //check if there are any errorMessages left
            // if so set final error and stop data from sending
            Object.values(this.errors).forEach(error =>{
                // ???? errors seen as empty for some reason ????
                if(error != ''){
                    this.errorsFinal = 'Please check your input there is something wrong'
                    hasErrors = true
                }
            })
            //???? why no errors if products are valid, but form input not
            console.log('are there errors: '+hasErrors)
            if(!hasErrors){
                this.create({auction})
                .then(res => {
                    res.error ? this.$toast.error(res.msg) : this.$toast.success(res.msg)
                })
            }
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
        },
    }
}

</script>

<style scoped>
    .backgroundAuction{
        background-color: #292b2c;
        color: white;
    }

    #description{
        width: 100%;
    }
</style>