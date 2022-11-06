<template>
    <div>
        <button class="btn btn-primary">{{buttonText}}</button>
    </div>
</template>

<script>

export default {
    name: 'AtomButton',
    props:{
        buttonText: String
    }
}
</script>

<style scoped>

</style>
