<template>
    
        <router-link to="/" class="nav-link" >{{link.name}}</router-link>
    
</template>

<script>

export default{
    name: 'AtomNavItem',
    props:['link']
}
</script>
