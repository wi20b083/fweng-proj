<template>
    <div class="ps-5 pe-5">
        <form @submit.prevent="changePw">
            <div class="row mt-2">
                <AtomLabel for="pwOld" content="Current Password"/>
                <input id="pwOld" type="password" class="form-control"/>
            </div>
            <div class="row mt-2">
                <AtomLabel for="pwNew" content="New Password"/>
                <input id="pwNew" type="password" class="form-control" @blur="validate('pwNew')"/>
                <p v-if="!!errors.pwNew" class="errorMessage">{{errors.pwNew}}</p>
            </div>
            <div class="row mt-2">
                <AtomLabel for="pwNewConf" content="Confirm new Password"/>
                <input id="pwNewConf" type="password" class="form-control" @blur="validate('pwNewConf')"/>
                <p v-if="!!errors.pwNewConf" class="errorMessage">{{errors.pwNewConf}}</p>
            </div>

            <p v-if="!!errors.general" class="errorMessage">{{errors.general}}</p>

            <div class="row mt-3">
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

const pwResetSchema = Yup.object().shape({
    pwNew: Yup.string().min(8).required('Password is required').oneOf([Yup.ref('pwConfirm'), null], 'Passwords must match'),
    pwNewConf: Yup.string().required('Password is required').oneOf([Yup.ref('pw'), null], 'Passwords must match'),

})

export default{
    name:'OrganismResetPassword',
    components:{
        AtomLabel,
        AtomButton
    },
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
        ...mapActions('userModule', {changePw: 'resetPassword'}),
        changePw(){
            const {pwOld, pwNew} = this.form
            if(pwOld != '' && pwNew != ''){
                this.errors.general = null
                this.changePw({pwOld, pwNew})
            }else{
                this.errors.general = 'Please fill out the whole form'
            }
        },
        validate(field){
            pwResetSchema
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