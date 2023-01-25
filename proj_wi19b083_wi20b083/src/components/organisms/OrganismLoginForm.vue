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
          <AtomInput inputType="password" placeholder="Enter Password" id="password" v-model="form.password" @blur="validate('password')"/>
          <p v-if="!!errors.password" class="errorMessage">{{errors.password}}</p>
        </div>
        
        <p v-if="!!errors.general" class="errorMessage">{{errors.general}}</p>
        <div class="text-end m-3">
          <AtomButton type="button" classname="btn btnColor" content="Login" @click="doLogin"/>
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
  password: Yup.string().required('Password is required'),
})

export default {
  name: "OrganismFormEmailPassword",
  components: { AtomButton, AtomLabel, AtomInput},
  data:()=>({
    form:{
      username: '',
      password:''
    },
    errors:{
      username: '',
      password: '',
      general: ''
    }
    
  }),
  methods:{
    ...mapActions('userModule', {login: 'login'}),
    doLogin(){
      const {username, password} = this.form
      if(username!= '' && password!= ''){
        this.errors.general = null
        this.login({username, password})
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
    
  },
  /*
  computed:{
        ...mapState('loginModule', {
            isLogin: state => state.isLogin,
            username: state => state.user.username
        })
  },*/
};
</script>

