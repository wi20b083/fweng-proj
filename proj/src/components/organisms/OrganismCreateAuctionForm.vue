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
                    <AtomLabel for="category" content="Choose Category"/>
                    <select id="category" class="form-select" >
                    <option selected value="beverage">Beverage</option>
                    <option value="beer">Beer</option>
                    <option value="wine">Wine</option>
                </select>
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
})

export default{
    name:'OrganismCreateAuctionForm',
    components:{
        AtomInput,
        AtomLabel,
        AtomButton
    },
    data(){
        return{
            auction:{
                title: '',
                start: '',
                end: '',
            },
            errors:{
                title: '',
                start: '',
                end: '',
            }
        }
    },
    methods:{
        ...mapActions('auctionModule', {create: 'create'}),
        createAuction(){
            console.log('create Auction method in Organism')
            const {title, start} = this.auction

            if(title != '' && start!= '' ){
                this.errors.general = null
                this.create({title, start})
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
        }
    }
}

</script>