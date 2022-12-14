<template>
  <form @submit.prevent="register">
    <div class="mt-3 text-start">
      <div class="col">
        <AtomHeader is="h3" content="General" />
        <div class="row">
          <MoleculeLabelledInput
            id="fname"
            inputType="text"
            label="First name"
            placeholder="Max"
            v-model:value="form.values.fname"
            @blur="validate('fname')"
          />
          <p v-if="!!form.errors.fname">
              {{form.errors.fname}}
            </p>
        </div>
        <div class="row">
          <MoleculeLabelledInput
            id="lname"
            inputType="text"
            label="Last name"
            placeholder="Mustermann"
            v-model:value="form.values.lname"
            @blur="validate('lname')"
          />
          <p v-if="!!form.errors.lname">
              {{form.errors.lname}}
            </p>
        </div>
        <div class="row">
          <MoleculeLabelledInput
            id="email"
            inputType="email"
            label="E-Mail"
            placeholder="email@example.com"
            v-model:value="form.values.email"
            @blur="validate('email')"
          />
          <p v-if="!!form.errors.email">
              {{form.errors.email}}
            </p>
        </div>
        <hr />
        <AtomHeader is="h3" content="Login Data" />
        <div class="row">
          <MoleculeLabelledInput
            id="uname"
            inputType="text"
            label="Username"
            placeholder="Mustermax99"
            v-model:value="form.values.username"
            @blur="validate('username')"
          />
          <p v-if="!!form.errors.username">
              {{form.errors.username}}
            </p>
        </div>
        <div class="row">
          <MoleculeLabelledInput
            id="pw"
            inputType="password"
            label="Password"
            v-model:value="form.values.pw"
            @blur="validate('pw')"
          />
          <p v-if="!!form.errors.pw">
              {{form.errors.pw}}
            </p>
        </div>
        <div class="row">
          <MoleculeLabelledInput
            id="pw_confirm"
            inputType="password"
            label="Confirm your password"
            placeholder=""
            v-model:value="form.values.pwConfirm"
            @blur="validate('pwConfirm')"
          />
          <p v-if="!!form.errors.pwConfirm">
              {{form.errors.pwConfirm}}
            </p>
        </div>
        <hr />
        <AtomHeader is="h3" content="Address" />
        <div class="row">
          <div class="col">
            <MoleculeLabelledInput
              id="street"
              inputType="text"
              label="Street"
              placeholder="Höchstädtplatz"
              v-model:value="form.values.street"
              @blur="validate('street')"
            />
            <p v-if="!!form.errors.street">
              {{form.errors.street}}
            </p>
          </div>
          <div class="col-3">
            <MoleculeLabelledInput
              id="streetnr"
              inputType="text"
              label="Streetnumber"
              placeholder="6"
              v-model:value="form.values.streetNr"
              @blur="validate('streetNr')"
            />
            <p v-if="!!form.errors.streetNr">
              {{form.errors.streetNr}}
            </p>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <MoleculeLabelledInput
              id="zip"
              inputType="text"
              label="ZIP-Code"
              placeholder="1200"
              v-model:value="form.values.zip"
              @blur="validate('zip')"
            />
            <p v-if="!!form.errors.zip">
              {{form.errors.zip}}
            </p>
          </div>
          <div class="col">
            <MoleculeLabelledInput
              id="city"
              inputType="text"
              label="City"
              placeholder="Vienna"
              v-model:value="form.values.city"
              @blur="validate('city')"
            />
            <p v-if="!!form.errors.city">
              {{form.errors.city}}
            </p>
          </div>
        </div>
        <div class="text-end">
          <AtomButton
            type="submit"
            classname="btn btn-primary"
            content="Submit"
          />
        </div>
      </div>
    </div>
  </form>
</template>

<script>
import MoleculeLabelledInput from "../molecules/MoleculeLabelledInput.vue";
import AtomButton from "../atoms/AtomButton.vue";
import AtomHeader from "../atoms/AtomHeader.vue";
import { object, string} from 'yup'
import axios from 'axios'


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
})

export default {
  name: "OrganismFormUserData",
  components: { MoleculeLabelledInput, AtomButton, AtomHeader },
  data: () =>({
    form:{
      values:{
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
      },
      errors:{
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
    }
  }),

  methods:{
    async register(){
      console.log('email: ' + this.form.values.email)
      console.log('fname: '+this.form.values.fname)

      registrationFormSchema
        .validate(this.form.values, {
          abortEarly: false
        })
        .then(()=> {
          this.form.errors = {
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
          //request to backend to create new user
          this.createUser(this.form.values)
            
        })
        .catch((error) => {
          error.inner.forEach(() =>{
            this.form.errors[error.path] = error.message
          })
        })
    },
    validate(input){
      console.log('validate: '+input)
      registrationFormSchema
        .validateAt(input, this.form.values)
        .then(()=>{
          this.form.errors[input] = ''
        })
        .catch((error) => {
          console.log(error)
          this.form.errors[input] = error.message
        })
      
    },
    async createUser(userData){
      try{
        const response = await axios.post('http://localhost:8080/users',{
        // Data to be sent to the server
        userData})
        console.log(response)
        //hier zu login weiterleiten wenn user created

      }catch(error){
        console.error(error)
      }   
    }
  }
};
</script>
