<template>
    <div class="centered container-fluid mt-3">
        <AtomHeader tag="h1" content="Login"/>
        <div class="ms-5 me-5">
            <OrganismLoginForm/>
        </div>
    </div>
</template>

<script>
import AtomHeader from '@/components/atoms/AtomHeader.vue';
import OrganismLoginForm from '../components/organisms/OrganismLoginForm.vue'
//import {mapGetters, mapActions} from 'vuex'


export default {
    name: 'LoginView',
    components:{
        OrganismLoginForm,
        AtomHeader
    },
    methods:{
        //...mapActions(['fetchUser'])
    },
    //computed: mapGetters(['user']),
    
}
</script>
