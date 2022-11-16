<template>
    <li>
        <router-link :to="'/' + routeTo" class="nav-link" >{{linkName}}</router-link>
    </li>
</template>

<script>

export default{
    name: 'AtomNavItem',
    props:['routeTo', 'linkName']
}
</script>

<style scoped>

</style>
