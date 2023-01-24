<template>
    <div class="m-5 text-start">
        <form @submit.prevent="createAuction">
            <div class="backgroundAuction border rounded p-2">
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
                        <AtomInput inputType="date" id="end" v-model="auction.start" @blur="validate('end')"/>
                        <p v-if="!!errors.end" class="errorMessage">{{errors.end}}</p>
                    </div>
                </div>
                <div class="row m-3" >
                    <div class="col">
                        <AtomLabel for="total" content="Total Price"/><br>
                        <AtomInput inputType="number" id="total" v-model="auction.total" @blur="validate('total')"/>
                        <p v-if="!!errors.total" class="errorMessage">{{errors.total}}</p>
                    </div>
                    <div class="col">
                        <AtomLabel for="deliveryDate" content="Delivery Date"/><br>
                        <AtomInput inputType="date" id="deliveryDate" v-model="auction.deliveryDate" @blur="validate('deliveryDate')"/>
                        <p v-if="!!errors.deliveryDate" class="errorMessage">{{errors.deliveryDate}}</p>
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
            </div>
            <div class="row m-5">
                <h2 class="border-bottom border-2 border-dark">Add Products to Auction</h2>

                <OrganismProductTable />
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
import router from '@/router';
import OrganismProductTable from './OrganismProductTable.vue';


const auctionFormSchema = Yup.object().shape({
    start: Yup.date().required('Start Date is required').typeError('Please enter a valid date').min(new Date(), 'Date is already over'),
    end: Yup.date().required('End Date is required').typeError('Please enter a valid date').min(Yup.ref('start'), "End date can't be before start date"),
    deliveryDate: Yup.date().required('Delivery Date is required').typeError('Please enter a valid date').min(Yup.ref('start'), "Delivery date can't be before start date").min(Yup.ref('end'), "Delivery date can't be before end date"),
})

export default{
    name:'OrganismCreateAuctionForm',
    components:{
        AtomInput,
        AtomLabel,
        AtomButton,
        OrganismProductTable

    },
    props:[
        'userID'
    ],
    data(){
        return{
            auction:{
                start: '',
                end: '',
                //minPrice: '',
                deliveryDate: '',
                
            },
            errors:{
                start: '',
                end: '',
                //minPrice: '',
                deliveryDate: '',
                general: ''
            }
        }
    },
    methods:{
        ...mapActions('auctionModule', {create: 'create'}),
        createAuction(){
            console.log('create Auction method in Organism')
            const startDateTime = this.auction.start
            const endDateTime = this.auction.end
            const deliveryDateTime = this.auction.deliveryDate
            const userId = this.userID
            // DATA FORMAT !!! ????
            //userId, startDateTime, deliveryDateTime, endDateTime
            if(startDateTime != "" && endDateTime != "" && deliveryDateTime != ""){
                this.errors.general = null
                this.create({userId, startDateTime, deliveryDateTime, endDateTime})

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
        },
        loadAddItems(){
            router.push('addProduct')
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