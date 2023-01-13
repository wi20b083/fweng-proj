<template>
    <nav class="navbar navbar-expand-lg bg-dark p-3" data-bs-theme="dark">
        <div class="container-fluid">
            <router-link class="navbar-brand" to="/">
                <AtomNavLogo/>
            </router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item">
                <router-link class="nav-link" aria-current="page" to="/">Home</router-link>
                </li>
                <li class="nav-item">
                <router-link class="nav-link" to="/imprint">Imprint</router-link>
                </li>
                <li class="nav-item">
                <router-link class="nav-link" aria-current="page" to="/help">Help</router-link>
                </li>
                <li class="nav-item">
                <router-link class="nav-link" to="/registration">Registration</router-link>
                </li>
                <li class="nav-item">
                <router-link class="nav-link" to="/login">Login</router-link>
                </li>
                <li class="nav-item">
                <router-link class="nav-link" to="/products">Products</router-link>
                </li>
                <li class="nav-item">
                <router-link class="nav-link" to="/auctions">Auctions</router-link>
                </li>
                <li class="nav-item">
                <router-link class="nav-link" to="/profile">Profile</router-link>
                </li>
                <li class="nav-item">
                <router-link class="nav-link" to="/editUserProfile">EditProfile</router-link>
                </li>
            </ul>
            </div>
        </div>
    </nav>
    
    
</template>

<script>
import AtomNavLogo from '../atoms/AtomNavLogo.vue';
//import AtomNavItem from '../atoms/AtomNavItem.vue'

export default{
   name: 'MoleculeNavbar',
   components:{
        AtomNavLogo,
        //AtomNavItem
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
    color: #1c4f38;
}


</style>
