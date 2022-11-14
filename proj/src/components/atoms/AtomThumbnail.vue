<template>
    <img :src="src" :alt="alt" class="img-fluid img-thumbnail" style="min-height: 50px; min-width: 50px" />
</template>

<script>
export default {
    name: 'AtomThumbnail', 
    props: ['src', 'alt']
}
</script>