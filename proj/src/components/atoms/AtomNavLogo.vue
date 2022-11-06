<template>
    <a class="navbar-brand" :href="link.url">
      <img src="/docs/5.2/assets/brand/bootstrap-logo.svg" alt="Logo" width="30" height="24">
    </a>
</template>

<script>

export default{
   name:'AtomNavLogo',
   props:['link']
}
</script>
