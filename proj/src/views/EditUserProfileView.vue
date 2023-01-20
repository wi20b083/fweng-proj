<template>
    <div class="centered container-fluid mt-4">
        <h1>Edit Profile</h1>
        <div class="ps-5 pe-5">
            <OrganismEditUserProfile :user="getUserById(userID)"/>
        </div>
    </div>
</template>

<script>
import OrganismEditUserProfile from '@/components/organisms/OrganismEditUserProfile.vue';
import {mapGetters, mapState} from 'vuex';


export default{
    name:'EditUserProfileView',
    components:{
        OrganismEditUserProfile
    },
    computed:{
        //if normal user is logged in or admin wants to edit user we get state.user 
        ...mapState('userModule', {
            userID: state => state.userToEdit
        }),
        ...mapGetters('userModule', [
            'getUserById'
        ])
    },
    
}

</script>