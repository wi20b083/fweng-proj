<template>
    
        <router-link :to="'/' + routeTo" class="nav-link" >{{link.name}}</router-link>
    
</template>

<script>

export default{
    name: 'AtomNavItem',
    props:['routeTo']
}
</script>
