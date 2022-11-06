<template>
    <p :class="class">{{content}}</p>
</template>
<script>
export default {
    name: 'AtomText',
    props: ['class', 'content']
}
</script>