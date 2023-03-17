<template>
  <!--@submit.prevent="register"-->
  <div class="m-5 text-start">
    <form>
      <div class="row m-3">
        <div class="col">
            <AtomLabel for="fname" content="First Name"/><br>
            <AtomInput inputType="text" placeholder="Max" id="fname" v-model="form.fname" @blur="validate('fname')"/>
            <p v-if="!!errors.fname" class="errorMessage">{{errors.fname}}</p>
        </div>
        <div class="col">
          <AtomLabel for="lname" content="Last Name"/><br>
          <AtomInput inputType="text" placeholder="Mustermann" id="lname" v-model="form.lname" @blur="validate('lname')"/>
          <p v-if="!!errors.lname" class="errorMessage">{{errors.lname}}</p>
        </div>
      </div>
      <hr class="mt-4 mb-4"/>
      <div class="row m-3">
        <div class="col">
          <AtomLabel for="email" content="E-Mail"/><br>
          <AtomInput inputType="email" placeholder="email@example.com" id="email" v-model="form.email" @blur="validate('email')"/>
          <p v-if="!!errors.email" class="errorMessage">{{errors.email}}</p>
        </div>
        <div class="col">
          <AtomLabel for="username" content="Username"/><br>
          <AtomInput inputType="text" placeholder="Mustermax99" id="username" v-model="form.username" @blur="validate('username')"/>
          <p v-if="!!errors.username" class="errorMessage">{{errors.username}}</p>
        </div>
      </div>
      <div class="row m-3">
        <div class="col">
          <AtomLabel for="password" content="Password"/><br>
          <AtomInput inputType="password" placeholder="Enter Password" id="password" v-model="form.pw" @blur="validate('pw')"/>
          <p v-if="!!errors.pw" class="errorMessage">{{errors.pw}}</p>
        </div>
        <div class="col">
          <AtomLabel for="pwConfirm" content="Confirm your password"/><br>
          <AtomInput inputType="password" placeholder="Enter Password again" id="pwConfirm" v-model="form.pwConfirm" @blur="validate('pwConfirm')"/>
          <p v-if="!!errors.pwConfirm" class="errorMessage">{{errors.pwConfirm}}</p>
        </div>
      </div>
      <p v-if="!!errors.general" class="errorMessage">{{errors.general}}</p>
      <div class="text-end m-3">
        <AtomButton type="button" classname="btn btnColor" content="Submit" @click="doRegistration"/>
      </div>
    </form>
  </div>
</template>

<script>
import AtomButton from "../atoms/AtomButton.vue"
import{mapActions, mapState} from 'vuex'
import AtomInput from '../atoms/AtomInput.vue'
import AtomLabel from "../atoms/AtomLabel.vue"
import * as Yup from "yup"
import router from "@/router"

const registrationFormSchema = Yup.object().shape({
  fname: Yup.string().required('First Name is required'),
  lname: Yup.string().required('Last Name is required'),
  email: Yup.string().email().required('E-Mail is required'),
  username: Yup.string().required('Username is required'),
  pw: Yup.string().min(8).required('Password is required').oneOf([Yup.ref('pwConfirm'), null], 'Passwords must match'),
  pwConfirm: Yup.string().required('Password is required').oneOf([Yup.ref('pw'), null], 'Passwords must match'),
})

export default {
  name: "OrganismFormUserData",
  components: { AtomButton , AtomInput, AtomLabel},
  data() {
    return{
      form:{
        fname: '',
        lname: '',
        email: '',
        username: '',
        pw: '',
        pwConfirm: '',
      },
      errors:{
        fname: '',
        lname: '',
        email: '',
        username: '',
        pw: '',
        pwConfirm: '',
        general: '',
      }
    }
  },
  methods:{
    ...mapActions('userModule', {register: 'register'}),
    doRegistration(){      
      const firstname = this.form.fname
      const lastname = this.form.lname
      const username = this.form.username
      const password = this.form.pw
      const email = this.form.email

      if(firstname != '' && lastname!= '' && email!= '' && username!= '' && password!= ''){
        this.errors.general = null

        this.register(firstname, lastname, email, username, password)
        .then(res => {
          res.error ? this.$toast.error(res.msg) : (this.$toast.success(res.msg) && router.push('login'))
        })      
      }else{
        this.errors.general = 'Please fill out the whole form'
      }
    },
    validate(field){
      registrationFormSchema
        .validateAt(field, this.form)
        .then(()=>{
          this.errors[field] = null
        })
        .catch((error)=>{
          console.log(error)
          this.errors[field] = error.message
        })

    }
  },
  computed:{
    ...mapState('userModule', {
      requestMessage: state => state.requestMessage
    })
  }
};
</script>

