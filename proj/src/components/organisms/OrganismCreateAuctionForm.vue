<template>
    <div class="m-5 text-start">
        <form @submit.prevent="createAuction">
            <div class="row m-3" >
                <div class="col">
                    <AtomLabel for="title" content="Title"/><br>
                    <AtomInput inputType="text" placeholder="Auction Title" id="title" v-model="auction.title" @blur="validate('title')"/>
                    <p v-if="!!errors.title" class="errorMessage">{{errors.title}}</p>
                </div>
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
                    <AtomInput inputType="date" id="end" v-model="auction.start" @blur="validate('end')"/>
                    <p v-if="!!errors.end" class="errorMessage">{{errors.end}}</p>
                </div>
            </div>
            <div class="row m-3" >
                <div class="col">
                    <AtomLabel for="minPrice" content="Min Price"/><br>
                    <AtomInput inputType="number" id="minPrice" v-model="auction.minPrice" @blur="validate('minPrice')"/>
                    <p v-if="!!errors.minPrice" class="errorMessage">{{errors.minPrice}}</p>
                </div>
                <div class="col">
                    <AtomLabel for="maxPrice" content="Max Price"/><br>
                    <AtomInput inputType="number" id="maxPrice" v-model="auction.maxPrice" @blur="validate('maxPrice')"/>
                    <p v-if="!!errors.maxPrice" class="errorMessage">{{errors.maxPrice}}</p>
                </div>
            </div>
            <div class="row m-3">
                <div class="col">
                    <AtomLabel for="minDeliveryDate" content="Earliest Delivery Date"/><br>
                    <AtomInput inputType="date" id="minDeliveryDate" v-model="auction.deliveryDate" @blur="validate('minDeliveryDate')"/>
                    <p v-if="!!errors.minDeliveryDate" class="errorMessage">{{errors.minDeliveryDate}}</p>
                </div>

                <div class="col">
                    <AtomLabel for="maxDeliveryDate" content="Latest Delivery Date"/><br>
                    <AtomInput inputType="date" id="maxDeliveryDate" v-model="auction.maxDeliveryDate" @blur="validate('maxDeliveryDate')"/>
                    <p v-if="!!errors.maxDeliveryDate" class="errorMessage">{{errors.maxDeliveryDate}}</p>
                </div>
            </div>
            <div class="row m-3">
                <div class="col">
                    <AtomLabel for="categories" content="Choose Category"/><br>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="beer">
                        <label class="form-check-label" for="beer">
                            Beer
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="wine">
                        <label class="form-check-label" for="wine">
                            Wine
                        </label>
                    </div>
                </div>
            </div>
            <p v-if="!!errors.general" class="errorMessage">{{errors.general}}</p>
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


const auctionFormSchema = Yup.object().shape({
    title: Yup.string().required('Title is required'),
    start: Yup.date().required('Start Date is required').typeError('Please enter a valid date').min(new Date(), 'Date is already over'),
    end: Yup.date().required('End Date is required').typeError('Please enter a valid date').min(Yup.ref('start'), "End date can't be before start date"),
    minPrice: Yup.number().required('Minimum Price is required').typeError('Minimum Price must be a number').positive('Minimum Price must be greater than zero'),
    maxPrice: Yup.number().required('Maximum Price is required').typeError('Maximum Price must be a number').positive('Maximum Price must be greater than zero').moreThan(Yup.ref('minPrice'), 'Maximum price must be greater then minimum price'),
    minDeliveryDate: Yup.date().required('Earliest delivery Date is required').typeError('Please enter a valid date').min(Yup.ref('start'), "Delivery date can't be before start date").min(Yup.ref('end'), "Delivery date can't be before end date").min(Yup.ref('start'), "Delivery date can't be before start date"),
    maxDeliveryDate: Yup.date().required('Latest delivery Date is required').typeError('Please enter a valid date').min(Yup.ref('start'), "Delivery date can't be before start date").min(Yup.ref('minDeliveryDate'), "Latest delivery date can't be before earliesr delivery date").min(Yup.ref('end'), "Delivery date can't be before end date"),
})

export default{
    name:'OrganismCreateAuctionForm',
    components:{
        AtomInput,
        AtomLabel,
        AtomButton,


    },
    data(){
        return{
            auction:{
                title: '',
                start: '',
                end: '',
                minPrice: '',
                maxPrice: '',
                minDeliveryDate: '',
                maxDeliveryDate: '',
                
            },
            errors:{
                title: '',
                start: '',
                end: '',
                minPrice: '',
                maxPrice: '',
                minDeliveryDate: '',
                maxDeliveryDate: '',
                general: ''

            }
        }
    },
    methods:{
        ...mapActions('auctionModule', {create: 'create'}),
        createAuction(){
            console.log('create Auction method in Organism')
            const {title, start, end, minPrice, maxPrice, deliveryDate} = this.auction

            if(title != '' && start!= '' && end!= '' && minPrice!= '' && maxPrice!= '' && deliveryDate!= ''){
                this.errors.general = null
                this.create({title, start, end, minPrice, maxPrice, deliveryDate})
            }else{
                this.errors.general = 'Please fill out the whole form'
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
        }
    }
}

</script>