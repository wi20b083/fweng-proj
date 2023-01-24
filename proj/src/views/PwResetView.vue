<template>
    <div class="centered container-fluid mt-4" v-if="isLogin === true">
      <h1>Reset Password</h1>
        <div class="ms-5 me-5">
          <OrganismResetPassword/>
        </div>
    </div>
    <div class="centered container-fluid mt-4" v-else>
      <h1>You are not authorized to see this Page.</h1>
    </div>

</template>


<script>
import OrganismResetPassword from '@/components/organisms/OrganismResetPassword.vue';
import { mapState } from 'vuex';
export default{
    name:'PwResetView',
    components:{
        OrganismResetPassword
    },
    computed:{
      ...mapState('userModule', {
        isLogin: state => state.isLogin
      })
    }

}

</script>