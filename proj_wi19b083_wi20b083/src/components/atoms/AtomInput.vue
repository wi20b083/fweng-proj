<template>
    <input 
    :type="inputType" 
    class="form-control"
    :id="id"
    :placeholder="placeholder"
    v-model="userInput"
    >
</template>
<script>
export default {
    name: 'AtomInput', 
    props: ['inputType', 'id', 'placeholder'],
    data(){
        return{
            userInput: ''
        }
    }
}
</script>