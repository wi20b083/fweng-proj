<template>
    <p :class="classname">{{content}}</p>
</template>
<script>
export default {
    name: 'AtomText',
    props: ['classname', 'content']
}
</script>