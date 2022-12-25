<template>
  <!--@submit.prevent="register"-->
  <div class="mt-3 text-start">
    <form>
      <div class="row m-3">
        <div class="col">
            <AtomLabel for="fname" content="First Name"/><br>
            <AtomInput inputType="text" placeholder="Max" id="fname" v-model="fname"/>
            <!--<p v-if="!!form.errors.fname">{{form.errors.fname}}</p>-->
        </div>
        <div class="col">
          <AtomLabel for="lname" content="Last Name"/><br>
          <AtomInput inputType="text" placeholder="Mustermann" id="lname" v-model="lname"/>
          <!--<p v-if="!!form.errors.lname">{{form.errors.lname}}</p>-->
        </div>
      </div>
      <hr/>
      <div class="row m-3">
        <div class="col">
          <AtomLabel for="email" content="E-Mail"/><br>
          <AtomInput inputType="email" placeholder="email@example.com" id="email" v-model="email"/>
          <!--<p v-if="!!form.errors.email">{{form.errors.email}}</p>-->
        </div>
        <div class="col">
          <AtomLabel for="username" content="Username"/><br>
          <AtomInput inputType="text" placeholder="Mustermax99" id="username" v-model="username"/>
          <!--<p v-if="!!form.errors.username">{{form.errors.username}}</p>-->
        </div>
      </div>
      <div class="row m-3">
        <div class="col">
          <AtomLabel for="password" content="Password"/><br>
          <AtomInput inputType="password" placeholder="Enter Password" id="password" v-model="pw"/>
          <!--<p v-if="!!form.errors.pw">{{form.errors.pw}}</p>-->
        </div>
        <div class="col">
          <AtomLabel for="pwConfirm" content="Confirm your password"/><br>
          <AtomInput inputType="password" placeholder="Enter Password again" id="pwConfirm" v-model="pwConfirm"/>
          <!--p v-if="!!form.errors.pwConfirm">{{form.errors.pwConfirm}}</p>-->
        </div>
      </div>
      <hr />
      <div class="row m-3">
        <div class="col">
          <AtomLabel for="street" content="Streetname"/><br>
          <AtomInput inputType="text" placeholder="Höchstädtplatz" id="street" v-model="street"/>
          <!--<p v-if="!!form.errors.street">{{form.errors.street}}</p>-->
        </div>
        <div class="col">
          <AtomLabel for="streetnr" content="Streetnumber"/><br>
          <AtomInput inputType="text" placeholder="6" id="streetnr" v-model="streetNr"/>
          <!--<p v-if="!!form.errors.streetNr">{{form.errors.streetNr}}</p>-->
        </div>
      </div>
      <div class="row m-3">
        <div class="col">
          <AtomLabel for="zip" content="ZIP-Code"/><br>
          <AtomInput inputType="text" placeholder="1200" id="zip" v-model="zip"/>
          <!--<p v-if="!!form.errors.zip">{{form.errors.zip}}</p>-->
        </div>
        <div class="col">
          <AtomLabel for="city" content="City"/><br>
          <AtomInput inputType="text" placeholder="Vienna" id="city" v-model="city"/>
          <!--<p v-if="!!form.errors.city">{{form.errors.city}}</p>-->
        </div>
      </div>
      <div class="text-end m-3">
        <AtomButton type="button" classname="btn btn-primary" content="Submit" @click="doRegistration"/>
      </div>
    </form>
  </div>
</template>

<script>
//import MoleculeLabelledInput from "../molecules/MoleculeLabelledInput.vue"
import AtomButton from "../atoms/AtomButton.vue"
import{mapActions} from 'vuex'
import AtomInput from '../atoms/AtomInput.vue'
import AtomLabel from "../atoms/AtomLabel.vue"
//import { object, string} from 'yup'

/*
const registrationFormSchema = object().shape({
  fname: string().required(),
  lname: string().required(),
  email: string().email().required(),
  username: string().required(),
  pw: string().min(8).required(),
  pwConfirm: string().min(8).required(),
  street: string().required(),
  streetNr: string().required(),
  zip: string().required(),
  city:string().required(),
})*/

export default {
  name: "OrganismFormUserData",
  components: { AtomButton , AtomInput, AtomLabel},
  data() {
    return{
      fname: '',
      lname: '',
      email: '',
      username: '',
      pw: '',
      pwConfirm: '',
      street: '',
      streetNr: '',
      zip: '',
      city:''
    }
  },
  methods:{
    ...mapActions('userModule', {register: 'register'}),
    doRegistration(){
      console.log('doRegistration method in OrganismRegistrationForm: '+ this.fname)

      const {fname, lname, email, username, pw, street, streetNr, zip, city} = this

      this.register({fname, lname, email, username, pw, street, streetNr, city, zip})
    }
  }
};
</script>
