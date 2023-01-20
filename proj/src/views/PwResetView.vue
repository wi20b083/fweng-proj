<template>
    <div class="centered container-fluid mt-4">
        <OrganismResetPassword/>
    </div>
</template>


<script>
import OrganismResetPassword from '@/components/organisms/OrganismResetPassword.vue';

export default{
    name:'PwResetView',
    components:{
        OrganismResetPassword
    }
}

</script>