<template>
    <div class="mb-3">
        <AtomLabel :for="id" :content="label"></AtomLabel>
        <AtomInput :type="inputType" :id="id" :placeholder="placeholder" v-model="userInput"/>

    </div>
</template>
<script>
import AtomInput from '../atoms/AtomInput.vue';
import AtomLabel from '../atoms/AtomLabel.vue';
export default {
    name: 'MoleculeLabelledInput', 
    props: ['id', 'inputType', 'label', 'placeholder'], 
    components:  {
        AtomLabel, 
        AtomInput
    },
    data(){
        return{
            userInput: ''
        }
    }
}
</script>