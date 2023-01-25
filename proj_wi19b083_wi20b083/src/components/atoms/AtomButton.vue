<template>
    <button :type="type" :class="classname">{{content}}</button> 
</template>

<script>

export default {
    name: 'AtomButton',
    props: ['type', 'classname', 'content']
}
</script>

<style scoped>

</style>
