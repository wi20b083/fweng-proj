<template>
    <li class="nav-item">
        <a class="nav-link" :href="link.url">{{link.name}}</a>
    </li>
</template>

<script>

export default{
    name: 'A-NavItem',
    props:['link']
}
</script>
