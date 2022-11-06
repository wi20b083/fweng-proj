<template>
    <button :type="type" class="btn btn-primary">{{buttonText}}</button> 
</template>

<script>
export default {
    name: 'AtomButton',
    props: ['type', 'buttonText']
}
</script>

