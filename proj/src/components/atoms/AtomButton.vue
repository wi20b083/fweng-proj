<template>
    <button :type="type" :class="classname" :data-bs-dismiss="dismiss">{{content}}</button> 
</template>

<script>

export default {
    name: 'AtomButton',
    props: ['type', 'classname', 'content', 'dismiss']
}
</script>

<style scoped>

</style>
