<template>
    <img :src="src" :alt="alt" class="img-fluid">
</template>

<script>
export default {
    name: 'AtomThumbnail', 
    props: ['src', 'alt']
}
</script>