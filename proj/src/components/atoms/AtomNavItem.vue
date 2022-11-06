<template>
    <li class="nav-item">
        <router-link to="/" class="nav-link" >{{link.name}}</router-link>
    </li>
</template>

<script>

export default{
    name: 'AtomNavItem',
    props:['link']
}
</script>
