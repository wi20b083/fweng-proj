<template>
    <div class="text-start p-5 border rounded bg-dark text-white">
        <h2>Bid on Auction</h2>
        <form @submit.prevent="createBid">
            <div class="row " >
                <div class="row">
                    <AtomLabel for="deliveryDate" content="Delivery Date"/><br>
                    <input type="date" class="form-control" id="deliveryDate" v-model="bid.deliveryDate" @blur="validate('deliveryDate')"/>
                    <p v-if="!!errors.deliveryDate" class="errorMessage">{{errors.deliveryDate}}</p>
                </div>  
                <div class="row mt-2">
                    <table>
                        <tbody>
                            <MoleculeProductRow
                                v-for="product in items"
                                v-bind:key="product.pid"
                                :description="product.description"
                                :pid = "product.pid"
                                :name = "product.name"
                                :imgLink = "product.imgLink"
                                :alttext = "product.alttext"
                                @addProduct="addProduct"
                            />
                        </tbody>
                    </table>
                    <p v-if="productErrorNoAttributesSet!=''" class="errorMessage">{{productErrorNoAttributesSet}}</p>
                    <p v-if="productError.hasError" class="errorMessage">{{productError.errorMsg}}</p>
                </div>
            </div>
            <div class="row mb-2 mt-2">            
                <AtomButton content="Submit" type="submit" classname="btn btnColor" />                
            </div>
            <div class="row">
                <AtomButton content="Cancel" type="button" classname="btn btn-danger" @click="cancelCreateBid"/>
            </div>
        </form>
    </div>
</template>

<script>
import AtomLabel from '../atoms/AtomLabel.vue';
import AtomButton from '../atoms/AtomButton.vue';
import * as Yup from "yup"
import { mapActions} from 'vuex';
import MoleculeProductRow from '../molecules/product-table/MoleculeProductRow.vue';

const bidFormSchema = Yup.object().shape({
    deliveryDate: Yup.date().required('Delivery date is required').typeError('Please enter a valid date'),
})

export default{
    name:'OrganismCreateBid',
    components:{
        AtomLabel,
        AtomButton,
        MoleculeProductRow
    },
    props:['items', 'auctionID', 'userID'],
    data(){
        return{
            bid:{
                deliveryDate: '',
            },
            addedProducts:[],
            productErrorNoAttributesSet:'',
            productError: {
                hasError: false,
                errorMsg: ''
            },
            errors:{
                deliveryDate: '',
                item: ''
            },
        }
    },
    methods:{
        ...mapActions('bidModule', {create: 'create'}),
        ...mapActions('auctionModule', {buttonClicked:'buttonClicked', addBid : 'addBid'}),
        cancelCreateBid(){
            this.buttonClicked(false)
        },
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
        createBid(){
            this.productError.hasError = false
            //check if there are any products added, if so validate if products amounts and prices are set
            if(this.addedProducts.length == 0){
                this.productError.errorMsg = 'Please add at least one product'
                this.productError.hasError = true
            }

            bidFormSchema.validate(this.bid, {abortEarly: false})
            .then(()=>{
                if(!this.productError.hasError){
                    console.log('no validation errors')
                    let _this = this
                    const bid = {
                        aid: this.auctionID,
                        deliveryDate: this.bid.deliveryDate,
                        items:(function (){
                            let productsNew = []
                            _this.addedProducts.forEach(product => {
                                productsNew.push(product)
                            })
                            return productsNew
                        })()
                    }
                    this.create(bid)
                    .then(res => {
                        this.buttonClicked(false)
                        res.error ? this.$toast.error(res.msg) : this.$toast.success(res.msg)
                    })
                }
            }).catch((err)=>{
                err.inner.forEach((error) =>{
                    this.errors = {...this.errors, [error.path]: error.message}
                })
            }) 
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