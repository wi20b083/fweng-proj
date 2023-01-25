<template>
    <div class="row">
        <div class="col">ID</div>
        <div class="col">Username</div>
        <div class="col">Name</div>
        <div class="col">E-Mail</div>
        <div class="col">Address</div>
        <div class="col">Status</div>
        <!--<div class="col">Edit</div>-->
        <div class="col">Block / Unblock</div>
        <div class="col">Delete</div>
    </div>
    <div class="row border rounded p-3 mt-2 mb-2 userItem" v-for="user in userList" v-bind:key="user.id">
        <div class="col">{{ user.id }}</div>
        <div class="col">{{ user.username }}</div>
        <div class="col">{{ user.fname }} {{ user.lname }}</div>
        <div class="col">{{ user.email }}</div>
        <div class="col">{{ user.street }} {{ user.streetNr }}<br>{{ user.zip }} {{ user.city }}</div>
        <div class="col">{{ user.status }}</div>
        <!--<div class="col"><AtomButton class="btn btnColor" content="Edit" type="link" @click="loadEditProfile(user.id)"/></div>-->
        <div class="col"><AtomButton class="btn btn-secondary" content="Block/Unblock" type="button" @click="changeState(user.id)"/></div>
        <div class="col"><AtomButton class="btn btn-danger" content="Delete" type="button" @click="deleteProfile(user.id)"/></div>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import AtomButton from '../atoms/AtomButton.vue';
//import router from '@/router';

export default{
    name:'OrganismUserList',
    components:{
        AtomButton
    },
    methods:{
        ...mapActions('userModule', {
            //setUserToEdit: 'setUser',
            changeUserState: 'changeUserState',
            deleteUser: 'deleteUserAsAdmin'
        }),
        /*
        loadEditProfile(id){
            this.setUserToEdit(id)
            router.push('editUserProfile')
        },*/
        changeState(id){
            this.changeUserState(id)
        },
        deleteProfile(id){
            this.deleteUser(id)
        }
    },
    computed:{
        ...mapState('userModule', {
            userList: state => state.userList
        }),
    }
}

</script>

<style scoped>

.userItem{
    background-color: #292b2c;
    color: white;
}

</style>