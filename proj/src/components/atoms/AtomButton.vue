<template>
    <button :type="type" :class="classname" :data-bs-dismiss="target">{{content}}</button> 
</template>

<script>

export default {
    name: 'AtomButton',
    props: ['type', 'classname', 'content', 'target']
}
</script>

<style scoped>

</style>
