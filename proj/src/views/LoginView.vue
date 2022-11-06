<template>
    <div class="container-fluid bg-white">
        <h1 class="centered">Login</h1>
        <div class="ps-5 pe-5">
            <OrganismFormEmailPassword/>
        </div>
    </div>
</template>

<script>
import OrganismFormEmailPassword from '../components/organisms/OrganismFormEmailPassword.vue'

export default {
   name: 'LoginView',
   components:{
        OrganismFormEmailPassword
   }
}
</script>
