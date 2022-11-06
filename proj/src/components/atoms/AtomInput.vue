<template>
    <input 
    :type="inputType" 
    class="form-control"
    :id="id"
    :placeholder="placeholder"
    >
</template>
<script>
export default {
    name: 'AtomInput', 
    props: ['inputType', 'id', 'placeholder']
}
</script>