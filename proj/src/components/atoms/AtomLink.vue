<template>
    <a :href="link">{{content}}</a>
</template>
<script>
export default {
    name: 'AtomLink',
    props: ['link', 'content']
}
</script>