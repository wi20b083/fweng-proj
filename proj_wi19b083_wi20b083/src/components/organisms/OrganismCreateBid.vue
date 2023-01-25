<template>
    <div class="text-start p-3 border-bottom border-top">
        <h2>Bid on Auction</h2>
        <form @submit.prevent="createBid">
            <div class="row">
                <div class="row">
                    <AtomLabel for="deliveryDate" content="Delivery Date"/><br>
                    <input type="date" class="form-control" id="deliveryDate" v-model="bid.deliveryDate" @blur="validate('deliveryDate')"/>
                    <p v-if="!!errors.deliveryDate" class="errorMessage">{{errors.deliveryDate}}</p>
                </div>
                    
                <div class="row border rounded backgroundStyle mt-3 mb-3 p-4">
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
                            <input class="form-control" inputType="number" min="0" step="1" :value="item.amount" id="amount"/>
                        </div>
                        <div class="col">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" name="item" :value="item.id" id="flexCheckDefault" >
                                <label class="form-check-label" for="flexCheckDefault">
                                    Add
                                </label>
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
import AtomLabel from '../atoms/AtomLabel.vue';
import AtomButton from '../atoms/AtomButton.vue';
import * as Yup from "yup"
import { mapActions, mapGetters} from 'vuex';
import AtomText from '../atoms/AtomText.vue';
import AtomThumbnail from '../atoms/AtomThumbnail.vue';

const bidFormSchema = Yup.object().shape({
    deliveryDate: Yup.date().required('Delivery date is required').typeError('Please enter a valid date'),
})

export default{
    name:'OrganismCreateBid',
    components:{
    AtomLabel,
    AtomButton,
    AtomText,
    AtomThumbnail
    },
    props:['items', 'auctionID', 'userID'],
    data(){
        return{
            bid:{
                deliveryDate: '',               
            },
            errors:{
                deliveryDate: '',
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
            const deliveryDate = this.bid.deliveryDate
            //const auctionID = this.auctionID
            //const userID = this.userID

            var checkboxes= document.getElementsByName('item')

            var valuesCheckboxes = []

            for (var i = 0; i < checkboxes.length; i++) {
                if (checkboxes[i].checked) {
                    valuesCheckboxes.push(checkboxes[i].value )
                }
            }
            // items:[{productId, amount, costPerUnit}]
            
            if(deliveryDate != ''){
                this.errors.general = null
                this.create()
            }else{
                this.errors.general = 'Please fill out the whole form'
            }
        },
        validate(field){
            bidFormSchema
            .validateAt(field, this.bid)
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
        ...mapGetters('itemsModule', [
            'getItemById'
        ]),
    }
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