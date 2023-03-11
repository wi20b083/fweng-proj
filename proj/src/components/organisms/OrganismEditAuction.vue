<template>
    <div class="m-5 text-start">
        <form @submit.prevent="createAuction">
            <div class="backgroundAuction border rounded p-2">
                <div class="row m-3" >
                    <div class="col">
                        <AtomLabel for="auctionPic" content="Select one or more images"/>
                        <input class="form-control" id="auctionPic" type="file" accept="image/*" content="Upload one or more images" multiple @change="validateImages"/>
                    </div>
                </div>
                <div class="row m-3" >
                    <div class="col">
                        <AtomLabel for="startDate" content="Start Date"/><br>
                        <input class="form-control" type="text" id="startDate" :value="auction.startDate" />
                        <p v-if="!!errors.startDate" class="errorMessage">{{errors.startDate}}</p>
                    </div>
                    <div class="col">
                        <AtomLabel for="endDate" content="End Date"/><br>
                        <input class="form-control" inputType="text" id="endDate" :value="auction.endDate" />
                        <p v-if="!!errors.endDate" class="errorMessage">{{errors.endDate}}</p>
                    </div>
                </div>
                <div class="row m-3">
                    <div class="col">
                        <AtomLabel for="deliveryDate" content="Delivery Date"/><br>
                        <input class="form-control" inputType="date" id="deliveryDate" :value="auction.deliveryDate" />
                        <p v-if="!!errors.deliveryDate" class="errorMessage">{{errors.deliveryDate}}</p>
                    </div>
                    <div class="col">
                        <AtomLabel for="categories" content="Choose Category"/><br>

                        <div v-for="category in auction.categories" v-bind:key="category" class="form-check">
                            <input class="form-check-input" type="checkbox" :value="category" :id="category" checked>
                            <label class="form-check-label" :for="category">
                                {{ category }}
                            </label>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div class="row m-5">
                <h2 class="border-bottom border-2 border-dark">Edit Products</h2>

                <OrganismProductTable :products="auction.auctionitems"/>
            </div>
            <p v-if="!!errors.general" class="errorMessage">{{errors.general}}</p>
            <div class="row m-3">
                <AtomButton content="Submit" type="submit" classname="btn btnColor"/>
            </div>
        </form>
    </div>
</template>

<script>
import AtomLabel from '../atoms/AtomLabel.vue';
import AtomButton from '../atoms/AtomButton.vue';
import * as Yup from "yup"
import { mapActions } from 'vuex';
import OrganismProductTable from './OrganismProductTable.vue';
import router from '@/router';


const auctionFormSchema = Yup.object().shape({
    startDate: Yup.date().required('Start Date is required').typeError('Please enter a valid date').min(new Date(), 'Date is already over'),
    endDate: Yup.date().required('End Date is required').typeError('Please enter a valid date').min(Yup.ref('start'), "End date can't be before start date"),
    deliveryDate: Yup.date().required('Delivery Date is required').typeError('Please enter a valid date').min(Yup.ref('start'), "Delivery date can't be before start date").min(Yup.ref('end'), "Delivery date can't be before end date"),
})

export default{
    name:'OrganismEditAuction',
    props:['auction'],
    components:{
        AtomLabel,
        AtomButton,
        OrganismProductTable

    },
    data(){
        return{
            errors:{
                title: '',
                startDate: '',
                endDate: '',
                deliveryDate: '',
                general: ''

            }
        }
    },
    methods:{
        ...mapActions('auctionModule', {update: 'update'}),
        createAuction(){
            //id, startDateTime, deliveryDateTime, endDateTime
            const id= this.auction.id
            const startDateTime = this.auction.startDate
            const deliveryDateTime = this.auction.deliveryDate
            const endDateTime = this.auction.endDate
            console.log('hallo?')
            if(startDateTime != '' && deliveryDateTime!= ''&& endDateTime!=''){
                this.errors.general = null
                this.update({id, startDateTime, deliveryDateTime, endDateTime})
                .then(res => {
                    res.error ? this.$toast.error(res.msg) : this.$toast.success(res.msg)
                })
                // noch überlegen, ob user wenn über userProfileAuctions edited dorthin zurück geleitet wird
                router.push('/')
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

<style scoped>

.backgroundAuction{
    background-color: #292b2c;
    color: white;
}

</style>