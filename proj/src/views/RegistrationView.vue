<template>
    <h1 class="centered">Registration</h1>
    <OrganismFormUserData/>
</template>

<script>
import OrganismFormUserData from '../components/organisms/OrganismFormUserData.vue'

export default {
   name: 'RegistrationView',
   components:{
        OrganismFormUserData
   }
}
</script>
