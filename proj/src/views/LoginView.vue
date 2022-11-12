<template>
    <div class="container-fluid bg-white">
        <AtomHeader tag="h1" classname="centered" content="Login"/>
        <div class="ps-5 pe-5">
            <OrganismFormEmailPassword/>
        </div>
    </div>
</template>

<script>
import AtomHeader from '@/components/atoms/AtomHeader.vue';
import OrganismFormEmailPassword from '../components/organisms/OrganismFormEmailPassword.vue'

export default {
   name: 'LoginView',
   components:{
    OrganismFormEmailPassword,
    AtomHeader
}
}
</script>
