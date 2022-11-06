<template>
    <div class="mb-3">
        <AtomLabel for="test">TestLabel</AtomLabel>
        <AtomInput type="text" id="test" placeholder="TestInput"></AtomInput>
    </div>
</template>
<script>
import AtomInput from '../atoms/AtomInput.vue';
import AtomLabel from '../atoms/AtomLabel.vue';
export default {
    name: 'MolLabelledInput', 
    components:  {
        AtomLabel, 
        AtomInput
    }
}
</script>