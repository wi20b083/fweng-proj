<template>
    <div class="text-start p-3 border-bottom border-top">
        <h2>Bid on Auction</h2>
        <form @submit.prevent="createBid">
            <div class="row">
                <div class="col">
                    
                    <div class="row">
                        <AtomLabel for="deliveryDate" content="Delivery Date"/><br>
                        <AtomInput inputType="date" id="deliveryDate" v-model="bid.deliveryDate" @blur="validate('deliveryDate')"/>
                        <p v-if="!!errors.deliveryDate" class="errorMessage">{{errors.deliveryDate}}</p>
                    </div>
                
                </div>
                <div class="col">
                    <div class="border-bottom border-top p-5 backgroundStyle">
                <div class="row p-2 border-bottom" v-for="item in items" v-bind:key="item.id">
                    <div class="col">
                        <AtomThumbnail :src="item.imagesource" :alt="item.alttext" class="imageSizeSmall"/>
                    </div>
                    <div class="col">
                        <AtomText :content="item.name"/>
                    </div>
                    <div class="col">
                        <AtomLabel for="price" content="Price"/>
                        <input class="form-control" type="number" min="0" :value="item.price" id="price"/>
                    </div>
                    <div class="col">
                        <AtomLabel for="amount" content="amount"/>
                        <input inputType="number" min="0" step="1" :value="item.amount" id="amount"/>
                    </div>
                </div>
            </div>
                </div>
            </div>
            
            
            <p v-if="!!errors.general" class="errorMessage">{{errors.general}}</p>
            <div class="row p-2">
                <div class="col-auto">                
                    <AtomButton content="Submit" type="submit" classname="btn btnColor"/>
                </div>
                <div class="col-auto">
                    <AtomButton content="Cancel" type="button" classname="btn btn-danger" @click="cancelCreateBid"/>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
import AtomInput from '../atoms/AtomInput.vue';
import AtomLabel from '../atoms/AtomLabel.vue';
import AtomButton from '../atoms/AtomButton.vue';
import * as Yup from "yup"
import { mapActions} from 'vuex';
import AtomText from '../atoms/AtomText.vue';
import AtomThumbnail from '../atoms/AtomThumbnail.vue';

const bidFormSchema = Yup.object().shape({
    title: Yup.string().required('Title is required'),
    start: Yup.date().required('Start Date is required').typeError('Please enter a valid date').min(new Date(), 'Date is already over'),
    end: Yup.date().required('End Date is required').typeError('Please enter a valid date').min(Yup.ref('start'), "End date can't be before start date"),
})

export default{
    name:'OrganismCreateBid',
    components:{
    AtomInput,
    AtomLabel,
    AtomButton,
    AtomText,
    AtomThumbnail
    },
    props:['items'],
    data(){
        return{
            bid:{
                title: '',
                deliveryDate: '',
                price: '',
                //add products with quantity -> beer: number?
                
            },
            errors:{
                title: '',
                deliveryDate: '',
                price: '',
                general: ''
            },
        }
    },
    methods:{
        ...mapActions('bidModule', {create: 'create'}),
        ...mapActions('auctionModule', {buttonClicked:'buttonClicked'}),
        cancelCreateBid(){
            this.buttonClicked(false)
        },
        createBid(){
            console.log('create bid method in Organism')
            const {title, start, end, minPrice, maxPrice} = this.bid

            if(title != '' && start!= '' && end!= '' && minPrice!= '' && maxPrice!= ''){
                this.errors.general = null
                this.create({title, start})
            }else{
                this.errors.general = 'Please fill out the whole form'
            }
        },
        validate(field){
            bidFormSchema
            .validateAt(field, this.auction)
            .then(()=>{
                this.errors[field] = ''
            })
            .catch((error)=>{
                console.log(error)
                this.errors[field] = error.message
            })
        }
    },
}

</script>

<style scoped>

.imageSizeSmall{
    width: 50%;
}

.backgroundStyle{
    background-color: #42b98393;
}

</style>