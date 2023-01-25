<template>
    <div class="centered container-fluid mt-4" v-if="isLogin === false">
        <h1>Login</h1>
        <div class="ms-5 me-5">
            <OrganismLoginForm/>
        </div>
    </div>
    <div class="centered container-fluid mt-4" v-else>
      <h1>You are allready logged in!</h1>
    </div>
</template>

<script>
import OrganismLoginForm from '../components/organisms/OrganismLoginForm.vue'
import { mapState } from 'vuex';

export default {
    name: 'LoginView',
    components:{
        OrganismLoginForm,
    }, 
    computed:{
        ...mapState('userModule', {
            isLogin: state => state.isLogin
        }),
    }
}
</script>
