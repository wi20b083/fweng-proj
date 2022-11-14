<template>
    <div class="centered container-fluid mt-3">
        <AtomHeader tag="h1" content="Login"/>
        <div class="ms-5 me-5">
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
