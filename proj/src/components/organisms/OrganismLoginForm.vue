<template>
  <div class="m-5 text-start ">
    <div class="">
      <form>
        <div class="row mb-3">
          <AtomLabel for="username" content="Username"/><br>
          <AtomInput inputType="text" placeholder="Mustermax99" id="username" v-model="form.username" @blur="validate('username')"/>
          <p v-if="!!errors.username" class="errorMessage">{{errors.username}}</p>
        </div>
        <div class="row mb-3">
          <AtomLabel for="password" content="Password"/><br>
          <AtomInput inputType="password" placeholder="Enter Password" id="password" v-model="form.pw" @blur="validate('pw')"/>
          <p v-if="!!errors.pw" class="errorMessage">{{errors.pw}}</p>
        </div>
        
        <p v-if="!!errors.general" class="errorMessage">{{errors.general}}</p>
        <div class="text-end m-3">
          <AtomButton type="button" classname="btn btn-primary" content="Login" @click="doLogin"/>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import AtomLabel from '../atoms/AtomLabel.vue'
import AtomInput from '../atoms/AtomInput.vue'
import AtomButton from "../atoms/AtomButton.vue"
import{mapActions} from 'vuex'
import * as Yup from "yup"

const loginFormSchema = Yup.object().shape({
  username: Yup.string().required('Username is required'),
  pw: Yup.string().required('Password is required'),
})

export default {
  name: "OrganismFormEmailPassword",
  components: { AtomButton, AtomLabel, AtomInput},
  data:()=>({
    form:{
      email: '',
      pw:''
    },
    errors:{
      email: '',
      pw: '',
      general: ''
    }
    
  }),
  methods:{
    ...mapActions('userModule', {login: 'login'}),
    doLogin(){
      const {username, pw} = this.form

      if(username!= '' && pw!= ''){
        this.errors.general = null
        this.login({username, pw})
      }else{
        this.errors.general = 'Please fill out the whole form'
      }
    },
    validate(field){
      loginFormSchema
        .validateAt(field, this.form)
        .then(()=>{
          this.errors[field] = ''
        })
        .catch((error)=>{
          console.log(error)
          this.errors[field] = error.message
        })

    }
    
  }
};
</script>

