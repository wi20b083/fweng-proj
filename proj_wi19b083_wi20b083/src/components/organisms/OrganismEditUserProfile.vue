<template>
    <div>
        <form @submit.prevent="doUpdate">
            <div class="row m-3">
                <div class="col">
                    <AtomLabel for="fname" content="First Name"/><br>
                    <input class="form-control" id="fname" type="text" :value="user.firstName" required/>
                </div>
                <div class="col">
                    <AtomLabel for="lname" content="Last Name"/><br>
                    <input class="form-control" id="lname" type="text" :value="user.lastName" required/>
                </div>
            </div>
            <hr class="mt-4 mb-4"/>
            <div class="row m-3">
                <div class="col">
                    <AtomLabel for="email" content="E-Mail"/><br>
                    <input class="form-control" id="email"  type="email" :value="user.email" required/>
                </div>
                <div class="col">
                    <AtomLabel for="username" content="Username"/><br>
                    <input class="form-control" id="username" type="text" :value="user.username" required/>
                </div>
            </div>
            <hr class="mt-4 mb-4"/>
            <!--
            <div class="row m-3">
                <div class="col">
                    <AtomLabel for="street" content="Streetname"/><br>
                    <input class="form-control" id="street" type="text" :value="user.street" @blur="validate('street')"/>
                    <p v-if="!!errors.street" class="errorMessage">{{errors.street}}</p>
                </div>
                <div class="col">
                    <AtomLabel for="streetnr" content="House Number"/><br>
                    <input class="form-control" id="streetnr" type="text" :value="user.streetNr" @blur="validate('streetNr')"/>
                    <p v-if="!!errors.streetNr" class="errorMessage">{{errors.streetNr}}</p>
                </div>
            </div>
            <div class="row m-3">
                <div class="col">
                    <AtomLabel for="zip" content="ZIP-Code"/><br>
                    <input class="form-control" id="zip" type="text" :value="user.zip" @blur="validate('zip')"/>
                    <p v-if="!!errors.zip" class="errorMessage">{{errors.zip}}</p>
                </div>
                <div class="col">
                    <AtomLabel for="city" content="City"/><br>
                    <input class="form-control" id="city" type="text" :value="user.city" @blur="validate('city')"/>
                    <p v-if="!!errors.city" class="errorMessage">{{errors.city}}</p>
                </div>
            </div>-->
            <p v-if="!!error" class="errorMessage">{{error}}</p>
            <div class="text-end m-3">
                <AtomButton type="submit" classname="btn btnColor" content="Submit" />
            </div>
        </form>
    </div>
</template>

<script>
import AtomLabel from '../atoms/AtomLabel.vue';
import AtomButton from '../atoms/AtomButton.vue';
import { mapActions } from 'vuex';
import router from '@/router';

export default{
    name:'OrganismEditUserProfile',
    components:{
        AtomLabel,
        AtomButton
    },
    props:['user'],
    data() {
    return{
        error:''
    }
    },
    methods:{
        ...mapActions('userModule', {update: 'update'}),
        doUpdate(){
            var id = this.user.id
            var firstName = document.getElementById('fname').value
            var lastName = document.getElementById('lname').value
            var email = document.getElementById('email').value
            var username = document.getElementById('username').value

            if(firstName != '' && lastName!= '' && email!= '' && username!= ''){
                this.error = ''
                

                this.update({id, firstName, lastName, email, username})
                router.push('profile')
            }else{
                this.error = 'Please fill out the whole form'
            }
        },
    }
}
</script>