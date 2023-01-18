<template>
    <div class="centered container-fluid mt-4">
        <h1>Login</h1>
        <div class="ms-5 me-5">
            <OrganismLoginForm/>
        </div>
    </div>
</template>

<script>
import OrganismLoginForm from '../components/organisms/OrganismLoginForm.vue'


export default {
    name: 'LoginView',
    components:{
        OrganismLoginForm,
    },  
}
</script>
