<template>
    <div class="centered container-fluid mt-4" v-if="isLogin === true && isAdmin === true">
        <h1>User List</h1>
        <div class="p-4">        
            <OrganismUserList :users="users"/>
        </div>
    </div>
    <div class="centered container-fluid mt-4" v-else>
        <h1>You are not authorized to see this Page.</h1>
    </div>
</template>

<script>
import OrganismUserList from '@/components/organisms/OrganismUserList.vue';
import {mapState } from 'vuex';
import { useStore } from 'vuex';
import { computed } from '@vue/reactivity';
export default{
    name:'UserListView',
    components:{
        OrganismUserList,
    },
    setup () {
        const store = useStore()
        const users = computed(()=> store.state.userModule.userList)
        store.dispatch('userModule/getAll')
        return{
            users
        }
    },
    computed:{
      ...mapState('userModule', {
        isLogin: state => state.isLogin,
        isAdmin: state => state.isAdmin
      })
    },
    
}

</script>