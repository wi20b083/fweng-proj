<template>
    <tr>
        <td class="align-middle"><AtomText :content="pid"/></td>
        <td class="align-middle"><AtomThumbnail :src="imagesource"/></td>
        <td class="align-middle"><AtomText :content="productname"/></td>
        <td class="align-middle"><AtomText :content="description"/></td>
        <td class="align-middle"><button type="link" class="btn btnColor" @click="$emit('editProduct', pid)">Edit</button></td>
        <td class="align-middle"><button type="button" class="btn btn-danger" @click="$emit('deleteProduct', pid)">Delete</button></td>
    </tr>
</template>

<script>
import AtomText from '../../atoms/AtomText.vue'
import AtomThumbnail from '../../atoms/AtomThumbnail.vue'
export default {
    name:'MoleculeAdminProductRow',
    emits:['editProduct', 'deleteProduct'],
    props:[
        'productname', 'imagesource', 'pid', 'description'
    ],
    components: {
        AtomText,
        AtomThumbnail,
    },
}
</script>