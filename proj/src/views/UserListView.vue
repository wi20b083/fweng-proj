<template>
    <div class="centered container-fluid mt-4">
        <h1>User List</h1>
        <div class="p-4">
            
            <OrganismUserList/>

            <!--<OrganismEditUserProfile/>-->

        </div>
    </div>
</template>

<script>
import OrganismUserList from '@/components/organisms/OrganismUserList.vue';
//import OrganismEditUserProfile from '@/components/organisms/OrganismEditUserProfile.vue';

export default{
    name:'UserListView',
    components:{
        OrganismUserList,
        //OrganismEditUserProfile
    }
}

</script>