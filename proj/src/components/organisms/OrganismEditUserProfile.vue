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
                .then(res => {
                    res.error ? this.$toast.error(res.msg) : this.$toast.success(res.msg)
                })     
                router.push('profile')
            }else{
                this.error = 'Please fill out the whole form'
            }
        },
    }
}
</script>