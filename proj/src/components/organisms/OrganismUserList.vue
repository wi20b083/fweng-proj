<template>
    <div class="row border-bottom border-dark">
        <div class="col">ID</div>
        <div class="col">Username</div>
        <div class="col">Name</div>
        <div class="col">E-Mail</div>
        <div class="col">Status</div>
        <div class="col">Block / Unblock</div>
    </div>
    <div class="row border rounded p-3 mt-2 mb-2 userItem" v-for="user in users" v-bind:key="user.uid">
        <div class="col">{{ user.uid }}</div>
        <div class="col">{{ user.uname }}</div>
        <div class="col">{{ user.fname }} {{ user.lname }}</div>
        <div class="col">{{ user.email }}</div>
        <div class="col">{{ (user.status) ? 'unlocked': 'locked' }}</div>
        <!--<div class="col"><AtomButton class="btn btnColor" content="Edit" type="link" @click="loadEditProfile(user.id)"/></div>-->
        <div class="row" v-show="user.roles.length < 2"><AtomButton class="btn btn-secondary" content="Block/Unblock" type="button" @click="changeState(user.uid)"/></div>
    </div>
</template>

<script>
import { mapActions} from 'vuex';
import AtomButton from '../atoms/AtomButton.vue';

export default{
    name:'OrganismUserList',
    components:{
        AtomButton
    },
    props:['users'],
    methods:{
        ...mapActions('userModule', {
            changeUserState: 'changeUserState',
        }),
        changeState(uid){
            this.changeUserState(uid)
            .then(res => {
                res.error ? this.$toast.error(res.msg) : this.$toast.success(res.msg)
            })      
        },
    },
}

</script>

<style scoped>

.userItem{
    background-color: #292b2c;
    color: white;
}

</style>