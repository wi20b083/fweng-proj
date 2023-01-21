<template>
    <div class="centered container-fluid mt-4" v-if="isLogin && isAdmin">
        <h1>User List</h1>
        <div class="p-4">        
            <OrganismUserList/>
        </div>
    </div>
    <div class="centered container-fluid mt-4" v-else>
        <h1>You are not authorized to see this Page.</h1>
    </div>
</template>

<script>
import OrganismUserList from '@/components/organisms/OrganismUserList.vue';
import { mapState } from 'vuex';
export default{
    name:'UserListView',
    components:{
        OrganismUserList,
    },
    computed:{
      ...mapState('userModule', {
        isLogin: state => state.isLogin,
        isAdmin: state => state.isAdmin
      })
    }
}

</script>