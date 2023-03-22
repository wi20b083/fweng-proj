<template>
  <div class="m-5 text-start ">
    <form @submit.prevent="doLogin">
      <div class="row mb-3">
        <AtomLabel for="uname" content="Username"/><br>
        <AtomInput inputType="text" placeholder="Mustermax99" id="uname" v-model="form.uname" @blur="validate('uname')"/>
        <p v-if="!!errors.uname" class="errorMessage">{{errors.uname}}</p>
      </div>
      <div class="row mb-3">
        <AtomLabel for="pw" content="Password"/><br>
        <AtomInput inputType="password" placeholder="Enter Password" id="pw" v-model="form.pw" @blur="validate('pw')"/>
        <p v-if="!!errors.pw" class="errorMessage">{{errors.pw}}</p>
      </div>
      <div class="text-end m-3">
        <AtomButton type="submit" classname="btn btnColor" content="Login"/>
      </div>
    </form>
  </div>
</template>

<script>
import AtomLabel from '../atoms/AtomLabel.vue'
import AtomInput from '../atoms/AtomInput.vue'
import AtomButton from "../atoms/AtomButton.vue"
import{mapActions} from 'vuex'
import * as Yup from "yup"
import router from '@/router'

const loginFormSchema = Yup.object().shape({
  uname: Yup.string().required('Username is required'),
  pw: Yup.string().required('Password is required'),
})

export default {
  name: "OrganismFormEmailPassword",
  components: { AtomButton, AtomLabel, AtomInput},
  data:()=>({
    form:{
      uname: '',
      pw:''
    },
    errors:{
      uname: '',
      pw: '',
    }
  }),
  methods:{
    ...mapActions('userModule', {login: 'login'}),
    doLogin(){
      loginFormSchema
        .validate(this.form, { abortEarly: false })
        .then(() => {
            console.log("no validation errors");

            const user = {
              uname: this.form.uname,
              pw: this.form.pw,
            };
            this.login(user)
            .then(res => {
              res.error ? this.$toast.error(res.msg) : (this.$toast.success(res.msg) && router.push('/'))
              
            })    
          
        })
        .catch((err) => {
          err.inner.forEach((error) => {
            this.errors = { ...this.errors, [error.path]: error.message };
          });
        });
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

