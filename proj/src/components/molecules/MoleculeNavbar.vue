<template>

    <nav class="navbar navbar-expand-lg bg-dark p-3" data-bs-theme="dark">
        <div class="container-fluid"> <!--position-relative-->
            <router-link class="navbar-brand" to="/">
                <AtomNavLogo/>
            </router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav text-left">
                    <li class="nav-item">
                        <router-link class="nav-link" aria-current="page" to="/">Home</router-link>
                    </li>
                    <li class="nav-item" v-if="isLogin === true && isAdmin === true">
                        <router-link class="nav-link" to="/userList">UserList</router-link>
                    </li>
                    <li><i class="bi bi-person-square" style="color: white; font-size: 150%;"></i></li>
                    <li class="nav-item" v-if="isLogin === true">
                        <router-link class="nav-link" to="/profile">Profile</router-link>
                    </li>
                    <li class="nav-item" v-if="isAdmin === true && isLogin === true">
                        <router-link class="nav-link" to="/products">Products</router-link>
                    </li>
                    <li class="nav-item" v-if="isLogin === false">
                        <router-link class="nav-link" to="/registration">Registration</router-link>
                    </li>
                    <li class="nav-item" v-if="isLogin === false">
                        <router-link class="nav-link" to="/login">Login</router-link>
                    </li>
                    <li class="nav-item" v-else>
                        <a class="nav-link" @cklick="doLogout">Logout</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
 
    
</template>

<script>
import AtomNavLogo from '../atoms/AtomNavLogo.vue';
import { mapActions, mapState } from 'vuex';
import router from '@/router';

export default{
   name: 'MoleculeNavbar',
   components:{
        AtomNavLogo,
   },
   methods:{
        ...mapActions('userModule',{ logout: 'logout'}),
        doLogout(){
            this.logout
            .then(res => {
                res.error ? this.$toast.error(res.msg) : this.$toast.success(res.msg)
            })
            router.push('login')
        }
   },
   computed:{
        ...mapState('userModule', {
            isLogin: state => state.isLogin,
            isAdmin: state => state.isAdmin
        })
   }
}
</script>

<style scoped>

nav a {
  font-weight: bold;
  color: #ffffff;
}

nav a.router-link-exact-active {
  color: #42b983;
}

nav a:hover {
    color: #107355;
}


</style>
