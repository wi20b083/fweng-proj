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
                    <div class="row">
                        <AtomLabel for="price" content="Price"/><br>
                        <AtomInput inputType="number" id="price" v-model="bid.price" @blur="validate('price')"/>
                        <p v-if="!!errors.price" class="errorMessage">{{errors.price}}</p>
                    </div>
                
                </div>
                <div class="col">
                    <div class="border-bottom border-top p-5 backgroundStyle">
                <div class="row p-2 border-bottom" v-for="item in items" v-bind:key="item.id">
                    <div class="col">
                        <AtomText :content="item.name"/>
                    </div>
                    <div class="col">
                        <AtomThumbnail :src="item.imagesource" :alt="item.alttext" class="imageSizeSmall"/>
                    </div>
                    <div class="col">
                        <AtomText :content="'Required Quantity ' + item.requiredQuantity"/>
                    </div>
                    <div class="col">
                        <AtomInput inputType="number" min="0" step="1"/>
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
import { mapActions } from 'vuex';
import AtomText from '../atoms/AtomText.vue';
import AtomThumbnail from '../atoms/AtomThumbnail.vue';

const bidFormSchema = Yup.object().shape({
    title: Yup.string().required('Title is required'),
    start: Yup.date().required('Start Date is required').typeError('Please enter a valid date').min(new Date(), 'Date is already over'),
    end: Yup.date().required('End Date is required').typeError('Please enter a valid date').min(Yup.ref('start'), "End date can't be before start date"),
    minPrice: Yup.number().required('Minimum Price is required').typeError('Minimum Price must be a number').positive('Minimum Price must be greater than zero'),
    maxPrice: Yup.number().required('Maximum Price is required').typeError('Maximum Price must be a number').positive('Maximum Price must be greater than zero').moreThan(Yup.ref('minPrice'), 'Maximum price must be greater then minimum price'),
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
            items:[
                {
                    id: 1,
                    name: "Beer",
                    imagesource: require("../../assets/beer.png"),
                    alttext: "Image of beer",
                    requiredQuantity: 3,
                },
                {
                    id: 2,
                    name: "Wine",
                    imagesource: require("../../assets/wine.png"),
                    alttext: "image of wine",
                    requiredQuantity: 4,
                },   
                {
                    id: 3,
                    name: "Berliner Luft",
                    imagesource: require("../../assets/dummyImg.png"),
                    alttext: "image of wine",
                    requiredQuantity: 1,
                },            
            ]
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
    computed:{
        // get Products from Auction bidding on -> user can select quantity for these products
    }
}

</script>

<style scoped>

.imageSizeSmall{
    width: 30%;
}

.backgroundStyle{
    background-color: #42b98393;
}

</style>