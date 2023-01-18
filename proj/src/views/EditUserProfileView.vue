<template>
    <div class="centered container-fluid mt-4">
        <h1>Edit your Profile</h1>
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