<template>
    <div class="m-5 text-start">
        <form @submit.prevent="createAuction">
            <div class="backgroundAuction border rounded p-2">
                <div class="row m-3" >
                    <div class="col">
                        <AtomLabel for="title" content="Title"/>
                        <AtomInput  id="title" inputType="text" v-model="auction.title" @blur="validate('title')" @keypress="validate('title')"/>
                        <p v-if="!!errors.title" class="errorMessage">{{errors.title}}</p>
                    </div>
                    <div class="col">
                        <AtomLabel for="deliveryDate" content="Delivery Date"/><br>
                        <AtomInput inputType="date" id="deliveryDate" v-model="auction.deliveryDate" @blur="validate('deliveryDate')" @keypress="validate('deliveryDate')"/>
                        <p v-if="!!errors.deliveryDate" class="errorMessage">{{errors.deliveryDate}}</p>
                    </div>
                </div>
                <div class="row m-3" >
                    <div class="col">
                        <AtomLabel for="description" content="Description"/><br>
                        <textarea  class="form-control" placeholder="Add a short description for the auction" id="description" v-model="auction.description" @blur="validate('description')" @keypress="validate('description')"></textarea>
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
                        <AtomLabel for="startDate" content="Start Date"/><br>
                        <AtomInput inputType="date" id="startDate" v-model="auction.startDate" @blur="validate('startDate')" @keypress="validate('startDate')"/>
                        <p v-if="!!errors.startDate" class="errorMessage">{{errors.startDate}}</p>
                    </div>
                    <div class="col">
                        <AtomLabel for="endDate" content="End Date"/><br>
                        <AtomInput inputType="date" id="endDate" v-model="auction.endDate" @blur="validate('endDate')" @keypress="validate('endDate')"/><!--@blur="validate('end')"-->
                        <p v-if="!!errors.endDate" class="errorMessage">{{errors.endDate}}</p>
                    </div>
                </div>
            </div>
            <div class="row m-5">
                <h2 class="border-bottom border-2 border-dark">Add Products to Auction</h2>
                <table>
                    <tbody>
                        <MoleculeProductRow
                            v-for="product in products"
                            v-bind:key="product.pid"
                            :pid = "product.pid"
                            :name = "product.name"
                            :description="product.description"
                            :imgLink = "product.imgLink"
                            :alttext = "product.alttext"
                            @addProduct="addProduct"
                            :productErrorNoAttributesSet="productErrorNoAttributesSet"
                        />
                    </tbody>
                </table>
                <p v-if="productErrorNoAttributesSet!=''" class="errorMessage">{{productErrorNoAttributesSet}}</p>
                <p v-if="productError.hasError" class="errorMessage">{{productError.errorMsg}}</p>
            </div>
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
import router from '@/router';

const auctionFormSchema = Yup.object().shape({
    title: Yup.string().required('Title is required').typeError('Please enter a valid title'),
    startDate: Yup.date().required('Start Date is required').typeError('Please enter a valid date').min(new Date(), 'Date is already over'),
    endDate: Yup.date().required('End Date is required').typeError('Please enter a valid date'), //.min(Yup.ref('start'), "End date can't be before start date"),
    deliveryDate: Yup.date().required('Delivery Date is required').typeError('Please enter a valid date'), //.min(Yup.ref('start'), "Delivery date can't be before start date").min(Yup.ref('end'), "Delivery date can't be before end date"),
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
                startDate: '',
                endDate: '',
                deliveryDate: '',
            },
            addedProducts:[],
            productError: {
                hasError: false,
                errorMsg: ''
            },
            productErrorNoAttributesSet:'',
            errors:{
                title: '',
                description: '',
                startDate: '',
                endDate: '',
                deliveryDate: '',
            },
        }
    },
    methods:{
        ...mapActions('auctionModule', {create: 'create'}),
        addProduct(item, target){
            this.productError.hasError = false
            //add or remove object if addProduct is clicked
            if(target.checked){
                if(item.qty != '' && item.price != ''){
                    this.productErrorNoAttributesSet = ''
                    this.addedProducts.push(item)
                }else{
                    this.productErrorNoAttributesSet = 'Please add product amount and price to add it'
                    target.checked = false
                }
            }else{
                this.addedProducts.splice(this.addedProducts.findIndex(product => product.pid == item.pid), 1)
            }
        },
        createAuction(){
            this.productError.hasError = false
            //check if there are any products added, if so validate if products amounts and prices are set
            if(this.addedProducts.length == 0){
                this.productError.errorMsg = 'Please add at least one product'
                this.productError.hasError = true
            }

            auctionFormSchema.validate(this.auction, {abortEarly: false})
            .then(()=>{
                if(!this.productError.hasError){
                    console.log('no validation errors')

                    let _this = this
                    const auction = {
                        title: this.auction.title,
                        description: this.auction.description,
                        startDate: this.auction.startDate,
                        endDate: this.auction.endDate,
                        deliveryDate: this.auction.deliveryDate,
                        items: (function (){
                            let productsNew = []
                            _this.addedProducts.forEach(product => {
                                productsNew.push(product)
                            })
                            return productsNew
                        })(),
                        img: ['dummy.png']
                    }
                    this.create(auction)
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
                //console.log(error)
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

            //only stored temporarily
            const reader = new FileReader()
            reader.addEventListener('load', () =>{
                localStorage.setItem('newRecent-image', reader.result)
            })
            reader.readAsDataURL(uploadedFiles[0])
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