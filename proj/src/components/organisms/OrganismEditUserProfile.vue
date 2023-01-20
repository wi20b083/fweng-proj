<template>
    <div>
        <form>
            <div class="row m-3">
                <div class="col">
                    <AtomLabel for="fname" content="First Name"/><br>
                    <input class="form-control" type="text" :value="user.fname" @blur="validate('fname')"/>
                    <p v-if="!!errors.fname" class="errorMessage">{{errors.fname}}</p>
                </div>
                <div class="col">
                    <AtomLabel for="lname" content="Last Name"/><br>
                    <input class="form-control" type="text" :value="user.lname" @blur="validate('lname')"/>
                    <p v-if="!!errors.lname" class="errorMessage">{{errors.lname}}</p>
                </div>
            </div>
            <hr class="mt-4 mb-4"/>
            <div class="row m-3">
                <div class="col">
                    <AtomLabel for="email" content="E-Mail"/><br>
                    <input class="form-control" type="email" :value="user.email" @blur="validate('email')"/>
                    <p v-if="!!errors.email" class="errorMessage">{{errors.email}}</p>
                </div>
                <div class="col">
                    <AtomLabel for="username" content="Username"/><br>
                    <input class="form-control" type="text" :value="user.username" @blur="validate('username')"/>
                    <p v-if="!!errors.username" class="errorMessage">{{errors.username}}</p>
                </div>
            </div>
            <hr class="mt-4 mb-4"/>
            <div class="row m-3">
                <div class="col">
                    <AtomLabel for="street" content="Streetname"/><br>
                    <input class="form-control" type="text" :value="user.street" @blur="validate('street')"/>
                    <p v-if="!!errors.street" class="errorMessage">{{errors.street}}</p>
                </div>
                <div class="col">
                    <AtomLabel for="streetnr" content="House Number"/><br>
                    <input class="form-control" type="text" :value="user.streetNr" @blur="validate('streetNr')"/>
                    <p v-if="!!errors.streetNr" class="errorMessage">{{errors.streetNr}}</p>
                </div>
            </div>
            <div class="row m-3">
                <div class="col">
                    <AtomLabel for="zip" content="ZIP-Code"/><br>
                    <input class="form-control" type="text" :value="user.zip" @blur="validate('zip')"/>
                    <p v-if="!!errors.zip" class="errorMessage">{{errors.zip}}</p>
                </div>
                <div class="col">
                    <AtomLabel for="city" content="City"/><br>
                    <input class="form-control" type="text" :value="user.city" @blur="validate('city')"/>
                    <p v-if="!!errors.city" class="errorMessage">{{errors.city}}</p>
                </div>
            </div>

            <!-- show only if user is admin-->
            <!--
            <div class="row m-3">
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="blocked">
                    <label class="form-check-label" for="blocked">
                        Blocked
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="unblocked">
                    <label class="form-check-label" for="unblocked">
                        Unblocked
                    </label>
                </div>
            </div>-->

            <div class="text-end m-3">
                <AtomButton type="button" classname="btn btnColor" content="Save Changes" />
            </div>
        </form>
    </div>
</template>

<script>
import AtomLabel from '../atoms/AtomLabel.vue';
import AtomButton from '../atoms/AtomButton.vue';
import * as Yup from 'yup'
import { mapActions } from 'vuex';

const updateUserFormSchema = Yup.object().shape({
    fname: Yup.string().required('First Name is required'),
    lname: Yup.string().required('Last Name is required'),
    email: Yup.string().email().required('E-Mail is required'),
    username: Yup.string().required('Username is required'),
    street: Yup.string().required('Street Name is required'),
    streetNr: Yup.number().required('House Number is required').typeError('House Number must be a number').positive('House Number must be greater than zero'),
    zip: Yup.number().required('Zip Code is required').typeError('Zip Code must be a number').positive('Zip Code must be greater than zero'),
    city: Yup.string().required('City is required'),
})

export default{
    name:'OrganismEditUserProfile',
    components:{
        AtomLabel,
        AtomButton
    },
    props:['user'],
    data() {
    return{
        form:{   
            fname: '',
            lname: '',
            email: '',
            username: '',
            street: '',
            streetNr: '',
            zip: '',
            city:''
        },
        errors:{
            fname: '',
            lname: '',
            email: '',
            username: '',
            street: '',
            streetNr: '',
            zip: '',
            city:'',
            general: ''
        }
    }
    },
    methods:{
        ...mapActions('userModule', {update: 'update'}),
        doUpdate(){
            const {fname, lname, email, username, street, streetNr, zip, city} = this.form

            if(fname != '' && lname!= '' && email!= '' && username!= '' && street!= '' && streetNr!= '' && zip!= '' && city!= ''){
                this.errors.general = null
                
                for(var errorMessage in this.errors){
                if(this.errors[errorMessage]){
                    this.validate(this.form[errorMessage])
                }
                }

                this.update({fname, lname, email, username, street, streetNr, city, zip})
            }else{
                this.errors.general = 'Please fill out the whole form'
            }
        },
        validate(field){
            updateUserFormSchema
                .validateAt(field, this.form)
                .then(()=>{
                    this.errors[field] = null
                })
                .catch((error)=>{
                    console.log(error)
                    this.errors[field] = error.message
                })

        }
    }
}
</script>