<template>
    <input 
    :type="inputType" 
    class="form-control"
    :id="id"
    :placeholder="placeholder"
    :value="modelValue"
    @blur="$emit('update:modelValue', $event.target.value)"
    >
</template>
<script>
export default {
    name: 'AtomInput', 
    props: ['inputType', 'id', 'placeholder', 'modelValue'],
    
}
</script>