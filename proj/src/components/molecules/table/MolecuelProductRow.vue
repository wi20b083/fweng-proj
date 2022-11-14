<template>
    <tr>
        <th scope="row"></th>
        <td><AtomThumbnail :src="imagesource" :alt="alttext"/></td>
        <td><AtomText :content="productname"/></td>
        <td><AtomInput inputType="number" min="0" step="1" value="1"/></td>
        <td><AtomButton content="Add" type="submit" classname="btn btn-success"/></td>
    </tr>
</template>

<script>
import AtomInput from '../../atoms/AtomInput.vue'
import AtomText from '../../atoms/AtomText.vue'
import AtomThumbnail from '../../atoms/AtomThumbnail.vue'
import AtomButton from '../../atoms/AtomButton.vue'

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