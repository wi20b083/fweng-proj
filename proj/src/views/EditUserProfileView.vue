<template>
    <div class="centered container-fluid mt-4">
        <OrganismEditUserProfile/>
    </div>
</template>

<script>
import OrganismEditUserProfile from '@/components/organisms/OrganismEditUserProfile.vue';

export default{
    name:'EditUserProfileView',
    components:{
        OrganismEditUserProfile
    }
}

</script>