<template>
    <tr>
        <th scope="col" class="align-middle"><AtomText :content=id /></th>
        <td class="align-middle"><AtomThumbnail :src=imagesource :alt=alttext /></td>
        <td class="align-middle"><AtomText :content=productname /></td>
        <td class="align-middle"><AtomInput inputType="number" min="0" step="1" value="1"/></td>
        <td class="align-middle"><AtomButton content="Add" type="submit" classname="btn btn-success"/></td>
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
        'id', 'productname', 'imagesource', 'alttext'
    ],
    components: {
    AtomInput,
    AtomText,
    AtomThumbnail,
    AtomButton
}
}
</script>