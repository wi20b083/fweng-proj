<template>
    <div class="ps-5 pe-5 ms-5 me-5">
        <form @submit.prevent="changePw(userID)" class="border rounded p-5 backgroundStyling">
            <div class="row mb-2">
                <AtomLabel for="pwOld" content="Current Password"/>
                <input id="pwOld" type="password" class="form-control" v-model="this.form.pwOld" @blur="validate('pwOld')"/>
                <p v-if="!!errors.pwOld" class="errorMessage">{{errors.pwOld}}</p>

            </div>
            <div class="row mb-2">
                <AtomLabel for="pwNew" content="New Password"/>
                <input id="pwNew" type="password" class="form-control" v-model="this.form.pwNew" @blur="validate('pwNew')"/>
                <p v-if="!!errors.pwNew" class="errorMessage">{{errors.pwNew}}</p>
            </div>
            <div class="row mb-4">
                <AtomLabel for="pwNewConf" content="Confirm new Password"/>
                <input id="pwNewConf" type="password" class="form-control" v-model="this.form.pwNewConf" @blur="validate('pwNewConf')"/>
                <p v-if="!!errors.pwNewConf" class="errorMessage">{{errors.pwNewConf}}</p>
            </div>

            <p v-if="!!errors.general" class="errorMessage">{{errors.general}}</p>

            <div class="row">
                <AtomButton type="submit" content="Change Password" class="btn btnColor"/>
            </div>
        </form>
    </div>
</template>

<script>
import * as Yup from 'yup'
import AtomLabel from '../atoms/AtomLabel.vue';
import AtomButton from '../atoms/AtomButton.vue';
import { mapActions } from 'vuex';
import router from '@/router';

const pwResetSchema = Yup.object().shape({
    pwOld: Yup.string().required('Old password is required'),
    pwNew: Yup.string().required('Password is required').min(8),
    pwNewConf: Yup.string().required('Password is required')

})

export default{
    name:'OrganismResetPassword',
    components:{
        AtomLabel,
        AtomButton
    },
    props:['userID'],
    data(){
        return{
            form:{
                pwOld: '',
                pwNew: '',
                pwNewConf: ''
            },
            errors:{
                pwOld: '',
                pwNew: '',
                pwNewConf: '',
                general: ''
            }
        }
    },
    methods:{
        ...mapActions('userModule', {resetPw: 'resetPassword'}),
        changePw(uid){
            pwResetSchema.validate(this.form, {abortEarly: false})
            .then(()=>{
                    console.log('no validation errors')
                    const pw = {
                        oldPW: this.form.pwOld,
                        newPW: this.form.pwNew,
                    }
                    console.log(JSON.stringify(pw))
                    this.resetPw({uid, pw})
                    .then(res => {
                        res.error ? this.$toast.error(res.msg) : this.$toast.success(res.msg) && router.push('profile')
                    })
                
            }).catch((err)=>{
                err.inner.forEach((error) =>{
                    this.errors = {...this.errors, [error.path]: error.message}
                })
            }) 
            
        },
        validate(field){
            pwResetSchema
                .validateAt(field, this.form)
                .then(()=>{
                    this.errors[field] = null
                })
                .catch((error)=>{
                    this.errors[field] = error.message
                })
        }
    }
}

</script>

<style scoped>

.backgroundStyling{
    background-color: #292b2c;
    color: white;
}


</style>