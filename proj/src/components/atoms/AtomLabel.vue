<template>
    <label 
    :for="target" 
    class="form-label"
    >
    {{content}}
    </label>
</template>
<script>
export default {
    name: 'AtomLabel', 
    props: ['target', 'content']
}
</script>