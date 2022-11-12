<template>
    <div class="row">
        <div class="col">
            <AtomThumbnail :src="imagesource" :alt="alttext"/>
        </div>
        <div class="col">
            <AtomText :content="productname"/>
        </div>
        <div class="col">
            <AtomInput inputType="number" min="0" step="1" value="1"/>
        </div>
        <div class="col">
            <AtomButton content="Add" type="submit" classname="btn btn-success"/>
        </div>
    </div>
</template>

<script>
import AtomInput from '../atoms/AtomInput.vue'
import AtomText from '../atoms/AtomText.vue'
import AtomThumbnail from '../atoms/AtomThumbnail.vue'
import AtomButton from '../atoms/AtomButton.vue'

export default {
    name:'MoleculeProductRow',
    props:[
        'productname', 'imagesource', 'alttext'
    ],
    components: {
        AtomInput,
        AtomText,
        AtomThumbnail,
        AtomButton
    }
}
</script>