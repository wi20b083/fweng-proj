<template>
    <div>
        <AtomInput type="file" accept="image/*" />
    </div>
</template>

<script>
import AtomInput from '../atoms/AtomInput.vue';

export default{
    name:'MoleculeFileUpload',
    components:{
        AtomInput
    }
}

</script>