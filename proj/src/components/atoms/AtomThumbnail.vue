<template>
    <img :src="src" :alt="alt" class="img-fluid img-thumbnail" />
</template>

<script>
export default {
    name: 'AtomThumbnail', 
    props: ['src', 'alt']
}
</script>
